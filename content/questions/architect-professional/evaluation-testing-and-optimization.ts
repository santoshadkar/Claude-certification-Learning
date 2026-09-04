import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Evaluation, Testing & Optimization" as const;
const CERT = "architect-professional" as const;
const O1 = "Define evaluation metrics (accuracy, latency, cost, safety, security)" as const;
const O2 = "Design evaluation datasets and test frameworks using mixed methodologies" as const;
const O3 = "Conduct A/B testing and iterative improvements" as const;
const O4 = "Diagnose system issues (prompt failure, hallucinations, model mismatch)" as const;
const O5 = "Optimize token usage, latency, and cost-performance trade-offs" as const;
const O6 = "Monitor system performance using logging and observability tools" as const;

export const questions: QuestionInput[] = [
  {
    id: "arch-p-eto-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A team evaluating a new customer-support agent only tracks whether responses are factually accurate. Leadership later discovers the agent has been giving accurate but unsafe advice (e.g., suggesting workarounds that violate company policy) in a meaningful share of conversations. What does this reveal about the evaluation design?",
    options: [
      { id: "A", text: "Accuracy alone is an incomplete evaluation metric set — safety needs to be defined and measured as its own dimension alongside accuracy, latency, cost, and security, since a response can be accurate while still being unsafe." },
      { id: "B", text: "Accuracy is always a sufficient proxy for every other quality dimension, including safety, so no additional metrics were needed." },
      { id: "C", text: "Safety can only be evaluated after a system has been in production for at least one year." },
      { id: "D", text: "Evaluation metrics have no bearing on whether a safety problem like this can be caught before it reaches customers." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Accuracy and safety are distinct dimensions — a technically correct answer can still be unsafe, so a complete evaluation framework defines and tracks safety separately. Treating accuracy as a universal proxy (B) is exactly the gap this scenario exposes, safety evaluation doesn't require a year of production data before it can start (C wrong), and metric design directly affects whether this kind of issue is caught early (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 (Evaluation, Testing & Optimization) — 'Define evaluation metrics (accuracy, latency, cost, safety, security)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-eto-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A team defines their evaluation metrics solely as 'average cost per request' and 'average latency,' with no accuracy or safety metric. What is the primary risk of this metric set?",
    options: [
      { id: "A", text: "Optimizing only for cost and latency, with no accuracy or safety metric to hold the line, risks silently degrading response quality or introducing unsafe behavior in pursuit of a faster, cheaper system." },
      { id: "B", text: "Cost and latency are the only metrics that ever matter for any production AI system, regardless of the system's purpose." },
      { id: "C", text: "There is no risk, since cost and latency improvements always come at zero cost to any other quality dimension." },
      { id: "D", text: "A metric set with only two dimensions can never be considered incomplete regardless of what those two dimensions are." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Optimizing exclusively for cost/latency without any accuracy or safety guardrail risks trading away quality or safety for speed and cheapness — those two dimensions aren't universally sufficient on their own (B wrong), cost/latency gains frequently do come at a quality cost when unconstrained (C wrong), and a metric set's completeness depends on which dimensions actually matter for the system, which is exactly the issue here (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Define evaluation metrics (accuracy, latency, cost, safety, security)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-eto-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "scenario-multi-response",
    stem:
      "Which two metric definitions reflect a well-rounded evaluation approach for a production Claude-powered system? (Select 2)",
    options: [
      { id: "A", text: "Track accuracy against a labeled evaluation set alongside a security metric (e.g., resistance to prompt injection or data leakage)." },
      { id: "B", text: "Track cost-per-request and P95 latency alongside accuracy, rather than tracking cost or latency alone." },
      { id: "C", text: "Track only whichever single metric is fastest to compute, regardless of whether it captures the system's actual risk profile." },
      { id: "D", text: "Track a metric once at launch and never revisit it regardless of how the system or its usage evolves." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Pairing accuracy with a security dimension (A), and pairing cost/latency with accuracy rather than in isolation (B), both reflect a well-rounded, multi-dimensional metric set. Choosing metrics purely for computational convenience regardless of risk relevance (C) and never revisiting metrics as the system evolves (D) both undermine a sound evaluation approach.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Define evaluation metrics (accuracy, latency, cost, safety, security)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-eto-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A regulated financial-services application defines its evaluation metrics as accuracy and latency only, omitting any security metric, on the reasoning that 'security is IT's job, not the AI team's.' What is the flaw in this reasoning?",
    options: [
      { id: "A", text: "Security properties specific to the AI system (e.g., resistance to prompt injection, leakage of sensitive data through model outputs) are not fully covered by general IT security and need their own evaluation metrics owned by the team building the system." },
      { id: "B", text: "There is no flaw; general IT security controls always fully cover every AI-specific security risk with no gaps." },
      { id: "C", text: "Security metrics are never relevant to any AI system regardless of the regulatory context." },
      { id: "D", text: "Metric ownership between teams has no bearing on whether a security risk actually gets evaluated." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "AI-specific security risks like prompt injection or output-based data leakage fall outside what general IT security controls typically cover, so the AI system's own evaluation needs to include them — assuming full coverage from IT alone (B) is the flawed reasoning being tested, security metrics are especially relevant in a regulated context like this (C wrong), and unclear ownership is exactly why a risk can go unevaluated (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Define evaluation metrics (accuracy, latency, cost, safety, security)'",
    difficulty: "hard",
  },
  {
    id: "arch-p-eto-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "An architect is asked to define a single, universal 'quality score' metric that will apply identically to every Claude-powered system the company builds, from a legal-document summarizer to a creative marketing-copy generator. What is the concern with this approach?",
    options: [
      { id: "A", text: "A single universal metric can't capture what matters for such different use cases — the summarizer likely needs strict factual accuracy while the creative tool needs different quality dimensions (e.g., tone, originality); metrics should be tailored to each system's actual risk and quality profile." },
      { id: "B", text: "There is no concern; a single universal metric is always equally meaningful across every possible use case, regardless of how different they are." },
      { id: "C", text: "Metric definition should never take the specific use case into account under any circumstances." },
      { id: "D", text: "The only fix is to stop evaluating either system at all." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Different use cases carry genuinely different quality and risk profiles, so a one-size-fits-all metric is likely to be a poor fit for at least one of them — a universal metric isn't equally meaningful everywhere (B wrong), use-case context is exactly what should inform metric design (C wrong), and abandoning evaluation entirely (D) is a disproportionate response to a tailoring problem.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Define evaluation metrics (accuracy, latency, cost, safety, security)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-eto-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A team building an evaluation dataset for a legal-document classifier relies exclusively on automated LLM-graded scoring, with no human review of any sampled outputs at any point. What is the concern with a purely automated approach here?",
    options: [
      { id: "A", text: "An automated grader can share blind spots with the model being evaluated or misjudge nuanced, high-stakes legal distinctions; mixing in human review of a meaningful sample provides a check that pure automation lacks." },
      { id: "B", text: "There is no concern; automated LLM-graded scoring is always exactly as reliable as human review for any domain, including nuanced legal judgment." },
      { id: "C", text: "Human review is never useful for any evaluation framework once automated grading exists." },
      { id: "D", text: "The evaluation methodology used has no bearing on whether nuanced errors are caught." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Mixed methodologies — combining automated grading with human review — catch nuanced errors that a purely automated approach might share or miss, especially in a high-stakes, judgment-heavy domain like legal classification. Automated grading isn't unconditionally as reliable as human judgment here (B wrong), human review still adds value alongside automation (C wrong), and methodology choice directly affects error-catching (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Design evaluation datasets and test frameworks using mixed methodologies'",
    difficulty: "easy",
  },
  {
    id: "arch-p-eto-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "An evaluation dataset for a customer-service agent is built entirely from easy, common questions the team already knows the agent handles well, with no edge cases or adversarial inputs. What is the flaw in this dataset design?",
    options: [
      { id: "A", text: "A dataset skewed toward easy, already-known-good cases will overstate the system's real-world reliability; a sound evaluation dataset needs to include edge cases, ambiguous inputs, and adversarial examples to reveal actual failure modes." },
      { id: "B", text: "There is no flaw; evaluating only on cases already known to work is always sufficient to certify a system as production-ready." },
      { id: "C", text: "Edge cases and adversarial inputs should never be included in any evaluation dataset regardless of the system's purpose." },
      { id: "D", text: "Dataset composition has no bearing on how representative an evaluation result is of real-world performance." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A dataset composed only of easy, already-passing cases will produce an inflated, unrepresentative picture of reliability — a sound dataset deliberately includes edge cases and adversarial examples to surface real failure modes. Evaluating only on known-good cases isn't sufficient for production readiness (B wrong), edge cases are exactly what should be included, not excluded (C wrong), and dataset composition directly determines representativeness (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Design evaluation datasets and test frameworks using mixed methodologies'",
    difficulty: "medium",
  },
  {
    id: "arch-p-eto-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "scenario-multi-response",
    stem:
      "Which two practices strengthen an evaluation dataset and test framework for a production system? (Select 2)",
    options: [
      { id: "A", text: "Include a representative mix of common cases, edge cases, and adversarial inputs, not only cases already known to succeed." },
      { id: "B", text: "Combine automated scoring with periodic human review of a meaningful sample, especially for nuanced or high-stakes judgments." },
      { id: "C", text: "Build the dataset once at project kickoff and never update it, regardless of how real-world usage patterns evolve." },
      { id: "D", text: "Use only automated LLM-graded scoring for every dimension, including highly nuanced or high-stakes judgments, with no human check at any point." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "A representative mix including edge/adversarial cases (A) and mixed automated/human methodology (B) both strengthen an evaluation framework. A static, never-updated dataset (C) and pure automation with no human check on nuanced judgments (D) both weaken the framework's ability to catch real issues.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Design evaluation datasets and test frameworks using mixed methodologies'",
    difficulty: "easy",
  },
  {
    id: "arch-p-eto-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A team's evaluation dataset was built from production traffic collected two years ago, before a major product redesign changed the kinds of questions customers ask. What issue does this raise for the current evaluation framework?",
    options: [
      { id: "A", text: "A stale dataset no longer reflects current real-world usage patterns, so evaluation results based on it may not predict how the system actually performs on today's traffic; the dataset needs to be refreshed to stay representative." },
      { id: "B", text: "Dataset age never affects how representative an evaluation result is, regardless of how much the underlying usage pattern has changed." },
      { id: "C", text: "The only fix is to stop using any evaluation dataset going forward." },
      { id: "D", text: "A two-year-old dataset is always exactly as representative as a freshly collected one." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "An evaluation dataset needs to track how real usage actually looks — a stale dataset from before a major product change risks giving a misleading picture of current performance, so refreshing it is the sound fix. Dataset age does affect representativeness when usage patterns shift (B, D both wrong), and abandoning evaluation entirely (C) is a disproportionate response to a staleness problem.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Design evaluation datasets and test frameworks using mixed methodologies'",
    difficulty: "medium",
  },
  {
    id: "arch-p-eto-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team wants to determine whether a revised system prompt genuinely improves response quality before rolling it out to every user. What testing approach best supports this decision?",
    options: [
      { id: "A", text: "A/B testing — routing a portion of real traffic to the revised prompt and comparing outcomes against the existing prompt on the same metrics, rather than rolling the change out to everyone based on intuition alone." },
      { id: "B", text: "Roll the revised prompt out to 100% of users immediately, since a revised prompt should always be assumed to be an improvement without any comparative testing." },
      { id: "C", text: "Never test prompt revisions against the current version, since any change is always safe to ship directly to production without comparison." },
      { id: "D", text: "A/B testing is never an appropriate method for evaluating prompt changes in a production system." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A/B testing a revised prompt against the existing one on real traffic is exactly the evidence-based way to confirm an improvement before a full rollout — shipping directly to 100% on the assumption of improvement (B) skips this validation, so does shipping with no comparison at all (C), and A/B testing is a well-suited method for exactly this kind of prompt-change decision (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Conduct A/B testing and iterative improvements'",
    difficulty: "easy",
  },
  {
    id: "arch-p-eto-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "An A/B test comparing two prompt versions shows the new version performing 1.2% better on a sample of only 40 conversations. The team declares the new version the clear winner and rolls it out fully. What is the concern with this conclusion?",
    options: [
      { id: "A", text: "A 1.2% difference on a sample of only 40 conversations is very likely within noise rather than a statistically meaningful signal; declaring a clear winner from such a small sample and small effect size risks a decision that doesn't actually hold up." },
      { id: "B", text: "There is no concern; any observed difference in an A/B test, regardless of sample size or magnitude, should always be treated as a statistically meaningful result." },
      { id: "C", text: "Sample size never affects whether an observed difference in an A/B test is meaningful." },
      { id: "D", text: "The only valid fix is to abandon A/B testing entirely as a methodology." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A small effect size on a small sample is a classic case of a result that may just be noise — declaring a winner without adequate sample size or statistical consideration risks an unfounded conclusion. Any observed difference isn't automatically meaningful regardless of sample size (B, C both wrong), and the fix is better statistical rigor, not abandoning A/B testing altogether (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Conduct A/B testing and iterative improvements'",
    difficulty: "hard",
  },
  {
    id: "arch-p-eto-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "scenario-multi-response",
    stem:
      "Which two practices support a sound, iterative A/B testing process for improving a Claude-powered system? (Select 2)",
    options: [
      { id: "A", text: "Test one meaningful change at a time where feasible, so that an observed effect can be attributed to that specific change." },
      { id: "B", text: "Ensure the test runs long enough and on a large enough sample to distinguish a real effect from noise before drawing conclusions." },
      { id: "C", text: "Change multiple unrelated variables simultaneously in the same test, making it impossible to attribute any observed difference to a specific cause." },
      { id: "D", text: "Declare a winner as soon as any numeric difference appears, regardless of sample size or statistical significance." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Isolating one change at a time (A) and ensuring adequate sample size/duration (B) are both sound A/B testing practices that support valid conclusions. Changing multiple variables at once (C) and declaring a winner from any numeric difference regardless of significance (D) both undermine the validity of the test's conclusions.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Conduct A/B testing and iterative improvements'",
    difficulty: "easy",
  },
  {
    id: "arch-p-eto-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "After a successful A/B test rolls out a prompt improvement, the team treats the system as 'done' and stops any further evaluation or iteration. Six months later, quality has quietly degraded as usage patterns shifted. What does this illustrate about iterative improvement?",
    options: [
      { id: "A", text: "Improvement is an ongoing process, not a one-time event — usage patterns and requirements evolve, so periodic re-evaluation and iteration are needed even after a successful rollout, not just at launch." },
      { id: "B", text: "Once an A/B test declares a winner, no further evaluation or iteration is ever needed for the life of the system." },
      { id: "C", text: "Quality degradation over time is never related to how a system is evaluated or iterated on after launch." },
      { id: "D", text: "The only fix after a successful rollout is to run the exact same A/B test again with no other changes." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Treating a successful test result as a permanent, one-time conclusion ignores that usage patterns and requirements shift over time — ongoing, periodic re-evaluation is what iterative improvement actually requires. Assuming no further work is ever needed (B) is exactly the mistake in this scenario, evaluation/iteration practice does affect long-term quality (C wrong), and re-running the identical test (D) doesn't address a changed usage pattern the way fresh evaluation would.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Conduct A/B testing and iterative improvements'",
    difficulty: "medium",
  },
  {
    id: "arch-p-eto-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "An architect wants to A/B test a change that swaps the underlying Claude model tier used by a production feature, alongside also rewriting the system prompt and changing the retrieval strategy, all in a single test variant. Why is this a weaker test design than isolating one change at a time?",
    options: [
      { id: "A", text: "Bundling three independent changes into one variant makes it impossible to tell which change (or combination) actually drove any observed effect, undermining the ability to make a well-justified decision about any one of them." },
      { id: "B", text: "Bundling multiple changes into one test variant is always the more rigorous and informative approach compared to isolating a single change." },
      { id: "C", text: "It is never possible to test a model tier change using an A/B testing methodology." },
      { id: "D", text: "The number of changes bundled into a single test variant has no bearing on how interpretable the test's results are." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Bundling multiple independent changes into one variant confounds attribution — you can't tell which change (or interaction between changes) caused an observed effect, which is exactly why isolating variables is generally preferred. Bundling isn't more rigorous than isolation (B wrong), model tier changes are a perfectly valid thing to A/B test on their own (C wrong), and the number of bundled changes directly affects interpretability (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Conduct A/B testing and iterative improvements'",
    difficulty: "medium",
  },
  {
    id: "arch-p-eto-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A production agent confidently states a specific statistic that does not appear anywhere in its provided context or knowledge sources, and the statistic turns out to be fabricated. What class of issue is this, and what diagnostic step should follow?",
    options: [
      { id: "A", text: "This is a hallucination — the model generated confident but ungrounded content; diagnosis should check whether the prompt sufficiently instructs the model to only state what's grounded in provided context and to acknowledge uncertainty when information isn't available." },
      { id: "B", text: "This is a model mismatch issue, unrelated to hallucination, that can only be fixed by switching to a completely different model provider." },
      { id: "C", text: "This is expected, correct behavior with nothing to diagnose or fix." },
      { id: "D", text: "Hallucinations can never be reduced through any change to prompting or system design." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Confidently generated, ungrounded content is the textbook definition of a hallucination, and the sound diagnostic path checks whether prompting adequately constrains the model to grounded claims and encourages acknowledging uncertainty. This isn't simply a model-mismatch issue requiring a provider switch (B wrong), it isn't correct behavior to leave unaddressed (C wrong), and hallucination rates are meaningfully affected by prompt and system design choices (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Diagnose system issues (prompt failure, hallucinations, model mismatch)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-eto-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A system that previously performed well on complex multi-step reasoning tasks starts failing after the team switches from a higher-capability model tier to a smaller, faster tier purely to cut cost. What class of issue does this represent?",
    options: [
      { id: "A", text: "A model mismatch — the smaller tier's capability profile isn't sufficient for the task's actual reasoning complexity; the fix is to match model tier to task complexity rather than choosing solely on cost." },
      { id: "B", text: "This is purely a prompt-failure issue with no relationship to which model tier is being used." },
      { id: "C", text: "Model tier selection has no bearing on reasoning task performance regardless of task complexity." },
      { id: "D", text: "The only possible fix is to abandon the task entirely rather than reconsider model tier." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Degraded performance after downgrading to a smaller model tier for a complex reasoning task is a classic model-mismatch pattern — the fix is aligning tier choice to task complexity, not treating cost as the only input. This isn't purely a prompt issue independent of model choice (B wrong), model tier clearly affects reasoning performance (C wrong), and abandoning the task (D) is a disproportionate response to a tier-matching problem.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Diagnose system issues (prompt failure, hallucinations, model mismatch)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-eto-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "scenario-multi-response",
    stem:
      "Which two observations point toward a prompt-failure diagnosis rather than a hallucination or model-mismatch diagnosis? (Select 2)",
    options: [
      { id: "A", text: "The system prompt's instructions are ambiguous or self-contradictory about what format the output should take, and outputs vary inconsistently as a result." },
      { id: "B", text: "Critical task instructions are buried deep in a long prompt in a way that makes them easy for the model to underweight relative to earlier content." },
      { id: "C", text: "The model states a specific fact that is not present anywhere in its provided context or sources." },
      { id: "D", text: "A task requiring deep multi-step reasoning is failing only after switching to a much smaller, faster model tier." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Ambiguous/contradictory instructions (A) and critical instructions being buried or underweighted in a long prompt (B) are classic prompt-failure signatures. A fact stated with no grounding in context (C) points to hallucination, and failure only after a tier downgrade on a complex task (D) points to model mismatch rather than prompt failure.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Diagnose system issues (prompt failure, hallucinations, model mismatch)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-eto-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A team notices intermittent failures in a production system but can't tell whether the root cause is a prompt issue, a hallucination pattern, or a model-capability mismatch, because they have no logs of the actual prompts, context, or outputs involved in the failing cases. What is the first diagnostic step?",
    options: [
      { id: "A", text: "Establish sufficient logging of prompts, context, and outputs for failing cases first, since diagnosing the specific root cause (prompt failure vs. hallucination vs. model mismatch) is not reliably possible without visibility into what actually happened." },
      { id: "B", text: "Guess at a root cause and make a large architectural change immediately, without first gathering any diagnostic evidence." },
      { id: "C", text: "Diagnosis is impossible in any case, so no productive next step exists regardless of what logging is added." },
      { id: "D", text: "Skip diagnosis entirely and switch to the largest available model tier as the default fix for any and all system issues." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Without logs of the actual prompts, context, and outputs, there's no evidence base to distinguish between these very different root causes, so establishing that visibility is the necessary first step. Guessing and making a large change without evidence (B) risks fixing the wrong thing, diagnosis is very much possible once the right logging exists (C wrong), and defaulting to the largest model tier (D) isn't a substitute for actually diagnosing the issue.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Diagnose system issues (prompt failure, hallucinations, model mismatch)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-eto-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A retrieval-augmented system hallucinates a policy detail even though the correct information exists in the connected knowledge base. Investigation shows the retrieval step is not returning the relevant document for that query. What does this suggest about where the fix belongs?",
    options: [
      { id: "A", text: "The root cause is a retrieval gap, not a pure model hallucination problem in isolation — improving the retrieval/query-matching step so the correct document is actually surfaced addresses the underlying cause more directly than only adjusting the generation prompt." },
      { id: "B", text: "The only possible fix is to instruct the model more forcefully to 'not hallucinate,' without examining the retrieval step at all." },
      { id: "C", text: "Retrieval quality has no bearing on hallucination rates in a RAG system." },
      { id: "D", text: "This can never be diagnosed or fixed under any circumstances." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "When the correct information exists but isn't being retrieved, the hallucination is downstream of a retrieval gap — fixing retrieval addresses the actual root cause more directly than only tweaking the generation-side prompt. A prompt-only instruction fix (B) doesn't address why the relevant document wasn't surfaced, retrieval quality is directly tied to hallucination risk in RAG systems (C wrong), and this is a diagnosable, fixable issue (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Diagnose system issues (prompt failure, hallucinations, model mismatch)'",
    difficulty: "hard",
  },
  {
    id: "arch-p-eto-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "A system repeats the same lengthy set of static instructions and reference material in the system prompt on every single request, incurring significant token cost and latency each time. What optimization directly addresses this?",
    options: [
      { id: "A", text: "Prompt caching for the static, repeated portion of the prompt, so the unchanging content isn't fully reprocessed at full cost and latency on every request." },
      { id: "B", text: "There is no available optimization for this pattern; static, repeated prompt content must always be processed at full cost on every request." },
      { id: "C", text: "The only fix is to remove all reference material from the prompt entirely, regardless of whether the task still needs it." },
      { id: "D", text: "Token usage and latency are entirely unrelated to how much static content is repeated across requests." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Prompt caching is designed for exactly this pattern — static, repeated content that doesn't need to be reprocessed at full cost on every call. This optimization is available and directly applicable (B wrong), removing needed reference material entirely (C) sacrifices functionality rather than optimizing efficiently, and repeated static content is directly related to token/latency cost (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Optimize token usage, latency, and cost-performance trade-offs'",
    difficulty: "easy",
  },
  {
    id: "arch-p-eto-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "A team wants to cut costs by switching every feature in their product to the smallest available model tier, regardless of each feature's actual complexity or accuracy requirements. What is the concern with this blanket approach?",
    options: [
      { id: "A", text: "A blanket downgrade ignores that different features have different complexity and accuracy needs — features requiring stronger reasoning may see unacceptable quality loss, so tier selection should be matched per-feature rather than applied uniformly for cost reasons alone." },
      { id: "B", text: "There is no concern; every feature in a product always has identical complexity and accuracy requirements regardless of what it does." },
      { id: "C", text: "Cost is never a legitimate factor to weigh when selecting a model tier for any feature." },
      { id: "D", text: "Model tier choice has no bearing on the quality of output for any feature, regardless of its complexity." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A uniform downgrade ignores real differences in complexity and accuracy needs across features, risking unacceptable quality loss on the ones that actually need a stronger tier — features don't all have identical requirements (B wrong), cost is a legitimate factor but shouldn't be the only one (C wrong), and tier choice does directly affect output quality relative to task complexity (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Optimize token usage, latency, and cost-performance trade-offs'",
    difficulty: "medium",
  },
  {
    id: "arch-p-eto-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "scenario-multi-response",
    stem:
      "Which two changes are legitimate ways to optimize cost, latency, or token usage without unnecessarily sacrificing quality? (Select 2)",
    options: [
      { id: "A", text: "Trim unnecessary or redundant content from a large system prompt while preserving the instructions and context that actually affect output quality." },
      { id: "B", text: "Route simpler, high-volume requests to a smaller/faster model tier while reserving a stronger tier for genuinely complex requests." },
      { id: "C", text: "Truncate retrieved context arbitrarily without regard to whether the truncated portion contains information the task actually needs." },
      { id: "D", text: "Apply the smallest available model tier uniformly to every feature regardless of that feature's actual complexity or accuracy requirements." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Trimming genuinely unnecessary prompt content (A) and routing by actual task complexity (B) both reduce cost/latency without indiscriminately sacrificing quality. Arbitrary truncation with no regard for what's needed (C) and a uniform tier downgrade regardless of per-feature requirements (D) both risk real quality loss.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Optimize token usage, latency, and cost-performance trade-offs'",
    difficulty: "easy",
  },
  {
    id: "arch-p-eto-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "A team reduces latency by truncating the amount of retrieved context passed to the model on every request, without checking whether the truncated portion ever contains information relevant to the query. Accuracy subsequently drops. What does this illustrate about cost-performance optimization?",
    options: [
      { id: "A", text: "Optimizations that reduce cost or latency without regard for their effect on the information the model actually needs can silently degrade accuracy; optimization decisions need to be evaluated against their impact on quality, not treated as free." },
      { id: "B", text: "Reducing context size always improves both latency and accuracy simultaneously, with no possible tradeoff between them." },
      { id: "C", text: "Accuracy and latency are entirely independent properties that can never be affected by the same optimization." },
      { id: "D", text: "The only fix is to stop optimizing for latency entirely, under any circumstances, for the life of the system." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This scenario illustrates that optimizations are not free — cutting context without regard for what's actually needed traded away accuracy for latency, which is exactly why optimization decisions should be evaluated against their quality impact. Latency reduction doesn't automatically improve accuracy too (B wrong), the two properties clearly can be linked by the same change (C wrong), and abandoning latency optimization altogether (D) overcorrects rather than fixing the actual truncation problem.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Optimize token usage, latency, and cost-performance trade-offs'",
    difficulty: "medium",
  },
  {
    id: "arch-p-eto-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "An architect is deciding between two configurations: one with lower per-request cost but occasional quality issues requiring manual rework, and one with higher per-request cost but consistently reliable output. What consideration should shape this decision beyond the raw per-request cost figures?",
    options: [
      { id: "A", text: "The total cost of ownership, including the downstream cost of manual rework, customer impact, or reputational risk from the cheaper option's quality issues, not just the raw per-request cost comparison." },
      { id: "B", text: "Only the raw per-request cost figure matters; any downstream cost from quality issues should never factor into this kind of decision." },
      { id: "C", text: "The two configurations should always be considered equivalent regardless of their actual reliability difference." },
      { id: "D", text: "Cost-performance tradeoffs of this kind never have any legitimate downstream consequences worth considering." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A sound cost-performance evaluation looks at total cost of ownership, including downstream rework and impact costs, not just the sticker-price per-request comparison — ignoring downstream cost entirely (B) misses real expenses, treating the two options as equivalent (C) ignores a genuine reliability difference, and this kind of tradeoff clearly can have significant downstream consequences (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Optimize token usage, latency, and cost-performance trade-offs'",
    difficulty: "hard",
  },
  {
    id: "arch-p-eto-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O6,
    type: "mcq",
    stem:
      "A production system logs only whether each request 'succeeded' or 'failed' at the HTTP level, with no visibility into the model's actual outputs, token usage, or latency breakdown per request. What limitation does this create for ongoing performance monitoring?",
    options: [
      { id: "A", text: "HTTP-level success/failure alone can't reveal quality regressions, cost drift, or latency bottlenecks within 'successful' requests; monitoring needs richer, application-level logging (outputs, token counts, per-stage latency) to actually track system performance over time." },
      { id: "B", text: "HTTP-level success/failure logging is always fully sufficient for tracking every dimension of system performance, including quality and cost." },
      { id: "C", text: "Logging detail has no bearing on what performance issues can be detected." },
      { id: "D", text: "The only fix is to stop logging anything at all, since partial logging is worse than no logging." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Coarse HTTP-level logging misses everything that matters for tracking quality, cost, and latency within 'successful' requests — richer, application-level logging is what actually supports performance monitoring. HTTP-level logging alone isn't sufficient for these other dimensions (B wrong), logging detail directly determines what can be detected (C wrong), and removing logging entirely (D) is the opposite of the needed fix.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Monitor system performance using logging and observability tools'",
    difficulty: "easy",
  },
  {
    id: "arch-p-eto-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O6,
    type: "mcq",
    stem:
      "A team's monitoring dashboard shows only current-moment snapshots of latency and cost, with no historical trend view. A gradual, multi-week latency creep goes unnoticed until customers complain. What monitoring gap does this illustrate?",
    options: [
      { id: "A", text: "Without historical trend tracking, a gradual regression that's invisible at any single snapshot can accumulate unnoticed; monitoring needs to track metrics over time, not just as a current-moment snapshot, to catch slow drifts." },
      { id: "B", text: "Snapshot-only monitoring is always sufficient to catch every kind of performance regression, including gradual ones." },
      { id: "C", text: "Gradual regressions can never be detected through any monitoring approach, regardless of design." },
      { id: "D", text: "Monitoring design has no bearing on how quickly a gradual regression like this is noticed." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A gradual multi-week creep is invisible in any single snapshot but shows up clearly in a trend view — this is exactly why monitoring needs historical tracking, not just current-moment values. Snapshot-only monitoring isn't sufficient for this kind of regression (B wrong), gradual regressions are detectable with the right monitoring design (C wrong), and monitoring design directly affects detection speed (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Monitor system performance using logging and observability tools'",
    difficulty: "medium",
  },
  {
    id: "arch-p-eto-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O6,
    type: "scenario-multi-response",
    stem:
      "Which two practices support effective ongoing performance monitoring for a Claude-powered production system? (Select 2)",
    options: [
      { id: "A", text: "Track key metrics (latency, cost, accuracy proxies) over time with historical trend visibility, not just current-moment snapshots." },
      { id: "B", text: "Log enough application-level detail (token usage, per-stage latency, sampled outputs) to diagnose issues beyond a simple pass/fail signal." },
      { id: "C", text: "Rely solely on customer complaints as the mechanism for discovering performance regressions." },
      { id: "D", text: "Log only the coarsest possible success/failure signal, since any additional logging detail is never useful for performance monitoring." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Historical trend tracking (A) and sufficiently detailed application-level logging (B) both support effective, proactive performance monitoring. Relying solely on customer complaints (C) is reactive rather than proactive, and logging only the coarsest signal (D) forecloses the diagnostic detail monitoring actually needs.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Monitor system performance using logging and observability tools'",
    difficulty: "easy",
  },
  {
    id: "arch-p-eto-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O6,
    type: "mcq",
    stem:
      "An architect sets up alerting that fires only when a metric crosses an absolute static threshold (e.g., latency > 5 seconds), with no consideration of normal variation across time of day or request type. The team is repeatedly paged for expected variation, and eventually starts ignoring alerts altogether. What does this illustrate?",
    options: [
      { id: "A", text: "Poorly-tuned alerting (too many false positives from normal variation) leads to alert fatigue, where genuine issues can be missed because the team has learned to disregard the noisy signal; alert thresholds need to account for expected variation to stay actionable." },
      { id: "B", text: "Alert threshold design has no bearing on whether a team responds appropriately to a genuine incident." },
      { id: "C", text: "The only fix is to remove all alerting from the system entirely." },
      { id: "D", text: "A static, context-blind threshold is always the most effective and appropriate alerting design for any metric or system." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Alert fatigue from a poorly-tuned, context-blind threshold is a real risk — the team ignoring alerts because most are false positives means a genuine issue could be missed, so thresholds need to account for expected variation. Threshold design does directly affect incident response (B wrong), removing alerting entirely (C) discards the value alerting can have when well-tuned, and a static threshold with no context isn't universally the most effective design (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 4 — 'Monitor system performance using logging and observability tools'",
    difficulty: "medium",
  },
];
