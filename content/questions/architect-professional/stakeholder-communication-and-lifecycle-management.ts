import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "arch-p-scl-001",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Conduct structured discovery and requirement gathering",
    type: "mcq",
    stem:
      "A stakeholder requests 'an AI chatbot for customer support' with no further detail. The architect immediately begins designing a solution based on this one-line request. What is the risk of skipping structured discovery?",
    options: [
      { id: "A", text: "A one-line request likely omits critical constraints (volume, latency needs, data sensitivity, escalation paths, success criteria); designing without structured discovery risks building a solution that misses the actual underlying need." },
      { id: "B", text: "There is no risk; a one-line stakeholder request always contains everything needed to design a correct solution." },
      { id: "C", text: "The specificity of an initial request has no bearing on the quality of the resulting architecture." },
      { id: "D", text: "Structured discovery is only useful for large enterprise projects and never adds value for a customer-support chatbot." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A vague initial request typically hides important constraints and success criteria that structured discovery would surface — skipping it risks a mismatched solution. The one-line request is very unlikely to be fully sufficient (B wrong), discovery is valuable regardless of project size (D wrong), and the completeness of the initial ask directly affects design quality when discovery is skipped (C wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 (Stakeholder Communication & Lifecycle Management) — 'Conduct structured discovery and requirement gathering'",
    difficulty: "easy",
  },
  {
    id: "arch-p-scl-002",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Conduct structured discovery and requirement gathering",
    type: "mcq",
    stem:
      "During discovery, a business stakeholder describes the desired outcome only in terms of a specific technology ('we want a RAG system'), without articulating the underlying business problem. What should the architect do?",
    options: [
      { id: "A", text: "Refuse to proceed with discovery at all once a stakeholder mentions any specific technology." },
      { id: "B", text: "The underlying business problem is irrelevant once a stakeholder has named a specific technical approach." },
      { id: "C", text: "Immediately build exactly what was named, since a stakeholder's technology preference is always the correct and complete specification of the actual need." },
      { id: "D", text: "Probe past the stated technology preference to understand the actual underlying business problem and success criteria, since a specific technical solution may or may not be the right fit once the real need is understood." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Stakeholders often anchor on a specific technology without having assessed whether it's actually the right fit — good discovery probes for the underlying business problem so the eventual solution (RAG or otherwise) is chosen because it fits the need, not just because it was named first. Building exactly what was named without this probing (C) risks a mismatch, refusing to proceed (A) is an overreaction, and the underlying problem remains highly relevant even after a technology is named (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Conduct structured discovery and requirement gathering'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-003",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Conduct structured discovery and requirement gathering",
    type: "scenario-multi-response",
    stem:
      "Which two questions are appropriate to raise during structured discovery for a new Claude-powered feature? (Select 2)",
    options: [
      { id: "A", text: "Which programming language does the architect personally enjoy using the most?" },
      { id: "B", text: "What is the stakeholder's astrological sign?" },
      { id: "C", text: "What does success look like for this feature, and how will it be measured?" },
      { id: "D", text: "What are the constraints around data sensitivity, expected volume, and latency tolerance?" },
    ],
    correctOptionIds: ["C","D"],
    selectCount: 2,
    explanation:
      "Success criteria and measurement (C) and concrete constraints like data sensitivity, volume, and latency (D) are exactly the substantive discovery questions that shape a sound architecture. The architect's personal technology preferences (A) and irrelevant personal details (B) have no bearing on discovery.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Conduct structured discovery and requirement gathering'",
    difficulty: "easy",
  },
  {
    id: "arch-p-scl-004",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Conduct structured discovery and requirement gathering",
    type: "mcq",
    stem:
      "An architect conducts discovery interviews with only the engineering team building a new feature, without speaking to the customer-support team who will handle escalations from it or the compliance team overseeing its data handling. What gap does this create?",
    options: [
      { id: "A", text: "Which stakeholder groups are consulted during discovery has no bearing on whether important requirements are captured." },
      { id: "B", text: "Discovery limited to one stakeholder group risks missing requirements and constraints known only to other affected groups (e.g., escalation handling needs from support, data-handling constraints from compliance); discovery should include all materially affected stakeholders." },
      { id: "C", text: "Discovery should never involve more than one team, regardless of how many groups are affected by the feature." },
      { id: "D", text: "Engineering is always the only stakeholder group whose input is relevant during discovery for any feature." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Limiting discovery to one team risks missing requirements that only other affected groups would surface — a materially affected group like support or compliance can hold information central to a sound design. Engineering alone isn't sufficient here (D wrong), involving multiple relevant teams is the recommended practice, not something to avoid (C wrong), and stakeholder coverage directly affects requirement completeness (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Conduct structured discovery and requirement gathering'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-005",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Conduct structured discovery and requirement gathering",
    type: "mcq",
    stem:
      "Two stakeholders on the same project describe conflicting priorities during discovery — one wants maximum accuracy regardless of cost, the other wants to minimize cost above all else. What should the architect do with this conflict?",
    options: [
      { id: "A", text: "Ignore the conflict and proceed with whichever priority the architect personally finds more technically interesting." },
      { id: "B", text: "Conclude that discovery has failed entirely and no further progress is possible on the project." },
      { id: "C", text: "Surface the conflict explicitly and facilitate an explicit resolution or prioritization decision among the stakeholders, rather than silently picking one priority or averaging them without an agreed rationale." },
      { id: "D", text: "Conflicting stakeholder priorities never need to be resolved before architecture and design work begins." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Surfacing a genuine stakeholder conflict and facilitating an explicit resolution is the sound response — it produces an agreed, documented prioritization rather than an architect's unilateral guess (A wrong). This kind of conflict is a normal, resolvable part of discovery, not a project-ending failure (B wrong), and leaving conflicting priorities unresolved before design work begins risks building the wrong thing (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Conduct structured discovery and requirement gathering'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-006",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Conduct structured discovery and requirement gathering",
    type: "mcq",
    stem:
      "A stakeholder states a requirement as 'the system needs to be fast.' The architect proceeds to design without asking for a more specific definition of 'fast.' What risk does this create?",
    options: [
      { id: "A", text: "A vague, unquantified requirement like 'fast' can't be objectively validated later — different stakeholders may have very different implicit expectations (e.g., 1 second vs. 10 seconds), so discovery should convert vague requirements into specific, measurable criteria." },
      { id: "B", text: "Requirement specificity has no bearing on whether a delivered system will actually meet stakeholder expectations." },
      { id: "C", text: "The word 'fast' always means the same specific latency figure to every stakeholder, so no further clarification is ever needed." },
      { id: "D", text: "Vague requirements should always be left exactly as stated, since clarifying them only introduces unnecessary delay." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "An unquantified requirement like 'fast' invites mismatched expectations — converting it into a specific, measurable criterion during discovery is exactly what prevents later disagreement about whether the delivered system meets the bar. 'Fast' doesn't mean the same thing to everyone by default (C wrong), clarifying vague requirements is valuable, not wasteful, delay (D wrong), and requirement specificity directly affects whether expectations are met (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Conduct structured discovery and requirement gathering'",
    difficulty: "easy",
  },
  {
    id: "arch-p-scl-007",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Communicate architectural decisions and trade-offs",
    type: "mcq",
    stem:
      "An architect presents a technical design to a business stakeholder using deep implementation jargon (e.g., token windows, embedding dimensionality, orchestration graphs) with no translation to business impact. The stakeholder leaves the meeting unable to make an informed decision. What communication failure does this illustrate?",
    options: [
      { id: "A", text: "How a decision is communicated has no bearing on whether a stakeholder can make an informed decision about it." },
      { id: "B", text: "Technical jargon is always the clearest and most effective way to communicate an architectural decision to any audience, technical or not." },
      { id: "C", text: "Business stakeholders should never be included in any discussion of architectural trade-offs under any circumstances." },
      { id: "D", text: "Effective architectural communication needs to translate technical decisions and trade-offs into terms relevant to the audience (cost, risk, timeline, business impact), not simply present implementation-level jargon to a non-technical stakeholder." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Translating technical trade-offs into audience-relevant terms (cost, risk, timeline, impact) is what enables an informed decision — raw implementation jargon doesn't serve a non-technical audience well (B wrong). Excluding business stakeholders from trade-off discussions entirely (C) is the wrong direction, since they need to be informed, not sidelined, and communication approach directly affects decision quality (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Communicate architectural decisions and trade-offs'",
    difficulty: "easy",
  },
  {
    id: "arch-p-scl-008",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Communicate architectural decisions and trade-offs",
    type: "mcq",
    stem:
      "An architect presents only the chosen architecture to stakeholders, without describing the alternatives that were considered or why they were rejected. A stakeholder later asks 'did you consider X?' and the architect has no ready answer, undermining confidence in the decision. What practice would have prevented this?",
    options: [
      { id: "A", text: "Presenting only the final chosen architecture is always the most effective way to build stakeholder confidence, regardless of what questions might arise." },
      { id: "B", text: "Documenting and communicating the alternatives considered and the rationale for rejecting them, alongside the chosen approach, so stakeholders can see the decision was well-reasoned and anticipate likely questions." },
      { id: "C", text: "Whether alternatives are communicated has no bearing on stakeholder confidence in an architectural decision." },
      { id: "D", text: "Alternatives should never be documented or discussed once a final architectural decision has been made." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Communicating considered alternatives and why they were rejected demonstrates a well-reasoned process and anticipates natural follow-up questions — presenting only the final answer (A) left the architect unprepared here. Alternatives remain useful to document and discuss even after a decision is made (D wrong), and this practice directly affects how much confidence stakeholders place in the decision (C wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Communicate architectural decisions and trade-offs'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-009",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Communicate architectural decisions and trade-offs",
    type: "scenario-multi-response",
    stem:
      "Which two practices support effective communication of architectural decisions to a mixed technical/business audience? (Select 2)",
    options: [
      { id: "A", text: "Explain the alternatives that were considered and why the chosen approach was preferred." },
      { id: "B", text: "Frame trade-offs in terms relevant to the audience — cost, risk, timeline, and business impact — alongside the technical rationale." },
      { id: "C", text: "Present only the final decision, with no explanation of the reasoning or trade-offs that led to it." },
      { id: "D", text: "Use only implementation-level jargon throughout, regardless of whether the audience has the technical background to follow it." },
    ],
    correctOptionIds: ["A","B"],
    selectCount: 2,
    explanation:
      "Audience-appropriate framing of trade-offs (B) and explaining alternatives and rationale (A) both support effective communication to a mixed audience. Using only implementation jargon regardless of audience background (D) and presenting a bare decision with no reasoning (C) both undermine stakeholder understanding and trust.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Communicate architectural decisions and trade-offs'",
    difficulty: "easy",
  },
  {
    id: "arch-p-scl-010",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Communicate architectural decisions and trade-offs",
    type: "mcq",
    stem:
      "An architect recommends a smaller, faster model tier for a feature, but a stakeholder pushes back, assuming 'bigger is always better' and requesting the largest available model regardless of the feature's actual complexity. How should the architect communicate this trade-off?",
    options: [
      { id: "A", text: "Simply comply with the stakeholder's request for the largest model without further discussion, since stakeholder preference should always override the architect's technical assessment with no explanation offered." },
      { id: "B", text: "Model tier trade-offs are never worth communicating to a stakeholder, since the decision has no real business impact." },
      { id: "C", text: "Explain the actual trade-off in terms the stakeholder cares about — e.g., that the smaller tier meets the accuracy bar for this specific task at meaningfully lower cost and latency, and that a larger tier would add cost without a corresponding benefit for this particular use case." },
      { id: "D", text: "Refuse to discuss the trade-off at all and proceed with the architect's original recommendation without any further stakeholder communication." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Explaining the trade-off in business-relevant terms — accuracy sufficiency, cost, and latency impact for this specific task — is what lets the stakeholder make an informed call rather than defaulting to an unexamined 'bigger is better' assumption. Silently complying without explanation (A) or refusing to discuss it at all (D) both skip the needed communication, and model tier choice does carry real business impact worth explaining (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Communicate architectural decisions and trade-offs'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-011",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Communicate architectural decisions and trade-offs",
    type: "mcq",
    stem:
      "An architect needs to explain to an executive sponsor why a proposed agentic architecture, while more capable, also carries higher operational complexity and risk than a simpler workflow-based approach. What is the most effective way to frame this trade-off?",
    options: [
      { id: "A", text: "Present both options with their respective benefits, costs, and risks in terms of business outcomes (capability gained vs. operational/risk cost), allowing the sponsor to make an informed decision aligned with their actual risk tolerance and priorities." },
      { id: "B", text: "Present only the simpler workflow-based approach, omitting any mention of the agentic option's capability advantages." },
      { id: "C", text: "Avoid presenting any trade-off at all and let the sponsor decide with no information from the architect." },
      { id: "D", text: "Present only the more capable agentic architecture, omitting any mention of its added complexity or risk, since sponsors always prefer the most capable option regardless of trade-offs." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Presenting both options with their genuine benefits, costs, and risks in business terms is what enables the sponsor to make a decision aligned with their actual priorities — omitting the downside of the more capable option (D) or the upside of the simpler one (B) both bias the sponsor's decision, and providing no information at all (C) fails to support an informed choice.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Communicate architectural decisions and trade-offs'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-012",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    type: "mcq",
    stem:
      "A project's SLA states '99% of requests will receive a response within 3 seconds,' but the team never establishes a mechanism to track actual performance against this SLA or to inform stakeholders if it is at risk of being missed. What gap does this represent?",
    options: [
      { id: "A", text: "Once an SLA is agreed upon, no further tracking or communication about it is ever necessary for the life of the project." },
      { id: "B", text: "Whether SLA performance is tracked has no bearing on stakeholder expectation alignment." },
      { id: "C", text: "SLA tracking is only relevant for the architect's own reference and should never be communicated to stakeholders." },
      { id: "D", text: "Without ongoing tracking against the SLA and a mechanism to surface at-risk status to stakeholders, expectation misalignment can go undetected until the SLA is already breached; feedback loops need to include proactive SLA monitoring and communication, not just the initial agreement." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "An SLA without ongoing tracking and proactive at-risk communication risks stakeholders finding out about a problem only after it's already a breach — feedback loops need to include this proactive element, not just the initial agreement. SLA tracking doesn't stop mattering once agreed (A wrong), stakeholders specifically benefit from visibility into SLA performance (C wrong), and tracking practice directly affects expectation alignment (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Manage stakeholder feedback loops and expectation alignment (including SLAs)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-scl-013",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    type: "mcq",
    stem:
      "A stakeholder repeatedly submits feedback through informal channels (hallway conversations, one-off chat messages) that never gets captured or tracked, leading the team to lose track of commitments made. What structural fix addresses this?",
    options: [
      { id: "A", text: "How feedback is captured has no bearing on whether resulting commitments are actually tracked and honored." },
      { id: "B", text: "Establishing a defined feedback-capture mechanism (a shared tracker, structured review cadence, or similar) so stakeholder input and resulting commitments are recorded and followed up on, rather than relying on informal, easily-lost channels." },
      { id: "C", text: "Informal, untracked feedback channels are always just as reliable as a structured feedback-capture mechanism for tracking commitments." },
      { id: "D", text: "The only fix is to stop accepting any stakeholder feedback through any channel going forward." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A defined, structured feedback-capture mechanism is what prevents commitments made through informal channels from being lost — informal channels alone aren't as reliable for this (C wrong). Refusing all further feedback (D) is a disproportionate response to a capture-process gap, and how feedback is captured directly determines whether it's tracked and honored (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Manage stakeholder feedback loops and expectation alignment (including SLAs)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-014",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    type: "scenario-multi-response",
    stem:
      "Which two practices support healthy stakeholder feedback loops and expectation alignment on an ongoing project? (Select 2)",
    options: [
      { id: "A", text: "Proactively communicate when a metric (e.g., an SLA) is trending toward being at risk, rather than waiting until it is already breached." },
      { id: "B", text: "Wait for stakeholders to notice and report a problem on their own before providing any status update." },
      { id: "C", text: "Establish a regular, structured cadence for reviewing progress and feedback with stakeholders, rather than relying only on ad hoc, informal conversations." },
      { id: "D", text: "Treat the initial requirements and SLA agreement as fixed and final, with no further check-ins for the life of the project." },
    ],
    correctOptionIds: ["A","C"],
    selectCount: 2,
    explanation:
      "Proactive at-risk communication (A) and a regular structured review cadence (C) both support healthy expectation alignment. Waiting passively for stakeholders to notice problems themselves (B) and treating the initial agreement as needing no further check-in (D) both undermine proactive feedback management.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Manage stakeholder feedback loops and expectation alignment (including SLAs)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-scl-015",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    type: "mcq",
    stem:
      "A stakeholder's expectations for a Claude-powered feature's accuracy were set informally in an early conversation ('it'll basically never be wrong'), and were never revisited or grounded in a specific, agreed metric. The feature launches with a 92% accuracy rate, and the stakeholder considers this a failure. What was the root cause?",
    options: [
      { id: "A", text: "Expectation-setting conversations early in a project have no bearing on how a stakeholder judges the eventual delivered result." },
      { id: "B", text: "A 92% accuracy rate is always considered a failure for every possible Claude-powered feature and use case, regardless of what was agreed upon." },
      { id: "C", text: "An informal, unquantified expectation was never converted into an explicit, agreed accuracy target; expectation alignment requires translating vague early statements into specific, mutually agreed criteria that both sides can reference later." },
      { id: "D", text: "The stakeholder is always solely responsible for any misalignment, regardless of whether the architect ever clarified or formalized the expectation." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "The root cause is that a vague, informal statement was never converted into an explicit, agreed metric — expectation alignment is precisely this translation work, done proactively rather than left implicit. This isn't solely the stakeholder's fault when the architect didn't formalize the target (D wrong), 92% isn't inherently a failure independent of what was actually agreed (B wrong), and early expectation-setting clearly shapes how a delivered result is judged (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Manage stakeholder feedback loops and expectation alignment (including SLAs)'",
    difficulty: "hard",
  },
  {
    id: "arch-p-scl-016",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
    type: "mcq",
    stem:
      "Midway through a project, a stakeholder requests a significant scope addition without any discussion of its impact on the previously agreed timeline or SLA. What is the appropriate response from the architect?",
    options: [
      { id: "A", text: "Explicitly discuss and document the impact of the scope change on timeline, cost, and the agreed SLA, and reach a renewed agreement with the stakeholder, rather than silently absorbing or silently rejecting the request." },
      { id: "B", text: "Scope changes never have any bearing on previously agreed timelines or SLAs, so no discussion is ever needed." },
      { id: "C", text: "Silently ignore the scope-change request entirely without any acknowledgment or discussion with the stakeholder." },
      { id: "D", text: "Silently absorb the new scope into the existing timeline and SLA commitments without any discussion of impact." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Explicitly surfacing and documenting the scope change's impact, then reaching a renewed agreement, is what keeps expectations aligned — silently absorbing it (D) risks an unrealistic commitment, silently ignoring the request (C) fails the stakeholder relationship, and scope changes do typically affect timeline/SLA commitments and need discussion (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Manage stakeholder feedback loops and expectation alignment (including SLAs)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-017",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Document architectures and provide implementation guidance",
    type: "mcq",
    stem:
      "An architecture document describes the high-level system design but omits any information about configuration details, deployment steps, or operational runbooks needed by the engineers who will actually build and run the system. What documentation gap does this represent?",
    options: [
      { id: "A", text: "Implementation-level detail should never be included in architecture documentation under any circumstances." },
      { id: "B", text: "A high-level architecture description is always fully sufficient for any implementation team to build and operate the system correctly, with no further detail needed." },
      { id: "C", text: "The level of detail in architecture documentation has no bearing on an implementation team's ability to build the system correctly." },
      { id: "D", text: "High-level architecture alone is insufficient for implementation teams — documentation needs to also include concrete implementation guidance (configuration, deployment, operational procedures) so the design can actually be built and operated correctly." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "High-level design alone leaves implementation teams without the concrete guidance they need — good architecture documentation includes implementation-level detail as well. A bare high-level description isn't sufficient on its own for implementation (B wrong), implementation-level detail belongs in the documentation rather than being excluded (A wrong), and documentation completeness directly affects build correctness (C wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Document architectures and provide implementation guidance'",
    difficulty: "easy",
  },
  {
    id: "arch-p-scl-018",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Document architectures and provide implementation guidance",
    type: "mcq",
    stem:
      "An architecture document was written once at project kickoff and has not been updated despite several significant design changes made during implementation. A new engineer joining the team relies on the outdated document and makes decisions based on a design that no longer reflects reality. What practice would have prevented this?",
    options: [
      { id: "A", text: "Whether documentation is kept up to date has no bearing on the decisions a new team member might make based on it." },
      { id: "B", text: "Treating architecture documentation as a living artifact that is updated whenever a significant design change occurs, rather than a one-time deliverable frozen at kickoff." },
      { id: "C", text: "Architecture documentation should always be written once at kickoff and never revisited, regardless of how much the actual design changes afterward." },
      { id: "D", text: "New engineers should never be given access to any architecture documentation, to avoid the risk of it becoming outdated." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Treating documentation as a living artifact updated alongside significant design changes is what prevents this exact failure mode — a frozen, kickoff-only document (C) becomes actively misleading over time. Withholding documentation from new engineers entirely (D) removes a valuable onboarding resource rather than fixing the staleness problem, and documentation currency directly affects the decisions people make based on it (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Document architectures and provide implementation guidance'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-019",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Document architectures and provide implementation guidance",
    type: "scenario-multi-response",
    stem:
      "Which two elements should a complete architecture document for a Claude-powered system typically include? (Select 2)",
    options: [
      { id: "A", text: "The rationale behind key design decisions, including trade-offs considered and why the chosen approach was selected." },
      { id: "B", text: "The architect's personal opinions about unrelated technologies not used anywhere in this system." },
      { id: "C", text: "A one-time snapshot with no expectation of ever being revisited, regardless of future design changes." },
      { id: "D", text: "Concrete implementation guidance such as configuration details, integration points, and operational procedures." },
    ],
    correctOptionIds: ["A","D"],
    selectCount: 2,
    explanation:
      "Documented decision rationale (A) and concrete implementation guidance (D) are both essential elements of a complete, useful architecture document. Unrelated personal opinions (B) don't belong in the document, and treating it as a permanently frozen snapshot (C) undermines its ongoing usefulness.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Document architectures and provide implementation guidance'",
    difficulty: "easy",
  },
  {
    id: "arch-p-scl-020",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Document architectures and provide implementation guidance",
    type: "mcq",
    stem:
      "An architect documents a system's prompt engineering approach but never explains why certain techniques (e.g., few-shot examples, specific guardrail phrasing) were chosen over alternatives. Months later, a new team member changes the prompt structure in a way that reintroduces a previously-solved failure mode, because the original rationale wasn't documented. What lesson does this illustrate?",
    options: [
      { id: "A", text: "Rationale documentation is only useful to the original author and provides no value to anyone else on the team." },
      { id: "B", text: "Documenting only the final 'what' of a design, with no explanation of the reasoning behind it, is always sufficient to prevent future regressions." },
      { id: "C", text: "Documenting the 'why' behind non-obvious design choices (not just the 'what') preserves institutional knowledge and prevents costly regressions when the system is later modified by someone unfamiliar with the original context." },
      { id: "D", text: "This kind of regression can never be prevented through any documentation practice, regardless of how thorough it is." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Documenting the reasoning behind non-obvious choices is exactly what prevents a future contributor from unknowingly undoing a hard-won fix — documenting only the 'what' (B) isn't sufficient to prevent this kind of regression. This kind of regression is preventable with the right documentation practice (D wrong), and rationale documentation is valuable to anyone who touches the system later, not just the original author (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Document architectures and provide implementation guidance'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-021",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Document architectures and provide implementation guidance",
    type: "mcq",
    stem:
      "An architect is handing off a completed system to an operations team that will maintain it going forward. The only documentation provided is the original design proposal from months earlier, which does not reflect several changes made during implementation. What is the risk to the operations team?",
    options: [
      { id: "A", text: "The operations team will be working from documentation that no longer matches the actual, as-built system, risking incorrect assumptions during troubleshooting or maintenance; handoff documentation needs to reflect the current, as-built state, not the original proposal." },
      { id: "B", text: "Whether handoff documentation reflects the as-built system has no bearing on the operations team's ability to maintain it correctly." },
      { id: "C", text: "The original design proposal is always identical to the as-built system, so no update is ever needed regardless of implementation changes." },
      { id: "D", text: "Operations teams never need any architecture documentation to maintain a system, regardless of its complexity." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Handoff documentation needs to reflect the actual, as-built system — relying on a stale original proposal risks the operations team making incorrect assumptions during maintenance. The proposal and the as-built system aren't guaranteed to be identical after implementation changes (C wrong), operations teams generally do rely on accurate documentation for complex systems (D wrong), and documentation accuracy directly affects maintenance quality (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Document architectures and provide implementation guidance'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-022",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    type: "mcq",
    stem:
      "An architect is deeply involved during the discovery and design phases of a project but has no defined role or checkpoint during handoff, monitoring, or iteration once the system launches. What lifecycle gap does this create?",
    options: [
      { id: "A", text: "Handoff, monitoring, and iteration are lifecycle phases that never relate back to decisions made during discovery or design." },
      { id: "B", text: "An architect's role is always complete once the design phase ends, with no further involvement ever adding value in later lifecycle phases." },
      { id: "C", text: "Lifecycle phase involvement has no bearing on whether design-stage issues are caught and addressed." },
      { id: "D", text: "Architectural decisions made during design can have consequences that only surface during handoff, monitoring, or iteration; disengaging after design risks missing the chance to catch and address issues that stem from those earlier decisions." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Design-stage decisions can produce consequences that only become visible later, so continued architect involvement through handoff, monitoring, and iteration helps catch and address them — the architect's role isn't necessarily finished once design ends (B wrong). Later phases are very much connected to earlier design decisions (A wrong), and continued involvement directly affects whether resulting issues get caught (C wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Support lifecycle phases (discovery, design, handoff, monitoring, iteration)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-scl-023",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    type: "mcq",
    stem:
      "A system is handed off from the design team to the operations team with no structured handoff process — just a link to a repository and a brief chat message. Several operational questions go unanswered because no one is sure who owns them. What would a more structured handoff phase have addressed?",
    options: [
      { id: "A", text: "A structured handoff process is never necessary, since an informal link and a brief message are always sufficient regardless of system complexity." },
      { id: "B", text: "A structured handoff — covering ownership of specific concerns, known operational risks, escalation paths, and answering open questions before responsibility formally transfers — prevents the ambiguity and dropped ownership that an informal handoff risks." },
      { id: "C", text: "Ownership ambiguity after a handoff can never be prevented through any process improvement." },
      { id: "D", text: "How a handoff is conducted has no bearing on whether operational ownership is clearly established afterward." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A structured handoff explicitly covering ownership, known risks, and escalation paths is what prevents exactly this kind of ambiguity — an informal handoff (A) isn't reliably sufficient. Ownership ambiguity is preventable with better process (C wrong), and handoff structure directly determines whether ownership is clearly established (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Support lifecycle phases (discovery, design, handoff, monitoring, iteration)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-024",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    type: "scenario-multi-response",
    stem:
      "Which two practices support a well-managed lifecycle across discovery, design, handoff, monitoring, and iteration? (Select 2)",
    options: [
      { id: "A", text: "Consider the system 'finished' once it launches, with no further monitoring or iteration expected." },
      { id: "B", text: "Maintain some level of architect involvement or accessibility past the design phase, so design-stage consequences that surface later can be traced back and addressed." },
      { id: "C", text: "Treat each lifecycle phase as fully independent, with no need to carry context or decisions from one phase into the next." },
      { id: "D", text: "Conduct a structured handoff that clarifies ownership, known risks, and escalation paths before responsibility formally transfers." },
    ],
    correctOptionIds: ["B","D"],
    selectCount: 2,
    explanation:
      "Continued architect accessibility past design (B) and a structured, ownership-clarifying handoff (D) both support a well-managed lifecycle. Treating phases as fully independent with no carried context (C) and considering launch the finish line with no further monitoring or iteration (A) both undermine sound lifecycle management.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Support lifecycle phases (discovery, design, handoff, monitoring, iteration)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-scl-025",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    type: "mcq",
    stem:
      "A team treats 'monitoring' and 'iteration' as optional, nice-to-have activities that only happen if time permits after launch, rather than as planned lifecycle phases with dedicated resourcing. Six months post-launch, the system's performance has quietly degraded with no one responsible for noticing or acting on it. What does this illustrate?",
    options: [
      { id: "A", text: "System performance can never degrade after a successful launch, regardless of whether monitoring or iteration occurs." },
      { id: "B", text: "Whether monitoring and iteration are resourced as planned activities has no bearing on whether post-launch degradation is caught." },
      { id: "C", text: "Monitoring and iteration need to be planned and resourced as integral lifecycle phases, not treated as optional afterthoughts; without dedicated ownership, degradation can go unnoticed and unaddressed indefinitely." },
      { id: "D", text: "Monitoring and iteration are always genuinely optional activities that provide no meaningful value once a system has successfully launched." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Treating monitoring and iteration as planned, resourced lifecycle phases — with clear ownership — is what prevents exactly this kind of unnoticed degradation. These aren't genuinely optional once a system is live (D wrong), degradation is a real risk even after a successful launch (A wrong), and resourcing directly determines whether degradation gets caught (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Support lifecycle phases (discovery, design, handoff, monitoring, iteration)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-026",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
    type: "mcq",
    stem:
      "During the iteration phase, a team makes a significant change to a production system's prompt structure but doesn't loop back to update the original discovery-phase success criteria or re-validate against them. What risk does skipping this step introduce?",
    options: [
      { id: "A", text: "A significant change made during iteration could shift the system's behavior in ways that no longer satisfy the originally agreed success criteria; iteration should be validated against those criteria (or updated criteria, if requirements have genuinely changed), not made in isolation." },
      { id: "B", text: "Validating iteration changes against original success criteria provides no value once a system is already in production." },
      { id: "C", text: "Once discovery-phase success criteria are established, they can never be revisited or referenced again during any later lifecycle phase." },
      { id: "D", text: "Changes made during iteration never have any bearing on whether original success criteria are still being met." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A significant iteration change can shift system behavior away from what was originally agreed to succeed at — validating against those criteria (or explicitly updating them) is what closes the loop back to discovery. Success criteria remain a valid ongoing reference point, not something frozen and unrevisitable (C wrong), iteration changes can absolutely affect whether criteria are still met (D wrong), and this validation step provides real, ongoing value in production (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Support lifecycle phases (discovery, design, handoff, monitoring, iteration)'",
    difficulty: "hard",
  },
  {
    id: "arch-p-scl-027",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Communicate architectural decisions and trade-offs",
    type: "mcq",
    stem:
      "An architect needs to explain to a skeptical stakeholder why a proposed RAG-based architecture was chosen over simply fine-tuning a model on the organization's proprietary data. What framing best communicates this decision?",
    options: [
      { id: "A", text: "State that fine-tuning is always unconditionally superior to RAG for every possible use case, regardless of this project's actual requirements." },
      { id: "B", text: "State that RAG is always unconditionally superior to fine-tuning for every possible use case, with no need to reference this project's actual requirements." },
      { id: "C", text: "Avoid explaining the reasoning at all and simply assert that the decision is final." },
      { id: "D", text: "Compare the two approaches against the actual requirements — e.g., RAG's ability to reflect frequently-changing data without retraining versus fine-tuning's upfront and ongoing retraining cost — framed around what matters to this specific use case, not an abstract preference for one technique." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Grounding the comparison in this specific use case's actual requirements (e.g., data volatility, retraining cost) is what makes the trade-off communication genuinely persuasive and honest — neither technique is unconditionally superior in every case (B, A both wrong), and asserting the decision as final with no reasoning (C) doesn't address the stakeholder's skepticism.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Communicate architectural decisions and trade-offs'",
    difficulty: "medium",
  },
  {
    id: "arch-p-scl-028",
    certificationSlug: "architect-professional",
    domain: "Stakeholder Communication & Lifecycle Management",
    taskStatement: "Conduct structured discovery and requirement gathering",
    type: "mcq",
    stem:
      "During discovery for a new agentic system, the architect learns that the requesting team has never previously operated any AI-powered system in production and has no established process for monitoring or escalation. How should this shape the discovery findings and subsequent design?",
    options: [
      { id: "A", text: "Operational maturity findings from discovery should never be factored into design or handoff planning." },
      { id: "B", text: "This is a material discovery finding — the requesting team's operational maturity affects what level of built-in monitoring, alerting, and guardrails the system needs, and should inform both the design and the implementation/handoff plan." },
      { id: "C", text: "The requesting team's prior operational experience with AI systems is irrelevant to the discovery process and should not influence the design in any way." },
      { id: "D", text: "The only appropriate response is to refuse to build any system for a team with no prior AI operational experience." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A requesting team's operational maturity is directly relevant discovery information — it should shape how much built-in monitoring, alerting, and guardrail support the design provides, and how the handoff is structured. This isn't irrelevant to design (C wrong), refusing to build the system entirely (D) is a disproportionate response when the design can be adapted instead, and operational-maturity findings should absolutely feed into design and handoff planning (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 6 — 'Conduct structured discovery and requirement gathering'",
    difficulty: "hard",
  },
];
