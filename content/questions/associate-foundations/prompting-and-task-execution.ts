import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Prompting and Task Execution" as const;
const CERT = "associate-foundations" as const;
const O1 = "Create effective prompts for business and technical tasks" as const;
const O2 = "Apply task decomposition techniques to structure complex requests" as const;
const O3 = "Iterate prompts to improve output quality" as const;
const O4 = "Adapt prompting strategies based on task type (analysis, research, drafting, brainstorming)" as const;

export const questions: QuestionInput[] = [
  {
    id: "assoc-pte-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "An HR coordinator asks Claude: 'Write an onboarding email.' The result is generic and doesn't mention the company's actual first-day process. What is the most likely reason, and the best fix?",
    options: [
      { id: "A", text: "Claude simply isn't capable of writing onboarding emails well; a different tool is needed." },
      {
        id: "B",
        text: "The prompt lacked context — the new hire's role, start date, and the company's actual first-day steps — and adding that context would produce a usable draft.",
      },
      { id: "C", text: "The request should be repeated exactly as-is several times until the output improves." },
      { id: "D", text: "Onboarding emails are too company-specific for any AI tool to help with." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A generic prompt produces a generic result; supplying the missing context (role, date, actual process) is what turns a vague request into an effective one. Assuming incapability (A, D) or repeating the identical prompt (C) doesn't address the actual cause.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Create effective prompts for business and technical tasks'",
    difficulty: "easy",
  },
  {
    id: "assoc-pte-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A paralegal asks Claude to 'summarize the indemnification clause' from a 30-page vendor agreement, pasting the entire document with no other instruction. The summary is broadly correct but doesn't focus on the specific risk the paralegal actually cares about (liability caps). What should the prompt have included?",
    options: [
      { id: "A", text: "Nothing — the summary is accurate, so the prompt was fine." },
      { id: "B", text: "A specific statement of what to focus on (liability caps) so the summary targets the actual concern, not just the general topic." },
      { id: "C", text: "An instruction to make the summary shorter." },
      { id: "D", text: "A request to translate the clause into plain English only." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Naming the specific concern (liability caps) inside a broader topic (indemnification) focuses the output on what actually matters to the reader. Being merely accurate isn't the same as being useful (A); shortening (C) or reformatting (D) doesn't add the missing focus.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Create effective prompts for business and technical tasks'",
    difficulty: "medium",
  },
  {
    id: "assoc-pte-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A support engineer asks Claude to 'write a bug report' about an issue they just described verbally in one sentence. The generated report is vague and missing reproduction steps. What is the best way to fix the prompt?",
    options: [
      { id: "A", text: "Ask Claude to make the report longer." },
      {
        id: "B",
        text: "Provide the actual details a bug report needs — steps to reproduce, expected vs. actual behavior, environment — since Claude can't include specifics it was never given.",
      },
      { id: "C", text: "Ask a coworker to write the bug report manually instead." },
      { id: "D", text: "Request the report in a different file format." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A bug report is only as complete as the information supplied to generate it — the fix is supplying the missing specifics, not padding length (A), format (D), or abandoning the tool (C).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Create effective prompts for business and technical tasks'",
    difficulty: "easy",
  },
  {
    id: "assoc-pte-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "scenario-multi-response",
    stem:
      "A marketing associate is writing a prompt asking Claude to draft a campaign brief for a new product launch. Which two additions would most improve the prompt's effectiveness? (Select 2)",
    options: [
      { id: "A", text: "Specify the target audience and the single key message the campaign should communicate." },
      { id: "B", text: "State the desired format and length (e.g., a one-page brief with named sections)." },
      { id: "C", text: "Ask Claude to make the brief 'creative and impactful' without further detail." },
      { id: "D", text: "Repeat the word 'important' several times throughout the prompt for emphasis." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Naming the audience/key message and the expected format are concrete constraints that shape a usable draft. A vague adjective like 'impactful' (C) or repeated emphasis words (D) don't give the model anything concrete to act on.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Create effective prompts for business and technical tasks'",
    difficulty: "medium",
  },
  {
    id: "assoc-pte-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A customer service rep asks Claude for 'a reply to this angry customer email' and pastes only the customer's message. The draft reply is reasonable but uses a formal tone that doesn't match the company's usual warm, casual style. What's missing from the prompt?",
    options: [
      { id: "A", text: "A word count limit." },
      { id: "B", text: "Guidance on the desired tone/style, ideally with a short example of how the company usually writes." },
      { id: "C", text: "A request to use more exclamation points." },
      { id: "D", text: "Nothing — tone can't be controlled through prompting." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Tone is controllable through prompting when the desired style is actually described or demonstrated with an example — the gap here is a missing tone specification, not an inherent limitation (D), and a word count (A) or emphasis punctuation (C) wouldn't fix a tone mismatch.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Create effective prompts for business and technical tasks'",
    difficulty: "easy",
  },
  {
    id: "assoc-pte-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A financial analyst asks Claude to 'turn this spreadsheet data into a summary for the board.' The result is a dense paragraph full of numbers that would take the board too long to parse. What best explains the gap, and what should change in the prompt?",
    options: [
      { id: "A", text: "The analyst should manually rewrite the output every time instead of adjusting the prompt." },
      {
        id: "B",
        text: "The prompt didn't specify the audience's needs (board members, time-constrained, decision-focused) or a format (e.g., 3-4 bullets highlighting risk and opportunity) — adding both would target the actual use case.",
      },
      { id: "C", text: "Claude cannot produce board-ready summaries from spreadsheet data under any circumstances." },
      { id: "D", text: "The spreadsheet itself needs to be simplified before Claude can help." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Specifying the audience and desired format turns a technically correct summary into a genuinely usable one for that audience. This is a prompting gap, not a capability limit (C) or a data problem (D), and manually rewriting each time (A) doesn't scale.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Create effective prompts for business and technical tasks'",
    difficulty: "hard",
  },
  {
    id: "assoc-pte-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A product manager asks Claude to 'write a spec for the new filtering feature.' The draft looks plausible but invents assumptions about how filtering should behave that don't match what the team actually discussed. What should the prompt have included to prevent this?",
    options: [
      { id: "A", text: "A request for a longer, more detailed document." },
      { id: "B", text: "The actual requirements and constraints the team agreed on, so Claude has real information to work from instead of filling gaps with plausible guesses." },
      { id: "C", text: "A request to add more diagrams." },
      { id: "D", text: "Nothing — specs always require some invented detail." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Without the real requirements, Claude fills the gap with plausible-sounding assumptions — supplying the actual agreed-on details is the fix, not length (A), visuals (C), or accepting invented content as unavoidable (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Create effective prompts for business and technical tasks'",
    difficulty: "medium",
  },
  {
    id: "assoc-pte-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A nonprofit program officer asks Claude, in one message, to 'research funders, draft a grant proposal, and write a budget justification.' The resulting output is shallow across all three parts. What would most improve the result?",
    options: [
      { id: "A", text: "Ask for all three parts again in the same single message, but request 'more detail' this time." },
      {
        id: "B",
        text: "Break the request into sequential steps — research funders first, review that output, then draft the proposal, then the budget — so each step builds on a verified prior step.",
      },
      { id: "C", text: "Drop the budget justification entirely since it's the least important part." },
      { id: "D", text: "Ask Claude to prioritize whichever part it thinks is most important." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A multi-part request with dependent steps benefits from sequential decomposition — each step's output can be checked before it feeds the next. Repeating the same all-at-once request (A) doesn't fix the structural problem, and dropping a needed part (C) or letting the model guess priority (D) doesn't address it either.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Apply task decomposition techniques to structure complex requests'",
    difficulty: "medium",
  },
  {
    id: "assoc-pte-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "An IT lead wants Claude's help planning a system migration involving inventory, risk assessment, a rollout plan, and a communication plan. What is the best way to structure this request?",
    options: [
      { id: "A", text: "Ask for the entire migration plan in a single prompt to save time." },
      {
        id: "B",
        text: "Work through it in stages — inventory first, then risk assessment based on that inventory, then rollout, then communications — reviewing each stage before moving to the next.",
      },
      { id: "C", text: "Skip the inventory step since it's the least exciting part of the plan." },
      { id: "D", text: "Ask Claude to write the communication plan first, since that's the most visible deliverable." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Each stage here genuinely depends on the one before it (you can't meaningfully assess risk before knowing the inventory), so sequential decomposition with review between stages produces a more grounded plan than asking for everything at once (A) or working out of dependency order (C, D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Apply task decomposition techniques to structure complex requests'",
    difficulty: "medium",
  },
  {
    id: "assoc-pte-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "scenario-multi-response",
    stem:
      "An event planner wants Claude's help organizing a conference: venue research, speaker outreach drafts, and a day-of run-of-show. Which two decomposition choices are most appropriate? (Select 2)",
    options: [
      { id: "A", text: "Complete venue research first, since speaker outreach content (dates, capacity) depends on the venue being settled." },
      { id: "B", text: "Draft the run-of-show before the venue is chosen, since scheduling doesn't depend on the venue." },
      { id: "C", text: "Review the venue research output before moving on to outreach drafts, to catch errors early." },
      { id: "D", text: "Ask for all three deliverables in one message to avoid multiple back-and-forth exchanges." },
    ],
    correctOptionIds: ["A", "C"],
    selectCount: 2,
    explanation:
      "Sequencing by real dependency (venue before outreach that references venue details) and reviewing each stage before proceeding (A, C) is sound decomposition. The run-of-show does depend on venue layout/capacity (B is wrong), and bundling dependent steps into one request (D) forfeits the chance to catch errors early.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Apply task decomposition techniques to structure complex requests'",
    difficulty: "medium",
  },
  {
    id: "assoc-pte-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A sales manager wants a single message to produce: a quarterly performance summary, a list of underperforming accounts, and coaching talking points for each rep. What is the risk of asking for all three in one prompt without any structure?",
    options: [
      { id: "A", text: "There is no risk; Claude handles multi-part requests identically regardless of structure." },
      { id: "B", text: "The output may treat all three parts with similar, shallow depth instead of the more careful analysis each part actually deserves." },
      { id: "C", text: "Claude will refuse the request outright." },
      { id: "D", text: "The output will always come back in the wrong order." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Bundling several substantial asks into one flat request tends to produce shallower treatment of each part than decomposing them; this isn't a refusal (C) or an ordering issue (D), and it's not risk-free (A).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Apply task decomposition techniques to structure complex requests'",
    difficulty: "easy",
  },
  {
    id: "assoc-pte-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A paralegal is reviewing 12 contracts for a specific clause as part of e-discovery. Which approach best applies task decomposition?",
    options: [
      { id: "A", text: "Paste all 12 contracts into one message and ask for a single combined analysis." },
      { id: "B", text: "Review each contract individually for the clause, then run a separate pass comparing findings across all 12 for patterns." },
      { id: "C", text: "Ask Claude to pick the 3 most important contracts and ignore the rest." },
      { id: "D", text: "Review the contracts in a random order with no structure." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Reviewing each document individually before a separate cross-document comparison pass avoids diluting attention across many documents in one shot; combining everything into one pass (A) risks shallow treatment, and skipping documents (C) or working with no structure (D) both undermine a thorough review.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Apply task decomposition techniques to structure complex requests'",
    difficulty: "hard",
  },
  {
    id: "assoc-pte-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A retail operations manager wants an inventory audit covering discrepancies, root causes, and corrective actions across 6 store locations. What is the best first step?",
    options: [
      { id: "A", text: "Ask for corrective actions first, before discrepancies or causes are identified." },
      { id: "B", text: "Identify and confirm the actual discrepancies per location first, since root causes and corrective actions should be grounded in real findings, not assumed ones." },
      { id: "C", text: "Write a generic corrective-action template that applies to all 6 locations regardless of their specific issues." },
      { id: "D", text: "Skip straight to a company-wide summary without location-level detail." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Decomposing this task in dependency order — real findings before causes, causes before fixes — keeps the later steps grounded in fact rather than guesswork; starting from actions (A), a generic template (C), or skipping location-level detail (D) all skip the necessary foundation.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Apply task decomposition techniques to structure complex requests'",
    difficulty: "medium",
  },
  {
    id: "assoc-pte-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A software team wants release notes covering 8 different modules that changed. What decomposition approach best avoids uneven or inconsistent coverage?",
    options: [
      { id: "A", text: "Ask for release notes for all 8 modules in a single request with no per-module structure." },
      { id: "B", text: "Draft notes for each module individually using a consistent template, then do one pass to ensure consistent tone and formatting across all of them." },
      { id: "C", text: "Only write notes for the 2 modules with the most changes." },
      { id: "D", text: "Write the notes in whatever order the modules happen to be mentioned." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A consistent per-module template plus a final consistency pass avoids the uneven depth that comes from a single flat request (A) covering 8 different modules at once, without skipping needed coverage (C) or leaving consistency to chance (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Apply task decomposition techniques to structure complex requests'",
    difficulty: "medium",
  },
  {
    id: "assoc-pte-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A content writer gets a blog draft back from Claude that's well-organized but too formal for the brand's casual voice. What is the most effective next step?",
    options: [
      { id: "A", text: "Discard the draft and start over with an entirely new prompt from scratch." },
      { id: "B", text: "Tell Claude specifically that the tone should be more casual, keeping the structure and content that already worked." },
      { id: "C", text: "Manually rewrite the entire draft without giving Claude any feedback." },
      { id: "D", text: "Accept the draft as-is since tone rarely matters for blog content." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Targeted feedback on the specific issue (tone) preserves the parts that already worked (structure, content) while fixing what didn't — starting over (A) discards useful work, manual rewriting without feedback (C) doesn't improve future prompts, and accepting a tone mismatch (D) ignores a real brand-fit problem.",
    difficulty: "easy",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Iterate prompts to improve output quality'",
  },
  {
    id: "assoc-pte-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "An associate notices that asking Claude for 'a short summary' produces wildly different lengths (2 sentences one time, a full paragraph another) across similar requests. What does this inconsistency most likely indicate?",
    options: [
      { id: "A", text: "Claude is malfunctioning and needs to be restarted." },
      { id: "B", text: "'Short' is ambiguous — specifying an actual constraint (e.g., '2-3 sentences') would produce more consistent results." },
      { id: "C", text: "Summaries cannot be controlled for length under any circumstances." },
      { id: "D", text: "The inconsistency is random and no prompt change would help." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Inconsistent results across similar requests are usually a sign of ambiguous instructions, not model malfunction (A) or a fundamental inability to control length (C, D) — replacing 'short' with a concrete constraint resolves the ambiguity.",
    difficulty: "medium",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Iterate prompts to improve output quality'",
  },
  {
    id: "assoc-pte-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A first draft of a client proposal from Claude is 90% usable but missing a pricing section entirely. What's the most efficient next step?",
    options: [
      { id: "A", text: "Ask Claude to add just the missing pricing section, referencing the existing draft, rather than regenerating the whole proposal." },
      { id: "B", text: "Regenerate the entire proposal from scratch in case something else is also wrong." },
      { id: "C", text: "Write the pricing section manually and leave the rest of the workflow unchanged for next time." },
      { id: "D", text: "Ask Claude to guess at pricing without providing any pricing information." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Targeted iteration — fixing the one specific gap while keeping the usable 90% — is more efficient than discarding good work (B). Manually patching without feeding it back (C) fixes this one instance but not the process, and asking Claude to invent pricing (D) risks a fabricated number reaching a client.",
    difficulty: "medium",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Iterate prompts to improve output quality'",
  },
  {
    id: "assoc-pte-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "scenario-multi-response",
    stem:
      "A manager rejects a Claude-drafted performance review as 'too vague' and 'too long.' Which two iteration approaches directly address this feedback? (Select 2)",
    options: [
      { id: "A", text: "Ask Claude to include specific, concrete examples of the employee's work instead of general statements." },
      { id: "B", text: "Ask Claude to tighten the draft to a specific target length." },
      { id: "C", text: "Ask Claude to use more sophisticated vocabulary throughout." },
      { id: "D", text: "Regenerate the review with a completely unrelated prompt about a different employee." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Vagueness and length are the two named complaints — asking for concrete examples (A) and a specific length target (B) directly address them. Vocabulary sophistication (C) doesn't address either complaint, and starting over with an unrelated prompt (D) abandons the feedback entirely.",
    difficulty: "medium",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Iterate prompts to improve output quality'",
  },
  {
    id: "assoc-pte-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A support team's canned-reply macro, drafted once by Claude months ago, now feels outdated as the product has changed. What is the most appropriate response?",
    options: [
      { id: "A", text: "Leave the macro as-is since it was correct when first written." },
      { id: "B", text: "Update the prompt/macro with current product details and iterate on it, since a one-time draft doesn't stay accurate as things change." },
      { id: "C", text: "Delete the macro entirely and have every reply written manually going forward." },
      { id: "D", text: "Ask customers to disregard any outdated details in the reply." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A prompt or template that was correct once can go stale as the underlying facts change, so it needs to be revisited and iterated — leaving it untouched (A) or asking customers to compensate for known inaccuracies (D) isn't appropriate, and abandoning automation entirely (C) is an overcorrection.",
    difficulty: "medium",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Iterate prompts to improve output quality'",
  },
  {
    id: "assoc-pte-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "An analyst asks Claude for a report, then in the same conversation gives two follow-up instructions that contradict each other ('make it more detailed' and later 'make it shorter') without clarifying which should take priority. What is the most likely result, and the best fix?",
    options: [
      { id: "A", text: "Claude will always correctly guess which instruction the analyst really meant." },
      { id: "B", text: "Claude may resolve the conflict arbitrarily; the analyst should clarify which instruction takes priority, or restate a single clear target instead of leaving both in effect." },
      { id: "C", text: "Contradictory instructions are automatically ignored and have no effect on the output." },
      { id: "D", text: "The only fix is to start an entirely new conversation." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Conflicting instructions across turns can be resolved inconsistently; the fix is clarifying priority or giving one clear consolidated instruction, not assuming perfect guessing (A), assuming conflicts are automatically ignored (C), or that a fresh conversation is the only option (D).",
    difficulty: "hard",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Iterate prompts to improve output quality'",
  },
  {
    id: "assoc-pte-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A teacher asks Claude for a lesson outline and gets back a solid structure but with one activity that doesn't fit the grade level. What is the best way to iterate?",
    options: [
      { id: "A", text: "Point out specifically that the one activity doesn't fit the grade level and ask for a replacement, keeping the rest of the outline." },
      { id: "B", text: "Ask for an entirely new outline on a different topic." },
      { id: "C", text: "Remove the activity manually and never mention the issue to Claude." },
      { id: "D", text: "Assume the whole outline is unreliable and abandon it." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Precise, targeted feedback on the one problem preserves the otherwise-solid structure; discarding the whole thing (B, D) wastes good work, and silently patching it without feeding back the correction (C) doesn't improve the next similar request.",
    difficulty: "easy",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Iterate prompts to improve output quality'",
  },
  {
    id: "assoc-pte-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A product team asks Claude to 'brainstorm names for the new feature' but the first response gives only one polished suggestion. What adjustment best fits a brainstorming task?",
    options: [
      { id: "A", text: "Ask explicitly for a wide range of options (e.g., 15-20 varied names) before narrowing down to favorites." },
      { id: "B", text: "Accept the single suggestion since brainstorming should produce one best answer." },
      { id: "C", text: "Ask Claude to make the one suggestion longer." },
      { id: "D", text: "Switch immediately to asking for a final decision instead of more options." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Brainstorming benefits from explicitly requesting breadth before narrowing — asking for 'the best' name up front (B, D) collapses the exploration too early, and lengthening one suggestion (C) doesn't produce more options.",
    difficulty: "easy",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Adapt prompting strategies based on task type'",
  },
  {
    id: "assoc-pte-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "An analyst asks Claude to 'research our top competitor' with no further scope. The resulting answer is broad and doesn't focus on what the analyst actually needs for an upcoming pricing decision. What should change about the prompt?",
    options: [
      { id: "A", text: "Nothing — broad research is always more valuable than focused research." },
      { id: "B", text: "Add explicit scope boundaries (e.g., focus specifically on the competitor's pricing tiers and recent price changes) to match the actual research goal." },
      { id: "C", text: "Ask for the research in a shorter format only." },
      { id: "D", text: "Ask Claude to research a different competitor instead." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Research tasks need explicit scope boundaries to stay focused on the actual goal; without them, the output stays broad and unfocused. Assuming broader is always better (A), just shortening the format (C), or changing subjects entirely (D) don't add the missing focus.",
    difficulty: "medium",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Adapt prompting strategies based on task type'",
  },
  {
    id: "assoc-pte-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A copywriter asks Claude to draft ad copy matching the brand's playful, pun-heavy style, but gives no examples of that style. The draft comes back generic. What adaptation fits a drafting task best here?",
    options: [
      { id: "A", text: "Provide one or two examples of the brand's actual past copy so Claude has a concrete style target to match." },
      { id: "B", text: "Ask for the copy to be 'more playful' with no further detail, repeated several times." },
      { id: "C", text: "Give up on matching brand voice and accept generic copy." },
      { id: "D", text: "Ask for a completely different type of content instead." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Drafting tasks that need to match a specific voice benefit from concrete examples to imitate, which is more effective than a vague adjective repeated without detail (B); accepting generic output (C) or changing the task entirely (D) doesn't solve the actual problem.",
    difficulty: "medium",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Adapt prompting strategies based on task type'",
  },
  {
    id: "assoc-pte-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "An operations analyst asks Claude to 'analyze why shipping delays increased last quarter' and gets a plausible-sounding narrative with no reference to the actual data provided. What adaptation is most appropriate for this analysis task?",
    options: [
      { id: "A", text: "Explicitly ask Claude to base its analysis on the specific data provided and show its reasoning/evidence for each claim." },
      { id: "B", text: "Ask for a shorter answer instead." },
      { id: "C", text: "Accept the narrative since it sounds reasonable." },
      { id: "D", text: "Switch to asking for a brainstorm of possible causes instead of an analysis." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Analysis tasks benefit from explicitly requiring the answer to be grounded in the actual provided evidence, with reasoning shown — a plausible-sounding but ungrounded narrative is a sign this wasn't requested. Shortening (B), accepting an ungrounded answer (C), or switching task type entirely (D) don't fix the grounding problem.",
    difficulty: "medium",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Adapt prompting strategies based on task type'",
  },
  {
    id: "assoc-pte-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "scenario-multi-response",
    stem:
      "Which two prompt adaptations correctly match the task type described? (Select 2)",
    options: [
      { id: "A", text: "For a brainstorming task, ask for a wide range of ideas before narrowing to a favorite." },
      { id: "B", text: "For a research task, leave the scope completely open so nothing is missed." },
      { id: "C", text: "For an analysis task, ask the model to show its reasoning and cite specific evidence." },
      { id: "D", text: "For a drafting task, give no tone or format guidance so the model has full creative freedom." },
    ],
    correctOptionIds: ["A", "C"],
    selectCount: 2,
    explanation:
      "Breadth-before-narrowing suits brainstorming (A), and requiring shown reasoning/evidence suits analysis (C). Leaving research scope completely open (B) tends to produce unfocused results, and withholding tone/format guidance for drafting (D) tends to produce generic output rather than useful creative freedom.",
    difficulty: "medium",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Adapt prompting strategies based on task type'",
  },
  {
    id: "assoc-pte-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A consultant needs Claude to both research a market and then draft a client-facing summary of the findings. What is the best sequencing given the two different task types involved?",
    options: [
      { id: "A", text: "Ask for the polished client draft first, then do the research afterward to check it." },
      { id: "B", text: "Do the scoped research first, review the findings, then draft the client summary based on the verified research." },
      { id: "C", text: "Do both in a single combined prompt with no sequencing." },
      { id: "D", text: "Skip the research step, since drafting doesn't require it." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Research and drafting are different task types with a natural dependency here — the draft should be grounded in verified research, so research-then-draft in sequence, with a review step, produces a more reliable result than reversing the order (A), skipping research (D), or combining both into one undifferentiated request (C).",
    difficulty: "medium",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Adapt prompting strategies based on task type'",
  },
  {
    id: "assoc-pte-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A team lead asks Claude to brainstorm process improvements, then immediately asks it to 'just pick the best one and write the implementation plan' in the same message. What risk does combining these two task types into one request introduce?",
    options: [
      { id: "A", text: "No risk — brainstorming and implementation planning always work equally well combined." },
      { id: "B", text: "The brainstorm may get collapsed too early into one option before a genuinely wide range of ideas was considered, undermining the value of brainstorming first." },
      { id: "C", text: "Claude will refuse to do either task." },
      { id: "D", text: "The implementation plan will always be technically incorrect." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Asking for premature narrowing within the same request as the brainstorm undercuts the point of brainstorming (generating breadth before judging) — this isn't refusal (C) or a guarantee of technical incorrectness (D), and it isn't risk-free (A).",
    difficulty: "medium",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 1 — 'Adapt prompting strategies based on task type'",
  },
];
