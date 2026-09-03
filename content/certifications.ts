import associateGuide from "./source/associate-foundations/exam-guide.json";
import developerGuide from "./source/developer-foundations/exam-guide.json";
import architectFoundationsGuide from "./source/architect-foundations/exam-guide.json";
import architectProfessionalGuide from "./source/architect-professional/exam-guide.json";
import type { CertificationSlug } from "./schema/question";

export interface CertificationDomainSummary {
  name: string;
  weightPercent: number;
}

export interface Certification {
  slug: CertificationSlug;
  name: string;
  shortName: string;
  examCode: string;
  description: string;
  priceUSD: number;
  numberOfItems: number;
  timeLimitMinutes: number;
  passingScore: number;
  scoreRange: [number, number];
  domains: CertificationDomainSummary[];
}

function toDomainSummaries(guide: { domains: Array<{ name: string; weightPercent: number }> }): CertificationDomainSummary[] {
  return guide.domains.map((d) => ({ name: d.name, weightPercent: d.weightPercent }));
}

export const CERTIFICATIONS: Certification[] = [
  {
    slug: "associate-foundations",
    name: associateGuide.name,
    shortName: "Associate",
    examCode: associateGuide.examCode,
    description:
      "For professionals who use Claude as a day-to-day productivity tool — structuring prompts, evaluating outputs, choosing the right model and features, and knowing when to escalate to a Developer or Architect.",
    priceUSD: associateGuide.examFeeUSD,
    numberOfItems: associateGuide.numberOfItems,
    timeLimitMinutes: associateGuide.timeLimitMinutes,
    passingScore: associateGuide.passingScore,
    scoreRange: associateGuide.scoreRange as [number, number],
    domains: toDomainSummaries(associateGuide),
  },
  {
    slug: "developer-foundations",
    name: developerGuide.name,
    shortName: "Developer",
    examCode: developerGuide.examCode,
    description:
      "For engineers who build and ship Claude-powered applications: API integration, agents and tools, prompt/context engineering, evals, security, and cost/latency optimization.",
    priceUSD: developerGuide.examFeeUSD,
    numberOfItems: developerGuide.numberOfItems,
    timeLimitMinutes: developerGuide.timeLimitMinutes,
    passingScore: developerGuide.passingScore,
    scoreRange: developerGuide.scoreRange as [number, number],
    domains: toDomainSummaries(developerGuide),
  },
  {
    slug: "architect-foundations",
    name: architectFoundationsGuide.name,
    shortName: "Architect (Foundations)",
    examCode: architectFoundationsGuide.examCode,
    description:
      "Scenario-based exam on the judgment calls behind production Claude systems — agentic architecture, tool/MCP design, Claude Code workflows, structured output, and context reliability.",
    priceUSD: architectFoundationsGuide.examFeeUSD,
    numberOfItems: architectFoundationsGuide.numberOfItems,
    timeLimitMinutes: architectFoundationsGuide.timeLimitMinutes,
    passingScore: architectFoundationsGuide.passingScore,
    scoreRange: architectFoundationsGuide.scoreRange as [number, number],
    domains: toDomainSummaries(architectFoundationsGuide),
  },
  {
    slug: "architect-professional",
    name: architectProfessionalGuide.name,
    shortName: "Architect (Professional)",
    examCode: architectProfessionalGuide.examCode,
    description:
      "For senior architects who own the full lifecycle of a Claude-based solution — design, integration, evaluation, governance/compliance, and stakeholder communication.",
    priceUSD: architectProfessionalGuide.examFeeUSD,
    numberOfItems: architectProfessionalGuide.numberOfItems,
    timeLimitMinutes: architectProfessionalGuide.timeLimitMinutes,
    passingScore: architectProfessionalGuide.passingScore,
    scoreRange: architectProfessionalGuide.scoreRange as [number, number],
    domains: toDomainSummaries(architectProfessionalGuide),
  },
];

export function getCertification(slug: string): Certification | undefined {
  return CERTIFICATIONS.find((c) => c.slug === slug);
}
