import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Solution Design & Architecture" as const;
const CERT = "architect-professional" as const;

export const questions: QuestionInput[] = [
  {
    id: "arch-p-sda-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Translate business problems into Claude-based AI solutions",
    type: "mcq",
    stem:
      "A retail client says 'we want an AI chatbot.' Discovery reveals the actual pain point is that customer service reps spend 40% of their time manually looking up order status across three disconnected systems. What is the architect's most appropriate first step?",
    options: [
      { id: "A", text: "Immediately scope a customer-facing chatbot, since that's what was requested." },
      {
        id: "B",
        text: "Reframe the problem around the actual pain point — reducing time spent on manual order-status lookups — and design toward that measurable outcome, which may or may not be a chatbot.",
      },
      { id: "C", text: "Build both a chatbot and an internal tool simultaneously to cover all bases." },
      { id: "D", text: "Ask the client to more precisely specify chatbot requirements before doing anything else." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Translating a business problem means identifying the actual outcome needed, not accepting the first proposed solution at face value — the named pain point (manual lookups across systems) may be better solved by an internal tool than the requested chatbot. Building everything at once (C) or narrowing prematurely on the originally requested format (A, D) skips the reframing step.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 (Solution Design & Architecture) — 'Translate business problems into Claude-based AI solutions'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Design end-to-end architectures (input → processing → output → feedback loops)",
    type: "mcq",
    stem:
      "A team ships a Claude-powered document classification pipeline with input ingestion, processing, and output delivery, but no logging of misclassifications and no mechanism to review them. Six months later, accuracy has quietly degraded and no one noticed until a customer complained. What was missing from the architecture?",
    options: [
      { id: "A", text: "A faster model." },
      {
        id: "B",
        text: "A feedback loop — logging outcomes and enabling review or correction — that would have surfaced the degradation before a customer noticed.",
      },
      { id: "C", text: "A larger context window." },
      { id: "D", text: "More retrieved context per document." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "An end-to-end architecture needs a feedback loop (monitoring, review) to catch drift after launch. The failure here isn't model capability (A), context size (C), or retrieval depth (D) — it's the missing detection mechanism.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Design end-to-end architectures (input → processing → output → feedback loops)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
    type: "scenario-multi-response",
    stem:
      "Scenario 1: a fixed 3-step process (extract, validate, format) applied identically to every invoice. Scenario 2: a research task where the right next step depends on what's discovered at each stage and can't be predetermined. Select the two correct pattern matches. (Select 2)",
    options: [
      { id: "A", text: "Scenario 1 → a workflow (fixed sequence of LLM calls)." },
      { id: "B", text: "Scenario 1 → a fully autonomous agent that plans its own steps." },
      { id: "C", text: "Scenario 2 → an agent that plans its own steps based on what it finds." },
      { id: "D", text: "Scenario 2 → a workflow with the exact same fixed 3 steps as scenario 1." },
    ],
    correctOptionIds: ["A", "C"],
    selectCount: 2,
    explanation:
      "A predictable, fixed sequence is a workflow's ideal use case (A); an open-ended task whose path depends on intermediate findings is exactly what justifies agent autonomy (C). Using a full agent for a fixed, predictable process (B) adds unnecessary complexity, and forcing an open-ended task into a fixed pipeline (D) can't adapt to what's actually discovered.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Select appropriate architectural patterns (workflow, agentic, augmented LLM)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Design multi-agent systems and orchestration strategies",
    type: "mcq",
    stem:
      "A proposed system uses four specialized subagents (intake, research, drafting, review) coordinated by a lead agent for a task that, on inspection, is really just 'summarize one document and draft one email.' What is the architect's most defensible recommendation?",
    options: [
      { id: "A", text: "Keep the four-subagent design, since more specialization is always better." },
      {
        id: "B",
        text: "Simplify to a single agent or even a straightforward workflow, since the task doesn't have independent specialties that justify multi-agent coordination overhead.",
      },
      { id: "C", text: "Add a fifth subagent for quality assurance to further improve the design." },
      { id: "D", text: "Keep the design but remove the lead agent to reduce one layer of complexity." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Multi-agent orchestration is justified when a task genuinely decomposes into independent specialties; a task this simple doesn't need it, and the coordination overhead (context isolation, aggregation, error handling) would be pure cost with no benefit. Adding more agents (A, C) compounds the problem, and removing just the coordinator while keeping four subagents (D) doesn't address the root over-engineering.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Design multi-agent systems and orchestration strategies'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Apply decomposition techniques for complex problem solving",
    type: "mcq",
    stem:
      "A client wants a single system that handles contract intake, risk scoring, and renewal reminders. The architect proposes building and validating contract intake first, in isolation, before starting risk scoring. What principle does this reflect?",
    options: [
      { id: "A", text: "Avoiding decomposition entirely by building everything as one unit." },
      {
        id: "B",
        text: "Decomposing the complex requirement into independently deliverable, independently testable pieces so each can be validated before the whole system is assembled.",
      },
      { id: "C", text: "Delaying all testing until the entire system, including all three pieces, is complete." },
      { id: "D", text: "Building risk scoring first, because it's technically the hardest piece." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "This is exactly the value of decomposition — validating one piece before building the next reduces the risk of discovering integration problems only after everything is built. Building as one undifferentiated unit (A) or deferring all testing to the end (C) forfeits that benefit, and the scenario describes an intake-first order, not a hardest-first order (D).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Apply decomposition techniques for complex problem solving'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement:
      "Align solutions to business value pillars (efficiency, transformation, productivity, cost, performance SLAs)",
    type: "mcq",
    stem:
      "An architect proposes replacing a single-model workflow with a multi-agent design that improves output quality by 8% but roughly triples per-request latency and cost. The client's stated priority is a strict sub-2-second response SLA for a live customer-facing feature. What should the architect recommend?",
    options: [
      { id: "A", text: "Adopt the multi-agent design, since higher quality is always the right choice." },
      {
        id: "B",
        text: "Recommend against the multi-agent design for this use case, since it would violate the stated performance SLA — a business value pillar that takes priority here over a modest quality gain.",
      },
      { id: "C", text: "Adopt the multi-agent design and simply inform the client the SLA will now be missed." },
      { id: "D", text: "Split the difference by using the multi-agent design for half of requests at random." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Architecture decisions must be weighed against the business value pillars that actually matter for the use case — here, a hard latency SLA outweighs a modest quality improvement achieved at three times the latency. Ignoring the SLA (A, C) or applying the tradeoff inconsistently (D) fails to align the solution with the stated priority.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Align solutions to business value pillars'",
    difficulty: "medium",
  },
];
