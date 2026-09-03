"use client";

import { useCallback, useEffect, useState } from "react";
import type { CertificationSlug } from "@content/schema/question";
import {
  EMPTY_PROGRESS,
  loadProgress,
  saveProgress,
  type CertProgress,
  type ExamSession,
  type PracticeAttempt,
} from "./storage";

export function useCertProgress(cert: CertificationSlug) {
  const [progress, setProgress] = useState<CertProgress>(EMPTY_PROGRESS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setProgress(loadProgress(cert));
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cert]);

  const recordPracticeAttempt = useCallback(
    (attempt: PracticeAttempt) => {
      setProgress((prev) => {
        const next: CertProgress = {
          ...prev,
          practiceAttempts: [...prev.practiceAttempts, attempt],
        };
        saveProgress(cert, next);
        return next;
      });
    },
    [cert]
  );

  const recordExamSession = useCallback(
    (session: ExamSession) => {
      setProgress((prev) => {
        const next: CertProgress = {
          ...prev,
          examSessions: [...prev.examSessions, session],
        };
        saveProgress(cert, next);
        return next;
      });
    },
    [cert]
  );

  return { progress, loaded, recordPracticeAttempt, recordExamSession };
}
