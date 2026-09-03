import type { Certification } from "@content/certifications";
import type { Question } from "@content/schema/question";
import { shuffle } from "./shuffle";

/**
 * Samples an exam-length question set, weighted by each domain's blueprint
 * percentage where enough content exists, falling back to whatever's
 * available when a domain is short (content bank is still being expanded).
 */
export function buildExamQuestions(cert: Certification, pool: Question[]): Question[] {
  const targetTotal = Math.min(cert.numberOfItems, pool.length);
  if (targetTotal === 0) return [];
  if (pool.length <= targetTotal) return shuffle(pool);

  const byDomain = new Map<string, Question[]>();
  for (const q of pool) {
    const list = byDomain.get(q.domain) ?? [];
    list.push(q);
    byDomain.set(q.domain, list);
  }

  const selected: Question[] = [];
  for (const d of cert.domains) {
    const domainPool = shuffle(byDomain.get(d.name) ?? []);
    const target = Math.round((d.weightPercent / 100) * targetTotal);
    selected.push(...domainPool.slice(0, Math.min(target, domainPool.length)));
  }

  if (selected.length < targetTotal) {
    const selectedIds = new Set(selected.map((q) => q.id));
    const remainder = shuffle(pool.filter((q) => !selectedIds.has(q.id)));
    selected.push(...remainder.slice(0, targetTotal - selected.length));
  }

  return shuffle(selected.slice(0, targetTotal));
}

export function formatClock(totalSeconds: number): string {
  const s = Math.max(0, totalSeconds);
  const mm = Math.floor(s / 60)
    .toString()
    .padStart(2, "0");
  const ss = Math.floor(s % 60)
    .toString()
    .padStart(2, "0");
  return `${mm}:${ss}`;
}
