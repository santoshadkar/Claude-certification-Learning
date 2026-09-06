import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "assoc-grr-001",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Identify appropriate and inappropriate use cases",
    type: "mcq",
    stem:
      "A marketing associate wants Claude to draft social media posts previewing next quarter's earnings figures before the company's official public announcement. What is the most appropriate action?",
    options: [
      { id: "A", text: "Decline to draft the posts and flag the request to compliance, since previewing unreleased earnings data raises insider-information and disclosure risks." },
      { id: "B", text: "Draft the posts using only publicly available figures from last quarter instead." },
      { id: "C", text: "Proceed, since Claude is only drafting text and not publishing it directly." },
      { id: "D", text: "Draft the posts but ask Claude to add a disclaimer that the figures are unconfirmed." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Previewing unreleased earnings data outside official disclosure channels is a governance and regulatory red flag regardless of who or what drafts the text. The associate should recognize this as an inappropriate use case and escalate to compliance before any drafting occurs, rather than proceeding, adding a disclaimer, or quietly substituting old data without addressing the underlying request.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 (Governance, Risk, and Responsible Use) — 'Identify appropriate and inappropriate use cases'",
    difficulty: "easy",
  },
  {
    id: "assoc-grr-002",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Apply data sensitivity, regulatory, and privacy considerations",
    type: "mcq",
    stem:
      "An HR professional wants to use Claude to analyze employee performance review text for common themes. The review documents contain employee names, salaries, and medical leave notes. Organizational policy prohibits sharing regulated personal data with third-party AI tools outside approved data-processing agreements. What should the HR professional do first?",
    options: [
      { id: "A", text: "Proceed with the upload and instruct Claude not to repeat any personal details in its output." },
      { id: "B", text: "Upload the reviews as-is since the analysis is for internal HR purposes only." },
      { id: "C", text: "Summarize the reviews manually first, then upload only the summary without checking policy." },
      { id: "D", text: "Remove or anonymize names, salaries, and medical information before uploading, or confirm the tool is covered under an approved data-processing agreement." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Salary and medical-leave data are sensitive, regulated categories. Before uploading, the professional must either de-identify the data or confirm the workflow is covered by an approved data-processing agreement, consistent with organizational policy. Uploading as-is (B) or trusting the model not to repeat details (A) does not satisfy a data-sensitivity control, and skipping the policy check by paraphrasing first (C) still exposes the underlying regulated data during processing.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Apply data sensitivity, regulatory, and privacy considerations'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-003",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Follow organizational AI policies and governance standards",
    type: "scenario-multi-response",
    stem:
      "Your organization's AI governance policy requires that any Claude-generated content used in external client deliverables be reviewed by a human before sending, and that any use of customer data be logged for audit purposes. Which of the following actions comply with this policy? (Select 2)",
    options: [
      { id: "A", text: "Having a colleague review a Claude-drafted client proposal before it is sent." },
      { id: "B", text: "Sending a Claude-drafted client proposal directly to the client without review, because the proposal looked well-written." },
      { id: "C", text: "Logging that customer transaction data was pasted into a Claude conversation to generate a trend summary." },
      { id: "D", text: "Deleting the record of which customer data was used in a Claude conversation once the summary is generated." },
    ],
    correctOptionIds: ["A","C"],
    selectCount: 2,
    explanation:
      "Policy compliance requires both human review before external delivery (A) and audit logging of customer-data use (C). Sending without review (B) skips the required human check, and deleting the usage record (D) defeats the audit-logging requirement.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Follow organizational AI policies and governance standards'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-004",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Understand the ethical implications of AI usage",
    type: "mcq",
    stem:
      "A hiring manager asks Claude to shortlist resumes for a role by matching them against a job description. The manager notices Claude's shortlist consistently excludes candidates from a particular neighborhood mentioned in their addresses, even though that neighborhood has no bearing on the job requirements. What is the most likely concern, and what should the hiring manager do?",
    options: [
      { id: "A", text: "This is expected model behavior and no action is needed, since Claude does not have direct access to protected characteristics." },
      { id: "B", text: "This may reflect a proxy bias where a neutral-looking field (address/neighborhood) correlates with a protected characteristic; the manager should review the shortlist criteria, remove irrelevant demographic proxies from the inputs, and have a human validate the results." },
      { id: "C", text: "The manager should switch to a smaller, faster model to reduce processing time, which will resolve the pattern." },
      { id: "D", text: "The manager should ask Claude to explain its reasoning and accept the shortlist if the explanation sounds reasonable." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Neighborhood and address data can act as a proxy for protected characteristics such as race or socioeconomic status, even without an explicit demographic field. Recognizing and mitigating proxy bias, removing irrelevant fields from the input, and requiring human validation reflects the ethical-use expectation in the blueprint. Assuming no bias exists (A), changing model size (C), or trusting a plausible-sounding self-explanation as proof of fairness (D) does not address the underlying fairness concern.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Understand the ethical implications of AI usage'",
    difficulty: "hard",
  },
  {
    id: "assoc-grr-005",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Identify appropriate and inappropriate use cases",
    type: "mcq",
    stem:
      "A customer support representative uses Claude to draft responses to customer complaints. One complaint alleges that the company's product caused a safety injury and threatens legal action. What is the most appropriate way to use Claude in this situation?",
    options: [
      { id: "A", text: "Have Claude draft a full response including an admission of fault so the customer feels heard, then send it immediately." },
      { id: "B", text: "Ask Claude to determine whether the company is legally liable and include that determination in the reply." },
      { id: "C", text: "Use Claude to help organize the facts and draft an initial response for internal review, then route the case to legal/risk management before any reply is sent to the customer." },
      { id: "D", text: "Avoid involving Claude at all and let the representative respond without any structure, since this is a sensitive case." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Safety and legal-threat complaints exceed the scope of a productivity tool used autonomously. The associate-level skill is recognizing when to escalate to human expertise (legal/risk) while still using Claude to organize facts and draft an internal starting point. Sending an unreviewed admission of fault (A) or a legal-liability determination (B) is inappropriate, and abandoning a useful organizing aid entirely (D) is unnecessary.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6, applied alongside Domain 2 — 'Determine when human review or additional verification is required'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-006",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Identify appropriate and inappropriate use cases",
    type: "scenario-multi-response",
    stem:
      "Which of the following are examples of appropriate, policy-aligned uses of Claude in a typical business setting? (Select 2)",
    options: [
      { id: "A", text: "Using Claude to draft an internal FAQ from approved public documentation." },
      { id: "B", text: "Using Claude to guess a competitor's confidential pricing strategy from rumors and presenting it as fact." },
      { id: "C", text: "Using Claude to generate a legally binding contract clause and sending it to a client without legal review." },
      { id: "D", text: "Using Claude to brainstorm marketing taglines for an already-approved product launch." },
    ],
    correctOptionIds: ["A","D"],
    selectCount: 2,
    explanation:
      "Drafting an internal FAQ from approved sources (A) and brainstorming taglines for an already-approved launch (D) are low-risk, appropriate productivity uses. Sending unreviewed binding legal language (C) skips required expert review, and presenting speculation as fact (B) violates both output-validation and ethical-use expectations.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Identify appropriate and inappropriate use cases'",
    difficulty: "easy",
  },
  {
    id: "assoc-grr-007",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Identify appropriate and inappropriate use cases",
    type: "mcq",
    stem:
      "A communications associate wants Claude to draft a public social media post speculating about the cause of a competitor's recent data breach, based only on rumors circulating online. What is the most appropriate action?",
    options: [
      { id: "A", text: "Decline to post speculative claims about a real security incident, since publishing unverified accusations carries reputational and legal risk regardless of who it targets." },
      { id: "B", text: "Ask Claude to phrase the speculation as a 'question' to make it seem less like a claim." },
      { id: "C", text: "Post it, since it's about a competitor and not the associate's own company." },
      { id: "D", text: "Publish it but delete it if the competitor complains." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Publishing unverified, potentially damaging claims about a real incident is inappropriate regardless of target — rephrasing as a question (B) doesn't remove the risk, and posting now with a plan to delete later (D) doesn't prevent the harm of publishing it in the first place.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Identify appropriate and inappropriate use cases'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-008",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Identify appropriate and inappropriate use cases",
    type: "mcq",
    stem:
      "A team lead asks Claude to brainstorm ideas for an upcoming internal team-building event, using only general preferences the team has shared. Is this an appropriate use case?",
    options: [
      { id: "A", text: "No — this requires legal review before proceeding." },
      { id: "B", text: "No — event planning should never involve AI assistance." },
      { id: "C", text: "Yes, but only if the final event choice is made entirely by Claude without any human input." },
      { id: "D", text: "Yes — this is a low-risk, internal brainstorming task well suited to Claude as a productivity tool." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Low-stakes internal brainstorming with a human making the final call is a squarely appropriate, low-risk use case — it doesn't require blanket avoidance (B), legal review (A), or removing the human decision-maker entirely (C).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Identify appropriate and inappropriate use cases'",
    difficulty: "easy",
  },
  {
    id: "assoc-grr-009",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Identify appropriate and inappropriate use cases",
    type: "mcq",
    stem:
      "A sales associate wants to let Claude autonomously negotiate final contract pricing terms with a vendor over email and send the agreed terms without any human sign-off. What is the concern?",
    options: [
      { id: "A", text: "This is appropriate as long as the vendor is informed they're negotiating with AI." },
      { id: "B", text: "Autonomously committing the company to binding financial terms without human review is an inappropriate use of the tool given the stakes involved." },
      { id: "C", text: "The only concern is that the emails might be too long." },
      { id: "D", text: "There is no concern, since Claude can draft professional emails." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Committing the company to binding terms is a consequential, high-stakes action that needs human review before anything is finalized — email quality (C) isn't the issue, and disclosure to the vendor (A) doesn't address the missing internal review.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Identify appropriate and inappropriate use cases'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-010",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Identify appropriate and inappropriate use cases",
    type: "mcq",
    stem:
      "A trainer wants Claude to build a glossary of internal terminology for new hires, based entirely on the company's own approved style guide and documentation. Is this appropriate?",
    options: [
      { id: "A", text: "Yes, but only if it's kept secret from the new hires who will use it." },
      { id: "B", text: "No — glossaries should never be AI-assisted." },
      { id: "C", text: "Yes — this uses approved internal sources for a low-risk internal training purpose." },
      { id: "D", text: "No — this requires executive approval regardless of content." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Drafting reference material from the company's own approved sources for internal training is a straightforward, appropriate use case — it doesn't require blanket avoidance (B), unrelated executive sign-off (D), or secrecy from its intended users (A).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Identify appropriate and inappropriate use cases'",
    difficulty: "easy",
  },
  {
    id: "assoc-grr-011",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Apply data sensitivity, regulatory, and privacy considerations",
    type: "mcq",
    stem:
      "A clinic administrator wants to use Claude to analyze appointment no-show trends using a spreadsheet that includes patient names, diagnoses, and contact information. What should happen before this analysis proceeds?",
    options: [
      { id: "A", text: "Remove or de-identify patient names, diagnoses, and contact details — or confirm the tool and workflow are covered under an appropriate data agreement — before uploading, given this is regulated health data." },
      { id: "B", text: "Proceed, but ask Claude not to mention any patient names in its response." },
      { id: "C", text: "Only remove the diagnosis column, since names and contact info aren't sensitive." },
      { id: "D", text: "Proceed as-is, since the analysis is for internal scheduling improvement." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Patient health information is regulated data requiring de-identification or an appropriate data agreement before use, regardless of good intent (D). Names and contact details are also sensitive, not just diagnoses (C), and trusting the model not to repeat details (B) doesn't address the underlying handling of regulated data.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Apply data sensitivity, regulatory, and privacy considerations'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-012",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Apply data sensitivity, regulatory, and privacy considerations",
    type: "mcq",
    stem:
      "A finance associate wants to paste a customer's full credit card number into a chat with Claude to double-check a data entry discrepancy. What is the correct approach?",
    options: [
      { id: "A", text: "Paste the number along with the customer's full billing address for extra context." },
      { id: "B", text: "Paste the number but ask Claude to forget it immediately afterward." },
      { id: "C", text: "Paste the full number, since the goal is just to fix a typo." },
      { id: "D", text: "Redact or mask all but the last few digits of the card number before pasting anything, consistent with standard handling of payment card data." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Full payment card numbers are highly sensitive regulated data and should be masked before being shared anywhere unnecessary, regardless of the task's simplicity (C) or asking the model to 'forget' it (B), and adding more sensitive fields (A) makes the exposure worse, not better.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Apply data sensitivity, regulatory, and privacy considerations'",
    difficulty: "easy",
  },
  {
    id: "assoc-grr-013",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Apply data sensitivity, regulatory, and privacy considerations",
    type: "mcq",
    stem:
      "A retail analyst wants Claude to identify seasonal purchasing trends using a report that only contains aggregated, anonymized total sales by region and month, with no individual customer information. What is the appropriate handling of this data?",
    options: [
      { id: "A", text: "Treat it the same as regulated personal data and require a formal data-processing agreement before use." },
      { id: "B", text: "Recognize that aggregated, anonymized data with no individual-level information doesn't carry the same sensitivity as personal or regulated data, and proceed with the analysis." },
      { id: "C", text: "Require the same anonymization steps used for personal health data, even though none is present." },
      { id: "D", text: "Refuse to analyze it under any circumstances." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Recognizing when data is *not* sensitive is as much a part of this skill as recognizing when it is — aggregated, anonymized totals with no individual-level data don't require the same safeguards as personal or regulated data (A, C), and there's no reason to refuse a low-risk analysis outright (D).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Apply data sensitivity, regulatory, and privacy considerations'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-014",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Apply data sensitivity, regulatory, and privacy considerations",
    type: "mcq",
    stem:
      "An employee wants Claude's help drafting a response to a government regulator about an active investigation, and plans to paste in confidential internal legal strategy memos for context. What is the most appropriate action?",
    options: [
      { id: "A", text: "Paste the memos in, since getting a well-written response quickly is the priority." },
      { id: "B", text: "Paste in a shortened version of the memos to reduce risk." },
      { id: "C", text: "Pause and involve legal counsel before using confidential legal strategy material in this way, given the regulatory and privileged nature of the content." },
      { id: "D", text: "Proceed, but remove the regulator's name from the draft." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Confidential legal strategy tied to an active regulatory investigation is high-sensitivity material where legal counsel should be involved before it's used this way — speed (A), a partial excerpt (B), or removing an unrelated detail like the regulator's name (D) don't address the core sensitivity and privilege concerns.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Apply data sensitivity, regulatory, and privacy considerations'",
    difficulty: "hard",
  },
  {
    id: "assoc-grr-015",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Apply data sensitivity, regulatory, and privacy considerations",
    type: "mcq",
    stem:
      "An HR coordinator wants to speed up offer-letter generation by uploading a spreadsheet of job applicants that includes full Social Security numbers, to auto-fill letter templates. What is the correct approach?",
    options: [
      { id: "A", text: "Remove Social Security numbers from the data used for this task entirely, since they aren't needed to generate an offer letter template and are highly sensitive regulated identifiers." },
      { id: "B", text: "Upload the spreadsheet, but ask Claude not to print the SSNs in its output." },
      { id: "C", text: "Replace SSNs with a random but realistic-looking number instead of removing the field." },
      { id: "D", text: "Upload the spreadsheet as-is, since this is a routine HR task." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Social Security numbers aren't needed for this task at all, so the safest and correct handling is removing that field entirely — routine framing (D) doesn't reduce the sensitivity, trusting the model not to repeat the data (B) doesn't prevent exposure during processing, and substituting fake-but-realistic numbers (C) still introduces confusing, unnecessary risk.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Apply data sensitivity, regulatory, and privacy considerations'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-016",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Apply data sensitivity, regulatory, and privacy considerations",
    type: "scenario-multi-response",
    stem:
      "A team wants to use Claude to analyze support tickets from EU customers, which are subject to GDPR. Which two practices reflect appropriate handling of this data? (Select 2)",
    options: [
      { id: "A", text: "Proceed without checking any data-handling requirements, since GDPR only applies to marketing activities." },
      { id: "B", text: "Confirm the tool and workflow are covered by an appropriate data-processing arrangement before using customer personal data this way." },
      { id: "C", text: "Include full customer names, emails, and home addresses by default, since more context always helps the analysis." },
      { id: "D", text: "Minimize the personal data included in what's pasted or uploaded to only what's necessary for the analysis." },
    ],
    correctOptionIds: ["B","D"],
    selectCount: 2,
    explanation:
      "Data minimization (D) and confirming an appropriate data-processing arrangement (B) are the correct GDPR-aligned practices. Including maximal personal data by default (C) violates minimization principles, and GDPR applies well beyond marketing (A).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Apply data sensitivity, regulatory, and privacy considerations'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-017",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Follow organizational AI policies and governance standards",
    type: "mcq",
    stem:
      "Company policy requires disclosing when AI tools were used to help produce a client deliverable. An associate sends a Claude-drafted analysis to a client without mentioning this. What is the issue?",
    options: [
      { id: "A", text: "The issue only matters if the client asks directly." },
      { id: "B", text: "There is no issue, since the analysis itself is accurate." },
      { id: "C", text: "Disclosure requirements only apply to fully AI-written content, not analysis." },
      { id: "D", text: "The associate violated a specific, stated policy requirement, regardless of the analysis's quality — following disclosed governance rules is part of responsible use, independent of output quality." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A stated organizational policy applies regardless of whether the output happens to be good (B) or whether the client happens to ask (A) — and a policy requiring disclosure for AI-assisted deliverables isn't limited to fully AI-written content (C) unless it explicitly says so.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Follow organizational AI policies and governance standards'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-018",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Follow organizational AI policies and governance standards",
    type: "mcq",
    stem:
      "An organization's policy requires all client data to be processed only through the company's approved, licensed AI workspace, not personal accounts. An employee, in a hurry, pastes client data into their personal AI account instead. What is the concern?",
    options: [
      { id: "A", text: "The concern only applies if the personal account is later hacked." },
      { id: "B", text: "This violates a governance control specifically designed to keep client data within approved, contractually covered systems, regardless of the requester's intent or urgency." },
      { id: "C", text: "This is fine as long as the employee deletes the conversation afterward." },
      { id: "D", text: "None, since the content of the request is otherwise appropriate." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Approved-workspace requirements exist specifically to keep sensitive data within systems covered by the right contractual and security controls — good intent or urgency (D) doesn't satisfy that control, the risk exists whether or not a breach actually occurs later (A), and deleting the conversation afterward (C) doesn't undo the policy violation.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Follow organizational AI policies and governance standards'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-019",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Follow organizational AI policies and governance standards",
    type: "mcq",
    stem:
      "Company policy requires manager approval before automating any customer-facing workflow with AI. An enthusiastic associate builds and deploys a Claude-powered auto-reply system for customer emails without seeking that approval. What is the correct assessment?",
    options: [
      { id: "A", text: "Approval is only needed if customers complain about the automation." },
      { id: "B", text: "Approval requirements only apply to internal workflows, not customer-facing ones." },
      { id: "C", text: "This violates the required approval step, which exists to ensure customer-facing changes are reviewed before going live, regardless of how well the automation performs technically." },
      { id: "D", text: "This is fine, since the automation works well technically." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A required approval step is a governance control that applies regardless of technical quality (D) or whether problems have surfaced yet (A) — and the scenario specifically describes a customer-facing workflow, which is exactly the kind of change such policies typically target (B is backwards).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Follow organizational AI policies and governance standards'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-020",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Follow organizational AI policies and governance standards",
    type: "mcq",
    stem:
      "An organization updates its AI usage policy to newly prohibit using AI tools to summarize unreleased financial results before the official earnings call. An associate who hasn't seen the update continues the old practice the following week. What is the best way to prevent this going forward?",
    options: [
      { id: "A", text: "Ensure policy updates are actively communicated to affected staff, not just published somewhere and left for people to discover." },
      { id: "B", text: "Remove the policy since it's difficult to enforce." },
      { id: "C", text: "Assume employees will eventually notice policy changes on their own." },
      { id: "D", text: "Only apply the updated policy to new hires going forward." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Governance standards only work if they're actively communicated to the people they affect — passive publication and hoping people notice (C) is how this gap happened. Removing the policy (B) or exempting existing staff (D) don't address the actual communication failure.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Follow organizational AI policies and governance standards'",
    difficulty: "easy",
  },
  {
    id: "assoc-grr-021",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Follow organizational AI policies and governance standards",
    type: "scenario-multi-response",
    stem:
      "Company policy requires that any AI-assisted step in a hiring decision be logged, and that a human make the final call. Which two practices comply with this policy? (Select 2)",
    options: [
      { id: "A", text: "Skipping the log entry when the AI-assisted step seems minor." },
      { id: "B", text: "Recording that Claude was used to help summarize a candidate's resume, as part of the hiring file." },
      { id: "C", text: "Having a human hiring manager review the AI-assisted summary and make the actual hiring decision." },
      { id: "D", text: "Letting Claude's recommendation stand as the final hiring decision without human sign-off, since it saves time." },
    ],
    correctOptionIds: ["B","C"],
    selectCount: 2,
    explanation:
      "Logging the AI-assisted step (B) and keeping a human as the actual decision-maker (C) are exactly what the policy requires. Letting the AI's output stand as the final decision (D) and skipping logging for 'minor' steps (A) both violate the stated policy.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Follow organizational AI policies and governance standards'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-022",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Follow organizational AI policies and governance standards",
    type: "mcq",
    stem:
      "An organization's approved-use list for AI does not include 'final hiring decisions' as a permitted use case. A manager nonetheless has Claude score candidates and auto-rejects everyone below a certain score without any human review. What is the correct assessment?",
    options: [
      { id: "A", text: "This is acceptable as long as the scoring criteria seem reasonable." },
      { id: "B", text: "This is acceptable as long as rejected candidates are not told AI was involved." },
      { id: "C", text: "This is fine since scoring, not literally clicking 'reject,' is what Claude is doing." },
      { id: "D", text: "This falls outside the organization's approved use cases and removes required human judgment from a consequential decision — both the scope violation and the lack of human review are problems." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Using AI for an unapproved, consequential use case with no human in the loop violates governance on two counts — approved-use scope and required human oversight — regardless of whether the criteria seem reasonable (A), regardless of the exact mechanical step performed (C), and concealment from candidates (B) makes it worse, not better.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Follow organizational AI policies and governance standards'",
    difficulty: "hard",
  },
  {
    id: "assoc-grr-023",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Understand the ethical implications of AI usage",
    type: "mcq",
    stem:
      "A loan officer uses Claude to generate a recommendation on a loan application and approves it without reviewing the underlying reasoning or data, since 'the AI said so.' What ethical concern does this illustrate?",
    options: [
      { id: "A", text: "No concern, since using AI recommendations is always appropriate for financial decisions." },
      { id: "B", text: "Overreliance — treating AI output as ground truth for a consequential decision without the scrutiny a human decision would normally receive." },
      { id: "C", text: "The concern only exists if the loan is later denied." },
      { id: "D", text: "This is purely a technical issue with no ethical dimension." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Accepting AI output as final for a consequential decision without normal scrutiny is the overreliance failure mode — this is a concern regardless of the eventual outcome (C) and is fundamentally about human judgment and accountability, not just technical correctness (D), and it isn't automatically appropriate just because AI was involved (A).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Understand the ethical implications of AI usage'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-024",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Understand the ethical implications of AI usage",
    type: "mcq",
    stem:
      "A support team uses Claude to draft most customer email replies but never discloses this to customers, even though company ethics guidelines call for transparency about AI involvement in customer communications. What is the concern?",
    options: [
      { id: "A", text: "Transparency only matters for decisions, not communications." },
      { id: "B", text: "There is no concern as long as the replies are helpful." },
      { id: "C", text: "This falls short of the transparency expected in responsible AI use — customers may reasonably want to know when they're interacting with AI-drafted content, and the guideline exists for that reason." },
      { id: "D", text: "This is only a concern if a customer explicitly asks and is told 'no.'" },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Transparency about AI involvement is an ethical expectation independent of whether the content happens to be helpful (B) or whether a customer happens to ask (D) — and it applies to communications, not just decisions (A).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Understand the ethical implications of AI usage'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-025",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Understand the ethical implications of AI usage",
    type: "mcq",
    stem:
      "A recruiting team notices that resumes with certain names are consistently rated lower by a Claude-assisted screening process, even when experience and qualifications are comparable to other candidates. What is the appropriate response?",
    options: [
      { id: "A", text: "Investigate the pattern as a potential fairness issue — the screening criteria and inputs should be reviewed and adjusted, since name is not a job-relevant factor." },
      { id: "B", text: "Remove only the lowest-rated candidates' names and re-score them without changing anything else." },
      { id: "C", text: "Stop screening resumes altogether and hire randomly instead." },
      { id: "D", text: "Assume the pattern reflects genuine quality differences and continue as-is." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A rating pattern correlated with name rather than qualifications is a fairness red flag that warrants reviewing and adjusting the process — assuming it reflects real quality differences (D) begs the question, abandoning screening entirely (C) is an overcorrection, and selectively re-scoring only some candidates (B) doesn't fix the underlying process.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Understand the ethical implications of AI usage'",
    difficulty: "hard",
  },
  {
    id: "assoc-grr-026",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Understand the ethical implications of AI usage",
    type: "mcq",
    stem:
      "After a Claude-drafted public statement contains an factual error that reaches customers, a manager tells the team 'it's not our fault, the AI got it wrong.' What is the issue with this response?",
    options: [
      { id: "A", text: "This is a purely technical problem unrelated to ethics." },
      { id: "B", text: "The issue only matters if the error causes measurable financial harm." },
      { id: "C", text: "There is no issue; responsibility genuinely shifts to the AI tool that generated the error." },
      { id: "D", text: "Accountability for content that reaches the public rests with the humans who reviewed and approved it before publishing, not solely with the tool that drafted it." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Responsibility for published content stays with the humans who reviewed and approved it — deflecting blame entirely onto the tool (C) avoids that accountability regardless of whether harm was severe (B), and this is squarely an ethical/accountability issue, not merely technical (A).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Understand the ethical implications of AI usage'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-027",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Understand the ethical implications of AI usage",
    type: "scenario-multi-response",
    stem:
      "A company is deploying a Claude-assisted tool that helps score customer creditworthiness. Which two practices reflect responsible, ethical use of this tool? (Select 2)",
    options: [
      { id: "A", text: "Avoid reviewing the tool's patterns across groups, since doing so might itself introduce bias." },
      { id: "B", text: "Let the tool's score be final and binding with no human override, to keep the process fast and consistent." },
      { id: "C", text: "Regularly review the tool's scoring patterns across different customer groups to check for unjustified disparities." },
      { id: "D", text: "Keep a human decision-maker accountable for final credit decisions, with the ability to override the tool's score." },
    ],
    correctOptionIds: ["C","D"],
    selectCount: 2,
    explanation:
      "Monitoring for disparities across groups (C) and keeping accountable human oversight with override ability (D) are core responsible-AI practices for a consequential tool like credit scoring. Making the score final with no override (B) removes needed accountability, and avoiding fairness review altogether (A) is itself the ethical lapse, not a way to prevent one.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Understand the ethical implications of AI usage'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-028",
    certificationSlug: "associate-foundations",
    domain: "Governance, Risk, and Responsible Use",
    taskStatement: "Understand the ethical implications of AI usage",
    type: "mcq",
    stem:
      "A company wants to use historical customer chat transcripts, which include personal details customers shared in the course of getting support, to analyze common pain points with Claude. Customers were never told their transcripts might be used this way. What is the ethical concern?",
    options: [
      { id: "A", text: "This is only a data-storage issue, not an ethical one." },
      { id: "B", text: "Using personal data for a purpose customers weren't informed about raises a consent and transparency concern, separate from whether the analysis itself is technically feasible." },
      { id: "C", text: "The concern only applies if the transcripts are shared outside the company." },
      { id: "D", text: "There is no concern, since the transcripts already exist and are company property." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Using personal data for a new purpose people weren't informed about is a consent and transparency issue in its own right — ownership of the data (D) doesn't resolve that, the concern exists even if the data stays internal (C), and this is an ethical/consent question, not merely a storage question (A).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Understand the ethical implications of AI usage'",
    difficulty: "hard",
  },
];
