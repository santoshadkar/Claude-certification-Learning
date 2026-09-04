import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Context Management & Reliability" as const;
const CERT = "architect-foundations" as const;

const SUPPORT_SCENARIO =
  "You are building a customer support resolution agent with the Claude Agent SDK. It has custom MCP tools: get_customer, lookup_order, process_refund, and escalate_to_human. The team's target is 80%+ first-contact resolution while still escalating appropriately.";

const RESEARCH_SCENARIO =
  "You are building a multi-agent research system with a coordinator agent that delegates to specialized subagents for web search, document analysis, and synthesis.";

const CODE_SCENARIO =
  "You are using Claude Code to explore and modify a large, unfamiliar legacy codebase across a long-running session.";

export const questions: QuestionInput[] = [
  {
    id: "arch-f-cmr-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.1",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "As a support conversation grows long, the agent progressively summarizes earlier turns to save context space. A customer's originally-stated refund amount ($247.83) becomes 'a refund' in the summary, and the agent later asks the customer to restate the amount. What does this illustrate?",
    options: [
      { id: "A", text: "Progressive summarization risk — specific, transactional facts (amounts, dates, order numbers) can get quietly compressed into vague language, losing exactly the details that matter most for resolution." },
      { id: "B", text: "This is expected, harmless behavior with no real downside to the customer experience." },
      { id: "C", text: "Summarization always preserves every specific numeric detail perfectly with no risk of loss." },
      { id: "D", text: "This issue is unrelated to how the conversation history was condensed." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is exactly the progressive summarization risk called out for transactional facts — losing a specific dollar amount to vague language creates real friction (contradicting B), summarization does not automatically preserve every specific detail perfectly (C wrong), and the cause here is directly tied to how the history was condensed (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.1 — managing conversation context across long interactions",
    difficulty: "easy",
  },
  {
    id: "arch-f-cmr-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.1",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "A long support conversation covers three separate issues over time. The agent's later responses seem to lose track of the order number mentioned for the first issue, even though it's technically still somewhere in the conversation history. What architectural fix directly addresses this?",
    options: [
      { id: "A", text: "Extract transactional facts (order numbers, amounts, dates) into a persistent 'case facts' block included in every prompt, outside the summarized history, rather than relying on the model to find and retain them from deep within a long, summarized conversation." },
      { id: "B", text: "Increase the model's context window size with no other change, since window size alone always fully resolves this kind of tracking issue." },
      { id: "C", text: "Remove all historical context after each new issue is raised, keeping only the most recent message." },
      { id: "D", text: "This issue cannot be addressed through any context management technique." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A persistent, explicit 'case facts' block is exactly the recommended pattern for keeping durable transactional facts reliably available, independent of how deep in a summarized history they'd otherwise be — window size alone (B) doesn't guarantee retention/weighting of a specific detail, discarding all history after each new issue (C) would lose needed continuity, and this is a well-addressable problem (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.1 — managing conversation context across long interactions",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.1",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "A synthesis subagent receives a long aggregated document where the most important findings happen to fall in the middle of the input, with less important context at the beginning and end. What risk does this input structure create, and what is the fix?",
    options: [
      { id: "A", text: "The 'lost in the middle' effect means information in the middle of long inputs can be weighted less reliably than the beginning or end; restructuring to place key findings near the start (with clear section headers throughout) mitigates this." },
      { id: "B", text: "There is no risk; models weight every part of a long input completely equally regardless of position." },
      { id: "C", text: "The only fix is to remove the middle section of the input entirely." },
      { id: "D", text: "This effect only applies to inputs shorter than 500 words." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is exactly the recognized positional effect in long inputs, and restructuring to front-load key findings with clear headers is the practical mitigation — position doesn't have zero effect (B wrong), deleting the middle section (C) would lose real content rather than just reorganizing it, and this effect is associated with long inputs generally, not gated at a specific short word count (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.1 — managing conversation context across long interactions",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.1",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "An order-lookup tool returns 40+ fields per order, but only 5 (status, item, amount, date, tracking number) are ever relevant to a return request. The agent's context fills up quickly across a multi-turn conversation with many lookups. What is the recommended fix?",
    options: [
      { id: "A", text: "Trim tool output to only the relevant fields before it accumulates in context, rather than passing through the full 40+ field response on every lookup." },
      { id: "B", text: "Leave the full 40+ field response in context on every call, since trimming tool output is never beneficial." },
      { id: "C", text: "Stop calling the lookup tool entirely to avoid the context growth." },
      { id: "D", text: "Increase the model's context window as the only necessary fix, with no change to what's actually included from each tool call." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Trimming tool output to only the fields actually relevant to the task is exactly the recommended fix for this disproportionate context consumption — keeping everything (B) is the described problem, not calling the tool at all (C) removes needed functionality, and relying solely on a bigger window without addressing what's actually included (D) doesn't solve the underlying inefficiency.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.1 — managing conversation context across long interactions",
    difficulty: "easy",
  },
  {
    id: "arch-f-cmr-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.1",
    type: "scenario-multi-response",
    stem:
      "Which two practices help preserve critical information across a long, multi-turn conversation? (Select 2)",
    options: [
      { id: "A", text: "Extracting durable transactional facts into a persistent block included in every prompt, separate from summarized history." },
      { id: "B", text: "Trimming verbose tool outputs down to only the fields relevant to the current task before they accumulate in context." },
      { id: "C", text: "Relying exclusively on progressive summarization for every kind of detail, including specific numbers and dates, with no special handling." },
      { id: "D", text: "Appending every tool result in full, with no trimming, to maximize the amount of raw information technically available." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Persisting durable facts outside summarization (A) and trimming tool output to what's relevant (B) both directly protect against losing critical information. Applying undifferentiated summarization even to specific numeric details (C) is exactly the risk being guarded against, and appending everything in full with no trimming (D) causes the context bloat these practices are meant to prevent.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.1 — managing conversation context across long interactions",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.2",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "A customer explicitly says 'I want to speak to a human,' but the issue itself (checking an order's shipping status) is simple and squarely within the agent's capability. What is the appropriate response?",
    options: [
      { id: "A", text: "Honor the explicit request and escalate to a human immediately, rather than first attempting to resolve the issue autonomously despite it being simple." },
      { id: "B", text: "Ignore the request and resolve the issue autonomously anyway, since the underlying task is simple enough for the agent to handle." },
      { id: "C", text: "Ask the customer to justify why they want a human before considering escalation." },
      { id: "D", text: "Always resolve every request autonomously regardless of what the customer explicitly asks for." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "An explicit customer request for a human is one of the clear escalation triggers and should be honored immediately, regardless of how simple the underlying task is — resolving it anyway despite the explicit request (B, D) overrides stated preference, and demanding justification before honoring a clear request (C) adds unnecessary friction.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.2 — escalation and ambiguity resolution patterns",
    difficulty: "easy",
  },
  {
    id: "arch-f-cmr-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.2",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "A customer asks for a price match against a competitor's advertised price, but the written return/refund policy only addresses price adjustments for the company's own site sales, saying nothing about competitor price matching. What does this situation call for?",
    options: [
      { id: "A", text: "Escalation, since the policy is silent on this specific request — a policy gap, not just a hard case — rather than the agent making an autonomous judgment call on a scenario the policy doesn't address." },
      { id: "B", text: "Autonomous resolution using the agent's best guess about what the policy probably would say if it addressed this case." },
      { id: "C", text: "Denying the request outright, since anything not explicitly permitted by the policy should always be refused without escalation." },
      { id: "D", text: "Escalation is never warranted for pricing-related requests under any circumstances." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A genuine policy gap — not just a complex case, but the absence of a stated rule — is specifically called out as an appropriate escalation trigger. Guessing at what an unstated policy 'probably' means (B) risks an incorrect commitment, reflexively denying anything unaddressed (C) isn't the same as escalating for a human decision, and pricing requests aren't categorically excluded from escalation (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.2 — escalation and ambiguity resolution patterns",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.2",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "A team considers using the customer's detected sentiment (frustration level inferred from message tone) as the primary signal for deciding when to escalate to a human. What is the concern with this approach?",
    options: [
      { id: "A", text: "Sentiment is an unreliable proxy for actual case complexity — a frustrated customer can have a simple issue, and a calm customer can have a genuinely complex one — so sentiment alone shouldn't drive the escalation decision." },
      { id: "B", text: "Sentiment analysis is always a perfectly reliable predictor of case complexity with no exceptions." },
      { id: "C", text: "There is no concern; sentiment-based escalation is the recommended primary signal for all support systems." },
      { id: "D", text: "Sentiment has no relationship to escalation decisions in any support system design." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Sentiment and case complexity are specifically called out as not reliably correlated, making sentiment a poor primary signal for escalation — it's not a perfectly reliable predictor (B wrong), it's specifically not the recommended primary driver (C wrong), and it isn't entirely irrelevant either — it's just not sufficient on its own (D overstates the disconnect).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.2 — escalation and ambiguity resolution patterns",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.2",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "A lookup_customer call returns two different customer records that both plausibly match the information the caller provided (e.g., same name, different addresses). What is the appropriate next step?",
    options: [
      { id: "A", text: "Ask the customer for an additional identifying detail to disambiguate between the two matches, rather than picking one based on a heuristic guess." },
      { id: "B", text: "Select whichever of the two matching records was returned first by the lookup, with no further verification." },
      { id: "C", text: "Proceed with the request without resolving which customer record is correct, applying the action to both matches simultaneously." },
      { id: "D", text: "Escalate immediately to a human without first attempting to ask a simple clarifying question." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Asking for an additional identifier is exactly the recommended approach when multiple matches create genuine ambiguity — picking based on an arbitrary heuristic like return order (B) risks acting on the wrong customer's record, applying an action to both simultaneously (C) is unsafe, and escalating before attempting a simple, likely-sufficient clarifying question (D) is a heavier response than the situation calls for initially.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.2 — escalation and ambiguity resolution patterns",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.2",
    type: "mcq",
    scenarioContext: SUPPORT_SCENARIO,
    stem:
      "A customer expresses frustration ('this is ridiculous, I've been waiting forever') but their underlying request — checking a delivery estimate — is squarely within the agent's capability and the policy clearly covers it. What is the appropriate response?",
    options: [
      { id: "A", text: "Acknowledge the frustration while proceeding to resolve the issue, since it's within the agent's capability and policy is clear — escalating only if the customer explicitly reiterates a preference for a human after that." },
      { id: "B", text: "Escalate immediately based on the detected frustration alone, without attempting to resolve a request the agent is fully capable of handling." },
      { id: "C", text: "Ignore the expressed frustration entirely and respond in a purely mechanical, unacknowledging tone." },
      { id: "D", text: "Refuse to help until the customer calms down and rephrases their message more politely." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Acknowledging frustration while still offering resolution — since the issue is within scope and policy is clear — respects both the customer's emotional state and the agent's actual capability, escalating further only if they still prefer a human afterward. Escalating on sentiment alone despite being capable of resolving it (B) forgoes appropriate autonomous resolution, ignoring frustration entirely (C) is poor service, and refusing to help pending a tone change (D) is inappropriate and unhelpful.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.2 — escalation and ambiguity resolution patterns",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.3",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "A web-search subagent times out mid-task. Its error response to the coordinator is a bare 'search unavailable' string with no further detail. What problem does this create for the coordinator?",
    options: [
      { id: "A", text: "A generic status hides the failure type, what was attempted, and any partial results — information the coordinator needs to decide whether to retry, try an alternative approach, or proceed with a noted coverage gap." },
      { id: "B", text: "There is no problem; a bare status string always gives the coordinator everything it needs to make an optimal recovery decision." },
      { id: "C", text: "This error format is only a problem if the timeout happens more than once in the same session." },
      { id: "D", text: "The coordinator doesn't need any information about subagent failures to function correctly." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A generic status hides exactly the structured context (failure type, what was attempted, partial results) the coordinator needs for an intelligent recovery decision — a bare string doesn't provide that (B wrong), the problem exists on the very first occurrence, not just repeats (C wrong), and the coordinator's recovery decisions do depend on this kind of error context (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.3 — error propagation across multi-agent systems",
    difficulty: "easy",
  },
  {
    id: "arch-f-cmr-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.3",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "A document-analysis subagent, when it can't find any matching documents for a niche subtopic, silently returns an empty result marked as a successful search rather than flagging that the search may have failed to find relevant sources. What risk does this create?",
    options: [
      { id: "A", text: "The coordinator can't distinguish a genuinely empty, successful search from a search that may have actually failed to find real results, risking either a false sense of complete coverage or a missed opportunity to retry/investigate." },
      { id: "B", text: "There is no risk; silently marking an empty result as success is always the correct and safe default behavior." },
      { id: "C", text: "This risk only matters if the subtopic involves numeric data." },
      { id: "D", text: "Distinguishing a valid empty result from a failure has no bearing on the quality of the final synthesized report." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Silently marking an ambiguous empty outcome as unqualified success is specifically flagged as an anti-pattern — it obscures whether the topic was genuinely covered or the search underperformed, and this distinction does affect the quality of the eventual synthesis (contradicting B and D); it isn't limited to numeric subtopics (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.3 — error propagation across multi-agent systems",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.3",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "One of three subagents in a research pipeline fails entirely partway through. The coordinator's current design terminates the entire research workflow the moment any single subagent fails. What is the concern with this design?",
    options: [
      { id: "A", text: "Terminating the whole workflow over a single subagent's failure discards potentially valuable partial results from the other subagents that succeeded, when proceeding with an annotated coverage gap might be more useful." },
      { id: "B", text: "There is no concern; terminating the entire workflow on any single failure is always the correct and safest design." },
      { id: "C", text: "This design only matters if the failed subagent was the coordinator itself." },
      { id: "D", text: "Partial results from other subagents are never useful once any one subagent has failed." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Killing the entire workflow over one subagent's failure is specifically named as an anti-pattern — proceeding with partial results and an annotated gap is generally more useful than discarding everything (contradicting B and D); this concern applies to any subagent failing, not specifically the coordinator (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.3 — error propagation across multi-agent systems",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.3",
    type: "scenario-multi-response",
    stem:
      "Which two practices reflect sound error propagation design in a multi-agent system? (Select 2)",
    options: [
      { id: "A", text: "Subagents attempt local recovery for transient failures, propagating to the coordinator only errors they cannot resolve themselves." },
      { id: "B", text: "Error reports include what was attempted and any partial results, not just a bare success/failure flag." },
      { id: "C", text: "Every error, no matter how minor or locally recoverable, is always immediately propagated to the coordinator with no local handling attempted." },
      { id: "D", text: "All failures are silently converted into empty successful results to keep the pipeline running smoothly no matter what." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Local recovery with escalation only when needed (A) and informative error context (B) both support intelligent, differentiated recovery decisions. Propagating every error regardless of local recoverability (C) creates unnecessary coordinator overhead, and silently converting failures into fake successes (D) is exactly the anti-pattern that hides real problems.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.3 — error propagation across multi-agent systems",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.4",
    type: "mcq",
    scenarioContext: CODE_SCENARIO,
    stem:
      "After several hours of exploring a large, unfamiliar codebase in one continuous session, the agent starts giving answers that reference 'typical patterns' rather than the specific classes it discovered earlier in the same session. What does this illustrate?",
    options: [
      { id: "A", text: "Context degradation in extended sessions — as a session runs very long, the model can start relying on generic patterns instead of the specific, previously-discovered details, which scratchpad files or subagent delegation can help counteract." },
      { id: "B", text: "This behavior indicates the codebase itself is poorly organized, unrelated to session length." },
      { id: "C", text: "Extended sessions never experience any degradation regardless of length." },
      { id: "D", text: "This can only be fixed by discarding the entire session and starting over with zero prior context." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is exactly the context degradation pattern called out for extended sessions, and techniques like scratchpad files or delegating exploration to subagents are the recommended countermeasures — the codebase's organization isn't the cause here (B wrong), degradation is a real risk in long sessions (C wrong), and starting over from zero (D) is a more drastic response than the recommended techniques.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.4 — context management in large codebase exploration",
    difficulty: "easy",
  },
  {
    id: "arch-f-cmr-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.4",
    type: "mcq",
    scenarioContext: CODE_SCENARIO,
    stem:
      "A developer wants key findings from an early exploration phase (e.g., 'the auth logic lives in these 3 files, uses this pattern') to remain reliably available for reference throughout a long, multi-phase session. What technique addresses this?",
    options: [
      { id: "A", text: "Maintaining a scratchpad file that records key findings as they're discovered, which the agent can reference for subsequent questions rather than relying on the findings staying reliably present in a long, degrading context." },
      { id: "B", text: "Relying purely on the conversation history remaining perfectly and reliably accessible indefinitely with no additional persistence mechanism." },
      { id: "C", text: "Discarding early findings intentionally once a new phase of exploration begins." },
      { id: "D", text: "Scratchpad files serve no purpose in managing context during codebase exploration." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A scratchpad file recording key findings is specifically the recommended technique for counteracting context degradation over a long session — relying solely on raw conversation history staying perfectly reliable (B) is exactly the assumption that fails in practice, deliberately discarding early findings (C) loses needed information, and scratchpad files do serve this purpose (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.4 — context management in large codebase exploration",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.4",
    type: "mcq",
    scenarioContext: CODE_SCENARIO,
    stem:
      "A developer wants to investigate a specific, narrow question ('find all files that import this deprecated module') without letting the exploration's verbose output consume the main session's context. What approach fits best?",
    options: [
      { id: "A", text: "Spawn a subagent to investigate the specific question, keeping the main agent's context focused on high-level coordination rather than the detailed exploratory search process." },
      { id: "B", text: "Perform the entire exploratory search directly in the main session's context with no delegation, regardless of how verbose the output becomes." },
      { id: "C", text: "Skip investigating the question entirely to avoid any context cost." },
      { id: "D", text: "Subagent delegation provides no benefit for this kind of narrow investigative question." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Delegating a narrow, verbose investigative question to a subagent is exactly the recommended pattern for keeping the main session's context focused on high-level coordination — performing it directly in the main context (B) risks exactly the bloat being avoided, skipping the investigation (C) forgoes needed information, and delegation is well-suited to this kind of focused question (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.4 — context management in large codebase exploration",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.4",
    type: "mcq",
    scenarioContext: CODE_SCENARIO,
    stem:
      "A long exploration session risks losing all progress if the process crashes partway through a multi-phase investigation. What design pattern supports reliable recovery in this situation?",
    options: [
      { id: "A", text: "Structured state persistence — having each agent export its state to a known location, with the coordinator loading a manifest of that state on resume, rather than having to replay the entire exploration from scratch." },
      { id: "B", text: "Accepting that a crash always means all prior exploration progress is permanently and unavoidably lost with no way to recover it." },
      { id: "C", text: "Avoiding any multi-phase investigation entirely to eliminate crash risk." },
      { id: "D", text: "Structured state persistence has no relationship to crash recovery in agentic workflows." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Exporting state to a known location and loading a manifest on resume is exactly the recommended crash-recovery design, avoiding a full replay of the exploration — this is a real recovery capability (B wrong), avoiding multi-phase work entirely (C) is an extreme overcorrection when recovery is achievable, and structured state persistence is directly related to crash recovery (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.4 — context management in large codebase exploration",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.4",
    type: "mcq",
    scenarioContext: CODE_SCENARIO,
    stem:
      "A developer's session has accumulated a large amount of verbose discovery output from an earlier exploration phase that's no longer needed for the current implementation phase. What command is designed to reduce context usage in this situation?",
    options: [
      { id: "A", text: "/compact, which reduces context usage during extended sessions once verbose discovery output has served its purpose and is no longer needed in full." },
      { id: "B", text: "/compact permanently deletes the entire session with no summary retained." },
      { id: "C", text: "There is no command or mechanism for reducing accumulated context mid-session." },
      { id: "D", text: "/compact only works at the very start of a session, before any exploration has occurred." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "/compact is specifically designed to reduce context usage mid-session once earlier content is no longer needed in full — it doesn't discard everything with no summary (B wrong), this capability exists (C wrong), and it's meant to be used mid-session after context has accumulated, not only at the start (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.4 — context management in large codebase exploration",
    difficulty: "easy",
  },
  {
    id: "arch-f-cmr-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.5",
    type: "mcq",
    scenarioContext: "You are building a structured data extraction system using Claude, validated against JSON schemas and monitored for accuracy over time.",
    stem:
      "An extraction system reports 97% overall accuracy, and the team is considering reducing human review based on this number. What risk does relying on this aggregate figure alone carry?",
    options: [
      { id: "A", text: "An aggregate accuracy number can mask much worse performance on specific document types or fields, so reducing review based on the aggregate alone risks missing a segment with a genuinely poor error rate." },
      { id: "B", text: "There is no risk; a 97% aggregate accuracy figure always guarantees uniformly high accuracy across every document type and field without exception." },
      { id: "C", text: "Aggregate accuracy figures are always the most granular and informative metric available, superior to any segmented analysis." },
      { id: "D", text: "This risk only applies when the aggregate accuracy is below 90%." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A high aggregate figure can hide a much worse-performing segment (a specific document type or field), which is exactly the risk of relying on it alone — it doesn't guarantee uniform accuracy (B wrong), segmented analysis provides more granular insight than the aggregate alone (C wrong, backwards), and this risk isn't gated to only low aggregate scores (D wrong) — a high aggregate score can just as easily mask a problem.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.5 — human review workflows and confidence calibration",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.5",
    type: "mcq",
    scenarioContext: "You are building a structured data extraction system using Claude, validated against JSON schemas and monitored for accuracy over time.",
    stem:
      "A team wants to detect novel error patterns that might emerge even among extractions the model reports as high-confidence. What technique supports this ongoing detection?",
    options: [
      { id: "A", text: "Stratified random sampling of even high-confidence extractions, to measure real error rates and catch novel patterns that a fixed confidence threshold alone would otherwise miss." },
      { id: "B", text: "Sampling only low-confidence extractions, since high-confidence extractions can never contain any errors worth checking." },
      { id: "C", text: "Skipping any ongoing sampling once the model's initial validation passes, since accuracy never changes after that point." },
      { id: "D", text: "This kind of ongoing detection is not achievable through any sampling strategy." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Stratified random sampling that includes high-confidence extractions is specifically the technique for catching novel error patterns a confidence threshold alone would miss — high-confidence extractions aren't error-free by definition (B wrong), accuracy can drift over time so ongoing sampling remains valuable (C wrong), and this kind of detection is achievable through sampling (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.5 — human review workflows and confidence calibration",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.5",
    type: "mcq",
    scenarioContext: "You are building a structured data extraction system using Claude, validated against JSON schemas and monitored for accuracy over time.",
    stem:
      "A team wants to route only the extractions most likely to be wrong toward limited human reviewer capacity, rather than reviewing everything or nothing. What supports this kind of targeted routing?",
    options: [
      { id: "A", text: "Field-level confidence scores, calibrated against a labeled validation set, used to route low-confidence or ambiguous extractions to human review while allowing high-confidence ones to proceed automatically." },
      { id: "B", text: "Routing extractions to review completely at random, with no relationship to confidence or likely accuracy." },
      { id: "C", text: "Reviewing either 100% or 0% of extractions, since partial, confidence-based routing is not achievable in practice." },
      { id: "D", text: "Confidence scores are meaningless unless calibrated, so they should never be used for routing decisions of any kind." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Calibrated field-level confidence scores are exactly what enables targeted routing of the extractions most likely to need review — random routing (B) doesn't target actual risk, all-or-nothing review (C) ignores that partial, confidence-based routing is achievable and valuable, and calibration is precisely what makes confidence scores usable for this purpose, not a reason to discard them (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.5 — human review workflows and confidence calibration",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.5",
    type: "scenario-multi-response",
    stem:
      "Which two practices support a sound human-review workflow for a structured extraction system at scale? (Select 2)",
    options: [
      { id: "A", text: "Analyzing accuracy segmented by document type and field, not just as one aggregate number, before reducing human review anywhere." },
      { id: "B", text: "Calibrating confidence thresholds against a labeled validation set rather than trusting raw model-reported confidence uncritically." },
      { id: "C", text: "Reducing human review to zero the moment the aggregate accuracy crosses 95%, regardless of segment-level performance." },
      { id: "D", text: "Never sampling high-confidence extractions for review, since by definition they can never contain errors worth catching." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Segmented accuracy analysis (A) and calibrated confidence thresholds (B) both support a sound, risk-aware review workflow. Cutting review to zero based solely on an aggregate threshold (C) ignores segment-level risk, and never sampling high-confidence extractions (D) misses the stratified-sampling practice that catches novel errors.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.5 — human review workflows and confidence calibration",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.6",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "A synthesis subagent combines findings from multiple sources into a final report, but the report no longer indicates which specific source supported which specific claim. What problem does this illustrate?",
    options: [
      { id: "A", text: "Loss of information provenance during synthesis — without structured claim-source mappings preserved through the process, a reader can no longer verify or trace individual claims back to their original sources." },
      { id: "B", text: "There is no problem; losing source attribution during synthesis is always an acceptable and expected simplification." },
      { id: "C", text: "This issue can only occur when exactly two sources are combined, never with three or more." },
      { id: "D", text: "Preserving claim-source mappings has no relationship to how trustworthy or verifiable a synthesized report is." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Losing the mapping between claims and their sources during summarization is specifically the provenance-loss problem this task statement addresses — it's not an acceptable default simplification (B wrong), it isn't limited to a specific source count (C wrong), and provenance is directly tied to a report's trustworthiness and verifiability (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.6 — information provenance and multi-source synthesis",
    difficulty: "easy",
  },
  {
    id: "arch-f-cmr-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.6",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "Two credible sources report different figures for the same statistic (e.g., market size). How should the synthesis handle this conflict?",
    options: [
      { id: "A", text: "Annotate both values with their respective source attributions rather than arbitrarily picking one, letting the reader see the conflict and its sources explicitly." },
      { id: "B", text: "Silently pick whichever value appears first in the source material with no indication a conflict exists." },
      { id: "C", text: "Average the two conflicting figures together and present the average as a single, unattributed fact." },
      { id: "D", text: "Omit the statistic entirely from the report whenever any two sources disagree on any point." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Annotating a genuine conflict with both values and their sources, rather than arbitrarily resolving it, is exactly the recommended handling — silently picking one (B) or averaging into an unattributed number (C) both hide the real disagreement and its sources, and omitting the statistic entirely (D) throws away real information the reader could use.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.6 — information provenance and multi-source synthesis",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.6",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "A document-analysis subagent's structured output omits the publication date of a source it analyzed. Later, the synthesis subagent flags what looks like a contradiction between this source and a more recent one, when in fact the sources simply reflect different points in time. What would have prevented this false contradiction?",
    options: [
      { id: "A", text: "Requiring subagents to include publication or data-collection dates in their structured outputs, so downstream synthesis can correctly interpret a real temporal difference rather than misreading it as a contradiction." },
      { id: "B", text: "Publication dates have no bearing on whether two data points should be interpreted as contradictory or simply reflecting different time periods." },
      { id: "C", text: "This kind of misinterpretation can never be prevented through any structured output design." },
      { id: "D", text: "Omitting dates from structured output is always harmless regardless of the type of content being synthesized." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Requiring dates in structured output is specifically what enables correct temporal interpretation, distinguishing a real change over time from an actual contradiction — dates are directly relevant to this interpretation (B wrong), this misinterpretation is preventable with the right structured fields (C wrong), and omitting dates is not harmless when temporal context matters for correct interpretation (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.6 — information provenance and multi-source synthesis",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.6",
    type: "mcq",
    scenarioContext: RESEARCH_SCENARIO,
    stem:
      "A final research report presents financial data as flowing narrative prose, news coverage as a rigid data table, and technical findings as an unstructured paragraph — the reverse of what would suit each content type. What principle does this violate?",
    options: [
      { id: "A", text: "Rendering different content types in the format appropriate to them (e.g., tables for financial data, prose for narrative news coverage, structured lists for technical findings) rather than converting everything to one uniform format regardless of fit." },
      { id: "B", text: "There is no principle at stake; content type has no bearing on which output format best serves a reader." },
      { id: "C", text: "All synthesized content should always be rendered as a single uniform format regardless of what it represents, since format consistency is the only consideration that matters." },
      { id: "D", text: "This is purely a stylistic preference with no effect on how usable or clear the final report is." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Matching format to content type — tables for financial data, prose for narrative, structured lists for technical findings — is exactly the principle being violated here by using mismatched formats. Content type does affect which format serves a reader best (B wrong), forcing uniform formatting regardless of fit (C) is the described anti-pattern, not the goal, and this has real usability consequences, not just stylistic ones (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.6 — information provenance and multi-source synthesis",
    difficulty: "medium",
  },
  {
    id: "arch-f-cmr-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "5.6",
    type: "scenario-multi-response",
    stem:
      "Which two practices help preserve information provenance during multi-source synthesis? (Select 2)",
    options: [
      { id: "A", text: "Requiring subagents to output structured claim-source mappings (URLs, document names, relevant excerpts) that are preserved rather than discarded during synthesis." },
      { id: "B", text: "Structuring the final report with explicit sections distinguishing well-established findings from contested ones, preserving original source characterizations." },
      { id: "C", text: "Compressing every source's findings into a single unattributed paragraph to simplify the reading experience." },
      { id: "D", text: "Discarding source metadata as soon as document analysis completes, keeping only the bare conclusions for synthesis." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Preserving structured claim-source mappings (A) and explicitly distinguishing well-established from contested findings with source context (B) both directly support provenance. Compressing everything into an unattributed paragraph (C) and discarding source metadata early (D) both destroy the very provenance these practices are meant to preserve.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 5, Task Statement 5.6 — information provenance and multi-source synthesis",
    difficulty: "medium",
  },
];
