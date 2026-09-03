import type { StudyModuleInput } from "../../schema/study";
import { studyModule as agenticArchitectureAndOrchestration } from "./agentic-architecture-and-orchestration";
import { studyModule as toolDesignAndMcpIntegration } from "./tool-design-and-mcp-integration";
import { studyModule as claudeCodeConfigurationAndWorkflows } from "./claude-code-configuration-and-workflows";
import { studyModule as promptEngineeringAndStructuredOutput } from "./prompt-engineering-and-structured-output";
import { studyModule as contextManagementAndReliability } from "./context-management-and-reliability";

export const studyModules: StudyModuleInput[] = [
  agenticArchitectureAndOrchestration,
  toolDesignAndMcpIntegration,
  claudeCodeConfigurationAndWorkflows,
  promptEngineeringAndStructuredOutput,
  contextManagementAndReliability,
];
