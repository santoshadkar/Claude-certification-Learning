import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "associate-foundations" as const;
const DOMAIN = "Governance, Risk, and Responsible Use" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "The second-largest domain (15%): knowing where the lines are — what's an appropriate use of Claude, how to handle sensitive data, what your organization's policy requires, and the ethical stakes of AI-assisted decisions.",
  concepts: [
    {
      taskStatement: "Identify appropriate and inappropriate use cases",
      summary:
        "Appropriate use is structured, reviewable work where a human stays accountable for the final decision — drafting, summarizing, brainstorming, analysis. Inappropriate use includes things like unreviewed external communications on high-stakes topics, decisions requiring legal/medical authority, or work that requires information Claude has no way to verify (e.g., real-time confidential facts). When in doubt, the question to ask is: can a human meaningfully review this before it has consequences?",
    },
    {
      taskStatement: "Apply data sensitivity, regulatory, and privacy considerations",
      summary:
        "Before pasting data into Claude, know what category it falls into — personal data, regulated data (health, financial), or confidential business data — and whether your organization's policy permits that category in this context. The safe default when uncertain is to anonymize or redact identifying details, or confirm the specific tool/workflow is covered by an approved data agreement, rather than assuming internal use makes any data acceptable.",
    },
    {
      taskStatement: "Follow organizational AI policies and governance standards",
      summary:
        "Most organizations set explicit rules around AI use: what needs human review before going external, what usage must be logged, what data categories are off-limits. These policies exist independently of what's technically possible with the tool, and following them is part of using Claude responsibly even when a shortcut seems harmless.",
    },
    {
      taskStatement: "Understand the ethical implications of AI usage",
      summary:
        "Two ethical failure modes come up repeatedly: proxy bias (a seemingly neutral input like a zip code or school name correlates with a protected characteristic and skews results) and overreliance (treating AI output as ground truth without the scrutiny a human decision would normally get). Mitigating both requires actively reviewing inputs/outputs for skewed patterns and keeping a human accountable for consequential decisions.",
    },
  ],
  resources: [RESOURCES.helpCenter],
};
