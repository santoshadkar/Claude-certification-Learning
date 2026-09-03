import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "associate-foundations" as const;
const DOMAIN = "Output Evaluation and Validation" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "The largest domain on the Associate exam (21%) because it's the associate's core value: Claude drafts, but a human who can competently judge the draft is what makes the output safe to use. This domain tests whether you know what to check, not just how to prompt.",
  concepts: [
    {
      taskStatement: "Evaluate Claude-generated outputs for accuracy and completeness",
      summary:
        "Accuracy means the claims are true; completeness means nothing important was left out. These fail independently — a summary can be 100% accurate about the three points it mentions while missing a fourth that changes the conclusion. Check completeness by comparing the output against the original request's scope, not just against itself.",
    },
    {
      taskStatement: "Identify hallucinations, inconsistencies, and biases in responses",
      summary:
        "A hallucination is a confident, specific-sounding claim (a statistic, a citation, a quote) that isn't actually grounded in anything real — confidence in tone is not evidence of accuracy. Specific numbers, names, and citations are the highest-risk items to verify because they're the easiest to fabricate convincingly. Inconsistency shows up when the same fact is stated differently in two places in one output. Bias shows up as a pattern favoring one framing, group, or outcome that isn't justified by the actual input.",
    },
    {
      taskStatement: "Apply fact-checking and validation techniques",
      summary:
        "Verify specific, checkable claims (dates, figures, quotes, citations) against an authoritative source before they go anywhere important — especially before compliance, legal, or external-facing use. Asking Claude to rate its own confidence is not a validation technique, since a model's self-reported confidence isn't a reliable signal of correctness.",
    },
    {
      taskStatement: "Determine when human review or additional verification is required",
      summary:
        "Escalate to human review when stakes are high (financial, legal, safety, medical), when the request touches sensitive or regulated data, or when the task is genuinely outside what Claude can verify (like real-time facts or company-internal decisions). Routine, low-stakes drafting for internal use is where autonomous use is appropriate.",
    },
    {
      taskStatement: "Edit, adapt, refine, and compare outputs for the intended audience",
      summary:
        "The same content needs different framing for an executive (brief, decision-focused), a technical peer (precise, detailed), or a customer (reassuring, jargon-free). Editing for audience is a distinct skill from editing for correctness — a factually perfect answer can still fail if it's pitched at the wrong reader.",
    },
    {
      taskStatement:
        "Organize and curate information and select appropriate output formats (artifacts, inline, structured data)",
      summary:
        "Long-form or reusable content (a document, code, a table someone will edit) belongs in an artifact, which keeps it separate and iterable. Short conversational answers belong inline. Data meant to be consumed by another system belongs in a structured format (JSON, CSV) rather than prose. Choosing the wrong format doesn't make the content wrong, but it makes it harder to use.",
    },
  ],
  resources: [RESOURCES.helpCenter, RESOURCES.promptEngineering],
};
