import type { QuestionInput } from "../schema/question";
import { questions as associateFoundations } from "./associate-foundations";
import { questions as developerFoundations } from "./developer-foundations";
import { questions as architectFoundations } from "./architect-foundations";
import { questions as architectProfessional } from "./architect-professional";

export const allQuestions: QuestionInput[] = [
  ...associateFoundations,
  ...developerFoundations,
  ...architectFoundations,
  ...architectProfessional,
];
