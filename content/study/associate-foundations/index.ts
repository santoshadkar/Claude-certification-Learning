import type { StudyModuleInput } from "../../schema/study";
import { studyModule as promptingAndTaskExecution } from "./prompting-and-task-execution";
import { studyModule as outputEvaluationAndValidation } from "./output-evaluation-and-validation";
import { studyModule as productAndModelSelection } from "./product-and-model-selection";
import { studyModule as workflowIntegrationAndSolutionDesign } from "./workflow-integration-and-solution-design";
import { studyModule as configurationAndKnowledgeManagement } from "./configuration-and-knowledge-management";
import { studyModule as governanceRiskAndResponsibleUse } from "./governance-risk-and-responsible-use";
import { studyModule as troubleshootingAndOptimization } from "./troubleshooting-and-optimization";

export const studyModules: StudyModuleInput[] = [
  promptingAndTaskExecution,
  outputEvaluationAndValidation,
  productAndModelSelection,
  workflowIntegrationAndSolutionDesign,
  configurationAndKnowledgeManagement,
  governanceRiskAndResponsibleUse,
  troubleshootingAndOptimization,
];
