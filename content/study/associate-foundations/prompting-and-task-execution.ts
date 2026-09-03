import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "associate-foundations" as const;
const DOMAIN = "Prompting and Task Execution" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "This domain covers the core mechanical skill of the whole exam: turning a business need into a prompt that reliably gets you a usable answer, and knowing how to reshape that prompt when the task itself is unusual.",
  concepts: [
    {
      taskStatement: "Create effective prompts for business and technical tasks",
      summary:
        "A strong prompt gives Claude three things a vague one doesn't: a clear goal, the context needed to act on it (audience, constraints, source material), and a concrete description of what 'done' looks like. 'Summarize this report' is weak; 'summarize this report for a VP who has 2 minutes, in 3 bullets focused on budget risk' is strong because it removes ambiguity about length, audience, and focus. On the exam, look for answers that add concrete constraints and success criteria rather than answers that just add more words to the prompt.",
    },
    {
      taskStatement: "Apply task decomposition techniques to structure complex requests",
      summary:
        "Complex, multi-part requests ('research competitors, then draft a positioning doc, then write launch emails') produce better results when broken into sequential steps rather than asked for all at once — each step's output becomes verified input to the next, and you catch problems early instead of at the end. This is the same instinct behind prompt chaining: decompose by natural checkpoints (research → draft → refine) rather than by arbitrary word count.",
    },
    {
      taskStatement: "Iterate prompts to improve output quality",
      summary:
        "Treat the first response as a draft of the prompt, not just the output. If the result is close but wrong in a specific way (too formal, missing a section, wrong assumption), tell Claude exactly what to change rather than re-asking from scratch — this preserves the useful parts of the first answer. If results are inconsistent across similar requests, that's usually a sign the instructions were ambiguous, not that the task is impossible.",
    },
    {
      taskStatement: "Adapt prompting strategies based on task type (analysis, research, drafting, brainstorming)",
      summary:
        "Different task types want different instructions. Analysis benefits from asking Claude to show its reasoning and cite specific evidence. Research benefits from explicit scope boundaries (what sources, what time range) to avoid an unfocused answer. Drafting benefits from examples of tone/format you want matched. Brainstorming benefits from explicitly asking for a wide range of options before narrowing, since asking for 'the best idea' up front collapses the exploration too early.",
    },
  ],
  resources: [RESOURCES.promptEngineering, RESOURCES.helpCenter],
};
