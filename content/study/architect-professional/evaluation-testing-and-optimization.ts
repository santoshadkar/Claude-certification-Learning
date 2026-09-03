import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "architect-professional" as const;
const DOMAIN = "Evaluation, Testing & Optimization" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Covers building the measurement and improvement loop around a Claude system: what to measure, how to test it, how to diagnose it when it breaks, and how to tune cost/latency/quality once it's in production.",
  concepts: [
    {
      taskStatement: "Define evaluation metrics (accuracy, latency, cost, safety, security)",
      summary:
        "A production system needs metrics across all five dimensions, not just accuracy — a system that's accurate but too slow or too expensive to run at the required volume has still failed its requirement. Safety and security metrics (refusal correctness, injection resistance) deserve the same explicit tracking as quality metrics, not an afterthought.",
    },
    {
      taskStatement: "Design evaluation datasets and test frameworks using mixed methodologies",
      summary:
        "Exact-match and string-based grading work for categorical tasks; similarity-based grading (e.g., embeddings) suits paraphrase-tolerant checks; LLM-graded evals suit subjective qualities (tone, helpfulness) that don't reduce to a simple rule. A robust framework mixes these rather than forcing every test case through one grading method that doesn't fit it.",
    },
    {
      taskStatement: "Conduct A/B testing and iterative improvements",
      summary:
        "Prompt and model changes should be validated against the eval set before rollout, and ideally A/B tested in production for changes with real behavioral risk — shipping a 'better' prompt based on a handful of manual spot-checks is how regressions reach users undetected.",
    },
    {
      taskStatement: "Diagnose system issues (prompt failure, hallucinations, model mismatch)",
      summary:
        "Distinguish where a failure originates: a prompt that's ambiguous or missing constraints, a hallucination (confident fabrication not grounded in provided context), or a model mismatch (the task genuinely exceeds the chosen tier's reasoning capability). Each has a different fix — clarify the prompt, add grounding/retrieval, or upgrade the model tier — so misdiagnosing the category wastes the fix.",
    },
    {
      taskStatement: "Optimize token usage, latency, and cost-performance trade-offs",
      summary:
        "Concrete levers: prompt caching for repeated stable content, the batch API for latency-tolerant volume work, trimming unnecessary context, and right-sizing model tier per component. Optimization should target the metric that's actually the bottleneck for a given use case, not be applied uniformly everywhere.",
    },
    {
      taskStatement: "Monitor system performance using logging and observability tools",
      summary:
        "Ongoing monitoring (not just pre-launch evals) is what catches drift — a model version upgrade, a shift in real user query patterns, or a retrieval index going stale can all silently degrade a system that passed its evals at launch. Structured logging of requests, tool calls, and outcomes is what makes that drift detectable.",
    },
  ],
  resources: [RESOURCES.buildEvals, RESOURCES.batchProcessing, RESOURCES.promptCaching],
};
