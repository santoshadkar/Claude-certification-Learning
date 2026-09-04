import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Security and Safety" as const;
const CERT = "developer-foundations" as const;
const S1 = "AI Application Security" as const;
const S2 = "Guardrails and Safe Deployment" as const;
const S3 = "Claude Hooks" as const;
const S4 = "Identity, Secrets, and Key Management" as const;

export const questions: QuestionInput[] = [
  {
    id: "dev-ss-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A Claude-powered agent summarizes web pages submitted by users. One page contains hidden text instructing the model to ignore its instructions and reveal internal system details. What is the most effective mitigation?",
    options: [
      { id: "A", text: "Treat retrieved web content as untrusted input, structurally separate it from trusted instructions, and use guardrails so injected instructions can't trigger sensitive actions." },
      { id: "B", text: "Add a line to the system prompt politely asking users not to include malicious instructions in submitted pages." },
      { id: "C", text: "Raise the model's sampling temperature so its behavior becomes less predictable to an attacker." },
      { id: "D", text: "Switch to a larger, more capable model, which is inherently immune to this kind of injection." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Isolating untrusted content from trusted instructions and enforcing guardrails is the recognized, effective mitigation for prompt injection — a polite request (B) isn't an enforceable control, temperature (C) is irrelevant to injection resistance, and a larger model (D) is not inherently immune and can sometimes be more susceptible to well-crafted injected instructions, not less.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 (Security and Safety) — 'AI Application Security'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "An application logs full conversation transcripts, including any personal data users happen to paste in, with no redaction and indefinite retention. What security/privacy concern does this raise?",
    options: [
      { id: "A", text: "None; logging full transcripts indefinitely is always risk-free regardless of content." },
      { id: "B", text: "Indefinite, unredacted retention of logs that may contain personal or sensitive data increases exposure risk if those logs are ever breached or improperly accessed, and should be addressed with retention limits and/or redaction." },
      { id: "C", text: "This concern only applies if the application is used outside the user's home country." },
      { id: "D", text: "Logging has no relationship to data leakage risk." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Unredacted, indefinitely retained logs containing personal data represent a real, addressable data-leakage risk surface — this isn't risk-free (A), the concern isn't bounded by geography in this way (C), and logging practice is directly related to data-leakage risk (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer wants to defend against jailbreak attempts where a user tries creative phrasing to get the model to bypass its safety guidelines. What is a foundational, layered approach to this?",
    options: [
      { id: "A", text: "Rely on a single client-side keyword filter as the only defense, since one well-chosen filter is always sufficient." },
      { id: "B", text: "Combine multiple independent layers (careful system prompt design, output-side checks, and platform-level safety training) rather than relying on any single control, since no one layer is foolproof alone." },
      { id: "C", text: "Assume jailbreak attempts are purely a marketing concern with no real technical relevance." },
      { id: "D", text: "Disable all safety-related instructions entirely to simplify the system prompt." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Layering independent defenses is the recognized approach since no single control is foolproof — relying on one keyword filter alone (A) is fragile, jailbreak defense is a genuine technical concern (C wrong), and removing safety instructions entirely (D) is the opposite of a defensive posture.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "scenario-multi-response",
    stem:
      "Which two practices directly reduce the risk of PII (personally identifiable information) leaking through a Claude-powered application? (Select 2)",
    options: [
      { id: "A", text: "Minimizing what personal data is included in prompts and logs to only what's strictly necessary for the task." },
      { id: "B", text: "Applying redaction or masking to sensitive fields before they're sent to the model or stored in logs." },
      { id: "C", text: "Including as much personal data as possible in every request, in case it becomes useful later." },
      { id: "D", text: "Storing all logs indefinitely with no review of what they contain." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Data minimization (A) and redaction/masking of sensitive fields (B) both directly reduce PII exposure risk. Including maximal personal data 'just in case' (C) and indefinite, unreviewed log retention (D) both increase exposure risk instead of reducing it.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A support agent's tools include one that can look up any customer's data by ID, with no check on whether the currently authenticated user should have access to that particular customer's records. What security property is missing?",
    options: [
      { id: "A", text: "Authorization — verifying that the authenticated caller actually has permission to access the specific resource being requested, not just that the tool call is well-formed." },
      { id: "B", text: "Encryption in transit, which is unrelated to this specific access-control gap." },
      { id: "C", text: "There is no missing property; authentication alone is always sufficient regardless of what resource is being accessed." },
      { id: "D", text: "Model capability, since a more capable model would enforce this automatically." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is a classic missing authorization check — confirming identity (authentication) is different from confirming permission to access a specific resource (authorization). Encryption in transit (B) doesn't address this access-control gap, authentication alone isn't sufficient here (C wrong), and this is an application-level control, not something a more capable model would enforce on its own (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A team is deploying a customer-facing Claude application and wants to reduce the chance that any single bypassed check compromises the whole system. What deployment principle addresses this?",
    options: [
      { id: "A", text: "Guardrail layering — using multiple independent checks (input filtering, output review, tool-call restrictions) so a single point of failure doesn't compromise the whole system." },
      { id: "B", text: "Relying on exactly one comprehensive check, since adding more checks only adds unnecessary complexity with no security benefit." },
      { id: "C", text: "Deploying with no guardrails at all, and addressing issues only after they're reported by users." },
      { id: "D", text: "Guardrail layering is only relevant to internal tools, never customer-facing ones." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Layering independent guardrails is exactly the principle that avoids a single point of failure — relying on one check alone (B) reintroduces that single point of failure, reactive-only deployment (C) accepts unnecessary risk, and this principle is especially relevant to customer-facing systems, not just internal ones (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "easy",
  },
  {
    id: "dev-ss-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer grants an agent broad access to a company's entire file system 'in case it's needed later,' even though the agent's actual task only requires reading files in one specific directory. What secure-by-design principle is being violated?",
    options: [
      { id: "A", text: "Least privilege — granting only the access actually needed for a role or task, rather than broad access justified by hypothetical future convenience." },
      { id: "B", text: "There is no violation; granting maximum access by default is always the safest configuration." },
      { id: "C", text: "This principle only applies to human user accounts, never to agents or automated systems." },
      { id: "D", text: "Least privilege is only relevant to network-level security, not file-system access." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Granting broad access beyond what a task actually requires, for hypothetical future convenience, is exactly what least privilege warns against — maximal-access-by-default is not the safer choice (B wrong), least privilege applies to agents and automated systems just as much as human accounts (C wrong), and it's a general access-control principle, not limited to network security (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A team's content policy for a public-facing chatbot is documented only in an internal wiki page, with no actual enforcement mechanism built into the application itself. What is the concern with this approach?",
    options: [
      { id: "A", text: "A documented-only policy with no technical enforcement relies entirely on the model's probabilistic compliance, with nothing to guarantee the policy is actually followed in practice." },
      { id: "B", text: "There is no concern, since documenting a policy is always functionally equivalent to enforcing it." },
      { id: "C", text: "Content policies are purely a legal concern with no relevance to application design." },
      { id: "D", text: "This concern only applies to policies about copyrighted material." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A policy that exists only as documentation, with no technical enforcement, depends entirely on probabilistic model compliance rather than a guaranteed control — documentation is not equivalent to enforcement (B wrong), content policy is directly relevant to application design and safe deployment (C wrong), and this concern applies broadly, not just to copyright (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer wants to ensure that even if a prompt injection succeeds in getting the model to 'want' to call a sensitive tool, the action still can't actually happen without proper authorization. What deployment approach addresses this?",
    options: [
      { id: "A", text: "Enforce authorization checks and guardrails at the tool-execution layer itself, independent of what the model decides, so a successful injection at the prompt level still can't bypass execution-level controls." },
      { id: "B", text: "Rely solely on the system prompt telling the model not to call sensitive tools without authorization, with no enforcement elsewhere." },
      { id: "C", text: "Assume prompt injection can never succeed, so this scenario doesn't need to be planned for." },
      { id: "D", text: "Remove all tools from the application entirely to eliminate this category of risk." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Defense in depth means the execution layer itself should enforce authorization independent of the model's decision — relying solely on prompt-level instructions (B) is exactly the layer that injection targets and can bypass, assuming injection is impossible (C) is not a safe assumption, and removing all tools (D) is a disproportionate response when a scoped authorization control would suffice.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "hard",
  },
  {
    id: "dev-ss-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer wants a business rule ('never allow a delete_record tool call for records older than a certain protected threshold') to be enforced with certainty, not just as guidance the model usually follows. What Claude hooks pattern fits this?",
    options: [
      { id: "A", text: "A hook that intercepts the delete_record tool call before execution and blocks it programmatically when the rule's condition is met, rather than relying on prompt instructions alone." },
      { id: "B", text: "A stronger system prompt instruction with no hook, since prompt wording alone can provide the same guarantee as a hook." },
      { id: "C", text: "A few-shot example demonstrating the rule, with no programmatic enforcement." },
      { id: "D", text: "There is no way to guarantee this kind of business rule in Claude Code or the Agent SDK." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A hook that intercepts and blocks the tool call programmatically is exactly the mechanism for a guaranteed rule, unlike prompt wording (B) or few-shot examples (C), which remain probabilistic guidance rather than a guarantee — this kind of enforcement is a well-supported capability (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "easy",
  },
  {
    id: "dev-ss-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "What is the key distinction between using a hook versus relying on prompt instructions for a safety control?",
    options: [
      { id: "A", text: "A hook provides a deterministic guarantee that runs regardless of what the model decides, while prompt instructions offer probabilistic guidance the model usually — but not always guaranteed to — follow." },
      { id: "B", text: "Hooks and prompt instructions provide identical guarantees with no meaningful difference." },
      { id: "C", text: "Prompt instructions are always more reliable than hooks for enforcing safety rules." },
      { id: "D", text: "Hooks can only be used for logging, never for blocking or modifying behavior." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is exactly the distinction that matters for choosing an enforcement mechanism for a hard safety rule — the two are not equivalent (B wrong), prompt instructions are the less reliable of the two for guarantees, not more (C wrong), and hooks can block or modify actions, not just log them (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "easy",
  },
  {
    id: "dev-ss-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer implements a PreToolUse-style hook that checks whether a proposed file-deletion path falls within an allowed directory before permitting the deletion to proceed. What kind of safety control does this represent?",
    options: [
      { id: "A", text: "A deterministic guardrail that prevents a destructive action outside an approved scope, regardless of what the model's own reasoning concluded." },
      { id: "B", text: "A purely cosmetic check with no actual effect on whether the deletion occurs." },
      { id: "C", text: "A check that only logs the attempted deletion without ever blocking it." },
      { id: "D", text: "A check that can be bypassed simply by the model rephrasing its request." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A hook that actually gates whether the destructive action proceeds is a real, deterministic guardrail — it has real effect (B wrong), can block, not just log (C wrong), and being enforced at the execution layer rather than relying on prompt interpretation, it isn't circumvented merely by how the model phrases its request (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer wants to log every tool call an agent makes in production for later audit, without changing the agent's actual behavior. What hook approach fits this need?",
    options: [
      { id: "A", text: "A hook that observes and logs tool calls (e.g., at a PreToolUse or PostToolUse point) without blocking or modifying them, purely for audit purposes." },
      { id: "B", text: "This requires removing all of the agent's tools to achieve logging." },
      { id: "C", text: "Hooks can only block actions; they cannot be used for passive observation or logging." },
      { id: "D", text: "This is not achievable without modifying the agent's core reasoning behavior." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A hook can passively observe and log without altering behavior — this doesn't require removing tools (B), hooks support observation as well as blocking/modification (C wrong), and this is achievable without touching the model's own reasoning (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "scenario-multi-response",
    stem:
      "Which two are appropriate uses of Claude hooks for safety and guardrails? (Select 2)",
    options: [
      { id: "A", text: "Blocking a tool call that violates a hard business rule (e.g., a refund above an approved threshold), regardless of what the model decided." },
      { id: "B", text: "Normalizing or validating tool inputs/outputs before they're used further, to catch malformed or inconsistent data deterministically." },
      { id: "C", text: "Replacing all prompt engineering entirely, since hooks alone are sufficient for every aspect of desired behavior." },
      { id: "D", text: "Making the model fundamentally incapable of any tool use whatsoever." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Blocking a hard business-rule violation (A) and deterministic input/output validation (B) are both well-suited to hooks. Hooks complement, but don't fully replace, prompt engineering for behavior that doesn't need a hard guarantee (C overstates their role), and they aren't a mechanism for disabling tool use altogether (D).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "mcq",
    stem:
      "A developer commits their Claude API key directly into a public GitHub repository's source code. What is the appropriate response upon discovering this?",
    options: [
      { id: "A", text: "Immediately revoke/rotate the exposed key and update the application to use a new one, then remove the key from the codebase and use a secret-management approach (e.g., environment variables) going forward." },
      { id: "B", text: "Leave the exposed key in place, since it's unlikely anyone will notice it in the repository." },
      { id: "C", text: "Only remove the key from future commits, without rotating it, since removal from the latest code is sufficient." },
      { id: "D", text: "Make the repository private without taking any other action regarding the key itself." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A publicly exposed key must be treated as compromised — rotating it and adopting proper secret management going forward is the correct response. Leaving it in place (B) accepts real risk, removing it from future commits without rotating (C) ignores that it may already be cached/indexed publicly, and making the repo private after the fact (D) doesn't undo prior exposure or address the compromised key itself.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Identity, Secrets, and Key Management'",
    difficulty: "easy",
  },
  {
    id: "dev-ss-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "mcq",
    stem:
      "A team configures an MCP server's authentication token directly as a literal string inside a checked-in .mcp.json file. What is the recommended alternative?",
    options: [
      { id: "A", text: "Use environment variable expansion (e.g., ${GITHUB_TOKEN}) within the configuration file, so the actual secret value is supplied at runtime rather than committed to version control." },
      { id: "B", text: "There is no alternative; committing literal secret values into configuration files is the only supported approach." },
      { id: "C", text: "Share the literal token value with the entire team via a group chat instead of a config file." },
      { id: "D", text: "Remove authentication from the MCP server entirely to avoid needing to manage a token." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Environment variable expansion is exactly the supported mechanism for keeping secrets out of committed configuration — committing literal secrets (A's alternative, B) is the risky practice being corrected, sharing the token informally via chat (C) doesn't solve secure management, and removing authentication entirely (D) trades a credential-management problem for an access-control vulnerability.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Identity, Secrets, and Key Management'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "mcq",
    stem:
      "A developer wants to monitor which service accounts are actually being used to access Claude API resources, and flag unusual access patterns. What identity/security practice does this reflect?",
    options: [
      { id: "A", text: "Authorized access monitoring — tracking and reviewing who/what is accessing resources to detect anomalous or unauthorized use." },
      { id: "B", text: "This kind of monitoring is not possible or relevant for API-based access." },
      { id: "C", text: "Monitoring access patterns has no security value once initial authentication is set up." },
      { id: "D", text: "This practice is only relevant for consumer-facing applications, never for backend or service-to-service access." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Ongoing access monitoring for anomalies is a recognized identity/security practice, valuable well beyond the point of initial authentication — it's applicable to API access generally (B wrong), has real value beyond initial setup (C wrong), and is especially relevant to backend/service-to-service access where anomalies can otherwise go unnoticed (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Identity, Secrets, and Key Management'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "mcq",
    stem:
      "A team gives every developer on a project the same shared, all-access API key rather than individual, scoped credentials. What is a concern with this approach?",
    options: [
      { id: "A", text: "A shared, all-access credential makes it harder to attribute specific usage to individuals, harder to revoke access for just one person, and increases the blast radius if the single shared key is compromised." },
      { id: "B", text: "There is no concern; shared credentials are always the most secure and convenient option for any team." },
      { id: "C", text: "This concern only applies to teams larger than 100 people." },
      { id: "D", text: "Individual, scoped credentials provide no meaningful benefit over a shared key." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Shared, all-access credentials create real problems for attribution, targeted revocation, and blast-radius containment upon compromise — this isn't the more secure default (B wrong), the concern doesn't have a specific team-size threshold like this (C wrong), and individual scoped credentials do provide meaningful, real benefits (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Identity, Secrets, and Key Management'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer builds a tool that lets an agent execute arbitrary shell commands with no restriction on which commands are allowed, intending to add restrictions 'later.' What immediate security risk does this create?",
    options: [
      { id: "A", text: "An unrestricted shell-execution tool gives the agent (and, transitively, anything that can influence its behavior, including a successful prompt injection) the ability to run arbitrary, potentially destructive commands." },
      { id: "B", text: "There is no risk until the tool is actually used for the first time." },
      { id: "C", text: "This risk only matters in production environments, never in development or testing." },
      { id: "D", text: "Shell-execution tools are inherently safe regardless of what restrictions are in place." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "An unrestricted shell tool is a serious security exposure the moment it exists and is reachable, especially combined with the possibility of prompt injection influencing what commands get run — the risk exists before first use, not just after (B wrong), it matters in dev/test environments too, which often have less oversight (C wrong), and no shell tool is inherently safe without restriction (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "hard",
  },
  {
    id: "dev-ss-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A team's guardrail design has a single content filter that checks the final output before it's shown to the user, but nothing checks the input the user submitted or intermediate tool results. What gap does this represent?",
    options: [
      { id: "A", text: "The guardrail coverage is incomplete — checking only final output misses opportunities to catch problems earlier (malicious input, compromised intermediate tool results) before they propagate through the system." },
      { id: "B", text: "There is no gap; checking only the final output is always sufficient for complete safety coverage." },
      { id: "C", text: "Input and intermediate checks are redundant once a final output check exists." },
      { id: "D", text: "This gap only matters for text-based outputs, not for structured data." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Checking only the final output leaves earlier stages (input, intermediate tool results) unguarded, where problems could otherwise be caught earlier — a single late-stage check isn't sufficient coverage (B wrong), earlier checks aren't redundant since they catch different things (C wrong), and this gap applies regardless of output format (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer wants a hook to reject any tool call attempting to access files outside of a designated project directory, even if the model's reasoning concluded such access was appropriate. What does implementing this hook demonstrate?",
    options: [
      { id: "A", text: "Choosing deterministic, hook-based enforcement over relying on the model's own judgment for a security boundary that must hold regardless of the model's reasoning." },
      { id: "B", text: "A misunderstanding of hooks, since hooks cannot override what the model has already decided to do." },
      { id: "C", text: "An unnecessary restriction, since the model's own judgment is always sufficient for security-relevant boundaries." },
      { id: "D", text: "A configuration that has no bearing on actual security outcomes." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is exactly the pattern of choosing a guaranteed, hook-enforced boundary over relying on the model's own (probabilistic) judgment for something that must hold reliably — hooks absolutely can override or block a model's intended action (B wrong), relying purely on model judgment for hard security boundaries is not sufficient (C wrong), and this configuration has real, direct security impact (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "mcq",
    stem:
      "A developer needs different API keys for development, staging, and production environments. What is the security rationale for this separation?",
    options: [
      { id: "A", text: "Separate keys per environment limit the blast radius of a compromised or accidentally-exposed key (e.g., a dev key leaking doesn't expose production), and make it easier to apply environment-appropriate access controls and monitoring." },
      { id: "B", text: "There is no security rationale; using one key across all environments is equally secure and simpler." },
      { id: "C", text: "Separate keys are only needed if the environments use different programming languages." },
      { id: "D", text: "This separation is purely a cost-accounting convenience with no security benefit." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Environment-separated credentials limit blast radius and enable environment-appropriate controls — using one key everywhere is not equally secure (B wrong), this has nothing to do with programming language (C wrong), and while it can help with cost accounting too, the security rationale is real and separate from that convenience (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Identity, Secrets, and Key Management'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "scenario-multi-response",
    stem:
      "An agent processes documents uploaded by external users and has access to an internal tool that can send emails on the company's behalf. Which two design choices reduce the risk of this combination being exploited via prompt injection? (Select 2)",
    options: [
      { id: "A", text: "Require explicit human approval before any email is actually sent, rather than letting the agent send autonomously based on document content." },
      { id: "B", text: "Treat the uploaded document's content as untrusted data, never as a source of direct instructions the agent should blindly follow." },
      { id: "C", text: "Give the email tool full, unrestricted send access with no approval step, to maximize responsiveness." },
      { id: "D", text: "Trust that uploaded documents will never contain adversarial content, since this is assumed to be rare." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Requiring human approval before a sensitive action (A) and treating uploaded content as untrusted data rather than instructions (B) both directly reduce injection-driven exploitation risk. Removing the approval step for speed (C) and assuming adversarial content is rare enough to ignore (D) both increase risk instead of reducing it.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "hard",
  },
  {
    id: "dev-ss-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A developer disables a content-safety guardrail temporarily during internal testing to speed up iteration, then forgets to re-enable it before the feature ships to production. What broader lesson about safe deployment does this illustrate?",
    options: [
      { id: "A", text: "Guardrail configuration needs deliberate process controls (e.g., checklists, environment-specific config, code review) to prevent a temporary testing convenience from silently persisting into production." },
      { id: "B", text: "Disabling guardrails during testing is always harmless and never needs to be tracked or reverted." },
      { id: "C", text: "This kind of mistake is unique to Claude-powered applications and doesn't occur with other kinds of software." },
      { id: "D", text: "Guardrails, once configured at all, never need any further process attention." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is a process gap, not just a one-off mistake — deliberate controls (environment-specific configuration, review checklists) are what prevent a testing shortcut from silently reaching production. This kind of gap isn't harmless (B wrong) or unique to AI systems (C wrong — it's a familiar general software deployment risk), and guardrail configuration does need ongoing process attention (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "hard",
  },
  {
    id: "dev-ss-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S1,
    type: "mcq",
    stem:
      "A developer's RAG pipeline retrieves and inserts external document snippets into the prompt for every user query, and one retrieved snippet turns out to contain adversarial instructions targeting the system. What broader security lesson does this reinforce?",
    options: [
      { id: "A", text: "Any external content entering the prompt — whether from users, web pages, or a retrieval pipeline — should be treated as untrusted, regardless of its source or how it entered the system." },
      { id: "B", text: "Only content typed directly by an end user needs to be treated as untrusted; retrieved documents are inherently safe." },
      { id: "C", text: "RAG pipelines are immune to injection risk by design." },
      { id: "D", text: "This risk only applies if the retrieved documents are in a foreign language." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Injection risk applies to any externally-sourced content entering the prompt, not just content a user types directly — retrieved documents are not automatically safe (B wrong), RAG pipelines are not immune to this risk (C wrong), and the risk isn't gated by language (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S4,
    type: "mcq",
    stem:
      "A developer wants to verify that a given request to a sensitive internal tool actually came from an appropriately authenticated and authorized session, not just that it was well-formed. What identity practice addresses this?",
    options: [
      { id: "A", text: "Identity validation and authentication combined with access-level verification, confirming both who is making the request and whether they're permitted to perform this specific action." },
      { id: "B", text: "Assuming a well-formed request is always sufficient evidence of legitimate authorization." },
      { id: "C", text: "Skipping identity checks entirely for internal tools, since only external-facing tools need this consideration." },
      { id: "D", text: "Relying solely on the tool's name to imply that only authorized callers would ever invoke it." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Verifying identity and access level together is what actually confirms legitimate authorization — a well-formed request alone says nothing about who sent it or whether they're permitted (B wrong), internal tools need this scrutiny too, especially given how agents can be influenced (C wrong), and a tool's name provides no actual access control (D wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Identity, Secrets, and Key Management'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S3,
    type: "mcq",
    stem:
      "A developer is deciding whether a particular safety requirement should be implemented as a hook or as a system prompt instruction. What question is most useful for making this decision?",
    options: [
      { id: "A", text: "Does this requirement need a deterministic guarantee (regardless of model behavior), or is probabilistic, usually-followed guidance acceptable for this particular case?" },
      { id: "B", text: "Which implementation requires fewer total characters to write?" },
      { id: "C", text: "Hooks and prompt instructions are always interchangeable, so the choice has no real consequence either way." },
      { id: "D", text: "Whether the requirement can be phrased as a single short sentence." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "The determinism-vs-probabilistic-compliance question is the substantive factor that should drive this choice — character count (B) and sentence length (D) are irrelevant to the actual guarantee needed, and the two mechanisms are not interchangeable in the guarantees they provide (C wrong).",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: S2,
    type: "mcq",
    stem:
      "A team is preparing to launch a Claude-powered feature and wants to validate their security posture holistically before release. Which combination best reflects secure-by-design deployment practice?",
    options: [
      { id: "A", text: "Reviewing tool/agent access against least privilege, layering guardrails across input/output/tool-execution stages, and verifying identity and secret-management practices — rather than checking just one of these in isolation." },
      { id: "B", text: "Checking only whether the final output looks reasonable in a few manual tests, with no review of access scope, guardrail layering, or credential handling." },
      { id: "C", text: "Assuming that using Claude instead of a custom-built model automatically guarantees a secure deployment with no further review needed." },
      { id: "D", text: "Deferring all security considerations until after the feature has already launched to users." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A holistic review across access scope, layered guardrails, and identity/secret practices reflects genuine secure-by-design practice — a narrow output-only check (B) misses most of the actual risk surface, using Claude doesn't automatically guarantee security (C wrong), and deferring all consideration until after launch (D) is the opposite of a proactive, secure-by-design approach.",
    citation: "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "medium",
  },
];
