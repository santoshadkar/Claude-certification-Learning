import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "developer-foundations" as const;
const DOMAIN = "Agents and Workflows" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Covers the architectural decisions behind building agents with Claude: when a fixed workflow beats an autonomous agent, what tools/platforms you build with, and the recurring design patterns that make agents reliable.",
  concepts: [
    {
      taskStatement: "Agent Architecture",
      summary:
        "A workflow is a predetermined sequence of steps (predictable, easy to debug, but rigid); an agent decides its own next steps based on the model's reasoning (flexible, but less predictable). Choose a workflow when the task's steps are known and repeatable; choose an agent when the path depends on what's discovered along the way. Manager/supervisor hierarchies and subagents exist to keep agents from doing everything in one flat context — a coordinator delegates focused subtasks and aggregates results, which improves both context management and observability.",
    },
    {
      taskStatement: "Agent Construction with Claude",
      summary:
        "The Claude Agent SDK gives you the same agent loop and tools that power Claude Code, as a library you run in your own process — you don't have to hand-roll tool-call parsing and looping yourself. A custom agent loop/harness is the lower-level alternative: you call the Messages API directly and implement the loop (check stop_reason, execute tools, feed results back) yourself, giving full control at the cost of more code to maintain. Managed, Anthropic-hosted agent deployment removes the need to run your own sandbox/session infrastructure; self-hosting keeps that control in-house. Hooks let you attach deterministic actions (validation, logging, blocking) at fixed points in that loop regardless of what the model decides.",
    },
    {
      taskStatement: "Agent Patterns and Frameworks",
      summary:
        "Common patterns: the tool-use loop (call a tool, get a result, decide next action), sub-agents (isolate a focused task in its own context), memory (persist facts across turns or sessions), and context-window management (keep only what's relevant in context as a task runs long). Agentic frameworks like LangGraph, PydanticAI, or Strands add structure (typed state, graph-based control flow) on top of these patterns for teams that want more guardrails than a raw loop provides.",
    },
  ],
  resources: [RESOURCES.agentSdkOverview, RESOURCES.subagents, RESOURCES.hooks],
};
