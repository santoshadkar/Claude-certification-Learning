import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "associate-foundations" as const;
const DOMAIN = "Product and Model Selection" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Covers choosing the right tool for the job among Claude's product surface (chat, Projects, research mode, artifacts) and model tier (Haiku/Sonnet/Opus), plus the practical reality of finite context and memory.",
  concepts: [
    {
      taskStatement: "Select appropriate Claude product features (Projects, research mode, chat, artifacts)",
      summary:
        "Plain chat suits one-off questions. Projects suit recurring work that needs persistent instructions and reference material (a role, a style guide, a set of docs) so you're not re-explaining context every time. Research mode suits open-ended questions needing broader information gathering. Artifacts suit content meant to be viewed, edited, or reused as a standalone piece (documents, code, diagrams) rather than read once in the chat stream.",
    },
    {
      taskStatement: "Differentiate between Claude model types (Haiku, Sonnet, Opus)",
      summary:
        "The three tiers trade off capability against speed and cost. Haiku is fastest and cheapest, suited to high-volume, straightforward tasks. Sonnet balances strong general capability with speed for everyday work. Opus is the most capable, suited to the hardest reasoning, coding, and analysis tasks where quality matters more than speed or cost. The exam tests matching task difficulty to tier, not just picking the 'best' model every time.",
    },
    {
      taskStatement: "Align model selection with task requirements (cost, speed, quality)",
      summary:
        "Always defaulting to the most capable model wastes budget and adds latency on tasks that don't need it — for high-volume, low-complexity work (short replies, simple classification) a faster/cheaper tier is the correct choice, not a compromise. Reserve the top tier for genuinely hard reasoning, ambiguous judgment calls, or high-stakes output.",
    },
    {
      taskStatement:
        "Understand and manage context limitations and memory considerations (when to restart, summarize, or persist)",
      summary:
        "A conversation has a finite context window; as it grows very long, earlier details can become harder for the model to weigh evenly, and irrelevant back-and-forth can crowd out what actually matters. When a conversation has drifted or grown unwieldy, summarizing key facts into a fresh conversation is often more reliable than continuing to pile on turns. Persistent context that should survive across sessions (standing instructions, reference material) belongs in a Project's configuration, not in one long-running chat.",
    },
  ],
  resources: [RESOURCES.modelsOverview, RESOURCES.helpCenter],
};
