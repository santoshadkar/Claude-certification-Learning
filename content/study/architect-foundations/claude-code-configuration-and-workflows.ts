import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "architect-foundations" as const;
const DOMAIN = "Claude Code Configuration & Workflows" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Tests hands-on fluency configuring Claude Code for a real team: memory hierarchy, custom commands/skills, scoped rules, choosing plan mode vs. direct execution, iterating well, and wiring Claude Code into CI/CD.",
  concepts: [
    {
      taskStatement: "3.1",
      summary:
        "CLAUDE.md loads at user (~/.claude/CLAUDE.md, personal, not shared), project (.claude/CLAUDE.md or root CLAUDE.md, shared via version control), and directory scope. A teammate not receiving expected instructions is a classic symptom of instructions living at user scope instead of project scope. @import keeps files modular by pulling in specific standards per package; .claude/rules/ is the alternative to one monolithic file, splitting it into topic files like testing.md or api-conventions.md.",
    },
    {
      taskStatement: "3.2",
      summary:
        "Project-scoped commands/skills live in .claude/commands/ or .claude/skills/ and are shared via version control; user-scoped ones live under ~/.claude/ and stay personal. SKILL.md frontmatter options include context: fork (runs the skill in an isolated sub-agent context so its output doesn't pollute the main conversation — useful for verbose analysis or exploratory brainstorming), allowed-tools (restricts what the skill can do, e.g. limiting it to file writes to prevent destructive actions), and argument-hint (prompts for required parameters). Choose a skill for on-demand, task-specific workflows and CLAUDE.md for always-loaded universal standards.",
    },
    {
      taskStatement: "3.3",
      summary:
        ".claude/rules/ files can carry YAML frontmatter with a paths glob so a rule only loads when Claude touches matching files — this beats directory-level CLAUDE.md for conventions that apply to a file type scattered across the codebase (e.g., all *.test.tsx files, regardless of which directory they're in), since a directory-bound file can't express that pattern.",
    },
    {
      taskStatement: "3.4",
      summary:
        "Plan mode fits complex, multi-file, or architecturally ambiguous work (a microservice restructuring, a migration touching 40+ files, choosing between infrastructure approaches) — it lets you explore and design before committing to changes, avoiding costly rework from late-discovered constraints. Direct execution fits well-scoped, well-understood changes (a single-file bug fix with a clear stack trace). The Explore subagent isolates verbose discovery output from the main conversation during multi-phase investigation, and it's common to combine plan mode for investigation with direct execution for the implementation that follows.",
    },
    {
      taskStatement: "3.5",
      summary:
        "When prose descriptions produce inconsistent results, 2-3 concrete input/output examples communicate the transformation far more reliably than more prose. Test-driven iteration (write tests first, then iterate against failures) and the interview pattern (have Claude ask clarifying questions before implementing in an unfamiliar domain) both surface considerations before code is written rather than after. When multiple issues interact, address them together in one detailed message; when they're independent, fix them sequentially so each fix is easy to verify.",
    },
    {
      taskStatement: "3.6",
      summary:
        "The -p (--print) flag runs Claude Code non-interactively so a CI job doesn't hang waiting for input. --output-format json with --json-schema produces machine-parseable output suitable for posting structured findings as inline PR comments. Feed CLAUDE.md the project context CI needs (testing standards, fixture conventions, review criteria) to get useful automated reviews and test generation. A session that generated code is a worse reviewer of that same code than a fresh, independent instance, since it retains the reasoning that led to its own decisions.",
    },
  ],
  resources: [RESOURCES.claudeMdAndMemory, RESOURCES.skills, RESOURCES.claudeCodeOverview],
};
