import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "architect-professional" as const;
const DOMAIN = "Governance, Safety & Risk Management" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Covers the architect's responsibility for the parts of a system that aren't about capability at all: safety controls, honest risk assessment, human oversight, regulatory compliance, and ethical AI practice.",
  concepts: [
    {
      taskStatement: "Implement guardrails and safety controls",
      summary:
        "Layer independent guardrails (input filtering, output review, tool-call restriction via hooks) rather than relying on one control — a single point of failure in a guardrail chain shouldn't compromise the whole system. Guardrails should be enforced deterministically wherever the consequence of a failure is serious, not left to prompt instructions alone.",
    },
    {
      taskStatement: "Identify risks, limitations, and failure modes of LLM systems",
      summary:
        "Core LLM failure modes an architect must design around: hallucination (confident fabrication), non-determinism (the same input can produce different outputs across calls), context rot in long conversations, and prompt injection from untrusted content. A risk assessment names which of these apply to a given system and what mitigates each, rather than treating 'the model might be wrong sometimes' as a single generic risk.",
    },
    {
      taskStatement: "Apply human-in-the-loop validation strategies",
      summary:
        "Route review effort where it matters most: low-confidence outputs, high-stakes decisions, and novel patterns outside what's been validated — reviewing 100% of low-risk, high-volume output isn't sustainable, and reviewing 0% of high-stakes output isn't responsible. Confidence-based routing, informed by real calibration data rather than the model's self-reported confidence, is what makes this scale.",
    },
    {
      taskStatement: "Ensure compliance with regulations (e.g., GDPR, HIPAA, FedRAMP)",
      summary:
        "Regulatory requirements shape architecture, not just policy documents: GDPR implicates data residency and retention, HIPAA implicates what health data can touch which systems and under what agreements, FedRAMP implicates deployment environment and authorization. An architect needs to recognize when a use case triggers one of these and route the design (and the conversation with legal/compliance) accordingly — this platform's content stops at recognizing the trigger, not at rendering legal advice.",
    },
    {
      taskStatement: "Address ethical AI considerations (bias, fairness, transparency)",
      summary:
        "Bias can enter through training data, through proxy variables in your own inputs (a field that correlates with a protected characteristic), or through uneven validation (a system tested well on one population segment and poorly on another). Fairness and transparency are design commitments — documenting what the system does, its known limitations, and how affected people can get a human decision — not properties that emerge automatically from using a capable model.",
    },
  ],
  resources: [RESOURCES.helpCenter, RESOURCES.buildEvals],
};
