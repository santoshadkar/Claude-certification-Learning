import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "developer-foundations" as const;
const DOMAIN = "Model Selection and Optimization" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "The second-largest domain (16.8%): the fundamentals of how LLMs actually work, and the concrete levers (model tier, caching, batching, token budgeting) for controlling cost, latency, and quality in a real application.",
  concepts: [
    {
      taskStatement: "LLM Fundamentals",
      summary:
        "Tokens are the model's unit of text; context windows bound how much conversation/data fits in a single request; sampling and non-determinism mean the same prompt can produce slightly different output across calls; next-token generation is the underlying mechanism producing output one piece at a time. Model options like fast mode, extended/adaptive thinking, and effort levels trade reasoning depth against latency and cost. Zero-shot (no examples), single-shot (one example), and multi-shot (several examples) prompting are the basic levers for showing the model what output format/quality you want instead of just describing it.",
    },
    {
      taskStatement: "Technical Fundamentals",
      summary:
        "Claude SDKs are thin wrappers over REST APIs (and, for real-time interfaces, websockets) — understanding the underlying HTTP/streaming mechanics helps you debug SDK behavior instead of treating the SDK as an opaque black box.",
    },
    {
      taskStatement: "Model Selection and Tradeoffs",
      summary:
        "Match model tier to task: Opus for the hardest reasoning/coding/analysis, Sonnet for strong general-purpose work at good speed, Haiku for high-volume straightforward tasks. Also check adaptive-thinking support when a task needs deeper reasoning. Model releases can include breaking behavior changes (a prompt tuned for one model version may behave differently on the next), so re-validate after upgrading rather than assuming stability.",
    },
    {
      taskStatement: "Cost and Token Management",
      summary:
        "Track token usage per request to model cost realistically, and use caching (prompt caching for repeated stable prefixes, cache check-pointing in longer agentic sessions) to cut cost and latency on content that doesn't change between calls. Cost optimization is a design decision made up front (what to cache, what model tier, real-time vs. batch), not an afterthought.",
    },
  ],
  resources: [RESOURCES.modelsOverview, RESOURCES.promptCaching, RESOURCES.contextWindows],
};
