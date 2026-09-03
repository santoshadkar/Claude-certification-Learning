import type { Resource } from "../schema/study";

/**
 * Every URL here was fetched and confirmed live while building this content
 * (not guessed). Domain study modules reference these by key so a broken
 * link only needs fixing in one place.
 */
export const RESOURCES = {
  helpCenter: {
    title: "Claude Help Center",
    url: "https://support.claude.com/",
    description: "Official help articles for claude.ai features: Projects, Artifacts, Skills, connectors, and Claude Cowork.",
  },
  promptEngineering: {
    title: "Prompt engineering overview",
    url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",
    description: "Anthropic's guide to when and how to prompt engineer, with links to prompting best practices and interactive tutorials.",
  },
  toolUse: {
    title: "Tool use with Claude",
    url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview",
    description: "How Claude calls tools/functions you define, client vs. server tools, and the tool_use/tool_result loop.",
  },
  claudeCodeOverview: {
    title: "Claude Code overview",
    url: "https://code.claude.com/docs/en/overview",
    description: "What Claude Code is, how to install it, and the surfaces it runs on (terminal, IDE, desktop, web).",
  },
  modelsOverview: {
    title: "Models overview",
    url: "https://platform.claude.com/docs/en/models/overview",
    description: "Current Claude model lineup, capabilities, context windows, and how to choose between them.",
  },
  mcpSpec: {
    title: "Model Context Protocol",
    url: "https://modelcontextprotocol.io/",
    description: "The open specification for connecting AI applications to external tools, data, and resources.",
  },
  mcpInClaudeCode: {
    title: "Connect Claude Code to tools via MCP",
    url: "https://code.claude.com/docs/en/mcp",
    description: "Adding, scoping, and authenticating MCP servers (stdio, HTTP, SSE) inside Claude Code.",
  },
  claudeMdAndMemory: {
    title: "How Claude remembers your project",
    url: "https://code.claude.com/docs/en/memory",
    description: "CLAUDE.md hierarchy and scoping, @import syntax, .claude/rules/, and Claude Code's auto memory system.",
  },
  hooks: {
    title: "Hooks reference",
    url: "https://code.claude.com/docs/en/hooks",
    description: "Lifecycle events (PreToolUse, PostToolUse, etc.), handler types, and how hooks enforce deterministic rules.",
  },
  skills: {
    title: "Extend Claude with skills",
    url: "https://code.claude.com/docs/en/skills",
    description: "Creating SKILL.md files, frontmatter options like allowed-tools and context: fork, and skill vs. CLAUDE.md tradeoffs.",
  },
  subagents: {
    title: "Create custom subagents",
    url: "https://code.claude.com/docs/en/sub-agents",
    description: "Defining subagents, tool restrictions, isolated context, and delegation patterns in Claude Code.",
  },
  agentSdkOverview: {
    title: "Agent SDK overview",
    url: "https://code.claude.com/docs/en/agent-sdk/overview",
    description: "Building custom agents in Python/TypeScript with the same agent loop and tools that power Claude Code.",
  },
  batchProcessing: {
    title: "Batch processing (Message Batches API)",
    url: "https://platform.claude.com/docs/en/build-with-claude/batch-processing",
    description: "Asynchronous, 50%-cheaper processing for latency-tolerant, high-volume workloads.",
  },
  promptCaching: {
    title: "Prompt caching",
    url: "https://platform.claude.com/docs/en/build-with-claude/prompt-caching",
    description: "Caching stable prompt prefixes to cut latency and cost on repeated requests.",
  },
  contextWindows: {
    title: "Context windows",
    url: "https://platform.claude.com/docs/en/build-with-claude/context-windows",
    description: "How the context window fills up, context rot, and strategies (compaction, context editing) for long conversations.",
  },
  buildEvals: {
    title: "Building evaluations",
    url: "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests",
    description: "Designing task-specific eval datasets and choosing exact-match, similarity, or LLM-graded scoring.",
  },
  certificationHub: {
    title: "Anthropic Partner Certifications hub",
    url: "https://anthropic-partners.skilljar.com/page/partner-certifications",
    description: "Official registration, prep courses, and exam guide downloads for all four Claude certifications.",
  },
} as const satisfies Record<string, Resource>;
