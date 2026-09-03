import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Workflow Integration and Solution Design" as const;
const CERT = "associate-foundations" as const;
const O1 = "Apply Claude to analyze requirements and use cases" as const;
const O2 = "Leverage Claude for research, planning, and process optimization" as const;
const O3 = "Use Claude to support solution design, development, and iteration" as const;
const O4 = "Integrate Claude into existing workflows to augment or redesign them" as const;
const O5 = "Communicate Claude's value and limitations to stakeholders" as const;

export const questions: QuestionInput[] = [
  {
    id: "assoc-wisd-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A department head says 'we need an AI tool for customer feedback' with no further detail. Before recommending anything, what is the most useful way to use Claude at this stage?",
    options: [
      { id: "A", text: "Immediately build a feedback-processing tool based on the initial one-sentence request." },
      { id: "B", text: "Use Claude to help clarify the actual requirement — what feedback, what decision it should inform, and what 'success' looks like — before deciding on a solution." },
      { id: "C", text: "Ask Claude to guess what the department head probably meant and proceed without further clarification." },
      { id: "D", text: "Decline to help until the department head writes a full formal requirements document unassisted." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Clarifying the actual requirement before jumping to a solution is a genuinely useful early step — building from a vague one-liner (A) or guessing at intent (C) risks solving the wrong problem, and requiring a fully-formed document before any help is offered (D) is an unnecessary barrier when Claude can help develop that clarity.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 (Workflow Integration and Solution Design) — 'Apply Claude to analyze requirements and use cases'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "An operations lead wants to automate 'something' about their weekly reporting process, but hasn't identified which specific step is actually slow or error-prone. What should happen first?",
    options: [
      { id: "A", text: "Automate the entire reporting process end-to-end immediately, without first identifying the specific bottleneck." },
      { id: "B", text: "Use Claude to help walk through the current process step by step and identify which specific step is actually the bottleneck worth addressing." },
      { id: "C", text: "Skip analysis entirely and pick a step to automate at random." },
      { id: "D", text: "Wait until the process fails badly enough to make the bottleneck obvious." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Identifying the actual bottleneck before automating anything focuses effort where it matters — automating everything blindly (A) or picking randomly (C) risks wasted effort on the wrong step, and waiting for a failure (D) is unnecessarily reactive when analysis can be done proactively.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Apply Claude to analyze requirements and use cases'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A stakeholder describes a desired outcome ('reduce customer churn') without specifying what data is available or what 'success' would look like numerically. How can Claude best help at this early stage?",
    options: [
      { id: "A", text: "Immediately produce a churn-prediction model without asking any clarifying questions." },
      { id: "B", text: "Help the stakeholder think through what data exists, what a measurable definition of success would be, and what's actually in scope, before jumping to a solution." },
      { id: "C", text: "Assume a generic definition of churn reduction and proceed without checking it against the stakeholder's actual situation." },
      { id: "D", text: "Tell the stakeholder this task is entirely out of scope for AI assistance." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Working through data availability and a measurable success definition before proposing a solution turns a vague goal into something actionable — jumping straight to a solution (A) or a generic assumption (C) risks missing the actual situation, and dismissing the request outright (D) forecloses genuinely useful early-stage help.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Apply Claude to analyze requirements and use cases'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "scenario-multi-response",
    stem:
      "A team wants Claude's help figuring out whether a proposed internal tool is actually worth building. Which two uses of Claude are appropriate at this early requirements stage? (Select 2)",
    options: [
      { id: "A", text: "Ask Claude to help identify who would actually use the tool and what problem it solves for them." },
      { id: "B", text: "Ask Claude to help draft a rough success metric the team could later use to evaluate whether the tool worked." },
      { id: "C", text: "Ask Claude to make the final go/no-go funding decision on the team's behalf." },
      { id: "D", text: "Skip this analysis and proceed directly to a full technical build." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Clarifying the actual users/problem (A) and drafting a measurable success metric (B) are genuinely useful requirements-analysis uses of Claude. Handing over the actual funding decision (C) removes appropriate human accountability, and skipping analysis to build immediately (D) risks building the wrong thing.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Apply Claude to analyze requirements and use cases'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A manager asks for 'a dashboard' but hasn't said what decisions it needs to support or who will use it. What is the risk of building it immediately without further analysis?",
    options: [
      { id: "A", text: "There is no risk; dashboards are generic enough that requirements never matter." },
      { id: "B", text: "The dashboard may end up showing information that doesn't actually support the decisions the manager needs to make, wasting the effort of building it." },
      { id: "C", text: "The only risk is that the dashboard will load slowly." },
      { id: "D", text: "The risk only applies to external, customer-facing dashboards." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Without understanding the actual decisions and audience, a dashboard risks being built around the wrong information entirely — this isn't a load-time issue (C), and the risk applies to internal tools just as much as external ones (D), so requirements clarity matters here (A wrong).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Apply Claude to analyze requirements and use cases'",
    difficulty: "easy",
  },
  {
    id: "assoc-wisd-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A business analyst spends three hours every week manually compiling notes from multiple sources into a single planning document. How could Claude best support process optimization here?",
    options: [
      { id: "A", text: "Replace the analyst's judgment entirely and make the planning decisions autonomously." },
      { id: "B", text: "Help draft an initial compiled version from the source notes, which the analyst then reviews and finalizes, cutting the manual compilation time." },
      { id: "C", text: "Only work on this task once a year during an annual review." },
      { id: "D", text: "Suggest the analyst stop producing the planning document altogether." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Speeding up the mechanical compilation step while keeping the analyst's judgment for review and finalization is a realistic, valuable optimization — removing the human's judgment entirely (A) overreaches, addressing it only rarely (C) misses an ongoing weekly cost, and eliminating a needed deliverable (D) doesn't solve the actual inefficiency.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Leverage Claude for research, planning, and process optimization'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A team wants to explore whether entering a new geographic market makes sense, and needs a synthesized view of relevant regulatory, competitive, and demographic factors. What is an appropriate way to use Claude here?",
    options: [
      { id: "A", text: "Ask Claude to make the final market-entry decision autonomously." },
      { id: "B", text: "Use Claude to help synthesize and organize research across these factors into a structured starting point for the team's own decision-making." },
      { id: "C", text: "Skip research entirely and rely on intuition." },
      { id: "D", text: "Ask Claude only about demographic factors and ignore regulatory and competitive considerations entirely." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Synthesizing research into a structured starting point for a human decision is a strong fit for this kind of planning support — letting the tool make the actual strategic call (A) removes appropriate accountability, skipping research (C) is a step backward, and narrowing to only one factor (D) leaves the analysis incomplete.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Leverage Claude for research, planning, and process optimization'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A process improvement lead describes a five-step approval workflow and asks Claude to identify where delays are most likely occurring. What is a reasonable way to use Claude for this?",
    options: [
      { id: "A", text: "Have Claude analyze the described steps for likely bottlenecks (e.g., steps with unclear ownership or long wait times) as a starting hypothesis for the team to validate against real data." },
      { id: "B", text: "Treat Claude's guess as a confirmed root cause without checking it against actual process data." },
      { id: "C", text: "Skip process analysis and redesign the workflow from scratch with no diagnosis." },
      { id: "D", text: "Ask Claude to eliminate all five steps to guarantee no delays." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Using Claude to generate a starting hypothesis about likely bottlenecks — to be validated against real data — is a sound use of it for process optimization. Treating an unverified guess as confirmed (B) skips necessary validation, redesigning with no diagnosis (C) risks missing the real issue, and eliminating all steps (D) isn't a realistic or safe response to a process problem.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Leverage Claude for research, planning, and process optimization'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "scenario-multi-response",
    stem:
      "Which two are appropriate, high-value uses of Claude for research and process optimization? (Select 2)",
    options: [
      { id: "A", text: "Synthesizing a large volume of scattered notes into an organized planning document for a team to review." },
      { id: "B", text: "Identifying a genuinely time-consuming, repetitive bottleneck in a described workflow as a hypothesis to validate." },
      { id: "C", text: "Novelty use with no real time savings, just because it's possible to ask Claude to do it." },
      { id: "D", text: "Replacing a team's own judgment about strategic priorities entirely." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Synthesizing scattered information (A) and flagging a real bottleneck to validate (B) are genuinely valuable process-optimization uses. Novelty use without real value (C) and replacing a team's judgment on strategy (D) don't reflect a sound application of the tool to real bottlenecks.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Leverage Claude for research, planning, and process optimization'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A team wants to research a potential new vendor before signing a contract. What is an appropriate limitation to keep in mind about Claude's role in this research?",
    options: [
      { id: "A", text: "Claude's synthesis should be a starting point, and any information that will inform the final contracting decision should be verified against authoritative sources (e.g., the vendor directly, official filings) before being relied upon." },
      { id: "B", text: "Claude's research output can be treated as fully verified and final without any further checking." },
      { id: "C", text: "Vendor research is entirely outside anything Claude could reasonably help with." },
      { id: "D", text: "Only Claude's opinion of the vendor should be used to make the decision, without any other input." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Claude can meaningfully accelerate research, but information feeding a real contracting decision still needs verification against authoritative sources — treating it as fully verified already (B) skips a needed check, ruling the task out entirely (C) discards genuine value, and relying solely on Claude's synthesis for the final call (D) removes appropriate diligence.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Leverage Claude for research, planning, and process optimization'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team is designing a new internal request-intake form and wants to iterate on the field layout before finalizing it. How can Claude best support this?",
    options: [
      { id: "A", text: "Provide a single final version with no opportunity for feedback or revision." },
      { id: "B", text: "Draft an initial version of the form, then iterate based on the team's feedback on what's missing or confusing, refining it across a few rounds." },
      { id: "C", text: "Refuse to help until the team has already finalized every field on their own." },
      { id: "D", text: "Design the form once and prevent any further changes to keep it consistent." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Solution design benefits from iterating a draft based on real feedback rather than treating the first version as final (A, D) or requiring the team to have already solved the problem before any help is given (C).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Use Claude to support solution design, development, and iteration'",
    difficulty: "easy",
  },
  {
    id: "assoc-wisd-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
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
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Use Claude to support solution design, development, and iteration'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "scenario-multi-response",
    stem:
      "A team is iterating on a new employee handbook draft. Which two practices reflect good use of Claude in this design/iteration process? (Select 2)",
    options: [
      { id: "A", text: "Share specific feedback on what's unclear or missing in a draft section, and ask for a revised version addressing that feedback." },
      { id: "B", text: "Treat the very first draft as final and distribute it to all employees without review." },
      { id: "C", text: "Iterate section by section, reviewing and refining each before moving to the next." },
      { id: "D", text: "Discard all prior drafts and start over from nothing each time a small change is needed." },
    ],
    correctOptionIds: ["A", "C"],
    selectCount: 2,
    explanation:
      "Giving specific feedback for revision (A) and iterating section by section (C) reflect a genuine design/iteration process. Treating the first draft as final without review (B) skips iteration entirely, and discarding all prior work for small changes (D) wastes the value of incremental refinement.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Use Claude to support solution design, development, and iteration'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team building a new internal process gets a first draft from Claude that's mostly good but has one section that doesn't match how the team actually operates. What is the best next step?",
    options: [
      { id: "A", text: "Point out specifically what doesn't match reality in that section and ask for a revision, keeping the rest of the draft." },
      { id: "B", text: "Discard the entire draft, including the parts that were already good." },
      { id: "C", text: "Adopt the draft as-is despite the mismatch, since redoing it takes time." },
      { id: "D", text: "Ask an unrelated question instead of addressing the mismatch." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Targeted, specific feedback on the actual mismatch preserves the good parts of the draft while fixing the real issue — discarding everything (B) wastes good work, adopting a known mismatch anyway (C) bakes in an inaccuracy, and not addressing it at all (D) leaves the problem unresolved.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Use Claude to support solution design, development, and iteration'",
    difficulty: "easy",
  },
  {
    id: "assoc-wisd-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team wants Claude to help design a new customer-onboarding flow but hasn't yet decided what steps are truly necessary versus optional. What is the best approach?",
    options: [
      { id: "A", text: "Ask Claude to produce a single locked-in final flow immediately with no discussion of what's necessary versus optional." },
      { id: "B", text: "Work with Claude to first identify and discuss which steps are genuinely necessary, then iterate on the flow design based on that understanding." },
      { id: "C", text: "Skip the onboarding flow entirely since it's too complex to design collaboratively." },
      { id: "D", text: "Have Claude design the flow, then never review or adjust it again regardless of feedback." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Clarifying what's actually necessary before designing the flow, then iterating, produces a more grounded result than jumping straight to a locked final version (A) or refusing to review afterward (D). Avoiding the task entirely (C) isn't a solution.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Use Claude to support solution design, development, and iteration'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A team currently has a person manually draft the first version of every weekly status update, which then goes through the same review process as before. They want Claude to speed up just the drafting step. What kind of change is this?",
    options: [
      { id: "A", text: "A redesign of the entire status-update process from the ground up." },
      { id: "B", text: "An augmentation — the existing process and review step stay the same, but the drafting step is sped up." },
      { id: "C", text: "This isn't a meaningful integration of any kind." },
      { id: "D", text: "This requires eliminating the human review step entirely to count as an integration." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Speeding up one step while keeping the rest of the process (including review) unchanged is exactly what augmenting a workflow means, as distinct from redesigning it (A) — this is a meaningful, common integration pattern (C wrong), and it doesn't require removing existing safeguards like review (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Integrate Claude into existing workflows to augment or redesign them'",
    difficulty: "easy",
  },
  {
    id: "assoc-wisd-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A company's old process for routing support tickets was built around limitations that no longer exist now that Claude can help triage and draft responses. The team decides to rethink the whole ticket flow from scratch rather than just speeding up one step. What kind of change is this?",
    options: [
      { id: "A", text: "An augmentation of the existing process." },
      { id: "B", text: "A redesign — rethinking the workflow itself around what's now possible, rather than keeping the old structure and just accelerating a step within it." },
      { id: "C", text: "This is identical to simply automating one existing step." },
      { id: "D", text: "This isn't a legitimate way to integrate Claude into a workflow." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Rethinking the process structure itself, rather than keeping the old shape and speeding up one piece, is a redesign — distinct from augmentation (A) or simply automating a single existing step (C). Redesign is a legitimate, sometimes appropriate integration approach (D wrong) when the old constraints no longer apply.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Integrate Claude into existing workflows to augment or redesign them'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A team redesigns their entire content-approval workflow around Claude, even though the existing workflow was already fast and worked well, purely because 'we should use AI more.' What is the concern with this decision?",
    options: [
      { id: "A", text: "There is no concern; more AI usage is always better regardless of whether the existing process had a real problem." },
      { id: "B", text: "Redesigning a process that already worked well, without a real underlying problem to solve, risks unnecessary disruption for its own sake rather than genuine improvement." },
      { id: "C", text: "The only concern is that redesigns always take longer than augmentations." },
      { id: "D", text: "This approach is only a concern if employees complain about the change." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Choosing to augment or redesign should be driven by a real problem or opportunity, not by a general goal of 'using AI more' — redesigning something that already worked well risks unnecessary disruption without genuine benefit. This isn't simply about redesigns taking longer (C) or waiting for complaints (D), and 'more AI is always better' (A) is the flawed premise itself.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Integrate Claude into existing workflows to augment or redesign them'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "scenario-multi-response",
    stem:
      "Which two scenarios describe augmenting an existing workflow, rather than redesigning it? (Select 2)",
    options: [
      { id: "A", text: "Using Claude to draft the first pass of a report that a person still reviews and finalizes, with the rest of the process unchanged." },
      { id: "B", text: "Using Claude to speed up manual data entry into an existing spreadsheet template, without changing the surrounding approval process." },
      { id: "C", text: "Completely restructuring how a team routes and prioritizes incoming requests based on new capabilities, replacing the old structure entirely." },
      { id: "D", text: "Rebuilding an entire customer-service process around a fundamentally different structure than before." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Both A and B keep the existing process structure intact while speeding up one step — the definition of augmentation. C and D both describe rethinking the process structure itself, which is redesign, not augmentation.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Integrate Claude into existing workflows to augment or redesign them'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A logistics team's current process for scheduling deliveries was designed around a constraint (limited visibility into real-time traffic) that Claude-assisted tools can now help address. Given this, what is a reasonable way to decide between augmenting versus redesigning the process?",
    options: [
      { id: "A", text: "Always default to augmentation, regardless of whether the original constraint still applies." },
      { id: "B", text: "Consider whether the original constraint that shaped the current process still holds — if it no longer does, a redesign may unlock more value than simply speeding up the old structure." },
      { id: "C", text: "Always default to a full redesign, regardless of whether the current process already works well." },
      { id: "D", text: "The choice between augmentation and redesign should be made without considering what shaped the original process." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Checking whether the constraint that originally shaped a process still applies is a sound way to decide between augmenting and redesigning — always defaulting to one approach regardless of context (A, C) skips this judgment, and ignoring the original rationale for the process (D) misses the actual signal for which approach fits.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Integrate Claude into existing workflows to augment or redesign them'",
    difficulty: "hard",
  },
  {
    id: "assoc-wisd-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "An associate is proposing a Claude-assisted workflow change to a skeptical stakeholder. Which framing best reflects honest communication of value and limitations?",
    options: [
      { id: "A", text: "Claim the tool will be perfectly accurate and require no human review at all, to make the pitch more convincing." },
      { id: "B", text: "Describe the specific time or quality improvement expected, and be upfront about what still requires human review or judgment." },
      { id: "C", text: "Avoid mentioning any limitations at all, since bringing them up might make the stakeholder hesitant." },
      { id: "D", text: "Focus the pitch entirely on how advanced the underlying technology is, without describing the actual expected outcome." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Being specific about the expected improvement and honest about what still needs human oversight builds trust and sets accurate expectations — overpromising perfect accuracy (A) or hiding limitations (C) erodes trust once reality surfaces, and focusing on technology hype instead of concrete outcomes (D) doesn't help the stakeholder evaluate the actual proposal.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "After a Claude-assisted process is rolled out, a stakeholder is surprised to learn it still requires human review for edge cases, saying 'I thought this was fully automated.' What does this most likely indicate?",
    options: [
      { id: "A", text: "The rollout itself was flawed from a technical standpoint." },
      { id: "B", text: "The initial communication about the solution's limitations likely wasn't clear enough, and expectations should be reset going forward with more specific framing." },
      { id: "C", text: "The stakeholder is simply wrong and no further communication is needed." },
      { id: "D", text: "Human review requirements should be removed to match what was communicated." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A stakeholder being surprised by a known limitation usually points to a gap in how that limitation was originally communicated, not necessarily a technical flaw (A) — the fix is clearer communication going forward, not dismissing the stakeholder's confusion (C) or removing a needed safeguard just to match a mistaken expectation (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "scenario-multi-response",
    stem:
      "An associate is presenting the results of a Claude-assisted pilot project to leadership. Which two elements should be included for an honest, useful presentation? (Select 2)",
    options: [
      { id: "A", text: "The measured time or quality improvement observed during the pilot, with real numbers where available." },
      { id: "B", text: "The known limitations or failure cases observed, and what human oversight remains necessary going forward." },
      { id: "C", text: "A claim that the tool never makes mistakes, to build confidence in scaling it up." },
      { id: "D", text: "Omitting any mention of remaining manual steps, to make the result look more complete." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Real measured results (A) and an honest accounting of limitations and remaining oversight needs (B) give leadership what they need to make an informed scaling decision. Claiming infallibility (C) or hiding remaining manual steps (D) sets up leadership for an unpleasant surprise later.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "A stakeholder asks an associate, 'can this tool guarantee 100% accuracy on customer data extraction?' What is the most honest and appropriate response?",
    options: [
      { id: "A", text: "Yes, without qualification, to avoid a longer conversation." },
      { id: "B", text: "No system can honestly guarantee 100% accuracy; describe the observed accuracy rate, the kinds of errors that do occur, and what review process catches them." },
      { id: "C", text: "Refuse to answer the question at all." },
      { id: "D", text: "Say accuracy is not something that can be discussed or measured." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Giving an honest, specific answer about real accuracy and the review process that catches errors respects the stakeholder's actual question — an unqualified 'yes' (A) overpromises, refusing to answer (C) is unhelpful, and claiming accuracy can't be discussed (D) is simply untrue.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "easy",
  },
  {
    id: "assoc-wisd-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "An associate is worried that being upfront about a Claude-assisted tool's limitations will make leadership less likely to approve the project. What is the best way to handle this?",
    options: [
      { id: "A", text: "Downplay or omit the limitations in the pitch to improve the chances of approval." },
      { id: "B", text: "Present the limitations honestly alongside the value, since an approval based on inaccurate expectations creates bigger problems later when the limitations surface anyway." },
      { id: "C", text: "Wait until after approval to ever mention any limitations." },
      { id: "D", text: "Only mention limitations if leadership specifically asks about them first." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "An approval secured by hiding real limitations tends to backfire once those limitations surface in production — honest framing upfront (as opposed to A, C, D, which all delay or avoid disclosure) sets expectations that hold up over time.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "A technical associate needs to explain the value of a Claude-assisted workflow change to a non-technical executive audience. What communication approach best fits this audience?",
    options: [
      { id: "A", text: "Use the same deeply technical language and detail that would be used with an engineering audience." },
      { id: "B", text: "Frame the explanation around business outcomes (time saved, cost impact, risk considerations) rather than technical implementation detail." },
      { id: "C", text: "Avoid explaining anything about limitations since executives only care about benefits." },
      { id: "D", text: "Skip the conversation with executives entirely since they don't need to understand any of it." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Framing the explanation around business outcomes matches what a non-technical executive audience actually needs to evaluate the proposal — deeply technical language (A) doesn't serve that audience well, and skipping limitations (C) or the conversation entirely (D) leaves out information relevant to their decision.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "medium",
  },
  {
    id: "assoc-wisd-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "A stakeholder assumes that because a Claude-assisted process worked perfectly for one type of document, it will work equally well for a very different, more complex document type without any additional testing. How should the associate address this assumption?",
    options: [
      { id: "A", text: "Agree without qualification, since one success is a reliable predictor of performance on anything else." },
      { id: "B", text: "Clarify that performance on a different, more complex document type isn't guaranteed by success on the first type, and recommend validating it before relying on it the same way." },
      { id: "C", text: "Avoid raising the concern to keep the stakeholder's confidence high." },
      { id: "D", text: "Insist the new document type be abandoned entirely rather than considered." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Success on one case doesn't automatically generalize to a meaningfully different case — flagging this and recommending validation is the honest, useful response, rather than assuming generalization (A), staying silent to preserve confidence (C), or overreacting by ruling out the new case entirely (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "hard",
  },
  {
    id: "assoc-wisd-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O5,
    type: "mcq",
    stem:
      "A project sponsor asks an associate to summarize, in a short update, both the wins and the open issues from a Claude-assisted workflow rollout so far. What best reflects good stakeholder communication?",
    options: [
      { id: "A", text: "Report only the wins and omit any open issues, to keep the update positive." },
      { id: "B", text: "Report both the measurable wins and the specific open issues or edge cases still being worked through, so the sponsor has an accurate picture to make decisions from." },
      { id: "C", text: "Report only the open issues, omitting any positive results." },
      { id: "D", text: "Avoid giving a concrete update and instead give a vague, non-committal summary." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A balanced, specific update — real wins and real open issues — gives the sponsor an accurate basis for decisions. Reporting only good news (A) or only problems (C) both distort the picture, and a vague non-answer (D) doesn't give the sponsor anything useful to act on.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 4 — 'Communicate Claude's value and limitations to stakeholders'",
    difficulty: "easy",
  },
];
