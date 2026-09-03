import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "developer-foundations" as const;
const DOMAIN = "Security and Safety" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "Covers defending a Claude application against the attack surfaces unique to LLM-powered systems, plus standard secrets/access hygiene applied to an agentic context.",
  concepts: [
    {
      taskStatement: "AI Application Security",
      summary:
        "Prompt injection is the core new threat: untrusted content (a web page, a document, a user message) that contains text designed to hijack the model's instructions. The mitigation is architectural, not persuasive — treat untrusted input as data, keep it separate from trusted system instructions, and use guardrails/hooks so injected text can't trigger sensitive actions on its own, rather than just asking nicely in the prompt for the model to ignore injected instructions. The same discipline applies to jailbreak defense, data leakage prevention, and PII handling — plus the standard authentication/authorization/confidentiality/integrity properties any application needs.",
    },
    {
      taskStatement: "Guardrails and Safe Deployment",
      summary:
        "Content policy and layered guardrails (multiple independent checks, not one) reduce the chance a single bypass compromises the whole system. Secure-by-design principles — least privilege (grant only the access a component needs) and clear identity/access boundaries — should be baked into the architecture from the start rather than bolted on after an incident.",
    },
    {
      taskStatement: "Claude Hooks",
      summary:
        "Hooks give you deterministic enforcement at fixed points in an agent's lifecycle (before/after a tool call, at session start/end) — this matters because prompt instructions are probabilistic (the model usually follows them) while a hook is guaranteed to run, which is the difference that matters for a hard business rule like 'never process a refund over $500 without approval'.",
    },
    {
      taskStatement: "Identity, Secrets, and Key Management",
      summary:
        "API keys and credentials used across development and production should never be hard-coded or committed to source; use environment variable expansion and secret managers. Identity validation, access-level verification, and monitoring who accessed what are standard security practice — applied here to the agents and MCP servers a Claude application depends on, which often have broader system access than a typical web request.",
    },
  ],
  resources: [RESOURCES.hooks, RESOURCES.toolUse],
};
