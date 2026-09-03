import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "architect-professional" as const;
const DOMAIN = "Developer Productivity & Operational Enablement" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "The smallest domain (7%): the architect's role in making the team building and running the system more effective, not just designing the system itself.",
  concepts: [
    {
      taskStatement: "Configure Claude tools and environments for teams (e.g., Claude Code)",
      summary:
        "Standardizing team-wide configuration (shared CLAUDE.md conventions, shared MCP servers, shared skills/commands) turns individually-discovered good practice into something every team member benefits from automatically, rather than everyone re-solving the same setup problem.",
    },
    {
      taskStatement: "Improve developer workflows using AI-assisted tooling",
      summary:
        "Identify recurring, well-scoped developer tasks (code review, test generation, dependency updates, documentation) that are good fits for AI-assisted automation, and wire them into the team's actual workflow (CI/CD, PR process) rather than leaving them as an individual habit.",
    },
    {
      taskStatement: "Support debugging and operational issue resolution",
      summary:
        "When a production issue involves a Claude-powered component, the architect's job includes helping the team distinguish an application-layer bug from a model-behavior issue, and knowing which logs/traces actually show what happened in an agentic call chain — the same integration-layer-vs-model-output diagnostic principle developers apply at request scale, applied at incident scale.",
    },
  ],
  resources: [RESOURCES.claudeCodeOverview, RESOURCES.helpCenter],
};
