import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "developer-foundations" as const;
const DOMAIN = "Prompt and Context Engineering" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Covers writing and maintaining prompts at a developer level of rigor — clarity, structure, and iteration — plus the context-management discipline that keeps longer or agentic sessions reliable, and how to actually consume the model's output safely.",
  concepts: [
    {
      taskStatement: "Context Engineering",
      summary:
        "As a session or agentic task runs long, context fills with accumulated tool outputs and conversation history — much of it no longer relevant to the current step. Techniques like pruning verbose tool output down to only the relevant fields, and compaction (summarizing older content) prevent 'context bloat and drift', where the model starts losing track of what actually matters. Context isolation — giving a subagent or a fresh multi-step stage only what it needs — is the structural version of the same idea.",
    },
    {
      taskStatement: "Prompt Engineering",
      summary:
        "Instruction clarity and few-shot examples are the highest-leverage tools for consistent output. System vs. user placement matters: stable role/policy instructions belong in the system prompt, while task-specific content belongs in the user turn. Output constraints (format, length, what to exclude) reduce variance. Prompt/instruction placement across components (CLAUDE.md vs. system prompt vs. inline) should match how persistent vs. task-specific the instruction is. Input sanitization matters when any part of the prompt includes untrusted user or tool content.",
    },
    {
      taskStatement: "Output Handling",
      summary:
        "Structured output patterns (tool_use with a JSON schema) are more reliable than asking for JSON in prose and hoping it parses. Defensive parsing means validating the shape of what came back before using it, not assuming success. Skepticism toward confident output means treating fluent, specific-sounding claims as needing verification, not as self-evidently correct — confidence in tone is not a correctness signal.",
    },
  ],
  resources: [RESOURCES.promptEngineering, RESOURCES.contextWindows, RESOURCES.toolUse],
};
