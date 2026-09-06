import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "arch-p-int-001",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Evaluate tool/agent configuration for capability bloat",
    type: "mcq",
    stem:
      "An architecture review finds a customer-service agent has been granted 22 tools spanning billing, shipping, inventory, HR, and marketing systems, even though any single conversation only ever needs 3-4 of them. What is the architectural concern, and the recommended fix?",
    options: [
      { id: "A", text: "There is no concern; granting an agent access to every tool that might conceivably be useful is always the safest and most effective default." },
      { id: "B", text: "The only fix is to remove tool use from the agent entirely." },
      { id: "C", text: "This is capability bloat — the excess tool surface increases decision complexity for the model and expands the security/misuse surface unnecessarily; scoping the agent to the tools its actual role requires addresses both concerns." },
      { id: "D", text: "Tool count has no relationship to either selection reliability or security exposure." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "An overbroad tool set is exactly the capability-bloat pattern — it degrades tool-selection reliability and unnecessarily expands what a compromised or misdirected agent could do; over-provisioning by default (A) is not the safer choice, removing tool use entirely (B) is a disproportionate response when scoping would suffice, and tool count does meaningfully affect both reliability and security exposure (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 (Integration) — 'Evaluate tool/agent configuration for capability bloat'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-002",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Evaluate tool/agent configuration for capability bloat",
    type: "mcq",
    stem:
      "A multi-agent system's coordinator has access to every tool available to all of its subagents 'in case delegation isn't needed.' What risk does this configuration introduce?",
    options: [
      { id: "A", text: "Giving the coordinator every subagent's tools undermines the specialization and least-privilege boundaries the multi-agent design was meant to establish, and increases the coordinator's own decision complexity and potential misuse surface." },
      { id: "B", text: "Coordinator tool scope has no relationship to the specialization goals of a multi-agent design." },
      { id: "C", text: "There is no risk; a coordinator having every tool available is always the correct design regardless of the multi-agent architecture's intended specialization." },
      { id: "D", text: "This configuration is required, since coordinators are technically incapable of delegating without holding every tool themselves." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Duplicating every subagent's tool access onto the coordinator undercuts the least-privilege and specialization rationale for having subagents in the first place — this isn't the correct default (C wrong), delegation via the Task mechanism doesn't require the coordinator to hold every tool itself (D wrong), and coordinator scope directly affects whether the intended specialization actually holds (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Evaluate tool/agent configuration for capability bloat'",
    difficulty: "medium",
  },
  {
    id: "arch-p-int-003",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Evaluate tool/agent configuration for capability bloat",
    type: "scenario-multi-response",
    stem:
      "Which two findings would an architect flag as capability bloat during a tool-configuration review? (Select 2)",
    options: [
      { id: "A", text: "An agent has exactly the two tools it needs to complete its one well-defined task." },
      { id: "B", text: "A subagent specialized in document summarization also has unrestricted access to a code-deployment tool with no relationship to its task." },
      { id: "C", text: "An agent has access to a 'delete all records' tool for a workflow that only ever needs to read and summarize records." },
      { id: "D", text: "A tool's description clearly explains its purpose, inputs, and boundaries relative to similar tools." },
    ],
    correctOptionIds: ["B","C"],
    selectCount: 2,
    explanation:
      "Granting a destructive capability far beyond what a read-only workflow needs (C), and giving a specialized agent unrelated, unrestricted access (B), are both textbook capability-bloat findings. A tightly-scoped agent with exactly what it needs (A) and a well-written tool description (D) are both signs of good design, not bloat.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Evaluate tool/agent configuration for capability bloat'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-004",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Evaluate tool/agent configuration for capability bloat",
    type: "mcq",
    stem:
      "A team argues that granting an agent more tools than it currently needs is a reasonable way to 'future-proof' the system against upcoming feature requests. How should an architect respond to this reasoning?",
    options: [
      { id: "A", text: "This tradeoff has no real consequences either way, so the decision doesn't matter." },
      { id: "B", text: "Agree, but only if the team promises never to actually use any of the extra tools until they're needed." },
      { id: "C", text: "Agree fully, since future-proofing by maximizing available capability is always the correct architectural default regardless of current need." },
      { id: "D", text: "Push back on pre-emptively granting unused capability — tools should be added when the actual need materializes, since speculative over-provisioning increases decision complexity and security exposure now for a benefit that may never materialize." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Pushing back on speculative over-provisioning is the sound architectural response — the real costs (decision complexity, exposure) are incurred immediately while the benefit is only hypothetical. Treating maximal capability as always correct (C) ignores this tradeoff, a promise not to use unused tools (B) doesn't reduce the actual exposure they create just by existing, and this decision does have real, non-trivial consequences (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Evaluate tool/agent configuration for capability bloat'",
    difficulty: "medium",
  },
  {
    id: "arch-p-int-005",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Analyze authentication and authorization requirements to identify security gaps",
    type: "mcq",
    stem:
      "An agent's tool for looking up customer records checks that the caller is authenticated, but never checks whether the authenticated caller is actually authorized to view that specific customer's data. What security gap does this represent?",
    options: [
      { id: "A", text: "There is no gap; authentication alone is always sufficient to guarantee appropriate data access regardless of the specific resource requested." },
      { id: "B", text: "A missing authorization check — confirming identity (authentication) is distinct from confirming permission to access a specific resource (authorization), and this gap allows any authenticated caller to access any customer's data regardless of whether they should." },
      { id: "C", text: "This gap can only be relevant if the system has more than 1,000 customer records." },
      { id: "D", text: "Authorization checks are unrelated to authentication and have no bearing on data access security." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "This is a classic authentication-vs-authorization gap — confirming who someone is doesn't confirm what they're allowed to access, and closing it requires an explicit authorization check per resource. Authentication alone isn't sufficient (A wrong), the gap's severity isn't gated by record count (C wrong), and authorization is directly relevant to secure data access (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Analyze authentication and authorization requirements to identify security gaps'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-006",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Analyze authentication and authorization requirements to identify security gaps",
    type: "mcq",
    stem:
      "An MCP server integrating with an internal HR system uses a single shared service-account credential with full administrative access, used by every application that connects to it. What security gap does an architect need to flag?",
    options: [
      { id: "A", text: "Credential scope and privilege level have no bearing on integration security." },
      { id: "B", text: "There is no gap; a single shared administrative credential is always the most secure and efficient configuration for any integration." },
      { id: "C", text: "A single, broadly-privileged shared credential violates least privilege and makes it hard to attribute actions to a specific calling application, or to revoke access for just one application without affecting all the others." },
      { id: "D", text: "This gap only matters if more than 50 applications connect to the same server." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A single, over-privileged, shared credential is a real least-privilege and attribution/revocation gap — this isn't the most secure configuration (B wrong), the concern doesn't have a specific application-count threshold like this (D wrong), and credential scope is directly central to integration security (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Analyze authentication and authorization requirements to identify security gaps'",
    difficulty: "medium",
  },
  {
    id: "arch-p-int-007",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Analyze authentication and authorization requirements to identify security gaps",
    type: "scenario-multi-response",
    stem:
      "Which two findings represent genuine authentication/authorization gaps an architect should flag during a security review? (Select 2)",
    options: [
      { id: "A", text: "Each integrated application uses its own scoped credential with permissions limited to what that application actually needs." },
      { id: "B", text: "A tool verifies both the caller's identity and their specific permission level before executing a sensitive action." },
      { id: "C", text: "A tool checks that a request is authenticated but never verifies the caller has permission for the specific action being requested." },
      { id: "D", text: "Multiple unrelated applications share one over-privileged credential with no way to attribute or selectively revoke access." },
    ],
    correctOptionIds: ["C","D"],
    selectCount: 2,
    explanation:
      "Missing authorization despite authentication (C) and an over-privileged, unattributable shared credential (D) are both genuine security gaps. Scoped, per-application credentials (A) and verifying both identity and permission before a sensitive action (B) are both examples of sound practice, not gaps.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Analyze authentication and authorization requirements to identify security gaps'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-008",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Evaluate accuracy-latency trade-offs and justify configuration decisions",
    type: "mcq",
    stem:
      "A team proposes adding a second independent review pass to a document-processing pipeline, improving accuracy by 6% but doubling per-document latency. The pipeline currently runs as an overnight batch job with no live user waiting on results. How should the architect evaluate this tradeoff?",
    options: [
      { id: "A", text: "Since the pipeline is a latency-tolerant overnight batch job, the doubled latency is likely an acceptable cost for a genuine accuracy improvement — the tradeoff should be evaluated against the pipeline's actual latency tolerance, not treated as universally good or bad." },
      { id: "B", text: "Accept the change without any evaluation, since any accuracy improvement is always worth any latency cost regardless of context." },
      { id: "C", text: "Accuracy and latency are entirely unrelated properties that never need to be weighed against each other in any architectural decision." },
      { id: "D", text: "Reject the change immediately, since any increase in latency is always unacceptable regardless of the system's actual latency requirements." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Evaluating this tradeoff against the pipeline's actual context — an overnight batch job with no live user — is the sound approach, since the same latency increase would be a much bigger problem for a real-time system. Rejecting any latency increase categorically (D) or accepting any accuracy gain regardless of cost (B) both skip this contextual evaluation, and accuracy/latency tradeoffs are a central, recurring architectural consideration (C wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Evaluate accuracy-latency trade-offs and justify configuration decisions'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-009",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Evaluate accuracy-latency trade-offs and justify configuration decisions",
    type: "mcq",
    stem:
      "A live customer-facing chat feature's product requirement specifies sub-2-second response times. A proposed change would improve answer accuracy by adding a verification pass, but would push typical response time to 4-5 seconds. What is the architect's most defensible recommendation?",
    options: [
      { id: "A", text: "Recommend adopting the verification pass and simply informing the client the latency requirement will now be missed by 2-3 seconds." },
      { id: "B", text: "Recommend rejecting any future accuracy improvements permanently, regardless of whether they would affect latency." },
      { id: "C", text: "Recommend adopting the change without evaluating its effect on the stated latency requirement at all." },
      { id: "D", text: "Recommend against this specific change for the live chat feature, since it would violate a stated hard latency requirement, and instead explore ways to improve accuracy that don't compromise the requirement (e.g., async post-hoc verification rather than blocking verification)." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Respecting a hard, stated requirement while still looking for a way to capture the accuracy benefit without violating it (e.g., non-blocking verification) is the defensible, solution-oriented response — simply missing the requirement (A) or ignoring it entirely (C) both fail the stated constraint, and permanently rejecting any future accuracy work (B) overcorrects far beyond what this specific tradeoff calls for.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Evaluate accuracy-latency trade-offs and justify configuration decisions'",
    difficulty: "medium",
  },
  {
    id: "arch-p-int-010",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Evaluate accuracy-latency trade-offs and justify configuration decisions",
    type: "scenario-multi-response",
    stem:
      "Which two considerations are essential when justifying an accuracy-latency tradeoff to a stakeholder? (Select 2)",
    options: [
      { id: "A", text: "What magnitude of accuracy improvement is being gained in exchange for the added latency." },
      { id: "B", text: "What the actual, stated latency requirement or tolerance is for this specific use case." },
      { id: "C", text: "Whether the proposed change happens to be the newest technique currently discussed in the industry." },
      { id: "D", text: "Which option requires writing the least amount of code, regardless of its effect on either accuracy or latency." },
    ],
    correctOptionIds: ["A","B"],
    selectCount: 2,
    explanation:
      "The actual latency requirement (B) and the real magnitude of the accuracy gain (A) are the substantive inputs to a defensible tradeoff justification. Implementation convenience unrelated to the actual tradeoff (D) and technique novelty (C) aren't sound bases for this kind of decision.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Evaluate accuracy-latency trade-offs and justify configuration decisions'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-011",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Analyze observability challenges and select monitoring strategies at scale",
    type: "mcq",
    stem:
      "A production multi-agent system processes thousands of requests daily, and the team currently has no logging of which tools were called, in what order, or with what results for any given request. A quality issue is reported, but the team can't reconstruct what happened. What observability gap does this illustrate?",
    options: [
      { id: "A", text: "There is no gap; incidents in agentic systems can always be fully diagnosed after the fact even with no logging in place." },
      { id: "B", text: "Without structured logging of the request/tool-call/response sequence, incidents can't be diagnosed after the fact — observability needs to be designed in from the start, not added only after a problem is reported." },
      { id: "C", text: "This gap only matters for systems processing fewer than 100 requests per day." },
      { id: "D", text: "Observability and monitoring have no relationship to the ability to diagnose production incidents." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Missing structured logging of the actual request/tool-call sequence is exactly why this incident can't be reconstructed — diagnosis isn't possible after the fact with no logging (A wrong), this gap matters at any real production volume, not just below a specific threshold (C wrong, if anything it matters more at higher volume), and observability is directly what enables incident diagnosis (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Analyze observability challenges and select monitoring strategies at scale'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-012",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Analyze observability challenges and select monitoring strategies at scale",
    type: "mcq",
    stem:
      "A team monitors only the aggregate accuracy rate of a high-volume extraction system, which looks healthy at 96%. A customer later reports that one specific, lower-volume document type has been failing almost entirely for weeks. What monitoring strategy would have caught this sooner?",
    options: [
      { id: "A", text: "Monitoring granularity has no relationship to how quickly a segment-specific problem is detected." },
      { id: "B", text: "This kind of segment-specific failure can never be detected through any monitoring strategy." },
      { id: "C", text: "Segmenting monitoring by relevant dimensions (e.g., document type) rather than relying solely on one aggregate metric, which can mask a severe problem in a lower-volume segment." },
      { id: "D", text: "Monitoring only the single aggregate accuracy number is always sufficient at any scale, since segment-level problems can never meaningfully affect the overall number." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Segmented monitoring is exactly what surfaces a severe problem hiding within a lower-volume segment that an aggregate number can mask — relying on the aggregate alone (D) is precisely what let this go undetected, this kind of failure is detectable with the right monitoring design (B wrong), and monitoring granularity directly affects detection speed (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Analyze observability challenges and select monitoring strategies at scale'",
    difficulty: "medium",
  },
  {
    id: "arch-p-int-013",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Analyze observability challenges and select monitoring strategies at scale",
    type: "scenario-multi-response",
    stem:
      "Which two practices support effective observability for a Claude-powered system operating at scale? (Select 2)",
    options: [
      { id: "A", text: "Logging enough of the request/tool-call/response sequence to reconstruct what happened during an incident." },
      { id: "B", text: "Waiting until a customer reports a problem before considering what should be monitored." },
      { id: "C", text: "Tracking metrics segmented by relevant dimensions (document type, request category, etc.), not just one aggregate number." },
      { id: "D", text: "Logging every request and response in full, including all sensitive data, with no consideration of what's actually needed for diagnosis." },
    ],
    correctOptionIds: ["A","C"],
    selectCount: 2,
    explanation:
      "Sufficient structured logging for incident reconstruction (A) and segmented metrics (C) both support genuine observability at scale. Logging everything indiscriminately including unnecessary sensitive data (D) creates its own risk without improving diagnosis quality, and designing monitoring only reactively after a reported problem (B) is the opposite of proactive observability design.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Analyze observability challenges and select monitoring strategies at scale'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-014",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Design a RAG pipeline with appropriate chunking and indexing strategies",
    type: "mcq",
    stem:
      "A RAG pipeline chunks documents into very large, page-length segments to minimize the number of chunks. Retrieval quality is poor because relevant answers are often buried within large, mostly-irrelevant chunks. What does this illustrate about chunking strategy?",
    options: [
      { id: "A", text: "Chunk size directly affects retrieval precision — chunks that are too large dilute relevance (a chunk can be 'about' many things, hurting matching), so chunking strategy needs to balance chunk size against how focused each chunk's content is." },
      { id: "B", text: "Chunk size has no effect on retrieval quality; retrieval quality depends entirely on the embedding model, regardless of chunk size." },
      { id: "C", text: "Larger chunks always improve retrieval quality regardless of how much irrelevant content they contain." },
      { id: "D", text: "The only fix is to abandon chunking entirely and pass entire documents into every request instead." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Chunk size is a first-order lever in RAG design — overly large chunks dilute topical focus and hurt matching precision, so chunking strategy needs to balance size against focus. Chunk size does matter alongside the embedding model (B wrong), abandoning chunking to pass full documents (D) reintroduces the context-cost and dilution problems chunking is meant to solve, and larger isn't unconditionally better (C wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Design a RAG pipeline with appropriate chunking and indexing strategies'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-015",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Design a RAG pipeline with appropriate chunking and indexing strategies",
    type: "mcq",
    stem:
      "A RAG pipeline for a legal-document search tool chunks documents purely by a fixed character count, splitting mid-sentence and mid-clause frequently. What indexing/chunking refinement would likely improve retrieval quality?",
    options: [
      { id: "A", text: "Keep the fixed character-count chunking unchanged, since chunk boundary alignment with semantic content never affects retrieval quality." },
      { id: "B", text: "Increase the fixed character count further, without addressing where the boundaries actually fall relative to sentence or clause structure." },
      { id: "C", text: "Remove all indexing from the pipeline entirely, since indexing strategy has no bearing on legal-document retrieval quality." },
      { id: "D", text: "Chunk along semantic boundaries (paragraphs, sections, clauses) rather than a fixed character count, so each chunk represents a coherent unit of meaning rather than an arbitrary, potentially mid-sentence fragment." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Chunking along semantic boundaries rather than an arbitrary fixed character count directly improves chunk coherence and retrieval quality — boundary alignment does matter (A wrong), simply enlarging a still-arbitrary fixed count (B) doesn't fix where the cuts fall relative to meaning, and indexing/chunking strategy is central to retrieval quality in a domain like legal search (C wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Design a RAG pipeline with appropriate chunking and indexing strategies'",
    difficulty: "medium",
  },
  {
    id: "arch-p-int-016",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Design a RAG pipeline with appropriate chunking and indexing strategies",
    type: "scenario-multi-response",
    stem:
      "Which two are legitimate considerations when designing chunking and indexing for a new RAG pipeline? (Select 2)",
    options: [
      { id: "A", text: "Whether metadata (source, date, section) is preserved alongside each chunk to support filtering and attribution at retrieval time." },
      { id: "B", text: "Whether the chunking strategy happens to be the newest technique mentioned in a recent industry blog post, regardless of fit for this data." },
      { id: "C", text: "Whether chunks can be made as large as technically possible regardless of topical focus, to minimize the total chunk count." },
      { id: "D", text: "Whether chunk boundaries align with semantically coherent units (paragraphs, sections) rather than arbitrary character counts." },
    ],
    correctOptionIds: ["A","D"],
    selectCount: 2,
    explanation:
      "Semantic boundary alignment (D) and preserving useful metadata alongside chunks (A) are both substantive, well-grounded RAG design considerations. Chasing novelty regardless of fit (B) and maximizing chunk size regardless of topical dilution (C) aren't sound design criteria.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Design a RAG pipeline with appropriate chunking and indexing strategies'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-017",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Design a RAG pipeline with appropriate chunking and indexing strategies",
    type: "mcq",
    stem:
      "A team wants their RAG index to support both broad semantic queries ('what are our vacation policies generally?') and exact lookups ('what is the exact PTO accrual rate for tenure band 3?'). Using only vector/embedding-based retrieval, exact numeric lookups perform poorly. What does this suggest about the indexing design?",
    options: [
      { id: "A", text: "Indexing strategy should never vary based on the type of query a system needs to support." },
      { id: "B", text: "A hybrid approach — combining vector search for semantic queries with metadata filtering or exact-match lookup for precise, structured queries — better serves both query types than relying on vector search alone." },
      { id: "C", text: "The only fix is to remove support for exact numeric queries entirely." },
      { id: "D", text: "Vector-based retrieval is always equally effective for both broad semantic queries and exact numeric lookups, so no design change is needed." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Combining semantic vector search with exact-match/metadata-filtered lookup for precise queries is exactly the hybrid design that serves both query shapes well — vector search alone isn't equally suited to both (D wrong), dropping support for exact queries (C) is an unnecessary limitation, and indexing strategy should absolutely be matched to the actual query patterns a system needs to support (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Design a RAG pipeline with appropriate chunking and indexing strategies'",
    difficulty: "hard",
  },
  {
    id: "arch-p-int-018",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Apply retrieval strategies matched to data shape and query pattern",
    type: "mcq",
    stem:
      "A support tool needs to answer 'what is order #48213's current status?' — a query with an exact, known identifier. The current implementation runs this through semantic vector search across all order records. What retrieval strategy would better match this query pattern?",
    options: [
      { id: "A", text: "Remove the ability to look up orders by ID entirely, since exact-match queries can never be supported in a RAG-based system." },
      { id: "B", text: "Retrieval strategy should never be matched to the specific shape of a query." },
      { id: "C", text: "A direct lookup or metadata-filtered query by order ID, rather than semantic vector search, since this is an exact-match query, not an open-ended semantic one." },
      { id: "D", text: "Semantic vector search is always the best retrieval method for every kind of query, including exact-identifier lookups." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "An exact-identifier query is a textbook case for direct lookup/metadata filtering rather than semantic search, which is built for open-ended relevance matching, not precise key-based retrieval — semantic search isn't universally the best method (D wrong), exact-match support is very achievable alongside a RAG system (A wrong), and matching retrieval strategy to query shape is exactly the point of this task statement (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Apply retrieval strategies matched to data shape and query pattern'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-019",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Apply retrieval strategies matched to data shape and query pattern",
    type: "mcq",
    stem:
      "A knowledge base contains both highly structured records (product specs with fixed fields) and unstructured narrative content (blog posts, support transcripts). The team is designing one uniform retrieval approach for both. What is the architectural concern with a single uniform approach?",
    options: [
      { id: "A", text: "Structured and unstructured data often benefit from different retrieval strategies (e.g., field-based filtering for structured specs, semantic search for narrative content); forcing one uniform approach onto both may underperform for at least one of the two data shapes." },
      { id: "B", text: "Structured and unstructured content can never coexist in the same knowledge base under any retrieval design." },
      { id: "C", text: "There is no concern; a single retrieval approach is always equally effective across any mix of structured and unstructured data." },
      { id: "D", text: "Retrieval strategy should be chosen without any regard for the actual shape of the underlying data." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Different data shapes often call for different retrieval mechanisms, and forcing a single uniform approach risks underperforming on whichever shape it fits less well — this isn't universally effective for any data mix (C wrong), the two content types can coexist with an appropriately differentiated retrieval design (B wrong), and matching strategy to data shape is precisely the relevant consideration (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Apply retrieval strategies matched to data shape and query pattern'",
    difficulty: "medium",
  },
  {
    id: "arch-p-int-020",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Apply retrieval strategies matched to data shape and query pattern",
    type: "scenario-multi-response",
    stem:
      "Which two query/data-shape pairings are correctly matched to an appropriate retrieval strategy? (Select 2)",
    options: [
      { id: "A", text: "An exact, known-identifier lookup → semantic vector search as the only retrieval mechanism." },
      { id: "B", text: "An open-ended, conceptual question over narrative documents → semantic vector search." },
      { id: "C", text: "An open-ended, conceptual question over narrative documents → exact-match lookup by a specific field value." },
      { id: "D", text: "An exact, known-identifier lookup → direct/metadata-filtered retrieval rather than semantic search." },
    ],
    correctOptionIds: ["B","D"],
    selectCount: 2,
    explanation:
      "Exact lookups matched to direct/filtered retrieval (D) and open-ended semantic questions matched to vector search (B) are both correctly paired. The reversed pairings (A, C) mismatch the retrieval mechanism to the query shape it's least suited for.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Apply retrieval strategies matched to data shape and query pattern'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-021",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Evaluate connection protocols and select the appropriate integration mechanism (MCP, API/CLI, agent-to-agent)",
    type: "mcq",
    stem:
      "A team needs to expose an internal capability to multiple different Claude applications, maintained independently of any single app, with a standard discovery mechanism for tools/resources. Which integration mechanism best fits, compared to a one-off direct API integration per application?",
    options: [
      { id: "A", text: "Agent-to-agent communication is the only mechanism ever appropriate for exposing any internal capability, regardless of its shape." },
      { id: "B", text: "A direct API/CLI integration duplicated separately into each application is always the better choice regardless of how many applications need the same capability." },
      { id: "C", text: "Integration mechanism choice has no bearing on maintainability across multiple consuming applications." },
      { id: "D", text: "MCP — it's designed for exactly this kind of reusable, standardized, independently-maintained integration across multiple applications, unlike a direct API integration built separately into each app." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "MCP is specifically suited to reusable, standardized, independently-maintained capability shared across multiple applications — duplicating a direct integration into every app (B) doesn't scale as well for this exact use case, agent-to-agent patterns solve a different problem (two independent agentic systems handing off work, not a shared tool interface) (A wrong), and integration mechanism choice directly affects maintainability at scale (C wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Evaluate connection protocols and select the appropriate integration mechanism'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-022",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Evaluate connection protocols and select the appropriate integration mechanism (MCP, API/CLI, agent-to-agent)",
    type: "mcq",
    stem:
      "Two independent, already-built agentic systems (one for research, one for report drafting) need to hand off work to each other for a combined workflow, without either being a simple internal tool call within the other. Which integration mechanism fits this coordination need?",
    options: [
      { id: "A", text: "This kind of coordination between independent agentic systems is not achievable through any integration mechanism." },
      { id: "B", text: "An agent-to-agent pattern, suited to coordinating between two independent agentic systems handing off work, rather than treating one as a simple internal tool of the other." },
      { id: "C", text: "A one-off direct API call with no consideration of the coordination and handoff needs between two independent agentic systems." },
      { id: "D", text: "MCP is the only mechanism ever appropriate for any kind of integration, including this agent-to-agent handoff." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Agent-to-agent coordination is specifically suited to handoffs between independent agentic systems, distinct from a simple tool call — MCP is well suited to standardized tool/resource sharing but isn't the only valid mechanism for every integration shape (D wrong), a bare direct API call with no attention to the coordination need (C) misses the actual requirement, and this kind of coordination is achievable with the right mechanism (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Evaluate connection protocols and select the appropriate integration mechanism'",
    difficulty: "medium",
  },
  {
    id: "arch-p-int-023",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Evaluate connection protocols and select the appropriate integration mechanism (MCP, API/CLI, agent-to-agent)",
    type: "scenario-multi-response",
    stem:
      "Which two factors should drive the choice between MCP, a direct API/CLI integration, and an agent-to-agent pattern for a new integration need? (Select 2)",
    options: [
      { id: "A", text: "Which mechanism has the most visually appealing name for a client-facing architecture diagram." },
      { id: "B", text: "Whether the capability needs to be reused and independently maintained across multiple different applications." },
      { id: "C", text: "Whether the integration is fundamentally about coordinating two independent agentic systems, versus exposing a simple tool interface." },
      { id: "D", text: "Which mechanism was chosen for a completely unrelated integration in the past, regardless of whether the current need is similar." },
    ],
    correctOptionIds: ["B","C"],
    selectCount: 2,
    explanation:
      "Reuse/maintenance needs across applications (B) and whether the integration is fundamentally agent-to-agent coordination versus a tool interface (C) are the substantive factors that should drive this choice. Aesthetic naming (A) and copying an unrelated prior decision without regard to fit (D) aren't sound architectural justifications.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Evaluate connection protocols and select the appropriate integration mechanism'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-024",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Evaluate progressive discovery vs. monolithic context strategy",
    type: "mcq",
    stem:
      "A system currently loads an entire 200-page reference manual into context on every request, even though most individual requests only need a small portion of it. What architectural alternative should the architect evaluate?",
    options: [
      { id: "A", text: "Progressive discovery and monolithic context loading are functionally identical in every respect, with no tradeoff between them." },
      { id: "B", text: "Remove the reference manual from the system entirely, since neither monolithic loading nor progressive discovery can be made to work with reference material of this size." },
      { id: "C", text: "Progressive discovery — giving the agent tools/resources to fetch only the specific portions it needs as it needs them, rather than loading the full manual monolithically on every request." },
      { id: "D", text: "Continue loading the full manual on every request, since monolithic context loading is always the more efficient approach regardless of how much of it is actually used per request." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Progressive discovery — fetching only what's needed on demand — is exactly the alternative worth evaluating when most of a large reference isn't used per request, avoiding the token waste of always loading everything monolithically (D wrong). Removing the reference material entirely (B) discards real value, and the two approaches carry genuinely different tradeoffs, not identical ones (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Evaluate progressive discovery vs. monolithic context strategy'",
    difficulty: "easy",
  },
  {
    id: "arch-p-int-025",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Evaluate progressive discovery vs. monolithic context strategy",
    type: "mcq",
    stem:
      "A team adopts progressive discovery for a knowledge base, giving the agent tools to fetch content as needed. They notice this introduces more round trips and orchestration complexity compared to their previous monolithic approach, even though token usage per request has dropped significantly. What does this illustrate about the choice between these two strategies?",
    options: [
      { id: "A", text: "Progressive discovery trades reduced token usage for increased round trips and orchestration complexity — this is a genuine tradeoff to weigh against the specific system's actual needs, not a strictly one-sided improvement." },
      { id: "B", text: "Monolithic context loading is strictly superior to progressive discovery in every respect, with no offsetting benefit of any kind." },
      { id: "C", text: "There is no meaningful tradeoff between these two strategies; the choice has no practical consequences either way." },
      { id: "D", text: "Progressive discovery is strictly superior to monolithic context loading in every respect, with no offsetting cost of any kind." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is exactly the real tradeoff between the two strategies — token savings versus added round-trip/orchestration overhead — which should be weighed against the specific system's needs rather than assumed to favor one approach unconditionally (D, B both overstate one side), and the tradeoff clearly has practical consequences (C wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Evaluate progressive discovery vs. monolithic context strategy'",
    difficulty: "medium",
  },
  {
    id: "arch-p-int-026",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Evaluate progressive discovery vs. monolithic context strategy",
    type: "scenario-multi-response",
    stem:
      "Which two scenarios are better suited to progressive discovery than a monolithic context strategy? (Select 2)",
    options: [
      { id: "A", text: "A system where minimizing round trips matters far more than minimizing token usage, and the full reference material comfortably fits in context." },
      { id: "B", text: "A small, fixed set of reference material that's needed in full on virtually every single request." },
      { id: "C", text: "A knowledge base far too large to fit in any reasonable context window, where any single request only needs a small, unpredictable portion of it." },
      { id: "D", text: "A system where the specific content needed varies significantly and unpredictably from request to request." },
    ],
    correctOptionIds: ["C","D"],
    selectCount: 2,
    explanation:
      "A knowledge base too large to fit in context with unpredictable per-request needs (C), and a system with highly variable content needs per request (D), are both good fits for progressive discovery's on-demand fetching. A small, consistently-needed reference set (B) and a case prioritizing fewer round trips over token savings with content that already fits comfortably (A) both actually favor a monolithic approach instead.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Evaluate progressive discovery vs. monolithic context strategy'",
    difficulty: "medium",
  },
  {
    id: "arch-p-int-027",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Analyze authentication and authorization requirements to identify security gaps",
    type: "mcq",
    stem:
      "An architect reviewing a proposed integration finds that a third-party MCP server the team plans to adopt requests broad, unscoped access to an internal system rather than the narrow set of operations the actual use case requires. What should the architect recommend?",
    options: [
      { id: "A", text: "Reject the third-party MCP server entirely and refuse any integration with external tools under any circumstances." },
      { id: "B", text: "Grant the broad access as requested, since third-party MCP servers should always be trusted with whatever access level they request by default." },
      { id: "C", text: "Access scope requested by a third-party integration has no bearing on the security posture of the resulting system." },
      { id: "D", text: "Push back on the broad access request and scope the integration's credentials/permissions to only what the actual use case requires, even if that means additional configuration work with the third-party server." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Scoping access to the actual use case, even for a third-party integration, is exactly the least-privilege discipline this task statement calls for — granting broad access by default because a third party requested it (B) isn't a sound security posture, categorically refusing all third-party integrations (A) is an overcorrection, and requested access scope directly affects the resulting security posture (C wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Analyze authentication and authorization requirements to identify security gaps'",
    difficulty: "medium",
  },
  {
    id: "arch-p-int-028",
    certificationSlug: "architect-professional",
    domain: "Integration",
    taskStatement: "Analyze observability challenges and select monitoring strategies at scale",
    type: "mcq",
    stem:
      "A team wants to detect gradual quality drift in a production agentic system before it becomes a customer-visible problem, rather than relying solely on customer complaints as the detection mechanism. What observability approach supports this?",
    options: [
      { id: "A", text: "Observability strategy has no bearing on how early a quality regression can be detected." },
      { id: "B", text: "Proactive, ongoing monitoring of key quality metrics (accuracy, escalation rate, etc.) with alerting on meaningful trend changes, rather than waiting for external reports to surface a problem that may have been building for some time." },
      { id: "C", text: "Checking system quality manually once a year, since more frequent monitoring never provides additional value." },
      { id: "D", text: "Relying exclusively on customer complaints as the sole detection mechanism, since proactive monitoring never catches issues that complaints wouldn't also eventually surface." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Proactive, trend-based monitoring with alerting is exactly what enables earlier detection than waiting for customer complaints, which often lag well behind when a problem actually started — complaint-only detection (D) is reactive and slow, infrequent manual checks (C) miss the benefit of continuous monitoring, and observability strategy directly affects detection speed (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 3 — 'Analyze observability challenges and select monitoring strategies at scale'",
    difficulty: "medium",
  },
];
