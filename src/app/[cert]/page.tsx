"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getCertification } from "@content/certifications";
import { getQuestionsForCert } from "@/lib/questions";
import { useCertProgress } from "@/lib/use-cert-progress";
import { getDomainStats, getWeakDomains } from "@/lib/storage";
import { DomainBreakdownChart } from "@/components/domain-breakdown-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";

export default function CertDashboardPage() {
  const { cert: certSlug } = useParams<{ cert: string }>();
  const cert = getCertification(certSlug);

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

  const questions = getQuestionsForCert(cert.slug);
  const { progress, loaded } = useCertProgress(cert.slug);
  const domainNames = cert.domains.map((d) => d.name);
  const stats = getDomainStats(progress, domainNames);
  const weakDomains = getWeakDomains(stats);
  const totalAttempted = stats.reduce((sum, s) => sum + s.attempted, 0);
  const totalMastered = stats.reduce((sum, s) => sum + s.mastered, 0);

  const chartData = stats.map((s) => ({
    domain: s.domain,
    percent: s.masteryPercent,
    detail: `${s.mastered}/${s.attempted} mastered`,
  }));

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-6 px-4 py-10">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{cert.examCode}</Badge>
          <span className="text-sm text-muted-foreground">
            {cert.numberOfItems} items · {cert.timeLimitMinutes} min · pass {cert.passingScore}/
            {cert.scoreRange[1]}
          </span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">{cert.name}</h1>
        <p className="max-w-2xl text-muted-foreground">{cert.description}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href={`/${cert.slug}/study`} className={buttonVariants({ size: "lg" })}>
          Study
        </Link>
        <Link href={`/${cert.slug}/practice`} className={buttonVariants({ size: "lg", variant: "outline" })}>
          Start practice
        </Link>
        <Link
          href={`/${cert.slug}/exam`}
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            questions.length === 0 && "pointer-events-none opacity-50"
          )}
          aria-disabled={questions.length === 0}
        >
          Start exam simulation
        </Link>
      </div>

      {questions.length === 0 && (
        <Alert>
          <TriangleAlert className="size-4" />
          <AlertTitle>No questions yet for this certification</AlertTitle>
          <AlertDescription>
            The question bank for {cert.shortName} hasn&apos;t been generated yet. Check the{" "}
            <Link href="/content-status" className="underline">
              content status page
            </Link>{" "}
            for progress.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Questions in bank
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">{questions.length}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Questions attempted
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">{loaded ? totalAttempted : "—"}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Mastered</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            {loaded ? totalMastered : "—"}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Domain breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          {loaded && totalAttempted > 0 ? (
            <DomainBreakdownChart data={chartData} />
          ) : (
            <p className="py-8 text-center text-sm text-muted-foreground">
              Practice a few questions to see your domain breakdown here.
            </p>
          )}
        </CardContent>
      </Card>

      {weakDomains.length > 0 && (
        <Alert variant="destructive">
          <TriangleAlert className="size-4" />
          <AlertTitle>Weak areas</AlertTitle>
          <AlertDescription>
            <ul className="mt-1 list-inside list-disc">
              {weakDomains.map((d) => (
                <li key={d.domain}>
                  <Link
                    href={`/${cert.slug}/practice?domain=${encodeURIComponent(d.domain)}`}
                    className="underline underline-offset-2"
                  >
                    {d.domain}
                  </Link>{" "}
                  — {d.masteryPercent}% ({d.mastered}/{d.attempted})
                </li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}
    </main>
  );
}
