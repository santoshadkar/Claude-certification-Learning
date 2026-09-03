import { z } from "zod";
import type { CertificationSlug } from "@content/schema/question";

const STORAGE_PREFIX = "claude-cert-prep:v1";

const practiceAttemptSchema = z.object({
  questionId: z.string(),
  domain: z.string(),
  correct: z.boolean(),
  selectedOptionIds: z.array(z.string()),
  answeredAt: z.number(),
});
export type PracticeAttempt = z.infer<typeof practiceAttemptSchema>;

const examAnswerSchema = z.object({
  questionId: z.string(),
  domain: z.string(),
  selectedOptionIds: z.array(z.string()),
  correct: z.boolean(),
});
export type ExamAnswer = z.infer<typeof examAnswerSchema>;

const domainTallySchema = z.object({ correct: z.number(), total: z.number() });

const examSessionSchema = z.object({
  id: z.string(),
  startedAt: z.number(),
  finishedAt: z.number(),
  scorePercent: z.number(),
  domainBreakdown: z.record(z.string(), domainTallySchema),
  answers: z.array(examAnswerSchema),
});
export type ExamSession = z.infer<typeof examSessionSchema>;

const certProgressSchema = z.object({
  version: z.literal(1),
  practiceAttempts: z.array(practiceAttemptSchema),
  examSessions: z.array(examSessionSchema),
});
export type CertProgress = z.infer<typeof certProgressSchema>;

export const EMPTY_PROGRESS: CertProgress = {
  version: 1,
  practiceAttempts: [],
  examSessions: [],
};

function storageKey(cert: CertificationSlug): string {
  return `${STORAGE_PREFIX}:${cert}`;
}

export function loadProgress(cert: CertificationSlug): CertProgress {
  if (typeof window === "undefined") return EMPTY_PROGRESS;
  try {
    const raw = window.localStorage.getItem(storageKey(cert));
    if (!raw) return EMPTY_PROGRESS;
    const parsed = certProgressSchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : EMPTY_PROGRESS;
  } catch {
    return EMPTY_PROGRESS;
  }
}

export function saveProgress(cert: CertificationSlug, progress: CertProgress): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(storageKey(cert), JSON.stringify(progress));
  } catch {
    // localStorage unavailable (private browsing quota, etc.) — progress just won't persist.
  }
}

/** Latest attempt per question id, most recent first is not guaranteed — use `answeredAt` to resolve. */
export function latestAttemptPerQuestion(attempts: PracticeAttempt[]): Map<string, PracticeAttempt> {
  const map = new Map<string, PracticeAttempt>();
  for (const attempt of attempts) {
    const existing = map.get(attempt.questionId);
    if (!existing || attempt.answeredAt >= existing.answeredAt) {
      map.set(attempt.questionId, attempt);
    }
  }
  return map;
}

export interface DomainStats {
  domain: string;
  attempted: number;
  mastered: number;
  masteryPercent: number;
}

/** Per-domain stats from practice attempts: "mastered" = latest attempt on that question was correct. */
export function getDomainStats(progress: CertProgress, domains: string[]): DomainStats[] {
  const latest = latestAttemptPerQuestion(progress.practiceAttempts);
  return domains.map((domain) => {
    const inDomain = [...latest.values()].filter((a) => a.domain === domain);
    const mastered = inDomain.filter((a) => a.correct).length;
    return {
      domain,
      attempted: inDomain.length,
      mastered,
      masteryPercent: inDomain.length === 0 ? 0 : Math.round((mastered / inDomain.length) * 100),
    };
  });
}

export function getWeakDomains(stats: DomainStats[], threshold = 70): DomainStats[] {
  return stats
    .filter((s) => s.attempted > 0 && s.masteryPercent < threshold)
    .sort((a, b) => a.masteryPercent - b.masteryPercent);
}
