import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Output Evaluation and Validation" as const;
const CERT = "associate-foundations" as const;

export const questions: QuestionInput[] = [
  {
    id: "assoc-oev-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Evaluate Claude-generated outputs for accuracy and completeness",
    type: "mcq",
    stem:
      "Claude summarizes a 40-page vendor contract into five bullet points highlighting the key terms. All five bullets are factually correct, but the summary omits an auto-renewal clause that requires 90 days' notice to cancel. What best describes this output?",
    options: [
      { id: "A", text: "The output is fully reliable since every stated bullet is accurate." },
      {
        id: "B",
        text: "The output is accurate but incomplete, and the missing auto-renewal clause could have real consequences if not caught.",
      },
      { id: "C", text: "The output is a hallucination since it left out contract terms." },
      { id: "D", text: "The output should be discarded entirely and redone from scratch." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Accuracy and completeness are independent: an output can be 100% accurate in what it states while still missing something materially important. The missing clause should be flagged, not just accepted (A). It isn't a hallucination — that term refers to fabricated content, not omitted content (C) — and one gap doesn't mean the whole summary is worthless (D).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Evaluate Claude-generated outputs for accuracy and completeness'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Identify hallucinations, inconsistencies, and biases in responses",
    type: "mcq",
    stem:
      "Claude drafts a market-research summary that includes the sentence: 'According to a 2024 McKinsey study, 73% of enterprises have adopted generative AI in at least one business function.' No such source was provided to Claude, and the associate cannot immediately recall seeing this figure elsewhere. What is the most likely explanation and correct next step?",
    options: [
      { id: "A", text: "The statistic is almost certainly accurate, since Claude wouldn't cite a specific source and number without evidence." },
      {
        id: "B",
        text: "This is a likely hallucination — a specific-sounding statistic and citation with no traceable source — and it should be verified against the actual study before being used anywhere.",
      },
      { id: "C", text: "Reword the sentence to remove the citation but keep the 73% figure, since the number itself is probably fine." },
      { id: "D", text: "Ask Claude to regenerate the paragraph with a different statistic that sounds more conservative." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Specific numbers and citations are exactly the kind of confident, specific-sounding detail models can fabricate. Treating fluent confidence as evidence (A) is the core hallucination trap. Removing the citation while keeping the number (C) doesn't fix the underlying accuracy problem, and substituting an equally unverified number (D) doesn't solve anything either.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Identify hallucinations, inconsistencies, and biases in responses'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Apply fact-checking and validation techniques",
    type: "scenario-multi-response",
    stem:
      "An associate is preparing a Claude-drafted press release announcing a new product launch date and a specific performance benchmark ('40% faster than the previous generation'). Which two actions reflect appropriate fact-checking before publication? (Select 2)",
    options: [
      { id: "A", text: "Confirm the launch date against the internal project plan or calendar of record." },
      { id: "B", text: "Ask Claude how confident it is in the 40% figure and publish if the stated confidence is high." },
      { id: "C", text: "Verify the 40% performance figure against the actual benchmark test results." },
      { id: "D", text: "Publish immediately, since press releases are routinely revised after the fact." },
    ],
    correctOptionIds: ["A", "C"],
    selectCount: 2,
    explanation:
      "Verifying checkable claims (a date, a benchmark figure) against authoritative sources is the actual fact-checking step. Self-reported confidence (B) isn't a reliable accuracy signal, and publishing unverified external material on the assumption it can be fixed later (D) skips validation entirely.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Apply fact-checking and validation techniques'",
    difficulty: "medium",
  },
  {
    id: "assoc-oev-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Determine when human review or additional verification is required",
    type: "mcq",
    stem:
      "Claude drafts a response to a job candidate rejecting their application, including a specific reason: 'unfortunately your visa sponsorship requirements do not align with our current hiring budget.' Before this is sent, what is the most important consideration?",
    options: [
      { id: "A", text: "Send it as-is, since Claude phrased it professionally." },
      {
        id: "B",
        text: "This reason touches employment and immigration-related decisions, which likely require HR/legal review before being put in writing to a candidate, given the legal risk involved.",
      },
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
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Edit, adapt, refine, and compare outputs for the intended audience",
    type: "mcq",
    stem:
      "The same technical incident summary needs to go to (1) the engineering team and (2) company executives. What is the best approach?",
    options: [
      { id: "A", text: "Send the identical technical write-up to both audiences to ensure consistency." },
      {
        id: "B",
        text: "Ask Claude to produce two versions: a detailed technical version for engineering, and a brief, decision-focused version for executives.",
      },
      { id: "C", text: "Only write the executive version, since engineers can infer technical detail from context." },
      { id: "D", text: "Only write the technical version, since executives can ask follow-up questions if confused." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Adapting content for the audience — detail level, framing — without changing the underlying facts is the skill being tested. Sending one version to both audiences (A) serves neither well, and skipping either audience's needs (C, D) leaves a real gap.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Edit, adapt, refine, and compare outputs for the intended audience'",
    difficulty: "easy",
  },
  {
    id: "assoc-oev-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement:
      "Organize and curate information and select appropriate output formats (artifacts, inline, structured data)",
    type: "mcq",
    stem:
      "An associate asks Claude to generate a 15-row table of product SKUs, prices, and stock counts that will be imported directly into inventory software. Which output format is most appropriate?",
    options: [
      { id: "A", text: "A conversational paragraph describing the products." },
      { id: "B", text: "An artifact containing structured data (e.g., a table or CSV) that can be reviewed and exported cleanly." },
      { id: "C", text: "A bulleted list formatted for a slide presentation." },
      { id: "D", text: "Plain inline chat text with the values separated by commas in a single line." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Data meant for reuse by another system belongs in a structured, artifact-based format that's easy to review and export. Prose (A), presentation formatting (C), and unstructured inline text (D) are all harder to reliably parse into the target system.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 2 — 'Organize and curate information and select appropriate output formats'",
    difficulty: "easy",
  },
];
