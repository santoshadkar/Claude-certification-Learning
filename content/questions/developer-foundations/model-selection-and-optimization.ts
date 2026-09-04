import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Model Selection and Optimization" as const;
const CERT = "developer-foundations" as const;
const S1 = "LLM Fundamentals" as const;
const S2 = "Technical Fundamentals" as const;
const S3 = "Model Selection and Tradeoffs" as const;
const S4 = "Cost and Token Management" as const;

export const questions: QuestionInput[] = [
  {
    id: "dev-mso-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer notices that running the exact same prompt twice against Claude produces two slightly different, but both reasonable, responses. What LLM property explains this?",
    options: [
      { id: "A", text: "A bug in the developer's own application code." },
      { id: "B", text: "Non-determinism — sampling during generation means identical prompts can produce different, but each individually plausible, outputs across calls." },
      { id: "C", text: "The API silently changed models between the two calls without any indication." },
      { id: "D", text: "This behavior indicates the API key has expired." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Sampling-based generation is inherently non-deterministic, so identical prompts can validly produce different outputs — this isn't necessarily an application bug (A), a silent model swap (C), or an expired key (D), all of which would typically show other symptoms.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 (Model Selection and Optimization) — 'LLM Fundamentals'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer is building a prompt and wants Claude to follow a specific output format reliably. They add two examples of correctly formatted output within the prompt itself. What prompting technique is this?",
    options: [
      { id: "A", text: "Zero-shot prompting, since no examples are used." },
      { id: "B", text: "Multi-shot (few-shot) prompting — providing example(s) of the desired input/output pattern within the prompt to guide the model's output." },
      { id: "C", text: "Extended thinking, which is unrelated to including examples." },
      { id: "D", text: "Batch processing, which is unrelated to prompting technique." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Including examples of the desired pattern is specifically multi-shot/few-shot prompting, not zero-shot (A, which by definition uses no examples) — extended thinking (C) and batch processing (D) are unrelated technical mechanisms, not prompting techniques.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'LLM Fundamentals'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer needs Claude to spend more time reasoning through a complex, multi-step logic problem before producing a final answer, accepting higher latency in exchange for better accuracy. Which model option is designed for this tradeoff?",
    options: [
      { id: "A", text: "Fast mode, which is optimized for lower latency rather than deeper reasoning." },
      { id: "B", text: "Extended (or adaptive) thinking, which allows the model to reason more extensively before answering, at the cost of additional latency and tokens." },
      { id: "C", text: "Reducing max_tokens, which limits output length rather than reasoning depth." },
      { id: "D", text: "Disabling tool use entirely, which is unrelated to reasoning depth." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Extended/adaptive thinking is specifically designed to trade latency for deeper reasoning, matching what's being asked for — fast mode (A) optimizes for the opposite tradeoff, reducing max_tokens (C) constrains output length rather than reasoning, and disabling tools (D) is unrelated to reasoning depth.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'LLM Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "scenario-multi-response",
    stem:
      "Which two statements about tokens and context windows are accurate? (Select 2)",
    options: [
      { id: "A", text: "A context window has a finite size, limiting how much conversation and data can be included in a single request." },
      { id: "B", text: "Tokens are the underlying unit the model processes text in, and both input and output consume tokens." },
      { id: "C", text: "Context windows are infinite in size for all Claude models, with no practical limit." },
      { id: "D", text: "Only output text consumes tokens; input text is entirely free of any token cost." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Context windows are finite (A), and tokens are the basic processing unit consumed by both input and output (B) — context windows are not infinite (C wrong), and input absolutely consumes tokens too, not just output (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'LLM Fundamentals'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer wants Claude to classify short text snippets into one of three categories with no examples provided, relying only on a clear instruction describing the categories. What prompting approach is this?",
    options: [
      { id: "A", text: "Zero-shot prompting — providing instructions without example input/output pairs, relying on the instruction alone to guide behavior." },
      { id: "B", text: "Multi-shot prompting, since categories were described." },
      { id: "C", text: "Extended thinking, since classification is involved." },
      { id: "D", text: "Batch processing, since multiple snippets may be classified over time." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Relying purely on instructions with no example input/output pairs is the definition of zero-shot prompting — describing categories in the instruction doesn't make it multi-shot (B), which specifically requires example pairs; extended thinking (C) and batch processing (D) are unrelated concepts to this basic prompting-style distinction.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'LLM Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer is using an SDK that wraps the Claude REST API, but wants a persistent, bidirectional connection to receive updates without repeatedly polling. What underlying technology is relevant here?",
    options: [
      { id: "A", text: "Websockets, which support a persistent, bidirectional connection distinct from typical request/response REST calls." },
      { id: "B", text: "REST alone is sufficient for any bidirectional, persistent-connection use case with no other technology needed." },
      { id: "C", text: "Tokens, which are unrelated to connection type." },
      { id: "D", text: "Extended thinking, which is unrelated to network connection type." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Websockets specifically support the kind of persistent, bidirectional connection being described, distinct from a typical REST request/response cycle — REST alone doesn't naturally provide this (B wrong), and tokens (C) and extended thinking (D) are unrelated to network connection mechanics.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Technical Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer integrating Claude via an official SDK wants to understand what's actually happening under the hood when they call a method like `client.messages.create()`. What is the most accurate description?",
    options: [
      { id: "A", text: "The SDK method is a thin wrapper that ultimately constructs and sends an HTTP REST request to the underlying API, then parses the response into a convenient object." },
      { id: "B", text: "The SDK method bypasses HTTP entirely and communicates through a proprietary, undocumented binary protocol." },
      { id: "C", text: "The SDK method has no relationship to the underlying REST API whatsoever." },
      { id: "D", text: "SDK methods only work when the underlying network connection is a websocket." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Official SDKs are thin, convenient wrappers over the underlying REST API — understanding this helps a developer debug SDK behavior rather than treating it as an opaque black box (B, C, D all mischaracterize this relationship).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Technical Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer's application needs to handle a Claude API request that might occasionally fail due to a transient network blip. What foundational engineering practice is most relevant?",
    options: [
      { id: "A", text: "Basic network-resilience engineering practices (timeouts, retries with backoff) that apply to any REST API integration, not something unique to Claude specifically." },
      { id: "B", text: "This scenario requires no engineering consideration at all, since network calls never fail." },
      { id: "C", text: "This can only be addressed by switching to a different AI provider." },
      { id: "D", text: "This is a concern unique to Claude and doesn't apply to REST APIs generally." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Handling transient network failures with timeouts and retry/backoff is a general REST API integration practice, applicable to Claude's API just as it would be to any other — network calls do fail sometimes (B wrong), switching providers doesn't address the underlying need for resilience (C), and this isn't Claude-specific (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Technical Fundamentals'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer needs to choose between Opus, Sonnet, and Haiku tiers for a new feature that performs complex multi-step legal reasoning where accuracy matters far more than latency or cost. Which tier fits best?",
    options: [
      { id: "A", text: "Haiku, since it's the fastest tier available." },
      { id: "B", text: "Opus, given its greater capability for complex reasoning, which is worth the added cost and latency for this accuracy-critical use case." },
      { id: "C", text: "Sonnet, chosen at random with no specific justification." },
      { id: "D", text: "Tier choice makes no difference for reasoning-heavy tasks." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Complex, accuracy-critical reasoning is exactly where the most capable tier's cost and latency premium is justified — defaulting to the fastest tier regardless of task difficulty (A) undersells the requirement, an unjustified random choice (C) isn't a deliberate engineering decision, and tier does meaningfully affect reasoning capability (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A feature needs to classify thousands of short support tickets per hour into categories, where the classification is generally straightforward. Which tier best fits the quality/latency/cost tradeoff here?",
    options: [
      { id: "A", text: "Haiku, since the task is high-volume and straightforward, making the fastest, most cost-efficient tier the appropriate choice." },
      { id: "B", text: "Opus, regardless of the added cost and latency, since more capability is always better." },
      { id: "C", text: "No model tier can handle a high-volume classification task." },
      { id: "D", text: "The choice of tier is irrelevant to cost in this scenario." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "High-volume, straightforward classification is the textbook case for the fastest, cheapest tier — always defaulting to the top tier (B) ignores the cost/latency tradeoff for no meaningful accuracy benefit here, high-volume classification is a well-supported use case (C wrong), and tier choice very much affects cost at this scale (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "After a model version upgrade, a team notices that a previously reliable prompt now behaves slightly differently, producing outputs in a marginally different style. What does this illustrate about model selection and versioning?",
    options: [
      { id: "A", text: "Model releases can include behavior changes across versions, so a team should re-validate prompts and evals after upgrading rather than assuming complete behavioral stability." },
      { id: "B", text: "Model versions are always perfectly behaviorally identical, so this observation must be a testing mistake." },
      { id: "C", text: "This kind of change can only occur when switching between completely different model tiers, never within version updates of the same tier." },
      { id: "D", text: "This has no implications for how a team should manage model upgrades." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is exactly why re-validation after a model upgrade matters — version changes can carry behavior differences even within a tier, so assuming perfect stability (B) or that this only happens across tiers (C) is inaccurate, and it very much has practical implications for upgrade practice (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "scenario-multi-response",
    stem:
      "Which two considerations are legitimate factors in choosing between Claude model tiers for a new feature? (Select 2)",
    options: [
      { id: "A", text: "The complexity of reasoning the task genuinely requires." },
      { id: "B", text: "The acceptable latency and cost budget for the feature." },
      { id: "C", text: "Which tier name sounds most impressive in a product announcement." },
      { id: "D", text: "Which tier was chosen for a completely unrelated feature in the past, regardless of task fit." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Task complexity (A) and the actual latency/cost budget (B) are the substantive factors that should drive tier selection. Marketing appeal of a name (C) and copying an unrelated past decision without regard to fit (D) aren't legitimate engineering justifications.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A team is deciding whether adaptive thinking support matters for a new agent that occasionally faces genuinely ambiguous, multi-step decisions but mostly handles routine requests. What is a reasonable approach?",
    options: [
      { id: "A", text: "Consider a model/configuration that can apply deeper reasoning selectively for the harder, ambiguous cases, rather than either always using maximal reasoning depth or never using it at all." },
      { id: "B", text: "Always disable any form of extended reasoning capability, regardless of how ambiguous some requests are." },
      { id: "C", text: "Always maximize reasoning depth on every single request regardless of whether it's routine or complex." },
      { id: "D", text: "Reasoning depth has no relevance to this kind of mixed workload." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Matching reasoning depth to the actual complexity of each case — deeper for genuinely ambiguous requests, standard for routine ones — is the balanced approach for a mixed workload. Always disabling deeper reasoning (B) under-serves the hard cases, always maximizing it (C) wastes latency/cost on routine cases, and reasoning depth is very relevant to this kind of workload (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "mcq",
    stem:
      "A developer wants to reduce cost for an application that repeatedly sends the same large system prompt and reference document with each request, followed by a short varying question. What technique directly addresses this?",
    options: [
      { id: "A", text: "Prompt caching — reusing the stable, repeated portion of the request across calls to avoid reprocessing (and paying full price for) identical content each time." },
      { id: "B", text: "Switching to a completely different, unrelated model provider." },
      { id: "C", text: "Removing the system prompt entirely regardless of whether it's still needed." },
      { id: "D", text: "Increasing max_tokens, which increases rather than decreases cost." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Prompt caching is specifically designed for this exact pattern — a stable, repeated prefix across many requests — cutting cost and latency. Switching providers (B) doesn't address the actual caching opportunity, removing needed content (C) is not a real cost-optimization technique, and increasing max_tokens (D) would increase cost, not reduce it.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "mcq",
    stem:
      "A developer wants to track and forecast the ongoing cost of a Claude-powered feature in production. What is a foundational practice for this?",
    options: [
      { id: "A", text: "Tracking token usage (input and output) per request over time, using the reported usage metrics, to build a cost model based on real, observed consumption." },
      { id: "B", text: "Guessing at cost with no measurement, since token usage cannot be observed." },
      { id: "C", text: "Assuming cost is fixed and unrelated to actual usage patterns." },
      { id: "D", text: "Only tracking output tokens, since input tokens never factor into cost." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Token usage is reported in the API's response metrics and is the concrete basis for real cost tracking and forecasting — usage is observable, not something that must be guessed (B), cost does scale with actual usage (C wrong), and input tokens are billed too, not just output (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "mcq",
    stem:
      "A long-running agentic session accumulates a large amount of tool output in its context over time, most of which is no longer relevant to the current step. What is the cost implication of leaving this unaddressed?",
    options: [
      { id: "A", text: "None; accumulated context has no bearing on cost since only the final output is billed." },
      { id: "B", text: "Each subsequent request in the session re-sends the accumulated context as input, so unnecessary accumulated content directly increases input token cost on every following call." },
      { id: "C", text: "Accumulated context only affects latency, never cost." },
      { id: "D", text: "This only matters if the session runs for more than 24 hours." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Input tokens are billed on every request, and a growing, unpruned context gets resent (and re-billed) on each subsequent call — this is a real, direct cost implication (A, C both wrong), and it applies regardless of session duration in hours (D wrong); it's about accumulated content volume, not elapsed time.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "mcq",
    stem:
      "A developer is deciding between cache check-pointing strategies for a long, multi-turn agentic session where earlier context is relatively stable but grows with each turn. What is the benefit of check-pointing the cache at intervals?",
    options: [
      { id: "A", text: "It allows reuse of the cached prefix up to a checkpoint across subsequent turns, avoiding repeated full reprocessing cost for the stable, already-established portion of the growing conversation." },
      { id: "B", text: "It has no effect on cost or latency in a multi-turn session." },
      { id: "C", text: "It only works for single-turn, one-off requests, never for multi-turn sessions." },
      { id: "D", text: "It requires disabling all tool use for the remainder of the session." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Checkpointing the cache lets a growing conversation reuse the already-processed stable prefix rather than reprocessing everything from scratch each turn, which is a real cost/latency benefit — this is specifically useful for multi-turn sessions (B, C both wrong), and it doesn't require disabling tool use (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "hard",
  },
  {
    id: "dev-mso-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "scenario-multi-response",
    stem:
      "Which two techniques directly help control token usage and cost in a Claude-powered application? (Select 2)",
    options: [
      { id: "A", text: "Prompt caching for stable, repeated content across requests." },
      { id: "B", text: "Trimming unnecessary or irrelevant accumulated content from context before it's resent in subsequent requests." },
      { id: "C", text: "Always using the largest possible max_tokens value regardless of the task's actual output needs." },
      { id: "D", text: "Repeating the full system prompt and all reference material in every single message with no reuse strategy." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Prompt caching (A) and trimming unnecessary accumulated content (B) both directly reduce token usage. Maximizing max_tokens regardless of actual need (C) and repeating everything with no reuse strategy (D) both work against cost control rather than for it.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer notices that a prompt with clear, unambiguous instructions still occasionally produces an unexpected variation in output. Given the nature of next-token generation and sampling, what conclusion is most accurate?",
    options: [
      { id: "A", text: "Some output variability is an inherent property of sampling-based generation, so a well-written prompt reduces but does not necessarily eliminate all variation entirely." },
      { id: "B", text: "A perfectly written prompt always guarantees byte-for-byte identical output on every single call." },
      { id: "C", text: "Any variation at all definitively proves the prompt is poorly written." },
      { id: "D", text: "Variation only occurs when using the most capable model tier." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Sampling-based generation carries inherent variability that a clear prompt reduces but doesn't fully eliminate — assuming a perfect prompt guarantees identical output every time (B) misunderstands this, variation isn't automatic proof of a bad prompt (C), and this isn't tier-specific (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'LLM Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A team is building a feature and debating whether to default to the most capable model tier 'just to be safe,' even for parts of the workflow that are simple and well-defined. What is the drawback of this blanket approach?",
    options: [
      { id: "A", text: "There is no drawback; using the most capable tier everywhere is always the objectively correct engineering choice." },
      { id: "B", text: "It wastes cost and adds unnecessary latency on the simple, well-defined parts of the workflow that don't need the top tier's additional reasoning capability." },
      { id: "C", text: "The only drawback is that it makes the code harder to read." },
      { id: "D", text: "This approach guarantees zero errors across the entire workflow." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Matching tier to actual task difficulty per component avoids paying unnecessary cost and latency on simple sub-tasks — 'always use the best tier' isn't objectively correct once cost/latency are considered (A wrong), the issue isn't about code readability (C), and no tier choice eliminates all errors (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "mcq",
    stem:
      "A developer is reviewing a bill and notices the token cost is higher than expected for a feature that sends a modest-sized user question each time. What is a likely explanation worth investigating?",
    options: [
      { id: "A", text: "The system prompt, tool definitions, or accumulated conversation history sent alongside each user question may be much larger than the visible user-facing question itself, and should be reviewed as the likely source of the extra token cost." },
      { id: "B", text: "Token cost is entirely unrelated to anything sent in the request and must be a billing error." },
      { id: "C", text: "Only the user's visible question ever counts toward token cost." },
      { id: "D", text: "There is no way to investigate unexpected token costs." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "The full request — including system prompt, tool definitions, and any accumulated history — counts toward input tokens, often dwarfing the visible user question, and is the natural place to look for unexpected cost. Assuming it must be a billing error without investigating (B) skips this, only the visible question counting (C) is inaccurate, and this kind of cost issue is very much investigable (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer building a real-time voice assistant integration is deciding between a standard request/response API call and a websocket-based connection. Which factor most directly favors websockets here?",
    options: [
      { id: "A", text: "The need for a persistent, low-overhead, bidirectional connection suited to continuous, real-time interaction, rather than repeatedly establishing new request/response cycles." },
      { id: "B", text: "Websockets are required for any application that uses JSON." },
      { id: "C", text: "Websockets eliminate the need for any error handling." },
      { id: "D", text: "Websockets are only relevant to batch processing workloads." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A persistent, low-overhead, bidirectional connection is exactly what suits a continuous real-time interaction pattern like voice — websockets have nothing specifically to do with JSON usage (B), don't eliminate the need for error handling (C), and are the opposite fit for batch processing, which is inherently asynchronous and non-persistent-connection based (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Technical Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer needs to choose a model for a code-generation feature that must correctly handle complex, multi-file refactoring logic. Which factor should weigh most heavily in this decision?",
    options: [
      { id: "A", text: "The tier's demonstrated reasoning/coding capability for complex, multi-step logic, since this task's difficulty justifies prioritizing capability over minimizing cost or latency." },
      { id: "B", text: "Choosing whichever tier has the shortest model name." },
      { id: "C", text: "Cost minimization above all else, regardless of whether the cheapest tier can actually handle the task's complexity." },
      { id: "D", text: "Tier choice is irrelevant to code-generation quality." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "For a complex, multi-step coding task, capability is the dominant factor that should drive the decision — model name length (B) is irrelevant, minimizing cost regardless of whether the task can actually be handled well (C) risks poor output on a task that needs real capability, and tier does meaningfully affect code-generation quality (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "mcq",
    stem:
      "A developer wants to reduce token cost for a summarization feature without materially harming summary quality. Which strategy is most likely to help?",
    options: [
      { id: "A", text: "Trim the input to the actually-relevant portion of the source document before sending it, rather than always sending the entire document regardless of length or relevance." },
      { id: "B", text: "Increase max_tokens substantially beyond what summaries actually need." },
      { id: "C", text: "Add unrelated reference material to every request 'just in case' it becomes useful." },
      { id: "D", text: "Switch to sending the request multiple times redundantly to ensure at least one succeeds." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Trimming input to what's actually relevant directly reduces token usage without necessarily harming quality, since irrelevant content wasn't contributing to a good summary anyway. Increasing max_tokens (B) affects output length, not necessarily cost efficiency for a summarization task, adding unrelated material 'just in case' (C) increases cost with no benefit, and redundant duplicate requests (D) directly increases cost rather than reducing it.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer building a customer-facing summarization tool wants consistent, predictable formatting without providing full examples in every prompt. Which approach balances this need reasonably?",
    options: [
      { id: "A", text: "Use single-shot prompting — one well-chosen example demonstrating the desired format — combined with clear instructions, rather than either zero examples or many repeated full examples every time." },
      { id: "B", text: "Always use zero-shot prompting exclusively, regardless of how much formatting consistency is actually needed." },
      { id: "C", text: "Provide twenty full examples in every single request regardless of the added token cost." },
      { id: "D", text: "Prompting technique has no effect on output format consistency." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A single well-chosen example (single-shot) balances giving the model a concrete pattern to follow against unnecessary token overhead — always defaulting to zero examples regardless of need (B) may leave format ambiguous, twenty examples in every request (C) is excessive for this need, and prompting technique does meaningfully affect output consistency (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'LLM Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A team supports both a premium tier and a free tier of their product, and is deciding whether to use the same model tier for Claude-powered features across both. What is a reasonable consideration?",
    options: [
      { id: "A", text: "It may be reasonable to use different model tiers for each product tier, balancing the cost structure and expected usage volume of each against the quality bar appropriate for that tier." },
      { id: "B", text: "The same exact model tier must always be used across every product tier with no exceptions, regardless of cost structure." },
      { id: "C", text: "Model tier choice has no relationship to a product's business/pricing tiers." },
      { id: "D", text: "Free-tier users should always receive the most expensive model tier to maximize their experience regardless of cost impact." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Aligning model tier choice with each product tier's cost structure, volume, and appropriate quality bar is a reasonable, common business/engineering consideration — mandating identical tiers regardless of context (B) ignores real cost tradeoffs, there is a real relationship between the two (C wrong), and giving the most expensive tier to the free tier with no regard for cost impact (D) isn't a sound default either.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "hard",
  },
  {
    id: "dev-mso-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer is troubleshooting why their SDK-based integration behaves unexpectedly and decides to inspect the raw HTTP request being sent. What does this debugging approach rely on understanding?",
    options: [
      { id: "A", text: "That the SDK is ultimately constructing a REST request under the hood, so inspecting the raw HTTP traffic can reveal exactly what's actually being sent, beyond what the SDK's higher-level interface shows." },
      { id: "B", text: "That SDKs have no relationship to HTTP whatsoever, making this debugging approach meaningless." },
      { id: "C", text: "That inspecting raw HTTP traffic is never a valid debugging technique for API integrations." },
      { id: "D", text: "That the SDK only sends requests over websockets, never standard HTTP." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Understanding that the SDK is a thin wrapper over REST/HTTP is exactly what makes inspecting raw HTTP traffic a useful debugging technique — this contradicts B and C, and standard Messages API calls are HTTP-based REST requests, not websocket traffic, by default (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Technical Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "mcq",
    stem:
      "A developer is optimizing a pipeline that processes documents in two stages: a cheap initial classification pass on every document, followed by a detailed extraction pass only on documents that pass classification. What cost-optimization principle does this reflect?",
    options: [
      { id: "A", text: "Applying a cheaper, faster tier broadly for an initial filtering step, and reserving a more expensive, capable tier only for the subset of work that actually needs it — avoiding paying premium cost across the entire volume." },
      { id: "B", text: "Using the same expensive tier for both stages regardless of each stage's actual complexity." },
      { id: "C", text: "This two-stage design has no effect on overall cost." },
      { id: "D", text: "This pattern is only relevant to real-time, user-facing applications, never to backend document processing pipelines." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This two-stage, tiered-cost design is a genuine and effective cost-optimization pattern — cheap filtering broadly, expensive processing only where needed — as opposed to using the expensive tier uniformly across full volume (B), and it does meaningfully reduce overall cost (C wrong); it's just as applicable to backend batch pipelines as to real-time ones (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "medium",
  },
];
