import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "assoc-wisd-001",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Apply Claude to analyze requirements and use cases",
    type: "mcq",
    stem:
      "A department head says 'we need an AI tool for customer feedback' with no further detail. Before recommending anything, what is the most useful way to use Claude at this stage?",
    options: [
      { id: "A", text: "Ask Claude to guess what the department head probably meant and proceed without further clarification." },
      { id: "B", text: "Decline to help until the department head writes a full formal requirements document unassisted." },
      { id: "C", text: "Immediately build a feedback-processing tool based on the initial one-sentence request." },
      { id: "D", text: "Use Claude to help clarify the actual requirement — what feedback, what decision it should inform, and what 'success' looks like — before deciding on a solution." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Clarifying the actual requirement before jumping to a solution is a genuinely useful early step — building from a vague one-liner (C) or guessing at intent (A) risks solving the wrong problem, and requiring a fully-formed document before any help is offered (B) is an unnecessary barrier when Claude can help develop that clarity.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 (Workflow Integration and Solution Design) — 'Apply Claude to analyze requirements and use cases'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-002",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Apply Claude to analyze requirements and use cases",
    type: "mcq",
    stem:
      "An operations lead wants to automate 'something' about their weekly reporting process, but hasn't identified which specific step is actually slow or error-prone. What should happen first?",
    options: [
      { id: "A", text: "Wait until the process fails badly enough to make the bottleneck obvious." },
      { id: "B", text: "Use Claude to help walk through the current process step by step and identify which specific step is actually the bottleneck worth addressing." },
      { id: "C", text: "Skip analysis entirely and pick a step to automate at random." },
      { id: "D", text: "Automate the entire reporting process end-to-end immediately, without first identifying the specific bottleneck." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Identifying the actual bottleneck before automating anything focuses effort where it matters — automating everything blindly (D) or picking randomly (C) risks wasted effort on the wrong step, and waiting for a failure (A) is unnecessarily reactive when analysis can be done proactively.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Apply Claude to analyze requirements and use cases'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-003",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Apply Claude to analyze requirements and use cases",
    type: "mcq",
    stem:
      "A stakeholder describes a desired outcome ('reduce customer churn') without specifying what data is available or what 'success' would look like numerically. How can Claude best help at this early stage?",
    options: [
      { id: "A", text: "Assume a generic definition of churn reduction and proceed without checking it against the stakeholder's actual situation." },
      { id: "B", text: "Immediately produce a churn-prediction model without asking any clarifying questions." },
      { id: "C", text: "Help the stakeholder think through what data exists, what a measurable definition of success would be, and what's actually in scope, before jumping to a solution." },
      { id: "D", text: "Tell the stakeholder this task is entirely out of scope for AI assistance." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Working through data availability and a measurable success definition before proposing a solution turns a vague goal into something actionable — jumping straight to a solution (B) or a generic assumption (A) risks missing the actual situation, and dismissing the request outright (D) forecloses genuinely useful early-stage help.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Apply Claude to analyze requirements and use cases'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-004",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Apply Claude to analyze requirements and use cases",
    type: "scenario-multi-response",
    stem:
      "A team wants Claude's help figuring out whether a proposed internal tool is actually worth building. Which two uses of Claude are appropriate at this early requirements stage? (Select 2)",
    options: [
      { id: "A", text: "Ask Claude to make the final go/no-go funding decision on the team's behalf." },
      { id: "B", text: "Ask Claude to help draft a rough success metric the team could later use to evaluate whether the tool worked." },
      { id: "C", text: "Ask Claude to help identify who would actually use the tool and what problem it solves for them." },
      { id: "D", text: "Skip this analysis and proceed directly to a full technical build." },
    ],
    correctOptionIds: ["B","C"],
    selectCount: 2,
    explanation:
      "Clarifying the actual users/problem (C) and drafting a measurable success metric (B) are genuinely useful requirements-analysis uses of Claude. Handing over the actual funding decision (A) removes appropriate human accountability, and skipping analysis to build immediately (D) risks building the wrong thing.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Apply Claude to analyze requirements and use cases'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-005",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Apply Claude to analyze requirements and use cases",
    type: "mcq",
    stem:
      "A manager asks for 'a dashboard' but hasn't said what decisions it needs to support or who will use it. What is the risk of building it immediately without further analysis?",
    options: [
      { id: "A", text: "The dashboard may end up showing information that doesn't actually support the decisions the manager needs to make, wasting the effort of building it." },
      { id: "B", text: "There is no risk; dashboards are generic enough that requirements never matter." },
      { id: "C", text: "The risk only applies to external, customer-facing dashboards." },
      { id: "D", text: "The only risk is that the dashboard will load slowly." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Without understanding the actual decisions and audience, a dashboard risks being built around the wrong information entirely — this isn't a load-time issue (D), and the risk applies to internal tools just as much as external ones (C), so requirements clarity matters here (B wrong).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Apply Claude to analyze requirements and use cases'",
    difficulty: "easy",
  },
  {
    id: "assoc-wisd-006",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Leverage Claude for research, planning, and process optimization",
    type: "mcq",
    stem:
      "A business analyst spends three hours every week manually compiling notes from multiple sources into a single planning document. How could Claude best support process optimization here?",
    options: [
      { id: "A", text: "Only work on this task once a year during an annual review." },
      { id: "B", text: "Replace the analyst's judgment entirely and make the planning decisions autonomously." },
      { id: "C", text: "Suggest the analyst stop producing the planning document altogether." },
      { id: "D", text: "Help draft an initial compiled version from the source notes, which the analyst then reviews and finalizes, cutting the manual compilation time." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Speeding up the mechanical compilation step while keeping the analyst's judgment for review and finalization is a realistic, valuable optimization — removing the human's judgment entirely (B) overreaches, addressing it only rarely (A) misses an ongoing weekly cost, and eliminating a needed deliverable (C) doesn't solve the actual inefficiency.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Leverage Claude for research, planning, and process optimization'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-007",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Leverage Claude for research, planning, and process optimization",
    type: "mcq",
    stem:
      "A team wants to explore whether entering a new geographic market makes sense, and needs a synthesized view of relevant regulatory, competitive, and demographic factors. What is an appropriate way to use Claude here?",
    options: [
      { id: "A", text: "Ask Claude only about demographic factors and ignore regulatory and competitive considerations entirely." },
      { id: "B", text: "Use Claude to help synthesize and organize research across these factors into a structured starting point for the team's own decision-making." },
      { id: "C", text: "Ask Claude to make the final market-entry decision autonomously." },
      { id: "D", text: "Skip research entirely and rely on intuition." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Synthesizing research into a structured starting point for a human decision is a strong fit for this kind of planning support — letting the tool make the actual strategic call (C) removes appropriate accountability, skipping research (D) is a step backward, and narrowing to only one factor (A) leaves the analysis incomplete.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Leverage Claude for research, planning, and process optimization'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-008",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Leverage Claude for research, planning, and process optimization",
    type: "mcq",
    stem:
      "A process improvement lead describes a five-step approval workflow and asks Claude to identify where delays are most likely occurring. What is a reasonable way to use Claude for this?",
    options: [
      { id: "A", text: "Treat Claude's guess as a confirmed root cause without checking it against actual process data." },
      { id: "B", text: "Ask Claude to eliminate all five steps to guarantee no delays." },
      { id: "C", text: "Have Claude analyze the described steps for likely bottlenecks (e.g., steps with unclear ownership or long wait times) as a starting hypothesis for the team to validate against real data." },
      { id: "D", text: "Skip process analysis and redesign the workflow from scratch with no diagnosis." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Using Claude to generate a starting hypothesis about likely bottlenecks — to be validated against real data — is a sound use of it for process optimization. Treating an unverified guess as confirmed (A) skips necessary validation, redesigning with no diagnosis (D) risks missing the real issue, and eliminating all steps (B) isn't a realistic or safe response to a process problem.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Leverage Claude for research, planning, and process optimization'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-009",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Leverage Claude for research, planning, and process optimization",
    type: "scenario-multi-response",
    stem:
      "Which two are appropriate, high-value uses of Claude for research and process optimization? (Select 2)",
    options: [
      { id: "A", text: "Replacing a team's own judgment about strategic priorities entirely." },
      { id: "B", text: "Novelty use with no real time savings, just because it's possible to ask Claude to do it." },
      { id: "C", text: "Synthesizing a large volume of scattered notes into an organized planning document for a team to review." },
      { id: "D", text: "Identifying a genuinely time-consuming, repetitive bottleneck in a described workflow as a hypothesis to validate." },
    ],
    correctOptionIds: ["C","D"],
    selectCount: 2,
    explanation:
      "Synthesizing scattered information (C) and flagging a real bottleneck to validate (D) are genuinely valuable process-optimization uses. Novelty use without real value (B) and replacing a team's judgment on strategy (A) don't reflect a sound application of the tool to real bottlenecks.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Leverage Claude for research, planning, and process optimization'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-010",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Leverage Claude for research, planning, and process optimization",
    type: "mcq",
    stem:
      "A team wants to research a potential new vendor before signing a contract. What is an appropriate limitation to keep in mind about Claude's role in this research?",
    options: [
      { id: "A", text: "Claude's synthesis should be a starting point, and any information that will inform the final contracting decision should be verified against authoritative sources (e.g., the vendor directly, official filings) before being relied upon." },
      { id: "B", text: "Vendor research is entirely outside anything Claude could reasonably help with." },
      { id: "C", text: "Claude's research output can be treated as fully verified and final without any further checking." },
      { id: "D", text: "Only Claude's opinion of the vendor should be used to make the decision, without any other input." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Claude can meaningfully accelerate research, but information feeding a real contracting decision still needs verification against authoritative sources — treating it as fully verified already (C) skips a needed check, ruling the task out entirely (B) discards genuine value, and relying solely on Claude's synthesis for the final call (D) removes appropriate diligence.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Leverage Claude for research, planning, and process optimization'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-011",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Use Claude to support solution design, development, and iteration",
    type: "mcq",
    stem:
      "A team is designing a new internal request-intake form and wants to iterate on the field layout before finalizing it. How can Claude best support this?",
    options: [
      { id: "A", text: "Design the form once and prevent any further changes to keep it consistent." },
      { id: "B", text: "Refuse to help until the team has already finalized every field on their own." },
      { id: "C", text: "Provide a single final version with no opportunity for feedback or revision." },
      { id: "D", text: "Draft an initial version of the form, then iterate based on the team's feedback on what's missing or confusing, refining it across a few rounds." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Solution design benefits from iterating a draft based on real feedback rather than treating the first version as final (C, A) or requiring the team to have already solved the problem before any help is given (B).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Use Claude to support solution design, development, and iteration'",
    difficulty: "easy",
  },
  {
    id: "assoc-wisd-012",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Use Claude to support solution design, development, and iteration",
    type: "mcq",
    stem:
      "A team is deciding between two possible workflow structures for handling customer complaints and wants to think through the tradeoffs of each before committing. How can Claude support this design decision?",
    options: [
      { id: "A", text: "Pick one structure arbitrarily and present it as the only option." },
      { id: "B", text: "Help lay out the tradeoffs of each structure (speed, complexity, staffing needs) so the team can compare them before making an informed choice." },
      { id: "C", text: "Refuse to discuss tradeoffs since only the team can make this decision." },
      { id: "D", text: "Recommend building both structures fully before evaluating either." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Laying out tradeoffs to support an informed human decision is a solid use of Claude in solution design — presenting only one option arbitrarily (A) skips the comparison, declining to help with tradeoffs at all (C) discards a genuinely useful contribution, and fully building both options before evaluating (D) is wasteful compared to comparing them on paper first.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Use Claude to support solution design, development, and iteration'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-013",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Use Claude to support solution design, development, and iteration",
    type: "scenario-multi-response",
    stem:
      "A team is iterating on a new employee handbook draft. Which two practices reflect good use of Claude in this design/iteration process? (Select 2)",
    options: [
      { id: "A", text: "Share specific feedback on what's unclear or missing in a draft section, and ask for a revised version addressing that feedback." },
      { id: "B", text: "Iterate section by section, reviewing and refining each before moving to the next." },
      { id: "C", text: "Discard all prior drafts and start over from nothing each time a small change is needed." },
      { id: "D", text: "Treat the very first draft as final and distribute it to all employees without review." },
    ],
    correctOptionIds: ["A","B"],
    selectCount: 2,
    explanation:
      "Giving specific feedback for revision (A) and iterating section by section (B) reflect a genuine design/iteration process. Treating the first draft as final without review (D) skips iteration entirely, and discarding all prior work for small changes (C) wastes the value of incremental refinement.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Use Claude to support solution design, development, and iteration'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-014",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Use Claude to support solution design, development, and iteration",
    type: "mcq",
    stem:
      "A team building a new internal process gets a first draft from Claude that's mostly good but has one section that doesn't match how the team actually operates. What is the best next step?",
    options: [
      { id: "A", text: "Adopt the draft as-is despite the mismatch, since redoing it takes time." },
      { id: "B", text: "Discard the entire draft, including the parts that were already good." },
      { id: "C", text: "Point out specifically what doesn't match reality in that section and ask for a revision, keeping the rest of the draft." },
      { id: "D", text: "Ask an unrelated question instead of addressing the mismatch." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Targeted, specific feedback on the actual mismatch preserves the good parts of the draft while fixing the real issue — discarding everything (B) wastes good work, adopting a known mismatch anyway (A) bakes in an inaccuracy, and not addressing it at all (D) leaves the problem unresolved.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Use Claude to support solution design, development, and iteration'",
    difficulty: "easy",
  },
  {
    id: "assoc-wisd-015",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Use Claude to support solution design, development, and iteration",
    type: "mcq",
    stem:
      "A team wants Claude to help design a new customer-onboarding flow but hasn't yet decided what steps are truly necessary versus optional. What is the best approach?",
    options: [
      { id: "A", text: "Work with Claude to first identify and discuss which steps are genuinely necessary, then iterate on the flow design based on that understanding." },
      { id: "B", text: "Skip the onboarding flow entirely since it's too complex to design collaboratively." },
      { id: "C", text: "Have Claude design the flow, then never review or adjust it again regardless of feedback." },
      { id: "D", text: "Ask Claude to produce a single locked-in final flow immediately with no discussion of what's necessary versus optional." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Clarifying what's actually necessary before designing the flow, then iterating, produces a more grounded result than jumping straight to a locked final version (D) or refusing to review afterward (C). Avoiding the task entirely (B) isn't a solution.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Use Claude to support solution design, development, and iteration'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-016",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Integrate Claude into existing workflows to augment or redesign them",
    type: "mcq",
    stem:
      "A team currently has a person manually draft the first version of every weekly status update, which then goes through the same review process as before. They want Claude to speed up just the drafting step. What kind of change is this?",
    options: [
      { id: "A", text: "This requires eliminating the human review step entirely to count as an integration." },
      { id: "B", text: "This isn't a meaningful integration of any kind." },
      { id: "C", text: "A redesign of the entire status-update process from the ground up." },
      { id: "D", text: "An augmentation — the existing process and review step stay the same, but the drafting step is sped up." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Speeding up one step while keeping the rest of the process (including review) unchanged is exactly what augmenting a workflow means, as distinct from redesigning it (C) — this is a meaningful, common integration pattern (B wrong), and it doesn't require removing existing safeguards like review (A).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Integrate Claude into existing workflows to augment or redesign them'",
    difficulty: "easy",
  },
  {
    id: "assoc-wisd-017",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Integrate Claude into existing workflows to augment or redesign them",
    type: "mcq",
    stem:
      "A company's old process for routing support tickets was built around limitations that no longer exist now that Claude can help triage and draft responses. The team decides to rethink the whole ticket flow from scratch rather than just speeding up one step. What kind of change is this?",
    options: [
      { id: "A", text: "This is identical to simply automating one existing step." },
      { id: "B", text: "A redesign — rethinking the workflow itself around what's now possible, rather than keeping the old structure and just accelerating a step within it." },
      { id: "C", text: "An augmentation of the existing process." },
      { id: "D", text: "This isn't a legitimate way to integrate Claude into a workflow." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Rethinking the process structure itself, rather than keeping the old shape and speeding up one piece, is a redesign — distinct from augmentation (C) or simply automating a single existing step (A). Redesign is a legitimate, sometimes appropriate integration approach (D wrong) when the old constraints no longer apply.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Integrate Claude into existing workflows to augment or redesign them'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-018",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Integrate Claude into existing workflows to augment or redesign them",
    type: "mcq",
    stem:
      "A team redesigns their entire content-approval workflow around Claude, even though the existing workflow was already fast and worked well, purely because 'we should use AI more.' What is the concern with this decision?",
    options: [
      { id: "A", text: "This approach is only a concern if employees complain about the change." },
      { id: "B", text: "The only concern is that redesigns always take longer than augmentations." },
      { id: "C", text: "Redesigning a process that already worked well, without a real underlying problem to solve, risks unnecessary disruption for its own sake rather than genuine improvement." },
      { id: "D", text: "There is no concern; more AI usage is always better regardless of whether the existing process had a real problem." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Choosing to augment or redesign should be driven by a real problem or opportunity, not by a general goal of 'using AI more' — redesigning something that already worked well risks unnecessary disruption without genuine benefit. This isn't simply about redesigns taking longer (B) or waiting for complaints (A), and 'more AI is always better' (D) is the flawed premise itself.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Integrate Claude into existing workflows to augment or redesign them'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-019",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Integrate Claude into existing workflows to augment or redesign them",
    type: "scenario-multi-response",
    stem:
      "Which two scenarios describe augmenting an existing workflow, rather than redesigning it? (Select 2)",
    options: [
      { id: "A", text: "Using Claude to speed up manual data entry into an existing spreadsheet template, without changing the surrounding approval process." },
      { id: "B", text: "Completely restructuring how a team routes and prioritizes incoming requests based on new capabilities, replacing the old structure entirely." },
      { id: "C", text: "Using Claude to draft the first pass of a report that a person still reviews and finalizes, with the rest of the process unchanged." },
      { id: "D", text: "Rebuilding an entire customer-service process around a fundamentally different structure than before." },
    ],
    correctOptionIds: ["A","C"],
    selectCount: 2,
    explanation:
      "Both A and B keep the existing process structure intact while speeding up one step — the definition of augmentation. C and D both describe rethinking the process structure itself, which is redesign, not augmentation.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Integrate Claude into existing workflows to augment or redesign them'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-020",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Integrate Claude into existing workflows to augment or redesign them",
    type: "mcq",
    stem:
      "A logistics team's current process for scheduling deliveries was designed around a constraint (limited visibility into real-time traffic) that Claude-assisted tools can now help address. Given this, what is a reasonable way to decide between augmenting versus redesigning the process?",
    options: [
      { id: "A", text: "Consider whether the original constraint that shaped the current process still holds — if it no longer does, a redesign may unlock more value than simply speeding up the old structure." },
      { id: "B", text: "The choice between augmentation and redesign should be made without considering what shaped the original process." },
      { id: "C", text: "Always default to augmentation, regardless of whether the original constraint still applies." },
      { id: "D", text: "Always default to a full redesign, regardless of whether the current process already works well." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Checking whether the constraint that originally shaped a process still applies is a sound way to decide between augmenting and redesigning — always defaulting to one approach regardless of context (C, D) skips this judgment, and ignoring the original rationale for the process (B) misses the actual signal for which approach fits.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Integrate Claude into existing workflows to augment or redesign them'",
    difficulty: "hard",
  },
  {
    id: "assoc-wisd-021",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Communicate Claude's value and limitations to stakeholders",
    type: "mcq",
    stem:
      "An associate is proposing a Claude-assisted workflow change to a skeptical stakeholder. Which framing best reflects honest communication of value and limitations?",
    options: [
      { id: "A", text: "Claim the tool will be perfectly accurate and require no human review at all, to make the pitch more convincing." },
      { id: "B", text: "Focus the pitch entirely on how advanced the underlying technology is, without describing the actual expected outcome." },
      { id: "C", text: "Avoid mentioning any limitations at all, since bringing them up might make the stakeholder hesitant." },
      { id: "D", text: "Describe the specific time or quality improvement expected, and be upfront about what still requires human review or judgment." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Being specific about the expected improvement and honest about what still needs human oversight builds trust and sets accurate expectations — overpromising perfect accuracy (A) or hiding limitations (C) erodes trust once reality surfaces, and focusing on technology hype instead of concrete outcomes (B) doesn't help the stakeholder evaluate the actual proposal.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-022",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Communicate Claude's value and limitations to stakeholders",
    type: "mcq",
    stem:
      "After a Claude-assisted process is rolled out, a stakeholder is surprised to learn it still requires human review for edge cases, saying 'I thought this was fully automated.' What does this most likely indicate?",
    options: [
      { id: "A", text: "The stakeholder is simply wrong and no further communication is needed." },
      { id: "B", text: "The initial communication about the solution's limitations likely wasn't clear enough, and expectations should be reset going forward with more specific framing." },
      { id: "C", text: "Human review requirements should be removed to match what was communicated." },
      { id: "D", text: "The rollout itself was flawed from a technical standpoint." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A stakeholder being surprised by a known limitation usually points to a gap in how that limitation was originally communicated, not necessarily a technical flaw (D) — the fix is clearer communication going forward, not dismissing the stakeholder's confusion (A) or removing a needed safeguard just to match a mistaken expectation (C).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-023",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Communicate Claude's value and limitations to stakeholders",
    type: "scenario-multi-response",
    stem:
      "An associate is presenting the results of a Claude-assisted pilot project to leadership. Which two elements should be included for an honest, useful presentation? (Select 2)",
    options: [
      { id: "A", text: "The known limitations or failure cases observed, and what human oversight remains necessary going forward." },
      { id: "B", text: "A claim that the tool never makes mistakes, to build confidence in scaling it up." },
      { id: "C", text: "Omitting any mention of remaining manual steps, to make the result look more complete." },
      { id: "D", text: "The measured time or quality improvement observed during the pilot, with real numbers where available." },
    ],
    correctOptionIds: ["A","D"],
    selectCount: 2,
    explanation:
      "Real measured results (D) and an honest accounting of limitations and remaining oversight needs (A) give leadership what they need to make an informed scaling decision. Claiming infallibility (B) or hiding remaining manual steps (C) sets up leadership for an unpleasant surprise later.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-024",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Communicate Claude's value and limitations to stakeholders",
    type: "mcq",
    stem:
      "A stakeholder asks an associate, 'can this tool guarantee 100% accuracy on customer data extraction?' What is the most honest and appropriate response?",
    options: [
      { id: "A", text: "Yes, without qualification, to avoid a longer conversation." },
      { id: "B", text: "Say accuracy is not something that can be discussed or measured." },
      { id: "C", text: "No system can honestly guarantee 100% accuracy; describe the observed accuracy rate, the kinds of errors that do occur, and what review process catches them." },
      { id: "D", text: "Refuse to answer the question at all." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Giving an honest, specific answer about real accuracy and the review process that catches errors respects the stakeholder's actual question — an unqualified 'yes' (A) overpromises, refusing to answer (D) is unhelpful, and claiming accuracy can't be discussed (B) is simply untrue.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "easy",
  },
  {
    id: "assoc-wisd-025",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Communicate Claude's value and limitations to stakeholders",
    type: "mcq",
    stem:
      "An associate is worried that being upfront about a Claude-assisted tool's limitations will make leadership less likely to approve the project. What is the best way to handle this?",
    options: [
      { id: "A", text: "Present the limitations honestly alongside the value, since an approval based on inaccurate expectations creates bigger problems later when the limitations surface anyway." },
      { id: "B", text: "Downplay or omit the limitations in the pitch to improve the chances of approval." },
      { id: "C", text: "Only mention limitations if leadership specifically asks about them first." },
      { id: "D", text: "Wait until after approval to ever mention any limitations." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "An approval secured by hiding real limitations tends to backfire once those limitations surface in production — honest framing upfront (as opposed to B, D, C, which all delay or avoid disclosure) sets expectations that hold up over time.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-026",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Communicate Claude's value and limitations to stakeholders",
    type: "mcq",
    stem:
      "A technical associate needs to explain the value of a Claude-assisted workflow change to a non-technical executive audience. What communication approach best fits this audience?",
    options: [
      { id: "A", text: "Avoid explaining anything about limitations since executives only care about benefits." },
      { id: "B", text: "Use the same deeply technical language and detail that would be used with an engineering audience." },
      { id: "C", text: "Skip the conversation with executives entirely since they don't need to understand any of it." },
      { id: "D", text: "Frame the explanation around business outcomes (time saved, cost impact, risk considerations) rather than technical implementation detail." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Framing the explanation around business outcomes matches what a non-technical executive audience actually needs to evaluate the proposal — deeply technical language (B) doesn't serve that audience well, and skipping limitations (A) or the conversation entirely (C) leaves out information relevant to their decision.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-027",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Communicate Claude's value and limitations to stakeholders",
    type: "mcq",
    stem:
      "A stakeholder assumes that because a Claude-assisted process worked perfectly for one type of document, it will work equally well for a very different, more complex document type without any additional testing. How should the associate address this assumption?",
    options: [
      { id: "A", text: "Insist the new document type be abandoned entirely rather than considered." },
      { id: "B", text: "Clarify that performance on a different, more complex document type isn't guaranteed by success on the first type, and recommend validating it before relying on it the same way." },
      { id: "C", text: "Agree without qualification, since one success is a reliable predictor of performance on anything else." },
      { id: "D", text: "Avoid raising the concern to keep the stakeholder's confidence high." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Success on one case doesn't automatically generalize to a meaningfully different case — flagging this and recommending validation is the honest, useful response, rather than assuming generalization (C), staying silent to preserve confidence (D), or overreacting by ruling out the new case entirely (A).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "hard",
  },
  {
    id: "assoc-wisd-028",
    certificationSlug: "associate-foundations",
    domain: "Workflow Integration and Solution Design",
    taskStatement: "Communicate Claude's value and limitations to stakeholders",
    type: "mcq",
    stem:
      "A project sponsor asks an associate to summarize, in a short update, both the wins and the open issues from a Claude-assisted workflow rollout so far. What best reflects good stakeholder communication?",
    options: [
      { id: "A", text: "Avoid giving a concrete update and instead give a vague, non-committal summary." },
      { id: "B", text: "Report only the open issues, omitting any positive results." },
      { id: "C", text: "Report both the measurable wins and the specific open issues or edge cases still being worked through, so the sponsor has an accurate picture to make decisions from." },
      { id: "D", text: "Report only the wins and omit any open issues, to keep the update positive." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A balanced, specific update — real wins and real open issues — gives the sponsor an accurate basis for decisions. Reporting only good news (D) or only problems (B) both distort the picture, and a vague non-answer (A) doesn't give the sponsor anything useful to act on.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "easy",
  },
];
