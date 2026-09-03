import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "associate-foundations" as const;
const DOMAIN = "Configuration and Knowledge Management" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Covers setting up a Claude Project properly — instructions, connected knowledge, and ongoing upkeep — so that recurring work doesn't require re-explaining context every single time.",
  concepts: [
    {
      taskStatement: "Configure Claude Projects with instructions and knowledge sources",
      summary:
        "A Project's custom instructions set standing context (role, tone, constraints) that applies to every conversation inside it, and its knowledge sources give Claude reference material to ground answers in, instead of relying on general training knowledge. Both should be specific to the recurring task the Project exists for.",
    },
    {
      taskStatement: "Manage uploaded knowledge and connectors (e.g., Google Drive, Gmail)",
      summary:
        "Connectors let a Project pull in live or frequently-updated information (a shared drive, an inbox) rather than requiring manual re-uploads. This is more maintainable for fast-changing material, but it also means being deliberate about what's connected — sensitive material shouldn't be connected just because it's convenient.",
    },
    {
      taskStatement: "Create effective system-level instructions",
      summary:
        "Good project instructions are specific and structured (role, constraints, output format, things to avoid) rather than a vague personality description. Instructions that conflict with each other, or that are too long and generic, get followed less consistently than short, concrete ones.",
    },
    {
      taskStatement: "Inform, maintain, and update Claude configurations, knowledge sources, and instructions",
      summary:
        "Configuration isn't 'set once' — as a team's process, tone, or reference documents change, the Project's instructions and knowledge should be updated to match, or the Project starts producing outputs based on stale assumptions.",
    },
  ],
  resources: [RESOURCES.helpCenter],
};
