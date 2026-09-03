import type { QuestionInput } from "../../schema/question";
import { questions as promptingAndTaskExecution } from "./prompting-and-task-execution";
import { questions as outputEvaluationAndValidation } from "./output-evaluation-and-validation";
import { questions as productAndModelSelection } from "./product-and-model-selection";
import { questions as workflowIntegrationAndSolutionDesign } from "./workflow-integration-and-solution-design";
import { questions as configurationAndKnowledgeManagement } from "./configuration-and-knowledge-management";
import { questions as governanceRiskAndResponsibleUse } from "./governance-risk-and-responsible-use";
import { questions as troubleshootingAndOptimization } from "./troubleshooting-and-optimization";

export const questions: QuestionInput[] = [
  ...promptingAndTaskExecution,
  ...outputEvaluationAndValidation,
  ...productAndModelSelection,
  ...workflowIntegrationAndSolutionDesign,
  ...configurationAndKnowledgeManagement,
  ...governanceRiskAndResponsibleUse,
  ...troubleshootingAndOptimization,
];
