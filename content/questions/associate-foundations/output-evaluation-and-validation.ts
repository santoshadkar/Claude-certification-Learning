import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "assoc-oev-001",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Evaluate Claude-generated outputs for accuracy and completeness",
    type: "mcq",
    stem:
      "Claude summarizes a 40-page vendor contract into five bullet points highlighting the key terms. All five bullets are factually correct, but the summary omits an auto-renewal clause that requires 90 days' notice to cancel. What best describes this output?",
    options: [
      { id: "A", text: "The output is accurate but incomplete, and the missing auto-renewal clause could have real consequences if not caught." },
      { id: "B", text: "The output is a hallucination since it left out contract terms." },
      { id: "C", text: "The output is fully reliable since every stated bullet is accurate." },
      { id: "D", text: "The output should be discarded entirely and redone from scratch." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Accuracy and completeness are independent: an output can be 100% accurate in what it states while still missing something materially important. The missing clause should be flagged, not just accepted (C). It isn't a hallucination — that term refers to fabricated content, not omitted content (B) — and one gap doesn't mean the whole summary is worthless (D).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Evaluate Claude-generated outputs for accuracy and completeness'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-002",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Identify hallucinations, inconsistencies, and biases in responses",
    type: "mcq",
    stem:
      "Claude drafts a market-research summary that includes the sentence: 'According to a 2024 McKinsey study, 73% of enterprises have adopted generative AI in at least one business function.' No such source was provided to Claude, and the associate cannot immediately recall seeing this figure elsewhere. What is the most likely explanation and correct next step?",
    options: [
      { id: "A", text: "Ask Claude to regenerate the paragraph with a different statistic that sounds more conservative." },
      { id: "B", text: "The statistic is almost certainly accurate, since Claude wouldn't cite a specific source and number without evidence." },
      { id: "C", text: "Reword the sentence to remove the citation but keep the 73% figure, since the number itself is probably fine." },
      { id: "D", text: "This is a likely hallucination — a specific-sounding statistic and citation with no traceable source — and it should be verified against the actual study before being used anywhere." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Specific numbers and citations are exactly the kind of confident, specific-sounding detail models can fabricate. Treating fluent confidence as evidence (B) is the core hallucination trap. Removing the citation while keeping the number (C) doesn't fix the underlying accuracy problem, and substituting an equally unverified number (A) doesn't solve anything either.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Identify hallucinations, inconsistencies, and biases in responses'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-003",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Apply fact-checking and validation techniques",
    type: "scenario-multi-response",
    stem:
      "An associate is preparing a Claude-drafted press release announcing a new product launch date and a specific performance benchmark ('40% faster than the previous generation'). Which two actions reflect appropriate fact-checking before publication? (Select 2)",
    options: [
      { id: "A", text: "Ask Claude how confident it is in the 40% figure and publish if the stated confidence is high." },
      { id: "B", text: "Publish immediately, since press releases are routinely revised after the fact." },
      { id: "C", text: "Confirm the launch date against the internal project plan or calendar of record." },
      { id: "D", text: "Verify the 40% performance figure against the actual benchmark test results." },
    ],
    correctOptionIds: ["C","D"],
    selectCount: 2,
    explanation:
      "Verifying checkable claims (a date, a benchmark figure) against authoritative sources is the actual fact-checking step. Self-reported confidence (A) isn't a reliable accuracy signal, and publishing unverified external material on the assumption it can be fixed later (B) skips validation entirely.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Apply fact-checking and validation techniques'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-004",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Determine when human review or additional verification is required",
    type: "mcq",
    stem:
      "Claude drafts a response to a job candidate rejecting their application, including a specific reason: 'unfortunately your visa sponsorship requirements do not align with our current hiring budget.' Before this is sent, what is the most important consideration?",
    options: [
      { id: "A", text: "Send it as-is, since Claude phrased it professionally." },
      { id: "B", text: "This reason touches employment and immigration-related decisions, which likely require HR/legal review before being put in writing to a candidate, given the legal risk involved." },
      { id: "C", text: "Shorten the message so it takes less time to review." },
      { id: "D", text: "Ask Claude to make the rejection reason vaguer so it's harder to challenge." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "This is exactly the kind of legally sensitive, employment-related statement that requires expert review before external use. Professional tone (A) doesn't address legal risk, shortening the message (C) doesn't address the underlying issue, and deliberately vague wording to avoid accountability (D) creates a separate problem.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Determine when human review or additional verification is required'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-005",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Edit, adapt, refine, and compare outputs for the intended audience",
    type: "mcq",
    stem:
      "The same technical incident summary needs to go to (1) the engineering team and (2) company executives. What is the best approach?",
    options: [
      { id: "A", text: "Only write the executive version, since engineers can infer technical detail from context." },
      { id: "B", text: "Send the identical technical write-up to both audiences to ensure consistency." },
      { id: "C", text: "Ask Claude to produce two versions: a detailed technical version for engineering, and a brief, decision-focused version for executives." },
      { id: "D", text: "Only write the technical version, since executives can ask follow-up questions if confused." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Adapting content for the audience — detail level, framing — without changing the underlying facts is the skill being tested. Sending one version to both audiences (B) serves neither well, and skipping either audience's needs (A, D) leaves a real gap.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Edit, adapt, refine, and compare outputs for the intended audience'",
    difficulty: "easy",
  },
  {
    id: "assoc-oev-006",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Organize and curate information and select appropriate output formats (artifacts, inline, structured data)",
    type: "mcq",
    stem:
      "An associate asks Claude to generate a 15-row table of product SKUs, prices, and stock counts that will be imported directly into inventory software. Which output format is most appropriate?",
    options: [
      { id: "A", text: "An artifact containing structured data (e.g., a table or CSV) that can be reviewed and exported cleanly." },
      { id: "B", text: "A bulleted list formatted for a slide presentation." },
      { id: "C", text: "Plain inline chat text with the values separated by commas in a single line." },
      { id: "D", text: "A conversational paragraph describing the products." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Data meant for reuse by another system belongs in a structured, artifact-based format that's easy to review and export. Prose (D), presentation formatting (B), and unstructured inline text (C) are all harder to reliably parse into the target system.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Organize and curate information and select appropriate output formats'",
    difficulty: "easy",
  },
  {
    id: "assoc-oev-007",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Evaluate Claude-generated outputs for accuracy and completeness",
    type: "mcq",
    stem:
      "Claude drafts a marketing performance report stating 'sales grew 22% this quarter,' which is accurate, but omits that the growth was driven almost entirely by a one-time seasonal promotion that won't repeat. A reader using this report to project next quarter would be misled. What does this illustrate?",
    options: [
      { id: "A", text: "The report is unusable and should be entirely discarded." },
      { id: "B", text: "22% growth figures are always suspicious and should be assumed wrong." },
      { id: "C", text: "The report should be shortened further to reduce the chance of errors." },
      { id: "D", text: "An accurate statement can still be incomplete in a way that leads to a wrong conclusion if important context is missing." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A true statement can still mislead if it omits context needed to interpret it correctly — this is the completeness half of evaluation, distinct from accuracy. Discarding the whole report (A), assuming the number itself is wrong (B), or just shortening further (C) all miss the actual issue.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Evaluate Claude-generated outputs for accuracy and completeness'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-008",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Evaluate Claude-generated outputs for accuracy and completeness",
    type: "mcq",
    stem:
      "Claude generates meeting notes listing every decision made in a planning meeting, correctly, but without noting who owns each follow-up action. What should the associate do before circulating the notes?",
    options: [
      { id: "A", text: "Circulate the notes as-is, since every decision listed is accurate." },
      { id: "B", text: "Add the missing owner for each action item before circulating, since notes without ownership are less actionable even if the decisions themselves are correctly captured." },
      { id: "C", text: "Ask Claude to rewrite the notes in a more formal tone instead." },
      { id: "D", text: "Delete the decisions that don't have a clear owner." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Accuracy about what was decided doesn't guarantee completeness about what's needed to act on it — missing ownership is a real gap worth fixing before circulation. Accepting as-is (A), deleting content (D), or a tone change (C) don't address the missing information.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Evaluate Claude-generated outputs for accuracy and completeness'",
    difficulty: "easy",
  },
  {
    id: "assoc-oev-009",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Evaluate Claude-generated outputs for accuracy and completeness",
    type: "mcq",
    stem:
      "A financial forecast drafted by Claude correctly cites all historical figures provided, but never states the assumptions behind its projected growth rate (e.g., market conditions, planned investments). A board member asks 'what happens if these assumptions don't hold?' and no one can answer from the document. What was missing?",
    options: [
      { id: "A", text: "Nothing was missing, since all historical figures were accurate." },
      { id: "B", text: "A longer executive summary." },
      { id: "C", text: "An explicit statement of the assumptions underlying the projection, which is necessary for the document to actually support a decision." },
      { id: "D", text: "More historical data points." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A forecast is incomplete for decision-making purposes if its underlying assumptions aren't stated, even when every historical figure it cites is accurate. More historical data (D) or a longer summary (B) don't address the missing assumptions, and accuracy of citations (A) isn't the same as completeness for the document's purpose.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Evaluate Claude-generated outputs for accuracy and completeness'",
    difficulty: "hard",
  },
  {
    id: "assoc-oev-010",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Evaluate Claude-generated outputs for accuracy and completeness",
    type: "scenario-multi-response",
    stem:
      "Claude generates a product comparison table with accurate feature checkmarks for three competitors, but the original request also asked for a pricing column, which is missing. Which two actions are appropriate? (Select 2)",
    options: [
      { id: "A", text: "Compare the output against the original request's full scope to confirm the pricing column was actually asked for and is missing." },
      { id: "B", text: "Ask Claude to add the missing pricing column rather than treating the feature comparison as the complete deliverable." },
      { id: "C", text: "Publish the table as-is, since the feature information it does contain is accurate." },
      { id: "D", text: "Discard the entire table and start the comparison over from scratch." },
    ],
    correctOptionIds: ["A","B"],
    selectCount: 2,
    explanation:
      "Checking completeness means comparing the output against the original request's full scope (A), and the fix for a specific gap is a targeted addition (B), not publishing an incomplete deliverable (C) or discarding otherwise-good, accurate work (D).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Evaluate Claude-generated outputs for accuracy and completeness'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-011",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Identify hallucinations, inconsistencies, and biases in responses",
    type: "mcq",
    stem:
      "A legal associate reviewing a Claude-drafted memo notices it cites 'Smith v. Halloway Corp (2019)' to support a point, but a search turns up no such case. What is the most likely explanation?",
    options: [
      { id: "A", text: "This is a likely hallucination — a fabricated, specific-sounding case citation — and the memo's legal claims should not be used until this is resolved." },
      { id: "B", text: "The memo should be used as-is since the surrounding legal reasoning is probably still sound." },
      { id: "C", text: "The case exists but is simply hard to find with a basic search." },
      { id: "D", text: "Case names are always paraphrased by Claude, so this is expected and fine." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A specific, unverifiable citation is a classic hallucination pattern and must be resolved before the memo is relied on — assuming it's just hard to find (C), that fabricated names are normal and acceptable (D), or that the rest is fine regardless (B) all understate the risk.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Identify hallucinations, inconsistencies, and biases in responses'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-012",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Identify hallucinations, inconsistencies, and biases in responses",
    type: "mcq",
    stem:
      "In a Claude-drafted budget summary, the total in the executive summary section reads $1.2M, but the itemized breakdown further down adds up to $1.35M. What should the associate do?",
    options: [
      { id: "A", text: "Pick whichever number sounds more reasonable and use that going forward." },
      { id: "B", text: "Average the two numbers together." },
      { id: "C", text: "Ignore the discrepancy since both numbers are in the same document." },
      { id: "D", text: "Flag the inconsistency and reconcile the two figures against the actual source data before using either number." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "An internal inconsistency (the same fact stated differently in two places) should be reconciled against the actual source data, not resolved by guessing (A), averaging (B), or ignoring it (C) — all of which could leave a wrong number in circulation.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Identify hallucinations, inconsistencies, and biases in responses'",
    difficulty: "easy",
  },
  {
    id: "assoc-oev-013",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Identify hallucinations, inconsistencies, and biases in responses",
    type: "mcq",
    stem:
      "A hiring team uses Claude to screen resumes and notices candidates from a small set of universities are consistently ranked higher, even when their described experience is comparable to other candidates. What is the most likely concern?",
    options: [
      { id: "A", text: "The issue is not correctable and resume screening should be abandoned entirely." },
      { id: "B", text: "This may reflect a bias where university name acts as a proxy for factors unrelated to actual job-relevant experience, and the screening criteria should be reviewed and adjusted." },
      { id: "C", text: "No concern — university prestige is a valid, objective measure of candidate quality." },
      { id: "D", text: "Switching to a faster model will resolve the pattern." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A pattern that favors one group without a job-relevant justification is a bias concern worth investigating and correcting, not treating as an objective, valid signal (C). It's a fixable process issue, not a reason to abandon the tool (A), and model speed (D) is unrelated to bias in ranking criteria.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Identify hallucinations, inconsistencies, and biases in responses'",
    difficulty: "hard",
  },
  {
    id: "assoc-oev-014",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Identify hallucinations, inconsistencies, and biases in responses",
    type: "scenario-multi-response",
    stem:
      "A customer-sentiment report drafted by Claude includes the line: 'One customer wrote, \"this is the worst support experience of my life.\"' The associate cannot find this exact quote anywhere in the source feedback data provided. Which two responses are appropriate? (Select 2)",
    options: [
      { id: "A", text: "Search the actual source feedback data to confirm whether any comment closely matches this sentiment before keeping a similar claim in the report." },
      { id: "B", text: "Keep the quote as written, since it plausibly reflects the general sentiment even if not a real quote." },
      { id: "C", text: "Treat the quote as a likely fabrication and remove or verify it against the actual source data before the report is used." },
      { id: "D", text: "Attribute the quote to a specific real customer at random so it appears sourced." },
    ],
    correctOptionIds: ["A","C"],
    selectCount: 2,
    explanation:
      "An unverifiable direct quote should be treated as a likely fabrication (C) and checked against the real data (A) before it's used. Keeping a fabricated quote because it 'feels' representative (B) or inventing a false attribution (D) both introduce inaccurate content presented as fact.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Identify hallucinations, inconsistencies, and biases in responses'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-015",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Apply fact-checking and validation techniques",
    type: "mcq",
    stem:
      "An investor update drafted by Claude states 'revenue grew 31% year over year.' Before this goes to investors, what is the correct validation step?",
    options: [
      { id: "A", text: "Round the number to 30% to be safe." },
      { id: "B", text: "Send the update and correct it later if anyone questions the figure." },
      { id: "C", text: "Verify the 31% figure directly against the actual financial statements before it's sent to investors." },
      { id: "D", text: "Ask Claude to double-check its own number and trust the answer if it reaffirms 31%." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A financial figure going to investors must be verified against the authoritative source (actual financials) — asking the model to self-confirm (D) isn't real verification, rounding (A) doesn't address whether the number is right in the first place, and sending first and correcting later (B) is backwards for investor-facing material.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Apply fact-checking and validation techniques'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-016",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Apply fact-checking and validation techniques",
    type: "mcq",
    stem:
      "An HR policy document drafted by Claude references 'Section 12.4 of the updated labor code' to justify a new leave policy. What should happen before this document is published internally?",
    options: [
      { id: "A", text: "Check the actual labor code text to confirm Section 12.4 says what the document claims before publishing." },
      { id: "B", text: "Remove the section reference entirely and keep the rest of the claim unchanged." },
      { id: "C", text: "Ask Claude for a different section number instead." },
      { id: "D", text: "Publish it, since HR policy language is usually written this way." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A specific legal/regulatory citation should be checked against the actual source text before it's published as the basis for a policy — familiarity with the style of the language (D) isn't verification, and removing (B) or swapping (C) the citation without checking doesn't confirm whether the underlying claim is even correct.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Apply fact-checking and validation techniques'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-017",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Apply fact-checking and validation techniques",
    type: "mcq",
    stem:
      "A conference organizer asks Claude to draft a speaker's bio, which states the speaker 'holds a PhD in Computer Science from Stanford.' The organizer isn't sure this is correct. What should happen before the bio is published in the event program?",
    options: [
      { id: "A", text: "Remove all mention of education to avoid the issue entirely." },
      { id: "B", text: "Publish it, since Claude wrote it in a confident, professional tone." },
      { id: "C", text: "Assume it's correct since it's a minor detail." },
      { id: "D", text: "Confirm the credential directly with the speaker or their official bio before publishing, since an incorrect credential claim is easily checkable and embarrassing if wrong." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A specific, checkable credential claim should be confirmed with an authoritative source (the speaker or their official bio) before publication — confident tone (B) isn't evidence, and removing the detail (A) or assuming it's fine because it seems minor (C) don't resolve whether the claim was accurate.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Apply fact-checking and validation techniques'",
    difficulty: "easy",
  },
  {
    id: "assoc-oev-018",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Apply fact-checking and validation techniques",
    type: "scenario-multi-response",
    stem:
      "A wellness newsletter draft from Claude includes the claim: 'studies show drinking green tea reduces stress hormones by 40%.' Which two actions reflect appropriate validation before publishing? (Select 2)",
    options: [
      { id: "A", text: "If no specific study can be found or verified, soften or remove the specific statistic rather than publishing an unverified number." },
      { id: "B", text: "Publish the claim as-is, since it sounds scientifically plausible." },
      { id: "C", text: "Change the number to a rounder figure like 50% to make it sound more polished." },
      { id: "D", text: "Locate and check the actual study being referenced, if one exists, to confirm the 40% figure and its context." },
    ],
    correctOptionIds: ["A","D"],
    selectCount: 2,
    explanation:
      "Checking the actual source (D) and removing an unverifiable specific claim rather than publishing it anyway (A) are the correct validation steps. Plausibility isn't verification (B), and altering an unverified number cosmetically (C) doesn't make it accurate.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Apply fact-checking and validation techniques'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-019",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Determine when human review or additional verification is required",
    type: "mcq",
    stem:
      "An internal wellness newsletter draft includes specific health advice ('this stretch routine can help prevent lower back injury') generated by Claude for a general employee audience. What is the most appropriate step before distribution?",
    options: [
      { id: "A", text: "Remove all specifics and just say 'stretch regularly' to avoid any review." },
      { id: "B", text: "Have someone with relevant expertise (e.g., HR wellness lead or a medical/fitness professional) review health-adjacent advice before it goes to employees, given the liability and accuracy stakes." },
      { id: "C", text: "Ask Claude to add a disclaimer and skip any human review." },
      { id: "D", text: "Distribute it immediately since it's just an internal newsletter." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Health-adjacent advice reaching many employees carries real accuracy and liability stakes and warrants review by someone qualified, even for 'just' an internal newsletter (D). Stripping content to avoid review (A) or substituting a disclaimer for actual review (C) don't address the underlying need for expert sign-off.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Determine when human review or additional verification is required'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-020",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Determine when human review or additional verification is required",
    type: "mcq",
    stem:
      "After a data-handling incident, Claude drafts a public apology statement for the company to release. What level of review does this warrant before publication?",
    options: [
      { id: "A", text: "No review is needed if the statement sounds sincere." },
      { id: "B", text: "None — a quick read-through by the drafting associate is sufficient." },
      { id: "C", text: "Legal and communications review before release, given the public, high-stakes nature of a statement about a data incident." },
      { id: "D", text: "Only a grammar check, since the content itself is straightforward." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A public statement addressing a data incident carries legal and reputational stakes that call for legal/communications review, not just a quick pass (B), a grammar check (D), or judging it by tone alone (A).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Determine when human review or additional verification is required'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-021",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Determine when human review or additional verification is required",
    type: "mcq",
    stem:
      "Claude drafts a short internal summary of a routine weekly team status meeting, with no sensitive, financial, or external-facing content. What level of review is appropriate before it's shared with the team?",
    options: [
      { id: "A", text: "A normal proofread for clarity and accuracy against what was actually discussed is enough; this doesn't need legal, compliance, or executive review." },
      { id: "B", text: "It should be escalated to executive leadership before being shared with the team." },
      { id: "C", text: "It requires the same legal and compliance review as an external press release." },
      { id: "D", text: "It should not be shared until a formal risk assessment is completed." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Recognizing when heavy review is *not* required is as much a part of this skill as knowing when it is — a routine, low-stakes internal summary just needs a normal accuracy check, not the escalation appropriate for high-stakes external content (C, B, D).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Determine when human review or additional verification is required'",
    difficulty: "easy",
  },
  {
    id: "assoc-oev-022",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Determine when human review or additional verification is required",
    type: "scenario-multi-response",
    stem:
      "Claude drafts a severance offer letter for a departing employee, including a specific severance amount and a release-of-claims clause. Which two considerations correctly indicate this needs human review before it's sent? (Select 2)",
    options: [
      { id: "A", text: "It's addressed to a single named individual rather than a general audience." },
      { id: "B", text: "It includes legally significant terms (a release of claims) that carry real legal consequences for both parties." },
      { id: "C", text: "It was drafted quickly, which is reason enough on its own regardless of content." },
      { id: "D", text: "It involves a specific financial figure tied to an individual employee's termination, which HR/legal should confirm against policy and any negotiated terms." },
    ],
    correctOptionIds: ["B","D"],
    selectCount: 2,
    explanation:
      "The legally binding release-of-claims language (B) and the specific financial terms tied to an individual's termination (D) are exactly the kind of stakes that call for HR/legal review. Draft speed alone (C) isn't the relevant signal, and being addressed to one named person (A) isn't inherently high-risk by itself.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Determine when human review or additional verification is required'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-023",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Edit, adapt, refine, and compare outputs for the intended audience",
    type: "mcq",
    stem:
      "A software update needs to be described both in internal engineering release notes and in a customer-facing changelog. What is the best approach?",
    options: [
      { id: "A", text: "Only publish the customer-facing version and skip internal notes entirely." },
      { id: "B", text: "Use the same technical release notes for both audiences to save time." },
      { id: "C", text: "Only write the internal engineering notes, since customers rarely read changelogs." },
      { id: "D", text: "Write the engineering notes with implementation detail, and a separate customer-facing version focused on what changed for the user, in plain language." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "The two audiences need different levels of technical detail and framing — engineers need implementation specifics, customers need plain-language impact. Using one version for both (B) serves neither well, and skipping either audience (A, C) leaves a real gap.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Edit, adapt, refine, and compare outputs for the intended audience'",
    difficulty: "easy",
  },
  {
    id: "assoc-oev-024",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Edit, adapt, refine, and compare outputs for the intended audience",
    type: "mcq",
    stem:
      "A research finding needs to be shared with (1) a peer-review scientific audience and (2) a general-public blog readership. What adaptation is most appropriate?",
    options: [
      { id: "A", text: "Only write the public blog version, since scientific readers can look up the original data themselves." },
      { id: "B", text: "Write a detailed, methodology-focused version for the scientific audience, and a separate plain-language version emphasizing practical implications for the public blog." },
      { id: "C", text: "Write one version with full statistical methodology and jargon, and use it unchanged for both audiences." },
      { id: "D", text: "Simplify the finding so much for both audiences that key nuance is lost even for the scientific readers." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Each audience needs a different framing without changing the underlying facts — full methodology for peer scientists, plain-language practical takeaways for the public. Reusing one jargon-heavy version everywhere (C) fails the public audience, skipping the scientific version (A) fails that audience, and over-simplifying for everyone (D) loses needed nuance for experts.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Edit, adapt, refine, and compare outputs for the intended audience'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-025",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Edit, adapt, refine, and compare outputs for the intended audience",
    type: "scenario-multi-response",
    stem:
      "A new expense-reporting policy needs to be explained to (1) frontline staff who will use it day-to-day and (2) senior leadership approving the rollout. Which two adaptations are appropriate? (Select 2)",
    options: [
      { id: "A", text: "Use the exact same document for both audiences to ensure the message is identical." },
      { id: "B", text: "For senior leadership, focus on the rationale, expected impact, and rollout timeline rather than step-by-step submission instructions." },
      { id: "C", text: "For frontline staff, focus on clear step-by-step instructions for how to submit expenses under the new policy." },
      { id: "D", text: "For frontline staff, lead with the budget-impact analysis before any instructions." },
    ],
    correctOptionIds: ["B","C"],
    selectCount: 2,
    explanation:
      "Frontline staff need actionable how-to guidance (C), while leadership needs rationale and impact framing (B) — these are genuinely different needs from the same underlying policy change. Using one identical document for both (A) serves neither well, and leading staff instructions with a budget analysis instead of the steps they actually need (D) misses their real need.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Edit, adapt, refine, and compare outputs for the intended audience'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-026",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Organize and curate information and select appropriate output formats (artifacts, inline, structured data)",
    type: "mcq",
    stem:
      "An associate asks Claude to write a comprehensive onboarding guide that new hires will reference repeatedly over their first month. What is the most appropriate output format?",
    options: [
      { id: "A", text: "A single inline chat response that isn't saved anywhere else." },
      { id: "B", text: "A spoken summary with no written record." },
      { id: "C", text: "An artifact — a standalone document new hires can return to, that can be easily edited and updated as the process changes." },
      { id: "D", text: "A series of short, disconnected chat messages." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Long-form, reusable reference content is exactly what an artifact is for — standalone, easy to revisit and edit. An inline-only response (A), fragmented messages (D), or no written record at all (B) all make repeated reference harder than it needs to be.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Organize and curate information and select appropriate output formats'",
    difficulty: "easy",
  },
  {
    id: "assoc-oev-027",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Organize and curate information and select appropriate output formats (artifacts, inline, structured data)",
    type: "mcq",
    stem:
      "An associate asks Claude a quick one-off clarifying question in the middle of a conversation ('does this clause apply to part-time staff?'). What is the most appropriate output format for the answer?",
    options: [
      { id: "A", text: "A short inline reply within the conversation, since this is a quick, conversational question rather than reusable standalone content." },
      { id: "B", text: "A formal slide deck." },
      { id: "C", text: "A structured JSON object." },
      { id: "D", text: "A new artifact document created specifically for this one short answer." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A short conversational answer belongs inline — creating an artifact (D), structured data (C), or a slide deck (B) for a quick one-off question is unnecessary overhead that doesn't match the nature of the request.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Organize and curate information and select appropriate output formats'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-028",
    certificationSlug: "associate-foundations",
    domain: "Output Evaluation and Validation",
    taskStatement: "Organize and curate information and select appropriate output formats (artifacts, inline, structured data)",
    type: "scenario-multi-response",
    stem:
      "An associate needs Claude to produce data that a script will read and process automatically. Which two format choices are appropriate for this situation? (Select 2)",
    options: [
      { id: "A", text: "A single run-on sentence listing all values separated by commas with no clear structure." },
      { id: "B", text: "A conversational paragraph describing the data in prose." },
      { id: "C", text: "Structured JSON with clearly named fields matching what the script expects." },
      { id: "D", text: "A well-formed table with consistent columns that can be exported to CSV." },
    ],
    correctOptionIds: ["C","D"],
    selectCount: 2,
    explanation:
      "Data meant for automated consumption needs a genuinely structured format — JSON with named fields (C) or a clean, exportable table (D) — rather than prose (B) or an unstructured run-on list (A), both of which are hard for a script to parse reliably.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Organize and curate information and select appropriate output formats'",
    difficulty: "medium",
  },
];
