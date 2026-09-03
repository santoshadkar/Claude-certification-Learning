import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Troubleshooting and Optimization" as const;
const CERT = "associate-foundations" as const;
const O1 = "Identify, diagnose, and resolve issues with underperforming prompts or poor outputs" as const;
const O2 = "Adjust approach based on feedback and results" as const;
const O3 = "Optimize workflows for efficiency and effectiveness" as const;

export const questions: QuestionInput[] = [
  {
    id: "assoc-to-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "An associate's prompt for generating weekly status updates consistently produces updates that are too generic to be useful, no matter how many times it's re-run. What is the most likely root cause?",
    options: [
      { id: "A", text: "The model is fundamentally incapable of writing status updates." },
      { id: "B", text: "The prompt itself is underspecified — it likely lacks the actual details (what happened this week, specific metrics, blockers) needed to produce a specific, useful update." },
      { id: "C", text: "Re-running the exact same prompt enough times will eventually fix the genericness." },
      { id: "D", text: "Status updates can never be improved through prompting." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Consistently generic output from repeated identical prompts points to a missing-detail problem in the prompt itself, not a capability limit (A, D) — re-running the same underspecified prompt (C) won't fix a specificity problem that the prompt itself causes.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 (Troubleshooting and Optimization) — 'Identify, diagnose, and resolve issues with underperforming prompts or poor outputs'",
    difficulty: "easy",
  },
  {
    id: "assoc-to-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A prompt asking Claude to 'analyze this data and give recommendations' produces recommendations that don't seem grounded in the actual data provided. What diagnostic step should come first?",
    options: [
      { id: "A", text: "Assume the model ignored the data entirely and switch to a different AI tool immediately." },
      { id: "B", text: "Check whether the prompt actually instructed Claude to base its recommendations specifically on the provided data and to reference it explicitly, since a generic request can produce a generic answer even when data is present." },
      { id: "C", text: "Give up on data-driven recommendations as a task type." },
      { id: "D", text: "Add more unrelated data to the prompt to see if that fixes it." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Checking whether the prompt actually asked for grounded, data-referencing reasoning is the right first diagnostic step — a vague request can produce ungrounded output even with good data present. Switching tools (A) or abandoning the task type (C) skip diagnosis entirely, and adding unrelated data (D) doesn't address the actual gap.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Identify, diagnose, and resolve issues with underperforming prompts or poor outputs'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "The same prompt, asking for 'a short summary,' produces summaries of wildly different lengths on different occasions. What does this variability most likely indicate, and what's the fix?",
    options: [
      { id: "A", text: "The variability indicates a system malfunction that requires restarting the application." },
      { id: "B", text: "'Short' is ambiguous; replacing it with a concrete constraint (e.g., '3 sentences') should produce more consistent results." },
      { id: "C", text: "Length cannot be controlled through prompting under any circumstances." },
      { id: "D", text: "The variability is intentional and desirable, so no fix is needed." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Ambiguous constraints like 'short' are a common source of inconsistent output, and replacing them with something concrete is the direct fix — this isn't a malfunction (A), length is controllable when specified precisely (C), and unwanted variability isn't something to just accept as desirable (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Identify, diagnose, and resolve issues with underperforming prompts or poor outputs'",
    difficulty: "easy",
  },
  {
    id: "assoc-to-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "scenario-multi-response",
    stem:
      "A prompt asking Claude to draft interview questions for a job candidate keeps producing overly generic questions unrelated to the specific role. Which two diagnostic checks are most useful here? (Select 2)",
    options: [
      { id: "A", text: "Check whether the prompt actually includes the specific job description or role requirements, rather than just the job title." },
      { id: "B", text: "Check whether the prompt specifies what skills or qualities the questions should probe for." },
      { id: "C", text: "Assume the issue is unfixable and abandon using Claude for this task." },
      { id: "D", text: "Assume the prompt is already optimal and the model is simply incapable of this task." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Checking whether the specific role details (A) and target skills/qualities (B) were actually included in the prompt are the right diagnostic steps for generic output — abandoning the task (C) or assuming model incapability without diagnosis (D) skip the actual troubleshooting process.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Identify, diagnose, and resolve issues with underperforming prompts or poor outputs'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "An associate's prompt for translating technical jargon into plain language for customers keeps leaving some jargon untranslated. What is a good next diagnostic step?",
    options: [
      { id: "A", text: "Review the actual output to identify a pattern in which terms get missed (e.g., acronyms specifically), then adjust the prompt to explicitly address that pattern." },
      { id: "B", text: "Assume the issue is random and unfixable." },
      { id: "C", text: "Stop using Claude for translation tasks entirely." },
      { id: "D", text: "Ask for the output in a different language instead." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Looking for a concrete pattern in what's being missed (e.g., specifically acronyms) turns a vague complaint into an actionable prompt fix — assuming it's unfixable (B) or unrelated workarounds (C, D) skip the useful diagnostic step of actually examining the failure pattern.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Identify, diagnose, and resolve issues with underperforming prompts or poor outputs'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A prompt used to categorize incoming support tickets into one of five categories is frequently misclassifying tickets that could plausibly fit more than one category. What is a likely underlying issue?",
    options: [
      { id: "A", text: "The categories themselves may have unclear or overlapping definitions, and the prompt doesn't give guidance on how to resolve ambiguous, borderline cases." },
      { id: "B", text: "The model is incapable of any classification tasks." },
      { id: "C", text: "There is no way to improve classification consistency through prompting." },
      { id: "D", text: "The number of tickets being processed is the root cause of the misclassification." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Ambiguous or overlapping category definitions, combined with no guidance for borderline cases, is a common and fixable cause of inconsistent classification — this isn't a general incapability (B, C), and ticket volume itself (D) isn't what's causing individual misclassifications.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Identify, diagnose, and resolve issues with underperforming prompts or poor outputs'",
    difficulty: "hard",
  },
  {
    id: "assoc-to-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A prompt for drafting client emails frequently produces a tone that's too casual for the client relationship. What troubleshooting step directly addresses this?",
    options: [
      { id: "A", text: "Add explicit tone guidance to the prompt (e.g., 'formal, professional tone appropriate for a longstanding enterprise client') rather than leaving tone unspecified." },
      { id: "B", text: "Assume tone cannot be influenced by prompting." },
      { id: "C", text: "Switch entirely to writing every client email manually going forward." },
      { id: "D", text: "Ask Claude to add more exclamation points." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Explicitly specifying the desired tone directly addresses an unspecified-tone problem — tone is controllable through prompting when actually specified (B wrong), abandoning the tool for this task entirely (C) is an overcorrection, and adding emphasis punctuation (D) doesn't address formality.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Identify, diagnose, and resolve issues with underperforming prompts or poor outputs'",
    difficulty: "easy",
  },
  {
    id: "assoc-to-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A manager rejects a Claude-drafted document three separate times for the same reason — it doesn't follow the company's required section headers. What is the most efficient long-term response?",
    options: [
      { id: "A", text: "Keep manually adding the correct headers after each draft, indefinitely, without changing the prompt or Project instructions." },
      { id: "B", text: "Update the prompt or Project instructions to explicitly specify the required section headers, so this feedback doesn't need to be given a fourth time." },
      { id: "C", text: "Stop asking Claude to draft this type of document at all." },
      { id: "D", text: "Ask the manager to stop giving this specific feedback." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Repeated identical feedback is a clear signal to fix the underlying prompt or configuration so the same correction isn't needed every time — continuing to patch it manually forever (A) doesn't scale, abandoning the task (C) is an overcorrection, and dismissing the manager's feedback (D) ignores a legitimate, fixable pattern.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Adjust approach based on feedback and results'",
    difficulty: "easy",
  },
  {
    id: "assoc-to-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "After several rounds of feedback, an associate notices that outputs have meaningfully improved when the prompt includes a concrete example of the desired format, but the associate keeps forgetting to include that example each time. What is the best fix?",
    options: [
      { id: "A", text: "Continue relying on memory to remember to add the example each time." },
      { id: "B", text: "Save the effective prompt (including the example) as a reusable template or persist it in a Project, so the improvement isn't lost between uses." },
      { id: "C", text: "Stop using the example, since it's inconvenient to remember." },
      { id: "D", text: "Ask a coworker to remember it instead." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Once a specific adjustment is shown to work, persisting it (a saved template, or Project instructions) locks in the improvement rather than depending on memory each time — relying on memory (A) or a coworker's memory (D) doesn't fix the reliability issue, and dropping the improvement because it's inconvenient to repeat manually (C) throws away a known fix instead of persisting it.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Adjust approach based on feedback and results'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "scenario-multi-response",
    stem:
      "A team notices that customer-facing summaries drafted by Claude are consistently too technical for the intended audience, based on repeated feedback from the review team. Which two responses reflect adjusting based on that feedback? (Select 2)",
    options: [
      { id: "A", text: "Update the prompt or Project instructions to explicitly specify a non-technical, plain-language target audience." },
      { id: "B", text: "Add an example of a previous summary that was successfully written in the right tone, to use as a reference." },
      { id: "C", text: "Ignore the repeated feedback since the summaries are still factually accurate." },
      { id: "D", text: "Ask the review team to stop giving this type of feedback since it's inconvenient to keep addressing." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Explicitly specifying the audience (A) and providing a concrete reference example (B) both directly address the repeated feedback. Dismissing the feedback because accuracy is fine (C) misses that tone was the actual complaint, and asking reviewers to stop raising a valid, recurring issue (D) doesn't fix the underlying problem.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Adjust approach based on feedback and results'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "An associate gets much better results after switching from a vague request to a highly specific one, but reverts to the vague version for convenience on the next similar task. What does this suggest?",
    options: [
      { id: "A", text: "The lesson from the improvement wasn't actually applied going forward, undermining the benefit of having learned it in the first place." },
      { id: "B", text: "This is a reasonable approach, since specificity only matters the first time." },
      { id: "C", text: "Vague and specific prompts always produce identical results, so it doesn't matter which is used." },
      { id: "D", text: "This indicates the model's behavior is completely random regardless of prompt specificity." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Reverting to a known-worse approach out of convenience discards a lesson that was just learned — specificity's benefit doesn't expire after one use (B), and the premise that vague and specific prompts perform identically (C) or that behavior is random regardless of the prompt (D) both contradict the scenario's own observed improvement.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Adjust approach based on feedback and results'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A Claude-assisted onboarding checklist keeps getting flagged for missing a compliance step that legal says is mandatory. What is the appropriate long-term adjustment?",
    options: [
      { id: "A", text: "Manually add the missing compliance step every single time the checklist is generated, without ever updating the source prompt or Project." },
      { id: "B", text: "Update the prompt or Project instructions/knowledge source to explicitly and permanently include the mandatory compliance step, so it isn't missing going forward." },
      { id: "C", text: "Remove the compliance step from the requirement instead of the checklist." },
      { id: "D", text: "Stop generating onboarding checklists with Claude altogether." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A recurring, known gap should be fixed at the source (the prompt or configuration) so it's permanently addressed — continuing to patch it manually every time (A) doesn't scale, removing an actual legal requirement (C) is not a legitimate option, and abandoning the tool entirely (D) is an overcorrection to a fixable configuration gap.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Adjust approach based on feedback and results'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "An associate has a reliable, well-tested prompt for drafting weekly reports, but retypes the entire prompt from memory every single week instead of saving it anywhere. What optimization would most improve this workflow?",
    options: [
      { id: "A", text: "Save the proven prompt as a reusable template (or persist it in a Project) so it doesn't need to be recreated from memory each time." },
      { id: "B", text: "Continue retyping it from memory, since it works fine as-is." },
      { id: "C", text: "Make the prompt longer each week to add variety." },
      { id: "D", text: "Switch to a completely different prompt every week for novelty." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Saving a proven, reusable prompt eliminates unnecessary repeated effort — this is a clear efficiency win compared to recreating it from memory weekly (B), and there's no benefit to arbitrarily lengthening (C) or replacing a working prompt for novelty's sake (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Optimize workflows for efficiency and effectiveness'",
    difficulty: "easy",
  },
  {
    id: "assoc-to-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team uses the most capable, highest-cost model tier for a high-volume task of tagging simple, short customer comments by sentiment, where a much cheaper tier would perform just as well. What optimization opportunity does this represent?",
    options: [
      { id: "A", text: "Switching to a faster, lower-cost tier suited to this simple, high-volume task, reducing cost without meaningfully sacrificing quality for this use case." },
      { id: "B", text: "There is no optimization opportunity, since using the best available tier is always optimal regardless of task." },
      { id: "C", text: "The only optimization available is reducing the number of comments processed." },
      { id: "D", text: "Optimization opportunities don't apply to model tier choices, only to prompt wording." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Matching model tier to actual task difficulty is a real efficiency optimization — 'always use the best tier' (B) ignores cost/speed tradeoffs, reducing volume (C) sidesteps the actual inefficiency rather than fixing it, and tier choice is very much a legitimate optimization lever, not just wording (D wrong).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Optimize workflows for efficiency and effectiveness'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "scenario-multi-response",
    stem:
      "A team wants to make their Claude-assisted proposal-drafting workflow more efficient. Which two changes would meaningfully improve efficiency? (Select 2)",
    options: [
      { id: "A", text: "Set up a Project with the proposal template and reference case studies persisted, instead of re-explaining them in every new conversation." },
      { id: "B", text: "Save a proven, effective prompt structure as a reusable starting point instead of writing a new one from scratch each time." },
      { id: "C", text: "Require every proposal to go through a completely new, unconfigured conversation to keep things 'fresh.'" },
      { id: "D", text: "Avoid ever reusing a successful approach, since each proposal should be treated as entirely unique." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Persisting recurring reference material in a Project (A) and reusing a proven prompt structure (B) both cut repeated manual setup. Deliberately avoiding configuration (C) and refusing to reuse anything that works (D) both discard real, available efficiency gains.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Optimize workflows for efficiency and effectiveness'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "An associate spends significant time each week manually copying data from one system's export into a format Claude can use, before ever getting to the actual analysis step. What is a reasonable optimization to consider?",
    options: [
      { id: "A", text: "Look for ways to streamline or reduce the manual reformatting step itself (e.g., a more direct export format, or a reusable process for the conversion) so the actual analysis can happen sooner." },
      { id: "B", text: "Continue doing the reformatting manually indefinitely, since it doesn't involve Claude directly." },
      { id: "C", text: "Skip the analysis step entirely to save time." },
      { id: "D", text: "Add more manual steps to make the process feel more thorough." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A recurring manual bottleneck upstream of the actual valuable work is worth optimizing directly, even if it's not the Claude-facing step itself (B misses this) — skipping the analysis (C) removes the actual value, and adding more manual steps (D) makes the inefficiency worse, not better.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Optimize workflows for efficiency and effectiveness'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A workflow currently requires three separate, sequential conversations to produce one final deliverable, with the associate manually copying output from one conversation into the next each time. What optimization would likely help most?",
    options: [
      { id: "A", text: "Consolidating this into a single, well-structured Project or conversation where context can be maintained and referenced directly, reducing manual copying between separate conversations." },
      { id: "B", text: "Adding a fourth separate conversation to the process for extra thoroughness." },
      { id: "C", text: "Continuing to copy output manually between conversations, since it currently works." },
      { id: "D", text: "Removing all context between the three steps to make each one fully independent." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Reducing unnecessary fragmentation and manual copying by consolidating related steps into one well-structured context is a real efficiency gain — adding more separate steps (B) or removing helpful context (D) both move in the wrong direction, and 'it currently works' (C) doesn't mean it's efficient.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Optimize workflows for efficiency and effectiveness'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team's Claude-assisted document review process currently has every document reviewed at the same level of depth, regardless of length or complexity, causing simple documents to take as long as complex ones. What optimization addresses this?",
    options: [
      { id: "A", text: "Tailor the review approach to document complexity — a lighter-touch process for simple documents and a more thorough one for complex documents — rather than applying one uniform depth to everything." },
      { id: "B", text: "Apply the most thorough possible review to every document regardless of complexity, to be safe." },
      { id: "C", text: "Skip review entirely for all documents to save time." },
      { id: "D", text: "Only review documents that are already known to be simple, and skip review for complex ones." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Matching review depth to actual document complexity avoids wasting effort on simple documents while still giving complex ones the attention they need — uniform maximum thoroughness everywhere (B) is inefficient, and skipping review altogether (C) or skipping it specifically for complex documents (D) both introduce real risk instead of efficiency.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Optimize workflows for efficiency and effectiveness'",
    difficulty: "hard",
  },
  {
    id: "assoc-to-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A prompt asking Claude to 'proofread this document' keeps returning only a list of typos, when the associate actually also wants feedback on structure and clarity. What is the most likely issue?",
    options: [
      { id: "A", text: "The prompt only specified proofreading, which is naturally interpreted narrowly (spelling/grammar); broader feedback needs to be explicitly requested too." },
      { id: "B", text: "Claude is incapable of ever giving structural or clarity feedback." },
      { id: "C", text: "The document itself must be rewritten before any feedback is possible." },
      { id: "D", text: "This indicates a technical error that requires restarting the session." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "'Proofread' is naturally interpreted as a narrower request (spelling/grammar) than a broader structure-and-clarity review — asking explicitly for the broader feedback resolves the gap. This isn't a capability limit (B), a prerequisite rewrite (C), or a technical error (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Identify, diagnose, and resolve issues with underperforming prompts or poor outputs'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "An associate receives feedback that a drafted proposal was 'too long' but doesn't ask what specifically should be cut, and instead just deletes the last paragraph each time regardless of content. What is the issue with this approach to adjusting based on feedback?",
    options: [
      { id: "A", text: "There is no issue, since the proposal does get shorter each time." },
      { id: "B", text: "Reducing length by an arbitrary, content-blind rule (always cut the last paragraph) doesn't actually engage with what made the feedback valid, and may remove important content while leaving less important content in." },
      { id: "C", text: "The feedback itself must have been wrong if a full rewrite doesn't fix it immediately." },
      { id: "D", text: "Length feedback should always be ignored since content quality matters more." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Responding to feedback with an arbitrary, content-blind rule doesn't actually engage with what made the document too long — getting shorter isn't the same as getting better (A wrong), the feedback isn't automatically invalid just because a naive fix didn't fully resolve it (C), and length and quality both matter rather than one overriding the other by default (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Adjust approach based on feedback and results'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team realizes that a Claude-assisted task they perform weekly could instead be handled through a persisted Project configuration, saving significant repeated setup time, but no one has prioritized making the change because the current approach 'still works.' What is the risk of this reasoning?",
    options: [
      { id: "A", text: "There is no risk, since 'it still works' is a sufficient reason not to change anything." },
      { id: "B", text: "The team continues to pay an avoidable, recurring efficiency cost every week, even though a known, low-effort optimization is available." },
      { id: "C", text: "Making the change would definitely break the current process, so avoiding it is the safer choice." },
      { id: "D", text: "Efficiency only matters for tasks performed daily, not weekly ones." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "'It still works' doesn't mean it's efficient — a known, available optimization left unaddressed means an avoidable cost keeps recurring. There's no basis in the scenario for assuming the change would break anything (C), and recurring inefficiency is worth addressing regardless of exact frequency (D wrong).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Optimize workflows for efficiency and effectiveness'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A prompt that previously worked well for summarizing meeting notes suddenly starts producing much worse summaries after the meeting notes format changed (e.g., switching from bullet points to free-form paragraphs). What is the most likely explanation?",
    options: [
      { id: "A", text: "The prompt's original instructions may have been implicitly tuned to the old bullet-point format and need to be revisited now that the input format has changed." },
      { id: "B", text: "The drop in quality is unrelated to the input format change and is purely random." },
      { id: "C", text: "Once a prompt works well, it will always continue working well regardless of any change to the input." },
      { id: "D", text: "This means summarization is no longer possible at all." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A prompt that worked for one input format may rely on assumptions that don't hold once that format changes — this is a reasonable, checkable hypothesis, not randomness (B), and a working prompt isn't guaranteed to keep working through arbitrary changes to its input (C), nor does one bad run mean the task is now impossible (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Identify, diagnose, and resolve issues with underperforming prompts or poor outputs'",
    difficulty: "hard",
  },
  {
    id: "assoc-to-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "scenario-multi-response",
    stem:
      "A prompt for generating meeting agendas has been refined over several iterations based on real feedback from meeting organizers. Which two practices reflect good ongoing adjustment based on feedback? (Select 2)",
    options: [
      { id: "A", text: "Keep a record of what specific changes improved the output, so future adjustments build on what's already been learned rather than starting over." },
      { id: "B", text: "Revisit the prompt again if organizers start giving new, different feedback in the future, rather than assuming the current version is permanently final." },
      { id: "C", text: "Consider the prompt permanently finished after the first round of positive feedback, with no further changes ever needed." },
      { id: "D", text: "Discard all previous learnings each time new feedback comes in and start completely from scratch." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Recording what worked (A) and staying open to further adjustment as new feedback arrives (B) reflect genuine ongoing improvement. Treating early positive feedback as permanently final (C) ignores that needs can change, and discarding prior learnings each time (D) wastes accumulated knowledge unnecessarily.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Adjust approach based on feedback and results'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team wants to evaluate whether a proposed change to their Claude-assisted workflow actually improves efficiency before rolling it out to everyone. What is a reasonable approach?",
    options: [
      { id: "A", text: "Roll out the change to the entire team immediately with no evaluation, based purely on intuition that it will help." },
      { id: "B", text: "Try the proposed change on a small scale first and compare the actual time or quality outcomes against the current approach before deciding to roll it out broadly." },
      { id: "C", text: "Never change anything about an existing workflow, regardless of how promising an idea seems." },
      { id: "D", text: "Evaluate the change based solely on how exciting the idea sounds, without checking real outcomes." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Testing a proposed optimization on a small scale and comparing real outcomes before a full rollout is a sound way to validate an efficiency improvement — rolling out untested changes broadly (A) or judging by how exciting an idea sounds (D) both skip real validation, and refusing to ever consider changes (C) forecloses genuine improvements.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Optimize workflows for efficiency and effectiveness'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A prompt for generating a project risk assessment consistently returns the same three generic risks regardless of what project is described. What is the most likely diagnosis?",
    options: [
      { id: "A", text: "The prompt likely isn't directing Claude to actually reason from the specific project details provided, so it's defaulting to generic, commonly-cited risks instead." },
      { id: "B", text: "Risk assessment is a task Claude fundamentally cannot perform." },
      { id: "C", text: "The issue only happens with certain unlucky project descriptions and has no consistent cause." },
      { id: "D", text: "Nothing is wrong, since these three risks are probably relevant to every project anyway." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Identical, generic output regardless of varying input is a strong sign the prompt isn't actually directing the model to reason from the specific details given — this isn't a fundamental capability gap (B) or an inconsistent, uncaused issue (C), and assuming the same three risks always happen to be the right answer (D) isn't a safe assumption to make without checking.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Identify, diagnose, and resolve issues with underperforming prompts or poor outputs'",
    difficulty: "hard",
  },
  {
    id: "assoc-to-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team wants to reduce the amount of time spent giving Claude the same background context at the start of every new conversation about an ongoing initiative. Which optimization directly addresses this?",
    options: [
      { id: "A", text: "Persist the recurring background context in a Project's instructions or knowledge sources, so it doesn't need to be retyped at the start of each new conversation." },
      { id: "B", text: "Continue retyping the same background context every time, since it only takes a few minutes." },
      { id: "C", text: "Remove the background context entirely and hope Claude infers it correctly." },
      { id: "D", text: "Assign a different, unrelated task each time to avoid needing the same context repeatedly." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Persisting genuinely recurring context in a Project is the direct fix for repeated setup time — accepting the repeated cost (B) doesn't optimize anything, dropping needed context (C) risks worse output, and avoiding the task rather than fixing the inefficiency (D) doesn't address the real problem.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Optimize workflows for efficiency and effectiveness'",
    difficulty: "easy",
  },
  {
    id: "assoc-to-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "After adjusting a prompt based on feedback, the new version fixes the original complaint but introduces a new, different problem. What is the appropriate next step?",
    options: [
      { id: "A", text: "Treat the new problem as acceptable collateral damage and stop iterating." },
      { id: "B", text: "Continue iterating — address the new issue as well, ideally without reintroducing the original problem, rather than treating the first fix as the final version." },
      { id: "C", text: "Revert to the original version and accept the original complaint as unfixable." },
      { id: "D", text: "Assume no further iteration is possible once a prompt has already been changed once." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Iteration is an ongoing process — fixing one issue doesn't mean the prompt is done if a new issue has surfaced, and the goal is to keep refining without losing prior progress. Accepting a new problem as unavoidable (A), reverting to the original known problem (C), or assuming a prompt can only be changed once (D) all stop iterating prematurely.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Adjust approach based on feedback and results'",
    difficulty: "medium",
  },
  {
    id: "assoc-to-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team notices their Claude-assisted workflow for drafting job postings takes about the same total time as writing postings manually, because so much time is spent manually reformatting Claude's output to match the applicant-tracking system's required format. What optimization would help most?",
    options: [
      { id: "A", text: "Update the prompt to directly request output already structured in the applicant-tracking system's required format, eliminating the manual reformatting step." },
      { id: "B", text: "Continue reformatting manually every time, since the drafting step itself is still faster than writing from scratch." },
      { id: "C", text: "Stop using the applicant-tracking system's required format altogether to avoid the reformatting step." },
      { id: "D", text: "Add an additional manual review step on top of the existing reformatting step." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "If the bottleneck is a predictable reformatting step, asking for the needed format directly in the prompt removes that repeated manual work — accepting the current inefficiency because drafting alone is faster (B) misses the actual overall time cost, abandoning a required system format (C) isn't a realistic option, and adding more manual steps (D) makes the workflow slower, not faster.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 7 — 'Optimize workflows for efficiency and effectiveness'",
    difficulty: "medium",
  },
];
