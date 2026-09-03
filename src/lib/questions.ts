import { allQuestions } from "@content/questions";
import { questionSchema, type Question, type CertificationSlug } from "@content/schema/question";

/**
 * Fully parsed & refined question bank. Uses the strict Zod schema, so a
 * malformed question throws here rather than silently reaching the UI —
 * `npm run validate:content` is the place that should have already caught
 * that in review/CI.
 */
export const questions: Question[] = allQuestions.map((q) => questionSchema.parse(q));

export function getQuestionsForCert(cert: CertificationSlug): Question[] {
  return questions.filter((q) => q.certificationSlug === cert);
}

export function getQuestionsForDomain(cert: CertificationSlug, domain: string): Question[] {
  return questions.filter((q) => q.certificationSlug === cert && q.domain === domain);
}

export function getQuestionCountsByDomain(cert: CertificationSlug): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const q of getQuestionsForCert(cert)) {
    counts[q.domain] = (counts[q.domain] ?? 0) + 1;
  }
  return counts;
}
