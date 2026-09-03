import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "architect-foundations" as const;
const DOMAIN = "Prompt Engineering & Structured Output" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Tests prompt-engineering rigor applied to production concerns: cutting false positives, using examples to stabilize output, guaranteeing schema-valid structured data, closing the loop on validation, and reviewing at scale.",
  concepts: [
    {
      taskStatement: "4.1",
      summary:
        "Vague guardrails like 'be conservative' or 'only report high-confidence findings' don't actually improve precision — specific, categorical criteria do (e.g., 'flag a comment only when it contradicts actual code behavior' rather than 'check comments are accurate'). A high false-positive rate in one category erodes trust in the accurate categories too, so it's often better to temporarily disable a noisy category while you fix its criteria than to leave it degrading overall trust. Concrete examples at each severity level produce more consistent classification than a written definition alone.",
    },
    {
      taskStatement: "4.2",
      summary:
        "Few-shot examples are the most reliable way to get consistently formatted, actionable output when detailed prose instructions alone produce drift. They're especially valuable for demonstrating handling of ambiguous cases (showing the reasoning for why one action beat a plausible alternative) so the model can generalize that judgment to new, similar cases — and for reducing hallucination in extraction by showing varied real document structures rather than one idealized example.",
    },
    {
      taskStatement: "4.3",
      summary:
        "tool_use with a JSON schema is the reliable way to guarantee schema-conformant structured output, eliminating syntax errors — but it does not catch semantic errors (line items that don't sum to the stated total, a value in the wrong field). tool_choice: 'auto' may still return plain text, 'any' forces some tool call, and a forced/named tool guarantees a specific one runs. Make fields nullable when a source document may simply not contain that information, so the model returns null instead of fabricating a plausible-looking value to satisfy a required field; use an enum with an 'other' + detail-string pattern for categories that need to stay extensible.",
    },
    {
      taskStatement: "4.4",
      summary:
        "When validation fails, a follow-up request that includes the original input, the failed output, and the specific validation error lets the model self-correct — but only when the failure is fixable (a format mismatch), not when the required information simply isn't in the source document, where retrying just wastes a call. Tracking which fields/patterns trigger findings (a detected_pattern field) lets you analyze false-positive patterns over time. Self-check patterns — extracting a calculated_total alongside a stated_total to flag mismatches, or a conflict_detected boolean — catch semantic errors that schema validation alone can't.",
    },
    {
      taskStatement: "4.5",
      summary:
        "The Message Batches API cuts cost ~50% with up to a 24-hour processing window and no multi-turn tool calling — right for latency-tolerant, non-blocking work (overnight reports, weekly audits), wrong for anything blocking like a pre-merge check. custom_id correlates requests to responses, which is how you identify and resubmit only the failed items (e.g., after chunking documents that exceeded a size limit) instead of resubmitting the whole batch. Refine your prompt on a small sample before committing a large batch to it, since a batch failure cycle costs a full processing window to discover.",
    },
    {
      taskStatement: "4.6",
      summary:
        "A model reviewing its own just-generated output retains the reasoning that produced it, making it less likely to catch its own mistakes — an independent review instance, without that prior context, is more effective at catching subtle issues than adding self-review instructions or extended thinking to the same session. For large reviews, split into per-file local-issue passes plus a separate cross-file integration pass, since a single pass across many files dilutes attention and produces inconsistent depth and even contradictory findings.",
    },
  ],
  resources: [RESOURCES.promptEngineering, RESOURCES.batchProcessing, RESOURCES.toolUse],
};
