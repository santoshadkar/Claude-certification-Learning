import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Governance, Risk, and Responsible Use" as const;
const CERT = "associate-foundations" as const;

export const questions: QuestionInput[] = [
  {
    id: "assoc-grr-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Identify appropriate and inappropriate use cases",
    type: "mcq",
    stem:
      "A marketing associate wants Claude to draft social media posts previewing next quarter's earnings figures before the company's official public announcement. What is the most appropriate action?",
    options: [
      { id: "A", text: "Proceed, since Claude is only drafting text and not publishing it directly." },
      {
        id: "B",
        text: "Decline to draft the posts and flag the request to compliance, since previewing unreleased earnings data raises insider-information and disclosure risks.",
      },
      { id: "C", text: "Draft the posts but ask Claude to add a disclaimer that the figures are unconfirmed." },
      { id: "D", text: "Draft the posts using only publicly available figures from last quarter instead." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Previewing unreleased earnings data outside official disclosure channels is a governance and regulatory red flag regardless of who or what drafts the text. The associate should recognize this as an inappropriate use case and escalate to compliance before any drafting occurs, rather than proceeding, adding a disclaimer, or quietly substituting old data without addressing the underlying request.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 (Governance, Risk, and Responsible Use) — 'Identify appropriate and inappropriate use cases'",
    difficulty: "easy",
  },
  {
    id: "assoc-grr-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Apply data sensitivity, regulatory, and privacy considerations",
    type: "mcq",
    stem:
      "An HR professional wants to use Claude to analyze employee performance review text for common themes. The review documents contain employee names, salaries, and medical leave notes. Organizational policy prohibits sharing regulated personal data with third-party AI tools outside approved data-processing agreements. What should the HR professional do first?",
    options: [
      { id: "A", text: "Upload the reviews as-is since the analysis is for internal HR purposes only." },
      {
        id: "B",
        text: "Remove or anonymize names, salaries, and medical information before uploading, or confirm the tool is covered under an approved data-processing agreement.",
      },
      { id: "C", text: "Summarize the reviews manually first, then upload only the summary without checking policy." },
      { id: "D", text: "Proceed with the upload and instruct Claude not to repeat any personal details in its output." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Salary and medical-leave data are sensitive, regulated categories. Before uploading, the professional must either de-identify the data or confirm the workflow is covered by an approved data-processing agreement, consistent with organizational policy. Uploading as-is (A) or trusting the model not to repeat details (D) does not satisfy a data-sensitivity control, and skipping the policy check by paraphrasing first (C) still exposes the underlying regulated data during processing.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Apply data sensitivity, regulatory, and privacy considerations'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Follow organizational AI policies and governance standards",
    type: "scenario-multi-response",
    stem:
      "Your organization's AI governance policy requires that any Claude-generated content used in external client deliverables be reviewed by a human before sending, and that any use of customer data be logged for audit purposes. Which of the following actions comply with this policy? (Select 2)",
    options: [
      { id: "A", text: "Sending a Claude-drafted client proposal directly to the client without review, because the proposal looked well-written." },
      { id: "B", text: "Having a colleague review a Claude-drafted client proposal before it is sent." },
      { id: "C", text: "Logging that customer transaction data was pasted into a Claude conversation to generate a trend summary." },
      { id: "D", text: "Deleting the record of which customer data was used in a Claude conversation once the summary is generated." },
    ],
    correctOptionIds: ["B", "C"],
    selectCount: 2,
    explanation:
      "Policy compliance requires both human review before external delivery (B) and audit logging of customer-data use (C). Sending without review (A) skips the required human check, and deleting the usage record (D) defeats the audit-logging requirement.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Follow organizational AI policies and governance standards'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Understand the ethical implications of AI usage",
    type: "mcq",
    stem:
      "A hiring manager asks Claude to shortlist resumes for a role by matching them against a job description. The manager notices Claude's shortlist consistently excludes candidates from a particular neighborhood mentioned in their addresses, even though that neighborhood has no bearing on the job requirements. What is the most likely concern, and what should the hiring manager do?",
    options: [
      { id: "A", text: "This is expected model behavior and no action is needed, since Claude does not have direct access to protected characteristics." },
      {
        id: "B",
        text: "This may reflect a proxy bias where a neutral-looking field (address/neighborhood) correlates with a protected characteristic; the manager should review the shortlist criteria, remove irrelevant demographic proxies from the inputs, and have a human validate the results.",
      },
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
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Identify appropriate and inappropriate use cases",
    type: "mcq",
    stem:
      "A customer support representative uses Claude to draft responses to customer complaints. One complaint alleges that the company's product caused a safety injury and threatens legal action. What is the most appropriate way to use Claude in this situation?",
    options: [
      { id: "A", text: "Have Claude draft a full response including an admission of fault so the customer feels heard, then send it immediately." },
      {
        id: "B",
        text: "Use Claude to help organize the facts and draft an initial response for internal review, then route the case to legal/risk management before any reply is sent to the customer.",
      },
      { id: "C", text: "Avoid involving Claude at all and let the representative respond without any structure, since this is a sensitive case." },
      { id: "D", text: "Ask Claude to determine whether the company is legally liable and include that determination in the reply." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Safety and legal-threat complaints exceed the scope of a productivity tool used autonomously. The associate-level skill is recognizing when to escalate to human expertise (legal/risk) while still using Claude to organize facts and draft an internal starting point. Sending an unreviewed admission of fault (A) or a legal-liability determination (D) is inappropriate, and abandoning a useful organizing aid entirely (C) is unnecessary.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6, applied alongside Domain 2 — 'Determine when human review or additional verification is required'",
    difficulty: "medium",
  },
  {
    id: "assoc-grr-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Identify appropriate and inappropriate use cases",
    type: "scenario-multi-response",
    stem:
      "Which of the following are examples of appropriate, policy-aligned uses of Claude in a typical business setting? (Select 2)",
    options: [
      { id: "A", text: "Using Claude to draft an internal FAQ from approved public documentation." },
      { id: "B", text: "Using Claude to generate a legally binding contract clause and sending it to a client without legal review." },
      { id: "C", text: "Using Claude to brainstorm marketing taglines for an already-approved product launch." },
      { id: "D", text: "Using Claude to guess a competitor's confidential pricing strategy from rumors and presenting it as fact." },
    ],
    correctOptionIds: ["A", "C"],
    selectCount: 2,
    explanation:
      "Drafting an internal FAQ from approved sources (A) and brainstorming taglines for an already-approved launch (C) are low-risk, appropriate productivity uses. Sending unreviewed binding legal language (B) skips required expert review, and presenting speculation as fact (D) violates both output-validation and ethical-use expectations.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 6 — 'Identify appropriate and inappropriate use cases'",
    difficulty: "easy",
  },
];
