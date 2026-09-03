import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "developer-foundations" as const;
const DOMAIN = "Tools and MCPs" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Covers building the tools an agent calls — both ad hoc custom tools and reusable MCP servers — and choosing the right customization mechanism (built-in tool, custom tool, Skill, or MCP) for a given need.",
  concepts: [
    {
      taskStatement: "Tool Implementation",
      summary:
        "Tool use (function calling) works because Claude reads the tool's name, description, and input schema to decide when and how to call it — a vague description causes unreliable selection between similar tools. Configuration for external system interaction means defining clear input/output contracts; error handling means returning structured, actionable errors, not generic failure strings. Usage patterns to know: agentic-harness dispatch (the harness executes the call), client-side vs. server-side tools (who runs the code), and approval patterns (a human or policy check gates sensitive calls).",
    },
    {
      taskStatement: "MCP Server Development",
      summary:
        "An MCP server exposes tools, resources, and prompts over a standard protocol so multiple Claude applications can share one integration instead of each hard-coding it. Communication patterns include stdio (local process) and sockets/HTTP (remote); the client-vs-server distinction is about who's initiating vs. serving the connection. Building a server is worth it when the integration needs to be reused or maintained independently of any single app; otherwise a simpler custom tool may suffice.",
    },
    {
      taskStatement: "Agentic Customization",
      summary:
        "Built-in tools require no setup but are generic. Custom tools fit app-specific logic but must be built and maintained per app. Skills package a repeatable workflow/procedure that loads on demand. MCP servers expose reusable, shareable capability across multiple applications and clients. Choosing between them is a tradeoff between setup effort, reusability, and how tightly the capability is coupled to one application.",
    },
  ],
  resources: [RESOURCES.toolUse, RESOURCES.mcpSpec, RESOURCES.mcpInClaudeCode, RESOURCES.skills],
};
