import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "architect-foundations" as const;
const DOMAIN = "Agentic Architecture & Orchestration" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "The heaviest domain on this exam (27%). It tests whether you can actually design and run multi-step, multi-agent systems reliably — not just describe the concepts — across seven task statements from the raw agentic loop up to session lifecycle management.",
  concepts: [
    {
      taskStatement: "1.1",
      summary:
        "The agentic loop: send a request, inspect stop_reason ('tool_use' means keep going, 'end_turn' means stop), execute the requested tool, append the result to conversation history, and repeat. The model — not your code — decides which tool to call next based on context; your loop should just implement that control flow. Anti-patterns to avoid: parsing the assistant's natural-language text to decide when to stop, capping iterations as your primary termination mechanism, or treating any text content as a 'done' signal — stop_reason is the correct signal.",
    },
    {
      taskStatement: "1.2",
      summary:
        "Hub-and-spoke: a coordinator routes all inter-subagent communication, handles errors, and aggregates results, rather than subagents talking to each other directly. Subagents have isolated context — they don't automatically inherit the coordinator's conversation history. The coordinator's job includes deciding which subagents a given query actually needs (not always the full pipeline) and running an iterative refinement loop when synthesis reveals coverage gaps, rather than accepting the first pass. A common failure mode is decomposing a broad topic too narrowly, which silently drops entire sub-areas.",
    },
    {
      taskStatement: "1.3",
      summary:
        "Subagents are spawned via the Task tool, which requires 'Task' to be in the coordinator's allowedTools. Context is not automatically inherited — you must explicitly include what a subagent needs (e.g., prior findings) directly in its prompt, ideally in a structured format that separates content from metadata (source, date) so attribution survives. AgentDefinition configures each subagent's description, system prompt, and tool restrictions. Emit multiple Task calls in a single coordinator response to run subagents in parallel rather than sequentially. fork_session lets you branch a session to explore divergent approaches from a shared baseline.",
    },
    {
      taskStatement: "1.4",
      summary:
        "Prompt-based instructions ('always verify identity before refunding') have a non-zero failure rate; when compliance must be guaranteed — like blocking a financial operation until identity is verified — use programmatic enforcement (a hook or prerequisite gate) instead of relying on the model to follow instructions every time. When escalating mid-process to a human, compile a structured handoff summary (key facts, root cause, recommended action) since the human agent won't have access to the full conversation transcript.",
    },
    {
      taskStatement: "1.5",
      summary:
        "PostToolUse hooks intercept a tool's result before the model sees it — useful for normalizing inconsistent data formats coming from different backends (timestamps, status codes) into one shape. Hooks that intercept outgoing tool calls can enforce policy deterministically (e.g., blocking any refund above a threshold and redirecting to escalation) — this is the same 'use a hook, not a prompt, for guaranteed compliance' principle from 1.4, applied specifically to tool calls.",
    },
    {
      taskStatement: "1.6",
      summary:
        "Prompt chaining (a fixed sequence of steps) suits predictable, multi-aspect work like reviewing each file in a PR individually, then running one cross-file integration pass. Dynamic decomposition suits open-ended investigation where the right next step depends on what you find — e.g., mapping a legacy codebase's structure first, then building a prioritized plan that adapts as dependencies surface, rather than committing to a fixed plan upfront.",
    },
    {
      taskStatement: "1.7",
      summary:
        "--resume <session-name> continues a specific named conversation. fork_session branches off a shared analysis baseline to explore two approaches in parallel without duplicating the initial investigation. When resuming after the underlying files have changed, tell the agent explicitly what changed for targeted re-analysis — don't assume it knows, and don't force a full re-exploration. If prior tool results are likely stale, starting a fresh session with an injected structured summary is often more reliable than resuming and hoping the model treats old results with appropriate skepticism.",
    },
  ],
  resources: [RESOURCES.agentSdkOverview, RESOURCES.subagents, RESOURCES.hooks],
};
