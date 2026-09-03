import fs from "node:fs";
import path from "node:path";
import { CERTIFICATION_SLUGS, type CertificationSlug } from "../../content/schema/question";

const ROOT = path.resolve(__dirname, "..", "..");

export interface DomainRef {
  name: string;
  /** Valid values for a question's `taskStatement` field within this domain. */
  taskStatementKeys: string[];
}

export interface ExamGuideRef {
  slug: CertificationSlug;
  domains: DomainRef[];
}

/**
 * Loads each content/source/<slug>/exam-guide.json and derives, per domain,
 * the canonical set of valid `taskStatement` keys a question may reference:
 *  - objectives[]        -> the objective string itself
 *  - skills[]             -> the skill's `name`
 *  - taskStatements[]     -> the task statement's `id` (e.g. "1.3")
 */
export function loadExamGuides(): Record<CertificationSlug, ExamGuideRef> {
  const result = {} as Record<CertificationSlug, ExamGuideRef>;

  for (const slug of CERTIFICATION_SLUGS) {
    const filePath = path.join(ROOT, "content", "source", slug, "exam-guide.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw) as {
      domains: Array<{
        name: string;
        objectives?: string[];
        skills?: Array<{ name: string }>;
        taskStatements?: Array<{ id: string }>;
      }>;
    };

    const domains: DomainRef[] = data.domains.map((d) => {
      let keys: string[] = [];
      if (Array.isArray(d.objectives)) keys = d.objectives;
      else if (Array.isArray(d.skills)) keys = d.skills.map((s) => s.name);
      else if (Array.isArray(d.taskStatements)) keys = d.taskStatements.map((t) => t.id);
      return { name: d.name, taskStatementKeys: keys };
    });

    result[slug] = { slug, domains };
  }

  return result;
}
