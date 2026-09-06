import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "dev-etd-001",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A Claude-powered application returns a wrong answer to a user. Before deciding how to fix it, what is the first diagnostic question a developer should ask?",
    options: [
      { id: "A", text: "Whether the response happened to be shorter than usual." },
      { id: "B", text: "Whether the user is reporting the issue in a friendly tone." },
      { id: "C", text: "Whether the wrong answer originated in the integration layer (a bug in how the request was built or the response was parsed) or in the model's actual output, since these require different fixes." },
      { id: "D", text: "Whether the application uses TypeScript or Python, regardless of what actually failed." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Isolating whether the problem originated in the integration code or in the model's output is the essential first diagnostic step, since an integration bug needs a code fix while a model-output issue needs a prompt/context/eval fix — the user's tone (B), the programming language (D), or response length alone (A) don't help isolate the actual cause.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 (Eval, Testing, and Debugging) — 'Debugging and Error Handling'",
    difficulty: "easy",
  },
  {
    id: "dev-etd-002",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "An application calling the Messages API occasionally receives a rate-limit error (HTTP 429). What is the most appropriate error-handling strategy?",
    options: [
      { id: "A", text: "Treat this as a transient, retryable error and implement a retry with backoff, since rate limits are expected to clear after a delay." },
      { id: "B", text: "Immediately fail the entire user session and require the user to restart from scratch." },
      { id: "C", text: "Treat it identically to a permanent authentication failure requiring a new API key." },
      { id: "D", text: "Silently ignore the error and return an empty response to the user with no indication anything went wrong." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A rate-limit error is a classic transient condition suited to retry-with-backoff — failing the whole session (B) is a disproportionate response, silently returning nothing (D) hides the failure from the user, and conflating it with a permanent auth failure (C) misdiagnoses the error type and leads to the wrong fix.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-003",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer's agent occasionally receives a tool_result indicating the requested resource wasn't found (a genuine, valid 'no results' outcome), but the application's error-handling code treats this identically to a network timeout and retries repeatedly. What is the issue?",
    options: [
      { id: "A", text: "The issue is that tool_result should never be checked for content of any kind." },
      { id: "B", text: "There is no issue; all tool failures should always be retried identically regardless of type." },
      { id: "C", text: "This only matters if the resource is eventually found on a later retry." },
      { id: "D", text: "The code conflates a valid empty/not-found result with an actual access failure, wasting retries on something that isn't actually failing and won't change on retry." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Distinguishing a genuine 'not found' result from an actual access failure (like a timeout) is important, since retrying a legitimate not-found result wastes effort and won't produce a different outcome — treating every failure identically (B) misses this distinction, checking tool_result content (A) is exactly what's needed here, and the waste occurs regardless of what a later retry eventually returns (C).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-004",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer is debugging a multi-step agentic failure and wants to understand exactly what happened at each step. What is the most useful debugging approach?",
    options: [
      { id: "A", text: "Assuming the failure was random and unrelated to any specific step." },
      { id: "B", text: "Trace analysis — examining the actual sequence of requests, tool calls, and responses in the agentic loop to identify where the failure mode first appeared." },
      { id: "C", text: "Guessing which step failed based on intuition alone, without examining any logs or traces." },
      { id: "D", text: "Rewriting the entire agent from scratch without first identifying what actually went wrong." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Reading the actual trace of what happened at each step is the direct way to isolate where a multi-step failure originated — guessing (C) or assuming randomness (A) skip real diagnosis, and rewriting everything without first understanding the actual failure (D) risks not fixing the real problem, or introducing new ones.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "easy",
  },
  {
    id: "dev-etd-005",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "scenario-multi-response",
    stem:
      "A tool call to an internal service fails with a permission error (the caller lacks access), and a separate call to a different service fails with a network timeout. Which two error-handling responses are appropriate, respectively? (Select 2)",
    options: [
      { id: "A", text: "For the network timeout, treat it as potentially transient and retry with appropriate backoff, since the same request might succeed once the network issue clears." },
      { id: "B", text: "For the permission error, surface a clear, non-retryable failure rather than blindly retrying, since retrying with the same insufficient permissions won't succeed." },
      { id: "C", text: "Treat both errors identically as permanent failures requiring no retry logic of any kind." },
      { id: "D", text: "Treat both errors identically as transient and retry both indefinitely with no limit." },
    ],
    correctOptionIds: ["A","B"],
    selectCount: 2,
    explanation:
      "A permission error is fundamentally non-retryable without a credentials change (B), while a network timeout is a reasonable candidate for retry with backoff (A) — treating both identically, whether as always-permanent (C) or always-transient-and-endlessly-retried (D), ignores the real difference between these error categories.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-006",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "After upgrading to a new Claude model version, a previously reliable extraction pipeline starts producing malformed output on a subset of inputs. What is a reasonable first diagnostic step?",
    options: [
      { id: "A", text: "Ignore the malformed output subset since it's not affecting every single input." },
      { id: "B", text: "Immediately conclude the issue is unrelated to the model upgrade with no further investigation." },
      { id: "C", text: "Compare behavior on the same inputs between the old and new model version to confirm whether the model upgrade specifically is the source of the regression, rather than assuming it without checking." },
      { id: "D", text: "Roll back the entire application to its state from a year ago without investigating the actual cause." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Directly comparing behavior across the model versions on the same inputs is the concrete way to confirm or rule out the upgrade as the cause — dismissing the upgrade without checking (B) skips a very plausible explanation given the timing, an unrelated drastic rollback (D) doesn't target the actual cause, and a partial failure rate still needs investigation, not dismissal (A).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-007",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A tool implementation catches every possible exception internally and always returns a generic success-shaped response to the agent, even when the underlying operation actually failed. What problem does this cause?",
    options: [
      { id: "A", text: "The agent has no way to know the operation actually failed, so it can't make an appropriate recovery decision (retry, escalate, or inform the user) and may proceed as if the result were valid." },
      { id: "B", text: "This design guarantees the underlying operation will always eventually succeed." },
      { id: "C", text: "This design has no effect on the agent's downstream reasoning." },
      { id: "D", text: "No problem; hiding all errors from the agent is always the safest possible design." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Silently masking failures as success denies the agent the information it needs to recover appropriately — this is a real problem, not a safe default (D), it doesn't affect whether the underlying operation succeeds (B), and it very much affects downstream reasoning, since the agent will treat a failed result as valid (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-008",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer suspects that a bug is in how their code parses Claude's tool_use response, rather than in the model's decision to call the tool. What is a direct way to confirm this?",
    options: [
      { id: "A", text: "Switch to a different model tier without investigating the parsing code at all." },
      { id: "B", text: "Assume it must be a model problem without inspecting anything, since models are the more likely source of any bug by default." },
      { id: "C", text: "Rewrite the entire prompt from scratch without looking at the actual response object." },
      { id: "D", text: "Inspect the raw tool_use response object directly to verify it contains the expected structure, isolating whether the model's output or the application's parsing logic is at fault." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Directly inspecting the raw response is exactly how a developer isolates whether the model's output or their own parsing code is at fault — assuming it's a model problem by default (B) skips real diagnosis, rewriting the prompt (C) or switching models (A) don't address a parsing bug even if that turns out to be the actual cause.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "easy",
  },
  {
    id: "dev-etd-009",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A subagent in a multi-agent pipeline fails partway through its task. The subagent's error-handling code catches the failure locally, logs what was attempted, and returns partial results with a clear failure flag to the coordinator, rather than crashing the whole pipeline. What does this reflect?",
    options: [
      { id: "A", text: "Poor error handling, since any failure should always immediately terminate the entire pipeline." },
      { id: "B", text: "Good error-handling design — local recovery/reporting with structured context (what was attempted, partial results) that lets the coordinator make an informed recovery decision, rather than an uncontrolled crash or a silently swallowed failure." },
      { id: "C", text: "This approach is only appropriate for non-production systems." },
      { id: "D", text: "This approach guarantees the coordinator will always retry successfully." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Returning structured failure context with partial results — rather than crashing everything (A) or silently hiding the failure — gives the coordinator what it needs to recover intelligently, which is good practice for production systems specifically (C wrong), though it doesn't guarantee any particular recovery outcome (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-010",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer notices that a specific class of malformed tool inputs from the model correlates with an ambiguous parameter description in the tool's schema. What is the most targeted fix?",
    options: [
      { id: "A", text: "Ignore the correlation, since tool schema wording never affects input quality." },
      { id: "B", text: "Add a retry loop with no changes to the schema, hoping the same ambiguous schema eventually produces a valid result by chance." },
      { id: "C", text: "Improve the tool's parameter description and schema to reduce the ambiguity that's likely causing the malformed inputs." },
      { id: "D", text: "Switch to a completely unrelated tool with no connection to the actual parameter ambiguity." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Fixing the actual identified cause — an ambiguous schema/description — is the targeted, effective response. Switching tools without addressing the description (D) or retrying against an unchanged, still-ambiguous schema (B) don't fix the underlying issue, and schema clarity clearly does affect input quality (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-011",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "An application receives a 500-level server error from the Claude API. What is a reasonable interpretation and response?",
    options: [
      { id: "A", text: "This likely indicates a server-side issue that may be transient; a retry with backoff is a reasonable response, though persistent 500s across many requests may warrant checking Anthropic's status page or support channels." },
      { id: "B", text: "500-level errors always indicate a permanent problem with the developer's own API key that requires generating a new one." },
      { id: "C", text: "500-level errors should always be treated identically to a 400-level client error, meaning the request itself must be malformed." },
      { id: "D", text: "500-level errors should never be logged, since they're expected to be extremely rare." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A 500-level error generally signals a server-side issue distinct from a client-side (400-level) problem, and treating it as potentially transient with retry logic is reasonable — it's not automatically an API key problem (B), it shouldn't be conflated with a client-request error (C), and logging server errors is valuable regardless of expected frequency (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-012",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer observes that a chatbot occasionally gives a factually wrong answer about company policy, even though the correct policy document was included in context. What is the most useful next diagnostic step?",
    options: [
      { id: "A", text: "Conclude no further debugging is possible for factual-accuracy issues." },
      { id: "B", text: "Immediately switch to a different model tier without examining the specific failure." },
      { id: "C", text: "Assume the document itself must be wrong without checking anything else." },
      { id: "D", text: "Examine the specific failing case to see whether the model actually referenced the provided document or answered from general knowledge instead, since this distinguishes a grounding/prompting issue from a document-content issue." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Checking whether the model actually grounded its answer in the provided document (versus defaulting to general knowledge) is a concrete, targeted diagnostic that narrows down the real cause — jumping to conclusions about the document (C), giving up on debugging (A), or changing the model without investigating (B) all skip that useful diagnostic step.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-013",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A structured-output pipeline using tool_use with a JSON schema occasionally produces output where two numeric fields don't logically reconcile (e.g., line items that don't sum to the stated total), even though the JSON itself is syntactically valid against the schema. What does this indicate about the limits of schema-based validation?",
    options: [
      { id: "A", text: "This indicates the schema itself is malformed and needs to be entirely rewritten." },
      { id: "B", text: "Schema validation via tool_use guarantees syntactic correctness but does not guarantee semantic correctness — additional application-level checks are needed to catch logical inconsistencies like this." },
      { id: "C", text: "This is unrelated to schema validation and can only be caused by a network issue." },
      { id: "D", text: "Tool_use-based structured output can never contain any kind of error." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "This is exactly the known limit of schema-enforced structured output — it eliminates syntax errors but not semantic ones, so additional checks (like verifying totals reconcile) are needed on top. The schema being syntactically fine doesn't mean it's malformed (A), errors are still possible even with valid structured output (D wrong), and this has nothing to do with network issues (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "hard",
  },
  {
    id: "dev-etd-014",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer wants to determine whether a bug affecting 5% of requests is caused by a specific input pattern or is truly random. What is a reasonable investigative approach?",
    options: [
      { id: "A", text: "Ignore the 5% failure rate since it affects a minority of requests." },
      { id: "B", text: "Assume the failures are random immediately, without examining any of the failing cases." },
      { id: "C", text: "Collect and examine the failing requests together to look for a shared pattern (input type, length, specific content) before concluding the failures are random." },
      { id: "D", text: "Fix the first failing case found and assume this automatically resolves all other failures with no further checking." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Actually examining the failing cases together for a shared pattern is how you distinguish a systematic cause from genuine randomness — assuming randomness without checking (B), assuming one fix generalizes without verification (D), or dismissing a real failure rate because it's a minority (A) all skip this useful investigative step.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-015",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "An agent's tool call to an external API returns a response, but the response's JSON structure is different from what the integration code expects, causing a parsing exception. What is the appropriate way to harden the integration against this?",
    options: [
      { id: "A", text: "Add defensive parsing/validation of the external response's structure before using it, with a clear error path when it doesn't match expectations, rather than assuming the structure is always as expected." },
      { id: "B", text: "Ignore the exception entirely and let the agent proceed with whatever partial data happens to be available, with no validation." },
      { id: "C", text: "Remove all error handling to simplify the code, assuming the response will always match expectations from now on." },
      { id: "D", text: "Blame the model for the external API's inconsistent response format." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Defensive parsing with explicit validation is the standard hardening approach for integrating with any external system whose response shape isn't fully guaranteed — removing error handling (C) makes this worse, the external API's format is unrelated to the model's behavior (D), and proceeding with unvalidated partial data (B) risks downstream corruption.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-016",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A team notices error rates spike specifically during a particular time window each day. What is a reasonable hypothesis to investigate first?",
    options: [
      { id: "A", text: "Assume the model itself becomes less capable at certain times of day with no other explanation considered." },
      { id: "B", text: "Ignore the pattern since it only happens during a specific window." },
      { id: "C", text: "Assume the errors are entirely unrelated to timing and investigate something else instead." },
      { id: "D", text: "Whether something specific to that time window (a scheduled batch job competing for resources, a traffic spike, a downstream dependency's maintenance window) correlates with and explains the spike." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A clear time-correlated pattern is a strong, investigable clue pointing toward something specific to that window (contention, traffic, a dependency) — dismissing the timing pattern (C) or the recurring issue itself (B) skips a useful lead, and assuming an unexplained change in model capability by time of day (A) isn't a well-supported hypothesis compared to more concrete explanations.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-017",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "scenario-multi-response",
    stem:
      "Which two practices reflect good error-handling design for a Claude-powered application calling multiple external tools? (Select 2)",
    options: [
      { id: "A", text: "Include enough context in error responses (what was attempted, why it failed) for the caller to make an informed decision, rather than a generic failure message." },
      { id: "B", text: "Return an identical generic 'error' string for every possible failure, regardless of cause." },
      { id: "C", text: "Categorize errors (transient, validation, permission, business-rule) so the calling code can choose an appropriate recovery strategy for each." },
      { id: "D", text: "Automatically retry every error type indefinitely with no distinction between retryable and non-retryable failures." },
    ],
    correctOptionIds: ["A","C"],
    selectCount: 2,
    explanation:
      "Categorizing errors (C) and providing informative context (A) both enable appropriate, differentiated recovery. A single generic error string (B) or blanket infinite retries regardless of error type (D) both throw away information that would let the caller respond appropriately.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-018",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer wants to determine whether a degraded response quality issue is caused by a recent prompt change or a recent model version change, both of which happened around the same time. What is a sound debugging approach?",
    options: [
      { id: "A", text: "Conclude the two changes can never be isolated from each other and stop investigating." },
      { id: "B", text: "Test each change independently (old prompt with new model, new prompt with old model) to isolate which change actually caused the degradation, rather than assuming based on which happened more recently." },
      { id: "C", text: "Assume the most recently deployed change is automatically the cause with no further verification." },
      { id: "D", text: "Revert both changes simultaneously without ever determining which one was actually responsible." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Isolating each variable independently is the standard way to determine causation when two changes happened close together — assuming the most recent change is guilty without verification (C) can lead to fixing the wrong thing, reverting both without learning which was responsible (D) risks the same issue recurring later, and isolation is very much possible here (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "hard",
  },
  {
    id: "dev-etd-019",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer's error-handling code distinguishes between 'the tool call failed to execute' and 'the tool executed successfully but found no matching results.' Why does this distinction matter?",
    options: [
      { id: "A", text: "Only the successful-empty-result case needs any error handling at all." },
      { id: "B", text: "It doesn't matter; both cases should always be handled identically." },
      { id: "C", text: "The two cases call for different downstream behavior — a failed execution may warrant a retry or escalation, while a successful empty result is valid information the agent should incorporate as-is, not retry against." },
      { id: "D", text: "This distinction only matters for tools that return numeric data." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "These two outcomes call for genuinely different responses — retry/escalate for a real failure, versus accepting a valid empty result as-is — so conflating them (B) leads to wrong behavior in one case or the other. Both cases deserve appropriate handling, not just one (A), and the distinction isn't limited to numeric-data tools (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-020",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A team's production monitoring shows a steadily increasing error rate over several weeks, with no single obvious recent change. What is a reasonable approach to root-causing a gradual, not-sudden regression like this?",
    options: [
      { id: "A", text: "Review the timeline of smaller, incremental changes (prompt tweaks, dependency updates, gradually shifting real-world input patterns) across that period, since a gradual regression is often the cumulative effect of several small changes rather than one dramatic event." },
      { id: "B", text: "Assume a gradual regression has no discoverable cause and cannot be debugged." },
      { id: "C", text: "Only look at changes made in the last 24 hours, since older changes can't be relevant to an ongoing trend." },
      { id: "D", text: "Roll back to a version from years ago without reviewing what actually changed in between." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A gradual regression often reflects the cumulative effect of several smaller changes over time, so reviewing the fuller timeline is the productive approach — assuming it's undiagnosable (B) or restricting the search window too narrowly given a multi-week trend (C) both undercut the investigation, and an uninformed drastic rollback (D) doesn't identify the actual cause.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "hard",
  },
  {
    id: "dev-etd-021",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer's integration code assumes every Claude response will contain exactly one content block, but occasionally a response contains multiple blocks (e.g., text plus a tool_use block), causing the code to silently process only the first one. What kind of bug is this?",
    options: [
      { id: "A", text: "An unavoidable limitation of the Claude API with no possible fix." },
      { id: "B", text: "A billing configuration issue." },
      { id: "C", text: "A model output quality problem requiring a prompt change." },
      { id: "D", text: "An integration-layer assumption bug — the code doesn't correctly handle the actual shape of API responses, which is a code-side issue to fix, not a model problem." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "This is a classic integration-layer bug — incorrect assumptions about response shape in the developer's own code — which is fixed by correcting the parsing logic, not by changing the prompt (C), and it's neither an unavoidable API limitation (A) nor related to billing (B).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-022",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer wants to reduce the chance of shipping a regression the next time they modify a critical prompt in production. What debugging/testing practice most directly supports this goal?",
    options: [
      { id: "A", text: "Relying solely on user complaints after deployment to catch any regression." },
      { id: "B", text: "Maintaining a set of representative test cases (an eval set) that can be re-run against any proposed prompt change, to catch regressions before they reach production." },
      { id: "C", text: "Avoiding any future prompt changes permanently to eliminate risk entirely." },
      { id: "D", text: "Making prompt changes directly in production with no testing, since prompt changes are low-risk by nature." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A maintained eval set that can be re-run against changes is exactly the practice that catches regressions before they reach users — untested direct production changes (D) carry real risk, freezing all future changes (C) is an extreme overcorrection, and waiting for user complaints (A) means the regression already reached production before being caught.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-023",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "An agent occasionally calls a tool with input that doesn't match the tool's declared schema (e.g., a string where a number was expected). Where in the system should this be caught?",
    options: [
      { id: "A", text: "Only the model itself is responsible for catching this, with no responsibility on the tool implementation's side." },
      { id: "B", text: "This can never be caught anywhere and must simply be tolerated." },
      { id: "C", text: "In the tool's own input handling — validating the input against its schema before executing, and returning a clear validation error if it doesn't conform, rather than executing with malformed input or crashing unexpectedly." },
      { id: "D", text: "This should be caught by the end user manually reviewing every tool call before it executes." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Validating tool input against its schema before execution — and failing clearly rather than crashing or silently proceeding — is the tool implementation's own responsibility and a standard defensive practice. This is catchable, not something to simply tolerate (B), the tool implementation shares real responsibility here (A wrong), and requiring manual end-user review of every call (D) isn't a scalable error-handling design.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-024",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer is trying to reproduce an intermittent bug reported by a user but can't get it to happen consistently in their own testing. What consideration is relevant given how LLMs generate output?",
    options: [
      { id: "A", text: "Non-determinism — the same prompt can produce somewhat different output across calls, so an intermittent issue may require multiple attempts or specific conditions to reproduce, rather than assuming a single failed reproduction attempt rules out the bug." },
      { id: "B", text: "The bug must be caused by the user's internet connection, unrelated to the application." },
      { id: "C", text: "Intermittent bugs related to model output can never be investigated in any way." },
      { id: "D", text: "LLM output is always perfectly deterministic, so any inability to reproduce means the original report was mistaken." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Non-determinism in LLM output is directly relevant to why an intermittent issue might not reproduce on the first attempt — assuming perfect determinism and dismissing the original report (D) ignores this real property of the system, such issues remain genuinely investigable with enough attempts or targeted conditions (C wrong), and jumping to an unrelated external cause (B) skips the more directly relevant explanation.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "hard",
  },
  {
    id: "dev-etd-025",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A coordinator agent in a multi-agent system receives an error from a subagent but has no information about what the subagent was actually trying to do when it failed. What debugging/design gap does this reveal?",
    options: [
      { id: "A", text: "This is expected and desirable behavior with no room for improvement." },
      { id: "B", text: "This can only be fixed by removing subagents from the architecture entirely." },
      { id: "C", text: "There is no gap; the coordinator doesn't need any context about what a subagent attempted." },
      { id: "D", text: "The subagent's error reporting lacks sufficient context (what was attempted) for the coordinator to make an informed recovery decision — this should be added to the subagent's error-handling design." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Missing context about what was attempted is a concrete, fixable gap in the subagent's error-reporting design — the coordinator does need this information to recover well (C wrong), removing subagents entirely (B) is a drastic overcorrection to a fixable reporting gap, and this isn't a desirable state to leave as-is (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-026",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer wants to add logging to a Claude-powered pipeline to make future debugging easier, but is unsure what level of detail to capture. What is a reasonable guideline?",
    options: [
      { id: "A", text: "Log absolutely nothing, since logging is never useful for debugging Claude-powered systems." },
      { id: "B", text: "Log enough of the request/response/tool-call sequence to reconstruct what happened during an incident, while being mindful not to log unnecessary sensitive data." },
      { id: "C", text: "Logging detail has no bearing on how easy an issue is to debug later." },
      { id: "D", text: "Log every possible byte of every request and response with no consideration of sensitive data exposure." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Capturing enough of the actual sequence to reconstruct an incident, balanced against not logging unnecessary sensitive data, is the practical guideline — logging nothing (A) removes a valuable debugging tool, logging everything indiscriminately (D) creates a data-sensitivity risk, and logging detail very much affects how debuggable an issue is later (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-027",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer notices a tool implementation returns `null` on both a genuine failure and a legitimate 'nothing found' result, making the two indistinguishable to the calling agent. What is the appropriate fix?",
    options: [
      { id: "A", text: "Always throw an exception for both cases indiscriminately." },
      { id: "B", text: "Leave both cases returning null, since the distinction doesn't matter for agent behavior." },
      { id: "C", text: "Return distinct, structured signals for each case (e.g., an explicit error object for failure vs. an empty array/result for a valid empty outcome) so the agent can tell them apart and respond appropriately." },
      { id: "D", text: "Change the tool to never return null under any circumstances, regardless of the actual outcome." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Making these two outcomes distinguishable in the tool's return signal is exactly the fix needed for the agent to respond appropriately to each — collapsing them into one ambiguous value (B) is the original problem, treating both as exceptions (A) misrepresents a valid empty result as an error, and refusing to ever indicate an empty result (D) doesn't solve the actual ambiguity.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-etd-028",
    certificationSlug: "developer-foundations",
    domain: "Eval, Testing, and Debugging",
    taskStatement: "Debugging and Error Handling",
    type: "mcq",
    stem:
      "A developer is deciding whether an observed issue is best classified as a 'prompt failure' or a 'model mismatch' (the task genuinely exceeds the current model tier's capability). What distinguishes these two categories in practice?",
    options: [
      { id: "A", text: "A prompt failure is typically fixable by clarifying instructions, adding examples, or providing missing context, while a model mismatch persists even with a well-constructed prompt and may require a more capable model tier." },
      { id: "B", text: "There is no practical distinction; both categories are fixed identically by rewording the prompt." },
      { id: "C", text: "A model mismatch can always be fixed by adding more few-shot examples, with no need to consider model tier at all." },
      { id: "D", text: "A prompt failure can only be diagnosed by switching to a different model provider entirely." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "The practical test is whether a well-constructed prompt resolves the issue — if it does, it was a prompt failure; if the task still isn't handled well despite good prompting, that points to a genuine model-capability mismatch. These categories don't share an identical fix (B wrong), a model mismatch isn't always solvable with more examples alone (C wrong), and diagnosing a prompt failure doesn't require switching providers (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 4 — 'Debugging and Error Handling'",
    difficulty: "hard",
  },
];
