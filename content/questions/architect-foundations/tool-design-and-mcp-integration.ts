import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "arch-f-tdmi-001",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.1",
    type: "mcq",
    scenarioContext:
      "You are building a multi-agent research system with a coordinator agent that delegates to specialized subagents for web search, document analysis, and synthesis.",
    stem:
      "Two tools, 'analyze_content' and 'analyze_document,' have nearly identical one-line descriptions. Production logs show the model frequently calls the wrong one. What is the most direct fix?",
    options: [
      { id: "A", text: "Leave the descriptions unchanged, since tool names alone always fully determine selection reliability regardless of description quality." },
      { id: "B", text: "Increase the model's context window, which is unrelated to tool description clarity." },
      { id: "C", text: "Delete both tools and replace them with no analysis capability at all." },
      { id: "D", text: "Rename and rewrite the descriptions to clearly differentiate purpose, input format, and boundaries — e.g., renaming 'analyze_content' to something web-specific like 'extract_web_results' with a description that distinguishes it from document analysis." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Renaming and rewriting overlapping tool descriptions to eliminate ambiguity is exactly the recommended fix for this pattern — description quality, not just name, drives selection reliability (A wrong), removing both tools (C) discards needed capability, and context window size (B) is unrelated to description-driven selection confusion.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.1 — tool interface design",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-002",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.1",
    type: "mcq",
    scenarioContext:
      "You are building a multi-agent research system with a coordinator agent that delegates to specialized subagents for web search, document analysis, and synthesis.",
    stem:
      "A tool's description says only 'Retrieves information.' The system prompt separately contains the word 'search' several times in unrelated contexts. What risk does this combination create?",
    options: [
      { id: "A", text: "Repeating a keyword in the system prompt always improves tool selection accuracy." },
      { id: "B", text: "Keyword-sensitive system prompt wording can create unintended associations that override an otherwise reasonable but minimal tool description, skewing tool selection in ways the developer didn't intend." },
      { id: "C", text: "This risk only exists if the tool description is completely empty." },
      { id: "D", text: "System prompt wording has no influence on tool selection under any circumstances." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "System prompt wording can create keyword-sensitive associations that skew tool selection, especially when the tool's own description is minimal and doesn't provide a strong independent signal — system prompt wording clearly can influence selection (D wrong), the risk isn't gated by having a literally empty description (C wrong), and repeated keywords aren't guaranteed to improve accuracy — they can just as easily create unintended bias (A wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.1 — tool interface design",
    difficulty: "hard",
  },
  {
    id: "arch-f-tdmi-003",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.1",
    type: "mcq",
    scenarioContext:
      "You are building a multi-agent research system with a coordinator agent that delegates to specialized subagents for web search, document analysis, and synthesis.",
    stem:
      "A single generic 'analyze_document' tool is used for extracting data points, summarizing content, and verifying claims against sources — three fairly distinct operations. What tool design change would likely improve reliability?",
    options: [
      { id: "A", text: "Merge the tool with unrelated web-search functionality to consolidate everything into one universal tool." },
      { id: "B", text: "Tool granularity has no bearing on how reliably the model selects and uses a tool correctly." },
      { id: "C", text: "Split the generic tool into purpose-specific tools (e.g., extract_data_points, summarize_content, verify_claim_against_source) with clearly defined, distinct input/output contracts." },
      { id: "D", text: "Keep the single generic tool but make its description even shorter to reduce token usage." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Splitting an overloaded generic tool into distinct, purpose-specific tools with clear contracts is the recommended fix when one tool tries to do too much — shortening an already-vague description (D) makes the ambiguity worse, merging in unrelated functionality (A) compounds the overload problem, and tool granularity does meaningfully affect selection and usage reliability (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.1 — tool interface design",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-004",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.1",
    type: "scenario-multi-response",
    stem:
      "Which two practices most directly improve tool selection reliability when a system has several tools with related purposes? (Select 2)",
    options: [
      { id: "A", text: "Writing descriptions that include input formats, example queries, and explicit boundaries versus similar tools." },
      { id: "B", text: "Making every tool description as short as possible regardless of resulting ambiguity, to save tokens." },
      { id: "C", text: "Giving multiple tools intentionally similar names so they appear consistent to developers reading the code." },
      { id: "D", text: "Reviewing the system prompt for keyword-sensitive wording that could override well-written tool descriptions." },
    ],
    correctOptionIds: ["A","D"],
    selectCount: 2,
    explanation:
      "Detailed, boundary-explaining descriptions (A) and checking for system-prompt keyword interference (D) are both concrete, recommended practices. Prioritizing brevity over clarity (B) and choosing similar names for developer-side consistency at the cost of model-facing ambiguity (C) both work against reliable selection.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.1 — tool interface design",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-005",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.1",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A tool description omits any mention of edge cases (e.g., what happens when a requested file doesn't exist). What consequence is most likely?",
    options: [
      { id: "A", text: "The model may not know how the tool is expected to behave in that edge case, leading to inconsistent handling or unexpected assumptions when the edge case actually occurs." },
      { id: "B", text: "Edge cases never occur in practice, so omitting them from descriptions has no real consequence." },
      { id: "C", text: "Tool descriptions are not read by the model at call time, so their content is irrelevant to behavior." },
      { id: "D", text: "The tool will automatically throw a compilation error if its description omits edge cases." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Omitting edge-case guidance from a tool's description leaves the model without direction for exactly the situations most likely to cause inconsistent behavior — edge cases do occur in practice (B wrong), this isn't a compilation-time concern (D wrong), and tool descriptions are precisely what the model reads to decide how and when to use a tool (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.1 — tool interface design",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-006",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.2",
    type: "mcq",
    scenarioContext:
      "You are building a multi-agent research system with a coordinator agent that delegates to specialized subagents for web search, document analysis, and synthesis.",
    stem:
      "A web-search tool times out due to a network issue. Its implementation returns a generic 'Operation failed' message with the isError flag set. What critical information is missing from this response?",
    options: [
      { id: "A", text: "Nothing is missing; the isError flag alone is always sufficient information for any recovery decision." },
      { id: "B", text: "The response only needs to include the current timestamp to be considered complete." },
      { id: "C", text: "The response is missing a request for the user's password, which should always accompany any error." },
      { id: "D", text: "Structured metadata distinguishing this as a transient, likely-retryable error, along with what was attempted — a generic message gives the coordinator no basis for deciding whether to retry, try an alternative, or escalate." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A bare isError flag with a generic message hides exactly the categorization and context the coordinator needs to make an informed recovery decision — the flag alone isn't sufficient (A wrong), credentials are irrelevant to error reporting (C wrong), and a timestamp alone doesn't provide the needed error category or retry guidance (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.2 — structured error responses for MCP tools",
    difficulty: "easy",
  },
  {
    id: "arch-f-tdmi-007",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.2",
    type: "mcq",
    scenarioContext:
      "You are building a multi-agent research system with a coordinator agent that delegates to specialized subagents for web search, document analysis, and synthesis.",
    stem:
      "A document-search tool returns the same response shape whether it successfully found zero matching documents or whether the search backend was actually unreachable. What problem does this create?",
    options: [
      { id: "A", text: "There is no problem, since empty results and failures should always be treated identically by any well-designed system." },
      { id: "B", text: "The coordinator can't distinguish a valid empty result (a successful search that legitimately found nothing) from an access failure (needing a retry decision), which can lead to either wasted retries on a real empty result or silently accepting a failure as if it were a real answer." },
      { id: "C", text: "MCP tools are incapable of representing this distinction in any way." },
      { id: "D", text: "This only matters if the search tool is called more than 100 times in a session." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Collapsing 'genuinely found nothing' and 'couldn't actually search' into the same response shape denies the coordinator the information needed to respond appropriately to each — they should not be treated identically (A wrong), the problem exists from the first call, not after some volume threshold (D wrong), and MCP's structured error/result patterns are specifically capable of representing this distinction (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.2 — structured error responses for MCP tools",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-008",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.2",
    type: "mcq",
    scenarioContext:
      "You are building a multi-agent research system with a coordinator agent that delegates to specialized subagents for web search, document analysis, and synthesis.",
    stem:
      "A tool call fails because the requesting agent lacks permission to access a particular internal data source. How should this be categorized and communicated, compared to a network timeout?",
    options: [
      { id: "A", text: "There is no need to distinguish error categories in MCP tool responses." },
      { id: "B", text: "Identically to a network timeout, since all tool failures should always be retried the same number of times regardless of cause." },
      { id: "C", text: "As a permission error, which is generally not retryable with the same credentials — distinct from a network timeout, which is transient and reasonably retryable — so the response should include a retryable: false signal and a clear explanation rather than being treated the same as the timeout." },
      { id: "D", text: "As a validation error, since permission issues and input validation issues are functionally identical." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A permission error and a network timeout call for genuinely different recovery behavior — retrying with the same credentials won't fix a permission issue, so marking it non-retryable is appropriate, unlike treating every failure the same (B). Permission and validation errors are distinct categories, not interchangeable (D wrong), and distinguishing error categories is exactly the point of structured error responses (A wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.2 — structured error responses for MCP tools",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-009",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.2",
    type: "scenario-multi-response",
    stem:
      "Which two practices reflect well-designed structured error handling for MCP tools? (Select 2)",
    options: [
      { id: "A", text: "Always propagating every single error immediately to the top-level coordinator with no attempt at local recovery, regardless of how minor or transient it is." },
      { id: "B", text: "Implementing local error recovery within a subagent for transient failures, only propagating to the coordinator errors it cannot resolve itself, along with partial results and context." },
      { id: "C", text: "Returning the exact same generic error string for every possible failure mode to keep responses simple." },
      { id: "D", text: "Including an errorCategory (e.g., transient, validation, permission) and an isRetryable boolean in error responses." },
    ],
    correctOptionIds: ["B","D"],
    selectCount: 2,
    explanation:
      "Structured categorization (D) and local recovery with escalation only when needed (B) both enable intelligent, differentiated handling. A single generic error string for everything (C) hides the information needed for good decisions, and reflexively propagating every error with no local recovery attempt (A) creates unnecessary coordinator overhead and noise.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.2 — structured error responses for MCP tools",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-010",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.3",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "An agent is configured with 18 different tools spanning file operations, web search, database queries, and deployment actions, even though most tasks it handles only ever need 4-5 of them. What is the likely consequence?",
    options: [
      { id: "A", text: "The larger tool set increases decision complexity for the model, which can degrade tool-selection reliability compared to a more narrowly scoped set matched to the agent's actual role." },
      { id: "B", text: "Extra tools are automatically ignored by the model with zero effect on behavior or reliability." },
      { id: "C", text: "This configuration only matters if all 18 tools happen to have identical names." },
      { id: "D", text: "There is no consequence; giving an agent as many tools as possible always improves its performance with no downside." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A broad, unscoped tool set increases decision complexity and is specifically called out as degrading selection reliability compared to a tighter, role-appropriate set — more tools isn't strictly better (D wrong), unused tools aren't simply inert (B wrong), and this issue isn't limited to a name-collision scenario (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.3 — distributing tools and configuring tool choice",
    difficulty: "easy",
  },
  {
    id: "arch-f-tdmi-011",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.3",
    type: "mcq",
    scenarioContext:
      "You are building a multi-agent research system with a coordinator agent that delegates to specialized subagents for web search, document analysis, and synthesis.",
    stem:
      "The synthesis subagent is given full access to the web-search subagent's tools 'just in case it needs to look something up.' What risk does this design choice introduce?",
    options: [
      { id: "A", text: "This design is required, since subagents cannot function without access to every other subagent's tools." },
      { id: "B", text: "There is no risk; giving every subagent every tool is always the safest and most effective configuration." },
      { id: "C", text: "This risk only applies if the synthesis subagent has more than 50 tools available." },
      { id: "D", text: "Giving a subagent tools outside its specialization increases the risk that it misuses them (e.g., the synthesis agent attempting ad hoc web searches instead of focusing on its actual synthesis role), undermining the benefit of specialized subagents." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Giving a subagent tools outside its specialization is specifically flagged as a misuse risk that undermines the point of having specialized roles — over-provisioning isn't the safest default (B wrong), subagents don't require every other subagent's tools to function (A wrong), and this concern isn't gated by a specific tool count (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.3 — distributing tools and configuring tool choice",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-012",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.3",
    type: "mcq",
    scenarioContext:
      "You are building a multi-agent research system with a coordinator agent that delegates to specialized subagents for web search, document analysis, and synthesis.",
    stem:
      "85% of the synthesis subagent's verification needs are simple fact-checks. The team wants to reduce round trips through the coordinator for these common cases, without granting the synthesis subagent unrestricted web-search access. What is the most balanced solution?",
    options: [
      { id: "A", text: "Route 100% of verification needs through the coordinator regardless of how simple or common they are, accepting the full round-trip cost every time." },
      { id: "B", text: "Give the synthesis subagent a narrowly scoped verify_fact tool for the common, simple case, while routing genuinely complex verification through the coordinator to the full web-search subagent as before." },
      { id: "C", text: "Give the synthesis subagent the exact same full web-search toolset as the dedicated search subagent, with no scoping distinction." },
      { id: "D", text: "Remove the synthesis subagent's ability to verify facts at all." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A narrow, purpose-specific tool for the common case balances reduced overhead against the least-privilege principle, preserving the coordinator route for the harder 15% — full unrestricted access (C) over-provisions, accepting the full round-trip cost for the common case (A) doesn't address the described inefficiency, and removing verification capability entirely (D) doesn't serve the underlying need.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.3 — distributing tools and configuring tool choice",
    difficulty: "hard",
  },
  {
    id: "arch-f-tdmi-013",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.3",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A developer wants to guarantee that a metadata-extraction tool always runs first in a document-processing pipeline, before any enrichment tools are considered, rather than leaving the order to the model's judgment. What tool_choice configuration achieves this for that specific step?",
    options: [
      { id: "A", text: "tool_choice has no mechanism for forcing a specific tool to run first." },
      { id: "B", text: "Removing all other tools permanently is the only way to guarantee this ordering." },
      { id: "C", text: "A forced, named tool_choice specifying the metadata-extraction tool for that step, then processing subsequent enrichment steps in follow-up turns." },
      { id: "D", text: "tool_choice: 'auto', which leaves both whether to call a tool and which one entirely up to the model's judgment." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A forced, named tool_choice is exactly the mechanism for guaranteeing a specific tool runs at a given step — 'auto' (D) leaves this to the model's judgment, which doesn't guarantee the ordering, this forcing mechanism does exist (A wrong), and permanently removing other tools (B) is a far more drastic and unnecessary approach than using tool_choice for one step.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.3 — distributing tools and configuring tool choice",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-014",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.4",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A team wants an MCP server configuration to be shared with the whole team via version control, with the authentication token supplied securely rather than committed as plain text. What configuration pattern achieves this?",
    options: [
      { id: "A", text: "A project-scoped .mcp.json file using environment variable expansion (e.g., ${GITHUB_TOKEN}) for the token, so the config itself can be safely committed while the actual secret is supplied at runtime." },
      { id: "B", text: "Committing the literal token value directly into a project-scoped .mcp.json file for simplicity." },
      { id: "C", text: "A user-scoped ~/.claude.json file, which stays personal to one user and isn't shared with the team via version control." },
      { id: "D", text: "There is no way to share MCP server configuration via version control without exposing secrets." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Project-scoped .mcp.json with environment variable expansion is exactly the pattern for team-shared, version-controlled config with secure credential handling — a user-scoped file (C) wouldn't be shared with the team as required, committing a literal secret (B) is the risky practice being avoided, and this pattern does exist and solve the stated need (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.4 — integrating MCP servers into Claude Code and agent workflows",
    difficulty: "easy",
  },
  {
    id: "arch-f-tdmi-015",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.4",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A developer notices that Claude Code prefers using the built-in Grep tool over a more capable, purpose-built MCP tool for searching a specialized data source, even though the MCP tool would return more relevant, structured results. What is a likely cause and fix?",
    options: [
      { id: "A", text: "MCP tools can never be selected over built-in tools under any circumstances." },
      { id: "B", text: "Built-in tools always take absolute priority over MCP tools with no way to change this behavior." },
      { id: "C", text: "This preference is random and cannot be influenced by any configuration or description change." },
      { id: "D", text: "The MCP tool's description may not clearly convey its capabilities and advantages over the more familiar built-in tool; enhancing the description to explain what it offers can shift selection toward it when appropriate." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Enhancing an MCP tool's description to clearly convey its capabilities is exactly the fix for this pattern — built-in tools don't have an absolute, unchangeable priority over MCP tools (B, A both wrong), and tool selection is description-driven, not random (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.4 — integrating MCP servers into Claude Code and agent workflows",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-016",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.4",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A team needs to integrate with a widely-used, standard project management tool. Before building a custom MCP server, what should the team check first?",
    options: [
      { id: "A", text: "Whether the tool has ever been mentioned in the Claude Agent SDK documentation, as the sole criterion for whether integration is possible." },
      { id: "B", text: "Whether an existing, well-maintained community MCP server already provides this integration, reserving custom server development for genuinely team-specific workflows not covered by existing options." },
      { id: "C", text: "MCP cannot be used to integrate with any third-party project management tool." },
      { id: "D", text: "Nothing; building a custom MCP server from scratch is always required regardless of what already exists." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Checking for an existing, maintained community server before building custom is the recommended approach for standard integrations — building custom is not always required (D wrong), documentation mentions aren't the deciding factor for feasibility (A wrong), and MCP integration with popular third-party tools is well supported (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.4 — integrating MCP servers into Claude Code and agent workflows",
    difficulty: "easy",
  },
  {
    id: "arch-f-tdmi-017",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.4",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A developer wants an agent exploring an unfamiliar internal documentation system to have visibility into what documentation exists without needing to make many exploratory tool calls just to discover the available pages. What MCP feature is designed for this?",
    options: [
      { id: "A", text: "MCP tools are the only mechanism MCP provides, with no way to expose a browsable catalog of content." },
      { id: "B", text: "The agent must always discover available documentation purely through repeated trial-and-error tool calls." },
      { id: "C", text: "MCP resources, which can expose a content catalog (e.g., a documentation hierarchy) so the agent has visibility into what's available without exploratory tool calls." },
      { id: "D", text: "This kind of upfront visibility is not achievable through MCP in any form." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "MCP resources are specifically designed to expose catalogs like a documentation hierarchy, reducing the need for exploratory calls — MCP does provide this beyond just tools (A wrong), this capability exists and addresses the described need (D wrong), and the resource mechanism is exactly the alternative to pure trial-and-error discovery (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.4 — integrating MCP servers into Claude Code and agent workflows",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-018",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.4",
    type: "scenario-multi-response",
    stem:
      "Which two statements about MCP server scoping are accurate? (Select 2)",
    options: [
      { id: "A", text: "Project-level and user-level MCP configurations are functionally identical with no difference in intended use." },
      { id: "B", text: "Project-level (.mcp.json) configuration is intended for shared team tooling and is typically checked into version control." },
      { id: "C", text: "User-level (~/.claude.json) configuration is suited to personal or experimental servers that shouldn't be forced on the whole team." },
      { id: "D", text: "Tools from all configured MCP servers are only available one at a time, never simultaneously." },
    ],
    correctOptionIds: ["B","C"],
    selectCount: 2,
    explanation:
      "Project-level for shared team tooling (B) and user-level for personal/experimental use (C) accurately describe the intended distinction between these scopes. Tools from all configured servers are discovered and available simultaneously once connected, not one at a time (D wrong), and the two scopes serve different intended purposes, not identical ones (A wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.4 — integrating MCP servers into Claude Code and agent workflows",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-019",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.5",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A developer needs to find every place in a large codebase where a specific function is called. Which built-in tool is best suited to this?",
    options: [
      { id: "A", text: "Grep — searching file contents for the function name across the codebase, rather than relying on file naming patterns." },
      { id: "B", text: "Bash, since shell access is always required for any code search regardless of what other tools exist." },
      { id: "C", text: "Glob, which matches file paths/names by pattern rather than searching the content inside files." },
      { id: "D", text: "Write, which is for creating or overwriting file content rather than searching." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Finding all call sites of a function requires searching file contents, which is exactly what Grep is for — Glob (C) matches file names/paths, not content, Write (D) is for creating/modifying files rather than searching, and reaching for Bash by default (B) skips the more direct, purpose-built tool for this specific need.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.5 — built-in tool selection",
    difficulty: "easy",
  },
  {
    id: "arch-f-tdmi-020",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.5",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A developer needs to find every test file in a repository, identified by a *.test.tsx naming pattern regardless of which directory they're in. Which built-in tool fits this need?",
    options: [
      { id: "A", text: "Grep, since finding files by naming pattern requires searching file contents rather than matching paths." },
      { id: "B", text: "Read, which opens the contents of a single already-known file rather than discovering files matching a pattern." },
      { id: "C", text: "There is no built-in tool suited to finding files by naming pattern." },
      { id: "D", text: "Glob, using a pattern like **/*.test.tsx to match files by name across the whole directory tree." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Glob is specifically for matching file paths/names by pattern, which is exactly this need — Grep (A) searches file contents, not names, Read (B) opens one known file rather than discovering matches, and Glob does exist and fit this exact use case (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.5 — built-in tool selection",
    difficulty: "easy",
  },
  {
    id: "arch-f-tdmi-021",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.5",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A developer attempts to use Edit to make a targeted change to a file, but the anchor text they're trying to match appears in multiple places in the file, causing the Edit to fail or behave ambiguously. What is the recommended fallback?",
    options: [
      { id: "A", text: "Repeatedly retry the exact same Edit call with no changes, since it will eventually succeed." },
      { id: "B", text: "Use Read to load the full file contents, then use Write to save the modified version, since Read+Write provides a reliable fallback when Edit's unique-text-matching requirement can't be satisfied." },
      { id: "C", text: "Give up on modifying the file at all, since Edit failing means no other approach is available." },
      { id: "D", text: "Use Glob to modify the file's content directly." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Read followed by Write is exactly the documented fallback for when Edit's unique-match requirement isn't satisfiable — abandoning the edit entirely (C) isn't necessary given this fallback, repeating an identical failing call (A) won't change the outcome, and Glob (D) matches file paths and isn't a mechanism for modifying content.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.5 — built-in tool selection",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-022",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.5",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A developer exploring an unfamiliar, large codebase reads every single file in the repository upfront before attempting any task, reasoning that more context is always better. What is the concern with this approach compared to incremental exploration?",
    options: [
      { id: "A", text: "Reading files upfront is impossible for any codebase larger than 10 files." },
      { id: "B", text: "Incremental exploration using Grep first is never a valid approach compared to reading everything." },
      { id: "C", text: "Reading every file upfront burns context on mostly-irrelevant material before knowing what's actually needed; incremental exploration — starting with Grep to find entry points, then Read to follow imports and trace flows — is generally more effective." },
      { id: "D", text: "There is no concern; reading every file in a codebase upfront is always the most effective exploration strategy regardless of codebase size." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Reading everything upfront wastes context on material that turns out to be irrelevant, whereas building understanding incrementally (Grep to find entry points, then targeted Read calls) is the recommended, more effective pattern — reading everything isn't optimal regardless of size (D wrong), this isn't a hard technical limit at a specific file count (A wrong), and incremental exploration is the generally preferred approach, not an invalid one (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.5 — built-in tool selection",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-023",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.5",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A developer needs to trace every place a function is used across a codebase, including calls that go through several wrapper modules that re-export it under different names. What is the recommended approach?",
    options: [
      { id: "A", text: "First identify all the exported names the function is re-exported under (tracing through the wrapper modules), then search for each of those names across the codebase, rather than searching for only the original name." },
      { id: "B", text: "Use Write to rename every occurrence blindly, without first identifying all the relevant names." },
      { id: "C", text: "Skip tracing entirely, since wrapper modules can never be traced with built-in tools." },
      { id: "D", text: "Search for only the function's original name and assume this captures every usage, including through wrappers." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Identifying all the re-exported names first, then searching for each, is the recommended approach for tracing usage through wrapper modules — searching only the original name (D) would miss usages through re-exports, wrapper modules can absolutely be traced with built-in tools (C wrong), and blindly renaming without first identifying the full set of relevant names (B) risks incomplete or incorrect changes.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.5 — built-in tool selection",
    difficulty: "hard",
  },
  {
    id: "arch-f-tdmi-024",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.1",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A tool named 'process_data' accepts a generic 'input' parameter with no further description of expected format, valid ranges, or examples. What is the primary risk of this design?",
    options: [
      { id: "A", text: "There is no risk; generic, undocumented parameters are always interpreted correctly regardless of description detail." },
      { id: "B", text: "This risk only applies to tools with more than one parameter." },
      { id: "C", text: "Input parameter documentation has no bearing on how reliably a tool is called." },
      { id: "D", text: "Without input-format guidance, the model may supply data in an unexpected shape or fail to understand what the tool actually expects, increasing the chance of malformed calls." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A vague, undocumented input parameter gives the model little to work with in constructing a correct call, increasing the risk of malformed input — this isn't reliably interpreted correctly regardless of documentation (A wrong), the risk applies even to single-parameter tools (B wrong), and parameter documentation quality does meaningfully affect call reliability (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.1 — tool interface design",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-025",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.2",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A build-automation tool fails because required environment configuration is missing. What is the more useful error response: a generic 'Build failed' message, or a structured error stating the specific missing configuration variable and that this is a non-retryable validation error until fixed?",
    options: [
      { id: "A", text: "The generic message, since specificity in error messages is never useful to an agent." },
      { id: "B", text: "The structured error, since it tells the calling agent exactly what's wrong and that retrying without a fix won't help, enabling a targeted correction rather than blind retries." },
      { id: "C", text: "Neither is useful, since build failures can never be communicated in a way that helps an agent respond appropriately." },
      { id: "D", text: "Both are equally useful, since agents ignore all error message content regardless of detail." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A specific, structured error pinpointing the missing configuration and marking it non-retryable gives the agent exactly what it needs to correct course — generic messages are less useful, not equally or more useful (A, D both wrong), and this kind of failure is very much communicable in an actionable way (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.2 — structured error responses for MCP tools",
    difficulty: "easy",
  },
  {
    id: "arch-f-tdmi-026",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.3",
    type: "mcq",
    scenarioContext:
      "You are building a multi-agent research system with a coordinator agent that delegates to specialized subagents for web search, document analysis, and synthesis.",
    stem:
      "A coordinator's tool_choice is set to 'any' for a step where it must decide between three different valid next actions based on nuanced context. Is this the right configuration for this step?",
    options: [
      { id: "A", text: "No; a forced, specifically-named tool_choice should always be used instead, removing the model's ability to choose among the three options." },
      { id: "B", text: "tool_choice configuration is irrelevant whenever more than one valid tool exists for a step." },
      { id: "C", text: "Yes — 'any' is appropriate here because it guarantees a tool call happens (rather than a conversational non-answer) while still letting the model use its judgment to choose which of the three valid options fits the nuanced context." },
      { id: "D", text: "No; 'auto' should always be used instead, since 'any' can never be an appropriate configuration in any situation." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "'any' fits exactly this situation — guaranteeing some tool call happens while preserving the model's judgment among genuinely valid options — a forced single choice (A) would remove that needed judgment, 'any' is a legitimate and sometimes preferable configuration (D wrong), and tool_choice configuration remains a meaningful decision even with multiple valid tools (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.3 — distributing tools and configuring tool choice",
    difficulty: "medium",
  },
  {
    id: "arch-f-tdmi-027",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.4",
    type: "mcq",
    scenarioContext:
      "You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, generate boilerplate, and automate repetitive tasks, using built-in tools (Read, Write, Bash, Grep, Glob) and MCP servers.",
    stem:
      "A developer wants to experiment with a new, unofficial MCP server before deciding whether to roll it out to the rest of the team. Where should this experimental server be configured to avoid affecting teammates?",
    options: [
      { id: "A", text: "In the user-scoped ~/.claude.json, which keeps the experimental server personal and doesn't distribute it to the team via shared, version-controlled configuration." },
      { id: "B", text: "MCP servers must always be configured identically for every team member with no personal-scope option." },
      { id: "C", text: "In the project-scoped .mcp.json, which would immediately make the experimental server available to the whole team through version control." },
      { id: "D", text: "There is no way to configure an MCP server for personal experimentation only." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "User-scoped configuration is exactly what keeps an experimental server personal, unlike project-scoped configuration (C), which would distribute it to the whole team — personal-scope experimentation is well-supported (D, B both wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.4 — integrating MCP servers into Claude Code and agent workflows",
    difficulty: "easy",
  },
  {
    id: "arch-f-tdmi-028",
    certificationSlug: "architect-foundations",
    domain: "Tool Design & MCP Integration",
    taskStatement: "2.5",
    type: "scenario-multi-response",
    stem:
      "Which two statements accurately describe appropriate built-in tool selection? (Select 2)",
    options: [
      { id: "A", text: "Read and Write should always be used instead of Edit for every file modification, regardless of how targeted the change is." },
      { id: "B", text: "Bash is the only tool capable of reading any file's contents under any circumstances." },
      { id: "C", text: "Grep is well suited to searching file contents for patterns like function names or error messages." },
      { id: "D", text: "Glob is well suited to finding files by name or extension pattern across a directory tree." },
    ],
    correctOptionIds: ["C","D"],
    selectCount: 2,
    explanation:
      "Grep for content search (C) and Glob for path/name pattern matching (D) are both accurate descriptions of these tools' intended use. Preferring Read+Write over Edit for every change regardless of how targeted it is (A) ignores Edit's purpose for precise, unique-text-anchored modifications, and Read is very much capable of reading file contents, not just Bash (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 2, Task Statement 2.5 — built-in tool selection",
    difficulty: "easy",
  },
];
