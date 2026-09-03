import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "architect-professional" as const;
const DOMAIN = "Claude Models, Prompting & Context Engineering" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Applies model selection and prompt engineering at an architectural level: not just writing one good prompt, but designing prompt/template systems and context strategies that scale across an application.",
  concepts: [
    {
      taskStatement: "Select appropriate Claude models based on trade-offs",
      summary:
        "Model choice is a per-component decision, not a one-time global setting — a pipeline might use a fast/cheap tier for classification and a top-tier model only for the final synthesis step, matching each component's actual reasoning demand rather than defaulting to the most capable model everywhere.",
    },
    {
      taskStatement: "Design system prompts, templates, and guardrails",
      summary:
        "At scale, prompts should be modular templates (shared structure, variable content injected per request) rather than hand-written per use case, with guardrails (explicit refusal/escalation instructions, output constraints) built into the shared template so every consumer of it inherits the same safety baseline.",
    },
    {
      taskStatement: "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
      summary:
        "Zero-shot suits tasks the model already handles reliably from instructions alone. Few-shot stabilizes format and handles ambiguous edge cases by example. Chain-of-thought (asking the model to reason step by step before answering) improves complex reasoning tasks at the cost of latency and tokens — an architectural decision to weigh against the accuracy gain.",
    },
    {
      taskStatement: "Optimize context windows and manage token usage",
      summary:
        "As context grows, both cost and (past a point) reliability degrade — this is context rot, not just a cost problem. Architecture-level mitigations include trimming what's placed in context per call, summarizing or compacting long-running conversations, and structuring prompts so stable content precedes variable content (enabling caching).",
    },
    {
      taskStatement: "Implement prompt reuse strategies (caching, modular prompts, Skills)",
      summary:
        "Prompt caching reuses a stable prefix across requests to cut latency and cost — it only helps if the architecture actually places static content (system prompt, reference docs) before the variable part of each request. Modular prompts and Skills both let you package and reuse a piece of prompt logic across many call sites instead of copy-pasting it, which also makes updates consistent across the whole system.",
    },
  ],
  resources: [RESOURCES.promptCaching, RESOURCES.contextWindows, RESOURCES.skills],
};
