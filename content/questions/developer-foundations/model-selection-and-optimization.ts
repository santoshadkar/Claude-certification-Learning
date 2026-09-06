import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "dev-mso-001",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "LLM Fundamentals",
    type: "mcq",
    stem:
      "A developer notices that running the exact same prompt twice against Claude produces two slightly different, but both reasonable, responses. What LLM property explains this?",
    options: [
      { id: "A", text: "This behavior indicates the API key has expired." },
      { id: "B", text: "The API silently changed models between the two calls without any indication." },
      { id: "C", text: "A bug in the developer's own application code." },
      { id: "D", text: "Non-determinism — sampling during generation means identical prompts can produce different, but each individually plausible, outputs across calls." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Sampling-based generation is inherently non-deterministic, so identical prompts can validly produce different outputs — this isn't necessarily an application bug (C), a silent model swap (B), or an expired key (A), all of which would typically show other symptoms.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 (Model Selection and Optimization) — 'LLM Fundamentals'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-002",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "LLM Fundamentals",
    type: "mcq",
    stem:
      "A developer is building a prompt and wants Claude to follow a specific output format reliably. They add two examples of correctly formatted output within the prompt itself. What prompting technique is this?",
    options: [
      { id: "A", text: "Extended thinking, which is unrelated to including examples." },
      { id: "B", text: "Multi-shot (few-shot) prompting — providing example(s) of the desired input/output pattern within the prompt to guide the model's output." },
      { id: "C", text: "Zero-shot prompting, since no examples are used." },
      { id: "D", text: "Batch processing, which is unrelated to prompting technique." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Including examples of the desired pattern is specifically multi-shot/few-shot prompting, not zero-shot (C, which by definition uses no examples) — extended thinking (A) and batch processing (D) are unrelated technical mechanisms, not prompting techniques.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'LLM Fundamentals'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-003",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "LLM Fundamentals",
    type: "mcq",
    stem:
      "A developer needs Claude to spend more time reasoning through a complex, multi-step logic problem before producing a final answer, accepting higher latency in exchange for better accuracy. Which model option is designed for this tradeoff?",
    options: [
      { id: "A", text: "Disabling tool use entirely, which is unrelated to reasoning depth." },
      { id: "B", text: "Reducing max_tokens, which limits output length rather than reasoning depth." },
      { id: "C", text: "Extended (or adaptive) thinking, which allows the model to reason more extensively before answering, at the cost of additional latency and tokens." },
      { id: "D", text: "Fast mode, which is optimized for lower latency rather than deeper reasoning." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Extended/adaptive thinking is specifically designed to trade latency for deeper reasoning, matching what's being asked for — fast mode (D) optimizes for the opposite tradeoff, reducing max_tokens (B) constrains output length rather than reasoning, and disabling tools (A) is unrelated to reasoning depth.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'LLM Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-004",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "LLM Fundamentals",
    type: "scenario-multi-response",
    stem:
      "Which two statements about tokens and context windows are accurate? (Select 2)",
    options: [
      { id: "A", text: "Tokens are the underlying unit the model processes text in, and both input and output consume tokens." },
      { id: "B", text: "Context windows are infinite in size for all Claude models, with no practical limit." },
      { id: "C", text: "Only output text consumes tokens; input text is entirely free of any token cost." },
      { id: "D", text: "A context window has a finite size, limiting how much conversation and data can be included in a single request." },
    ],
    correctOptionIds: ["A","D"],
    selectCount: 2,
    explanation:
      "Context windows are finite (D), and tokens are the basic processing unit consumed by both input and output (A) — context windows are not infinite (B wrong), and input absolutely consumes tokens too, not just output (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'LLM Fundamentals'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-005",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "LLM Fundamentals",
    type: "mcq",
    stem:
      "A developer wants Claude to classify short text snippets into one of three categories with no examples provided, relying only on a clear instruction describing the categories. What prompting approach is this?",
    options: [
      { id: "A", text: "Zero-shot prompting — providing instructions without example input/output pairs, relying on the instruction alone to guide behavior." },
      { id: "B", text: "Multi-shot prompting, since categories were described." },
      { id: "C", text: "Batch processing, since multiple snippets may be classified over time." },
      { id: "D", text: "Extended thinking, since classification is involved." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Relying purely on instructions with no example input/output pairs is the definition of zero-shot prompting — describing categories in the instruction doesn't make it multi-shot (B), which specifically requires example pairs; extended thinking (D) and batch processing (C) are unrelated concepts to this basic prompting-style distinction.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'LLM Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-006",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Technical Fundamentals",
    type: "mcq",
    stem:
      "A developer is using an SDK that wraps the Claude REST API, but wants a persistent, bidirectional connection to receive updates without repeatedly polling. What underlying technology is relevant here?",
    options: [
      { id: "A", text: "Tokens, which are unrelated to connection type." },
      { id: "B", text: "REST alone is sufficient for any bidirectional, persistent-connection use case with no other technology needed." },
      { id: "C", text: "Extended thinking, which is unrelated to network connection type." },
      { id: "D", text: "Websockets, which support a persistent, bidirectional connection distinct from typical request/response REST calls." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Websockets specifically support the kind of persistent, bidirectional connection being described, distinct from a typical REST request/response cycle — REST alone doesn't naturally provide this (B wrong), and tokens (A) and extended thinking (C) are unrelated to network connection mechanics.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Technical Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-007",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Technical Fundamentals",
    type: "mcq",
    stem:
      "A developer integrating Claude via an official SDK wants to understand what's actually happening under the hood when they call a method like `client.messages.create()`. What is the most accurate description?",
    options: [
      { id: "A", text: "The SDK method bypasses HTTP entirely and communicates through a proprietary, undocumented binary protocol." },
      { id: "B", text: "The SDK method is a thin wrapper that ultimately constructs and sends an HTTP REST request to the underlying API, then parses the response into a convenient object." },
      { id: "C", text: "SDK methods only work when the underlying network connection is a websocket." },
      { id: "D", text: "The SDK method has no relationship to the underlying REST API whatsoever." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Official SDKs are thin, convenient wrappers over the underlying REST API — understanding this helps a developer debug SDK behavior rather than treating it as an opaque black box (A, D, C all mischaracterize this relationship).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Technical Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-008",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Technical Fundamentals",
    type: "mcq",
    stem:
      "A developer's application needs to handle a Claude API request that might occasionally fail due to a transient network blip. What foundational engineering practice is most relevant?",
    options: [
      { id: "A", text: "This can only be addressed by switching to a different AI provider." },
      { id: "B", text: "This is a concern unique to Claude and doesn't apply to REST APIs generally." },
      { id: "C", text: "Basic network-resilience engineering practices (timeouts, retries with backoff) that apply to any REST API integration, not something unique to Claude specifically." },
      { id: "D", text: "This scenario requires no engineering consideration at all, since network calls never fail." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Handling transient network failures with timeouts and retry/backoff is a general REST API integration practice, applicable to Claude's API just as it would be to any other — network calls do fail sometimes (D wrong), switching providers doesn't address the underlying need for resilience (A), and this isn't Claude-specific (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Technical Fundamentals'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-009",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Model Selection and Tradeoffs",
    type: "mcq",
    stem:
      "A developer needs to choose between Opus, Sonnet, and Haiku tiers for a new feature that performs complex multi-step legal reasoning where accuracy matters far more than latency or cost. Which tier fits best?",
    options: [
      { id: "A", text: "Opus, given its greater capability for complex reasoning, which is worth the added cost and latency for this accuracy-critical use case." },
      { id: "B", text: "Sonnet, chosen at random with no specific justification." },
      { id: "C", text: "Tier choice makes no difference for reasoning-heavy tasks." },
      { id: "D", text: "Haiku, since it's the fastest tier available." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Complex, accuracy-critical reasoning is exactly where the most capable tier's cost and latency premium is justified — defaulting to the fastest tier regardless of task difficulty (D) undersells the requirement, an unjustified random choice (B) isn't a deliberate engineering decision, and tier does meaningfully affect reasoning capability (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-010",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Model Selection and Tradeoffs",
    type: "mcq",
    stem:
      "A feature needs to classify thousands of short support tickets per hour into categories, where the classification is generally straightforward. Which tier best fits the quality/latency/cost tradeoff here?",
    options: [
      { id: "A", text: "The choice of tier is irrelevant to cost in this scenario." },
      { id: "B", text: "Opus, regardless of the added cost and latency, since more capability is always better." },
      { id: "C", text: "No model tier can handle a high-volume classification task." },
      { id: "D", text: "Haiku, since the task is high-volume and straightforward, making the fastest, most cost-efficient tier the appropriate choice." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "High-volume, straightforward classification is the textbook case for the fastest, cheapest tier — always defaulting to the top tier (B) ignores the cost/latency tradeoff for no meaningful accuracy benefit here, high-volume classification is a well-supported use case (C wrong), and tier choice very much affects cost at this scale (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-011",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Model Selection and Tradeoffs",
    type: "mcq",
    stem:
      "After a model version upgrade, a team notices that a previously reliable prompt now behaves slightly differently, producing outputs in a marginally different style. What does this illustrate about model selection and versioning?",
    options: [
      { id: "A", text: "This kind of change can only occur when switching between completely different model tiers, never within version updates of the same tier." },
      { id: "B", text: "Model releases can include behavior changes across versions, so a team should re-validate prompts and evals after upgrading rather than assuming complete behavioral stability." },
      { id: "C", text: "This has no implications for how a team should manage model upgrades." },
      { id: "D", text: "Model versions are always perfectly behaviorally identical, so this observation must be a testing mistake." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "This is exactly why re-validation after a model upgrade matters — version changes can carry behavior differences even within a tier, so assuming perfect stability (D) or that this only happens across tiers (A) is inaccurate, and it very much has practical implications for upgrade practice (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-012",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Model Selection and Tradeoffs",
    type: "scenario-multi-response",
    stem:
      "Which two considerations are legitimate factors in choosing between Claude model tiers for a new feature? (Select 2)",
    options: [
      { id: "A", text: "Which tier was chosen for a completely unrelated feature in the past, regardless of task fit." },
      { id: "B", text: "The complexity of reasoning the task genuinely requires." },
      { id: "C", text: "Which tier name sounds most impressive in a product announcement." },
      { id: "D", text: "The acceptable latency and cost budget for the feature." },
    ],
    correctOptionIds: ["B","D"],
    selectCount: 2,
    explanation:
      "Task complexity (B) and the actual latency/cost budget (D) are the substantive factors that should drive tier selection. Marketing appeal of a name (C) and copying an unrelated past decision without regard to fit (A) aren't legitimate engineering justifications.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-013",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Model Selection and Tradeoffs",
    type: "mcq",
    stem:
      "A team is deciding whether adaptive thinking support matters for a new agent that occasionally faces genuinely ambiguous, multi-step decisions but mostly handles routine requests. What is a reasonable approach?",
    options: [
      { id: "A", text: "Always maximize reasoning depth on every single request regardless of whether it's routine or complex." },
      { id: "B", text: "Always disable any form of extended reasoning capability, regardless of how ambiguous some requests are." },
      { id: "C", text: "Consider a model/configuration that can apply deeper reasoning selectively for the harder, ambiguous cases, rather than either always using maximal reasoning depth or never using it at all." },
      { id: "D", text: "Reasoning depth has no relevance to this kind of mixed workload." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Matching reasoning depth to the actual complexity of each case — deeper for genuinely ambiguous requests, standard for routine ones — is the balanced approach for a mixed workload. Always disabling deeper reasoning (B) under-serves the hard cases, always maximizing it (A) wastes latency/cost on routine cases, and reasoning depth is very relevant to this kind of workload (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-014",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Cost and Token Management",
    type: "mcq",
    stem:
      "A developer wants to reduce cost for an application that repeatedly sends the same large system prompt and reference document with each request, followed by a short varying question. What technique directly addresses this?",
    options: [
      { id: "A", text: "Prompt caching — reusing the stable, repeated portion of the request across calls to avoid reprocessing (and paying full price for) identical content each time." },
      { id: "B", text: "Removing the system prompt entirely regardless of whether it's still needed." },
      { id: "C", text: "Switching to a completely different, unrelated model provider." },
      { id: "D", text: "Increasing max_tokens, which increases rather than decreases cost." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Prompt caching is specifically designed for this exact pattern — a stable, repeated prefix across many requests — cutting cost and latency. Switching providers (C) doesn't address the actual caching opportunity, removing needed content (B) is not a real cost-optimization technique, and increasing max_tokens (D) would increase cost, not reduce it.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-015",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Cost and Token Management",
    type: "mcq",
    stem:
      "A developer wants to track and forecast the ongoing cost of a Claude-powered feature in production. What is a foundational practice for this?",
    options: [
      { id: "A", text: "Only tracking output tokens, since input tokens never factor into cost." },
      { id: "B", text: "Guessing at cost with no measurement, since token usage cannot be observed." },
      { id: "C", text: "Assuming cost is fixed and unrelated to actual usage patterns." },
      { id: "D", text: "Tracking token usage (input and output) per request over time, using the reported usage metrics, to build a cost model based on real, observed consumption." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Token usage is reported in the API's response metrics and is the concrete basis for real cost tracking and forecasting — usage is observable, not something that must be guessed (B), cost does scale with actual usage (C wrong), and input tokens are billed too, not just output (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "easy",
  },
  {
    id: "dev-mso-016",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Cost and Token Management",
    type: "mcq",
    stem:
      "A long-running agentic session accumulates a large amount of tool output in its context over time, most of which is no longer relevant to the current step. What is the cost implication of leaving this unaddressed?",
    options: [
      { id: "A", text: "This only matters if the session runs for more than 24 hours." },
      { id: "B", text: "Each subsequent request in the session re-sends the accumulated context as input, so unnecessary accumulated content directly increases input token cost on every following call." },
      { id: "C", text: "None; accumulated context has no bearing on cost since only the final output is billed." },
      { id: "D", text: "Accumulated context only affects latency, never cost." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Input tokens are billed on every request, and a growing, unpruned context gets resent (and re-billed) on each subsequent call — this is a real, direct cost implication (C, D both wrong), and it applies regardless of session duration in hours (A wrong); it's about accumulated content volume, not elapsed time.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-017",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Cost and Token Management",
    type: "mcq",
    stem:
      "A developer is deciding between cache check-pointing strategies for a long, multi-turn agentic session where earlier context is relatively stable but grows with each turn. What is the benefit of check-pointing the cache at intervals?",
    options: [
      { id: "A", text: "It has no effect on cost or latency in a multi-turn session." },
      { id: "B", text: "It requires disabling all tool use for the remainder of the session." },
      { id: "C", text: "It allows reuse of the cached prefix up to a checkpoint across subsequent turns, avoiding repeated full reprocessing cost for the stable, already-established portion of the growing conversation." },
      { id: "D", text: "It only works for single-turn, one-off requests, never for multi-turn sessions." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Checkpointing the cache lets a growing conversation reuse the already-processed stable prefix rather than reprocessing everything from scratch each turn, which is a real cost/latency benefit — this is specifically useful for multi-turn sessions (A, D both wrong), and it doesn't require disabling tool use (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "hard",
  },
  {
    id: "dev-mso-018",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Cost and Token Management",
    type: "scenario-multi-response",
    stem:
      "Which two techniques directly help control token usage and cost in a Claude-powered application? (Select 2)",
    options: [
      { id: "A", text: "Always using the largest possible max_tokens value regardless of the task's actual output needs." },
      { id: "B", text: "Trimming unnecessary or irrelevant accumulated content from context before it's resent in subsequent requests." },
      { id: "C", text: "Prompt caching for stable, repeated content across requests." },
      { id: "D", text: "Repeating the full system prompt and all reference material in every single message with no reuse strategy." },
    ],
    correctOptionIds: ["B","C"],
    selectCount: 2,
    explanation:
      "Prompt caching (C) and trimming unnecessary accumulated content (B) both directly reduce token usage. Maximizing max_tokens regardless of actual need (A) and repeating everything with no reuse strategy (D) both work against cost control rather than for it.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-019",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "LLM Fundamentals",
    type: "mcq",
    stem:
      "A developer notices that a prompt with clear, unambiguous instructions still occasionally produces an unexpected variation in output. Given the nature of next-token generation and sampling, what conclusion is most accurate?",
    options: [
      { id: "A", text: "Some output variability is an inherent property of sampling-based generation, so a well-written prompt reduces but does not necessarily eliminate all variation entirely." },
      { id: "B", text: "A perfectly written prompt always guarantees byte-for-byte identical output on every single call." },
      { id: "C", text: "Variation only occurs when using the most capable model tier." },
      { id: "D", text: "Any variation at all definitively proves the prompt is poorly written." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Sampling-based generation carries inherent variability that a clear prompt reduces but doesn't fully eliminate — assuming a perfect prompt guarantees identical output every time (B) misunderstands this, variation isn't automatic proof of a bad prompt (D), and this isn't tier-specific (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'LLM Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-020",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Model Selection and Tradeoffs",
    type: "mcq",
    stem:
      "A team is building a feature and debating whether to default to the most capable model tier 'just to be safe,' even for parts of the workflow that are simple and well-defined. What is the drawback of this blanket approach?",
    options: [
      { id: "A", text: "The only drawback is that it makes the code harder to read." },
      { id: "B", text: "This approach guarantees zero errors across the entire workflow." },
      { id: "C", text: "There is no drawback; using the most capable tier everywhere is always the objectively correct engineering choice." },
      { id: "D", text: "It wastes cost and adds unnecessary latency on the simple, well-defined parts of the workflow that don't need the top tier's additional reasoning capability." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Matching tier to actual task difficulty per component avoids paying unnecessary cost and latency on simple sub-tasks — 'always use the best tier' isn't objectively correct once cost/latency are considered (C wrong), the issue isn't about code readability (A), and no tier choice eliminates all errors (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-021",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Cost and Token Management",
    type: "mcq",
    stem:
      "A developer is reviewing a bill and notices the token cost is higher than expected for a feature that sends a modest-sized user question each time. What is a likely explanation worth investigating?",
    options: [
      { id: "A", text: "Only the user's visible question ever counts toward token cost." },
      { id: "B", text: "The system prompt, tool definitions, or accumulated conversation history sent alongside each user question may be much larger than the visible user-facing question itself, and should be reviewed as the likely source of the extra token cost." },
      { id: "C", text: "Token cost is entirely unrelated to anything sent in the request and must be a billing error." },
      { id: "D", text: "There is no way to investigate unexpected token costs." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "The full request — including system prompt, tool definitions, and any accumulated history — counts toward input tokens, often dwarfing the visible user question, and is the natural place to look for unexpected cost. Assuming it must be a billing error without investigating (C) skips this, only the visible question counting (A) is inaccurate, and this kind of cost issue is very much investigable (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-022",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Technical Fundamentals",
    type: "mcq",
    stem:
      "A developer building a real-time voice assistant integration is deciding between a standard request/response API call and a websocket-based connection. Which factor most directly favors websockets here?",
    options: [
      { id: "A", text: "Websockets are required for any application that uses JSON." },
      { id: "B", text: "Websockets eliminate the need for any error handling." },
      { id: "C", text: "The need for a persistent, low-overhead, bidirectional connection suited to continuous, real-time interaction, rather than repeatedly establishing new request/response cycles." },
      { id: "D", text: "Websockets are only relevant to batch processing workloads." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A persistent, low-overhead, bidirectional connection is exactly what suits a continuous real-time interaction pattern like voice — websockets have nothing specifically to do with JSON usage (A), don't eliminate the need for error handling (B), and are the opposite fit for batch processing, which is inherently asynchronous and non-persistent-connection based (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Technical Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-023",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Model Selection and Tradeoffs",
    type: "mcq",
    stem:
      "A developer needs to choose a model for a code-generation feature that must correctly handle complex, multi-file refactoring logic. Which factor should weigh most heavily in this decision?",
    options: [
      { id: "A", text: "The tier's demonstrated reasoning/coding capability for complex, multi-step logic, since this task's difficulty justifies prioritizing capability over minimizing cost or latency." },
      { id: "B", text: "Cost minimization above all else, regardless of whether the cheapest tier can actually handle the task's complexity." },
      { id: "C", text: "Choosing whichever tier has the shortest model name." },
      { id: "D", text: "Tier choice is irrelevant to code-generation quality." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "For a complex, multi-step coding task, capability is the dominant factor that should drive the decision — model name length (C) is irrelevant, minimizing cost regardless of whether the task can actually be handled well (B) risks poor output on a task that needs real capability, and tier does meaningfully affect code-generation quality (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-024",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Cost and Token Management",
    type: "mcq",
    stem:
      "A developer wants to reduce token cost for a summarization feature without materially harming summary quality. Which strategy is most likely to help?",
    options: [
      { id: "A", text: "Add unrelated reference material to every request 'just in case' it becomes useful." },
      { id: "B", text: "Increase max_tokens substantially beyond what summaries actually need." },
      { id: "C", text: "Switch to sending the request multiple times redundantly to ensure at least one succeeds." },
      { id: "D", text: "Trim the input to the actually-relevant portion of the source document before sending it, rather than always sending the entire document regardless of length or relevance." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Trimming input to what's actually relevant directly reduces token usage without necessarily harming quality, since irrelevant content wasn't contributing to a good summary anyway. Increasing max_tokens (B) affects output length, not necessarily cost efficiency for a summarization task, adding unrelated material 'just in case' (A) increases cost with no benefit, and redundant duplicate requests (C) directly increases cost rather than reducing it.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-025",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "LLM Fundamentals",
    type: "mcq",
    stem:
      "A developer building a customer-facing summarization tool wants consistent, predictable formatting without providing full examples in every prompt. Which approach balances this need reasonably?",
    options: [
      { id: "A", text: "Prompting technique has no effect on output format consistency." },
      { id: "B", text: "Use single-shot prompting — one well-chosen example demonstrating the desired format — combined with clear instructions, rather than either zero examples or many repeated full examples every time." },
      { id: "C", text: "Provide twenty full examples in every single request regardless of the added token cost." },
      { id: "D", text: "Always use zero-shot prompting exclusively, regardless of how much formatting consistency is actually needed." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A single well-chosen example (single-shot) balances giving the model a concrete pattern to follow against unnecessary token overhead — always defaulting to zero examples regardless of need (D) may leave format ambiguous, twenty examples in every request (C) is excessive for this need, and prompting technique does meaningfully affect output consistency (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'LLM Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-026",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Model Selection and Tradeoffs",
    type: "mcq",
    stem:
      "A team supports both a premium tier and a free tier of their product, and is deciding whether to use the same model tier for Claude-powered features across both. What is a reasonable consideration?",
    options: [
      { id: "A", text: "The same exact model tier must always be used across every product tier with no exceptions, regardless of cost structure." },
      { id: "B", text: "Model tier choice has no relationship to a product's business/pricing tiers." },
      { id: "C", text: "It may be reasonable to use different model tiers for each product tier, balancing the cost structure and expected usage volume of each against the quality bar appropriate for that tier." },
      { id: "D", text: "Free-tier users should always receive the most expensive model tier to maximize their experience regardless of cost impact." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Aligning model tier choice with each product tier's cost structure, volume, and appropriate quality bar is a reasonable, common business/engineering consideration — mandating identical tiers regardless of context (A) ignores real cost tradeoffs, there is a real relationship between the two (B wrong), and giving the most expensive tier to the free tier with no regard for cost impact (D) isn't a sound default either.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Model Selection and Tradeoffs'",
    difficulty: "hard",
  },
  {
    id: "dev-mso-027",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Technical Fundamentals",
    type: "mcq",
    stem:
      "A developer is troubleshooting why their SDK-based integration behaves unexpectedly and decides to inspect the raw HTTP request being sent. What does this debugging approach rely on understanding?",
    options: [
      { id: "A", text: "That the SDK is ultimately constructing a REST request under the hood, so inspecting the raw HTTP traffic can reveal exactly what's actually being sent, beyond what the SDK's higher-level interface shows." },
      { id: "B", text: "That the SDK only sends requests over websockets, never standard HTTP." },
      { id: "C", text: "That inspecting raw HTTP traffic is never a valid debugging technique for API integrations." },
      { id: "D", text: "That SDKs have no relationship to HTTP whatsoever, making this debugging approach meaningless." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Understanding that the SDK is a thin wrapper over REST/HTTP is exactly what makes inspecting raw HTTP traffic a useful debugging technique — this contradicts B and C, and standard Messages API calls are HTTP-based REST requests, not websocket traffic, by default (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Technical Fundamentals'",
    difficulty: "medium",
  },
  {
    id: "dev-mso-028",
    certificationSlug: "developer-foundations",
    domain: "Model Selection and Optimization",
    taskStatement: "Cost and Token Management",
    type: "mcq",
    stem:
      "A developer is optimizing a pipeline that processes documents in two stages: a cheap initial classification pass on every document, followed by a detailed extraction pass only on documents that pass classification. What cost-optimization principle does this reflect?",
    options: [
      { id: "A", text: "This pattern is only relevant to real-time, user-facing applications, never to backend document processing pipelines." },
      { id: "B", text: "This two-stage design has no effect on overall cost." },
      { id: "C", text: "Using the same expensive tier for both stages regardless of each stage's actual complexity." },
      { id: "D", text: "Applying a cheaper, faster tier broadly for an initial filtering step, and reserving a more expensive, capable tier only for the subset of work that actually needs it — avoiding paying premium cost across the entire volume." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "This two-stage, tiered-cost design is a genuine and effective cost-optimization pattern — cheap filtering broadly, expensive processing only where needed — as opposed to using the expensive tier uniformly across full volume (C), and it does meaningfully reduce overall cost (B wrong); it's just as applicable to backend batch pipelines as to real-time ones (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 5 — 'Cost and Token Management'",
    difficulty: "medium",
  },
];
