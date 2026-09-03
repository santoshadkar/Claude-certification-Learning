import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "developer-foundations" as const;
const DOMAIN = "Claude Code" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "A small but concrete domain: operating Claude Code itself as a development tool — its core building blocks, its interaction modes, and how it's configured for a project.",
  concepts: [
    {
      taskStatement: "Claude Code Operation",
      summary:
        "Know the core components — Rules (project conventions), Skills (on-demand packaged workflows, invoked with /name or auto-loaded when relevant), Commands (slash commands), Agents (subagents for focused delegation), and Agent Memory (auto memory that persists learnings across sessions). Know the interaction modes: interactive session management, built-in and custom slash commands, headless mode (`-p`/`--print` for non-interactive/scripted runs), streaming mode, and auto-mode. Configuration lives in the CLAUDE.md hierarchy (managed policy → user → project → local) and settings.json, and a new repository is initialized (e.g., via `/init`) to generate a starting CLAUDE.md from the codebase itself.",
    },
  ],
  resources: [RESOURCES.claudeCodeOverview, RESOURCES.claudeMdAndMemory, RESOURCES.skills],
};
