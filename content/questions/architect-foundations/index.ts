import type { QuestionInput } from "../../schema/question";
import { questions as agenticArchitectureAndOrchestration } from "./agentic-architecture-and-orchestration";
import { questions as toolDesignAndMcpIntegration } from "./tool-design-and-mcp-integration";
import { questions as claudeCodeConfigurationAndWorkflows } from "./claude-code-configuration-and-workflows";
import { questions as promptEngineeringAndStructuredOutput } from "./prompt-engineering-and-structured-output";
import { questions as contextManagementAndReliability } from "./context-management-and-reliability";

export const questions: QuestionInput[] = [
  ...agenticArchitectureAndOrchestration,
  ...toolDesignAndMcpIntegration,
  ...claudeCodeConfigurationAndWorkflows,
  ...promptEngineeringAndStructuredOutput,
  ...contextManagementAndReliability,
];
