import type { QuestionInput } from "../../schema/question";
import { questions as solutionDesignAndArchitecture } from "./solution-design-and-architecture";
import { questions as claudeModelsPromptingAndContextEngineering } from "./claude-models-prompting-and-context-engineering";
import { questions as integration } from "./integration";
import { questions as evaluationTestingAndOptimization } from "./evaluation-testing-and-optimization";
import { questions as governanceSafetyAndRiskManagement } from "./governance-safety-and-risk-management";
import { questions as stakeholderCommunicationAndLifecycleManagement } from "./stakeholder-communication-and-lifecycle-management";
import { questions as developerProductivityAndOperationalEnablement } from "./developer-productivity-and-operational-enablement";

export const questions: QuestionInput[] = [
  ...solutionDesignAndArchitecture,
  ...claudeModelsPromptingAndContextEngineering,
  ...integration,
  ...evaluationTestingAndOptimization,
  ...governanceSafetyAndRiskManagement,
  ...stakeholderCommunicationAndLifecycleManagement,
  ...developerProductivityAndOperationalEnablement,
];
