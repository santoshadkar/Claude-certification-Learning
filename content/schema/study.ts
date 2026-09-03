import { z } from "zod";
import { CERTIFICATION_SLUGS } from "./question";

export const resourceSchema = z.object({
  title: z.string().min(1),
  url: z.string().url(),
  description: z.string().min(1),
});
export type Resource = z.infer<typeof resourceSchema>;

/**
 * A concept teaches one task-statement/objective/skill from the domain.
 * `taskStatement` must match a key from that domain's
 * content/source/<certificationSlug>/exam-guide.json — same cross-ref rule
 * as question.ts, enforced in scripts/validate-content.ts.
 */
export const conceptSchema = z.object({
  taskStatement: z.string().min(1),
  summary: z.string().min(60, "summary should actually teach the concept, not just restate the bullet"),
});
export type Concept = z.infer<typeof conceptSchema>;

export const studyModuleSchema = z.object({
  certificationSlug: z.enum(CERTIFICATION_SLUGS),
  domain: z.string().min(1),
  overview: z.string().min(40),
  concepts: z.array(conceptSchema).min(1),
  resources: z.array(resourceSchema).min(1),
});

export type StudyModule = z.infer<typeof studyModuleSchema>;
export type StudyModuleInput = z.input<typeof studyModuleSchema>;
