import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "dev-ai-001",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Understanding Requirements",
    type: "mcq",
    stem:
      "A team is scoping a Claude-powered internal support bot. The business requirement states responses must complete within 2 seconds for a good user experience, and the bot must support 500 concurrent users. Which type of requirement does the '2 seconds' constraint represent, and how should it influence the design?",
    options: [
      { id: "A", text: "It's a latency requirement that should influence model tier selection and API pattern (e.g., a real-time Messages API call with a faster model), not just infrastructure scaling." },
      { id: "B", text: "It should be ignored until after launch, then optimized based on user complaints." },
      { id: "C", text: "It's irrelevant to model selection, since all Claude models respond at the same speed." },
      { id: "D", text: "It's an infrastructure requirement only, and can be addressed purely by adding more servers." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A stated latency requirement is functional and should directly shape model tier and API pattern choices up front. Treating it as pure infrastructure (D), assuming uniform model speed across tiers (C), or deferring it until after launch (B) all misapply the requirement.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 (Applications and Integration) — 'Understanding Requirements'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-002",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Systems Life Cycle",
    type: "mcq",
    stem:
      "Six months after launching a Claude-powered feature, the team upgrades to a newer model version for cost savings. Which activity is most clearly part of the 'maintain' phase of the systems life cycle for this integration, beyond standard bug fixing?",
    options: [
      { id: "A", text: "Waiting for users to report problems before checking anything." },
      { id: "B", text: "Nothing extra is needed, since newer model versions are always strict improvements." },
      { id: "C", text: "Deleting the old model's version pin from configuration immediately." },
      { id: "D", text: "Re-running the eval suite and re-validating prompts against the new model version, since behavior can shift across releases." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Model releases can include behavior changes, so re-validating prompts and evals is the maintenance step specific to AI systems. Assuming automatic strict improvement (B) or waiting for user complaints (A) skips proactive validation, and removing the old version pin before validating the new one (C) removes your ability to roll back if something regresses.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Systems Life Cycle'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-003",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Claude API Mechanics",
    type: "scenario-multi-response",
    stem:
      "A developer needs to (1) get an immediate answer for a live chat widget and (2) process 50,000 historical support tickets overnight for a trend report. Which two API choices correctly match each need? (Select 2)",
    options: [
      { id: "A", text: "Use the Message Batches API for the overnight trend report to reduce cost on a latency-tolerant job." },
      { id: "B", text: "Use extended thinking on every live chat message to maximize response depth regardless of latency." },
      { id: "C", text: "Use the synchronous Messages API for the live chat widget." },
      { id: "D", text: "Use the synchronous Messages API for the overnight batch job to guarantee results by morning." },
    ],
    correctOptionIds: ["A","C"],
    selectCount: 2,
    explanation:
      "Real-time, user-facing interaction needs the synchronous API (C); a large, latency-tolerant overnight job is the right fit for the batch API's cost savings (A). Using synchronous calls for a huge overnight batch (D) forfeits the batch discount for no benefit, and maximizing thinking depth on every live chat turn (B) would hurt the latency the widget actually needs.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude API Mechanics'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-004",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Software Engineering Foundations",
    type: "mcq",
    stem:
      "A pull request adds a new Claude API call inside an existing Node.js service. What is the most appropriate way to handle the API call given standard software engineering practice?",
    options: [
      { id: "A", text: "Poll a global variable in a loop until the response is ready." },
      { id: "B", text: "Call the API asynchronously (e.g., with async/await), matching how the rest of the service already handles I/O-bound operations." },
      { id: "C", text: "Skip error handling, since the Claude API rarely fails." },
      { id: "D", text: "Call the API synchronously and block the event loop until the response returns." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "An API call is I/O-bound and should be handled asynchronously, consistent with how the rest of the codebase handles similar operations. Blocking the event loop (D) or polling a variable in a loop (A) are anti-patterns, and skipping error handling (C) ignores standard practice for any network call.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Software Engineering Foundations'",
    difficulty: "easy",
  },
  {
    id: "dev-ai-005",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Claude Application Design",
    type: "mcq",
    stem:
      "The same underlying assistant logic is deployed both as a Claude Code CLI tool for internal engineers and as an embedded chat widget on a public website using the API directly. What is an important application-design consideration specific to this dual deployment?",
    options: [
      { id: "A", text: "Only the CLI version needs a system prompt; the public widget can rely entirely on user messages." },
      { id: "B", text: "The public-facing widget should reuse the CLI tool's full file-system access for consistency." },
      { id: "C", text: "Instructions and content boundaries should be adapted per surface — a CLI tool trusts the invoking engineer more than a public-facing widget should trust arbitrary website visitors." },
      { id: "D", text: "No special consideration is needed, since Claude interprets instructions identically across every surface." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "How Claude interprets instructions and what content boundaries make sense differs by surface and trust level — an internal CLI tool and a public-facing widget have very different threat models. Treating them identically (D), granting a public surface the same access as a trusted internal tool (B), or skipping a system prompt on the public surface (A) are all design mistakes.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude Application Design'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-006",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Configuration Management",
    type: "mcq",
    stem:
      "A team's production Claude integration currently uses a floating model alias that always resolves to 'the latest' model version. What risk does this configuration choice introduce, and what is the standard mitigation?",
    options: [
      { id: "A", text: "A model update could silently change application behavior in production; pinning to a specific model version and upgrading deliberately, with re-validation, mitigates this." },
      { id: "B", text: "No risk — floating aliases are the recommended production configuration." },
      { id: "C", text: "The only risk is increased cost, which can be ignored." },
      { id: "D", text: "Floating aliases are only a concern for the Claude Agent SDK, not the Messages API." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A floating alias can introduce unreviewed behavior changes when the underlying model updates; pinning a version and upgrading deliberately (re-validating prompts and evals) is the standard configuration-management mitigation. Treating this as risk-free (B), reducing it to only a cost concern (C), or scoping it to only one SDK (D) all miss the point.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Configuration Management'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-007",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Understanding Requirements",
    type: "mcq",
    stem:
      "A spec for a new Claude-powered feature states: 'must support document uploads up to 20MB' and 'must return a response within 3 seconds for short queries.' How should these two requirements be classified?",
    options: [
      { id: "A", text: "Requirements like these never affect architecture decisions." },
      { id: "B", text: "Both are infrastructure requirements with no functional component." },
      { id: "C", text: "Both requirements are purely cosmetic and don't affect implementation." },
      { id: "D", text: "The upload size limit is largely a functional/infrastructure constraint on input handling, while the response-time target is a latency requirement that should inform model tier and API pattern choice." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Distinguishing what kind of constraint each requirement represents — input handling capacity versus a latency target — is what lets a developer translate it into concrete design decisions like model tier and API pattern. Treating both as purely infrastructure (B) or cosmetic (C) misses this, and requirements like these routinely do shape architecture (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Understanding Requirements'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-008",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Understanding Requirements",
    type: "scenario-multi-response",
    stem:
      "A product requirement says the new feature must 'feel fast' with no numeric target. Which two actions are appropriate before beginning implementation? (Select 2)",
    options: [
      { id: "A", text: "Work with stakeholders to translate 'feel fast' into a concrete, measurable latency target (e.g., p95 response time under 2 seconds)." },
      { id: "B", text: "Assume 'feel fast' has no bearing on any technical decision and can be ignored entirely." },
      { id: "C", text: "Proceed directly to implementation using whatever model tier is currently the team's default, without clarifying the requirement." },
      { id: "D", text: "Choose a model tier and API pattern (real-time vs. batch) based on the clarified, concrete target once it exists." },
    ],
    correctOptionIds: ["A","D"],
    selectCount: 2,
    explanation:
      "Translating vague language into a measurable target (A) and then using that target to inform concrete choices like model tier and API pattern (D) is the correct sequence. Proceeding without clarification (C) risks building the wrong thing, and ignoring the requirement (B) discards a real signal about what's needed.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Understanding Requirements'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-009",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Systems Life Cycle",
    type: "mcq",
    stem:
      "Where in a typical SDLC does eval-suite execution against a Claude integration most naturally fit, to catch regressions before they reach production?",
    options: [
      { id: "A", text: "Only after a production incident has already occurred." },
      { id: "B", text: "As an automated step in the CI pipeline, similar to how unit tests run on every pull request, so prompt or model changes are validated before merging." },
      { id: "C", text: "Evals have no natural place in an SDLC and should be run independently of any pipeline." },
      { id: "D", text: "Only manually, at the developer's discretion, with no fixed place in the pipeline." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Running evals automatically in CI, akin to unit tests, catches regressions from prompt or model changes before they merge — leaving it purely to discretion (D) or only after an incident (A) both miss regressions earlier detection would catch, and evals do have a natural, integrable place in the pipeline (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Systems Life Cycle'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-010",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Claude API Mechanics",
    type: "mcq",
    stem:
      "A chat application shows the user nothing until Claude's full response is generated, causing a noticeably long pause. What API mechanic would most directly improve perceived responsiveness?",
    options: [
      { id: "A", text: "Increasing max_tokens to allow a longer response." },
      { id: "B", text: "Disabling the system prompt entirely." },
      { id: "C", text: "Streaming — displaying tokens incrementally as they're generated, rather than waiting for the complete response." },
      { id: "D", text: "Switching to the Message Batches API for this live interaction." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Streaming directly addresses perceived latency by showing output incrementally rather than all at once. The Batches API (D) is for asynchronous, non-live workloads and would make this worse, increasing max_tokens (A) doesn't address responsiveness, and removing the system prompt (B) is unrelated to the perceived-speed problem.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude API Mechanics'",
    difficulty: "easy",
  },
  {
    id: "dev-ai-011",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Claude API Mechanics",
    type: "mcq",
    stem:
      "A developer needs Claude to analyze the content of user-submitted photos of receipts to extract line items. What API capability is directly relevant here?",
    options: [
      { id: "A", text: "Vision — passing image content as input so Claude can analyze what's depicted, rather than requiring the text to be manually transcribed first." },
      { id: "B", text: "The Message Batches API, which is required for any image-based request." },
      { id: "C", text: "Extended thinking, which is unrelated to accepting image input." },
      { id: "D", text: "Prompt caching, which has no bearing on accepting image input." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Vision input is exactly what's needed to let Claude analyze image content directly. Extended thinking (C) and prompt caching (D) are unrelated capabilities, and the batch API (B) is about processing pattern, not a requirement for handling images.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude API Mechanics'",
    difficulty: "easy",
  },
  {
    id: "dev-ai-012",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Claude API Mechanics",
    type: "mcq",
    stem:
      "A developer enables extended thinking for a task involving simple, well-defined text formatting that doesn't require deep reasoning. What is the likely tradeoff of this choice?",
    options: [
      { id: "A", text: "There is no tradeoff; extended thinking should always be enabled regardless of task." },
      { id: "B", text: "Extended thinking only affects image inputs, not text formatting tasks." },
      { id: "C", text: "Extended thinking has no effect on latency or cost." },
      { id: "D", text: "Extended thinking adds latency and token cost that likely isn't justified for a simple, well-defined task that doesn't need deeper reasoning." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Extended thinking trades latency and token cost for deeper reasoning — applying it to a simple task that doesn't need that depth wastes that cost for no benefit, contrary to A's blanket recommendation. It applies broadly, not just to images (B wrong), and it does have real cost/latency impact (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude API Mechanics'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-013",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Claude API Mechanics",
    type: "mcq",
    stem:
      "A developer wants to take advantage of prompt caching for a system prompt plus a large reference document that's identical across many requests, followed by a short, varying user question. How should the request be structured to make caching effective?",
    options: [
      { id: "A", text: "Prompt caching only works for the user's question, never for a system prompt." },
      { id: "B", text: "Place the static system prompt and reference document first (the stable, reusable prefix), followed by the varying user question." },
      { id: "C", text: "Place the varying user question first, followed by the static system prompt and reference document." },
      { id: "D", text: "Order doesn't matter for prompt caching to be effective." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Prompt caching works by reusing a stable prefix, so the static content needs to come first, with variable content afterward — reversing the order (C) breaks the reusable-prefix structure caching depends on, order does matter (D wrong), and system prompts and reference material are exactly the kind of content caching is meant to reuse (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude API Mechanics'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-014",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Claude API Mechanics",
    type: "mcq",
    stem:
      "A company accesses Claude through a third-party cloud platform rather than directly through Anthropic's API. What generally stays the same, and what typically differs?",
    options: [
      { id: "A", text: "Streaming is never available when accessing Claude through a third-party platform." },
      { id: "B", text: "Nothing at all differs between direct API access and third-party platform access." },
      { id: "C", text: "The core request/response mechanics (messages, tools, streaming) generally stay conceptually similar, while model identifiers and authentication typically differ by platform." },
      { id: "D", text: "Tool use is only available through Anthropic's direct API, never through third-party platforms." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "The underlying Messages API mechanics stay conceptually consistent across access paths, while platform-specific details like model IDs and auth do differ — some difference does exist (B wrong), and core capabilities like tool use (D) and streaming (A) aren't exclusive to the direct API.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude API Mechanics'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-015",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Software Engineering Foundations",
    type: "mcq",
    stem:
      "A Claude-triggered action calls an internal API to charge a customer, and the network call times out without a clear response, so the client retries. What software engineering principle is most relevant to avoiding a duplicate charge?",
    options: [
      { id: "A", text: "Idempotency — designing the charge operation so that retrying the same request with the same identifier doesn't result in a duplicate side effect." },
      { id: "B", text: "Prompt engineering, since this is fundamentally a prompt wording issue." },
      { id: "C", text: "This has no relevant software engineering principle and must be handled manually after the fact each time." },
      { id: "D", text: "Model selection, since a more capable model would prevent the timeout." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Idempotency is the standard software engineering concept for exactly this problem — safely retrying an operation without duplicating its effect. This isn't a prompt-wording issue (B) or something model capability would fix (D), and it's a well-established pattern, not something requiring manual after-the-fact handling every time (C).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Software Engineering Foundations'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-016",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Software Engineering Foundations",
    type: "mcq",
    stem:
      "A developer receives a tool_use response from Claude and passes the input directly into a downstream function without checking it against the tool's declared JSON schema first. What software engineering practice is being skipped?",
    options: [
      { id: "A", text: "Prompt caching, which is unrelated to input validation." },
      { id: "B", text: "Nothing is being skipped, since Claude always returns perfectly-shaped input matching the schema." },
      { id: "C", text: "Model tier selection, which has no bearing on this practice." },
      { id: "D", text: "Input validation — checking that data conforms to its expected shape before using it, which is standard practice for any external or generated input, not just Claude's." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Validating structured input against its schema before use is standard defensive engineering practice, applicable to any external or model-generated input — this isn't related to caching (A) or model tier (C), and skipping validation is a real risk even with tool_use's structural guarantees, since semantic errors can still occur (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Software Engineering Foundations'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-017",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Software Engineering Foundations",
    type: "mcq",
    stem:
      "A team makes changes to a shared system prompt used across multiple production features, directly editing it in the deployed environment with no record of the change. What software engineering practice would prevent problems from this approach?",
    options: [
      { id: "A", text: "Nothing needs to change, since prompts don't need the same rigor as code." },
      { id: "B", text: "Version control — treating prompt changes like code changes, reviewed and tracked through the same process, so changes are recorded and reversible." },
      { id: "C", text: "Switching to a different model tier, which doesn't address the lack of change tracking." },
      { id: "D", text: "Increasing the model's context window, which is unrelated to change tracking." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Prompts that drive production behavior benefit from the same version control and review discipline as code — untracked, undocumented changes make it hard to know what changed or roll it back. Context window size (D) and model tier (C) are unrelated, and prompts absolutely warrant this rigor given their production impact (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Software Engineering Foundations'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-018",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Software Engineering Foundations",
    type: "mcq",
    stem:
      "A pull request contains a substantial function generated with Claude Code's help. How should this code be reviewed compared to code written entirely by hand?",
    options: [
      { id: "A", text: "It should only be reviewed by the person who used Claude Code to generate it." },
      { id: "B", text: "It should skip code review entirely, since it was AI-assisted." },
      { id: "C", text: "It should go through the same code review process as any other change — correctness, style, and security review don't become optional just because AI assisted in writing it." },
      { id: "D", text: "It should receive a much lighter review than hand-written code, since AI-generated code is inherently more reliable." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "AI-assisted code needs the same review rigor as any other code change — how it was produced doesn't change whether it needs review (B, D both wrong), and self-review alone (A) doesn't provide the independent scrutiny normal code review is meant to provide.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Software Engineering Foundations'",
    difficulty: "easy",
  },
  {
    id: "dev-ai-019",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Software Engineering Foundations",
    type: "mcq",
    stem:
      "A codebase has the same prompt-construction logic (building a system prompt from several conditional pieces) duplicated across five different feature files, with small inconsistencies creeping in over time. What is the appropriate software engineering response?",
    options: [
      { id: "A", text: "Refactor the duplicated logic into a single shared function that all five features call, eliminating the duplication and the inconsistencies it causes." },
      { id: "B", text: "Leave the duplication as-is, since prompt-construction code doesn't need the same maintainability practices as other code." },
      { id: "C", text: "Delete all five implementations and stop building prompts programmatically altogether." },
      { id: "D", text: "Add a sixth duplicate copy of the logic for a new feature to keep things consistent with the existing pattern." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Extracting duplicated logic into a single shared function is standard refactoring practice that directly addresses the inconsistency problem — prompt-construction code deserves the same maintainability treatment as any other logic (B wrong), adding more duplication (D) makes the problem worse, and abandoning programmatic prompt construction entirely (C) is an overcorrection.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Software Engineering Foundations'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-020",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Claude Application Design",
    type: "mcq",
    stem:
      "An application inserts retrieved web content directly into the same message as trusted system instructions, with no distinction between the two. What application-design risk does this create?",
    options: [
      { id: "A", text: "No risk; all content in a request is treated identically regardless of source." },
      { id: "B", text: "This design pattern is always safe as long as the retrieved content is in English." },
      { id: "C", text: "The only risk is slightly higher token usage." },
      { id: "D", text: "Blurring the boundary between trusted instructions and untrusted retrieved content increases the risk that injected instructions inside the web content could be followed as if they were legitimate directives." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Failing to separate trusted instructions from untrusted content is exactly the design gap that enables prompt injection — this is a real content-boundary risk (A wrong), not merely a token-cost issue (C), and language of the content (B) is irrelevant to the underlying risk.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude Application Design'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-021",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Claude Application Design",
    type: "mcq",
    stem:
      "A developer designs a tool_use schema for extracting order details from emails, marking every field (customer name, order ID, shipping address, gift note) as required. What design problem does this cause when an email doesn't mention a gift note?",
    options: [
      { id: "A", text: "No problem; Claude will simply skip required fields that don't apply." },
      { id: "B", text: "The model may fabricate a plausible-sounding value for the gift note field to satisfy the required-field constraint, since it can't return null for something marked required." },
      { id: "C", text: "The extraction will always fail outright whenever any field is missing from the source." },
      { id: "D", text: "Required fields have no effect on model behavior." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Marking a field required when the source data may genuinely lack it pressures the model to invent a plausible value rather than honestly indicate absence — this is a known schema-design risk, not something the model silently and safely skips (A), it doesn't necessarily cause outright failure (C), and required fields do meaningfully affect behavior (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude Application Design'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-022",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Claude Application Design",
    type: "mcq",
    stem:
      "A customer-support chat session accumulates hours of back-and-forth, including several fully resolved, unrelated issues from earlier in the day. What application-design practice addresses the risk of this accumulated history degrading response quality?",
    options: [
      { id: "A", text: "Increasing max_tokens indefinitely to accommodate all history regardless of relevance." },
      { id: "B", text: "There is no design practice relevant to this situation." },
      { id: "C", text: "Session hygiene — periodically trimming or summarizing resolved, irrelevant history so the active context stays focused on what's actually still relevant." },
      { id: "D", text: "Disabling the system prompt once the session gets long." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Session hygiene — trimming or summarizing what's no longer relevant — directly addresses accumulated, irrelevant history degrading quality. Simply raising max_tokens (A) doesn't address relevance, disabling the system prompt (D) removes something unrelated and needed, and this is a well-recognized design concern, not a non-issue (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude Application Design'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-023",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Claude Application Design",
    type: "mcq",
    stem:
      "A team maintains several Claude Code plugins used across projects, and one team member updates a shared plugin with breaking changes, immediately affecting every project that depends on it. What plugin management practice would have prevented this?",
    options: [
      { id: "A", text: "Versioning the plugin and letting consuming projects opt into a new version deliberately, rather than having every consumer affected immediately by any change." },
      { id: "B", text: "Removing all plugins from every project to avoid the issue entirely." },
      { id: "C", text: "Never allowing any plugin to be updated once created." },
      { id: "D", text: "Plugin management has no bearing on this kind of breaking change." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Explicit versioning with deliberate opt-in upgrades is the standard way to prevent a shared dependency's breaking change from immediately propagating everywhere — freezing all plugins forever (C) or removing them entirely (B) both overcorrect, and plugin management practices are directly relevant here (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude Application Design'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-024",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Claude Application Design",
    type: "mcq",
    stem:
      "The same core assistant logic is deployed as a Claude Code CLI tool for engineers and as a customer-facing web chat widget using the API directly. Both currently share the exact same system prompt with no adjustment. What design issue does this raise?",
    options: [
      { id: "A", text: "The only issue is that the prompt might be slightly too long for one of the two surfaces." },
      { id: "B", text: "System prompts have no effect on behavior differences across surfaces." },
      { id: "C", text: "No issue; a single shared system prompt is always the correct design regardless of surface or audience." },
      { id: "D", text: "The two surfaces have very different trust levels and audiences, so a system prompt written for a trusted internal engineer may not include appropriate boundaries for arbitrary public users." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A prompt appropriate for a trusted internal tool may lack boundaries needed for an untrusted public-facing surface — reusing it unchanged across very different trust contexts is a real design gap (C wrong), it's not just a length concern (A), and system prompts are very much relevant to surface-specific behavior (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude Application Design'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-025",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Claude Application Design",
    type: "scenario-multi-response",
    stem:
      "Which two practices reflect good Claude application design when handling untrusted, user-supplied content alongside trusted system instructions? (Select 2)",
    options: [
      { id: "A", text: "Trust that untrusted content will never contain adversarial instructions, since this is rare in practice." },
      { id: "B", text: "Clearly delimit or structurally separate untrusted content from trusted instructions in the request." },
      { id: "C", text: "Concatenate all content — trusted and untrusted — into one undifferentiated block for simplicity." },
      { id: "D", text: "Apply guardrails or hooks so that instructions embedded within untrusted content can't trigger sensitive actions on their own." },
    ],
    correctOptionIds: ["B","D"],
    selectCount: 2,
    explanation:
      "Structurally separating content by trust level (B) and enforcing guardrails against sensitive actions being triggered by untrusted content (D) are the recognized mitigations for this risk. Merging everything undifferentiated (C) recreates the risk, and assuming adversarial content is rare enough to ignore (A) is not a safe design assumption.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude Application Design'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-026",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Configuration Management",
    type: "mcq",
    stem:
      "A team wants the ability to quickly roll back to a previous version of a production system prompt if a new version underperforms after deployment. What configuration management practice enables this?",
    options: [
      { id: "A", text: "Always editing the live prompt directly with no history kept, since that's faster to deploy." },
      { id: "B", text: "Prompt versioning — keeping track of distinct, identifiable versions of the prompt so a specific prior version can be restored quickly if needed." },
      { id: "C", text: "Prompt versioning is not a meaningful practice for production systems." },
      { id: "D", text: "Relying on memory to recall what the previous prompt said." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Explicit prompt versioning is exactly what enables a fast, reliable rollback — editing live with no history (A) or relying on memory (D) both make rollback slow or unreliable, and this is a genuinely meaningful practice for any production system relying on a prompt (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Configuration Management'",
    difficulty: "easy",
  },
  {
    id: "dev-ai-027",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Configuration Management",
    type: "mcq",
    stem:
      "A project depends on several Claude Code plugins with no pinned versions, and a routine update silently pulls in a breaking change from one of them, causing a production issue. What configuration management practice would have prevented this?",
    options: [
      { id: "A", text: "Removing all plugin dependencies permanently to avoid ever having this problem." },
      { id: "B", text: "Always using the newest available version of every plugin automatically, with no pinning at all." },
      { id: "C", text: "Pinning specific plugin versions in configuration, and upgrading them deliberately with testing, rather than letting updates apply automatically and silently." },
      { id: "D", text: "Plugin dependency management has no bearing on production stability." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Pinning dependency versions and upgrading deliberately with testing is the standard configuration-management practice that prevents silent breaking changes — removing all plugins (A) is an overcorrection, this is directly relevant to production stability (D wrong), and always auto-updating to the newest version (B) is exactly the practice that caused the problem.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Configuration Management'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-028",
    certificationSlug: "developer-foundations",
    domain: "Applications and Integration",
    taskStatement: "Configuration Management",
    type: "mcq",
    stem:
      "A team wants to distinguish between behavioral guidance for Claude Code (coding standards, conventions) and technical tool/permission configuration (which commands are allowed, environment settings). Where does each of these typically belong?",
    options: [
      { id: "A", text: "Behavioral guidance belongs in CLAUDE.md, while technical tool/permission configuration belongs in settings.json — the two serve different configuration purposes." },
      { id: "B", text: "Both belong exclusively in settings.json, with CLAUDE.md serving no distinct purpose." },
      { id: "C", text: "There is no meaningful distinction between these two configuration files." },
      { id: "D", text: "Both belong exclusively in CLAUDE.md, with settings.json serving no distinct purpose." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "CLAUDE.md and settings.json serve genuinely different configuration roles — behavioral/contextual guidance versus technical tool and permission configuration — so collapsing both into one file's purpose (D, B) or treating them as interchangeable (C) misrepresents how Claude Code's configuration is actually organized.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Configuration Management'",
    difficulty: "medium",
  },
];
