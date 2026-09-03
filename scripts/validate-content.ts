/**
 * Build-time content validator.
 *
 * Checks, per Phase 3 of the project plan:
 *  1. Every question satisfies the Zod schema (required fields, consistent
 *     option/answer shape).
 *  2. `domain` and `taskStatement` reference a real domain / task-statement
 *     key from that certification's exam-guide.json.
 *  3. `id` is globally unique.
 *  4. No near-duplicate stems within the same certification.
 *  5. Reports (and, with --require-minimums, enforces) each domain having at
 *     least content/targets.json's questionsPerDomainTarget questions.
 *  6. Study modules: schema-valid, cross-referenced the same way, and every
 *     domain across all four certifications has exactly one (hard failure
 *     if not — unlike questions, study content isn't generated in batches).
 *
 * Run manually: npm run validate:content
 * Enforce completion gate: npm run validate:content -- --require-minimums
 */
import fs from "node:fs";
import path from "node:path";
import { allQuestions } from "../content/questions";
import { questionSchema, type QuestionInput } from "../content/schema/question";
import { allStudyModules } from "../content/study";
import { studyModuleSchema, type StudyModuleInput } from "../content/schema/study";
import { loadExamGuides } from "./lib/exam-guides";
import { findNearDuplicates } from "./lib/similarity";

const ROOT = path.resolve(__dirname, "..");
const DUPLICATE_THRESHOLD = 0.75;
const requireMinimums = process.argv.includes("--require-minimums");

let hasErrors = false;

function fail(message: string) {
  hasErrors = true;
  console.error(`  \x1b[31m✗\x1b[0m ${message}`);
}

function warn(message: string) {
  console.warn(`  \x1b[33m!\x1b[0m ${message}`);
}

function ok(message: string) {
  console.log(`  \x1b[32m✓\x1b[0m ${message}`);
}

console.log(`\nValidating ${allQuestions.length} question(s)...\n`);

// 1. Schema validation
console.log("Schema validation");
const validQuestions: QuestionInput[] = [];
for (const q of allQuestions) {
  const result = questionSchema.safeParse(q);
  if (!result.success) {
    const id = typeof (q as { id?: unknown }).id === "string" ? (q as { id: string }).id : "(missing id)";
    for (const issue of result.error.issues) {
      fail(`[${id}] ${issue.path.join(".")}: ${issue.message}`);
    }
  } else {
    validQuestions.push(result.data);
  }
}
if (hasErrors) {
  console.log(`  ${validQuestions.length}/${allQuestions.length} passed schema validation.\n`);
} else {
  ok(`All ${allQuestions.length} questions passed schema validation.`);
}

// 2. Cross-reference domain / taskStatement against source exam guides
console.log("\nCross-referencing domains and task statements against exam guides");
const examGuides = loadExamGuides();
for (const q of validQuestions) {
  const guide = examGuides[q.certificationSlug];
  const domain = guide.domains.find((d) => d.name === q.domain);
  if (!domain) {
    fail(
      `[${q.id}] domain "${q.domain}" does not match any domain in content/source/${q.certificationSlug}/exam-guide.json`
    );
    continue;
  }
  if (!domain.taskStatementKeys.includes(q.taskStatement)) {
    fail(
      `[${q.id}] taskStatement "${q.taskStatement}" is not a recognized objective/skill/task-statement key for domain "${q.domain}"`
    );
  }
}
if (!hasErrors) ok("All domain/taskStatement references resolved.");

// 3. Global unique ids
console.log("\nChecking id uniqueness");
const idCounts = new Map<string, number>();
for (const q of validQuestions) {
  idCounts.set(q.id, (idCounts.get(q.id) ?? 0) + 1);
}
let duplicateIdsFound = false;
for (const [id, count] of idCounts) {
  if (count > 1) {
    duplicateIdsFound = true;
    fail(`id "${id}" is used by ${count} questions — ids must be globally unique`);
  }
}
if (!duplicateIdsFound) ok("All ids are unique.");

// 4. Near-duplicate stem detection, per certification
console.log(`\nChecking for near-duplicate stems (Jaccard similarity >= ${DUPLICATE_THRESHOLD})`);
const byCert = new Map<string, QuestionInput[]>();
for (const q of validQuestions) {
  const list = byCert.get(q.certificationSlug) ?? [];
  list.push(q);
  byCert.set(q.certificationSlug, list);
}
let duplicatesFound = false;
for (const [cert, list] of byCert) {
  const duplicates = findNearDuplicates(list, (q) => q.stem, DUPLICATE_THRESHOLD);
  for (const dup of duplicates) {
    duplicatesFound = true;
    fail(
      `[${cert}] "${dup.a.id}" and "${dup.b.id}" have near-identical stems (similarity ${dup.similarity.toFixed(2)}) — rewrite one or merge them`
    );
  }
}
if (!duplicatesFound) ok("No near-duplicate stems found.");

// 5. Per-domain minimum count report
console.log("\nPer-domain question counts vs. target");
const targets = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content", "targets.json"), "utf-8")
) as { questionsPerDomainTarget: number };
const target = targets.questionsPerDomainTarget;

let anyBelowTarget = false;
for (const [certSlug, guide] of Object.entries(examGuides)) {
  console.log(`\n  ${certSlug}`);
  for (const domain of guide.domains) {
    const count = validQuestions.filter(
      (q) => q.certificationSlug === certSlug && q.domain === domain.name
    ).length;
    const meetsTarget = count >= target;
    if (!meetsTarget) anyBelowTarget = true;
    const line = `    ${meetsTarget ? "\x1b[32m✓\x1b[0m" : "\x1b[33m·\x1b[0m"} ${domain.name}: ${count}/${target}`;
    console.log(line);
  }
}

if (anyBelowTarget) {
  const message = "One or more domains are below the per-domain target — expected while content is still being generated in batches.";
  if (requireMinimums) {
    fail(`\n${message} Failing because --require-minimums was passed.`);
  } else {
    console.log(`\n`);
    warn(message);
  }
}

// 6. Study modules: schema, cross-reference, and one-per-domain coverage
console.log("\nValidating study modules");
const validStudyModules: StudyModuleInput[] = [];
for (const m of allStudyModules) {
  const result = studyModuleSchema.safeParse(m);
  if (!result.success) {
    const label = `${(m as { certificationSlug?: unknown }).certificationSlug ?? "?"}/${(m as { domain?: unknown }).domain ?? "?"}`;
    for (const issue of result.error.issues) {
      fail(`[study:${label}] ${issue.path.join(".")}: ${issue.message}`);
    }
  } else {
    validStudyModules.push(result.data);
  }
}

for (const m of validStudyModules) {
  const guide = examGuides[m.certificationSlug];
  const domain = guide.domains.find((d) => d.name === m.domain);
  if (!domain) {
    fail(
      `[study:${m.certificationSlug}/${m.domain}] domain does not match any domain in content/source/${m.certificationSlug}/exam-guide.json`
    );
    continue;
  }
  for (const concept of m.concepts) {
    if (!domain.taskStatementKeys.includes(concept.taskStatement)) {
      fail(
        `[study:${m.certificationSlug}/${m.domain}] concept taskStatement "${concept.taskStatement}" is not a recognized key for this domain`
      );
    }
  }
}

let missingStudyModule = false;
for (const [certSlug, guide] of Object.entries(examGuides)) {
  for (const domain of guide.domains) {
    const modules = validStudyModules.filter(
      (m) => m.certificationSlug === certSlug && m.domain === domain.name
    );
    if (modules.length === 0) {
      missingStudyModule = true;
      fail(`[study:${certSlug}/${domain.name}] no study module found for this domain`);
    } else if (modules.length > 1) {
      missingStudyModule = true;
      fail(`[study:${certSlug}/${domain.name}] ${modules.length} study modules found — expected exactly 1`);
    }
  }
}
if (!missingStudyModule && validStudyModules.length === allStudyModules.length) {
  ok(`All ${validStudyModules.length} study modules valid, cross-referenced, and covering every domain.`);
}

console.log("\n" + "-".repeat(60));
if (hasErrors) {
  console.error("\x1b[31mContent validation FAILED.\x1b[0m\n");
  process.exit(1);
} else {
  console.log("\x1b[32mContent validation passed.\x1b[0m\n");
  process.exit(0);
}
