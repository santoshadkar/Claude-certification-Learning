import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "architect-foundations" as const;
const DOMAIN = "Context Management & Reliability" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "The reliability domain: keeping long-running agents accurate as context grows, knowing when to escalate versus resolve, propagating errors usefully across multi-agent systems, and preserving where information came from.",
  concepts: [
    {
      taskStatement: "5.1",
      summary:
        "Progressive summarization risks quietly dropping numbers, dates, and specific commitments into vague language. Models also weight the beginning and end of long inputs more reliably than the middle ('lost in the middle'), so key findings should be placed up front and detailed results organized under explicit headers. Tool results accumulate fast and disproportionately to their relevance (40+ fields from an order lookup when 5 matter) — trim them before they pile up. Extracting durable facts (amounts, dates, IDs, statuses) into a persistent 'case facts' block outside the summarized history keeps them from being lost as the conversation compresses.",
    },
    {
      taskStatement: "5.2",
      summary:
        "Escalate immediately when a customer explicitly asks for a human, when policy is silent or ambiguous on the specific request (a gap, not just a hard case), or when no further progress is possible — but offer to resolve first when the issue is squarely within scope, escalating only if the person still prefers a human. Sentiment and self-reported confidence are both unreliable proxies for actual case complexity, so neither should drive the escalation decision. When multiple records match ambiguously, ask for another identifier rather than guessing based on a heuristic.",
    },
    {
      taskStatement: "5.3",
      summary:
        "A structured error (failure type, what was attempted, partial results, possible alternatives) lets a coordinator make an intelligent recovery decision; a generic status like 'search unavailable' hides exactly the context needed to do that. Distinguish an access failure (needs a retry decision) from a valid empty result (a successful query that found nothing) — conflating them either wastes retries or drops real gaps silently. Two anti-patterns to avoid: quietly returning an empty result as if it succeeded, and killing the entire workflow over one failure when partial results (annotated with the resulting coverage gap) would have been useful.",
    },
    {
      taskStatement: "5.4",
      summary:
        "Long exploration sessions degrade — the model starts answering from 'typical patterns' instead of the specific classes it actually found earlier. Scratchpad files that persist key findings across context boundaries counteract this, as does delegating verbose exploration to subagents while the main agent keeps only high-level coordination in its own context. For crash recovery, have each agent export state to a known location and have the coordinator load a manifest on resume, rather than replaying the whole exploration. /compact reduces context usage mid-session once verbose discovery output has served its purpose.",
    },
    {
      taskStatement: "5.5",
      summary:
        "A headline accuracy number (97% overall) can hide a document type or field where performance is much worse — validate accuracy segmented by type/field, not just in aggregate, before reducing human review. Stratified random sampling of even high-confidence extractions keeps catching novel error patterns that a fixed threshold would otherwise miss. Field-level confidence scores, calibrated against a labeled validation set, are what should actually drive routing to human review — not a single blanket confidence number for the whole extraction.",
    },
    {
      taskStatement: "5.6",
      summary:
        "Summarization steps routinely lose the mapping between a claim and its source unless subagents are required to output structured claim-source mappings (URL, document, excerpt) that get preserved and merged, not re-summarized away, during synthesis. When credible sources conflict on a fact, annotate both values with their sources rather than arbitrarily picking one — and require publication/collection dates in structured output so a real difference over time isn't misread as a contradiction. Render different content appropriately (tables for financial data, prose for narrative, structured lists for technical findings) instead of flattening everything into one format.",
    },
  ],
  resources: [RESOURCES.contextWindows, RESOURCES.buildEvals, RESOURCES.subagents],
};
