import type { StudyModuleInput } from "../../schema/study";
import { studyModule as agentsAndWorkflows } from "./agents-and-workflows";
import { studyModule as applicationsAndIntegration } from "./applications-and-integration";
import { studyModule as claudeCode } from "./claude-code";
import { studyModule as evalTestingAndDebugging } from "./eval-testing-and-debugging";
import { studyModule as modelSelectionAndOptimization } from "./model-selection-and-optimization";
import { studyModule as promptAndContextEngineering } from "./prompt-and-context-engineering";
import { studyModule as securityAndSafety } from "./security-and-safety";
import { studyModule as toolsAndMcps } from "./tools-and-mcps";

export const studyModules: StudyModuleInput[] = [
  agentsAndWorkflows,
  applicationsAndIntegration,
  claudeCode,
  evalTestingAndDebugging,
  modelSelectionAndOptimization,
  promptAndContextEngineering,
  securityAndSafety,
  toolsAndMcps,
];
