import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "architect-professional" as const;
const DOMAIN = "Stakeholder Communication & Lifecycle Management" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Tests the 'architect' half of the role that isn't about the system itself: running discovery, explaining trade-offs to non-technical stakeholders, managing expectations, documenting decisions, and owning the project across its full lifecycle.",
  concepts: [
    {
      taskStatement: "Conduct structured discovery and requirement gathering",
      summary:
        "Good discovery separates the actual business outcome a stakeholder needs from the solution they've already assumed ('we need a chatbot') — asking what decision or output must improve, and how success will be measured, before any architecture is proposed.",
    },
    {
      taskStatement: "Communicate architectural decisions and trade-offs",
      summary:
        "Explain decisions in terms the audience cares about: cost and timeline for an executive, reliability and maintainability for engineering, risk and compliance for legal. The same architectural choice (e.g., using a faster/cheaper model tier) needs a different justification framing for each audience, even though the underlying trade-off is identical.",
    },
    {
      taskStatement: "Manage stakeholder feedback loops and expectation alignment (including SLAs)",
      summary:
        "Set explicit, measurable SLAs (latency, accuracy threshold, uptime) early, since 'it should feel fast and be accurate' can't be validated against later. Regular checkpoints that show real interim output — not just status updates — keep stakeholder expectations aligned with what the system will actually do at launch.",
    },
    {
      taskStatement: "Document architectures and provide implementation guidance",
      summary:
        "Documentation that will actually be used again should capture the decisions and their rationale (why this pattern, why this model tier), not just a diagram of the final state — the rationale is what lets a future engineer know whether a constraint still applies before changing it.",
    },
    {
      taskStatement: "Support lifecycle phases (discovery, design, handoff, monitoring, iteration)",
      summary:
        "An architect's responsibility doesn't end at handoff — post-launch monitoring and iteration are part of the same lifecycle, since production usage patterns and model updates both surface issues that discovery and design couldn't have anticipated. A clean handoff includes who owns ongoing monitoring and how iteration requests get prioritized.",
    },
  ],
  resources: [RESOURCES.helpCenter],
};
