import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "assoc-pms-001",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Select appropriate Claude product features (Projects, research mode, chat, artifacts)",
    type: "mcq",
    stem:
      "An analyst produces the same type of weekly competitor-pricing report every Monday, each time re-explaining the report format and data sources from scratch in a new chat. What product feature would improve this workflow?",
    options: [
      { id: "A", text: "Switch to research mode for every report, regardless of what it's used for." },
      { id: "B", text: "Create a new artifact for the instructions each week instead of a Project." },
      { id: "C", text: "Continue using plain chat, since each week's data is different anyway." },
      { id: "D", text: "Set up a Project with the report format and standing instructions configured once, so the analyst doesn't re-explain context every week." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A Project is designed exactly for this — persistent instructions and context for recurring work — so the format and expectations don't need to be re-explained each time. Plain chat (C) keeps forcing repetition, research mode (A) doesn't address the repeated setup, and recreating instructions weekly as artifacts (B) doesn't persist them either.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 (Product and Model Selection) — 'Select appropriate Claude product features'",
    difficulty: "easy",
  },
  {
    id: "assoc-pms-002",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Select appropriate Claude product features (Projects, research mode, chat, artifacts)",
    type: "mcq",
    stem:
      "A consultant needs to produce a 12-page strategy document that the client will review, comment on, and revise over several weeks. Which output approach best fits this need?",
    options: [
      { id: "A", text: "Keep the document only inline in the chat, re-pasting it whenever changes are needed." },
      { id: "B", text: "Use an artifact, so the document exists as a standalone, iterable piece of content that's easy to revise over time." },
      { id: "C", text: "Recreate a brand-new conversation from scratch for every single revision." },
      { id: "D", text: "Ask for the document to be delivered as a single very long chat message with no other structure." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Content meant to be revised repeatedly over time is exactly what artifacts are for. Keeping it purely inline (A, D) makes revision clunky, and starting an entirely new conversation for every edit (C) discards useful context unnecessarily.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Select appropriate Claude product features'",
    difficulty: "easy",
  },
  {
    id: "assoc-pms-003",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Select appropriate Claude product features (Projects, research mode, chat, artifacts)",
    type: "mcq",
    stem:
      "A strategist needs a broad scan of recent developments across an unfamiliar industry before a client meeting, pulling together information from many angles. Which feature best fits this need compared to a quick factual question?",
    options: [
      { id: "A", text: "A Project is required even for the single quick factual question." },
      { id: "B", text: "An artifact should be used for the quick factual question instead of chat." },
      { id: "C", text: "Research mode is better suited to the broad, open-ended information-gathering task, while plain chat suits the quick factual question." },
      { id: "D", text: "Plain chat is equally well suited to both an open-ended broad scan and a quick factual question." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Research mode is built for broader, open-ended information gathering, while a quick factual question is well served by plain chat without extra overhead — treating both needs as identical (D) or reaching for an artifact (B) or a Project (A) for a single quick question adds unnecessary overhead.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Select appropriate Claude product features'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-004",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Select appropriate Claude product features (Projects, research mode, chat, artifacts)",
    type: "mcq",
    stem:
      "A marketing team wants Claude to always follow their brand voice guide and reference their existing campaign archive whenever drafting new content, across many different requests over time. What is the best way to set this up?",
    options: [
      { id: "A", text: "Configure a Project with the brand voice guide and campaign archive as standing instructions and knowledge sources." },
      { id: "B", text: "Paste the brand voice guide and campaign archive into every individual chat message." },
      { id: "C", text: "Create a new artifact containing the brand guide for every new piece of content requested." },
      { id: "D", text: "Rely on Claude to remember the brand voice from a single past conversation indefinitely." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Standing context that should apply across many future requests is exactly what a Project's instructions and knowledge sources are for — repasting everything each time (B) doesn't scale, assuming persistence across unrelated conversations (D) isn't reliable, and recreating the guide as an artifact per request (C) is redundant overhead.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Select appropriate Claude product features'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-005",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Select appropriate Claude product features (Projects, research mode, chat, artifacts)",
    type: "scenario-multi-response",
    stem:
      "A consulting associate regularly drafts client-facing proposals that follow a consistent template and reference a shared library of past case studies. Which two product-feature choices best fit this recurring work? (Select 2)",
    options: [
      { id: "A", text: "A Project configured with the proposal template and the case-study library as reference knowledge." },
      { id: "B", text: "An artifact for each individual proposal draft, so it can be reviewed and revised as a standalone document." },
      { id: "C", text: "A brand-new, unconfigured chat for every proposal, re-explaining the template and re-pasting case studies each time." },
      { id: "D", text: "Research mode for every proposal, regardless of whether new research is actually needed." },
    ],
    correctOptionIds: ["A","B"],
    selectCount: 2,
    explanation:
      "A Project holds the recurring template and reference material (A), while each specific proposal is well suited to being drafted as its own artifact for review and revision (B). Starting from zero context every time (C) forfeits the benefit of a Project, and defaulting to research mode regardless of need (D) doesn't fit every proposal.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Select appropriate Claude product features'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-006",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Select appropriate Claude product features (Projects, research mode, chat, artifacts)",
    type: "mcq",
    stem:
      "An associate needs a single, quick unit conversion for a one-off task with no expectation of reusing this later. What is the most appropriate way to get this answer?",
    options: [
      { id: "A", text: "Set up a new Project just for this single conversion." },
      { id: "B", text: "Use research mode to thoroughly investigate unit conversion standards first." },
      { id: "C", text: "Create an artifact to store the answer for future reference." },
      { id: "D", text: "Ask the question directly in a plain chat message, since this is a quick, one-off need with no ongoing context to persist." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A quick, one-off question doesn't need the overhead of a Project (A), an artifact (C), or research mode (B) — plain chat is the right level of tooling for a simple, non-recurring request.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Select appropriate Claude product features'",
    difficulty: "easy",
  },
  {
    id: "assoc-pms-007",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Select appropriate Claude product features (Projects, research mode, chat, artifacts)",
    type: "mcq",
    stem:
      "A developer wants Claude's help writing a small utility function they'll paste directly into their codebase, versus later asking a quick question about what a specific line of existing code does. How should these two requests be handled differently?",
    options: [
      { id: "A", text: "Use an artifact for the quick explanation and inline chat for the utility function." },
      { id: "B", text: "Use an artifact for the utility function, since it's a standalone piece of code meant to be copied and reused, while the quick explanation of an existing line fits fine as an inline chat answer." },
      { id: "C", text: "Treat both identically, since both involve code." },
      { id: "D", text: "Require a Project for both, regardless of scope." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A reusable code deliverable fits an artifact well, while a quick clarifying explanation is naturally suited to an inline answer — treating both the same (C) or reversing the fit (A) mismatches the format to the task, and requiring a Project for both (D) adds unnecessary setup for a quick question.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Select appropriate Claude product features'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-008",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Differentiate between Claude model types (Haiku, Sonnet, Opus)",
    type: "mcq",
    stem:
      "A support team needs to auto-generate thousands of short, templated acknowledgment replies per day, where speed and cost matter far more than nuanced reasoning. Which model tier best fits this need?",
    options: [
      { id: "A", text: "Whichever tier is used should be randomly varied for each reply." },
      { id: "B", text: "The most capable, highest-cost tier available, to maximize quality on every single reply." },
      { id: "C", text: "A faster, lower-cost tier (like Haiku) suited to high-volume, straightforward tasks." },
      { id: "D", text: "Model tier makes no difference for this kind of task." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "High-volume, straightforward tasks are the textbook case for a faster, cheaper tier — defaulting to the top tier everywhere (B) wastes cost and latency budget for no benefit here, and tier choice does matter (A, D wrong).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Differentiate between Claude model types'",
    difficulty: "easy",
  },
  {
    id: "assoc-pms-009",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Differentiate between Claude model types (Haiku, Sonnet, Opus)",
    type: "mcq",
    stem:
      "A legal team needs Claude to analyze a dense, ambiguous multi-party contract and flag subtle inconsistencies across sections. Which model tier is most appropriate?",
    options: [
      { id: "A", text: "The most capable tier (like Opus), given the depth of reasoning and attention to subtle detail this task requires." },
      { id: "B", text: "The fastest, cheapest tier, since contract review is a routine task." },
      { id: "C", text: "Tier doesn't matter for document analysis tasks." },
      { id: "D", text: "Whichever tier is fastest to respond, regardless of reasoning depth." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Complex, ambiguous reasoning over subtle detail is exactly where the most capable tier earns its cost — treating this as routine (B) or prioritizing speed over reasoning depth (D) undersells the actual task difficulty, and tier does matter here (C wrong).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Differentiate between Claude model types'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-010",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Differentiate between Claude model types (Haiku, Sonnet, Opus)",
    type: "mcq",
    stem:
      "A content team needs daily help drafting blog posts and internal memos — solid everyday writing quality at good speed, without the cost of the top-tier model. Which tier best fits this recurring, general-purpose need?",
    options: [
      { id: "A", text: "The fastest, lowest-capability tier, to minimize cost above all else." },
      { id: "B", text: "The most capable, highest-cost tier for every single memo, regardless of complexity." },
      { id: "C", text: "Tier selection is irrelevant for writing tasks." },
      { id: "D", text: "A balanced mid-tier model (like Sonnet) that combines strong general capability with good speed for everyday work." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A balanced mid-tier model fits solid, everyday general-purpose writing well — minimizing cost at the expense of quality (A) or defaulting to the top tier for routine work (B) both misjudge the actual requirement, and tier selection does matter (C wrong).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Differentiate between Claude model types'",
    difficulty: "easy",
  },
  {
    id: "assoc-pms-011",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Differentiate between Claude model types (Haiku, Sonnet, Opus)",
    type: "scenario-multi-response",
    stem:
      "Which two model-tier pairings correctly match the task to an appropriate tier? (Select 2)",
    options: [
      { id: "A", text: "A single, high-stakes board-level financial analysis requiring deep reasoning → the most capable tier." },
      { id: "B", text: "A high-volume, simple tagging task for thousands of short comments → the most capable, highest-cost tier." },
      { id: "C", text: "A high-volume, simple tagging task for thousands of short customer comments → a fast, low-cost tier." },
      { id: "D", text: "A single, high-stakes board-level financial analysis → the fastest, lowest-capability tier." },
    ],
    correctOptionIds: ["A","C"],
    selectCount: 2,
    explanation:
      "High-volume, simple work fits a fast/cheap tier (C), while a single high-stakes, reasoning-heavy task justifies the most capable tier (A) — reversing either pairing (B, D) either wastes budget on trivial work or under-powers a task that actually needs deep reasoning.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Differentiate between Claude model types'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-012",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Differentiate between Claude model types (Haiku, Sonnet, Opus)",
    type: "mcq",
    stem:
      "A company wants an FAQ chatbot that answers simple, well-defined questions (store hours, return policy) for thousands of visitors daily at low latency. Which tier fits best?",
    options: [
      { id: "A", text: "The most capable, slowest tier, to guarantee maximum accuracy on every question." },
      { id: "B", text: "A fast, cost-efficient tier suited to high-volume, straightforward Q&A." },
      { id: "C", text: "A randomly rotating mix of all tiers." },
      { id: "D", text: "Tier choice won't affect this use case at all." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Simple, well-defined, high-volume Q&A is squarely a fast/cost-efficient-tier use case — reaching for the most capable tier everywhere (A) adds latency and cost without a meaningful accuracy benefit here, and tier choice clearly matters for both cost and speed at this volume (C, D wrong).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Differentiate between Claude model types'",
    difficulty: "easy",
  },
  {
    id: "assoc-pms-013",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Differentiate between Claude model types (Haiku, Sonnet, Opus)",
    type: "mcq",
    stem:
      "A small engineering team needs help planning a complex, multi-step refactor of a legacy codebase, weighing several possible approaches with significant tradeoffs. Which tier is most appropriate?",
    options: [
      { id: "A", text: "Whichever tier responds first should be used, regardless of reasoning depth." },
      { id: "B", text: "Tier choice is irrelevant to planning tasks." },
      { id: "C", text: "The most capable tier, given the depth of reasoning needed to weigh multiple complex tradeoffs." },
      { id: "D", text: "The fastest, cheapest tier, since refactor planning is a routine engineering task." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Weighing multiple complex tradeoffs in a significant technical decision is exactly the kind of reasoning-heavy task that justifies the most capable tier — treating this as routine (D) undersells the complexity, and tier does matter here (B, A wrong).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Differentiate between Claude model types'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-014",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Differentiate between Claude model types (Haiku, Sonnet, Opus)",
    type: "mcq",
    stem:
      "An associate uses the most capable, highest-cost model tier to auto-generate simple one-line email subject lines in bulk, hundreds of times a day. What is the concern with this choice?",
    options: [
      { id: "A", text: "This likely wastes cost and adds unnecessary latency, since a simple, high-volume task like this doesn't need the top tier's depth of reasoning." },
      { id: "B", text: "There is no concern, since higher capability is always strictly better regardless of task." },
      { id: "C", text: "Top-tier models cannot generate short text at all." },
      { id: "D", text: "The concern is only that subject lines might be too long." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Matching model tier to actual task difficulty means recognizing when the top tier is overkill — a simple, high-volume task like this doesn't need it, and always defaulting to 'more capable is better' (B) ignores the cost/speed tradeoff. Length (D) and capability to produce short text (C) aren't the actual issue.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Differentiate between Claude model types'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-015",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Align model selection with task requirements (cost, speed, quality)",
    type: "mcq",
    stem:
      "A support organization processes a very high volume of routine, templated customer replies where turnaround speed and cost per reply are the top priorities. What should drive the model selection decision here?",
    options: [
      { id: "A", text: "Selecting a tier at random for variety." },
      { id: "B", text: "Ignoring cost and speed entirely, since quality is always the only consideration." },
      { id: "C", text: "Selecting the most capable tier available, regardless of cost or speed impact." },
      { id: "D", text: "Selecting the fastest, most cost-efficient tier that still produces acceptable reply quality, since that matches the stated priorities." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "When speed and cost are the stated priorities for high-volume, routine work, the model choice should reflect that — defaulting to the top tier regardless (C) or ignoring the stated priorities entirely (B) doesn't align the decision with actual requirements, and randomness (A) isn't a deliberate choice at all.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Align model selection with task requirements'",
    difficulty: "easy",
  },
  {
    id: "assoc-pms-016",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Align model selection with task requirements (cost, speed, quality)",
    type: "mcq",
    stem:
      "A company is preparing a single, high-stakes annual report that will be read by investors and regulators, where getting the analysis right matters far more than saving a few seconds or a small amount of cost. How should model selection reflect this?",
    options: [
      { id: "A", text: "Prioritize speed above all else, since faster delivery is always the right default." },
      { id: "B", text: "Prioritize quality by using the most capable tier, since the cost/speed tradeoff is clearly outweighed by the stakes of this particular document." },
      { id: "C", text: "Model selection shouldn't vary based on how important a specific document is." },
      { id: "D", text: "Prioritize the cheapest available tier regardless of the document's importance." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "When quality genuinely matters most and the volume is low, the cost/latency tradeoff of the top tier is easily justified — defaulting to speed (A) or cost minimization (D) regardless of stakes gets the tradeoff backwards, and stakes should absolutely inform tier choice (C wrong).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Align model selection with task requirements'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-017",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Align model selection with task requirements (cost, speed, quality)",
    type: "mcq",
    stem:
      "A live customer-facing chat widget needs to feel responsive, with replies appearing within a second or two, for straightforward common questions. What consideration should most directly drive model tier choice here?",
    options: [
      { id: "A", text: "Cost is the only factor that matters for a chat widget." },
      { id: "B", text: "Latency is irrelevant to a good user experience in live chat." },
      { id: "C", text: "Latency — a faster tier is important to keep the live interaction feeling responsive for this kind of straightforward, real-time use case." },
      { id: "D", text: "The most capable tier should always be used for anything customer-facing, regardless of latency impact." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "For a real-time, user-facing interaction, responsiveness is a real requirement that should shape tier choice toward a faster option for straightforward questions — treating latency as irrelevant (B) or automatically defaulting to the top tier regardless of the responsiveness cost (D) both miss the actual trade-off, and cost isn't the only factor either (A).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Align model selection with task requirements'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-018",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Align model selection with task requirements (cost, speed, quality)",
    type: "scenario-multi-response",
    stem:
      "Which two statements correctly describe how to align model selection with cost, speed, and quality requirements? (Select 2)",
    options: [
      { id: "A", text: "A low-volume, high-stakes task where accuracy matters most can justify the added cost and latency of a more capable tier." },
      { id: "B", text: "The most capable tier should be used for every task to eliminate any risk of a wrong answer." },
      { id: "C", text: "Model tier should always be chosen independently of cost, speed, or volume considerations." },
      { id: "D", text: "A high-volume, low-complexity task with tight cost constraints generally favors a faster, cheaper tier." },
    ],
    correctOptionIds: ["A","D"],
    selectCount: 2,
    explanation:
      "Matching tier to the actual volume/stakes profile of the task — cheap and fast for high-volume low-complexity work (D), capable for low-volume high-stakes work (A) — is the correct approach. Ignoring these factors entirely (C) or defaulting to the top tier everywhere 'just in case' (B) both fail to make a deliberate trade-off.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Align model selection with task requirements'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-019",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Align model selection with task requirements (cost, speed, quality)",
    type: "mcq",
    stem:
      "A small nonprofit with a limited software budget needs ongoing help drafting grant materials and donor communications — solid quality, but cost efficiency matters given their limited resources. What is the most appropriate approach to model selection?",
    options: [
      { id: "A", text: "Use a balanced, cost-efficient tier suited to good general-purpose writing, reserving a higher tier only for the rare cases that truly need deeper reasoning." },
      { id: "B", text: "Cost should never factor into an organization's model selection decisions." },
      { id: "C", text: "Use the most capable, highest-cost tier for every single piece of writing regardless of budget constraints." },
      { id: "D", text: "Avoid using any paid tier at all, even where it would meaningfully help." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Matching a balanced tier to routine work while reserving a higher tier for genuinely harder cases respects real budget constraints without sacrificing quality where it matters — ignoring cost entirely (C, B) or avoiding a useful tool altogether (D) don't reflect the organization's actual constraints and needs.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Align model selection with task requirements'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-020",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Align model selection with task requirements (cost, speed, quality)",
    type: "mcq",
    stem:
      "A team uses the most capable, highest-cost model tier for a routine task — approving or rejecting simple, well-defined internal expense reports against clear rules — that a much cheaper tier could handle equally well. What is the issue with this choice?",
    options: [
      { id: "A", text: "The only issue is that it might be slower than a human reviewer." },
      { id: "B", text: "There is no issue; using the best available tier is always the safest choice." },
      { id: "C", text: "The issue is that expense reports should never involve AI at all." },
      { id: "D", text: "This wastes cost on a task that doesn't require the top tier's additional reasoning capability, since the task is simple and well-defined." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A simple, clearly-defined task doesn't need the top tier's added reasoning depth, so using it here is a cost inefficiency, not a safety benefit (B) — the concern isn't that AI shouldn't be used at all (C), and the framing here is about matching tier to task, not comparing to a human reviewer's speed (A).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Align model selection with task requirements'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-021",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Align model selection with task requirements (cost, speed, quality)",
    type: "mcq",
    stem:
      "A team lead says: 'We should always use whichever model is fastest, no matter what the task is.' What is the flaw in this blanket rule?",
    options: [
      { id: "A", text: "There is no flaw; speed should always be the only consideration." },
      { id: "B", text: "It ignores that some tasks (complex reasoning, high-stakes decisions) genuinely need more capability than the fastest tier provides, even at the cost of some speed." },
      { id: "C", text: "The flaw is that speed can never be measured reliably." },
      { id: "D", text: "The flaw is that faster models are always less accurate in every situation." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A blanket 'always fastest' rule ignores that harder tasks can genuinely need more reasoning capability than the fastest tier offers — the right approach weighs cost, speed, and quality per task rather than optimizing for just one dimension always (A is the flawed premise itself), and it's not that faster models are universally less accurate everywhere (D) or that speed is unmeasurable (C).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Align model selection with task requirements'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-022",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Understand and manage context limitations and memory considerations (when to restart, summarize, or persist)",
    type: "mcq",
    stem:
      "A long-running conversation covering many different unrelated topics over several hours starts producing answers that seem to lose track of earlier details and occasionally contradict what was established earlier. What is the most appropriate response?",
    options: [
      { id: "A", text: "Ignore the contradictions, since they don't matter for any practical purpose." },
      { id: "B", text: "Keep adding more messages to the same conversation indefinitely, since Claude will always retain everything perfectly regardless of length." },
      { id: "C", text: "Summarize the key facts that still matter and start a fresh, more focused conversation, since a very long, sprawling conversation can become harder to reason over consistently." },
      { id: "D", text: "Assume the contradictions mean Claude is broken and should not be used further today." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Summarizing key facts into a fresh, focused conversation is a practical response to a long, sprawling conversation becoming harder to track consistently — assuming perfect retention regardless of length (B) or that this means something is broken (D) misdiagnoses the situation, and ignoring real contradictions (A) risks acting on wrong information.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Understand and manage context limitations and memory considerations'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-023",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Understand and manage context limitations and memory considerations (when to restart, summarize, or persist)",
    type: "mcq",
    stem:
      "A team wants certain standing instructions (tone, formatting rules, key reference facts) to apply automatically every time anyone on the team starts a new conversation about a specific ongoing initiative. What is the best way to achieve this?",
    options: [
      { id: "A", text: "Configure these standing instructions once in a Project so they persist and apply automatically across future conversations related to that initiative." },
      { id: "B", text: "Ask each team member to memorize and manually retype the instructions at the start of every new conversation." },
      { id: "C", text: "Rely on Claude to remember the instructions from whichever past conversation happened to include them." },
      { id: "D", text: "Post the instructions in a general team chat channel and hope everyone remembers to reference them." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Persistent, team-wide standing instructions are exactly what a Project's configuration is for — manually retyping each time (B) doesn't scale, assuming memory carries over from an unrelated past conversation (C) isn't reliable, and posting instructions elsewhere without connecting them to the actual workflow (D) doesn't ensure they're used.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Understand and manage context limitations and memory considerations'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-024",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Understand and manage context limitations and memory considerations (when to restart, summarize, or persist)",
    type: "mcq",
    stem:
      "An associate has been discussing a specific project plan in a conversation for a while and now wants to quickly ask an unrelated question about a totally different topic. What is a reasonable consideration here?",
    options: [
      { id: "A", text: "Context management is only relevant for very technical tasks, not general questions." },
      { id: "B", text: "Unrelated questions should never be asked at all once a conversation has started on a different topic." },
      { id: "C", text: "The unrelated question must always be asked in the same conversation to preserve context." },
      { id: "D", text: "Starting a fresh, separate conversation for the unrelated question can keep both topics clearer and avoid mixing unrelated context unnecessarily." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A genuinely unrelated question doesn't benefit from the existing conversation's context and can be asked more clearly in a fresh conversation — forcing everything into one conversation regardless of relevance (C) or refusing to ask unrelated questions at all (B) are both unnecessary, and this consideration applies broadly, not just to technical tasks (A).",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Understand and manage context limitations and memory considerations'",
    difficulty: "easy",
  },
  {
    id: "assoc-pms-025",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Understand and manage context limitations and memory considerations (when to restart, summarize, or persist)",
    type: "scenario-multi-response",
    stem:
      "Which two practices reflect good context management for an associate working on a long-running, multi-week initiative? (Select 2)",
    options: [
      { id: "A", text: "Avoid ever starting a new conversation, since doing so always loses all useful context permanently." },
      { id: "B", text: "Persist standing reference material and instructions in a Project rather than re-pasting them into every new conversation." },
      { id: "C", text: "Keep every unrelated topic the associate has ever discussed in one single continuous conversation, forever, regardless of relevance." },
      { id: "D", text: "When a single conversation grows very long and unfocused, summarize the key facts and continue in a fresh conversation rather than letting it sprawl indefinitely." },
    ],
    correctOptionIds: ["B","D"],
    selectCount: 2,
    explanation:
      "Persisting standing context in a Project (B) and summarizing/restarting when a conversation becomes unfocused (D) are both sound context-management practices. Mixing every unrelated topic into one indefinite conversation (C) creates exactly the sprawl problem, and assuming a fresh conversation always loses everything useful (A) ignores that key facts can be deliberately carried forward via a summary.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Understand and manage context limitations and memory considerations'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-026",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Understand and manage context limitations and memory considerations (when to restart, summarize, or persist)",
    type: "mcq",
    stem:
      "An associate pastes an entire 200-page reference manual into a single chat message every time they have a quick question about a small part of it. What would better fit this recurring need?",
    options: [
      { id: "A", text: "Ask questions about the manual without providing it at all." },
      { id: "B", text: "Upload the manual once as a knowledge source within a Project, so it can be referenced across future questions without being re-pasted each time." },
      { id: "C", text: "Continue pasting the full manual every time, since that's the only way to reference it." },
      { id: "D", text: "Only paste the manual for the first question and rely on memory of it for all future unrelated conversations." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A Project's knowledge sources exist exactly for large reference material that needs to be available across many future questions, without re-pasting it each time (C) or expecting it to persist into unrelated future conversations on its own (D), and dropping the source material entirely (A) would remove the grounding the questions actually need.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Understand and manage context limitations and memory considerations'",
    difficulty: "medium",
  },
  {
    id: "assoc-pms-027",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Understand and manage context limitations and memory considerations (when to restart, summarize, or persist)",
    type: "mcq",
    stem:
      "Midway through a long conversation, an associate realizes that some early information they gave Claude was actually incorrect and has since been corrected verbally, but the conversation continues referencing the old, wrong figure. What is the best next step?",
    options: [
      { id: "A", text: "Assume Claude automatically forgets outdated information the moment it's superseded." },
      { id: "B", text: "Start an entirely new conversation from zero, discarding all other useful context, just to fix one figure." },
      { id: "C", text: "Explicitly restate the corrected figure clearly so it's unambiguous going forward, rather than assuming the correction was fully absorbed." },
      { id: "D", text: "Continue as normal, since one incorrect figure early on won't affect anything later." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Explicitly and clearly restating a correction is the reliable way to ensure it's used going forward — assuming automatic forgetting of superseded information (A) isn't guaranteed, discarding an entire useful conversation over one figure (B) is an overcorrection, and letting a known wrong figure continue to be referenced (D) risks compounding errors.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Understand and manage context limitations and memory considerations'",
    difficulty: "hard",
  },
  {
    id: "assoc-pms-028",
    certificationSlug: "associate-foundations",
    domain: "Product and Model Selection",
    taskStatement: "Understand and manage context limitations and memory considerations (when to restart, summarize, or persist)",
    type: "mcq",
    stem:
      "A new employee is told 'just keep using the same conversation for everything, forever, so Claude remembers all our history.' What is the problem with this advice?",
    options: [
      { id: "A", text: "An indefinitely growing, unfocused conversation covering unrelated topics can become harder to reason over consistently, and standing context that should persist across topics is better handled through a Project than through one sprawling chat." },
      { id: "B", text: "There is no problem — a single indefinite conversation is always the best approach." },
      { id: "C", text: "Conversations should never be reused for more than one message under any circumstances." },
      { id: "D", text: "The only problem is that it will run out of storage space on the employee's device." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A single ever-growing, topic-mixing conversation isn't the right tool for persistent context — that's what a Project is for — and very long, unfocused conversations can become harder to track consistently (B is the flawed advice itself). This isn't a device storage issue (D), and the opposite extreme of never reusing a conversation at all (C) is also not the point being tested.",
    citation:
      "Claude Certified Associate – Foundations Exam Guide §6, Domain 3 — 'Understand and manage context limitations and memory considerations'",
    difficulty: "medium",
  },
];
