import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Applications and Integration" as const;
const CERT = "developer-foundations" as const;

export const questions: QuestionInput[] = [
  {
    id: "dev-ai-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Understanding Requirements",
    type: "mcq",
    stem:
      "A team is scoping a Claude-powered internal support bot. The business requirement states responses must complete within 2 seconds for a good user experience, and the bot must support 500 concurrent users. Which type of requirement does the '2 seconds' constraint represent, and how should it influence the design?",
    options: [
      { id: "A", text: "It's an infrastructure requirement only, and can be addressed purely by adding more servers." },
      {
        id: "B",
        text: "It's a latency requirement that should influence model tier selection and API pattern (e.g., a real-time Messages API call with a faster model), not just infrastructure scaling.",
      },
      { id: "C", text: "It's irrelevant to model selection, since all Claude models respond at the same speed." },
      { id: "D", text: "It should be ignored until after launch, then optimized based on user complaints." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A stated latency requirement is functional and should directly shape model tier and API pattern choices up front. Treating it as pure infrastructure (A), assuming uniform model speed across tiers (C), or deferring it until after launch (D) all misapply the requirement.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 (Applications and Integration) — 'Understanding Requirements'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Systems Life Cycle",
    type: "mcq",
    stem:
      "Six months after launching a Claude-powered feature, the team upgrades to a newer model version for cost savings. Which activity is most clearly part of the 'maintain' phase of the systems life cycle for this integration, beyond standard bug fixing?",
    options: [
      { id: "A", text: "Nothing extra is needed, since newer model versions are always strict improvements." },
      {
        id: "B",
        text: "Re-running the eval suite and re-validating prompts against the new model version, since behavior can shift across releases.",
      },
      { id: "C", text: "Deleting the old model's version pin from configuration immediately." },
      { id: "D", text: "Waiting for users to report problems before checking anything." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Model releases can include behavior changes, so re-validating prompts and evals is the maintenance step specific to AI systems. Assuming automatic strict improvement (A) or waiting for user complaints (D) skips proactive validation, and removing the old version pin before validating the new one (C) removes your ability to roll back if something regresses.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Systems Life Cycle'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Claude API Mechanics",
    type: "scenario-multi-response",
    stem:
      "A developer needs to (1) get an immediate answer for a live chat widget and (2) process 50,000 historical support tickets overnight for a trend report. Which two API choices correctly match each need? (Select 2)",
    options: [
      { id: "A", text: "Use the synchronous Messages API for the live chat widget." },
      { id: "B", text: "Use the synchronous Messages API for the overnight batch job to guarantee results by morning." },
      { id: "C", text: "Use the Message Batches API for the overnight trend report to reduce cost on a latency-tolerant job." },
      { id: "D", text: "Use extended thinking on every live chat message to maximize response depth regardless of latency." },
    ],
    correctOptionIds: ["A", "C"],
    selectCount: 2,
    explanation:
      "Real-time, user-facing interaction needs the synchronous API (A); a large, latency-tolerant overnight job is the right fit for the batch API's cost savings (C). Using synchronous calls for a huge overnight batch (B) forfeits the batch discount for no benefit, and maximizing thinking depth on every live chat turn (D) would hurt the latency the widget actually needs.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude API Mechanics'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Software Engineering Foundations",
    type: "mcq",
    stem:
      "A pull request adds a new Claude API call inside an existing Node.js service. What is the most appropriate way to handle the API call given standard software engineering practice?",
    options: [
      { id: "A", text: "Call the API synchronously and block the event loop until the response returns." },
      {
        id: "B",
        text: "Call the API asynchronously (e.g., with async/await), matching how the rest of the service already handles I/O-bound operations.",
      },
      { id: "C", text: "Poll a global variable in a loop until the response is ready." },
      { id: "D", text: "Skip error handling, since the Claude API rarely fails." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "An API call is I/O-bound and should be handled asynchronously, consistent with how the rest of the codebase handles similar operations. Blocking the event loop (A) or polling a variable in a loop (C) are anti-patterns, and skipping error handling (D) ignores standard practice for any network call.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Software Engineering Foundations'",
    difficulty: "easy",
  },
  {
    id: "dev-ai-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Claude Application Design",
    type: "mcq",
    stem:
      "The same underlying assistant logic is deployed both as a Claude Code CLI tool for internal engineers and as an embedded chat widget on a public website using the API directly. What is an important application-design consideration specific to this dual deployment?",
    options: [
      { id: "A", text: "No special consideration is needed, since Claude interprets instructions identically across every surface." },
      {
        id: "B",
        text: "Instructions and content boundaries should be adapted per surface — a CLI tool trusts the invoking engineer more than a public-facing widget should trust arbitrary website visitors.",
      },
      { id: "C", text: "The public-facing widget should reuse the CLI tool's full file-system access for consistency." },
      { id: "D", text: "Only the CLI version needs a system prompt; the public widget can rely entirely on user messages." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "How Claude interprets instructions and what content boundaries make sense differs by surface and trust level — an internal CLI tool and a public-facing widget have very different threat models. Treating them identically (A), granting a public surface the same access as a trusted internal tool (C), or skipping a system prompt on the public surface (D) are all design mistakes.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Claude Application Design'",
    difficulty: "medium",
  },
  {
    id: "dev-ai-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: "Configuration Management",
    type: "mcq",
    stem:
      "A team's production Claude integration currently uses a floating model alias that always resolves to 'the latest' model version. What risk does this configuration choice introduce, and what is the standard mitigation?",
    options: [
      { id: "A", text: "No risk — floating aliases are the recommended production configuration." },
      {
        id: "B",
        text: "A model update could silently change application behavior in production; pinning to a specific model version and upgrading deliberately, with re-validation, mitigates this.",
      },
      { id: "C", text: "The only risk is increased cost, which can be ignored." },
      { id: "D", text: "Floating aliases are only a concern for the Claude Agent SDK, not the Messages API." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A floating alias can introduce unreviewed behavior changes when the underlying model updates; pinning a version and upgrading deliberately (re-validating prompts and evals) is the standard configuration-management mitigation. Treating this as risk-free (A), reducing it to only a cost concern (C), or scoping it to only one SDK (D) all miss the point.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 2 — 'Configuration Management'",
    difficulty: "medium",
  },
];
