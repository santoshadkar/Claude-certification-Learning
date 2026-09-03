import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Agentic Architecture & Orchestration" as const;
const CERT = "architect-foundations" as const;

const SUPPORT_SCENARIO =
  "You are building a customer support resolution agent with the Claude Agent SDK. It has custom MCP tools: get_customer, lookup_order, process_refund, and escalate_to_human. The team's target is 80%+ first-contact resolution while still escalating appropriately.";

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
];
