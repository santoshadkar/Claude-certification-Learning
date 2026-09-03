"use client";

import { CERTIFICATIONS } from "@content/certifications";
import { getQuestionsForCert } from "@/lib/questions";
import { CertCard } from "@/components/cert-card";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Claude Certification Prep</h1>
        <p className="max-w-2xl text-muted-foreground">
          Practice and simulate the exam for all four Claude Certified credentials. Content is
          grounded in Anthropic&apos;s official exam guides — domains, weighting, and task
          statements are pulled directly from them, not guessed.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert) => (
          <CertCard key={cert.slug} cert={cert} questionCount={getQuestionsForCert(cert.slug).length} />
        ))}
      </div>
    </main>
  );
}
