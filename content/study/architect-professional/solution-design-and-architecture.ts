import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "architect-professional" as const;
const DOMAIN = "Solution Design & Architecture" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "The largest domain (17%): translating a business problem into an architecture, choosing the right pattern for it, and being able to justify the choice in terms of value delivered, not just technical elegance.",
  concepts: [
    {
      taskStatement: "Translate business problems into Claude-based AI solutions",
      summary:
        "Start from the business outcome (reduce handling time, increase accuracy, unblock a bottleneck), not from 'we should use an agent.' A good translation names the specific decision or output the system must produce and how success will be measured, before any architecture is chosen.",
    },
    {
      taskStatement: "Design end-to-end architectures (input → processing → output → feedback loops)",
      summary:
        "A complete design accounts for where input comes from and its trust level, how it's processed (single call, workflow, or agent), what output format downstream systems need, and a feedback loop (logging, human review, evals) that lets you detect drift and improve the system after launch — a system with no feedback loop degrades silently.",
    },
    {
      taskStatement: "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
      summary:
        "An augmented LLM (a single call with tools/retrieval) suits simple, bounded tasks. A workflow (fixed sequence of LLM calls) suits predictable multi-step processes. A full agent (the model plans its own steps) suits open-ended tasks where the path can't be predetermined. The architect-level skill is picking the least complex pattern that satisfies the requirement — an agent is not automatically the better choice.",
    },
    {
      taskStatement: "Design multi-agent systems and orchestration strategies",
      summary:
        "Multi-agent systems add coordination complexity (context isolation, error propagation, result aggregation) in exchange for handling broader scope through specialization. This is justified when a task genuinely decomposes into independent specialties (research, analysis, writing); it's overhead when a single well-scoped agent or workflow would do.",
    },
    {
      taskStatement: "Apply decomposition techniques for complex problem solving",
      summary:
        "Break a complex system requirement into independently deliverable, independently testable pieces — by pipeline stage, by domain, or by risk level — so that each piece can be validated before the whole system is assembled, rather than attempting one large solution and debugging it as a single unit.",
    },
    {
      taskStatement:
        "Align solutions to business value pillars (efficiency, transformation, productivity, cost, performance SLAs)",
      summary:
        "Every architectural decision trades against these pillars: a more capable model or a multi-agent design may improve quality (transformation) at the cost of latency and spend (cost, SLAs). Being able to name which pillar a design choice optimizes for — and which it sacrifices — is what distinguishes an architect's justification from an engineer's implementation note.",
    },
  ],
  resources: [RESOURCES.modelsOverview, RESOURCES.agentSdkOverview],
};
