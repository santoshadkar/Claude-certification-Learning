import type { StudyModuleInput } from "../../schema/study";
import { studyModule as solutionDesignAndArchitecture } from "./solution-design-and-architecture";
import { studyModule as claudeModelsPromptingAndContextEngineering } from "./claude-models-prompting-and-context-engineering";
import { studyModule as integration } from "./integration";
import { studyModule as evaluationTestingAndOptimization } from "./evaluation-testing-and-optimization";
import { studyModule as governanceSafetyAndRiskManagement } from "./governance-safety-and-risk-management";
import { studyModule as stakeholderCommunicationAndLifecycleManagement } from "./stakeholder-communication-and-lifecycle-management";
import { studyModule as developerProductivityAndOperationalEnablement } from "./developer-productivity-and-operational-enablement";

export const studyModules: StudyModuleInput[] = [
  solutionDesignAndArchitecture,
  claudeModelsPromptingAndContextEngineering,
  integration,
  evaluationTestingAndOptimization,
  governanceSafetyAndRiskManagement,
  stakeholderCommunicationAndLifecycleManagement,
  developerProductivityAndOperationalEnablement,
];
