import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Prompt and Context Engineering" as const;
const CERT = "developer-foundations" as const;
const S1 = "Context Engineering" as const;
const S2 = "Prompt Engineering" as const;
const S3 = "Output Handling" as const;

export const questions: QuestionInput[] = [
  {
    id: "dev-pce-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "An agentic loop accumulates full, verbose tool outputs (including many fields never used downstream) across dozens of steps. What is the most direct risk this creates?",
    options: [
      { id: "A", text: "No risk; unused fields have no effect on the model's reasoning or the request's cost." },
      { id: "B", text: "Context bloat — irrelevant accumulated content crowds out genuinely relevant information and increases token cost on every subsequent request." },
      { id: "C", text: "The API will reject the request outright the moment any unused field appears in context." },
      { id: "D", text: "This only matters if the tool outputs contain images." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Verbose, largely-irrelevant accumulated tool output is the definition of context bloat — it does have a real cost and reasoning-quality impact (A wrong), doesn't cause outright request rejection (C wrong), and applies to any content type, not just images (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 (Prompt and Context Engineering) — 'Context Engineering'",
    difficulty: "easy",
  },
  {
    id: "dev-pce-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer wants to prevent tool output that's no longer relevant to the current step from continuing to consume context in a long agentic session. What technique directly addresses this?",
    options: [
      { id: "A", text: "Tool output pruning — actively trimming or removing stale tool results from context once they're no longer needed for reasoning." },
      { id: "B", text: "Increasing the model's context window size, without removing any stale content." },
      { id: "C", text: "Disabling all tools for the remainder of the session." },
      { id: "D", text: "Ignoring the issue, since context always self-cleans automatically with no developer action needed." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Actively pruning stale tool output is the direct technique for this problem — simply having a larger window (B) doesn't address the relevance/bloat issue itself, disabling tools entirely (C) is a disproportionate response, and context doesn't self-clean without explicit action (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Context Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A single conversation has grown extremely long over many hours of an agentic coding session, and the developer notices the agent starting to reference 'typical patterns' rather than the specific classes it discovered earlier. What technique addresses this kind of context degradation?",
    options: [
      { id: "A", text: "Compaction — summarizing or condensing older conversation content to keep the most relevant information available without an ever-growing raw history." },
      { id: "B", text: "Adding more unrelated tools to the agent's toolkit." },
      { id: "C", text: "Reducing the model's temperature setting to zero." },
      { id: "D", text: "There is no way to address this kind of degradation." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Compaction — condensing older content while preserving what's relevant — is the direct technique for this kind of long-session degradation. Adding unrelated tools (B) doesn't address context volume, temperature (C) is unrelated to this issue, and this degradation is addressable, not unavoidable (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Context Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A coordinator agent delegates a broad research question to a subagent, and wants the subagent's own exploratory back-and-forth to stay out of the coordinator's own context entirely. What pattern supports this?",
    options: [
      { id: "A", text: "Context isolation through subagents — giving the subagent its own separate context for the exploratory work, with only the relevant summarized findings returned to the coordinator." },
      { id: "B", text: "Sharing one single flat context between the coordinator and subagent with no separation at all." },
      { id: "C", text: "Context isolation is not possible with subagents." },
      { id: "D", text: "Disabling the subagent's ability to use any tools." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Context isolation via subagents is exactly the mechanism for keeping verbose exploratory work out of the main coordinator's context — sharing one flat context (B) defeats this purpose, isolation is a real, supported capability (C wrong), and it doesn't require disabling the subagent's tools (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Context Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "scenario-multi-response",
    stem:
      "Which two practices help manage context effectively during a long, multi-step agentic workflow? (Select 2)",
    options: [
      { id: "A", text: "Periodically pruning or summarizing accumulated tool output that's no longer relevant to the current step." },
      { id: "B", text: "Isolating verbose, exploratory subtask work in a subagent's own separate context." },
      { id: "C", text: "Appending every tool result ever received, in full, to the main context indefinitely with no pruning." },
      { id: "D", text: "Avoiding subagents entirely, regardless of task shape, to keep everything in one context." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Pruning stale content (A) and isolating verbose subtask work via subagents (B) both directly manage context growth. Appending everything indefinitely (C) is exactly the bloat problem, and categorically avoiding subagents regardless of task shape (D) forecloses a useful context-management tool.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Context Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer building a document-analysis pipeline wants to avoid passing an entire 300-page document into every step of a multi-step workflow when only specific sections are relevant at each step. What context engineering approach fits best?",
    options: [
      { id: "A", text: "Extract and pass only the specific, relevant sections needed for each step, rather than the entire document every time." },
      { id: "B", text: "Pass the entire 300-page document in full at every single step regardless of relevance, for consistency." },
      { id: "C", text: "Randomly select which pages to include at each step." },
      { id: "D", text: "Context size has no bearing on either cost or the pipeline's reasoning quality." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Passing only what's actually relevant to each step is the direct application of good context engineering, avoiding wasted tokens and potential dilution of attention — passing the full document every time regardless of relevance (B) wastes both, random selection (C) risks missing what's actually needed, and context size does affect both cost and reasoning quality (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Context Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer notices that important information placed in the middle of a very long input seems to get less attention from the model than information at the beginning or end. What phenomenon does this describe, and what is a reasonable mitigation?",
    options: [
      { id: "A", text: "This reflects a real positional effect in long inputs; placing critical information near the beginning or end, or using clear structure/headers, can help mitigate it." },
      { id: "B", text: "This never happens regardless of input length or structure." },
      { id: "C", text: "The only fix is to remove all content from the middle of any input entirely." },
      { id: "D", text: "This issue only affects image inputs, never text." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is a recognized positional effect in long inputs, and structuring content (placing key points at the edges, using clear headers) is a reasonable mitigation — it's a real phenomenon (B wrong), doesn't require deleting all middle content (C, an overcorrection), and applies to long text inputs generally, not just images (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Context Engineering'",
    difficulty: "hard",
  },
  {
    id: "dev-pce-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A multi-agent pipeline has a synthesis subagent receiving raw, unfiltered outputs (including full reasoning chains) from three upstream subagents, quickly exhausting its own context budget. What change would help?",
    options: [
      { id: "A", text: "Have the upstream subagents return concise, structured summaries (key facts, conclusions) instead of their full raw reasoning chains, reducing what the downstream subagent needs to process." },
      { id: "B", text: "Have the upstream subagents return even more verbose raw output to be thorough." },
      { id: "C", text: "Remove the synthesis subagent's context budget limit entirely with no other change." },
      { id: "D", text: "This situation cannot be improved through any context engineering technique." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Having upstream agents return structured, concise summaries rather than full raw reasoning directly reduces the downstream agent's context burden — more verbose output (B) makes the problem worse, simply removing the limit without changing what's sent (C) doesn't address the underlying inefficiency, and this is a well-addressable context engineering problem (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Context Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer is deciding whether to isolate a verbose codebase-exploration subtask into its own subagent context, or keep it in the main agent's context for simplicity. The exploration is expected to generate many detailed intermediate results not needed later. What is the tradeoff?",
    options: [
      { id: "A", text: "Isolating it in a subagent keeps the main context focused and free of verbose intermediate detail, at the cost of added coordination complexity compared to keeping everything in one context." },
      { id: "B", text: "There is no tradeoff; isolating exploration always has zero cost and zero benefit." },
      { id: "C", text: "Keeping everything in one context is strictly superior in every case, regardless of verbosity." },
      { id: "D", text: "Subagent isolation is only relevant to production systems, never to exploratory work." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is a genuine tradeoff — cleaner main context versus added coordination overhead — that a developer should weigh based on how verbose and disposable the exploration's intermediate output actually is. Neither extreme (B, C) reflects a real tradeoff-free answer, and isolation is directly useful for exploratory work specifically (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Context Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer's agent periodically calls `/compact`-equivalent functionality mid-session during a long-running task. What is the intended effect of this?",
    options: [
      { id: "A", text: "It reduces context usage by condensing the existing conversation, freeing up room while attempting to preserve the information still needed to continue the task." },
      { id: "B", text: "It permanently deletes the entire conversation with no summary retained at all." },
      { id: "C", text: "It has no effect on context size or usage." },
      { id: "D", text: "It disables all future tool calls for the rest of the session." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Compaction is meant to condense the conversation to free up context space while retaining what's still needed, rather than a total, summary-free deletion (B) — it directly affects context usage (C wrong), and it doesn't disable tool calls going forward (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Context Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer writes a system prompt that says 'Be helpful' with the actual task-specific instructions given entirely in the user turn each time. What is a reasonable critique of this split?",
    options: [
      { id: "A", text: "There is no issue; system vs. user placement never matters for how instructions are followed." },
      { id: "B", text: "Stable, role-level guidance (tone, scope, constraints that should apply to every request) is usually better placed in the system prompt, while task-specific content belongs in the user turn — a vague system prompt like this underuses that distinction." },
      { id: "C", text: "System prompts can never contain more than three words." },
      { id: "D", text: "User turns should never contain any actual task instructions." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "The system-vs-user split is meant to separate stable, persistent guidance from task-specific content — a nearly-empty system prompt underuses this distinction. Placement does matter (A wrong), there's no such length restriction on system prompts (C wrong), and user turns absolutely should carry task-specific instructions (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Prompt Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer's classification prompt says 'categorize this ticket appropriately' with no further detail on the categories or their boundaries, and gets inconsistent categorization across similar tickets. What is the most direct fix?",
    options: [
      { id: "A", text: "Add explicit output constraints — the exact allowed categories and clear criteria distinguishing them — rather than leaving 'appropriately' undefined." },
      { id: "B", text: "Switch to a completely different, unrelated task instead of fixing the prompt." },
      { id: "C", text: "Accept the inconsistency as an unavoidable property of any classification task." },
      { id: "D", text: "Remove all instructions entirely and rely purely on the ticket text with zero guidance." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Clarity comes from explicit constraints — the actual category list and distinguishing criteria — which directly addresses the ambiguity causing inconsistent results. Abandoning the task (B), accepting inconsistency as inevitable (C), or removing guidance entirely (D) all skip the actual fix.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Prompt Engineering'",
    difficulty: "easy",
  },
  {
    id: "dev-pce-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer inserts raw, untrusted user-submitted text directly into a prompt without any handling, and later discovers the text contained instructions attempting to override the system prompt. What prompt engineering practice would have reduced this risk?",
    options: [
      { id: "A", text: "Input sanitization and clear structural separation of untrusted content from trusted instructions, rather than concatenating everything together undifferentiated." },
      { id: "B", text: "Making the system prompt longer, with no other change to how untrusted content is handled." },
      { id: "C", text: "This risk cannot be reduced through any prompt engineering technique." },
      { id: "D", text: "Removing the system prompt entirely." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Sanitizing and structurally separating untrusted content from trusted instructions is the recognized mitigation for this kind of injection risk — simply lengthening the system prompt (B) doesn't address the structural issue, this risk is very much mitigable (C wrong), and removing the system prompt entirely (D) removes needed guardrails rather than fixing the actual problem.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Prompt Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer's prompt for extracting structured data from documents doesn't reconcile after several iterations, since natural language descriptions of the desired transformation keep being interpreted differently than intended. What technique most directly helps?",
    options: [
      { id: "A", text: "Providing a few concrete input/output examples demonstrating the exact desired transformation, rather than relying solely on a prose description." },
      { id: "B", text: "Making the prose description even longer and more abstract." },
      { id: "C", text: "Removing all instructions and relying purely on the document's structure." },
      { id: "D", text: "Switching to a task type where extraction is not needed at all." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Concrete examples communicate an exact transformation far more reliably than prose alone when natural language descriptions keep being misinterpreted — a longer, more abstract description (B) tends to make ambiguity worse, not better, removing instructions (C) doesn't clarify anything, and avoiding the task type (D) sidesteps the problem rather than solving it.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Prompt Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer maintains prompt instructions in three different places for the same feature: the system prompt, a CLAUDE.md file, and inline comments in the code that builds the request. Some of these have started to drift and contradict each other. What is the underlying issue?",
    options: [
      { id: "A", text: "Prompt and instruction placement wasn't kept consistent or consolidated across components, allowing contradictions to develop unnoticed over time." },
      { id: "B", text: "This is a normal, expected, and harmless way to manage prompt instructions with no real downside." },
      { id: "C", text: "Instructions should never exist in more than one file under any circumstances, even when the two files serve genuinely different purposes." },
      { id: "D", text: "This issue is unrelated to prompt engineering practice." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Instructions spread across multiple places without consistency review can drift into contradiction — this isn't harmless (B), and while consolidation matters, the deeper lesson isn't a blanket 'never split instructions' rule since different components (CLAUDE.md vs. system prompt) can legitimately serve different purposes when kept consistent (C overstates it) — this is squarely a prompt/instruction placement concern (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Prompt Engineering'",
    difficulty: "hard",
  },
  {
    id: "dev-pce-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "scenario-multi-response",
    stem:
      "Which two are recognized prompt engineering techniques for improving output quality and consistency? (Select 2)",
    options: [
      { id: "A", text: "Iterative refinement — treating the first output as a starting point and adjusting the prompt based on specific gaps observed." },
      { id: "B", text: "Explicit output constraints — specifying format, length, or required structure rather than leaving them open-ended." },
      { id: "C", text: "Writing the prompt once and never revisiting it, regardless of observed output quality." },
      { id: "D", text: "Removing all instructions to let the model infer intent entirely on its own." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Iterative refinement (A) and explicit output constraints (B) are both established, effective prompt engineering techniques. Never revisiting a prompt regardless of quality (C) and removing all guidance (D) both work against achieving consistent, high-quality output.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Prompt Engineering'",
    difficulty: "easy",
  },
  {
    id: "dev-pce-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer adjusts a prompt after noticing it produces a specific type of error in a subset of cases, but the fix introduces a new, unrelated error in a different subset. What is the appropriate response to this iterative refinement outcome?",
    options: [
      { id: "A", text: "Continue iterating on the prompt to address the new issue as well, ideally without reintroducing the original problem, rather than treating the first adjustment as the final version." },
      { id: "B", text: "Revert entirely and give up on refining the prompt further." },
      { id: "C", text: "Accept the new error as an acceptable tradeoff with no further attempt to address it." },
      { id: "D", text: "Conclude that prompt iteration is fundamentally unreliable and abandon the practice." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Iteration is an ongoing process — a fix introducing a new issue doesn't mean iteration failed, it means another round is needed. Giving up entirely (B, D) or accepting a new unresolved problem without further attempt (C) all stop refining prematurely.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Prompt Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer places a large block of reference material after the specific task instruction in a prompt, and finds the model sometimes seems to underweight the reference material relative to the instruction. What adjustment is worth testing?",
    options: [
      { id: "A", text: "Experimenting with the ordering and structuring of prompt components (e.g., placing reference material with clear headers, or adjusting its position relative to the instruction) to see if it improves how the model weighs it." },
      { id: "B", text: "Assuming prompt component ordering never has any effect on output and leaving it unchanged." },
      { id: "C", text: "Removing the reference material entirely rather than adjusting its placement." },
      { id: "D", text: "Switching to a completely different, unrelated task." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Testing how ordering and structure affect how content gets weighted is a reasonable, practical prompt-engineering experiment — assuming ordering never matters (B) forecloses a potentially useful fix, removing needed reference material (C) is an overcorrection, and changing the task entirely (D) doesn't address the actual prompt structure issue.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Prompt Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer wants a code-review prompt to flag security issues but not nitpick minor style preferences. The current prompt just says 'review this code for issues.' What is the most effective refinement?",
    options: [
      { id: "A", text: "Explicitly state which categories of issues to report (e.g., security, correctness) versus which to skip (e.g., minor style/formatting), rather than leaving 'issues' undefined." },
      { id: "B", text: "Add the instruction 'only report important issues' with no further detail on what counts as important." },
      { id: "C", text: "Remove the word 'review' from the prompt entirely." },
      { id: "D", text: "Ask for a longer response regardless of what categories are reported." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Explicit categorical criteria — what to report versus what to skip — directly targets the described problem, unlike a vague qualifier like 'important' (B) which doesn't define the boundary any more clearly. Removing a key verb (C) or just asking for more length (D) don't address the actual scoping issue.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Prompt Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer wants Claude to handle an ambiguous edge case (e.g., an order with two conflicting shipping addresses) in a specific, consistent way, but a plain-language instruction alone hasn't produced consistent handling. What technique targets this kind of ambiguous-case handling specifically?",
    options: [
      { id: "A", text: "A few-shot example specifically demonstrating how to handle that exact kind of ambiguous case, showing the reasoning for the chosen resolution." },
      { id: "B", text: "Removing all mention of the edge case from the prompt entirely." },
      { id: "C", text: "Increasing max_tokens, which is unrelated to ambiguous-case handling." },
      { id: "D", text: "Switching to a completely different unrelated task." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A targeted few-shot example demonstrating the desired handling of a specific ambiguous case is exactly the technique for generalizing correct judgment to that pattern — removing mention of it (B) doesn't help the model know it exists, max_tokens (C) is unrelated, and switching tasks (D) avoids rather than solves the problem.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Prompt Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer notices their prompt gives conflicting instructions: one line says 'always respond in under 50 words' and another says 'always include a complete explanation of your reasoning for every recommendation.' What is the likely consequence?",
    options: [
      { id: "A", text: "Both instructions will always be perfectly satisfied simultaneously with no tension." },
      { id: "B", text: "The conflicting constraints may be resolved inconsistently across different responses, since satisfying both fully at once isn't generally possible." },
      { id: "C", text: "The model will refuse to respond at all whenever conflicting instructions are present." },
      { id: "D", text: "Only the first instruction in the prompt is ever followed, with the second always ignored." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Genuinely conflicting constraints can't both be fully satisfied, so responses may resolve the tension differently across calls — this isn't reliably both-satisfied (A wrong), doesn't cause outright refusal (C wrong), and it's not accurate that only the first-listed instruction is ever followed (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Prompt Engineering'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer building an internal tool inserts a user's freeform text directly into a prompt template using simple string concatenation, with no escaping or structural delimiting. What risk does this specifically introduce?",
    options: [
      { id: "A", text: "If the user's text happens to resemble prompt syntax or instructions, it could be misinterpreted as part of the structured template rather than as plain data, similar to how unsanitized input causes injection-style bugs in other systems." },
      { id: "B", text: "There is no risk, since prompts are always immune to any form of injection regardless of how input is inserted." },
      { id: "C", text: "This only matters if the user's text is longer than 1,000 characters." },
      { id: "D", text: "String concatenation is always the officially recommended way to build prompts with no downside." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Unstructured concatenation of untrusted text into a prompt creates the same category of risk as unsanitized input in other systems — prompts are not immune to this (B wrong), the risk isn't gated by a specific length threshold (C wrong), and this isn't a recommended, downside-free practice (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Prompt Engineering'",
    difficulty: "hard",
  },
  {
    id: "dev-pce-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer's application expects JSON output from Claude and currently attempts to parse the raw response text directly as JSON. Some responses include a short explanatory sentence before the JSON, breaking the parser. What output handling practice would make this more robust?",
    options: [
      { id: "A", text: "Use tool_use with a JSON schema to request genuinely structured output, or at minimum add defensive parsing that extracts the JSON portion, rather than assuming the entire raw text is always parseable JSON." },
      { id: "B", text: "Assume the raw text will always be pure JSON with no other content, with no defensive handling." },
      { id: "C", text: "Stop requesting any structured output entirely." },
      { id: "D", text: "Increase max_tokens, which is unrelated to output format reliability." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Using tool_use for genuinely structured output, or adding defensive extraction/parsing, directly addresses the fragility of assuming raw text is always pure JSON (B is the actual bug). Abandoning structured output entirely (C) overcorrects, and max_tokens (D) doesn't address output format reliability.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Output Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "An application receives a confident, fluent, and specific-sounding answer from Claude about a fact it cannot independently verify. What output-handling principle is most relevant to how this should be treated?",
    options: [
      { id: "A", text: "Skepticism toward confident output — fluent, confident tone is not itself evidence of correctness, so unverifiable specific claims should be flagged or checked rather than trusted purely because of how they're phrased." },
      { id: "B", text: "Confident, fluent phrasing should always be trusted completely with no further scrutiny." },
      { id: "C", text: "This principle only applies to numeric outputs, never to other kinds of factual claims." },
      { id: "D", text: "Output handling has no bearing on how confident a response sounds." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Treating confident tone as a correctness signal is exactly the trap to avoid — this principle applies broadly to any specific factual claim, not just numeric ones (C wrong), unconditional trust in confident phrasing (B) is the failure mode being described, and output handling absolutely relates to how confidently-phrased output should be treated (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Output Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer's extraction pipeline receives a tool_use response and passes the extracted fields directly to a database write, with no additional checks. Which output-handling gap does this illustrate?",
    options: [
      { id: "A", text: "Missing response validation — even schema-conformant structured output can contain semantic errors (e.g., inconsistent values), so validating content before using it downstream is a needed additional step." },
      { id: "B", text: "There is no gap; tool_use output is always guaranteed to be semantically perfect with no further checking needed." },
      { id: "C", text: "This gap only matters for text-based output, not structured tool_use output." },
      { id: "D", text: "Response validation is unnecessary once a JSON schema has been defined for the tool." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Schema conformance guarantees syntactic correctness, not semantic correctness — passing extracted values straight to a database without content validation skips a needed defensive step. This is not guaranteed-perfect output (B wrong), the same concern applies to structured tool_use output too, not just text (C wrong), and having a schema doesn't eliminate the need for validation (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Output Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "scenario-multi-response",
    stem:
      "Which two are sound output-handling practices for a production Claude integration? (Select 2)",
    options: [
      { id: "A", text: "Defensive parsing that checks the structure and content of a response before using it downstream." },
      { id: "B", text: "Treating structured output patterns (like tool_use with a schema) as more reliable than parsing free-form text for machine consumption." },
      { id: "C", text: "Assuming every response is correctly formatted and semantically valid with no verification at all." },
      { id: "D", text: "Treating confident phrasing in a response as sufficient proof of factual accuracy." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Defensive parsing (A) and preferring structured output patterns for machine consumption (B) are both sound, established practices. Assuming correctness with zero verification (C) and treating tone as evidence of accuracy (D) are exactly the failure modes good output handling is meant to avoid.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Output Handling'",
    difficulty: "easy",
  },
  {
    id: "dev-pce-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer's application logs every raw response from Claude but never checks whether a given response's stop_reason indicates truncation due to hitting max_tokens. What output-handling problem could this cause?",
    options: [
      { id: "A", text: "A truncated response could be silently treated as complete, leading downstream code to process incomplete data (e.g., invalid JSON cut off mid-structure) without any indication of the actual cause." },
      { id: "B", text: "stop_reason has no bearing on whether output is complete or truncated." },
      { id: "C", text: "Truncation can never occur in practice, so checking for it is unnecessary." },
      { id: "D", text: "This only matters for image-based outputs, not text." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Failing to check stop_reason for truncation means incomplete output can be silently mistaken for complete output, which is a real and avoidable output-handling gap — stop_reason is directly informative about this (B wrong), truncation is a real possibility worth handling (C wrong), and this applies to text output just as much as anything else (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Output Handling'",
    difficulty: "medium",
  },
  {
    id: "dev-pce-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer is choosing between two approaches for getting structured data out of Claude: (1) asking it to 'respond in JSON format' within a free-form text prompt, or (2) using tool_use with a defined JSON schema. Which is generally more reliable for guaranteed structural conformance, and why?",
    options: [
      { id: "A", text: "tool_use with a schema, since it constrains the model's output to match the declared structure, whereas asking for JSON in free-form text still risks extra prose, formatting inconsistencies, or invalid JSON syntax." },
      { id: "B", text: "Free-form text requesting JSON, since it gives the model more creative freedom to format the response however it prefers." },
      { id: "C", text: "The two approaches are exactly equally reliable in every respect, with no practical difference." },
      { id: "D", text: "Neither approach can ever produce valid structured output under any circumstances." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "tool_use with a schema is the more reliable mechanism for guaranteed structural conformance — free-form text requests for JSON remain more prone to extra prose or syntax issues, so 'more creative freedom' (B) is actually a reliability downside here, not a benefit; the two approaches are not equally reliable (C wrong), and structured output absolutely can be produced reliably (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 6 — 'Output Handling'",
    difficulty: "easy",
  },
];
