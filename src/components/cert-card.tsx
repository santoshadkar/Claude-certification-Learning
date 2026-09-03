"use client";

import Link from "next/link";
import type { Certification } from "@content/certifications";
import { useCertProgress } from "@/lib/use-cert-progress";
import { getDomainStats } from "@/lib/storage";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { buttonVariants } from "@/components/ui/button";

export function CertCard({ cert, questionCount }: { cert: Certification; questionCount: number }) {
  const { progress, loaded } = useCertProgress(cert.slug);
  const stats = getDomainStats(
    progress,
    cert.domains.map((d) => d.name)
  );
  const totalAttempted = stats.reduce((sum, s) => sum + s.attempted, 0);
  const totalMastered = stats.reduce((sum, s) => sum + s.mastered, 0);
  const masteryPercent = totalAttempted === 0 ? 0 : Math.round((totalMastered / totalAttempted) * 100);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary">{cert.examCode}</Badge>
          <span className="text-sm font-medium text-muted-foreground">${cert.priceUSD}</span>
        </div>
        <CardTitle className="text-lg leading-snug">{cert.name}</CardTitle>
        <CardDescription>{cert.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-3">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span>{cert.numberOfItems} items</span>
          <span>{cert.timeLimitMinutes} min</span>
          <span>{questionCount} in bank</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Your progress</span>
            <span className="font-medium">
              {loaded ? `${totalAttempted} attempted · ${masteryPercent}% mastered` : "—"}
            </span>
          </div>
          <Progress value={loaded ? masteryPercent : 0} />
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Link href={`/${cert.slug}`} className={buttonVariants({ className: "flex-1" })}>
          View dashboard
        </Link>
      </CardFooter>
    </Card>
  );
}
