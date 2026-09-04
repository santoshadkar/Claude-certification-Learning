import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Agents and Workflows" as const;
const CERT = "developer-foundations" as const;
const S1 = "Agent Architecture" as const;
const S2 = "Agent Construction with Claude" as const;
const S3 = "Agent Patterns and Frameworks" as const;

export const questions: QuestionInput[] = [
  {
    id: "dev-aw-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer needs to build a system that always performs the exact same three steps in the exact same order for every input: extract fields, validate them, then format the output. Which architecture is the better fit?",
    options: [
      { id: "A", text: "A fully autonomous agent that decides its own steps at runtime." },
      { id: "B", text: "A workflow — a predetermined sequence of LLM calls — since the steps are fixed and known in advance." },
      { id: "C", text: "A multi-agent system with a coordinator and three specialized subagents." },
      { id: "D", text: "There is no meaningful architectural difference for this case." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A predictable, fixed sequence of steps is exactly what a workflow is designed for — it's simpler to build, debug, and reason about than giving an agent autonomy it doesn't need (A), and a multi-agent system (C) adds coordination overhead with no benefit here. Architecture choice does matter (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 (Agents and Workflows) — 'Agent Architecture'",
    difficulty: "easy",
  },
  {
    id: "dev-aw-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer is building a system to investigate open-ended customer complaints where the right next action depends entirely on what's discovered at each step, and can't be predetermined. Which architecture fits best?",
    options: [
      { id: "A", text: "A fixed workflow with the same steps applied to every complaint." },
      { id: "B", text: "An agent, since the model needs to reason about and decide its own next action based on what it finds, which a fixed workflow can't accommodate." },
      { id: "C", text: "A single Messages API call with no tools at all." },
      { id: "D", text: "Architecture choice doesn't matter as long as the model is capable enough." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "When the right next step genuinely depends on intermediate findings and can't be fixed in advance, agent autonomy is what the task calls for — a rigid workflow (A) can't adapt, a single call with no tools (C) can't investigate iteratively, and architecture choice is a real, consequential decision (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Architecture'",
    difficulty: "easy",
  },
  {
    id: "dev-aw-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "In a manager/supervisor agent hierarchy, what is the primary role of the manager relative to its subagents?",
    options: [
      { id: "A", text: "The manager executes all the detailed work itself and subagents merely observe." },
      { id: "B", text: "The manager decomposes the overall task, delegates focused subtasks to subagents, and aggregates their results, rather than doing the detailed work itself." },
      { id: "C", text: "The manager and subagents have no defined relationship and act fully independently." },
      { id: "D", text: "Subagents report directly to end users, bypassing the manager entirely." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "The manager's role is decomposition, delegation, and aggregation — it coordinates rather than doing the detailed work itself (A is backwards), and the hierarchy exists precisely to define this relationship (C, D both contradict the structure of a manager/supervisor pattern).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Architecture'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "What is the primary benefit of introducing subagents into an agent's architecture rather than doing everything in one flat, single-agent context?",
    options: [
      { id: "A", text: "Subagents make debugging strictly harder with no offsetting benefit." },
      { id: "B", text: "Subagents allow focused delegation of subtasks with isolated context, which can improve task execution and keep the main context from becoming cluttered with irrelevant detail." },
      { id: "C", text: "Subagents eliminate the need for any tools." },
      { id: "D", text: "Subagents are only useful for reducing API cost, with no other benefit." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Isolating focused work in subagents keeps the main context from accumulating irrelevant detail and lets each subtask get dedicated attention — this is a genuine architectural benefit, not strictly a debugging cost (A), it doesn't remove the need for tools (C), and cost isn't the only reason to use them (D).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Architecture'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "scenario-multi-response",
    stem:
      "Which two factors should most influence the choice between a workflow and a fully autonomous agent for a new system? (Select 2)",
    options: [
      { id: "A", text: "Whether the sequence of steps needed is known and predictable in advance." },
      { id: "B", text: "Whether the task requires reasoning about unpredictable intermediate findings to decide what to do next." },
      { id: "C", text: "Whether the team prefers using the word 'agent' in their marketing materials." },
      { id: "D", text: "Whether the codebase happens to already import a workflow library, regardless of task fit." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Predictability of the step sequence (A) and whether autonomous reasoning over unpredictable findings is actually required (B) are the substantive decision criteria. Marketing preferences (C) and pre-existing library imports without regard to fit (D) aren't legitimate architectural reasons.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Architecture'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A team builds a multi-agent system with a manager and five subagents for a task that, on closer inspection, is really just 'extract three fields from a document and format them.' What is the likely architectural issue?",
    options: [
      { id: "A", text: "There is no issue; more agents always produce better results regardless of task complexity." },
      { id: "B", text: "This is architectural over-engineering — a simple, fixed-sequence task like this doesn't need multi-agent coordination overhead and would be better served by a straightforward workflow or single call." },
      { id: "C", text: "The issue is only that five subagents is an unlucky number." },
      { id: "D", text: "The manager should be removed while keeping all five subagents." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A simple, fixed-sequence extraction task doesn't need multi-agent coordination — the coordination overhead (context isolation, aggregation, delegation) is pure cost with no benefit here, unlike what option A assumes. The specific count of subagents (C) isn't the issue, and removing just the manager while keeping five subagents (D) doesn't fix the underlying mismatch.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Architecture'",
    difficulty: "hard",
  },
  {
    id: "dev-aw-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "Why might a developer choose a hybrid approach — a workflow that includes one agentic step in the middle — rather than a purely fixed workflow or a purely autonomous agent?",
    options: [
      { id: "A", text: "Hybrids are never a valid architectural choice." },
      { id: "B", text: "Most of the task may be predictable and well-served by fixed steps, while one specific step genuinely benefits from the model's autonomous reasoning over unpredictable input — a hybrid captures both without over- or under-architecting the whole system." },
      { id: "C", text: "Hybrid approaches always run slower than either pure alternative, with no other consideration relevant." },
      { id: "D", text: "Hybrids exist only as an academic concept with no practical use." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Matching architecture to the actual shape of the task — fixed steps where predictable, agent autonomy where genuinely needed — is a legitimate and common design choice, not an invalid (A) or purely academic (D) one. Speed isn't the only relevant factor and isn't strictly worse for every hybrid (C).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Architecture'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "What is a key tradeoff of choosing full agent autonomy over a fixed workflow for a task?",
    options: [
      { id: "A", text: "Agents are always cheaper and faster than workflows in every case, with no downside." },
      { id: "B", text: "Agent autonomy typically trades predictability and ease of debugging for the flexibility to handle situations that couldn't be fully anticipated in advance." },
      { id: "C", text: "There is no meaningful tradeoff between the two approaches." },
      { id: "D", text: "Workflows can never call tools, while agents always can." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Autonomy buys flexibility for the unanticipated at the cost of predictability and debuggability — agents aren't universally cheaper or faster (A), a real tradeoff does exist (C wrong), and workflows can absolutely call tools at fixed steps (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Architecture'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A manager agent in a hierarchy is found to be executing detailed subtasks itself instead of delegating them to its subagents, which sit mostly idle. What does this suggest about the architecture?",
    options: [
      { id: "A", text: "This is the correct, intended behavior for any manager/supervisor hierarchy." },
      { id: "B", text: "The manager isn't fulfilling its intended role of decomposition and delegation — its prompt or configuration likely needs adjustment so it actually routes subtasks to the subagents it has available." },
      { id: "C", text: "The subagents should be deleted entirely since they aren't being used." },
      { id: "D", text: "This indicates the underlying model is incapable of hierarchy-based architectures." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A manager doing all the work itself defeats the purpose of the hierarchy — this points to a configuration/prompting problem to fix, not correct intended behavior (A). Deleting unused subagents (C) treats the symptom rather than the cause, and this isn't evidence of a fundamental model incapability (D).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Architecture'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "Which statement best describes when subagents genuinely improve task execution versus when they add unnecessary overhead?",
    options: [
      { id: "A", text: "Subagents always improve execution regardless of task, so they should be used everywhere by default." },
      { id: "B", text: "Subagents improve execution when a task genuinely decomposes into independent, focused subtasks that benefit from isolated context; they add overhead when applied to simple, undifferentiated tasks." },
      { id: "C", text: "Subagents never improve execution and should be avoided in all cases." },
      { id: "D", text: "Subagents only matter for reducing token costs and have no effect on task quality." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "The value of subagents is conditional on the task actually decomposing into independent, focused pieces — treating them as always beneficial (A) or never beneficial (C) both miss this nuance, and their effect goes beyond just cost (D).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Architecture'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer wants to build a custom agent without hand-rolling the tool-call loop, request/response handling, and session management from scratch. What is the most direct option?",
    options: [
      { id: "A", text: "Use the Claude Agent SDK, which provides the same agent loop and tools that power Claude Code as a library." },
      { id: "B", text: "Write a fully custom agent loop from scratch, since no SDK exists for this purpose." },
      { id: "C", text: "Use only the raw Messages API with no additional tooling of any kind." },
      { id: "D", text: "This task cannot be accomplished without writing a custom harness." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "The Claude Agent SDK exists specifically to provide this — the agent loop, tool handling, and session management — as a reusable library rather than requiring a hand-rolled implementation (B, D), which is more work than necessary when the SDK already covers it. Using only the raw API with nothing else (C) reintroduces the manual work the SDK avoids.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Construction with Claude'",
    difficulty: "easy",
  },
  {
    id: "dev-aw-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "What is the key difference between using the Claude Agent SDK and writing a fully custom agent loop directly against the Messages API?",
    options: [
      { id: "A", text: "There is no difference; both approaches are functionally identical in every respect." },
      { id: "B", text: "The Agent SDK provides a ready-made loop, tool handling, and session management, trading some low-level control for less code to write and maintain; a custom loop gives full control at the cost of implementing that infrastructure yourself." },
      { id: "C", text: "A custom loop can never call tools, while the Agent SDK is required for any tool use." },
      { id: "D", text: "The Agent SDK can only be used for chatbots, never for coding-related agents." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "This is the real tradeoff — ready-made infrastructure and less code (SDK) versus full control at the cost of building that infrastructure yourself (custom loop). Tool use is possible either way (C wrong), and the SDK is exactly what powers Claude Code, a coding-focused use case (D wrong), so the two approaches aren't equivalent (A wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Construction with Claude'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A team is deciding between a self-hosted agent deployment and an Anthropic-hosted managed agent deployment model. What is a central consideration in this decision?",
    options: [
      { id: "A", text: "Whether the team wants to own and operate the sandbox/session infrastructure themselves (self-hosted) versus offloading that operational responsibility to a managed platform (Anthropic-hosted)." },
      { id: "B", text: "Self-hosted and managed deployments are functionally identical with no operational difference." },
      { id: "C", text: "Managed deployment is only available for non-coding use cases." },
      { id: "D", text: "Self-hosting is always strictly better regardless of the team's operational capacity." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "The central tradeoff is who owns the operational burden of running the underlying infrastructure — this is a real difference (B wrong), managed deployment isn't restricted to non-coding cases (C wrong), and self-hosting isn't universally the better choice regardless of a team's capacity to operate infrastructure (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Construction with Claude'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer wants a business rule (e.g., 'never call the delete_account tool without explicit confirmation') to be enforced deterministically, regardless of what the model decides at runtime. What Agent SDK mechanism is designed for this?",
    options: [
      { id: "A", text: "A more detailed system prompt describing the rule in stronger language." },
      { id: "B", text: "A hook that intercepts the relevant tool call and enforces the rule programmatically, providing a deterministic guarantee that prompt wording alone cannot." },
      { id: "C", text: "A few-shot example demonstrating the correct behavior." },
      { id: "D", text: "Increasing the model's context window size." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Hooks exist precisely for deterministic actions at fixed points in the agent loop — this is what provides a guarantee that prompt-based approaches (A, C) cannot, since those remain probabilistic. Context window size (D) is unrelated to enforcing a business rule.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Construction with Claude'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "scenario-multi-response",
    stem:
      "Which two capabilities does the Claude Agent SDK provide out of the box, reducing the amount of custom infrastructure a developer needs to build? (Select 2)",
    options: [
      { id: "A", text: "The core agentic loop (sending requests, inspecting stop_reason, executing tools, feeding results back)." },
      { id: "B", text: "Session and tool-handling infrastructure similar to what powers Claude Code." },
      { id: "C", text: "Automatic, guaranteed business-rule enforcement with no configuration required." },
      { id: "D", text: "A complete replacement for all application-specific business logic, requiring no custom code at all." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "The core agent loop (A) and session/tool infrastructure (B) are exactly what the SDK provides as reusable building blocks. Business-rule enforcement still requires developers to configure hooks explicitly (C is wrong — it's not automatic or unconfigured), and the SDK doesn't eliminate the need for application-specific logic entirely (D).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Construction with Claude'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer building a custom agent loop directly against the Messages API forgets to append the tool_result back into the conversation history before making the next request. What is the likely consequence?",
    options: [
      { id: "A", text: "No consequence; the model automatically remembers tool results without them being included in the request." },
      { id: "B", text: "The model won't have access to the tool's result when reasoning about its next action, since conversation history — including tool results — must be explicitly included in each subsequent request." },
      { id: "C", text: "The API will reject all future requests permanently." },
      { id: "D", text: "This only matters when using the Agent SDK, not a custom loop." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "The API is stateless between calls — each request must explicitly include the conversation history, tool results included, or the model has no access to that information for its next decision. There's no automatic memory across calls (A wrong), no permanent rejection (C wrong), and this applies to any custom loop, not just when using the SDK (D wrong, if anything it's the reverse emphasis).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Construction with Claude'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "Why might a team choose to build a custom agent loop rather than using the Claude Agent SDK, despite the extra implementation work?",
    options: [
      { id: "A", text: "There is never a valid reason to choose a custom loop over the SDK." },
      { id: "B", text: "The team may need low-level control over loop behavior, integration with existing bespoke infrastructure, or specific customizations that the SDK's abstractions don't expose." },
      { id: "C", text: "Custom loops are required for any application that uses more than one tool." },
      { id: "D", text: "The SDK cannot be used in production environments under any circumstances." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Needing low-level control or deep integration with existing systems beyond what a higher-level SDK abstraction exposes is a legitimate reason to build custom — this is a real, valid tradeoff (A wrong). Tool count doesn't dictate this choice (C wrong), and the SDK is very much usable in production (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Construction with Claude'",
    difficulty: "hard",
  },
  {
    id: "dev-aw-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer wants a hook to run every time a tool result comes back, to normalize inconsistent data formats before the model reasons over them. Which hook type fits this need?",
    options: [
      { id: "A", text: "A PreToolUse-style hook that runs before a tool is called, not after." },
      { id: "B", text: "A PostToolUse-style hook that intercepts the tool's result after execution, allowing transformation before the model processes it." },
      { id: "C", text: "No hook mechanism supports this; the model must handle format inconsistencies itself." },
      { id: "D", text: "This requires switching to a fully custom agent loop, since hooks cannot transform tool output." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Normalizing a tool's result before the model sees it is exactly a post-execution interception point — a pre-call hook (A) runs at the wrong point in the lifecycle for this. Hooks do support this kind of transformation (C, D both wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Construction with Claude'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A managed, Anthropic-hosted agent deployment is being considered for a new internal tool. What operational responsibility does this model shift away from the development team?",
    options: [
      { id: "A", text: "The team is no longer responsible for writing any application logic at all." },
      { id: "B", text: "The team no longer needs to build and operate the underlying sandbox/session infrastructure that a self-hosted deployment would require." },
      { id: "C", text: "The team is relieved of all responsibility for the tool's business logic and correctness." },
      { id: "D", text: "There is no operational difference from self-hosting; the terms are interchangeable." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "The managed model shifts the operational burden of infrastructure (sandboxes, session hosting) to the platform, not the team's application logic (A, C both overreach) — this is a real, meaningful operational difference, not an interchangeable term (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Construction with Claude'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "What is the core mechanism of the tool-use loop pattern in agent design?",
    options: [
      { id: "A", text: "The model calls a tool, the result is returned and appended to context, and the model reasons about its next action based on the updated context — repeating until the task is complete." },
      { id: "B", text: "The model calls every available tool exactly once regardless of relevance, then stops." },
      { id: "C", text: "Tools are called in a fixed order determined entirely at development time, with no runtime decision-making." },
      { id: "D", text: "The tool-use loop pattern does not involve appending results back into context." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is the defining cycle of the tool-use loop — call, observe result, reason, repeat — which is what enables multi-step agentic behavior. Calling every tool regardless of relevance (B) or fixing the order entirely at development time (C) don't reflect the pattern's actual runtime, model-driven nature, and appending results back into context (contrary to D) is essential to the loop working at all.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Patterns and Frameworks'",
    difficulty: "easy",
  },
  {
    id: "dev-aw-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "What problem does the 'memory' pattern address in agentic system design?",
    options: [
      { id: "A", text: "It addresses the need to persist relevant information across turns or sessions, since a fresh context window otherwise has no access to prior interactions or established facts." },
      { id: "B", text: "It exists only to reduce API token costs, with no functional benefit otherwise." },
      { id: "C", text: "It replaces the need for tools entirely." },
      { id: "D", text: "Memory patterns are only relevant to consumer chat applications, not developer-built agents." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Memory patterns address genuine persistence needs — carrying relevant facts across turns or sessions when a fresh context otherwise wouldn't have them — beyond just cost savings (B), without replacing tool use (C), and this pattern is relevant to developer-built agents just as much as consumer products (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Patterns and Frameworks'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer is evaluating agentic abstraction frameworks like LangGraph, PydanticAI, or Strands for a new multi-step agent project. What do these frameworks generally provide on top of a raw agent loop?",
    options: [
      { id: "A", text: "They provide structured abstractions (e.g., typed state, graph-based control flow) for organizing multi-step agentic tasks, at the cost of an additional dependency and its own learning curve." },
      { id: "B", text: "They replace the underlying model entirely with their own reasoning engine." },
      { id: "C", text: "They eliminate the need for any tool definitions." },
      { id: "D", text: "They are only usable with models other than Claude." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "These frameworks add organizational structure around agentic control flow, which is a real and useful tradeoff to weigh against added complexity — they don't replace the underlying model (B), don't eliminate the need to define tools (C), and are usable with Claude (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Patterns and Frameworks'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "scenario-multi-response",
    stem:
      "Which two are commonly recognized agent design patterns for handling multi-step tasks? (Select 2)",
    options: [
      { id: "A", text: "The tool-use loop, where the model calls tools and reasons over results iteratively." },
      { id: "B", text: "Context-window management, to keep relevant information available as a task runs long without exceeding limits." },
      { id: "C", text: "Ignoring all prior tool results on every new turn to keep context minimal." },
      { id: "D", text: "Randomizing which tool is called at each step regardless of task relevance." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "The tool-use loop (A) and context-window management (B) are both established, purposeful agent design patterns. Discarding all prior tool results indiscriminately (C) undermines the loop's reasoning, and random tool selection (D) isn't a design pattern at all — it's the opposite of deliberate design.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Patterns and Frameworks'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer's agent uses sub-agents as a pattern to handle a multi-step research task. What is the primary purpose of context isolation between the main agent and its sub-agents in this pattern?",
    options: [
      { id: "A", text: "To prevent verbose sub-agent exploration output (e.g., detailed intermediate search results) from cluttering the main agent's context, letting the main agent maintain a higher-level view." },
      { id: "B", text: "To make debugging strictly harder with no offsetting benefit." },
      { id: "C", text: "To prevent sub-agents from ever using tools." },
      { id: "D", text: "To guarantee that sub-agents automatically inherit all of the main agent's context by default." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Isolating a sub-agent's verbose intermediate work from the main agent's context is the actual purpose — it's a benefit, not strictly a debugging cost (B), sub-agents can and do use tools (C wrong), and isolation specifically means sub-agents do NOT automatically inherit full context (D is the opposite of the actual behavior).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Patterns and Frameworks'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "An agent handling a long-running, multi-step task starts accumulating so much tool output in its context that it seems to lose track of earlier findings. Which pattern is most directly relevant to addressing this?",
    options: [
      { id: "A", text: "Context-window management — trimming or summarizing accumulated content so the most relevant information stays available as the task continues." },
      { id: "B", text: "Adding more tools to the agent's toolkit, regardless of relevance to the context problem." },
      { id: "C", text: "Switching to a completely different model provider." },
      { id: "D", text: "Disabling all logging for the session." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is squarely a context-window management problem, addressed by trimming or summarizing accumulated content — adding unrelated tools (B), switching providers (C), or disabling logging (D) don't address the actual cause of losing track of earlier findings.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Patterns and Frameworks'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A team is choosing whether to adopt an agentic framework like LangGraph for a relatively simple, single-purpose agent with one tool and no branching logic. What is a reasonable consideration?",
    options: [
      { id: "A", text: "The added structure and complexity of a full framework may not be justified for a simple, single-purpose agent, where a more direct implementation could be simpler to build and maintain." },
      { id: "B", text: "Frameworks like this are mandatory for any agent, regardless of complexity." },
      { id: "C", text: "Simple agents cannot use tools at all, so the framework choice is irrelevant." },
      { id: "D", text: "Framework choice has no effect on maintainability or complexity." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Matching tooling complexity to actual task complexity is a sound engineering consideration — a full framework isn't mandatory for every agent (B wrong), simple agents can absolutely use tools (C wrong), and framework choice does have real maintainability implications (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Patterns and Frameworks'",
    difficulty: "medium",
  },
  {
    id: "dev-aw-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "What distinguishes a sub-agent pattern from simply making more tool calls within the same single-agent context?",
    options: [
      { id: "A", text: "A sub-agent runs with its own isolated context and can have its own model reasoning over a scoped subtask, rather than the same agent's context simply growing with more tool results." },
      { id: "B", text: "There is no meaningful distinction; sub-agents and additional tool calls are the same thing." },
      { id: "C", text: "Sub-agents can never call tools themselves." },
      { id: "D", text: "Sub-agents always require a completely different underlying model than the main agent." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A sub-agent involves its own isolated reasoning context focused on a subtask, which is architecturally distinct from just accumulating more tool calls in one shared context — sub-agents can absolutely call tools (C wrong), don't require a different underlying model (D wrong), and the distinction is real, not nonexistent (B wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Patterns and Frameworks'",
    difficulty: "hard",
  },
  {
    id: "dev-aw-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer building a multi-step agentic workflow for the first time is deciding whether to use an established framework or implement patterns like the tool-use loop and context management manually. What is a balanced way to frame this decision?",
    options: [
      { id: "A", text: "A framework can accelerate development by providing tested abstractions for common patterns, but manual implementation offers more control and fewer dependencies — the right choice depends on the project's complexity and the team's familiarity with the framework." },
      { id: "B", text: "Manual implementation is always objectively superior in every situation." },
      { id: "C", text: "Frameworks are always objectively superior in every situation." },
      { id: "D", text: "This decision has no meaningful tradeoffs to consider." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is a genuine, context-dependent tradeoff between development speed/tested abstractions and control/fewer dependencies — neither option is universally superior (B, C both overstate), and there are real tradeoffs to weigh here, contrary to D.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 1 — 'Agent Patterns and Frameworks'",
    difficulty: "medium",
  },
];
