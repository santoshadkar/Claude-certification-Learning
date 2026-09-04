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
  {
    id: "arch-p-sda-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Translate business problems into Claude-based AI solutions",
    type: "mcq",
    stem:
      "A logistics VP asks for 'an AI system to optimize our delivery routes.' Discovery reveals the actual recurring pain is that dispatchers spend an hour each morning manually reconciling driver availability against yesterday's exceptions before routing can even begin. What is the architect's most defensible next step?",
    options: [
      { id: "A", text: "Immediately scope a route-optimization model, since that's the literal request." },
      { id: "B", text: "Reframe the initiative around the actual bottleneck — the manual morning reconciliation step — since solving that may deliver more value sooner than a full routing-optimization system." },
      { id: "C", text: "Propose both a routing optimizer and a reconciliation tool simultaneously with no sequencing or prioritization." },
      { id: "D", text: "Tell the VP the request is out of scope for Claude-based solutions entirely." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Translating a business problem means identifying the actual constraint before committing to the literally-requested solution — the named pain point may be better and faster solved by addressing reconciliation first. Building the originally-requested system without this reframing (A), pursuing both with no prioritization (C), or dismissing the request outright (D) all skip the discovery step that should shape scope.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Translate business problems into Claude-based AI solutions'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Translate business problems into Claude-based AI solutions",
    type: "mcq",
    stem:
      "A client's stated goal is 'reduce support costs.' The architect discovers that 60% of ticket volume is driven by three recurring, well-documented issues. What translation of this business problem is most useful for scoping a solution?",
    options: [
      { id: "A", text: "A narrow, measurable target: reduce agent handling time on those three specific recurring issue types by a defined percentage, rather than the vague goal of 'reduce support costs' generally." },
      { id: "B", text: "Leave the goal as 'reduce support costs' with no further refinement, since narrowing it risks missing other opportunities." },
      { id: "C", text: "Redefine the goal as 'eliminate the support team entirely,' since that would technically minimize cost the most." },
      { id: "D", text: "Ignore the finding about the three recurring issues, since it wasn't part of the client's original request." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Translating a vague goal into a specific, measurable target grounded in real data (the three recurring issue types) is what makes the problem actually scopable and its success verifiable — leaving the goal unrefined (B) doesn't help scope anything concrete, an extreme reinterpretation like eliminating the team (C) isn't a responsible translation of the actual request, and ignoring directly relevant discovery findings (D) wastes the most useful information available.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Translate business problems into Claude-based AI solutions'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Translate business problems into Claude-based AI solutions",
    type: "scenario-multi-response",
    stem:
      "A client says they want 'an AI assistant like ChatGPT but for our company.' Which two discovery questions would most help translate this into an actual, scoped business solution? (Select 2)",
    options: [
      { id: "A", text: "What specific tasks or decisions should this assistant help with, and who would use it?" },
      { id: "B", text: "How would we measure whether this assistant is actually delivering value once built?" },
      { id: "C", text: "Which competitor product should we copy the branding of most closely?" },
      { id: "D", text: "What is the shortest possible timeline regardless of what the assistant needs to actually do?" },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Clarifying the actual tasks/users (A) and how success will be measured (B) are exactly the questions that turn a vague, comparison-based request into a scopable solution. Branding imitation (C) and timeline pressure with no defined scope (D) don't help translate the underlying business need at all.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Translate business problems into Claude-based AI solutions'",
    difficulty: "easy",
  },
  {
    id: "arch-p-sda-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement:
      "Design end-to-end architectures (input → processing → output → feedback loops)",
    type: "mcq",
    stem:
      "An architecture diagram for a new Claude-powered triage system shows input intake, processing, and output delivery in detail, but the feedback loop is drawn as a single unlabeled arrow with no further specification. What question should the architect ask before considering this design complete?",
    options: [
      { id: "A", text: "What specifically gets logged, who reviews it, and how often the system's outputs get corrected or retrained based on that review — an unspecified feedback loop provides no real detection mechanism." },
      { id: "B", text: "Nothing further is needed; drawing any arrow for the feedback loop is sufficient regardless of detail." },
      { id: "C", text: "Whether the intake and processing stages can be removed entirely to simplify the diagram." },
      { id: "D", text: "Whether the feedback loop can be omitted entirely from the final design, since it's optional for any production system." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "An unspecified feedback loop is effectively no feedback loop — the architect needs to know what's actually logged, reviewed, and acted upon before the design can be considered complete. A vague arrow isn't sufficient (B), removing the other stages doesn't address the actual gap (C), and treating the feedback loop as optional (D) risks exactly the kind of undetected drift a real feedback mechanism is meant to catch.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Design end-to-end architectures (input → processing → output → feedback loops)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement:
      "Design end-to-end architectures (input → processing → output → feedback loops)",
    type: "mcq",
    stem:
      "A proposed architecture for a document-classification system has well-designed input validation and processing stages, but the output stage simply writes results to a database with no schema versioning and no record of which model/prompt version produced each result. What risk does this create?",
    options: [
      { id: "A", text: "Without recording which model/prompt version produced each output, it becomes difficult to diagnose whether a later quality issue is due to a specific version change, and difficult to reprocess only the affected records if a regression is found." },
      { id: "B", text: "There is no risk; output records never need to be traced back to the configuration that produced them." },
      { id: "C", text: "This only matters if the system processes more than one document type." },
      { id: "D", text: "Schema versioning and model/prompt provenance are unrelated to end-to-end architecture design." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Missing provenance on outputs makes it much harder to diagnose and selectively remediate a quality regression tied to a specific version — this traceability is a real architectural concern (B wrong), it applies regardless of document-type variety (C wrong), and provenance/versioning is squarely part of a well-designed output and feedback stage (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Design end-to-end architectures (input → processing → output → feedback loops)'",
    difficulty: "hard",
  },
  {
    id: "arch-p-sda-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement:
      "Design end-to-end architectures (input → processing → output → feedback loops)",
    type: "scenario-multi-response",
    stem:
      "Which two elements are necessary parts of a genuinely complete end-to-end architecture for a production Claude-powered system? (Select 2)",
    options: [
      { id: "A", text: "A defined mechanism for capturing outcomes or corrections and feeding them back into future improvement of the system." },
      { id: "B", text: "A clear specification of what happens to input that fails validation, rather than assuming all input will always be well-formed." },
      { id: "C", text: "A guarantee that the system will never require any future changes once initially deployed." },
      { id: "D", text: "A requirement that all processing happen synchronously in real time regardless of the actual latency needs of the use case." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "A real feedback mechanism (A) and explicit handling of invalid input (B) are both necessary for a genuinely complete design. No production system can be assumed to need zero future changes (C), and forcing synchronous processing regardless of actual latency needs (D) ignores that the right processing pattern should match the use case, not be assumed universally.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Design end-to-end architectures (input → processing → output → feedback loops)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
    type: "mcq",
    stem:
      "A team wants Claude to answer employee questions by retrieving relevant policy documents and generating an answer grounded in them, with no multi-step planning or tool orchestration required beyond retrieval. Which pattern best fits, and why is a full agent unnecessary here?",
    options: [
      { id: "A", text: "An augmented LLM (a single call enriched with retrieved context/tools) fits this bounded task well; a full agent's autonomous multi-step planning isn't needed when the task is a single retrieve-then-answer step." },
      { id: "B", text: "A full autonomous agent is always required for any task that involves retrieval of any kind." },
      { id: "C", text: "A fixed workflow with ten sequential LLM calls is necessary even though the task only requires one retrieval-and-answer step." },
      { id: "D", text: "Pattern selection has no bearing on the complexity or maintainability of this system." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "An augmented LLM — a single enriched call — is the right-sized pattern for a bounded, single-step retrieve-and-answer task; reaching for a full agent (B) or an unnecessarily long fixed workflow (C) adds complexity the task doesn't need. Pattern choice directly affects system complexity and maintainability (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Select appropriate architectural patterns (workflow, agentic, augmented LLM)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-sda-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
    type: "mcq",
    stem:
      "A proposed system must handle an open-ended range of customer requests where the right sequence of internal lookups and actions genuinely can't be predetermined, since it depends heavily on what each specific customer's situation turns out to be. Which pattern is best justified here?",
    options: [
      { id: "A", text: "An agentic pattern, since the model needs to reason about and decide its own sequence of actions based on what it discovers about each specific situation, which a fixed workflow cannot accommodate." },
      { id: "B", text: "A fixed workflow with the same predetermined steps applied to every customer regardless of their specific situation." },
      { id: "C", text: "An augmented LLM making exactly one single call with no ability to take follow-up actions based on what it learns." },
      { id: "D", text: "Pattern selection is arbitrary and has no relationship to how well-defined the task's steps are in advance." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Genuinely unpredictable, situation-dependent action sequences are exactly what justifies agentic autonomy — a fixed workflow (B) can't adapt to this variability, and a single augmented-LLM call with no follow-up capability (C) can't handle a multi-step, discovery-driven task. Pattern selection should be driven by how predictable the task's steps are (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Select appropriate architectural patterns (workflow, agentic, augmented LLM)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
    type: "mcq",
    stem:
      "A team has built a fully autonomous agent for a task that, on review, turns out to always execute the same four steps in the same order for every input, with no actual branching or adaptive decision-making ever occurring in practice. What does this suggest about the original pattern choice?",
    options: [
      { id: "A", text: "The task's actual behavior matches a fixed workflow, not genuine agentic autonomy — the architecture may be more complex than necessary and could likely be simplified to a workflow with equivalent behavior and less overhead." },
      { id: "B", text: "This confirms the agentic pattern was the only possible correct choice, since agents can always be justified after the fact regardless of observed behavior." },
      { id: "C", text: "There is no reason to reconsider architecture choices once a system has already been built and deployed." },
      { id: "D", text: "Observed runtime behavior has no bearing on whether an architectural pattern choice was appropriate." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "If an 'agent' never actually exercises autonomous branching in practice, its real behavior matches a workflow, and simplifying to match reduces unnecessary complexity — this doesn't retroactively justify the original choice (B), architecture decisions should be revisited when evidence suggests a mismatch, not treated as permanently fixed (C), and observed behavior is exactly the evidence that should inform this reassessment (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Select appropriate architectural patterns (workflow, agentic, augmented LLM)'",
    difficulty: "hard",
  },
  {
    id: "arch-p-sda-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Select appropriate architectural patterns (workflow, agentic, augmented LLM)",
    type: "scenario-multi-response",
    stem:
      "Which two questions are most useful for deciding among workflow, agentic, and augmented-LLM patterns for a new system? (Select 2)",
    options: [
      { id: "A", text: "Is the sequence of steps needed to complete the task knowable and fixed in advance, or does it depend on what's discovered along the way?" },
      { id: "B", text: "Does the task require more than a single enriched call, or can it be handled with one retrieval/tool-augmented response?" },
      { id: "C", text: "Which pattern name is currently most discussed in industry news coverage?" },
      { id: "D", text: "Which pattern requires writing the fewest total lines of code, regardless of whether it actually fits the task?" },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Whether the step sequence is knowable in advance (A) and whether a single augmented call suffices (B) are the substantive questions that should drive pattern selection. Industry buzz (C) and raw code-line minimization regardless of fit (D) aren't sound architectural justifications.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Select appropriate architectural patterns (workflow, agentic, augmented LLM)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-sda-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Design multi-agent systems and orchestration strategies",
    type: "mcq",
    stem:
      "A proposed multi-agent system has five subagents, but reviewing the actual task reveals that three of the five subagents would always be invoked together in the same fixed order with no independent decision-making between them. What does this suggest for the orchestration design?",
    options: [
      { id: "A", text: "Those three subagents that always run together in a fixed order likely don't need to be separate, independently-orchestrated agents — they could be consolidated into a single step or a simple fixed sub-sequence within the broader orchestration, reducing unnecessary coordination overhead." },
      { id: "B", text: "All five subagents must remain fully separate and independently orchestrated regardless of how predictably they're invoked together." },
      { id: "C", text: "The orchestration design should add even more subagents to increase the system's perceived sophistication." },
      { id: "D", text: "Orchestration complexity has no relationship to how many genuinely independent decision points exist in a system." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Subagents that always run together in a fixed order aren't exercising independent orchestration value, so consolidating them reduces coordination overhead without losing real capability — keeping them artificially separate (B) or adding more subagents for appearance (C) both add unnecessary complexity, and orchestration complexity should track actual decision points, not be treated as independent of them (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Design multi-agent systems and orchestration strategies'",
    difficulty: "hard",
  },
  {
    id: "arch-p-sda-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Design multi-agent systems and orchestration strategies",
    type: "mcq",
    stem:
      "A client wants to know why their multi-agent customer-service design is more expensive to operate than a single-agent competitor's system that seems to perform comparably. What is a reasonable line of investigation?",
    options: [
      { id: "A", text: "Examine whether the multi-agent design's specialization and coordination are actually being exercised in typical usage, or whether most requests could be handled just as well by a simpler, less costly architecture." },
      { id: "B", text: "Assume multi-agent systems are always worth their extra cost regardless of whether the specialization is actually being used." },
      { id: "C", text: "Conclude immediately that the competitor's simpler system must be technically inferior, without further investigation." },
      { id: "D", text: "Multi-agent orchestration cost has no relationship to how often the system's specialization is actually exercised." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Investigating whether the added coordination and specialization are actually earning their cost in typical usage is exactly the kind of architectural accountability this scenario calls for — assuming the extra cost is always justified (B) or dismissing the simpler competitor without evidence (C) both skip real investigation, and orchestration cost is directly tied to how much genuine specialization/coordination is exercised (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Design multi-agent systems and orchestration strategies'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Design multi-agent systems and orchestration strategies",
    type: "scenario-multi-response",
    stem:
      "Which two are legitimate architectural justifications for adopting a multi-agent design over a single-agent one? (Select 2)",
    options: [
      { id: "A", text: "The task genuinely decomposes into independent specialties (e.g., research, analysis, writing) that benefit from focused, isolated context." },
      { id: "B", text: "Different parts of the task have meaningfully different tool/access requirements that are cleaner to scope separately per specialized agent." },
      { id: "C", text: "Multi-agent systems are considered a more modern-sounding architecture choice for a proposal document." },
      { id: "D", text: "The team already has unused budget allocated that must be spent regardless of actual architectural fit." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Genuine task decomposition into independent specialties (A) and cleanly separable tool/access scoping (B) are substantive architectural reasons for multi-agent design. Sounding more modern in a proposal (C) or spending allocated budget regardless of fit (D) aren't legitimate technical justifications.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Design multi-agent systems and orchestration strategies'",
    difficulty: "easy",
  },
  {
    id: "arch-p-sda-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Apply decomposition techniques for complex problem solving",
    type: "mcq",
    stem:
      "A client wants a single Claude-powered system that handles lead scoring, personalized outreach drafting, and follow-up scheduling. The architect proposes building and fully validating lead scoring first, with its own success criteria, before starting outreach drafting. What is the architectural benefit of this approach over building all three simultaneously?",
    options: [
      { id: "A", text: "Validating each component independently surfaces problems (e.g., a flawed scoring model) before they're compounded by dependent downstream components, and allows each piece to be tested against its own clear success criteria." },
      { id: "B", text: "There is no benefit; building all three components simultaneously always produces an equally reliable result with no additional risk." },
      { id: "C", text: "This approach is only valid if the client has an unlimited budget and timeline." },
      { id: "D", text: "Decomposing this system delays the client's ability to ever see working software until all three components are completely finished." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Validating each component against its own success criteria before building dependent downstream pieces reduces the risk of compounding an undetected flaw — building everything simultaneously (B) doesn't reduce this risk, this approach isn't gated by unlimited resources (C), and sequenced validation is compatible with delivering working software incrementally, not just at the very end (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Apply decomposition techniques for complex problem solving'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Apply decomposition techniques for complex problem solving",
    type: "mcq",
    stem:
      "An architect decomposes a large compliance-automation initiative into pieces based on which internal team happens to currently own each existing manual process, rather than based on the actual data and logical dependencies between the pieces. What risk does this decomposition approach carry?",
    options: [
      { id: "A", text: "Decomposing along organizational ownership rather than actual logical/data dependencies risks creating pieces that don't integrate cleanly, since team boundaries don't necessarily align with where real technical dependencies lie." },
      { id: "B", text: "There is no risk; organizational ownership is always the most reliable basis for technical decomposition." },
      { id: "C", text: "This risk only applies if fewer than two teams are involved in the initiative." },
      { id: "D", text: "Decomposition strategy has no bearing on how well the resulting pieces will integrate." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Decomposing by organizational convenience rather than actual technical/data dependencies risks a poor fit between the pieces when they need to integrate — org structure isn't inherently the most reliable technical decomposition basis (B wrong), this risk isn't gated by team count (C wrong), and decomposition strategy directly affects integration quality (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Apply decomposition techniques for complex problem solving'",
    difficulty: "hard",
  },
  {
    id: "arch-p-sda-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Apply decomposition techniques for complex problem solving",
    type: "scenario-multi-response",
    stem:
      "Which two practices reflect sound decomposition of a complex, multi-component AI initiative? (Select 2)",
    options: [
      { id: "A", text: "Sequencing components based on real dependencies, so a downstream component isn't built on an unvalidated upstream assumption." },
      { id: "B", text: "Giving each component its own independently testable success criteria rather than only evaluating the fully assembled system at the very end." },
      { id: "C", text: "Building every component fully in parallel with no regard for dependencies between them, to finish as quickly as possible." },
      { id: "D", text: "Deferring all testing until the entire multi-component system is fully assembled." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Dependency-aware sequencing (A) and independently testable success criteria per component (B) are both sound decomposition practices that reduce integration risk. Building everything in parallel with no regard for dependencies (C) risks compounding undetected problems, and deferring all testing to full assembly (D) forfeits the early-detection benefit decomposition is meant to provide.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Apply decomposition techniques for complex problem solving'",
    difficulty: "easy",
  },
  {
    id: "arch-p-sda-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement:
      "Align solutions to business value pillars (efficiency, transformation, productivity, cost, performance SLAs)",
    type: "mcq",
    stem:
      "A client's leadership team disagrees internally about whether a proposed Claude-powered system's primary goal is cost reduction or enabling a new capability the business couldn't do before (transformation). What is the architect's most useful contribution to resolving this disagreement?",
    options: [
      { id: "A", text: "Facilitate an explicit conversation to name the primary value pillar for this specific initiative, since cost-reduction and transformation-oriented designs can lead to meaningfully different architectural tradeoffs (e.g., minimizing spend vs. investing in new capability at higher initial cost)." },
      { id: "B", text: "Proceed with the architecture design without resolving the disagreement, since the choice of primary value pillar never affects technical decisions." },
      { id: "C", text: "Unilaterally decide which pillar is correct without involving the client's leadership in the decision." },
      { id: "D", text: "Tell leadership that a system can never optimize for both cost and transformation to any degree, forcing an all-or-nothing choice." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Surfacing and helping resolve which value pillar is primary is a genuinely useful architectural contribution, since it materially affects design tradeoffs — proceeding without resolving it (B) risks building toward the wrong priority, deciding unilaterally without the client (C) oversteps the architect's role in a business decision, and forcing a false all-or-nothing framing (D) overstates the actual tradeoff, since some designs can reasonably balance both to a degree.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Align solutions to business value pillars'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement:
      "Align solutions to business value pillars (efficiency, transformation, productivity, cost, performance SLAs)",
    type: "scenario-multi-response",
    stem:
      "A proposed architecture change would improve output quality by 5% but increase per-request cost by 4x, with no stated latency-sensitive use case involved. Which two questions should the architect ask before recommending this change? (Select 2)",
    options: [
      { id: "A", text: "Does this use case's business value actually depend on capturing that additional 5% quality improvement, or would the current quality level already satisfy the business need?" },
      { id: "B", text: "Is the 4x cost increase sustainable at the actual production volume this system will run at?" },
      { id: "C", text: "Which single value pillar sounds most impressive when mentioned in a client-facing slide deck?" },
      { id: "D", text: "Can this change be adopted without any further evaluation, since a quality improvement is always worth any cost increase?" },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Whether the marginal quality gain is actually needed (A) and whether the cost increase is sustainable at real production volume (B) are the substantive questions for weighing this tradeoff against business value pillars. Optimizing for slide-deck impressiveness (C) isn't a sound basis for the decision, and assuming any quality gain justifies any cost (D) skips the actual cost-benefit evaluation.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Align solutions to business value pillars'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement:
      "Align solutions to business value pillars (efficiency, transformation, productivity, cost, performance SLAs)",
    type: "mcq",
    stem:
      "A nonprofit client has a tight budget and a use case (internal document search) with no strict latency requirement. An architect recommends the most capable, highest-cost model tier regardless of these constraints, reasoning that 'better is always better.' What is the issue with this recommendation?",
    options: [
      { id: "A", text: "It ignores the client's actual cost constraint and the use case's relaxed latency needs — a more cost-efficient tier would likely satisfy this use case's actual requirements at a cost the client can sustain." },
      { id: "B", text: "There is no issue; the most capable tier is always the objectively correct recommendation regardless of a client's stated budget constraints." },
      { id: "C", text: "The recommendation is flawed only because internal document search is technically impossible with any model tier." },
      { id: "D", text: "Cost and budget constraints are irrelevant considerations in any architectural recommendation." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Ignoring a client's real budget constraint and the use case's actual (relaxed) latency needs in favor of a blanket 'better is always better' rule fails to align the recommendation with the client's actual business value pillars — this isn't an objectively correct default (B wrong), the task itself is entirely feasible with an appropriate tier (C wrong), and cost/budget are legitimate, central considerations in architectural recommendations (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Align solutions to business value pillars'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement:
      "Design end-to-end architectures (input → processing → output → feedback loops)",
    type: "mcq",
    stem:
      "An architecture review reveals that a system's feedback loop only captures cases where users explicitly file a complaint, missing the much larger set of users who simply stop using a poor output without ever reporting it. What does this gap suggest?",
    options: [
      { id: "A", text: "Relying solely on explicit complaints as the feedback signal likely understates the true failure rate; the feedback loop should also account for implicit signals (e.g., abandonment, low engagement) to get an accurate picture of quality." },
      { id: "B", text: "Explicit complaints are always a complete and sufficient measure of a system's true failure rate, with no gap to address." },
      { id: "C", text: "Feedback loops should only ever rely on explicit user complaints, since implicit signals are never meaningful." },
      { id: "D", text: "This gap has no bearing on the system's ability to detect and correct quality problems over time." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Explicit-complaint-only feedback systematically undercounts real failures, since many dissatisfied users simply disengage rather than complain — incorporating implicit signals gives a more accurate picture. Complaints alone aren't sufficient (B wrong), implicit signals do carry real meaning (C wrong), and this gap directly undermines the system's ability to detect quality problems (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Design end-to-end architectures (input → processing → output → feedback loops)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Design multi-agent systems and orchestration strategies",
    type: "mcq",
    stem:
      "A proposed multi-agent design routes every single request through all available specialized subagents 'to be thorough,' regardless of whether a given request actually needs each subagent's specialty. What orchestration principle does this violate?",
    options: [
      { id: "A", text: "A well-designed orchestration strategy should route requests dynamically to only the subagents actually relevant to that request, rather than invoking the full set unconditionally, which adds unnecessary latency and cost." },
      { id: "B", text: "Routing every request through every subagent unconditionally is always the most thorough and therefore always the correct orchestration strategy." },
      { id: "C", text: "Orchestration strategy has no effect on a multi-agent system's latency or cost." },
      { id: "D", text: "Dynamic routing based on request relevance is never a valid orchestration technique." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Dynamic, relevance-based routing — rather than unconditionally invoking every subagent for every request — is the sound orchestration principle here, avoiding unnecessary latency and cost. 'More thorough is always better' (B) ignores this real cost, orchestration strategy clearly affects latency/cost (C wrong), and dynamic routing is a well-established, valid technique (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Design multi-agent systems and orchestration strategies'",
    difficulty: "medium",
  },
  {
    id: "arch-p-sda-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Apply decomposition techniques for complex problem solving",
    type: "mcq",
    stem:
      "An architect decomposing a large contract-analysis initiative identifies three components (clause extraction, risk scoring, summary generation) but no clear owner or success criterion for how they'll be integrated and tested together as a whole, only individually. What gap does this represent?",
    options: [
      { id: "A", text: "Decomposition needs an integration plan alongside the component-level breakdown — validating each piece independently doesn't guarantee the assembled whole works correctly, so integration itself needs its own explicit ownership and success criteria." },
      { id: "B", text: "There is no gap; validating each of the three components independently is always sufficient to guarantee the fully integrated system works correctly with no further verification needed." },
      { id: "C", text: "Decomposition should never include more than one component, since integration concerns only arise with three or more pieces." },
      { id: "D", text: "Integration planning is entirely unrelated to decomposition strategy." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Component-level validation alone doesn't guarantee correct integration — decomposition should also account for how the pieces come together, with its own explicit ownership and criteria. Assuming independent validation is automatically sufficient (B) skips this real risk, the number of components isn't the deciding factor for whether integration needs planning (C wrong), and integration planning is a direct extension of decomposition strategy, not unrelated to it (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 1 — 'Apply decomposition techniques for complex problem solving'",
    difficulty: "hard",
  },
];
