import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Agentic Architecture & Orchestration" as const;
const CERT = "architect-foundations" as const;

const SUPPORT_SCENARIO =
  "You are building a customer support resolution agent with the Claude Agent SDK. It has custom MCP tools: get_customer, lookup_order, process_refund, and escalate_to_human. The team's target is 80%+ first-contact resolution while still escalating appropriately.";

const RESEARCH_SCENARIO =
  "You are building a multi-agent research system with a coordinator agent that delegates to specialized subagents for web search, document analysis, and synthesis.";

const CI_SCENARIO =
  "You are integrating Claude Code into your CI/CD pipeline to run automated code reviews and generate test cases on every pull request.";

export const questions: QuestionInput[] = [
  {
    id: "arch-f-aao-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.1",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "Your agent's loop implementation currently continues calling tools as long as the assistant's response contains any visible text, and stops once a response has no text content. Support tickets sometimes get cut off mid-resolution. What is the most likely cause and fix?",
    options: [
      { id: "A", text: "The loop is correctly implemented; the issue must be in the MCP tools themselves." },
      {
        id: "B",
        text: "The loop should instead check the response's stop_reason field, continuing while it is 'tool_use' and stopping only when it is 'end_turn', rather than inferring completion from the presence of visible text.",
      },
      { id: "C", text: "Add a fixed cap of 3 tool calls per ticket as the primary way to decide when to stop." },
      { id: "D", text: "Switch to a larger model so it reasons more clearly about when to stop." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Inferring completion from the presence of text is exactly the anti-pattern to avoid; stop_reason is the reliable signal for loop control. An iteration cap (C) is a safety net, not a correct primary stopping mechanism, and a larger model (D) doesn't fix a control-flow bug.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.1 — agentic loop implementation",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.2",
    type: "mcq",
    scenarioContext:
      "You are building a multi-agent research system with a coordinator agent that delegates to specialized subagents for web search, document analysis, and synthesis.",
    stem:
      "The coordinator decomposes the topic 'renewable energy trends' into exactly one subtask: 'analyze solar panel efficiency improvements.' The final report only covers solar, missing wind, hydro, and battery storage entirely, even though each subagent executed its assigned task correctly. What is the root cause?",
    options: [
      { id: "A", text: "The subagents made an error in execution." },
      {
        id: "B",
        text: "The coordinator's task decomposition was too narrow, covering only one facet of a broad topic rather than partitioning the topic across its actual scope.",
      },
      { id: "C", text: "The synthesis step failed to include all subagent outputs." },
      { id: "D", text: "The subagents shared context with each other incorrectly." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "When subagents execute correctly but coverage is still incomplete, the defect is almost always in how the coordinator decomposed the task — narrow decomposition of a broad topic leaves entire sub-areas unaddressed regardless of how well the assigned subtasks were executed.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.2 — coordinator-subagent orchestration",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.3",
    type: "scenario-multi-response",
    scenarioContext:
      "You are building a multi-agent research system with a coordinator agent that delegates to specialized subagents for web search, document analysis, and synthesis.",
    stem:
      "A coordinator agent needs to spawn a synthesis subagent that combines findings from a web-search subagent and a document-analysis subagent that already ran. Which two practices are correct given how subagent context works? (Select 2)",
    options: [
      { id: "A", text: "Rely on the synthesis subagent automatically inheriting the coordinator's full conversation history." },
      { id: "B", text: "Include the complete findings from the web-search and document-analysis subagents directly in the synthesis subagent's prompt." },
      { id: "C", text: "Ensure the coordinator's allowedTools includes 'Task' so it's able to spawn the synthesis subagent at all." },
      { id: "D", text: "Skip passing source URLs or document names, since the synthesis subagent only needs the conclusions." },
    ],
    correctOptionIds: ["B", "C"],
    selectCount: 2,
    explanation:
      "Subagents don't automatically inherit the coordinator's context, so findings must be explicitly included (B), and spawning any subagent requires 'Task' in allowedTools (C). Assuming automatic inheritance (A) is the exact misconception being tested against, and dropping source metadata (D) breaks the attribution a trustworthy synthesis needs.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.3 — subagent invocation and context passing",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.4",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "Production logs show your support agent occasionally calls process_refund before get_customer has returned a verified customer ID, because in a minority of conversations the customer volunteers order details early and the model skips the verification step. The system prompt already states verification is mandatory. What is the most effective fix?",
    options: [
      { id: "A", text: "Reword the system prompt to state the requirement even more emphatically." },
      {
        id: "B",
        text: "Add a programmatic prerequisite (e.g., via a hook) that blocks process_refund from executing until get_customer has returned a verified customer ID, regardless of what the model decides.",
      },
      { id: "C", text: "Add a few-shot example showing the correct order of operations." },
      { id: "D", text: "Accept the current failure rate, since it only affects a minority of conversations." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "When a specific sequence must be guaranteed for a financially consequential action, only programmatic enforcement provides that guarantee — prompt-based approaches (A, C) remain probabilistic and can still fail, and accepting the failure rate (D) isn't acceptable for a control tied to financial transactions.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.4 — enforcement and handoff patterns",
    difficulty: "hard",
  },
  {
    id: "arch-f-aao-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.5",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "Your support agent's MCP tools return timestamps in three different formats depending on which backend system they hit (Unix epoch, ISO 8601, and a custom 'MM/DD/YYYY' string). The agent sometimes reasons incorrectly about which event happened first. What is the most effective fix?",
    options: [
      { id: "A", text: "Ask the model to convert all timestamps mentally before reasoning about order." },
      {
        id: "B",
        text: "Implement a PostToolUse hook that normalizes all timestamp formats into one consistent format before the agent processes the tool result.",
      },
      { id: "C", text: "Remove timestamps from tool results entirely to avoid the inconsistency." },
      { id: "D", text: "Switch to a more capable model that is less likely to misread timestamps." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Normalizing heterogeneous data formats before the model reasons over them is exactly what a PostToolUse hook is for. Asking the model to handle the inconsistency itself (A) is unreliable, removing needed information (C) creates a worse problem, and a bigger model (D) doesn't fix a data-formatting defect.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.5 — hooks for tool call interception and data normalization",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.6",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to power an automated code review process integrated into your CI/CD pipeline.",
    stem:
      "A code-review agent currently reviews an entire 20-file pull request in a single pass, and produces inconsistent depth — thorough on some files, superficial on others, with occasional contradictions between files. Which task decomposition change would most directly address this?",
    options: [
      { id: "A", text: "Switch to a fixed sequential pipeline: review each file individually for local issues, then run one separate cross-file integration pass." },
      { id: "B", text: "Increase the context window so all 20 files fit more comfortably." },
      { id: "C", text: "Ask the model to 'be more thorough and consistent' in the system prompt." },
      { id: "D", text: "Randomly sample 5 of the 20 files to review instead of all 20." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Splitting a large review into focused per-file passes plus a separate integration pass directly addresses attention dilution across many files in one pass. A larger context window (B) doesn't fix attention-quality issues, a vague instruction (C) doesn't reliably change behavior, and sampling fewer files (D) reduces coverage instead of fixing the review architecture.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.6 — task decomposition strategies",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.1",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "A junior engineer proposes capping the agentic loop at a fixed 5 iterations as the primary way to prevent runaway execution, arguing it's simpler than checking stop_reason. What is the concern with relying on an iteration cap as the primary stopping mechanism?",
    options: [
      { id: "A", text: "An iteration cap is unrelated to correctness and should always be preferred for simplicity." },
      { id: "B", text: "A fixed cap can cut off a legitimate task that needs more than 5 steps, or let a malfunctioning loop run needlessly close to the cap — stop_reason is the correct signal for when the model has actually finished, with a cap serving only as a safety net." },
      { id: "C", text: "Iteration caps are not supported by the Claude Agent SDK at all." },
      { id: "D", text: "stop_reason and iteration caps always produce identical behavior, so the choice doesn't matter." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Using an arbitrary cap as the primary stopping mechanism is exactly the anti-pattern the exam guide calls out — it can prematurely cut off legitimate multi-step work or fail to catch a malfunction until the cap is hit. stop_reason reflects the model's actual completion signal and should be primary, with a cap as a secondary safety net, not a replacement (A, C, D all mischaracterize this).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.1 — agentic loop implementation",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.1",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "A developer's agentic loop checks whether the assistant's response contains any natural-language text (e.g., 'Let me look that up') to decide whether the task is still in progress, rather than checking stop_reason. What problem does this design have?",
    options: [
      { id: "A", text: "Assistant text can accompany a tool_use block on the same turn, so parsing for the presence of text is an unreliable signal of completion — stop_reason ('tool_use' vs 'end_turn') is the structured, reliable signal to use instead." },
      { id: "B", text: "This design is fully reliable and is the recommended approach in the Claude Agent SDK." },
      { id: "C", text: "Assistant responses never contain any text alongside tool calls, so this check would never trigger falsely." },
      { id: "D", text: "This issue only affects responses that include images." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Parsing natural-language text as a completion signal is specifically called out as an anti-pattern, since text can appear alongside a tool_use block — stop_reason is the structured field designed for this purpose. This is not the recommended approach (B wrong), text commonly does accompany tool calls (C wrong), and the issue isn't specific to image content (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.1 — agentic loop implementation",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.1",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "In the agentic loop, after a tool executes and returns a result, what must happen before the next request is sent to Claude for the loop to function correctly?",
    options: [
      { id: "A", text: "The tool result must be appended to the conversation history and included in the next request, so the model can incorporate the new information into its next reasoning step." },
      { id: "B", text: "The tool result can be discarded, since the model automatically remembers it without being told." },
      { id: "C", text: "The tool result should only be shown to the end user, never sent back to the model." },
      { id: "D", text: "The conversation history should be reset to empty before the next request." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Appending the tool result into conversation history for the next request is the core mechanic that lets the model reason about what just happened — the API is stateless between calls, so discarding the result (B) or resetting history (D) would leave the model with no access to it, and withholding it from the model entirely (C) breaks the loop's ability to reason about the result at all.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.1 — agentic loop implementation",
    difficulty: "easy",
  },
  {
    id: "arch-f-aao-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.2",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "For a simple, narrow research query ('what is our competitor's current pricing for their basic tier?'), the coordinator always routes the request through all three subagents (web search, document analysis, synthesis) regardless of whether document analysis is actually relevant. What is the concern with this design?",
    options: [
      { id: "A", text: "Always invoking the full pipeline regardless of query complexity adds unnecessary latency and cost for simple queries that don't need every subagent — the coordinator should analyze the query and dynamically select which subagents are actually needed." },
      { id: "B", text: "There is no concern; always using every subagent for every query is the recommended default." },
      { id: "C", text: "This design is required because subagents cannot be selectively invoked." },
      { id: "D", text: "This only matters if the query involves numeric data." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Dynamically selecting which subagents a query actually needs — rather than always routing through the full pipeline — is exactly the coordinator design principle at stake, avoiding unnecessary latency and cost. This isn't the recommended default (B wrong), selective invocation is supported (C wrong), and the concern isn't specific to numeric data (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.2 — coordinator-subagent orchestration",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.2",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "A developer considers letting the web-search and document-analysis subagents communicate directly with each other to save a round trip through the coordinator. What is the tradeoff of this design compared to routing all communication through the coordinator?",
    options: [
      { id: "A", text: "Direct subagent-to-subagent communication may save a round trip, but it undermines the coordinator's ability to provide consistent observability, error handling, and controlled information flow across the whole system." },
      { id: "B", text: "There is no tradeoff; direct subagent communication is strictly better in every respect with no downside." },
      { id: "C", text: "Subagents are physically incapable of communicating in any way except through the coordinator, making this scenario impossible." },
      { id: "D", text: "Routing through the coordinator has no relationship to observability or error handling." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Hub-and-spoke routing through the coordinator is specifically valued for observability, consistent error handling, and controlled information flow — bypassing it for a latency saving trades away those benefits, so it's a real tradeoff (A), not a strictly-better change with no downside (B), and while direct communication patterns can technically be built, doing so gives up the coordinator's role (C overstates impossibility, D understates the actual relationship).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.2 — coordinator-subagent orchestration",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.2",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "After an initial synthesis pass, the coordinator identifies that a key sub-topic wasn't adequately covered. What is the appropriate coordinator behavior in this situation?",
    options: [
      { id: "A", text: "Accept the synthesis as final regardless of the identified gap, since re-running any subagent would be wasteful." },
      { id: "B", text: "Re-delegate to the search and/or analysis subagents with a targeted query addressing the specific gap, then re-invoke synthesis with the additional findings — an iterative refinement loop rather than a single fixed pass." },
      { id: "C", text: "Discard the entire research effort and restart the whole pipeline from scratch." },
      { id: "D", text: "Have the synthesis subagent invent plausible content to fill the gap without further research." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Iterative refinement — targeted re-delegation to address a specific identified gap, followed by re-synthesis — is exactly the coordinator pattern for improving coverage without redoing everything. Accepting a known gap (A) or restarting entirely (C) are both worse than a targeted fix, and inventing content to paper over a gap (D) introduces fabrication risk instead of addressing it.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.2 — coordinator-subagent orchestration",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.3",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "A coordinator's allowedTools list does not include 'Task.' What happens when the coordinator's prompt attempts to delegate work to a subagent?",
    options: [
      { id: "A", text: "The coordinator cannot spawn subagents at all, since the Task tool — which must be in allowedTools — is the mechanism for doing so." },
      { id: "B", text: "Subagents can still be spawned through any other tool, since Task is optional for this purpose." },
      { id: "C", text: "The coordinator will spawn subagents automatically regardless of its allowedTools configuration." },
      { id: "D", text: "allowedTools has no relationship to a coordinator's ability to delegate to subagents." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "The Task tool is specifically the mechanism for spawning subagents, and it must be included in allowedTools for a coordinator to use it — subagent spawning isn't achievable through some other tool instead (B wrong), isn't automatic regardless of configuration (C wrong), and allowedTools directly gates this capability (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.3 — subagent invocation and context passing",
    difficulty: "easy",
  },
  {
    id: "arch-f-aao-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.3",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "A coordinator needs to research three independent subtopics in parallel to reduce total latency. How should the Task tool calls be structured to achieve genuine parallelism rather than sequential execution?",
    options: [
      { id: "A", text: "Emit all three Task tool calls within a single coordinator response/turn, rather than issuing them one at a time across separate turns." },
      { id: "B", text: "Issue each Task call in its own separate turn, waiting for each subagent to fully complete before starting the next." },
      { id: "C", text: "Parallel subagent execution is not supported by the Claude Agent SDK." },
      { id: "D", text: "Parallelism is determined entirely by the subagents themselves and cannot be influenced by how the coordinator issues Task calls." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Emitting multiple Task calls within a single coordinator response is what enables them to run in parallel — issuing them one per turn (B) is exactly the sequential pattern that increases total latency instead of reducing it. Parallel execution is supported (C wrong), and how the coordinator structures its Task calls does directly affect this (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.3 — subagent invocation and context passing",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.3",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "An AgentDefinition for the document-analysis subagent restricts its tool access to only document-reading tools, excluding web-search tools. What is the purpose of this restriction?",
    options: [
      { id: "A", text: "Scoping a subagent's tools to its specialization reduces the chance it misuses tools outside its intended role (e.g., a document-analysis agent attempting ad hoc web searches), consistent with keeping each subagent's toolset focused." },
      { id: "B", text: "AgentDefinition cannot restrict tool access; all subagents always have access to every tool in the system." },
      { id: "C", text: "This restriction serves no purpose and is purely arbitrary." },
      { id: "D", text: "Tool restriction in AgentDefinition only applies to the coordinator, never to subagents." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Scoping tools to a subagent's actual specialization is exactly what AgentDefinition's tool restrictions are for, and it reduces the risk of an agent misusing tools outside its intended role. AgentDefinition absolutely can restrict tool access per subagent (B wrong), the restriction serves a clear architectural purpose (C wrong), and this configuration applies to subagents, not just the coordinator (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.3 — subagent invocation and context passing",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.4",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "A customer's message raises two distinct concerns in one turn: a billing question and a separate shipping delay. What is the recommended approach for handling a multi-concern request like this?",
    options: [
      { id: "A", text: "Decompose the request into its distinct concerns, investigate each in parallel using shared context (e.g., the verified customer record), then synthesize a single unified resolution addressing both." },
      { id: "B", text: "Only address whichever concern is mentioned first, ignoring the second entirely." },
      { id: "C", text: "Escalate to a human immediately whenever more than one concern appears in a single message, with no attempt to resolve either." },
      { id: "D", text: "Ask the customer to submit two entirely separate, unrelated tickets before providing any help." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Decomposing a multi-concern request, investigating each concern, and synthesizing one unified resolution reflects the recommended handoff/enforcement pattern for this scenario — ignoring one concern (B), reflexively escalating without attempting resolution (C), or pushing extra friction back onto the customer (D) all fall short of the resolution-quality bar the scenario targets.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.4 — enforcement and handoff patterns",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.4",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "When escalating a complex case mid-process to a human agent, what should the structured handoff summary include, and why?",
    options: [
      { id: "A", text: "Key details like customer ID, root cause, relevant amounts, and a recommended action — because the human agent receiving the escalation typically does not have access to the full conversation transcript and needs this context to pick up the case effectively." },
      { id: "B", text: "Nothing beyond a generic 'please assist' message, since the human agent can always retrieve the full conversation transcript automatically." },
      { id: "C", text: "Only the customer's name, with no other case details, to keep the handoff brief." },
      { id: "D", text: "The complete raw conversation transcript with no summarization, since summarizing risks losing information." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A structured handoff summary with key facts and a recommended action is what actually equips a human agent who lacks transcript access to act quickly — assuming automatic transcript access (B) is the wrong premise the pattern is designed around, an overly sparse handoff (C) omits needed context, and dumping the raw transcript unsummarized (D) doesn't give the human agent the efficient starting point structured summarization provides.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.4 — enforcement and handoff patterns",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.4",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "A team wants to guarantee that identity verification always happens before any financial operation, even though their system prompt already states this requirement clearly. Why might they still add a programmatic prerequisite gate on top of the prompt instruction?",
    options: [
      { id: "A", text: "Because prompt instructions alone have a non-zero failure rate, and for operations where deterministic compliance matters (like financial actions), a programmatic gate provides a guarantee that prompt wording cannot." },
      { id: "B", text: "Because prompt instructions are completely ineffective and never influence model behavior at all." },
      { id: "C", text: "Because programmatic gates and prompt instructions always produce identical reliability, making the gate purely redundant." },
      { id: "D", text: "Because financial operations are the only category of action that can ever go wrong." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is exactly the rationale for layering a programmatic gate on top of prompt guidance — prompt instructions do influence behavior but aren't a guarantee (contradicting B), and a gate is not redundant precisely because it closes that reliability gap (contradicting C); the principle generalizes beyond financial actions to any operation needing deterministic compliance (D overstates the scope).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.4 — enforcement and handoff patterns",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.5",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "The team wants to guarantee that process_refund is never called for an amount exceeding $500 without triggering escalation, regardless of how the model reasons about the situation. What is the most appropriate implementation?",
    options: [
      { id: "A", text: "A tool-call interception hook that checks the refund amount before execution, blocking calls above the threshold and redirecting to the escalation workflow, rather than relying on prompt instructions alone." },
      { id: "B", text: "A system prompt instruction stating the $500 threshold, with no additional enforcement." },
      { id: "C", text: "A few-shot example showing a refund below $500 being processed normally, with no example of the threshold being enforced." },
      { id: "D", text: "Increasing the model's context window so it can better remember the threshold." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A tool-call interception hook is exactly the mechanism for guaranteeing this business rule regardless of model reasoning — a prompt instruction alone (B) or a partial few-shot example (C) both remain probabilistic, and context window size (D) has nothing to do with enforcing a business rule.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.5 — hooks for tool call interception and data normalization",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.5",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "A PostToolUse hook normalizes order-status codes returned by three different backend systems (each using different numeric codes for the same states) into one consistent set of status strings before the agent reasons about them. What problem does this solve?",
    options: [
      { id: "A", text: "Without normalization, the agent would need to correctly interpret multiple inconsistent status-code schemes on its own, increasing the risk of misinterpreting an order's actual state; normalizing before the agent processes the result removes that burden and risk." },
      { id: "B", text: "This hook has no effect on the agent's reasoning, since the agent already understands every backend's raw codes perfectly." },
      { id: "C", text: "PostToolUse hooks cannot modify or transform tool results in any way." },
      { id: "D", text: "This kind of normalization can only be done by the model itself, never by a hook." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Normalizing inconsistent formats before the agent reasons over them directly reduces the risk of misinterpretation — assuming the agent already reliably decodes every raw scheme (B) is optimistic and exactly what normalization guards against, PostToolUse hooks are specifically capable of this kind of transformation (C wrong), and doing it in a hook (rather than leaving it to the model) is exactly the recommended pattern (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.5 — hooks for tool call interception and data normalization",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.6",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "The coordinator is researching an open-ended, unfamiliar topic where it's unclear in advance what sub-questions will turn out to matter most. Which task decomposition approach fits better than a fixed, predetermined set of steps?",
    options: [
      { id: "A", text: "Dynamic decomposition — generating and adjusting subtasks based on what's discovered at each stage of the investigation, rather than committing to a fixed plan upfront." },
      { id: "B", text: "A fixed sequential pipeline with the exact same three steps applied regardless of what's discovered along the way." },
      { id: "C", text: "No decomposition of any kind, handling the entire open-ended topic in a single subagent call." },
      { id: "D", text: "Decomposition strategy has no bearing on how well an open-ended investigation is handled." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Dynamic decomposition — adapting the plan as findings emerge — is the better fit for genuinely open-ended, unpredictable investigation, unlike a fixed pipeline (B) that can't adjust to what's actually discovered. Handling it in one undifferentiated call (C) forfeits the benefit of decomposition entirely, and decomposition strategy clearly does affect outcomes here (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.6 — task decomposition strategies",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.6",
    type: "mcq",
    scenarioContext: CI_SCENARIO,
    stem:
      "A team wants Claude Code to add comprehensive tests to a large, unfamiliar legacy codebase with no existing test suite. Which decomposition approach best fits this open-ended task?",
    options: [
      { id: "A", text: "First map the codebase structure to identify high-impact, high-risk areas, then create a prioritized plan that adapts as dependencies and complications are discovered — rather than committing to a fixed, exhaustive file-by-file plan upfront." },
      { id: "B", text: "Immediately begin writing tests for files in alphabetical order with a fixed, unchanging plan." },
      { id: "C", text: "Write all tests in a single Claude Code invocation with no structure or prioritization at all." },
      { id: "D", text: "Skip mapping the codebase entirely, since understanding structure has no bearing on which areas most need test coverage." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Mapping structure first, then building an adaptive, prioritized plan, is the recommended decomposition for an open-ended, discovery-driven task like this — an arbitrary fixed order like alphabetical (B) ignores actual risk/impact, no structure at all (C) is unlikely to produce comprehensive, prioritized coverage, and skipping the mapping step (D) discards the information the prioritization actually depends on.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.6 — task decomposition strategies",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.7",
    type: "mcq",
    scenarioContext: CI_SCENARIO,
    stem:
      "A developer wants to continue a specific, previously-started investigation into a flaky test failure across multiple separate work sessions over several days. What is the appropriate mechanism?",
    options: [
      { id: "A", text: "Named session resumption (--resume <session-name>), continuing that specific prior conversation rather than starting fresh or trying to resume an unnamed, ambiguous session." },
      { id: "B", text: "fork_session, since forking is intended for exploring divergent new approaches, not continuing the same investigation." },
      { id: "C", text: "There is no way to continue a specific prior investigation across separate work sessions." },
      { id: "D", text: "Starting an entirely new, unrelated session each day with no reference to the prior investigation." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Named session resumption is exactly the mechanism for continuing a specific prior conversation across separate work sessions — fork_session (B) serves a different purpose (branching to explore alternatives from a shared baseline), this capability does exist (C wrong), and starting fresh each day with no continuity (D) discards useful prior context unnecessarily.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.7 — session state, resumption, and forking",
    difficulty: "easy",
  },
  {
    id: "arch-f-aao-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.7",
    type: "mcq",
    scenarioContext: CI_SCENARIO,
    stem:
      "A developer wants to compare two different refactoring approaches starting from the same completed codebase analysis, without redoing that analysis twice. What is the appropriate mechanism?",
    options: [
      { id: "A", text: "fork_session — branching two independent sessions from the shared analysis baseline, so each can explore a different approach without repeating the initial analysis." },
      { id: "B", text: "Named session resumption, since resuming the same named session twice would let both approaches be explored simultaneously in one conversation." },
      { id: "C", text: "Starting two entirely new sessions from scratch, each redoing the full codebase analysis independently." },
      { id: "D", text: "This kind of comparison is not achievable with Claude Code's session management features." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "fork_session is specifically designed for this exact use case — branching from a shared baseline to explore divergent approaches in parallel without redoing the shared work. Resuming the same session twice (B) doesn't create the needed independent branches, redoing the analysis from scratch twice (C) wastes the point of forking, and this capability is well-supported (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.7 — session state, resumption, and forking",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.7",
    type: "mcq",
    scenarioContext: CI_SCENARIO,
    stem:
      "A developer resumes a named session from yesterday to continue a refactor, but several of the files analyzed yesterday have since been modified by a teammate. What should the developer do to keep the resumed session accurate?",
    options: [
      { id: "A", text: "Explicitly inform the resumed session about which specific files changed, so Claude can perform targeted re-analysis rather than assuming yesterday's understanding of those files is still accurate." },
      { id: "B", text: "Assume the resumed session automatically detects any file changes made by teammates with no need to mention them." },
      { id: "C", text: "Force a full re-exploration of the entire codebase from scratch, discarding all value from yesterday's session." },
      { id: "D", text: "Proceed without mentioning the changes, since file modifications never affect the accuracy of a resumed session's prior understanding." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Explicitly informing a resumed session about specific file changes enables targeted re-analysis without discarding the rest of the session's value — assuming automatic detection of external changes (B) isn't reliable, forcing a full re-exploration (C) throws away otherwise-still-valid context, and proceeding as if nothing changed (D) risks acting on now-stale understanding of the modified files.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.7 — session state, resumption, and forking",
    difficulty: "medium",
  },
  {
    id: "arch-f-aao-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.7",
    type: "mcq",
    scenarioContext: CI_SCENARIO,
    stem:
      "A developer's session from last week explored a codebase extensively, but many of the tool results (file contents, search results) are now likely stale since substantial refactoring has happened since then. Is resuming that session the best choice for a new, related task?",
    options: [
      { id: "A", text: "Not necessarily — when prior tool results are likely stale, starting a new session with a structured summary of what's still relevant is often more reliable than resuming a session full of outdated tool results." },
      { id: "B", text: "Yes, resuming is always strictly better than starting fresh, regardless of how stale the prior session's tool results have become." },
      { id: "C", text: "Session resumption automatically discards all stale tool results with no developer action needed." },
      { id: "D", text: "There is no meaningful difference between resuming a stale session and starting a fresh one with an injected summary." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "When prior context is substantially stale, starting fresh with a deliberately curated, structured summary tends to be more reliable than resuming a session cluttered with outdated tool results — resuming isn't automatically the better choice in every case (B wrong), stale results aren't automatically pruned by resumption (C wrong), and the choice between the two approaches does have real practical consequences (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.7 — session state, resumption, and forking",
    difficulty: "hard",
  },
  {
    id: "arch-f-aao-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.5",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "A team is deciding whether a new business rule ('always apply a loyalty discount code automatically for customers with 5+ years of tenure') should be implemented as a hook or left to the system prompt, given that getting it wrong occasionally has low cost (a missed discount can be manually applied later) and high value in developer velocity to build quickly. What is a reasonable way to reason about this?",
    options: [
      { id: "A", text: "Since the cost of occasional non-compliance is low and easily correctable, a prompt-based instruction may be an acceptable starting point, reserving the added engineering effort of a hook for rules where deterministic guarantees are actually necessary." },
      { id: "B", text: "Every business rule must always be implemented as a hook, with no exceptions, regardless of the cost of occasional non-compliance." },
      { id: "C", text: "Hooks and prompt instructions are equally fast to implement, so cost of non-compliance should never factor into this decision." },
      { id: "D", text: "This rule can only be implemented through a full custom agent loop rewrite, with no simpler option available." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Weighing the actual cost of occasional non-compliance against the effort of building deterministic enforcement is a reasonable, judgment-based approach — treating every rule identically regardless of stakes (B) ignores this tradeoff, implementation effort does factor into the decision even if it's not the only factor (C wrong), and a full loop rewrite isn't required just to add a hook (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.5 — hooks for tool call interception and data normalization",
    difficulty: "hard",
  },
  {
    id: "arch-f-aao-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "1.6",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "A coordinator uses prompt chaining (a fixed sequence: search, then analyze, then synthesize) for every research request, including ones where the initial search reveals the topic needs a fundamentally different investigation path than originally assumed. What is the limitation of always using a fixed chain regardless of what's discovered?",
    options: [
      { id: "A", text: "A fixed chain can't adapt when early findings reveal the initial plan no longer fits — some topics need the flexibility of dynamic decomposition to adjust subsequent steps based on what's actually discovered." },
      { id: "B", text: "There is no limitation; a fixed prompt-chaining sequence is always the optimal choice for every research topic regardless of what's discovered along the way." },
      { id: "C", text: "Prompt chaining can never be combined with any adaptive behavior under any circumstances." },
      { id: "D", text: "This limitation only applies to topics involving fewer than three subtopics." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A rigid, predetermined chain can't adjust when the actual findings call for a different path, which is exactly why dynamic decomposition exists as the alternative for genuinely unpredictable topics — a fixed chain isn't universally optimal (B wrong), the two approaches can be combined or chosen situationally rather than being mutually exclusive absolutes (C wrong), and this isn't gated by a specific subtopic count (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 1, Task Statement 1.6 — task decomposition strategies",
    difficulty: "medium",
  },
];
