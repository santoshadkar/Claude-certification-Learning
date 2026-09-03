const STOPWORDS = new Set([
  "a", "an", "the", "and", "or", "but", "of", "to", "in", "on", "for", "with",
  "is", "are", "was", "were", "be", "been", "being", "this", "that", "which",
  "what", "you", "your", "it", "its", "as", "at", "by", "from", "into", "most",
  "should", "would", "will", "can", "could", "do", "does", "did", "has", "have",
  "had", "if", "when", "while", "than", "then", "so",
]);

export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string): Set<string> {
  return new Set(
    normalizeText(text)
      .split(" ")
      .filter((w) => w.length > 0 && !STOPWORDS.has(w))
  );
}

/** Jaccard similarity of the two strings' significant-word sets, in [0, 1]. */
export function jaccardSimilarity(a: string, b: string): number {
  const setA = tokenize(a);
  const setB = tokenize(b);
  if (setA.size === 0 && setB.size === 0) return 1;

  let intersection = 0;
  for (const word of setA) {
    if (setB.has(word)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

export interface DuplicatePair<T> {
  a: T;
  b: T;
  similarity: number;
}

/**
 * Finds near-duplicate stems within a list, comparing every pair. Intended
 * to run per-certification (spec: "reject near-duplicate stems within the
 * same certification"), so lists should be pre-filtered by certificationSlug
 * before calling this — O(n^2) is fine at hundreds-of-questions scale.
 */
export function findNearDuplicates<T>(
  items: T[],
  getText: (item: T) => string,
  threshold: number
): DuplicatePair<T>[] {
  const pairs: DuplicatePair<T>[] = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      const similarity = jaccardSimilarity(getText(items[i]), getText(items[j]));
      if (similarity >= threshold) {
        pairs.push({ a: items[i], b: items[j], similarity });
      }
    }
  }
  return pairs;
}
