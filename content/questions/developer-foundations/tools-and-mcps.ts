import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "dev-tm-001",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Tool Implementation",
    type: "mcq",
    stem:
      "A developer defines two tools with nearly identical descriptions: 'get_data' and 'fetch_data.' Production logs show the model frequently calls the wrong one for a given request. What is the most likely root cause?",
    options: [
      { id: "A", text: "The tools' descriptions don't clearly differentiate their purpose, inputs, or when to use one versus the other, since tool descriptions are the primary signal the model uses for selection." },
      { id: "B", text: "Tool names always have zero effect on selection reliability regardless of clarity." },
      { id: "C", text: "This can only be fixed by removing all tools from the application." },
      { id: "D", text: "The model is fundamentally incapable of ever choosing correctly between two tools." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Ambiguous, overlapping descriptions are a classic cause of tool-selection errors, since descriptions are the model's primary basis for deciding — this isn't a fundamental incapability (D), removing all tools (C) is a drastic overcorrection, and description/naming clarity does meaningfully affect selection reliability (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 (Tools and MCPs) — 'Tool Implementation'",
    difficulty: "easy",
  },
  {
    id: "dev-tm-002",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Tool Implementation",
    type: "mcq",
    stem:
      "A tool's error handling always returns the same generic string, 'Operation failed,' regardless of whether the failure was a timeout, a validation error, or a permissions issue. What problem does this cause for the calling agent?",
    options: [
      { id: "A", text: "Generic error messages always improve the model's decision-making compared to more detailed ones." },
      { id: "B", text: "There is no problem, since a generic error message is always sufficient information for any recovery decision." },
      { id: "C", text: "This only matters if the tool is called more than once." },
      { id: "D", text: "The agent can't distinguish between error types and therefore can't choose an appropriate recovery strategy (retry, fix input, escalate) for each specific situation." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A generic, undifferentiated error message hides the information needed to choose an appropriate recovery path — this is a real, meaningful limitation (B wrong), it applies from the very first call (C wrong), and more informative errors generally improve, not worsen, decision-making (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Tool Implementation'",
    difficulty: "easy",
  },
  {
    id: "dev-tm-003",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Tool Implementation",
    type: "mcq",
    stem:
      "A developer wants to guarantee that a specific tool (e.g., extract_metadata) is always called first in a pipeline, before any other tool, rather than leaving the order to the model's judgment. What tool_choice configuration achieves this?",
    options: [
      { id: "A", text: "tool_choice: 'auto', which lets the model decide freely whether to call any tool at all." },
      { id: "B", text: "A forced/named tool_choice specifying that exact tool, ensuring it's the one called for that step, rather than 'auto' or 'any.'" },
      { id: "C", text: "This kind of ordering guarantee is not possible with the Claude API." },
      { id: "D", text: "tool_choice has no effect on which specific tool gets called." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A forced, named tool_choice is exactly the mechanism for guaranteeing a specific tool call — 'auto' (A) leaves the choice, including whether to call any tool, up to the model, tool_choice absolutely does affect which tool is called (D wrong), and this kind of guarantee is supported (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Tool Implementation'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-004",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Tool Implementation",
    type: "mcq",
    stem:
      "A developer wants the model to be guaranteed to call some tool on a given turn — any tool — but not necessarily a specific named one, and not simply respond with plain text. Which tool_choice setting fits?",
    options: [
      { id: "A", text: "A forced, named tool_choice for one specific tool, which would over-constrain this need." },
      { id: "B", text: "There is no tool_choice option that guarantees a tool call without naming a specific tool." },
      { id: "C", text: "tool_choice: 'any' — forcing a tool call while still letting the model choose which one." },
      { id: "D", text: "tool_choice: 'auto', which may still return plain text instead of a tool call." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "'any' is precisely the setting for 'must call a tool, but which one is up to the model' — 'auto' (D) doesn't guarantee a tool call at all, a forced named choice (A) removes the model's freedom to choose which tool, and this option does exist (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Tool Implementation'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-005",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Tool Implementation",
    type: "scenario-multi-response",
    stem:
      "Which two practices improve tool selection reliability when a system has several similar tools? (Select 2)",
    options: [
      { id: "A", text: "Adding as many additional tools as possible to the agent's toolkit, regardless of whether they're relevant to its role." },
      { id: "B", text: "Giving every tool the shortest possible description to save tokens, regardless of resulting ambiguity." },
      { id: "C", text: "Renaming or splitting overlapping tools into more clearly differentiated, purpose-specific ones." },
      { id: "D", text: "Writing tool descriptions that explicitly state input formats, example use cases, and boundaries versus similar tools." },
    ],
    correctOptionIds: ["C","D"],
    selectCount: 2,
    explanation:
      "Clear, boundary-explaining descriptions (D) and splitting/renaming overlapping tools (C) both directly improve selection reliability. Minimizing description length at the cost of clarity (B) and adding irrelevant tools (A) both make selection reliability worse.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Tool Implementation'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-006",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Tool Implementation",
    type: "mcq",
    stem:
      "A tool for looking up inventory levels sometimes needs to run on the client application's own infrastructure (to access a local database) and sometimes could be handled entirely by Anthropic's infrastructure. What distinguishes a client-side tool from a server-side tool?",
    options: [
      { id: "A", text: "A client-side tool executes in the calling application's own infrastructure, with the application responsible for running it and returning results, while a server-side tool runs on Anthropic's infrastructure without the application needing to implement execution." },
      { id: "B", text: "There is no meaningful distinction; all tools execute identically regardless of type." },
      { id: "C", text: "Server-side tools require the developer to host their own execution servers." },
      { id: "D", text: "Client-side tools can never access private, internal systems." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is exactly the distinguishing factor — where execution happens and who's responsible for it. There is a real, meaningful distinction (B wrong), client-side tools are actually well-suited to private/internal systems since the application controls execution (D wrong, backwards), and server-side tools specifically don't require the developer to host execution infrastructure — that's the point of them running on Anthropic's side (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Tool Implementation'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-007",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Tool Implementation",
    type: "mcq",
    stem:
      "A developer wants sensitive tool calls (e.g., anything that modifies financial records) to require a human approval step before executing, even though the model is technically capable of calling the tool directly. What tool usage pattern addresses this?",
    options: [
      { id: "A", text: "There is no way to add a human approval step to tool execution." },
      { id: "B", text: "Approval patterns are only relevant to non-financial tools." },
      { id: "C", text: "Removing the tool from the agent's toolkit entirely is the only way to ensure human oversight." },
      { id: "D", text: "An approval pattern, where the tool call is surfaced for human confirmation before it actually executes, rather than executing immediately based solely on the model's decision." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "An approval pattern — gating execution on human confirmation — is exactly the mechanism for this need, without requiring the tool to be removed entirely (C) or being impossible to implement (A wrong); this pattern is broadly applicable, not limited to non-financial contexts (B wrong, if anything it's especially relevant to financial actions).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Tool Implementation'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-008",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Tool Implementation",
    type: "mcq",
    stem:
      "A developer notices that when a request maps closely to a tool's described capability, Claude reliably calls it, but for a borderline request, it sometimes responds in prose instead. What default tool_choice behavior does this reflect?",
    options: [
      { id: "A", text: "'auto' guarantees a tool call on every single turn with no exceptions." },
      { id: "B", text: "tool_choice: 'auto' (the default), where the model determines on each turn whether to call a tool or respond directly, based on whether the request maps to a tool's capability and whether the answer is already available." },
      { id: "C", text: "This behavior only occurs when no tools are defined at all." },
      { id: "D", text: "This behavior indicates a bug requiring immediate escalation to support." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "This is the expected behavior of the default 'auto' tool_choice — the model weighs whether a tool call is warranted rather than always calling one — this isn't a bug (D), it happens specifically because tools ARE defined and being considered (C wrong), and 'auto' explicitly does not guarantee a tool call every turn (A wrong, that's what 'any' or a forced choice is for).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Tool Implementation'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-009",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Tool Implementation",
    type: "mcq",
    stem:
      "A tool's description says 'Gets data.' A developer wants to improve it to reduce ambiguity. Which revised description reflects the best practice?",
    options: [
      { id: "A", text: "'This tool is very important and should be used often.'" },
      { id: "B", text: "No description text is needed as long as the tool's function name sounds intuitive." },
      { id: "C", text: "'Retrieves current inventory count for a given SKU from the warehouse database. Use for stock-level questions; does not handle pricing or order history. Input: a SKU string.'" },
      { id: "D", text: "'Gets data from somewhere, for various purposes, in different formats.'" },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Option C specifies purpose, input format, and explicit boundaries versus adjacent concerns (pricing, order history) — exactly what a good tool description needs. The others remain vague (D), rely on an unreliable assumption that names alone suffice (B), or add no actionable information about what the tool does or when to use it (A).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Tool Implementation'",
    difficulty: "easy",
  },
  {
    id: "dev-tm-010",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "MCP Server Development",
    type: "mcq",
    stem:
      "A team wants to expose several internal operations (querying a database, updating records, listing available reports) to multiple different Claude applications, maintained independently of any single app. What is the most appropriate approach?",
    options: [
      { id: "A", text: "Build an MCP server exposing these operations as tools/resources, so any compliant Claude application can connect to and reuse it." },
      { id: "B", text: "Avoid building any shared integration and require each team to solve this independently with no code reuse." },
      { id: "C", text: "Hard-code the same logic separately into each individual application's own codebase." },
      { id: "D", text: "Paste the underlying data into each application's system prompt on every request." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "An MCP server is exactly the mechanism for exposing reusable, independently-maintained capability across multiple applications — duplicating logic per app (C) isn't maintainable, pasting live data into prompts (D) doesn't scale and wastes context, and forcing independent, uncoordinated solutions (B) forfeits the reuse benefit entirely.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'MCP Server Development'",
    difficulty: "easy",
  },
  {
    id: "dev-tm-011",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "MCP Server Development",
    type: "mcq",
    stem:
      "A developer is deciding how to communicate between a local Claude Code session and a locally-running MCP server on the same machine. What is a suitable communication pattern for this?",
    options: [
      { id: "A", text: "This scenario always requires a remote HTTP server hosted on the public internet, with no local option available." },
      { id: "B", text: "Communication pattern choice has no bearing on whether the server is local or remote." },
      { id: "C", text: "MCP servers cannot communicate with local clients under any circumstances." },
      { id: "D", text: "stdio — a standard input/output-based local process communication pattern well suited to a locally-running server." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "stdio is specifically well suited to local process communication between a client and a locally-running server — a public remote server isn't required for this (A wrong), local MCP communication is well supported (C wrong), and communication pattern does need to match the actual deployment (local vs. remote) context (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'MCP Server Development'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-012",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "MCP Server Development",
    type: "mcq",
    stem:
      "An MCP server implements a tool call that fails due to invalid input. What is the recommended way to communicate this failure back to the calling agent?",
    options: [
      { id: "A", text: "Silently return an empty successful result with no indication that anything failed." },
      { id: "B", text: "Use the isError flag pattern along with a clear, structured description of what went wrong, so the agent has usable information to act on." },
      { id: "C", text: "Return the failure only as an ambiguous numeric code with no other context." },
      { id: "D", text: "Crash the entire MCP server process on any tool failure." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "The isError flag combined with a clear description is the recognized MCP pattern for communicating tool failure usefully — silently returning success (A) hides the failure entirely, crashing the whole server over one tool's failure (D) is a disproportionate response, and an ambiguous code with no context (C) doesn't give the agent enough to act on.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'MCP Server Development'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-013",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "MCP Server Development",
    type: "mcq",
    stem:
      "A developer wants to expose a catalog of available documentation pages to an agent so it knows what's available without needing exploratory tool calls to discover it first. What MCP concept fits this need?",
    options: [
      { id: "A", text: "This kind of catalog exposure is not supported by MCP." },
      { id: "B", text: "The agent must always discover content purely through trial-and-error tool calls, with no alternative." },
      { id: "C", text: "MCP resources — a mechanism for exposing content catalogs (like documentation structure) that give the agent visibility into what's available without requiring exploratory calls." },
      { id: "D", text: "MCP tools, which are meant for actions rather than exposing a browsable catalog of content." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "MCP resources are specifically designed for exposing content catalogs that reduce the need for exploratory tool calls — tools (D) are more suited to actions than to browsing a catalog, resources are a real, supported MCP concept (A wrong), and this alternative to pure trial-and-error discovery does exist (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'MCP Server Development'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-014",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "MCP Server Development",
    type: "mcq",
    stem:
      "A team needs to integrate with a widely-used third-party project management tool (e.g., a well-known issue tracker). What is a reasonable first step before building anything custom?",
    options: [
      { id: "A", text: "Check whether an existing, actively-maintained community MCP server already provides this integration, since building a custom server for a standard, widely-used tool duplicates effort that likely already exists." },
      { id: "B", text: "Avoid any integration with this tool entirely, since MCP cannot connect to third-party project management tools." },
      { id: "C", text: "Hard-code the integration logic directly into the system prompt with no actual tool implementation." },
      { id: "D", text: "Always build a custom MCP server from scratch, regardless of whether an existing option is available, since custom is always superior." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Checking for an existing, maintained community server first avoids duplicating effort for a standard integration — defaulting to custom-build regardless (D) isn't the efficient choice for something this common, MCP can absolutely connect to popular third-party tools (B wrong), and hard-coding logic into a prompt with no real tool implementation (C) isn't a functional integration at all.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'MCP Server Development'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-015",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "MCP Server Development",
    type: "scenario-multi-response",
    stem:
      "Which two are genuine benefits of building a custom MCP server for a team-specific internal system, rather than embedding the integration logic directly into one application? (Select 2)",
    options: [
      { id: "A", text: "The integration can be reused across multiple different Claude applications without duplicating the underlying logic in each one." },
      { id: "B", text: "The integration can be maintained and updated independently of any single consuming application's release cycle." },
      { id: "C", text: "It eliminates the need for any authentication or credential management for the underlying system." },
      { id: "D", text: "It guarantees the integration will never contain any bugs." },
    ],
    correctOptionIds: ["A","B"],
    selectCount: 2,
    explanation:
      "Reusability across applications (A) and independent maintainability (B) are the genuine, well-recognized benefits of an MCP server for this use case. It doesn't guarantee bug-free code (D) or eliminate the need for proper credential management (C) — those remain real engineering concerns regardless of the integration pattern chosen.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'MCP Server Development'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-016",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "MCP Server Development",
    type: "mcq",
    stem:
      "A remote MCP server needs to support multiple simultaneous client connections over a network rather than a single local process. Which communication approach is better suited to this than stdio?",
    options: [
      { id: "A", text: "There is no way to support remote or multi-client MCP connections." },
      { id: "B", text: "Communication transport choice has no bearing on whether multiple remote clients can connect." },
      { id: "C", text: "stdio, which is designed specifically for a single local process's standard input/output, not multi-client network access." },
      { id: "D", text: "A network-based transport (e.g., HTTP/SSE-based), which is designed for remote, potentially multi-client connections rather than a single local process pipe." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A network-based transport is the appropriate fit for remote, multi-client access, unlike stdio (C), which is inherently tied to a single local process — remote/multi-client MCP support does exist (A wrong), and transport choice very much affects this capability (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'MCP Server Development'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-017",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Agentic Customization",
    type: "mcq",
    stem:
      "A developer needs a one-off, app-specific integration with an obscure internal system that only one application will ever use. Is building a full MCP server the most efficient choice here?",
    options: [
      { id: "A", text: "The choice between a custom tool and an MCP server has no relationship to whether reuse across applications is needed." },
      { id: "B", text: "Not necessarily; a simpler custom tool scoped to that one application may be more efficient than the added structure of a full MCP server, when reuse across multiple applications isn't actually needed." },
      { id: "C", text: "Yes, an MCP server is always strictly required for any tool integration, regardless of reuse needs." },
      { id: "D", text: "No integration approach is appropriate for a one-off, app-specific need." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Reuse potential is exactly the factor that should drive this choice — for a genuinely one-off, single-app need, a simpler custom tool avoids unnecessary structure, unlike always requiring an MCP server (C wrong). A one-off integration can absolutely still be built well with a custom tool (D wrong), and this decision is directly tied to whether reuse is actually needed (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Agentic Customization'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-018",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Agentic Customization",
    type: "mcq",
    stem:
      "A developer keeps re-explaining the same multi-step review checklist to Claude Code in every session. What is the more efficient agentic customization mechanism for this compared to repeating it manually each time?",
    options: [
      { id: "A", text: "A brand-new custom MCP server built specifically for this one checklist, regardless of whether external system access is even needed." },
      { id: "B", text: "There is no way to avoid re-explaining a repeated procedure." },
      { id: "C", text: "A Skill — packaging the repeatable checklist/procedure so it can be invoked on demand rather than re-explained from scratch each session." },
      { id: "D", text: "A built-in tool, since built-in tools can be redefined to contain arbitrary custom procedures." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A Skill is the right-sized mechanism for packaging a repeatable procedure that doesn't require external system access — building a full MCP server for a checklist that doesn't touch any external system (A) is unnecessary overhead, this repetition is avoidable (B wrong), and built-in tools aren't a mechanism for defining arbitrary custom procedures (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Agentic Customization'",
    difficulty: "easy",
  },
  {
    id: "dev-tm-019",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Agentic Customization",
    type: "mcq",
    stem:
      "A team needs an agent to reliably call an internal REST API with fairly complex, app-specific business logic around request construction. Which customization mechanism is generally best suited to this?",
    options: [
      { id: "A", text: "A custom tool implementing that specific business logic, since it's tailored to this application's particular API and needs, and built-in tools don't know about this internal system." },
      { id: "B", text: "A built-in tool, since built-in tools can automatically reach any internal REST API without any custom implementation." },
      { id: "C", text: "No customization mechanism can support this kind of integration." },
      { id: "D", text: "A Skill, since Skills are the only mechanism capable of making any external network request." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A custom tool is the right fit for app-specific business logic around an internal API — built-in tools don't automatically reach arbitrary internal REST APIs (B wrong), Skills aren't required or exclusive for making network requests (D wrong), and this kind of integration is well-supported through custom tools (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Agentic Customization'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-020",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Agentic Customization",
    type: "scenario-multi-response",
    stem:
      "A team needs to decide between a built-in tool, a custom tool, a Skill, and an MCP server for various needs. Which two pairings are appropriate? (Select 2)",
    options: [
      { id: "A", text: "Use a built-in tool (like Grep) for searching file contents in a codebase, since this is exactly what it's designed for, with no custom implementation needed." },
      { id: "B", text: "Use a built-in tool for a highly specific, app-only business rule that doesn't exist in any built-in tool's functionality." },
      { id: "C", text: "Use an MCP server for a capability that must be reused and independently maintained across multiple different Claude applications." },
      { id: "D", text: "Use an MCP server for a purely internal, one-off procedure with no external system access and no reuse need across applications." },
    ],
    correctOptionIds: ["A","C"],
    selectCount: 2,
    explanation:
      "A built-in tool for exactly the generic capability it's designed for (A), and an MCP server for genuinely reusable, independently-maintained, cross-application capability (C), are both well-matched pairings. A built-in tool can't implement app-specific business logic it wasn't designed for (B wrong), and an MCP server is unnecessary overhead for a one-off procedure with no external access or reuse need (D wrong, better suited to a Skill).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Agentic Customization'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-021",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Tool Implementation",
    type: "mcq",
    stem:
      "A developer's tool for searching a knowledge base returns a distinct response when zero documents match a valid query, versus when the search backend itself is unreachable. Why does maintaining this distinction matter for tool implementation?",
    options: [
      { id: "A", text: "Distinguishing these cases makes tool implementation strictly more error-prone with no benefit." },
      { id: "B", text: "This distinction is only relevant for tools that never fail." },
      { id: "C", text: "It doesn't matter; both cases should always be treated identically by any well-implemented tool." },
      { id: "D", text: "It lets the calling agent correctly interpret a valid empty result as 'nothing found' rather than mistakenly treating it the same as a failure needing a retry or escalation." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Distinguishing a genuine empty result from an actual backend failure is exactly what lets the agent respond appropriately to each — collapsing them (C) is the underlying problem, this distinction matters precisely because failures can happen (B wrong, contradicts its own premise), and it's a benefit, not a cost, to implementation quality (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Tool Implementation'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-022",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "MCP Server Development",
    type: "mcq",
    stem:
      "A developer configures an MCP server to be available only to themselves for personal experimentation, without sharing it with the rest of the team via the project's version-controlled configuration. Where should this be configured?",
    options: [
      { id: "A", text: "In the project-scoped, version-controlled configuration, so the whole team automatically receives the experimental server too." },
      { id: "B", text: "In a user-scoped configuration location (personal to that individual), rather than the project-scoped, version-controlled configuration that the whole team would receive." },
      { id: "C", text: "There is no way to configure an MCP server for personal use only." },
      { id: "D", text: "MCP servers can only ever be configured at a project-wide, shared scope." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A user-scoped configuration is exactly what keeps an experimental server personal rather than distributing it to the whole team via project-scoped, version-controlled configuration (A, the opposite of what's wanted) — personal-scope configuration for this purpose is well-supported (C, D both wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'MCP Server Development'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-023",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Tool Implementation",
    type: "mcq",
    stem:
      "A developer notices an agent given 18 different tools performs less reliably at choosing the right one than the same agent given a scoped set of 4-5 relevant tools. What principle does this illustrate?",
    options: [
      { id: "A", text: "Tool count has no relationship to selection reliability whatsoever." },
      { id: "B", text: "This only happens with fewer than 10 tools, and reverses at higher counts." },
      { id: "C", text: "Excessive tool count increases decision complexity for the model, degrading selection reliability — scoping an agent to only the tools relevant to its role tends to improve reliable tool use." },
      { id: "D", text: "More tools always improve reliability with no downside, so this observation must be a measurement error." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "This is exactly the recognized principle — too many tools increases decision complexity and degrades reliable selection, so scoping tool access to what's actually relevant helps. This isn't a measurement artifact (D wrong), tool count clearly relates to selection reliability (A wrong), and there's no such reversal pattern implied (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Tool Implementation'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-024",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Agentic Customization",
    type: "mcq",
    stem:
      "A team wants to give a research subagent the ability to occasionally verify a specific fact without routing every single verification through the coordinator, since 85% of these are simple lookups. But they don't want to give the subagent full, unrestricted web-search capability. What customization approach fits this need?",
    options: [
      { id: "A", text: "Provide the subagent a narrowly scoped tool for the common, simple case (e.g., a targeted verify_fact tool), while still routing genuinely complex verification needs through the coordinator to the full-capability agent." },
      { id: "B", text: "This kind of partial, scoped capability is not achievable through any customization mechanism." },
      { id: "C", text: "Give the subagent the exact same full set of tools as the coordinator, with no scoping distinction at all." },
      { id: "D", text: "Remove the subagent's ability to verify anything at all, routing 100% of requests through the coordinator regardless of simplicity." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A narrowly scoped tool for the common case, while preserving the coordinator route for genuinely complex needs, applies least privilege while still addressing the actual bottleneck — giving full unrestricted access (C) over-provisions the subagent, routing everything through the coordinator regardless of simplicity (D) doesn't address the described latency problem, and this kind of scoped customization is achievable (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Agentic Customization'",
    difficulty: "hard",
  },
  {
    id: "dev-tm-025",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "MCP Server Development",
    type: "mcq",
    stem:
      "A developer building an MCP server wants clients to know not just that a tool exists, but details about expected inputs, edge cases, and what distinguishes it from a similarly-named tool in the same server. Where should this information live?",
    options: [
      { id: "A", text: "Tool descriptions cannot contain information about edge cases or distinguishing similar tools." },
      { id: "B", text: "Only in a separate README file that the agent never actually receives as part of its context." },
      { id: "C", text: "This information is unnecessary since tool names alone always fully convey this level of detail." },
      { id: "D", text: "In the tool's own description within the MCP server's tool definition, since this is what the calling agent actually reads to decide when and how to use it." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "The tool's own description, as delivered through the MCP server's definition, is what the agent actually sees and uses for selection — information sitting only in an external README the agent never receives (B) doesn't help at runtime, descriptions absolutely can and should include this detail (A wrong), and tool names alone are rarely sufficient to convey this level of nuance (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'MCP Server Development'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-026",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Tool Implementation",
    type: "mcq",
    stem:
      "A tool that processes refunds returns 'retriable: false' along with a customer-friendly explanation when a request violates a business rule (e.g., exceeding a refund policy limit). Why is marking this specific error as non-retriable important?",
    options: [
      { id: "A", text: "Marking an error non-retriable always causes the entire application to crash." },
      { id: "B", text: "It signals to the calling agent that retrying the exact same request won't change the outcome, since the failure is a policy violation rather than a transient condition — helping the agent avoid wasted retry attempts and instead escalate or explain the limitation." },
      { id: "C", text: "It should be applied to every possible error type, including genuinely transient ones like timeouts." },
      { id: "D", text: "It has no effect on agent behavior and is purely cosmetic metadata." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Distinguishing non-retriable business-rule violations from retriable transient errors is exactly what lets the agent avoid pointless retries and choose an appropriate response instead — this metadata has real behavioral impact (D wrong), it should NOT be applied to genuinely transient errors like timeouts, which are retriable (C wrong), and it doesn't cause a crash (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Tool Implementation'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-027",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "Agentic Customization",
    type: "mcq",
    stem:
      "A developer is deciding whether a new capability should be built as a built-in-tool wrapper, a custom tool, a Skill, or an MCP server. What is the most sound general approach to this decision?",
    options: [
      { id: "A", text: "Always use whichever mechanism was used for the most recent unrelated feature, regardless of fit." },
      { id: "B", text: "The choice among these four mechanisms is arbitrary and has no real consequences." },
      { id: "C", text: "Evaluate the actual requirements — whether a built-in tool already covers it, whether it needs live external system access, whether it needs to be reused across applications, and whether it's a repeatable on-demand procedure — rather than defaulting to the same mechanism for every situation." },
      { id: "D", text: "Always build a full custom MCP server for every new capability, regardless of scope or reuse needs." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Matching the mechanism to the actual shape of the need (existing coverage, external access, reuse, on-demand procedure) is the sound general approach — defaulting based on unrelated precedent (A) or always choosing the heaviest option regardless of fit (D) both skip this evaluation, and the choice does have real consequences for maintainability and reliability (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'Agentic Customization'",
    difficulty: "medium",
  },
  {
    id: "dev-tm-028",
    certificationSlug: "developer-foundations",
    domain: "Tools and MCPs",
    taskStatement: "MCP Server Development",
    type: "mcq",
    stem:
      "An MCP server exposes both tools (for taking actions) and resources (for browsable content). A developer is deciding which category a new capability — 'list all open support tickets' — belongs in. What is the relevant distinction?",
    options: [
      { id: "A", text: "Since this is about exposing available content for the agent to browse or reference (rather than performing an action with side effects), it fits better as a resource than as an action-oriented tool, though a simple lookup could reasonably be implemented either way depending on how it's used." },
      { id: "B", text: "This capability cannot be exposed through MCP in any form." },
      { id: "C", text: "Only tools can ever return any data; resources can never contain content." },
      { id: "D", text: "Tools and resources are functionally identical in MCP with no meaningful distinction." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "The tools-for-actions versus resources-for-browsable-content framing is the relevant distinction, even though a listing capability could reasonably be implemented as either depending on context — tools and resources do serve different conceptual purposes (D wrong), resources absolutely can contain content, that's their point (C wrong), and this kind of capability is well within what MCP supports (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 8 — 'MCP Server Development'",
    difficulty: "hard",
  },
];
