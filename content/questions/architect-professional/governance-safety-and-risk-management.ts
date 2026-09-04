import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Governance, Safety & Risk Management" as const;
const CERT = "architect-professional" as const;
const O1 = "Implement guardrails and safety controls" as const;
const O2 = "Identify risks, limitations, and failure modes of LLM systems" as const;
const O3 = "Apply human-in-the-loop validation strategies" as const;
const O4 = "Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)" as const;
const O5 = "Address ethical AI considerations (bias, fairness, transparency)" as const;

export const questions: QuestionInput[] = [
  {
    id: "arch-p-gsrm-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A team relies entirely on a single system-prompt instruction ('never discuss competitors') as their only guardrail against a sensitive topic, with no output-side check. A user later gets the model to discuss competitors through an indirect, multi-turn phrasing. What does this reveal about the guardrail design?",
    options: [
      { id: "A", text: "A single prompt-level instruction is a fragile, single point of failure for a genuine safety requirement; layered guardrails (e.g., prompt instructions plus an output-side check or classifier) provide defense in depth that a lone instruction cannot." },
      { id: "B", text: "A single system-prompt instruction is always fully sufficient to prevent any undesired behavior, regardless of how a user phrases their request." },
      { id: "C", text: "Guardrails are never necessary for topics that aren't safety-critical, so no further design was needed here." },
      { id: "D", text: "Guardrail architecture has no bearing on whether a determined user can bypass a restriction." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Relying on one prompt instruction as the sole guardrail is a single point of failure — layered defenses (prompt plus output-side validation) are what provide real robustness against indirect phrasing. A single instruction isn't always sufficient (B wrong), the scenario shows a real gap even for a business-sensitivity concern (C's framing misses the point), and guardrail architecture directly affects bypass resistance (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 (Governance, Safety & Risk Management) — 'Implement guardrails and safety controls'",
    difficulty: "easy",
  },
  {
    id: "arch-p-gsrm-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A healthcare-adjacent chatbot has no explicit safeguard preventing it from offering direct medical diagnoses, even though its intended scope is limited to general wellness information. What guardrail is most directly needed?",
    options: [
      { id: "A", text: "An explicit scope-boundary guardrail (system-prompt instruction plus ideally an output check) that keeps responses within general wellness information and redirects diagnosis-seeking requests to a qualified professional." },
      { id: "B", text: "No guardrail is needed, since a chatbot's stated intended scope is always sufficient on its own to prevent it from exceeding that scope in practice." },
      { id: "C", text: "The only fix is to shut the chatbot down entirely, since any healthcare-adjacent use case can never be made safe." },
      { id: "D", text: "Guardrails are only relevant for chatbots explicitly marketed as medical-diagnosis tools." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "An explicit scope-boundary guardrail is exactly what's missing and needed here — intended scope alone, without an enforced boundary, doesn't reliably prevent scope creep in actual usage (B wrong). Shutting the system down entirely (C) is a disproportionate response to a guardrail gap that's addressable, and this kind of guardrail is relevant precisely because the chatbot is healthcare-adjacent even without being a diagnostic tool (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Implement guardrails and safety controls'",
    difficulty: "medium",
  },
  {
    id: "arch-p-gsrm-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "scenario-multi-response",
    stem:
      "Which two design choices reflect sound, layered guardrail practice for a production Claude-powered system? (Select 2)",
    options: [
      { id: "A", text: "Combine system-prompt-level instructions with an independent output-side check (e.g., classifier or rule-based filter) for a genuinely safety-critical restriction." },
      { id: "B", text: "Define clear scope boundaries for what the system should and should not do, and redirect out-of-scope requests appropriately." },
      { id: "C", text: "Rely on a single prompt instruction as the sole safeguard for every safety-critical restriction, regardless of the stakes involved." },
      { id: "D", text: "Treat guardrail design as a one-time setup step that never needs revisiting once implemented." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Layered, independent checks (A) and clearly defined scope boundaries with redirection (B) both reflect sound guardrail design. Relying on a single instruction for genuinely safety-critical restrictions (C) and treating guardrails as static and never revisited (D) both undermine robust safety practice.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Implement guardrails and safety controls'",
    difficulty: "easy",
  },
  {
    id: "arch-p-gsrm-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A team implements an output-side content filter but tunes it so aggressively that it also blocks a large share of legitimate, safe responses, frustrating users. What does this illustrate about guardrail design?",
    options: [
      { id: "A", text: "Guardrails involve a real precision/recall tradeoff — overly aggressive filtering reduces genuine risk but at a real cost to legitimate functionality, so guardrails need to be tuned and evaluated against both false positives and false negatives, not just maximized for restriction." },
      { id: "B", text: "Guardrails should always be tuned as aggressively as technically possible, since blocking too much legitimate content is never a real cost worth weighing." },
      { id: "C", text: "There is no tradeoff involved in guardrail tuning; stricter is always strictly better with no downside." },
      { id: "D", text: "Guardrail tuning has no bearing on the system's overall usability or user experience." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Overly aggressive filtering trades away legitimate functionality for reduced risk — a real tradeoff that needs deliberate tuning against both false positives and false negatives, not treated as a one-directional 'more restriction is always better' problem. Maximal aggressiveness isn't costless (B wrong), there is a genuine tradeoff here (C wrong), and this scenario shows guardrail tuning directly affecting usability (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Implement guardrails and safety controls'",
    difficulty: "medium",
  },
  {
    id: "arch-p-gsrm-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "An architect designing guardrails for an agent with tool access focuses guardrail design entirely on the text of the model's responses, with no consideration of what actions the agent's tools could actually perform. What gap does this leave?",
    options: [
      { id: "A", text: "Guardrails limited to response text miss the risk introduced by tool-use actions themselves (e.g., an agent could take a harmful or unintended action via a tool even if its accompanying text response looks fine); guardrails need to cover tool invocation and action boundaries, not just output text." },
      { id: "B", text: "Tool-use actions can never pose any risk beyond what's already covered by response-text guardrails." },
      { id: "C", text: "The only fix is to remove all tool access from every agent regardless of its purpose." },
      { id: "D", text: "Guardrail scope has no bearing on which categories of risk are actually covered." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "An agent's tool-use actions are a distinct risk surface from its text output — guardrails need to explicitly cover what actions a tool-using agent can take, not just police its response text. Tool actions can absolutely introduce risk beyond text alone (B wrong), removing all tool access (C) is a disproportionate response to a scoping gap, and guardrail scope directly determines coverage (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Implement guardrails and safety controls'",
    difficulty: "hard",
  },
  {
    id: "arch-p-gsrm-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A team building an internal-only prototype decides no guardrails are necessary because 'only employees will use it.' The prototype is later connected to a customer-facing channel without revisiting this decision. What risk does this illustrate?",
    options: [
      { id: "A", text: "Guardrail requirements should be reassessed whenever a system's context or audience changes; an assumption valid for an internal-only tool ('trusted, limited audience') may no longer hold once the same system is exposed more broadly." },
      { id: "B", text: "Guardrail decisions made for an initial context always remain valid indefinitely, regardless of how the system's usage context later changes." },
      { id: "C", text: "Internal-only prototypes should always have identical guardrails to customer-facing production systems from day one, with no distinction ever justified." },
      { id: "D", text: "This scenario poses no risk, since guardrail needs are entirely unrelated to audience or context." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Reassessing guardrail needs when context changes (e.g., internal prototype becoming customer-facing) is the sound governance practice — an initial low-risk assumption doesn't automatically hold forever (B wrong). Some legitimate distinction between internal and customer-facing guardrail needs can exist early on (C overstates the fix), but the real risk is failing to revisit that decision as context changes, and audience/context clearly does affect guardrail needs (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Implement guardrails and safety controls'",
    difficulty: "medium",
  },
  {
    id: "arch-p-gsrm-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "An architect is asked to produce a risk assessment for a new LLM-powered financial-advice feature. Which risk is most specific to LLM-based systems, as opposed to a generic software risk that applies to any application?",
    options: [
      { id: "A", text: "The model may generate plausible-sounding but incorrect financial guidance (hallucination) with no explicit error state, unlike a traditional deterministic system that would more predictably fail loudly on invalid input." },
      { id: "B", text: "The server hosting the application might experience unplanned downtime." },
      { id: "C", text: "A database migration might be executed incorrectly." },
      { id: "D", text: "A dependency library might have an unpatched vulnerability." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Hallucination — confident, plausible, but incorrect output with no clear failure signal — is a risk pattern specific to LLM-based systems, unlike traditional deterministic failure modes. Server downtime (B), a botched migration (C), and a vulnerable dependency (D) are all generic software risks that apply regardless of whether the system uses an LLM.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Identify risks, limitations, and failure modes of LLM systems'",
    difficulty: "easy",
  },
  {
    id: "arch-p-gsrm-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A risk assessment for an agentic system considers only what happens if the model gives a wrong answer, without considering what happens if the model takes a wrong or unintended action through one of its connected tools. What limitation does this risk assessment have?",
    options: [
      { id: "A", text: "It misses action-level risk unique to agentic (tool-using) systems — an agent can cause real-world side effects through tool use that a purely text-generation risk assessment wouldn't capture, so agentic risk assessments need to cover both output content and action consequences." },
      { id: "B", text: "There is no limitation; risk from tool-using agents is always fully captured by evaluating only the correctness of generated text." },
      { id: "C", text: "Agentic systems can never pose any risk beyond what a plain text-generation system poses." },
      { id: "D", text: "Risk assessment scope has no bearing on which failure modes are actually identified." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Agentic, tool-using systems introduce action-level risk beyond output-content risk — an assessment focused only on answer correctness misses real-world consequences of tool actions. Text-correctness evaluation alone doesn't capture this (B wrong), agentic systems clearly can pose risks beyond plain text generation (C wrong), and assessment scope directly determines what's identified (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Identify risks, limitations, and failure modes of LLM systems'",
    difficulty: "medium",
  },
  {
    id: "arch-p-gsrm-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "scenario-multi-response",
    stem:
      "Which two are genuine, LLM-specific limitations an architect should document in a risk assessment? (Select 2)",
    options: [
      { id: "A", text: "The model's knowledge is frozen as of its training data cutoff, and it will not know about events or changes after that point unless provided via context or tools." },
      { id: "B", text: "The model can produce confident, fluent output even when it is factually incorrect, without a reliable built-in signal that it is wrong." },
      { id: "C", text: "The underlying cloud infrastructure hosting any application could experience a regional outage." },
      { id: "D", text: "A team member could leave the company mid-project." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Knowledge cutoff (A) and confident-but-incorrect generation with no reliable self-flagging (B) are both genuine, LLM-specific limitations worth documenting. Infrastructure outages (C) and staffing turnover (D) are generic organizational/operational risks, not limitations specific to LLM systems.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Identify risks, limitations, and failure modes of LLM systems'",
    difficulty: "easy",
  },
  {
    id: "arch-p-gsrm-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A team assumes a Claude-powered system's failure modes are fixed and fully known once identified during initial design, requiring no further monitoring for new failure patterns after launch. Why is this assumption risky?",
    options: [
      { id: "A", text: "New failure modes can emerge as usage patterns evolve, adversarial users probe the system, or it's connected to new data sources or tools; ongoing risk identification is needed throughout the system's lifecycle, not just at initial design." },
      { id: "B", text: "Once failure modes are identified during initial design, they are guaranteed to be complete and exhaustive for the life of the system." },
      { id: "C", text: "New failure modes can never emerge after a system has launched, regardless of how its usage or configuration changes." },
      { id: "D", text: "Ongoing risk identification after launch provides no value beyond what was already captured during initial design." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Failure modes can genuinely emerge post-launch as usage, adversarial probing, or connected systems evolve — ongoing risk identification is a lifecycle activity, not a one-time design step. Assuming initial identification is exhaustive forever (B, C both wrong) ignores this, and ongoing identification does provide real, additional value (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Identify risks, limitations, and failure modes of LLM systems'",
    difficulty: "medium",
  },
  {
    id: "arch-p-gsrm-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A code-generation assistant is deployed with no disclosed limitation around its knowledge cutoff, and a developer unknowingly relies on it for guidance about a library API that changed significantly after that cutoff. What failure mode does this represent, and what mitigates it?",
    options: [
      { id: "A", text: "A knowledge-cutoff-driven failure mode — the model may confidently reference outdated API behavior; mitigating this requires disclosing the limitation to users and, where feasible, grounding responses in current documentation via retrieval or tools rather than relying purely on training-data knowledge." },
      { id: "B", text: "This cannot be considered a real failure mode, since any LLM-based tool is always fully aware of every change to every library regardless of training cutoff." },
      { id: "C", text: "The only mitigation is to stop using any LLM-based tool for code generation permanently." },
      { id: "D", text: "Knowledge cutoff has no bearing on the reliability of code-generation guidance." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is exactly a knowledge-cutoff failure mode, mitigated by disclosure plus grounding responses in current information via retrieval/tools where feasible — the model isn't automatically aware of post-cutoff changes (B wrong), abandoning LLM-based code assistance entirely (C) overcorrects, and knowledge cutoff is directly relevant to guidance reliability here (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Identify risks, limitations, and failure modes of LLM systems'",
    difficulty: "medium",
  },
  {
    id: "arch-p-gsrm-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "During a risk workshop, a stakeholder argues that since the model 'usually gets it right,' formal risk documentation is unnecessary overhead. How should the architect respond?",
    options: [
      { id: "A", text: "Explain that 'usually correct' still implies a non-zero failure rate with real consequences at scale, and that formal risk documentation is what allows the organization to reason about acceptable failure rates, mitigations, and accountability rather than relying on an undocumented assumption of reliability." },
      { id: "B", text: "Agree that formal risk documentation is unnecessary whenever a system performs well on a small number of informal spot checks." },
      { id: "C", text: "Agree that risk documentation should only be created after a serious incident has already occurred." },
      { id: "D", text: "Risk documentation has no practical value regardless of a system's actual failure rate or the consequences of failure." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A non-zero, undocumented failure rate at production scale is exactly why formal risk documentation matters — 'usually right' isn't a substitute for it (B wrong), waiting for an incident before documenting risk (C) is reactive rather than the sound proactive practice, and risk documentation clearly has practical value for governance and accountability (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Identify risks, limitations, and failure modes of LLM systems'",
    difficulty: "hard",
  },
  {
    id: "arch-p-gsrm-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A system automatically approves loan applications based solely on the model's output, with no human review at any point, even for high-value or borderline cases. What human-in-the-loop concern does this raise?",
    options: [
      { id: "A", text: "High-stakes, high-consequence decisions like loan approvals generally warrant human review, at minimum for borderline or high-value cases, rather than full automation with zero human oversight, given the real consequences of an incorrect automated decision." },
      { id: "B", text: "Human-in-the-loop review is never necessary for any automated decision, regardless of the stakes or consequences involved." },
      { id: "C", text: "The only acceptable design is to require human review of every single decision the system ever makes, with zero automation permitted for any case." },
      { id: "D", text: "The stakes of a decision have no bearing on how much human oversight is appropriate." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "High-stakes decisions with real consequences generally call for human review at least for borderline or high-value cases — full automation with zero human oversight skips an important check for this scenario (B wrong). Requiring human review of literally every case (C) may be more oversight than is proportionate or necessary depending on risk tiering, and the stakes involved absolutely should shape how much oversight is appropriate (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Apply human-in-the-loop validation strategies'",
    difficulty: "easy",
  },
  {
    id: "arch-p-gsrm-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team implements human review for a content-moderation system, but reviewers are shown so many items per hour that they rubber-stamp most decisions without meaningfully evaluating them. What does this illustrate about human-in-the-loop design?",
    options: [
      { id: "A", text: "A human-in-the-loop step only provides real value if reviewers have the time, attention, and workload structure to meaningfully evaluate each case; an overloaded review process can become a check in name only rather than a genuine safeguard." },
      { id: "B", text: "Any human review step, regardless of reviewer workload or attention, always provides the same level of safeguard." },
      { id: "C", text: "Human review is inherently pointless for content moderation and should be removed entirely rather than redesigned." },
      { id: "D", text: "Reviewer workload has no bearing on the actual effectiveness of a human-in-the-loop safeguard." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A human review step is only as valuable as reviewers' actual capacity to meaningfully evaluate each case — an overloaded process can devolve into a check in name only. The safeguard's value clearly depends on reviewer workload and attention (B wrong), removing human review altogether (C) throws away a mechanism that could work if redesigned, and workload directly affects effectiveness (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Apply human-in-the-loop validation strategies'",
    difficulty: "medium",
  },
  {
    id: "arch-p-gsrm-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "scenario-multi-response",
    stem:
      "Which two are sound applications of human-in-the-loop validation in a production system? (Select 2)",
    options: [
      { id: "A", text: "Route low-confidence or high-stakes outputs to human review, while allowing high-confidence, low-stakes outputs to proceed automatically." },
      { id: "B", text: "Give reviewers a workload and interface that supports genuinely evaluating each flagged case, rather than rushing through a high volume with minimal attention." },
      { id: "C", text: "Require human review of every single output regardless of confidence or stakes, with no risk-based prioritization." },
      { id: "D", text: "Remove human review from a high-stakes decision process entirely once the model's average accuracy crosses 95%." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Risk-based routing to human review (A) and giving reviewers a workload that supports genuine evaluation (B) are both sound human-in-the-loop practices. Requiring universal review with no prioritization (C) is often an inefficient, unfocused use of human attention, and dropping human oversight from a high-stakes process based purely on an aggregate accuracy number (D) ignores that even a high average accuracy leaves a meaningful failure rate on high-stakes individual decisions.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Apply human-in-the-loop validation strategies'",
    difficulty: "medium",
  },
  {
    id: "arch-p-gsrm-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "An architect is designing the human review step for a medical-summarization tool used by clinicians. The current design shows reviewers only the model's final summary, with no way to see the source document it was generated from. What limitation does this impose on the review?",
    options: [
      { id: "A", text: "Without access to the source document, reviewers can't verify whether the summary is actually faithful to the original content — they can only judge whether it reads plausibly, which is a much weaker check than verifying accuracy against the source." },
      { id: "B", text: "Reviewers can always fully verify a summary's accuracy without ever needing access to the source document it was generated from." },
      { id: "C", text: "Source document access is never relevant to the quality of a human review step for a summarization tool." },
      { id: "D", text: "The only fix is to remove human review from this tool entirely, since no design improvement is possible." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Judging plausibility without the source document is a much weaker check than verifying faithfulness against it — this is a real design gap, since accuracy verification genuinely requires source access (B wrong). Source access is directly relevant to review quality here (C wrong), and the fix is adding source access to the review interface, not eliminating the review step (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Apply human-in-the-loop validation strategies'",
    difficulty: "medium",
  },
  {
    id: "arch-p-gsrm-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team wants to reduce reviewer workload for a high-volume classification system. They propose routing only cases where the model's confidence score falls below a defined threshold to human review, while auto-approving everything above it. What is the key design consideration for this approach to be sound?",
    options: [
      { id: "A", text: "The confidence threshold needs to be validated against actual error rates (i.e., confirm that above-threshold cases really do have an acceptably low error rate) rather than assumed to be a safe cutoff without evidence." },
      { id: "B", text: "Any confidence threshold, regardless of whether it has been validated against actual error rates, is always a safe basis for auto-approval." },
      { id: "C", text: "Confidence-based routing should never be used to reduce reviewer workload under any circumstances." },
      { id: "D", text: "The choice of confidence threshold has no bearing on the real-world error rate of auto-approved cases." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Confidence-based routing is a reasonable way to focus human attention, but only if the threshold is actually validated against real error rates rather than assumed safe — an unvalidated threshold (B) risks auto-approving a meaningful share of actual errors. This is a legitimate technique when properly validated, not one to avoid altogether (C wrong), and threshold choice directly determines the error profile of what gets auto-approved (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Apply human-in-the-loop validation strategies'",
    difficulty: "hard",
  },
  {
    id: "arch-p-gsrm-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A team building a Claude-powered feature for EU customers is storing user conversation data indefinitely with no defined retention policy or mechanism for users to request deletion. What compliance gap does this create?",
    options: [
      { id: "A", text: "This likely conflicts with GDPR's data minimization and right-to-erasure principles; the system needs a defined retention policy and a mechanism to honor deletion requests to address this compliance gap." },
      { id: "B", text: "There is no compliance concern; GDPR imposes no requirements around data retention or deletion for conversational AI systems." },
      { id: "C", text: "The only fix is to stop storing any conversation data of any kind, for any purpose, indefinitely into the future." },
      { id: "D", text: "Data retention policy has no bearing on compliance with data protection regulations." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Indefinite retention with no deletion mechanism runs against GDPR's data minimization and right-to-erasure principles — this is a real, identifiable compliance gap, not a non-issue (B wrong). The fix is a defined retention policy and deletion mechanism, not necessarily eliminating all data storage (C overstates the fix), and retention policy is directly central to data-protection compliance (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-gsrm-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A healthcare organization wants to send patient records to a third-party LLM API for summarization without first confirming a Business Associate Agreement (BAA) or equivalent HIPAA-compliant data handling arrangement is in place with the provider. What is the compliance risk?",
    options: [
      { id: "A", text: "Transmitting protected health information (PHI) to a third party without an appropriate HIPAA-compliant agreement in place risks a direct compliance violation; the architecture needs to confirm the necessary agreement and data-handling guarantees before PHI ever reaches the API." },
      { id: "B", text: "HIPAA compliance is never relevant to how an application chooses to integrate with a third-party API provider." },
      { id: "C", text: "The only way to comply with HIPAA is to avoid using any LLM-based summarization for any healthcare use case whatsoever." },
      { id: "D", text: "PHI can always be freely sent to any third-party service with no compliance consideration required." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Sending PHI to a third party without the appropriate HIPAA-compliant agreement is a direct compliance risk — confirming the right agreement and data-handling guarantees first is the necessary architectural step. HIPAA is very much relevant to this kind of integration choice (B wrong), avoiding LLM-based summarization for healthcare entirely (C) is a disproportionate response when proper agreements can address the requirement, and PHI cannot be sent freely without such compliance consideration (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-gsrm-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "scenario-multi-response",
    stem:
      "Which two are legitimate compliance considerations an architect should raise when designing a system that will process regulated data (e.g., health, financial, or government data)? (Select 2)",
    options: [
      { id: "A", text: "Whether the relevant data-handling agreements (e.g., a BAA for HIPAA, appropriate data processing terms for GDPR) are in place with any third-party provider involved." },
      { id: "B", text: "Whether the system's data retention, access controls, and deletion mechanisms align with the specific regulation's requirements." },
      { id: "C", text: "Whether the marketing team likes the visual design of the compliance documentation." },
      { id: "D", text: "Whether compliance can be addressed entirely after launch, with no consideration during the architecture phase." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Confirming the right data-handling agreements (A) and aligning retention/access/deletion with the regulation's actual requirements (B) are both substantive, necessary compliance considerations. Documentation aesthetics (C) is irrelevant to compliance, and deferring all compliance consideration until after launch (D) risks building an architecture that can't actually meet the requirement.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-gsrm-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A government-facing application is being evaluated for FedRAMP-relevant considerations. The architect notes that the current deployment environment and data-handling practices were designed with no reference to FedRAMP's control requirements. What should this prompt?",
    options: [
      { id: "A", text: "A gap assessment against the relevant FedRAMP control baseline (or equivalent authorization requirements) before proceeding, since an architecture designed without reference to a required compliance framework is unlikely to satisfy it by coincidence." },
      { id: "B", text: "Nothing further is needed; any architecture is automatically FedRAMP-compliant regardless of whether it was designed with FedRAMP's requirements in mind." },
      { id: "C", text: "The only appropriate response is to abandon the government-facing use case entirely rather than pursue a compliance gap assessment." },
      { id: "D", text: "FedRAMP requirements have no bearing on deployment environment or data-handling design choices." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "An architecture built with no reference to a required compliance framework needs a deliberate gap assessment against that framework's actual controls — compliance isn't automatic just because a system happens to work (B wrong). Abandoning the use case outright (C) is a disproportionate response before even assessing the actual gap, and FedRAMP requirements are directly relevant to deployment and data-handling design (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)'",
    difficulty: "hard",
  },
  {
    id: "arch-p-gsrm-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A team assumes that because their LLM provider states general compliance certifications (e.g., SOC 2), their own application built on top of that provider is automatically compliant with every regulation relevant to their specific use case (e.g., GDPR, HIPAA). Why is this assumption incomplete?",
    options: [
      { id: "A", text: "A provider's platform-level certifications address the provider's own infrastructure and practices, but the application built on top still needs its own compliance design (data handling, consent, retention, access controls) specific to its use case and applicable regulations." },
      { id: "B", text: "A provider's compliance certifications automatically extend to cover every possible application built on top of that provider, regardless of the application's own data handling practices." },
      { id: "C", text: "Provider-level certifications are entirely irrelevant to an application's own compliance posture." },
      { id: "D", text: "No application built on a compliant provider ever needs to consider its own compliance requirements separately." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Provider-level certifications cover the provider's own infrastructure, not the application's own data handling, consent, and retention design — compliance responsibility is shared, not automatically inherited (B, D both wrong). Provider certifications are still relevant context, not irrelevant (C wrong), but they don't substitute for the application's own compliance design.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-gsrm-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A compliance officer asks the architect whether a proposed Claude-powered feature that processes EU citizens' personal data requires a Data Protection Impact Assessment (DPIA). The architect is unsure how to approach this question. What is the appropriate first step?",
    options: [
      { id: "A", text: "Assess the actual nature, scope, and risk of the specific processing activity against GDPR's DPIA-triggering criteria (e.g., large-scale processing, automated decision-making with legal effects), rather than assuming a DPIA is or isn't needed by default." },
      { id: "B", text: "Assume a DPIA is never required for any feature that uses an LLM, regardless of what personal data it processes or how." },
      { id: "C", text: "Assume a DPIA is always required for every feature, regardless of the actual scope or risk of the specific processing activity." },
      { id: "D", text: "Skip any assessment and let the compliance officer make the determination with no input on the technical details of the processing." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Evaluating the actual processing activity against GDPR's specific DPIA-triggering criteria is the sound, evidence-based approach — assuming a categorical answer either way (B, C) skips this necessary evaluation, and withholding the technical details the compliance officer needs to make a good determination (D) doesn't serve the actual goal of an accurate compliance assessment.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)'",
    difficulty: "hard",
  },
  {
    id: "arch-p-gsrm-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "A resume-screening tool built on Claude is found to rank candidates from certain universities systematically lower, not because of relevant qualifications but because of patterns in its training or prompting that correlate with demographic factors. What ethical AI concern does this illustrate?",
    options: [
      { id: "A", text: "Bias and fairness — the system is producing systematically unequal outcomes correlated with factors that shouldn't drive the decision; this needs to be identified and mitigated (e.g., through evaluation across demographic slices and prompt/process redesign), not left unaddressed." },
      { id: "B", text: "There is no ethical concern here, since any pattern the model learns during training or exhibits during use is automatically fair and appropriate to act on." },
      { id: "C", text: "This is purely a technical accuracy issue with no ethical dimension at all." },
      { id: "D", text: "Bias in an LLM-based system can never be identified or mitigated through any evaluation or design change." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Systematically unequal outcomes correlated with factors unrelated to actual qualification is a textbook bias/fairness concern requiring active identification and mitigation — model-learned patterns aren't automatically fair just because the model produced them (B wrong). This has a clear ethical dimension beyond pure technical accuracy (C wrong), and bias is identifiable and mitigable through deliberate evaluation and redesign (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Address ethical AI considerations (bias, fairness, transparency)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-gsrm-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "A customer-facing product uses Claude to generate personalized recommendations, but the UI gives users no indication that an AI system is involved in generating the content they're seeing. What transparency concern does this raise?",
    options: [
      { id: "A", text: "Users generally have a legitimate interest in knowing when they're interacting with AI-generated content, especially where it could influence a decision; disclosing AI involvement supports informed trust and is a core transparency practice." },
      { id: "B", text: "Transparency about AI involvement is never relevant to a customer-facing product, regardless of how the content is used or what decisions it might influence." },
      { id: "C", text: "The only way to address this concern is to stop using AI to generate any content in the product." },
      { id: "D", text: "Whether users know they're interacting with AI-generated content has no bearing on their ability to trust or evaluate that content appropriately." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Disclosing AI involvement is a core transparency practice that supports informed user trust, especially where the content could influence a decision — this isn't irrelevant to a customer-facing product (B wrong). The fix is disclosure, not eliminating AI use altogether (C overstates the fix), and awareness of AI involvement does affect how users appropriately evaluate content (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Address ethical AI considerations (bias, fairness, transparency)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-gsrm-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "scenario-multi-response",
    stem:
      "Which two practices support addressing bias, fairness, and transparency concerns in a Claude-powered system? (Select 2)",
    options: [
      { id: "A", text: "Evaluate system outputs across relevant demographic or contextual slices to check for systematically unequal outcomes, not just an aggregate quality metric." },
      { id: "B", text: "Disclose to users when they are interacting with AI-generated content, particularly where it could meaningfully influence a decision." },
      { id: "C", text: "Assume that because the model wasn't intentionally designed to be biased, no bias evaluation is necessary." },
      { id: "D", text: "Avoid any disclosure of AI involvement, since transparency is never relevant to user trust." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Slice-level evaluation for unequal outcomes (A) and disclosure of AI involvement (B) are both substantive practices for addressing bias/fairness/transparency. Assuming absence of intent guarantees absence of bias (C) is a flawed assumption — bias can emerge unintentionally — and avoiding disclosure entirely (D) undermines a legitimate transparency interest.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Address ethical AI considerations (bias, fairness, transparency)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-gsrm-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "A team evaluates their hiring-assistant system's fairness only on aggregate accuracy across all candidates combined, without breaking results down by any demographic dimension. The aggregate number looks strong. What limitation does this evaluation approach have?",
    options: [
      { id: "A", text: "An aggregate metric can mask a fairness problem concentrated in a specific subgroup, even while the overall number looks strong; fairness evaluation needs to include slice-level analysis across relevant dimensions, not rely on the aggregate alone." },
      { id: "B", text: "An aggregate accuracy metric is always sufficient to detect any fairness issue that might exist, without any need for further breakdown." },
      { id: "C", text: "Fairness evaluation should never involve any breakdown by demographic or contextual dimension under any circumstances." },
      { id: "D", text: "The way fairness is evaluated has no bearing on whether a real disparity is actually detected." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A strong aggregate number can hide a real disparity concentrated in one subgroup — this is exactly why fairness evaluation needs slice-level analysis, not just an aggregate. The aggregate alone isn't sufficient to catch this (B wrong), slice-level breakdown is precisely the recommended practice, not something to avoid (C wrong), and evaluation approach directly determines whether a disparity is detected (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Address ethical AI considerations (bias, fairness, transparency)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-gsrm-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "A team building an AI-assisted content-moderation appeals process is asked to explain why a particular piece of content was flagged, but the system provides no reasoning or basis for its decision — only a binary outcome. What ethical AI gap does this represent?",
    options: [
      { id: "A", text: "A transparency/explainability gap — users subject to a consequential automated decision generally benefit from some understandable basis for that decision; designing the system to surface a rationale (not just a binary outcome) supports accountability and meaningful appeal." },
      { id: "B", text: "There is no gap; providing a binary outcome with no explanation is always fully sufficient for any consequential automated decision." },
      { id: "C", text: "Explainability is never relevant to content-moderation systems specifically, even though it might matter elsewhere." },
      { id: "D", text: "The only fix is to remove the appeals process entirely, since no design change could improve explainability here." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A consequential automated decision with no accompanying rationale is a real explainability/transparency gap — surfacing some understandable basis supports accountability and a meaningful appeal process. A bare binary outcome isn't sufficient here (B wrong), explainability is very much relevant to content moderation given its consequences for users (C wrong), and the fix is improving the system's explanation capability, not removing the appeals process (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 5 — 'Address ethical AI considerations (bias, fairness, transparency)'",
    difficulty: "hard",
  },
];
