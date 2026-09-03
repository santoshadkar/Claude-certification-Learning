"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getCertification } from "@content/certifications";
import { getStudyModulesForCert } from "@/lib/study";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export default function StudyPage() {
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

  const modules = getStudyModulesForCert(cert.slug);
  const moduleByDomain = new Map(modules.map((m) => [m.domain, m]));

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-4 py-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">{cert.shortName} — Study Guide</h1>
        <p className="text-muted-foreground">
          One section per exam domain: what it covers, the concepts behind each task statement, and
          official Anthropic resources to go deeper. Work through a domain here before practicing it.
        </p>
      </div>

      <Accordion defaultValue={[cert.domains[0]?.name].filter(Boolean)}>
        {cert.domains.map((domainSummary) => {
          const mod = moduleByDomain.get(domainSummary.name);
          return (
            <AccordionItem key={domainSummary.name} value={domainSummary.name}>
              <AccordionTrigger>
                <span className="flex flex-wrap items-center gap-2 pr-2 text-left">
                  <span>{domainSummary.name}</span>
                  <Badge variant="secondary">{domainSummary.weightPercent}%</Badge>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                {!mod ? (
                  <p className="text-muted-foreground">Study content for this domain is coming soon.</p>
                ) : (
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{mod.overview}</p>
                    <div className="space-y-3">
                      {mod.concepts.map((concept) => (
                        <div key={concept.taskStatement} className="rounded-md border p-3">
                          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            {concept.taskStatement}
                          </p>
                          <p className="text-sm leading-relaxed">{concept.summary}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Go deeper
                      </p>
                      <ul className="space-y-1">
                        {mod.resources.map((resource) => (
                          <li key={resource.url} className="text-sm">
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium underline underline-offset-2"
                            >
                              {resource.title}
                            </a>
                            <span className="text-muted-foreground"> — {resource.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/${cert.slug}/practice?domain=${encodeURIComponent(domainSummary.name)}`}
                      className={buttonVariants({ size: "sm", variant: "outline" })}
                    >
                      Practice this domain →
                    </Link>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <Link href={`/${cert.slug}`} className={buttonVariants({ variant: "ghost", size: "sm" })}>
        ← Back to dashboard
      </Link>
    </main>
  );
}
