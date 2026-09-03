"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { getCertification } from "@content/certifications";
import type { Question } from "@content/schema/question";
import { getQuestionsForCert, getQuestionsForDomain } from "@/lib/questions";
import { shuffle } from "@/lib/shuffle";
import { useCertProgress } from "@/lib/use-cert-progress";
import { QuestionCard } from "@/components/question-card";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheck, CircleX } from "lucide-react";

const MIXED = "Mixed (all domains)";

function sameAnswer(selected: string[], correct: string[]): boolean {
  if (selected.length !== correct.length) return false;
  const correctSet = new Set(correct);
  return selected.every((id) => correctSet.has(id));
}

export default function PracticePage() {
  const { cert: certSlug } = useParams<{ cert: string }>();
  const searchParams = useSearchParams();
  const cert = getCertification(certSlug);
  const initialDomain = searchParams.get("domain") ?? MIXED;

  const [domain, setDomain] = useState(initialDomain);
  const [queue, setQueue] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const { recordPracticeAttempt } = useCertProgress(cert?.slug ?? "associate-foundations");

  const pool = useMemo(() => {
    if (!cert) return [];
    return domain === MIXED ? getQuestionsForCert(cert.slug) : getQuestionsForDomain(cert.slug, domain);
  }, [cert, domain]);

  useEffect(() => {
    setQueue(shuffle(pool));
    setIndex(0);
    setSelected([]);
    setSubmitted(false);
  }, [pool]);

  if (!cert) {
    return (
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <p className="text-muted-foreground">
          Unknown certification.{" "}
          <Link href="/" className="underline">
            Back to all certifications
          </Link>
          .
        </p>
      </main>
    );
  }

  const current = queue[index];
  const isCorrect = current && submitted ? sameAnswer(selected, current.correctOptionIds) : false;
  const complete = queue.length > 0 && index >= queue.length;

  function handleSubmit() {
    if (!current) return;
    const correct = sameAnswer(selected, current.correctOptionIds);
    recordPracticeAttempt({
      questionId: current.id,
      domain: current.domain,
      correct,
      selectedOptionIds: selected,
      answeredAt: Date.now(),
    });
    setSubmitted(true);
  }

  function handleNext() {
    setIndex((i) => i + 1);
    setSelected([]);
    setSubmitted(false);
  }

  function restart() {
    setQueue(shuffle(pool));
    setIndex(0);
    setSelected([]);
    setSubmitted(false);
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-4 py-10">
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight">{cert.shortName} — Practice</h1>
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm text-muted-foreground" htmlFor="domain-select">
            Domain
          </label>
          <select
            id="domain-select"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="h-8 rounded-md border border-input bg-background px-2 text-sm"
          >
            <option value={MIXED}>{MIXED}</option>
            {cert.domains.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
          {queue.length > 0 && !complete && (
            <span className="text-sm text-muted-foreground">
              Question {index + 1} of {queue.length}
            </span>
          )}
        </div>
      </div>

      {pool.length === 0 && (
        <Alert>
          <AlertTitle>No questions available</AlertTitle>
          <AlertDescription>
            There aren&apos;t any questions for &quot;{domain}&quot; yet. Try a different domain or
            check the{" "}
            <Link href="/content-status" className="underline">
              content status page
            </Link>
            .
          </AlertDescription>
        </Alert>
      )}

      {complete && pool.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Set complete</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              You&apos;ve gone through all {queue.length} question(s) for &quot;{domain}&quot;.
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={restart}>Practice again</Button>
          </CardFooter>
        </Card>
      )}

      {current && !complete && (
        <div className="space-y-4">
          <QuestionCard
            question={current}
            selectedOptionIds={selected}
            onChange={setSelected}
            disabled={submitted}
            showCorrectness={submitted}
          />

          {submitted && (
            <Alert variant={isCorrect ? "default" : "destructive"}>
              {isCorrect ? <CircleCheck className="size-4" /> : <CircleX className="size-4" />}
              <AlertTitle>{isCorrect ? "Correct" : "Incorrect"}</AlertTitle>
              <AlertDescription className="space-y-2">
                <p>{current.explanation}</p>
                <p className="text-xs italic">{current.citation}</p>
              </AlertDescription>
            </Alert>
          )}

          <div className="flex justify-end gap-2">
            {!submitted ? (
              <Button onClick={handleSubmit} disabled={selected.length !== current.selectCount}>
                Submit
              </Button>
            ) : (
              <Button onClick={handleNext}>
                {index + 1 < queue.length ? "Next question" : "Finish"}
              </Button>
            )}
          </div>
        </div>
      )}

      <Link href={`/${cert.slug}`} className={buttonVariants({ variant: "ghost", size: "sm" })}>
        ← Back to dashboard
      </Link>
    </main>
  );
}
