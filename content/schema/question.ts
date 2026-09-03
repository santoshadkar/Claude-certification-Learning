import { z } from "zod";

export const CERTIFICATION_SLUGS = [
  "associate-foundations",
  "developer-foundations",
  "architect-foundations",
  "architect-professional",
] as const;

export type CertificationSlug = (typeof CERTIFICATION_SLUGS)[number];

export const QUESTION_TYPES = ["mcq", "scenario-multi-response"] as const;
export type QuestionType = (typeof QUESTION_TYPES)[number];

export const DIFFICULTIES = ["easy", "medium", "hard"] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];

export const optionSchema = z.object({
  id: z
    .string()
    .regex(/^[A-F]$/, "Option id must be a single uppercase letter A-F"),
  text: z.string().min(1, "Option text cannot be empty"),
});

export type Option = z.infer<typeof optionSchema>;

/**
 * A single practice/exam question. `domain` and `taskStatement` must match a
 * domain name / task-statement key from the corresponding
 * content/source/<certificationSlug>/exam-guide.json — enforced by
 * scripts/validate-content.ts, not by this schema alone.
 */
export const questionSchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-z0-9-]+$/, "id must be lowercase kebab-case (e.g. assoc-grr-001)"),
    certificationSlug: z.enum(CERTIFICATION_SLUGS),
    domain: z.string().min(1, "domain is required"),
    taskStatement: z
      .string()
      .min(1, "taskStatement is required and must reference a Phase 1 objective/task-statement key"),
    type: z.enum(QUESTION_TYPES),
    scenarioContext: z.string().min(1).optional(),
    stem: z
      .string()
      .min(20, "stem should be a full question/prompt, not a fragment"),
    options: z.array(optionSchema).min(3).max(6),
    correctOptionIds: z.array(z.string()).min(1),
    selectCount: z.number().int().min(1),
    explanation: z
      .string()
      .min(30, "explanation should justify the correct answer and why distractors are wrong"),
    citation: z
      .string()
      .min(5, "citation must reference the guide section or doc this question is grounded in"),
    difficulty: z.enum(DIFFICULTIES),
  })
  .superRefine((q, ctx) => {
    const optionIds = q.options.map((o) => o.id);
    if (new Set(optionIds).size !== optionIds.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "option ids must be unique within a question",
        path: ["options"],
      });
    }

    for (const cid of q.correctOptionIds) {
      if (!optionIds.includes(cid)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `correctOptionIds references unknown option id "${cid}"`,
          path: ["correctOptionIds"],
        });
      }
    }

    if (new Set(q.correctOptionIds).size !== q.correctOptionIds.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "correctOptionIds contains duplicate entries",
        path: ["correctOptionIds"],
      });
    }

    if (q.correctOptionIds.length !== q.selectCount) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `selectCount (${q.selectCount}) must equal the number of correctOptionIds (${q.correctOptionIds.length})`,
        path: ["selectCount"],
      });
    }

    if (q.type === "mcq" && q.selectCount !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'type "mcq" requires selectCount === 1',
        path: ["type"],
      });
    }

    if (q.type === "scenario-multi-response" && q.selectCount < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'type "scenario-multi-response" requires selectCount >= 2',
        path: ["type"],
      });
    }
  });

export type Question = z.infer<typeof questionSchema>;
export type QuestionInput = z.input<typeof questionSchema>;
