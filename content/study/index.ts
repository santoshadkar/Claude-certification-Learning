import type { StudyModuleInput } from "../schema/study";
import { studyModules as associateFoundations } from "./associate-foundations";
import { studyModules as developerFoundations } from "./developer-foundations";
import { studyModules as architectFoundations } from "./architect-foundations";
import { studyModules as architectProfessional } from "./architect-professional";

export const allStudyModules: StudyModuleInput[] = [
  ...associateFoundations,
  ...developerFoundations,
  ...architectFoundations,
  ...architectProfessional,
];
