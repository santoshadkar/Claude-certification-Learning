"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getCertification } from "@content/certifications";
import type { Question } from "@content/schema/question";
import { getQuestionsForCert } from "@/lib/questions";
import { buildExamQuestions, formatClock } from "@/lib/build-exam";
import { useCertProgress } from "@/lib/use-cert-progress";
import { getWeakDomains, type ExamAnswer } from "@/lib/storage";
import { QuestionCard } from "@/components/question-card";
import { DomainBreakdownChart } from "@/components/domain-breakdown-chart";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheck, CircleX, Clock } from "lucide-react";

type Phase = "intro" | "running" | "results";

interface Result {
  scorePercent: number;
  correctCount: number;
  total: number;
  domainBreakdown: Record<string, { correct: number; total: number }>;
  missed: Array<{ question: Question; selectedOptionIds: string[] }>;
}

export default function ExamPage() {
  const { cert: certSlug } = useParams<{ cert: string }>();
  const cert = getCertification(certSlug);
  const pool = useMemo(() => (cert ? getQuestionsForCert(cert.slug) : []), [cert]);

  const [phase, setPhase] = useState<Phase>("intro");
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [result, setResult] = useState<Result | null>(null);

  const { recordExamSession } = useCertProgress(cert?.slug ?? "associate-foundations");

  useEffect(() => {
    if (phase !== "running") return;
    if (secondsLeft <= 0) {
      finishExam();
      return;
    }
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, secondsLeft]);

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

  function startExam() {
    if (!cert) return;
    const qs = buildExamQuestions(cert, pool);
    setExamQuestions(qs);
    setAnswers({});
    setIndex(0);
    setSecondsLeft(cert.timeLimitMinutes * 60);
    setResult(null);
    setPhase("running");
  }

  function finishExam() {
    if (!cert) return;
    const domainBreakdown: Record<string, { correct: number; total: number }> = {};
    const missed: Result["missed"] = [];
    const examAnswers: ExamAnswer[] = [];
    let correctCount = 0;

    for (const q of examQuestions) {
      const selectedOptionIds = answers[q.id] ?? [];
      const correctSet = new Set(q.correctOptionIds);
      const correct =
        selectedOptionIds.length === q.correctOptionIds.length &&
        selectedOptionIds.every((id) => correctSet.has(id));

      if (correct) correctCount++;
      else missed.push({ question: q, selectedOptionIds });

      const tally = domainBreakdown[q.domain] ?? { correct: 0, total: 0 };
      tally.total += 1;
      if (correct) tally.correct += 1;
      domainBreakdown[q.domain] = tally;

      examAnswers.push({ questionId: q.id, domain: q.domain, selectedOptionIds, correct });
    }

    const scorePercent =
      examQuestions.length === 0 ? 0 : Math.round((correctCount / examQuestions.length) * 100);

    setResult({ scorePercent, correctCount, total: examQuestions.length, domainBreakdown, missed });

    recordExamSession({
      id: `exam-${Date.now()}`,
      startedAt: Date.now() - (cert.timeLimitMinutes * 60 - secondsLeft) * 1000,
      finishedAt: Date.now(),
      scorePercent,
      domainBreakdown,
      answers: examAnswers,
    });

    setPhase("results");
  }

  const current = examQuestions[index];
  const selected = current ? answers[current.id] ?? [] : [];

  function setSelectedForCurrent(ids: string[]) {
    if (!current) return;
    setAnswers((prev) => ({ ...prev, [current.id]: ids }));
  }

  if (phase === "intro") {
    const willUseCount = Math.min(cert.numberOfItems, pool.length);
    return (
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10">
        <Card>
          <CardHeader>
            <Badge variant="secondary" className="mb-2 w-fit">
              {cert.examCode}
            </Badge>
            <CardTitle>Exam simulation — {cert.shortName}</CardTitle>
            <CardDescription>
              Matches the real exam format described in the official exam guide.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              <li>{cert.timeLimitMinutes}-minute timer, starts as soon as you begin</li>
              <li>Mixed multiple-choice and multiple-response items</li>
              <li>No going back to review a previous question while the clock runs</li>
              <li>Closed-book: no explanations or hints shown until the simulation ends</li>
              <li>Passing score on the real exam is {cert.passingScore}/{cert.scoreRange[1]} (scaled)</li>
            </ul>
            {willUseCount < cert.numberOfItems && (
              <Alert>
                <AlertTitle>Shorter simulation for now</AlertTitle>
                <AlertDescription>
                  The real exam has {cert.numberOfItems} items, but the question bank currently has{" "}
                  {pool.length}. This simulation will use all {willUseCount} available question(s) —
                  it will grow as more content is added.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="justify-between">
            <Link href={`/${cert.slug}`} className={buttonVariants({ variant: "ghost" })}>
              Cancel
            </Link>
            <Button onClick={startExam} disabled={willUseCount === 0}>
              Start exam
            </Button>
          </CardFooter>
        </Card>
      </main>
    );
  }

  if (phase === "running" && current) {
    return (
      <main className="mx-auto w-full max-w-3xl flex-1 space-y-4 px-4 py-10">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Question {index + 1} of {examQuestions.length}
          </span>
          <span className="flex items-center gap-1.5 font-mono text-sm font-medium">
            <Clock className="size-4" />
            {formatClock(secondsLeft)}
          </span>
        </div>

        <QuestionCard
          question={current}
          selectedOptionIds={selected}
          onChange={setSelectedForCurrent}
          showCorrectness={false}
        />

        <div className="flex justify-end">
          {index + 1 < examQuestions.length ? (
            <Button onClick={() => setIndex((i) => i + 1)} disabled={selected.length !== current.selectCount}>
              Next
            </Button>
          ) : (
            <Button onClick={finishExam} disabled={selected.length !== current.selectCount}>
              Submit exam
            </Button>
          )}
        </div>
      </main>
    );
  }

  if (phase === "results" && result) {
    const chartData = Object.entries(result.domainBreakdown).map(([domain, tally]) => ({
      domain,
      percent: tally.total === 0 ? 0 : Math.round((tally.correct / tally.total) * 100),
      detail: `${tally.correct}/${tally.total} correct`,
    }));
    const weakest = getWeakDomains(
      chartData.map((c) => ({
        domain: c.domain,
        attempted: 1,
        mastered: c.percent >= 70 ? 1 : 0,
        masteryPercent: c.percent,
      }))
    );

    return (
      <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-4 py-10">
        <Card>
          <CardHeader>
            <CardTitle>Results — {cert.shortName}</CardTitle>
            <CardDescription>
              {result.correctCount}/{result.total} correct. This is a raw percent-correct score for
              practice purposes — the real exam reports a scaled score (100–1,000, pass at{" "}
              {cert.passingScore}); treat 80%+ here as a rough readiness signal, not an official
              prediction.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-semibold">{result.scorePercent}%</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Domain breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <DomainBreakdownChart data={chartData} />
          </CardContent>
        </Card>

        {weakest.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <span className="self-center text-sm text-muted-foreground">Review weak domains:</span>
            {weakest.map((d) => (
              <Link
                key={d.domain}
                href={`/${cert.slug}/practice?domain=${encodeURIComponent(d.domain)}`}
                className={buttonVariants({ size: "sm", variant: "outline" })}
              >
                {d.domain}
              </Link>
            ))}
          </div>
        )}

        {result.missed.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Missed questions ({result.missed.length})</h2>
            {result.missed.map(({ question, selectedOptionIds }) => (
              <Card key={question.id}>
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{question.domain}</Badge>
                    <CircleX className="size-4 text-destructive" />
                  </div>
                  <p className="font-medium">{question.stem}</p>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <span className="text-muted-foreground">Your answer: </span>
                    {selectedOptionIds.length > 0
                      ? question.options
                          .filter((o) => selectedOptionIds.includes(o.id))
                          .map((o) => o.text)
                          .join("; ")
                      : "(no answer)"}
                  </p>
                  <p className="flex items-start gap-1.5">
                    <CircleCheck className="mt-0.5 size-4 shrink-0 text-green-600" />
                    <span>
                      {question.options
                        .filter((o) => question.correctOptionIds.includes(o.id))
                        .map((o) => o.text)
                        .join("; ")}
                    </span>
                  </p>
                  <Alert>
                    <AlertDescription className="space-y-2">
                      <p>{question.explanation}</p>
                      <p className="text-xs italic">{question.citation}</p>
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Link href={`/${cert.slug}`} className={buttonVariants({ variant: "ghost" })}>
          ← Back to dashboard
        </Link>
      </main>
    );
  }

  return null;
}
