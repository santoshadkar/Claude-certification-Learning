import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "associate-foundations" as const;
const DOMAIN = "Workflow Integration and Solution Design" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Moves beyond single prompts to using Claude as part of a broader process — spotting where it fits into existing work, and being able to explain that value (and its limits) to people who weren't in the room.",
  concepts: [
    {
      taskStatement: "Apply Claude to analyze requirements and use cases",
      summary:
        "Before automating anything, use Claude to help clarify what a process actually needs to produce, for whom, and what 'good' looks like — this is a genuinely useful early step, not busywork, because vague requirements produce vague automation.",
    },
    {
      taskStatement: "Leverage Claude for research, planning, and process optimization",
      summary:
        "Claude is well suited to synthesizing information, drafting plans, and spotting redundant or slow steps in a described process. The associate-level skill is directing this at real bottlenecks (a report that takes 3 hours weekly, a repetitive triage task) rather than novelty use cases.",
    },
    {
      taskStatement: "Use Claude to support solution design, development, and iteration",
      summary:
        "Solution design benefits from Claude iterating on drafts of a plan, a workflow diagram, or a document structure with you, refining based on feedback rather than being asked for a single final answer up front.",
    },
    {
      taskStatement: "Integrate Claude into existing workflows to augment or redesign them",
      summary:
        "Augmenting a workflow keeps the existing process but speeds up a step (Claude drafts the first pass of a weekly report a person still edits). Redesigning a workflow rethinks the process itself around what's now possible. Knowing which one a situation calls for is part of the judgment being tested — not every workflow needs to be redesigned to benefit from Claude.",
    },
    {
      taskStatement: "Communicate Claude's value and limitations to stakeholders",
      summary:
        "Selling a workflow change means being honest about both sides: what time/quality improvement Claude actually delivers, and what it can't do (verify facts independently, know company-internal specifics it wasn't given, guarantee accuracy without review). Overselling capability erodes trust when limitations surface later.",
    },
  ],
  resources: [RESOURCES.helpCenter, RESOURCES.promptEngineering],
};
