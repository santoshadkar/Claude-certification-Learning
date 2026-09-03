import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "architect-professional" as const;
const DOMAIN = "Integration" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "The largest domain (19%): wiring Claude into real systems — tool/agent scope, auth, retrieval architecture, observability at scale, and choosing the right connection protocol.",
  concepts: [
    {
      taskStatement: "Evaluate tool/agent configuration for capability bloat",
      summary:
        "Giving an agent every tool 'just in case' measurably hurts tool-selection reliability and expands the security surface at the same time. An architect reviews tool grants against what a component's role actually requires and prunes the rest — this is the least-privilege principle applied to agent design, not just to human accounts.",
    },
    {
      taskStatement: "Analyze authentication and authorization requirements to identify security gaps",
      summary:
        "Every tool and MCP server an agent can call inherits whatever access that integration's credentials have — an architect traces this chain end-to-end (what can this agent ultimately do, transitively, through its tools) rather than reviewing the agent's own permissions in isolation.",
    },
    {
      taskStatement: "Evaluate accuracy-latency trade-offs and justify configuration decisions",
      summary:
        "Higher accuracy options (a stronger model, more retrieved context, an extra verification pass) almost always cost latency. The architect's job is making this trade-off explicit and matching it to the use case's actual tolerance — a real-time chat feature and an overnight compliance report justify very different points on that curve.",
    },
    {
      taskStatement: "Analyze observability challenges and select monitoring strategies at scale",
      summary:
        "At scale, you can't manually review every output — monitoring strategy shifts to sampling (stratified, not just random), tracking aggregate metrics that can still hide per-segment failures, and logging enough of the request/response/tool-call trace to debug an incident after the fact without having logged sensitive data unnecessarily.",
    },
    {
      taskStatement: "Design a RAG pipeline with appropriate chunking and indexing strategies",
      summary:
        "Chunking strategy (size, overlap, splitting on semantic boundaries vs. fixed length) directly determines retrieval quality — chunks too large dilute relevance, too small lose context. Indexing strategy (embedding model, metadata filters, hybrid search) should match how the content is actually structured and queried, not be a default choice applied uniformly.",
    },
    {
      taskStatement: "Apply retrieval strategies matched to data shape and query pattern",
      summary:
        "Structured, well-defined queries (exact IDs, dates, known categories) are often better served by metadata filtering or direct lookup than vector search. Open-ended, semantic queries are where embedding-based retrieval earns its cost. A production RAG system frequently needs both, routed by query type, rather than one uniform retrieval path.",
    },
    {
      taskStatement:
        "Evaluate connection protocols and select the appropriate integration mechanism (MCP, API/CLI, agent-to-agent)",
      summary:
        "MCP suits reusable, standardized tool/resource access shared across multiple Claude applications. A direct API/CLI integration suits a one-off, tightly coupled need where the overhead of a protocol isn't justified. Agent-to-agent patterns suit cases where two independent agentic systems need to hand off work rather than one calling a simple tool. Choose based on reusability and coupling, not familiarity.",
    },
    {
      taskStatement: "Evaluate progressive discovery vs. monolithic context strategy",
      summary:
        "Loading everything a task might need into context upfront (monolithic) is simple but wastes tokens on unused material and can dilute attention. Progressive discovery — giving the agent tools/resources to fetch more as needed — scales better for large or unpredictable information needs, at the cost of more round trips and orchestration complexity.",
    },
  ],
  resources: [RESOURCES.mcpSpec, RESOURCES.mcpInClaudeCode, RESOURCES.contextWindows],
};
