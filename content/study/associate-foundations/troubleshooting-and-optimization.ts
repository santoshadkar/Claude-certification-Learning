import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "associate-foundations" as const;
const DOMAIN = "Troubleshooting and Optimization" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Covers what to do when a prompt or workflow isn't working well — diagnosing why, adjusting, and improving efficiency over time rather than accepting mediocre output as the ceiling.",
  concepts: [
    {
      taskStatement: "Identify, diagnose, and resolve issues with underperforming prompts or poor outputs",
      summary:
        "Poor output is usually a symptom of an ambiguous or underspecified prompt, not a hard model limitation — the fix is almost always to add missing context, constraints, or examples rather than to just ask again in different words. If outputs are inconsistent across similar requests, that's a signal the instructions leave room for multiple interpretations.",
    },
    {
      taskStatement: "Adjust approach based on feedback and results",
      summary:
        "Treat repeated correction of the same issue as a signal to fix the underlying prompt or Project instructions, not just the individual output — otherwise you keep paying the same correction cost every time.",
    },
    {
      taskStatement: "Optimize workflows for efficiency and effectiveness",
      summary:
        "Once a prompt reliably works, look for ways to reduce repeated manual setup: reusable prompt templates, Project-level instructions instead of restating context each time, and choosing a faster/cheaper model tier for high-volume steps that don't need top-tier reasoning.",
    },
  ],
  resources: [RESOURCES.promptEngineering, RESOURCES.helpCenter],
};
