import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "arch-f-peso-001",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.1",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback and minimize false positives.",
    stem:
      "A code-review prompt currently instructs Claude to 'only report high-confidence findings' to reduce false positives, but the false-positive rate hasn't meaningfully improved. What is the most likely reason, and the better fix?",
    options: [
      { id: "A", text: "Vague qualifiers like 'high-confidence' don't give the model a concrete standard to apply; replacing them with explicit, categorical criteria (e.g., 'flag a comment only when it contradicts actual code behavior') is more effective at improving precision." },
      { id: "B", text: "Confidence-based instructions always eliminate false positives regardless of how they're phrased." },
      { id: "C", text: "The fix is to remove all criteria entirely and let the model decide with no guidance at all." },
      { id: "D", text: "The prompt is already optimal, and false positives are an unavoidable, unfixable property of any code-review prompt." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "General confidence-based instructions are specifically called out as ineffective compared to explicit, categorical criteria for improving precision — this isn't an unfixable property (D wrong), removing guidance entirely (C) would likely make results worse, not better, and confidence-based phrasing doesn't reliably eliminate false positives (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.1 — prompts with explicit criteria",
    difficulty: "easy",
  },
  {
    id: "arch-f-peso-002",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.1",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback and minimize false positives.",
    stem:
      "A review prompt's 'security' category has a very high false-positive rate, and developers have started ignoring all security findings as a result, including real ones. What is a reasonable immediate response while the underlying prompt is improved?",
    options: [
      { id: "A", text: "Increase the volume of security findings further to compensate for developers ignoring them." },
      { id: "B", text: "Permanently remove security review from the pipeline forever, since improving prompt criteria is never possible." },
      { id: "C", text: "Leave the noisy category enabled indefinitely with no changes, since developer trust in other categories is unrelated to one category's false-positive rate." },
      { id: "D", text: "Temporarily disable or de-prioritize the noisy security category to restore developer trust in the other, more accurate categories, while separately working on improving the security category's criteria." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A high false-positive rate in one category is specifically noted as eroding trust in the accurate categories too, so temporarily disabling the noisy category while fixing it is a reasonable interim step — leaving it as-is (C) ignores the trust-erosion effect, permanently abandoning security review (B) overcorrects when the criteria are fixable, and increasing volume of already-noisy findings (A) would make the trust problem worse.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.1 — prompts with explicit criteria",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-003",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.1",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback and minimize false positives.",
    stem:
      "A team wants consistent severity classification (critical/high/medium/low) across review findings, but reviewers report the current definitions ('critical = very bad,' 'high = bad') feel arbitrary and inconsistently applied. What would most improve consistency?",
    options: [
      { id: "A", text: "Randomize severity assignment to avoid the appearance of bias." },
      { id: "B", text: "Define explicit severity criteria with concrete code examples illustrating each level, rather than vague relative descriptions like 'very bad' vs. 'bad.'" },
      { id: "C", text: "Remove severity classification entirely, since consistent classification is fundamentally unachievable." },
      { id: "D", text: "Keep the vague definitions unchanged, since severity classification doesn't benefit from concrete examples." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Explicit criteria paired with concrete examples at each severity level is exactly what produces more consistent classification than vague relative language — this is achievable, not fundamentally impossible (C wrong), concrete examples do meaningfully help (D wrong), and randomization (A) would make classification worse, not fairer.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.1 — prompts with explicit criteria",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-004",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.1",
    type: "scenario-multi-response",
    stem:
      "Which two changes would most directly improve precision in a review prompt currently flagging too many minor style preferences as significant issues? (Select 2)",
    options: [
      { id: "A", text: "Add concrete code examples distinguishing acceptable local style patterns from genuine issues." },
      { id: "B", text: "Instruct the model to 'be more careful' with no further detail." },
      { id: "C", text: "Explicitly define which categories of issues to report (e.g., bugs, security) versus which to skip (e.g., minor style/formatting)." },
      { id: "D", text: "Remove all category distinctions so every issue is treated identically regardless of type." },
    ],
    correctOptionIds: ["A","C"],
    selectCount: 2,
    explanation:
      "Explicit inclusion/exclusion criteria (C) and concrete distinguishing examples (A) both directly target the described precision problem. A vague 'be more careful' instruction (B) doesn't provide an actionable standard, and removing category distinctions entirely (D) would make the over-flagging problem worse, not better.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.1 — prompts with explicit criteria",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-005",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.1",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback and minimize false positives.",
    stem:
      "A prompt tells the model to 'be conservative and only report issues you're confident about.' False positives remain frequent. What does this illustrate about confidence-based instructions?",
    options: [
      { id: "A", text: "Confidence-based instructions always work perfectly regardless of how vaguely they're phrased." },
      { id: "B", text: "This outcome proves that no prompt can ever reduce false positives under any circumstances." },
      { id: "C", text: "General instructions like 'be conservative' don't reliably improve precision compared to specific, categorical criteria, since the model has no concrete standard for what counts as confident enough." },
      { id: "D", text: "The issue is unrelated to how the instruction is phrased and is instead caused by the review being run in CI rather than locally." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "This is exactly the pattern the exam guide highlights — vague confidence language fails to improve precision the way concrete, categorical criteria do — confidence phrasing isn't reliably effective (A wrong), false positives are addressable through better criteria, not unfixable (B wrong), and the issue is about instruction specificity, not the CI environment itself (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.1 — prompts with explicit criteria",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-006",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.2",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "An extraction prompt handles standard, well-formatted invoices well but produces inconsistent results on invoices with unusual layouts (e.g., inline citations mixed with a narrative description instead of a clean table). What would most directly help?",
    options: [
      { id: "A", text: "Add few-shot examples specifically demonstrating correct extraction from documents with these varied, non-standard formats, so the model can generalize the right handling to similar novel cases." },
      { id: "B", text: "Remove all examples from the prompt entirely, since examples never help with format variation." },
      { id: "C", text: "Only ever test the system on standard, well-formatted documents going forward, ignoring the unusual ones." },
      { id: "D", text: "Increase the model's temperature setting, which is unrelated to handling format variety." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Few-shot examples demonstrating varied real document structures are specifically effective for reducing hallucination and improving handling of format variety in extraction tasks — removing examples (B) would likely worsen consistency, ignoring the unusual documents (C) doesn't solve the actual production problem, and temperature (D) is unrelated to structural format handling.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.2 — few-shot prompting for consistency",
    difficulty: "easy",
  },
  {
    id: "arch-f-peso-007",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.2",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback and minimize false positives.",
    stem:
      "A review prompt has detailed written instructions about desired output format (location, issue description, severity, suggested fix) but the actual output format still varies noticeably between reviews. What technique most directly improves format consistency here?",
    options: [
      { id: "A", text: "Making the written instructions even longer, since more prose detail always guarantees consistent formatting." },
      { id: "B", text: "Removing the severity field from the requested format entirely, since format fields are the root cause of inconsistency." },
      { id: "C", text: "Few-shot examples have no effect on output format consistency." },
      { id: "D", text: "Adding few-shot examples that demonstrate the exact desired output format, since seeing the pattern directly tends to produce more consistent results than detailed instructions alone." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Few-shot examples are specifically the most effective technique for achieving consistent, actionable formatting when detailed instructions alone haven't fully solved it — more prose (A) doesn't reliably fix formatting inconsistency, removing a field (B) doesn't address the underlying consistency problem, and examples do meaningfully affect format consistency (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.2 — few-shot prompting for consistency",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-008",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.2",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback and minimize false positives.",
    stem:
      "A team wants to demonstrate correct handling of ambiguous tool-selection cases (e.g., when a request could plausibly map to two different review categories) rather than just listing the categories. What should the few-shot examples emphasize?",
    options: [
      { id: "A", text: "Including as many examples as possible with no attention to whether they actually address ambiguity." },
      { id: "B", text: "Showing the reasoning for why one category was chosen over a plausible alternative in an ambiguous case, so the model can generalize that judgment to similar novel ambiguous cases rather than just matching pre-specified examples verbatim." },
      { id: "C", text: "Only showing unambiguous, textbook-clear cases, since ambiguous cases should never appear in few-shot examples." },
      { id: "D", text: "Listing the category names alone with no example scenarios or reasoning at all." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Demonstrating the reasoning behind resolving an ambiguous case is exactly what enables the model to generalize sound judgment to new, similar situations — restricting examples to only unambiguous cases (C) misses the actual challenge, category names alone with no reasoning (D) doesn't teach judgment, and sheer example volume without addressing ambiguity (A) doesn't target the real gap.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.2 — few-shot prompting for consistency",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-009",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.2",
    type: "scenario-multi-response",
    stem:
      "Which two are legitimate reasons to add few-shot examples to a prompt? (Select 2)",
    options: [
      { id: "A", text: "The task involves ambiguous edge cases where showing correct handling by example is more effective than describing every case in prose." },
      { id: "B", text: "The task has no ambiguity, no formatting requirements, and produces perfectly consistent results already." },
      { id: "C", text: "The team wants to reduce the prompt's total token count as much as possible, regardless of any effect on output quality." },
      { id: "D", text: "Detailed prose instructions alone are producing inconsistent output formatting." },
    ],
    correctOptionIds: ["A","D"],
    selectCount: 2,
    explanation:
      "Fixing inconsistent formatting (D) and clarifying ambiguous-case handling (A) are both well-supported reasons to add few-shot examples. Minimizing token count without regard to quality (C) is the opposite motivation, and adding examples to an already perfectly consistent, unambiguous task (B) addresses no actual problem.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.2 — few-shot prompting for consistency",
    difficulty: "easy",
  },
  {
    id: "arch-f-peso-010",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.3",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "A developer asks Claude to 'respond with JSON' in free-form prose, then parses the raw text response directly. Occasionally the response includes an explanatory sentence before the JSON, breaking the parser. What is the more reliable alternative?",
    options: [
      { id: "A", text: "Increase max_tokens, which is unrelated to whether extra prose appears alongside the JSON." },
      { id: "B", text: "Continue requesting JSON in free-form prose, since tool_use provides no reliability benefit over this approach." },
      { id: "C", text: "Use tool_use with a defined JSON schema, which constrains the response to the declared structure and eliminates this category of syntax/formatting error." },
      { id: "D", text: "Ask for the response in plain English instead of JSON, since structured output can never be made reliable." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "tool_use with a JSON schema is specifically the reliable mechanism for guaranteed schema-compliant structured output, eliminating this kind of syntax/formatting error — free-form JSON requests remain more fragile (B wrong), structured output reliability is achievable (D wrong), and max_tokens doesn't address extraneous prose around the JSON (A wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.3 — structured output using tool use and JSON schemas",
    difficulty: "easy",
  },
  {
    id: "arch-f-peso-011",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.3",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "A tool_use-based extraction pipeline reliably returns schema-conformant JSON, but occasionally the extracted line items don't sum to the extracted total. What does this indicate about the limits of schema-based structured output?",
    options: [
      { id: "A", text: "tool_use with a JSON schema eliminates syntax errors but does not guarantee semantic correctness — additional validation logic is needed to catch logical inconsistencies like this." },
      { id: "B", text: "This indicates the schema itself must be malformed and needs to be entirely rewritten." },
      { id: "C", text: "tool_use-based structured output can never contain any kind of error whatsoever." },
      { id: "D", text: "This issue is unrelated to schema-based output and can only be caused by a model version change." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is exactly the known limitation of schema-enforced output — syntactic guarantee without a semantic one — so additional checks (like verifying totals reconcile) are still needed. The schema being syntactically fine doesn't mean it's malformed (B), errors remain possible even with valid structured output (C wrong), and this isn't specifically tied to a model version change (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.3 — structured output using tool use and JSON schemas",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-012",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.3",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "A schema marks a 'discount_percentage' field as required, but many source invoices simply don't offer any discount. What problem does marking this field as required cause, and what is the fix?",
    options: [
      { id: "A", text: "There is no problem; required fields never cause the model to fabricate values under any circumstances." },
      { id: "B", text: "Required fields have no relationship to whether a model provides accurate or fabricated values." },
      { id: "C", text: "The fix is to remove the field from the schema entirely, discarding discount information even when it does exist on some invoices." },
      { id: "D", text: "The model may fabricate a plausible-looking value (e.g., 0% or a guessed number) to satisfy the required-field constraint; making the field optional/nullable allows the model to correctly indicate the information isn't present." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Marking a field required when the source may genuinely lack that information pressures the model toward fabricating a plausible value — making it nullable is the correct fix, letting the model honestly indicate absence rather than making one up. This does happen in practice (A wrong), removing the field entirely (C) loses real data when it is present, and required-field design does affect fabrication risk (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.3 — structured output using tool use and JSON schemas",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-013",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.3",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "A schema includes a 'document_category' enum field with a fixed list of known categories, but the system occasionally encounters genuinely new, unanticipated document types. How should the schema be designed to handle this gracefully?",
    options: [
      { id: "A", text: "Leave the enum as a fixed, closed list with no fallback option, forcing every document into one of the pre-specified categories regardless of fit." },
      { id: "B", text: "Include an 'other' option in the enum paired with a free-text detail field, allowing the model to categorize novel documents without being forced into an incorrect existing category." },
      { id: "C", text: "Add a new fixed category to the enum every time a new document type appears, resulting in an ever-growing but still ultimately closed list." },
      { id: "D", text: "Remove the category field from the schema entirely so novel document types never need to be handled." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "An 'other' + detail-string pattern is specifically the recommended design for extensible categorization, letting the model honestly represent novel cases rather than being forced into a poor-fitting existing category (A) or losing categorization entirely (D). Continuously growing a closed enum (C) is more brittle and reactive than building in an extensible fallback from the start.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.3 — structured output using tool use and JSON schemas",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-014",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.3",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "A pipeline needs to guarantee that a specific 'extract_metadata' tool always runs before any enrichment tools, on a given step, rather than leaving tool selection to the model's judgment. What tool_choice configuration achieves this?",
    options: [
      { id: "A", text: "tool_choice: 'any', which guarantees some tool call but doesn't guarantee it's specifically the metadata extraction tool." },
      { id: "B", text: "tool_choice: 'auto', which may return plain text instead of calling any tool at all." },
      { id: "C", text: "A forced tool_choice naming that specific tool (e.g., {\"type\": \"tool\", \"name\": \"extract_metadata\"}), guaranteeing it runs for that step before subsequent enrichment happens in follow-up turns." },
      { id: "D", text: "There is no way to guarantee a specific tool runs at a specific step." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A forced, named tool_choice is exactly the mechanism for guaranteeing a specific tool runs — 'auto' (B) might not call any tool, 'any' (A) guarantees a tool call but not which one, and this guarantee mechanism does exist (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.3 — structured output using tool use and JSON schemas",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-015",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.4",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "An extraction attempt fails validation because a date field doesn't match the expected format. What is the most effective retry approach?",
    options: [
      { id: "A", text: "Send a follow-up request including the original document, the failed extraction, and the specific validation error, so the model can self-correct the format mismatch." },
      { id: "B", text: "Retry with a completely unrelated document, since the specific validation error is irrelevant to the retry." },
      { id: "C", text: "Retry with the exact same request with no additional information, since repeating the identical request will eventually produce a correctly formatted date." },
      { id: "D", text: "Abandon the extraction permanently the moment any validation error occurs, with no retry attempted." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Including the original input, the failed output, and the specific validation error in a follow-up request is exactly the retry-with-error-feedback pattern that enables effective self-correction — repeating the identical request with no new information (C) doesn't reliably help, abandoning immediately (D) forgoes a fixable format issue, and retrying against an unrelated document (B) doesn't address the actual failed extraction at all.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.4 — validation, retry, and feedback loops",
    difficulty: "easy",
  },
  {
    id: "arch-f-peso-016",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.4",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "An extraction repeatedly fails to populate a 'contract_end_date' field because the source document genuinely never states one (it's an open-ended contract). The pipeline keeps retrying with error feedback. What is the issue with continuing to retry in this case?",
    options: [
      { id: "A", text: "This scenario indicates the schema itself is fundamentally broken and must be redesigned from scratch." },
      { id: "B", text: "Retries are always effective regardless of whether the underlying information exists anywhere in the source document." },
      { id: "C", text: "The correct response is to keep retrying indefinitely until the field is eventually populated by chance." },
      { id: "D", text: "Retries are only effective for fixable errors like format mismatches or structural issues — when the required information is simply absent from the source, no amount of retrying will produce it, so retries should be recognized as ineffective here." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Recognizing when retries can't help — because the information genuinely isn't in the source, as opposed to a fixable format/structural issue — is exactly the distinction this task statement calls for; retries aren't universally effective (B wrong), retrying indefinitely for information that doesn't exist (C) is wasted effort, and this specific case doesn't indicate a broken schema overall (A wrong) — it indicates a nullable field is working as intended.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.4 — validation, retry, and feedback loops",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-017",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.4",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "A team wants to understand which code patterns or document features most often trigger findings that developers later dismiss as false positives, to systematically improve the prompt over time. What structured output design supports this analysis?",
    options: [
      { id: "A", text: "Only recording whether a finding was dismissed or not, with no information about what triggered it in the first place." },
      { id: "B", text: "Adding a detected_pattern field to structured findings, recording what specifically triggered each finding, enabling systematic analysis of dismissal patterns over time." },
      { id: "C", text: "Recording no metadata about findings at all, since dismissal patterns cannot be systematically analyzed." },
      { id: "D", text: "This kind of analysis is only possible by manually re-reading every single finding with no structured field support." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A detected_pattern field is specifically the mechanism for enabling systematic analysis of what triggers false-positive-prone findings — this analysis is achievable with the right structured field (C wrong), tracking dismissal without the triggering pattern (A) loses the information needed to actually improve the prompt, and structured fields specifically avoid needing to manually re-read everything (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.4 — validation, retry, and feedback loops",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-018",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.4",
    type: "scenario-multi-response",
    stem:
      "Which two self-correction design patterns help catch semantic validation errors that schema syntax validation alone would miss? (Select 2)",
    options: [
      { id: "A", text: "Relying exclusively on JSON schema syntax validation, since it fully guarantees the extracted values are logically consistent." },
      { id: "B", text: "Adding a 'conflict_detected' boolean field to flag when source data appears internally inconsistent." },
      { id: "C", text: "Skipping all forms of validation, since tool_use output can never contain any errors of any kind." },
      { id: "D", text: "Extracting a 'calculated_total' field alongside a 'stated_total' field to flag discrepancies between the two." },
    ],
    correctOptionIds: ["B","D"],
    selectCount: 2,
    explanation:
      "Cross-checking a calculated value against a stated one (D) and explicitly flagging detected inconsistencies (B) are both self-correction patterns that catch semantic errors schema validation alone misses. Relying solely on schema validation for logical consistency (A) misunderstands its limits, and skipping validation altogether (C) ignores that structured output can still contain semantic errors.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.4 — validation, retry, and feedback loops",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-019",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.4",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "A validation-retry loop distinguishes between 'the JSON didn't parse' (a structural error) and 'the total is $50 but no such total appears anywhere in the source document' (a semantic error suggesting fabrication). Should both be handled with the same retry-with-error-feedback approach?",
    options: [
      { id: "A", text: "Neither type of error can ever be addressed through any retry or validation strategy." },
      { id: "B", text: "Yes, both should always be handled completely identically with no distinction, since all validation errors are functionally the same." },
      { id: "C", text: "Both can benefit from retry-with-error-feedback, but the semantic fabrication case may need investigation beyond a simple retry (e.g., checking whether the source genuinely lacks this data), since fabrication isn't purely a formatting issue that error feedback alone reliably fixes." },
      { id: "D", text: "No; the structural JSON error should never be retried under any circumstances, while the fabrication case should always be retried indefinitely." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "While error-feedback retry is a reasonable first step for both, a semantic fabrication issue is a different category of problem than a structural syntax error and may need deeper investigation, not just another retry attempt — treating them as completely identical (B) misses this nuance, and the reversed retry logic in C, or dismissing both as unaddressable in D, don't reflect a sound approach.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.4 — validation, retry, and feedback loops",
    difficulty: "hard",
  },
  {
    id: "arch-f-peso-020",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.5",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "A team needs to extract structured data from 50,000 archived documents for a report due in two weeks, with no need for individual results sooner than that. Which API approach fits best?",
    options: [
      { id: "A", text: "The Message Batches API, given the large volume and latency tolerance, which offers meaningful cost savings for exactly this kind of non-blocking, delayed-deadline workload." },
      { id: "B", text: "There is no API approach suited to processing a large volume of documents." },
      { id: "C", text: "The choice between batch and synchronous processing has no effect on cost for this workload." },
      { id: "D", text: "The synchronous, real-time Messages API sending all 50,000 requests in parallel to finish as fast as possible, regardless of the relaxed deadline." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A large volume with a relaxed, latency-tolerant deadline is exactly the batch API's target use case, offering real cost savings — maximizing synchronous parallelism for a deadline that doesn't require it (D) forgoes those savings for no benefit, this workload is well-suited to available API options (B wrong), and the batch/synchronous choice does meaningfully affect cost (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.5 — efficient batch processing strategies",
    difficulty: "easy",
  },
  {
    id: "arch-f-peso-021",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.5",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "A batch of 1,000 extraction requests completes with 40 failures due to documents exceeding a size limit. What is the appropriate remediation approach?",
    options: [
      { id: "A", text: "Discard the whole batch and abandon the extraction task entirely because of a partial failure rate." },
      { id: "B", text: "custom_id fields serve no purpose in identifying which specific requests failed within a batch." },
      { id: "C", text: "Resubmit the entire batch of 1,000 requests from scratch, including the 960 that already succeeded." },
      { id: "D", text: "Use the custom_id values to identify exactly which requests failed, then resubmit only those 40 with an appropriate fix (e.g., chunking the oversized documents), rather than resubmitting the entire batch." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "custom_id is exactly the mechanism for correlating and identifying which specific requests failed, enabling a targeted resubmission of just the 40 with an appropriate fix — resubmitting the entire batch (C) wastes cost and time on the 960 already-successful requests, abandoning the task over a 4% partial failure rate (A) is a disproportionate response, and custom_id does serve this identification purpose (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.5 — efficient batch processing strategies",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-022",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.5",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "A team wants to submit a batch of 10,000 documents using a newly-written extraction prompt that hasn't been tested yet. What is the recommended approach before committing the full volume?",
    options: [
      { id: "A", text: "Never test extraction prompts on a sample, since sample-based testing never predicts full-batch performance." },
      { id: "B", text: "Refine the prompt against a small sample set first, to maximize first-pass success and reduce the cost and delay of iterative resubmission on the full 10,000-document batch." },
      { id: "C", text: "Submit the full 10,000-document batch immediately with the untested prompt, since batch processing makes prompt testing unnecessary." },
      { id: "D", text: "Testing on a small sample provides no benefit compared to testing on the full volume directly." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Refining a prompt against a small sample before committing a large batch is exactly the recommended practice to maximize first-pass success and avoid costly iterative resubmission — skipping this step (C) risks discovering problems only after a costly full-batch run, sample testing is a legitimate and useful practice (A wrong), and it does provide real benefit relative to testing directly on the full volume (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.5 — efficient batch processing strategies",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-023",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.5",
    type: "mcq",
    scenarioContext:
      "You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates the output using JSON schemas, and maintains high accuracy across varied document formats.",
    stem:
      "A pipeline needs a guaranteed 30-hour SLA for a report, using the Message Batches API, which has up to a 24-hour processing window with no guaranteed latency SLA of its own. How should batch submission be scheduled to reliably meet the 30-hour target?",
    options: [
      { id: "A", text: "Submit a single batch at the very last possible moment before the 30-hour deadline, relying on the batch typically finishing faster than 24 hours." },
      { id: "B", text: "There is no way to design a submission schedule that reliably meets an SLA when using the batch API." },
      { id: "C", text: "Submit batches on a frequent enough cadence (e.g., every 4-6 hours) so that even in the worst case — a batch taking close to the full 24-hour window — the 30-hour SLA is still comfortably met." },
      { id: "D", text: "The Message Batches API guarantees results within a fixed, precise latency, making scheduling cadence irrelevant to meeting any SLA." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Since the batch API doesn't guarantee a specific latency within its window, scheduling submissions frequently enough to absorb the worst-case processing time is the sound way to reliably meet a downstream SLA — relying on typical-case timing near the deadline (A) risks missing the SLA if a batch runs long, the API does not guarantee a fixed latency (D wrong), and this kind of SLA-aware scheduling is achievable (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.5 — efficient batch processing strategies",
    difficulty: "hard",
  },
  {
    id: "arch-f-peso-024",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.6",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback and minimize false positives.",
    stem:
      "The same Claude Code session that just generated a bug fix is then asked, in the same session, to review its own fix for correctness. What limitation does this self-review have?",
    options: [
      { id: "A", text: "The session retains the reasoning that led to its own fix, making it less likely to question or catch subtle issues in that same fix compared to an independent review instance without that prior context." },
      { id: "B", text: "Self-review is technically impossible, so this scenario could never actually occur." },
      { id: "C", text: "This limitation only matters for fixes touching more than 500 lines of code." },
      { id: "D", text: "There is no limitation; self-review within the same session is always exactly as effective as an independent review." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A session's retained reasoning about its own prior decision makes it less likely to catch subtle problems with that decision — an independent instance without that context tends to be more effective at catching such issues. This isn't equally effective (D wrong), self-review is technically possible even though less reliable (B wrong), and this isn't gated by a specific line-count threshold (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.6 — multi-instance and multi-pass review architectures",
    difficulty: "easy",
  },
  {
    id: "arch-f-peso-025",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.6",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback and minimize false positives.",
    stem:
      "A single-pass review of a 15-file pull request produces detailed feedback for some files and superficial comments for others, along with occasional contradictions between files. What architectural change would most directly address this?",
    options: [
      { id: "A", text: "Instruct the model to 'be more thorough and consistent across all files' in the system prompt, with no structural change to the review process." },
      { id: "B", text: "Increase the context window so all 15 files fit more comfortably in a single pass." },
      { id: "C", text: "Randomly sample a subset of the 15 files to review instead of reviewing all of them." },
      { id: "D", text: "Split the review into focused per-file passes for local issues, plus a separate cross-file integration pass, rather than reviewing all 15 files together in one pass." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Splitting a large multi-file review into focused per-file passes plus a separate integration pass directly addresses the attention dilution causing uneven depth and contradictions — a larger context window (B) doesn't fix attention-quality issues, a vague instruction with no structural change (A) doesn't reliably change behavior, and sampling fewer files (C) reduces coverage rather than fixing the review architecture.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.6 — multi-instance and multi-pass review architectures",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-026",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.6",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback and minimize false positives.",
    stem:
      "A team wants each finding from an automated review to include the model's own confidence level, so that low-confidence findings can be routed for extra human scrutiny while high-confidence ones move faster. What does this pattern enable?",
    options: [
      { id: "A", text: "Confidence reporting can only be used for code review and has no application to any other kind of review task." },
      { id: "B", text: "Calibrated review routing — using self-reported confidence alongside each finding to prioritize limited human review attention toward findings that most need it." },
      { id: "C", text: "This pattern has no practical benefit, since self-reported confidence is always perfectly meaningless and uncorrelated with actual accuracy." },
      { id: "D", text: "This pattern eliminates the need for any human review whatsoever, regardless of confidence level." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Attaching self-reported confidence to each finding to route human review attention is exactly the calibrated-routing pattern this task statement targets — this isn't claiming confidence scores are flawless (a separate, more nuanced point) but that they enable useful routing, not that they're meaningless (C overstates the caveat) or that they eliminate all human review (D overstates the benefit); this pattern generalizes beyond code review to other review-oriented tasks (A wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.6 — multi-instance and multi-pass review architectures",
    difficulty: "medium",
  },
  {
    id: "arch-f-peso-027",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.6",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests. You need to design prompts that provide actionable feedback and minimize false positives.",
    stem:
      "A team considers replacing multi-pass review architecture with extended thinking within a single self-review pass, reasoning that more reasoning time should catch the same issues an independent second pass would. Is this a reliable substitute?",
    options: [
      { id: "A", text: "Multi-pass review and extended thinking are the exact same technique with no meaningful distinction between them." },
      { id: "B", text: "Yes, extended thinking within the same session is always a fully equivalent and interchangeable substitute for an independent review instance." },
      { id: "C", text: "Not necessarily — the exam guide specifically notes that independent review instances (without the generator's prior reasoning context) tend to be more effective at catching subtle issues than extended thinking or self-review instructions applied within the same session." },
      { id: "D", text: "Extended thinking eliminates the need for any review process of any kind, single-pass or multi-pass." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "This is directly addressed in the guide — extended thinking or self-review instructions within the same session don't substitute reliably for an independent instance's fresh perspective, since the self-reviewing session retains its own reasoning context. These aren't fully interchangeable (B wrong) or the same technique (A wrong), and extended thinking doesn't eliminate the need for review altogether (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.6 — multi-instance and multi-pass review architectures",
    difficulty: "hard",
  },
  {
    id: "arch-f-peso-028",
    certificationSlug: "architect-foundations",
    domain: "Prompt Engineering & Structured Output",
    taskStatement: "4.6",
    type: "scenario-multi-response",
    stem:
      "Which two are legitimate reasons to use an independent Claude instance to review generated code, rather than having the same session review its own output? (Select 2)",
    options: [
      { id: "A", text: "Using an independent instance is required by the Claude API and cannot be avoided under any circumstances." },
      { id: "B", text: "An independent instance without that prior context is generally more effective at catching subtle issues." },
      { id: "C", text: "The generating session retains reasoning context that can make it less likely to question its own prior decisions." },
      { id: "D", text: "Independent review instances are always guaranteed to find every possible bug with zero false negatives." },
    ],
    correctOptionIds: ["B","C"],
    selectCount: 2,
    explanation:
      "The self-review context-retention limitation (C) and the demonstrated effectiveness of independent review (B) are the actual, well-supported rationale. Claiming a guarantee of catching every bug (D) overstates what independent review provides, and there's no such API-level requirement forcing this pattern (A) — it's a recommended architectural choice, not a mandate.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 4, Task Statement 4.6 — multi-instance and multi-pass review architectures",
    difficulty: "medium",
  },
];
