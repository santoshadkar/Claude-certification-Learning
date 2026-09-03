import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "architect-foundations" as const;
const DOMAIN = "Tool Design & MCP Integration" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Tests the craft of making tools something an LLM can reliably choose and use correctly — descriptions, error shapes, tool budgets per agent, MCP wiring, and knowing when a built-in tool already does the job.",
  concepts: [
    {
      taskStatement: "2.1",
      summary:
        "A tool's description is the primary signal the model uses to decide when to call it — minimal descriptions ('Retrieves customer information') cause unreliable selection between similar tools. Good descriptions state input formats, example queries, edge cases, and explicit boundaries versus similar tools. When two tools genuinely overlap (analyze_content vs. analyze_document), the fix is renaming/clarifying them or splitting a generic tool into purpose-specific ones with defined contracts — and checking the system prompt for keyword-sensitive wording that might override otherwise-good descriptions.",
    },
    {
      taskStatement: "2.2",
      summary:
        "MCP's isError flag communicates tool failure back to the agent, but a generic 'operation failed' string still hides the information the agent needs to recover well. Distinguish transient errors (retry-worthy), validation errors (bad input), business errors (policy violation — often non-retryable), and permission errors, and return structured metadata (errorCategory, isRetryable, a human-readable description) so the agent can choose the right recovery instead of guessing. Also distinguish an access failure (needs a retry decision) from a valid empty result (a successful query that legitimately found nothing).",
    },
    {
      taskStatement: "2.3",
      summary:
        "Giving one agent too many tools (18 instead of 4-5) measurably degrades tool-selection reliability, and agents given tools outside their specialization tend to misuse them. Scope each agent/subagent to the tools its role actually needs, with a few narrow cross-role tools for genuinely high-frequency shared needs. tool_choice controls how strictly a call is required: 'auto' lets the model decide, 'any' forces some tool call, and a forced/named choice guarantees a specific tool runs first.",
    },
    {
      taskStatement: "2.4",
      summary:
        "MCP servers are scoped project-level (.mcp.json, shared with the team via version control, supporting ${ENV_VAR} expansion so secrets aren't committed) or user-level (~/.claude.json, personal/experimental) — both are available simultaneously once connected. MCP resources expose content catalogs (docs, schemas, issue summaries) so an agent has visibility without needing exploratory tool calls first. Prefer an existing community MCP server for standard integrations (e.g., Jira) over building your own; reserve custom servers for genuinely team-specific workflows, and write thorough tool descriptions so the agent doesn't default to a familiar built-in tool over a more capable MCP one.",
    },
    {
      taskStatement: "2.5",
      summary:
        "Grep searches file content (function names, error strings, imports); Glob matches file paths/names by pattern. Read/Write handle whole files; Edit makes targeted changes via unique text matching, and falls back to Read+Write when a match isn't unique. Build codebase understanding incrementally — Grep to find entry points, then Read to trace imports — rather than reading everything upfront, which burns context for no benefit.",
    },
  ],
  resources: [RESOURCES.mcpInClaudeCode, RESOURCES.mcpSpec, RESOURCES.toolUse],
};
