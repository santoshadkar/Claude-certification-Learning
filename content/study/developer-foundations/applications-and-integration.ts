import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "developer-foundations" as const;
const DOMAIN = "Applications and Integration" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "The single largest domain on the Developer exam (33.1%) — it's the practical core of shipping a Claude-powered application: requirements, the API itself, standard engineering practice, application design across surfaces, and configuration management.",
  concepts: [
    {
      taskStatement: "Understanding Requirements",
      summary:
        "Functional requirements describe what the system must do; infrastructure requirements describe what it needs to run (latency budget, throughput, data residency). A Claude integration inherits both from the surrounding business requirement — e.g., a customer-facing chat feature has a tighter latency requirement than an overnight batch report, which changes which API pattern and model tier make sense.",
    },
    {
      taskStatement: "Systems Life Cycle",
      summary:
        "Claude application code goes through the same lifecycle as any software: design, implement, test, deploy, operate, maintain. The distinct part is that 'maintain' includes watching for model behavior drift across releases and re-validating prompts/evals when you upgrade model versions, not just fixing bugs.",
    },
    {
      taskStatement: "Claude API Mechanics",
      summary:
        "The Messages API is the core primitive: messages, tools, streaming (incremental output for responsiveness), vision (image input), thinking (extended reasoning before answering), and caching (reusing stable prompt prefixes to cut cost/latency). Batch API trades immediacy for a ~50% cost reduction on latency-tolerant workloads; real-time API is for anything a user is waiting on. Some vendors offer Claude through their own platforms (e.g., Bedrock, Vertex AI) with the same core mechanics but platform-specific model IDs and auth.",
    },
    {
      taskStatement: "Software Engineering Foundations",
      summary:
        "Nothing here is Claude-specific, and that's the point being tested: REST APIs, JSON handling, async programming (since API calls are I/O-bound), version control discipline, code review, and refactoring at both small and large scale are exactly what a Claude integration is built with — the AI call is one component inside otherwise normal application code.",
    },
    {
      taskStatement: "Claude Application Design",
      summary:
        "Claude interprets instructions somewhat differently depending on surface — a system prompt via the API, a CLAUDE.md in Claude Code, a Project's custom instructions in Desktop/claude.ai — so design decisions about where instructions live should match the surface. Good design also means clear content boundaries (what's trusted instruction vs. untrusted user/tool content), thoughtful schema design for structured output, keeping sessions from accumulating irrelevant history ('session hygiene'), and managing which plugins/tools are active for a given deployment.",
    },
    {
      taskStatement: "Configuration Management",
      summary:
        "Treat CLAUDE.md files, settings.json, model version pins, prompt versions, and plugin dependencies as configuration that needs the same discipline as any other config: version-controlled, reviewed, and deliberately upgraded rather than silently drifting. Pinning a model version protects against surprise behavior changes; not pinning means you inherit improvements (and regressions) automatically on the next release.",
    },
  ],
  resources: [RESOURCES.toolUse, RESOURCES.promptCaching, RESOURCES.batchProcessing, RESOURCES.claudeMdAndMemory],
};
