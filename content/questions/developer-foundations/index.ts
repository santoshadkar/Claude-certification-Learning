import type { QuestionInput } from "../../schema/question";
import { questions as agentsAndWorkflows } from "./agents-and-workflows";
import { questions as applicationsAndIntegration } from "./applications-and-integration";
import { questions as claudeCode } from "./claude-code";
import { questions as evalTestingAndDebugging } from "./eval-testing-and-debugging";
import { questions as modelSelectionAndOptimization } from "./model-selection-and-optimization";
import { questions as promptAndContextEngineering } from "./prompt-and-context-engineering";
import { questions as securityAndSafety } from "./security-and-safety";
import { questions as toolsAndMcps } from "./tools-and-mcps";

export const questions: QuestionInput[] = [
  ...agentsAndWorkflows,
  ...applicationsAndIntegration,
  ...claudeCode,
  ...evalTestingAndDebugging,
  ...modelSelectionAndOptimization,
  ...promptAndContextEngineering,
  ...securityAndSafety,
  ...toolsAndMcps,
];
