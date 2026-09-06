import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "dev-ss-001",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "AI Application Security",
    type: "mcq",
    stem:
      "A Claude-powered agent summarizes web pages submitted by users. One page contains hidden text instructing the model to ignore its instructions and reveal internal system details. What is the most effective mitigation?",
    options: [
      { id: "A", text: "Switch to a larger, more capable model, which is inherently immune to this kind of injection." },
      { id: "B", text: "Add a line to the system prompt politely asking users not to include malicious instructions in submitted pages." },
      { id: "C", text: "Treat retrieved web content as untrusted input, structurally separate it from trusted instructions, and use guardrails so injected instructions can't trigger sensitive actions." },
      { id: "D", text: "Raise the model's sampling temperature so its behavior becomes less predictable to an attacker." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Isolating untrusted content from trusted instructions and enforcing guardrails is the recognized, effective mitigation for prompt injection — a polite request (B) isn't an enforceable control, temperature (D) is irrelevant to injection resistance, and a larger model (A) is not inherently immune and can sometimes be more susceptible to well-crafted injected instructions, not less.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 (Security and Safety) — 'AI Application Security'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-002",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "AI Application Security",
    type: "mcq",
    stem:
      "An application logs full conversation transcripts, including any personal data users happen to paste in, with no redaction and indefinite retention. What security/privacy concern does this raise?",
    options: [
      { id: "A", text: "Indefinite, unredacted retention of logs that may contain personal or sensitive data increases exposure risk if those logs are ever breached or improperly accessed, and should be addressed with retention limits and/or redaction." },
      { id: "B", text: "Logging has no relationship to data leakage risk." },
      { id: "C", text: "None; logging full transcripts indefinitely is always risk-free regardless of content." },
      { id: "D", text: "This concern only applies if the application is used outside the user's home country." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Unredacted, indefinitely retained logs containing personal data represent a real, addressable data-leakage risk surface — this isn't risk-free (C), the concern isn't bounded by geography in this way (D), and logging practice is directly related to data-leakage risk (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-003",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "AI Application Security",
    type: "mcq",
    stem:
      "A developer wants to defend against jailbreak attempts where a user tries creative phrasing to get the model to bypass its safety guidelines. What is a foundational, layered approach to this?",
    options: [
      { id: "A", text: "Rely on a single client-side keyword filter as the only defense, since one well-chosen filter is always sufficient." },
      { id: "B", text: "Disable all safety-related instructions entirely to simplify the system prompt." },
      { id: "C", text: "Assume jailbreak attempts are purely a marketing concern with no real technical relevance." },
      { id: "D", text: "Combine multiple independent layers (careful system prompt design, output-side checks, and platform-level safety training) rather than relying on any single control, since no one layer is foolproof alone." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Layering independent defenses is the recognized approach since no single control is foolproof — relying on one keyword filter alone (A) is fragile, jailbreak defense is a genuine technical concern (C wrong), and removing safety instructions entirely (B) is the opposite of a defensive posture.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-004",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "AI Application Security",
    type: "scenario-multi-response",
    stem:
      "Which two practices directly reduce the risk of PII (personally identifiable information) leaking through a Claude-powered application? (Select 2)",
    options: [
      { id: "A", text: "Applying redaction or masking to sensitive fields before they're sent to the model or stored in logs." },
      { id: "B", text: "Including as much personal data as possible in every request, in case it becomes useful later." },
      { id: "C", text: "Storing all logs indefinitely with no review of what they contain." },
      { id: "D", text: "Minimizing what personal data is included in prompts and logs to only what's strictly necessary for the task." },
    ],
    correctOptionIds: ["A","D"],
    selectCount: 2,
    explanation:
      "Data minimization (D) and redaction/masking of sensitive fields (A) both directly reduce PII exposure risk. Including maximal personal data 'just in case' (B) and indefinite, unreviewed log retention (C) both increase exposure risk instead of reducing it.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-005",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "AI Application Security",
    type: "mcq",
    stem:
      "A support agent's tools include one that can look up any customer's data by ID, with no check on whether the currently authenticated user should have access to that particular customer's records. What security property is missing?",
    options: [
      { id: "A", text: "There is no missing property; authentication alone is always sufficient regardless of what resource is being accessed." },
      { id: "B", text: "Authorization — verifying that the authenticated caller actually has permission to access the specific resource being requested, not just that the tool call is well-formed." },
      { id: "C", text: "Model capability, since a more capable model would enforce this automatically." },
      { id: "D", text: "Encryption in transit, which is unrelated to this specific access-control gap." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "This is a classic missing authorization check — confirming identity (authentication) is different from confirming permission to access a specific resource (authorization). Encryption in transit (D) doesn't address this access-control gap, authentication alone isn't sufficient here (A wrong), and this is an application-level control, not something a more capable model would enforce on its own (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-006",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Guardrails and Safe Deployment",
    type: "mcq",
    stem:
      "A team is deploying a customer-facing Claude application and wants to reduce the chance that any single bypassed check compromises the whole system. What deployment principle addresses this?",
    options: [
      { id: "A", text: "Deploying with no guardrails at all, and addressing issues only after they're reported by users." },
      { id: "B", text: "Relying on exactly one comprehensive check, since adding more checks only adds unnecessary complexity with no security benefit." },
      { id: "C", text: "Guardrail layering — using multiple independent checks (input filtering, output review, tool-call restrictions) so a single point of failure doesn't compromise the whole system." },
      { id: "D", text: "Guardrail layering is only relevant to internal tools, never customer-facing ones." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Layering independent guardrails is exactly the principle that avoids a single point of failure — relying on one check alone (B) reintroduces that single point of failure, reactive-only deployment (A) accepts unnecessary risk, and this principle is especially relevant to customer-facing systems, not just internal ones (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "easy",
  },
  {
    id: "dev-ss-007",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Guardrails and Safe Deployment",
    type: "mcq",
    stem:
      "A developer grants an agent broad access to a company's entire file system 'in case it's needed later,' even though the agent's actual task only requires reading files in one specific directory. What secure-by-design principle is being violated?",
    options: [
      { id: "A", text: "Least privilege — granting only the access actually needed for a role or task, rather than broad access justified by hypothetical future convenience." },
      { id: "B", text: "Least privilege is only relevant to network-level security, not file-system access." },
      { id: "C", text: "There is no violation; granting maximum access by default is always the safest configuration." },
      { id: "D", text: "This principle only applies to human user accounts, never to agents or automated systems." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Granting broad access beyond what a task actually requires, for hypothetical future convenience, is exactly what least privilege warns against — maximal-access-by-default is not the safer choice (C wrong), least privilege applies to agents and automated systems just as much as human accounts (D wrong), and it's a general access-control principle, not limited to network security (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-008",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Guardrails and Safe Deployment",
    type: "mcq",
    stem:
      "A team's content policy for a public-facing chatbot is documented only in an internal wiki page, with no actual enforcement mechanism built into the application itself. What is the concern with this approach?",
    options: [
      { id: "A", text: "Content policies are purely a legal concern with no relevance to application design." },
      { id: "B", text: "There is no concern, since documenting a policy is always functionally equivalent to enforcing it." },
      { id: "C", text: "This concern only applies to policies about copyrighted material." },
      { id: "D", text: "A documented-only policy with no technical enforcement relies entirely on the model's probabilistic compliance, with nothing to guarantee the policy is actually followed in practice." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A policy that exists only as documentation, with no technical enforcement, depends entirely on probabilistic model compliance rather than a guaranteed control — documentation is not equivalent to enforcement (B wrong), content policy is directly relevant to application design and safe deployment (A wrong), and this concern applies broadly, not just to copyright (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-009",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Guardrails and Safe Deployment",
    type: "mcq",
    stem:
      "A developer wants to ensure that even if a prompt injection succeeds in getting the model to 'want' to call a sensitive tool, the action still can't actually happen without proper authorization. What deployment approach addresses this?",
    options: [
      { id: "A", text: "Remove all tools from the application entirely to eliminate this category of risk." },
      { id: "B", text: "Enforce authorization checks and guardrails at the tool-execution layer itself, independent of what the model decides, so a successful injection at the prompt level still can't bypass execution-level controls." },
      { id: "C", text: "Rely solely on the system prompt telling the model not to call sensitive tools without authorization, with no enforcement elsewhere." },
      { id: "D", text: "Assume prompt injection can never succeed, so this scenario doesn't need to be planned for." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Defense in depth means the execution layer itself should enforce authorization independent of the model's decision — relying solely on prompt-level instructions (C) is exactly the layer that injection targets and can bypass, assuming injection is impossible (D) is not a safe assumption, and removing all tools (A) is a disproportionate response when a scoped authorization control would suffice.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "hard",
  },
  {
    id: "dev-ss-010",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Claude Hooks",
    type: "mcq",
    stem:
      "A developer wants a business rule ('never allow a delete_record tool call for records older than a certain protected threshold') to be enforced with certainty, not just as guidance the model usually follows. What Claude hooks pattern fits this?",
    options: [
      { id: "A", text: "A stronger system prompt instruction with no hook, since prompt wording alone can provide the same guarantee as a hook." },
      { id: "B", text: "There is no way to guarantee this kind of business rule in Claude Code or the Agent SDK." },
      { id: "C", text: "A hook that intercepts the delete_record tool call before execution and blocks it programmatically when the rule's condition is met, rather than relying on prompt instructions alone." },
      { id: "D", text: "A few-shot example demonstrating the rule, with no programmatic enforcement." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A hook that intercepts and blocks the tool call programmatically is exactly the mechanism for a guaranteed rule, unlike prompt wording (A) or few-shot examples (D), which remain probabilistic guidance rather than a guarantee — this kind of enforcement is a well-supported capability (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "easy",
  },
  {
    id: "dev-ss-011",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Claude Hooks",
    type: "mcq",
    stem:
      "What is the key distinction between using a hook versus relying on prompt instructions for a safety control?",
    options: [
      { id: "A", text: "A hook provides a deterministic guarantee that runs regardless of what the model decides, while prompt instructions offer probabilistic guidance the model usually — but not always guaranteed to — follow." },
      { id: "B", text: "Hooks can only be used for logging, never for blocking or modifying behavior." },
      { id: "C", text: "Prompt instructions are always more reliable than hooks for enforcing safety rules." },
      { id: "D", text: "Hooks and prompt instructions provide identical guarantees with no meaningful difference." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This is exactly the distinction that matters for choosing an enforcement mechanism for a hard safety rule — the two are not equivalent (D wrong), prompt instructions are the less reliable of the two for guarantees, not more (C wrong), and hooks can block or modify actions, not just log them (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "easy",
  },
  {
    id: "dev-ss-012",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Claude Hooks",
    type: "mcq",
    stem:
      "A developer implements a PreToolUse-style hook that checks whether a proposed file-deletion path falls within an allowed directory before permitting the deletion to proceed. What kind of safety control does this represent?",
    options: [
      { id: "A", text: "A check that only logs the attempted deletion without ever blocking it." },
      { id: "B", text: "A purely cosmetic check with no actual effect on whether the deletion occurs." },
      { id: "C", text: "A check that can be bypassed simply by the model rephrasing its request." },
      { id: "D", text: "A deterministic guardrail that prevents a destructive action outside an approved scope, regardless of what the model's own reasoning concluded." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A hook that actually gates whether the destructive action proceeds is a real, deterministic guardrail — it has real effect (B wrong), can block, not just log (A wrong), and being enforced at the execution layer rather than relying on prompt interpretation, it isn't circumvented merely by how the model phrases its request (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-013",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Claude Hooks",
    type: "mcq",
    stem:
      "A developer wants to log every tool call an agent makes in production for later audit, without changing the agent's actual behavior. What hook approach fits this need?",
    options: [
      { id: "A", text: "Hooks can only block actions; they cannot be used for passive observation or logging." },
      { id: "B", text: "A hook that observes and logs tool calls (e.g., at a PreToolUse or PostToolUse point) without blocking or modifying them, purely for audit purposes." },
      { id: "C", text: "This is not achievable without modifying the agent's core reasoning behavior." },
      { id: "D", text: "This requires removing all of the agent's tools to achieve logging." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A hook can passively observe and log without altering behavior — this doesn't require removing tools (D), hooks support observation as well as blocking/modification (A wrong), and this is achievable without touching the model's own reasoning (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-014",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Claude Hooks",
    type: "scenario-multi-response",
    stem:
      "Which two are appropriate uses of Claude hooks for safety and guardrails? (Select 2)",
    options: [
      { id: "A", text: "Replacing all prompt engineering entirely, since hooks alone are sufficient for every aspect of desired behavior." },
      { id: "B", text: "Blocking a tool call that violates a hard business rule (e.g., a refund above an approved threshold), regardless of what the model decided." },
      { id: "C", text: "Making the model fundamentally incapable of any tool use whatsoever." },
      { id: "D", text: "Normalizing or validating tool inputs/outputs before they're used further, to catch malformed or inconsistent data deterministically." },
    ],
    correctOptionIds: ["B","D"],
    selectCount: 2,
    explanation:
      "Blocking a hard business-rule violation (B) and deterministic input/output validation (D) are both well-suited to hooks. Hooks complement, but don't fully replace, prompt engineering for behavior that doesn't need a hard guarantee (A overstates their role), and they aren't a mechanism for disabling tool use altogether (C).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-015",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Identity, Secrets, and Key Management",
    type: "mcq",
    stem:
      "A developer commits their Claude API key directly into a public GitHub repository's source code. What is the appropriate response upon discovering this?",
    options: [
      { id: "A", text: "Only remove the key from future commits, without rotating it, since removal from the latest code is sufficient." },
      { id: "B", text: "Make the repository private without taking any other action regarding the key itself." },
      { id: "C", text: "Immediately revoke/rotate the exposed key and update the application to use a new one, then remove the key from the codebase and use a secret-management approach (e.g., environment variables) going forward." },
      { id: "D", text: "Leave the exposed key in place, since it's unlikely anyone will notice it in the repository." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A publicly exposed key must be treated as compromised — rotating it and adopting proper secret management going forward is the correct response. Leaving it in place (D) accepts real risk, removing it from future commits without rotating (A) ignores that it may already be cached/indexed publicly, and making the repo private after the fact (B) doesn't undo prior exposure or address the compromised key itself.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Identity, Secrets, and Key Management'",
    difficulty: "easy",
  },
  {
    id: "dev-ss-016",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Identity, Secrets, and Key Management",
    type: "mcq",
    stem:
      "A team configures an MCP server's authentication token directly as a literal string inside a checked-in .mcp.json file. What is the recommended alternative?",
    options: [
      { id: "A", text: "Use environment variable expansion (e.g., ${GITHUB_TOKEN}) within the configuration file, so the actual secret value is supplied at runtime rather than committed to version control." },
      { id: "B", text: "Remove authentication from the MCP server entirely to avoid needing to manage a token." },
      { id: "C", text: "There is no alternative; committing literal secret values into configuration files is the only supported approach." },
      { id: "D", text: "Share the literal token value with the entire team via a group chat instead of a config file." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Environment variable expansion is exactly the supported mechanism for keeping secrets out of committed configuration — committing literal secrets (A's alternative, C) is the risky practice being corrected, sharing the token informally via chat (D) doesn't solve secure management, and removing authentication entirely (B) trades a credential-management problem for an access-control vulnerability.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Identity, Secrets, and Key Management'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-017",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Identity, Secrets, and Key Management",
    type: "mcq",
    stem:
      "A developer wants to monitor which service accounts are actually being used to access Claude API resources, and flag unusual access patterns. What identity/security practice does this reflect?",
    options: [
      { id: "A", text: "This practice is only relevant for consumer-facing applications, never for backend or service-to-service access." },
      { id: "B", text: "Monitoring access patterns has no security value once initial authentication is set up." },
      { id: "C", text: "This kind of monitoring is not possible or relevant for API-based access." },
      { id: "D", text: "Authorized access monitoring — tracking and reviewing who/what is accessing resources to detect anomalous or unauthorized use." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Ongoing access monitoring for anomalies is a recognized identity/security practice, valuable well beyond the point of initial authentication — it's applicable to API access generally (C wrong), has real value beyond initial setup (B wrong), and is especially relevant to backend/service-to-service access where anomalies can otherwise go unnoticed (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Identity, Secrets, and Key Management'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-018",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Identity, Secrets, and Key Management",
    type: "mcq",
    stem:
      "A team gives every developer on a project the same shared, all-access API key rather than individual, scoped credentials. What is a concern with this approach?",
    options: [
      { id: "A", text: "There is no concern; shared credentials are always the most secure and convenient option for any team." },
      { id: "B", text: "A shared, all-access credential makes it harder to attribute specific usage to individuals, harder to revoke access for just one person, and increases the blast radius if the single shared key is compromised." },
      { id: "C", text: "This concern only applies to teams larger than 100 people." },
      { id: "D", text: "Individual, scoped credentials provide no meaningful benefit over a shared key." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Shared, all-access credentials create real problems for attribution, targeted revocation, and blast-radius containment upon compromise — this isn't the more secure default (A wrong), the concern doesn't have a specific team-size threshold like this (C wrong), and individual scoped credentials do provide meaningful, real benefits (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Identity, Secrets, and Key Management'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-019",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "AI Application Security",
    type: "mcq",
    stem:
      "A developer builds a tool that lets an agent execute arbitrary shell commands with no restriction on which commands are allowed, intending to add restrictions 'later.' What immediate security risk does this create?",
    options: [
      { id: "A", text: "This risk only matters in production environments, never in development or testing." },
      { id: "B", text: "Shell-execution tools are inherently safe regardless of what restrictions are in place." },
      { id: "C", text: "An unrestricted shell-execution tool gives the agent (and, transitively, anything that can influence its behavior, including a successful prompt injection) the ability to run arbitrary, potentially destructive commands." },
      { id: "D", text: "There is no risk until the tool is actually used for the first time." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "An unrestricted shell tool is a serious security exposure the moment it exists and is reachable, especially combined with the possibility of prompt injection influencing what commands get run — the risk exists before first use, not just after (D wrong), it matters in dev/test environments too, which often have less oversight (A wrong), and no shell tool is inherently safe without restriction (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "hard",
  },
  {
    id: "dev-ss-020",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Guardrails and Safe Deployment",
    type: "mcq",
    stem:
      "A team's guardrail design has a single content filter that checks the final output before it's shown to the user, but nothing checks the input the user submitted or intermediate tool results. What gap does this represent?",
    options: [
      { id: "A", text: "The guardrail coverage is incomplete — checking only final output misses opportunities to catch problems earlier (malicious input, compromised intermediate tool results) before they propagate through the system." },
      { id: "B", text: "This gap only matters for text-based outputs, not for structured data." },
      { id: "C", text: "Input and intermediate checks are redundant once a final output check exists." },
      { id: "D", text: "There is no gap; checking only the final output is always sufficient for complete safety coverage." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Checking only the final output leaves earlier stages (input, intermediate tool results) unguarded, where problems could otherwise be caught earlier — a single late-stage check isn't sufficient coverage (D wrong), earlier checks aren't redundant since they catch different things (C wrong), and this gap applies regardless of output format (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-021",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Claude Hooks",
    type: "mcq",
    stem:
      "A developer wants a hook to reject any tool call attempting to access files outside of a designated project directory, even if the model's reasoning concluded such access was appropriate. What does implementing this hook demonstrate?",
    options: [
      { id: "A", text: "A configuration that has no bearing on actual security outcomes." },
      { id: "B", text: "A misunderstanding of hooks, since hooks cannot override what the model has already decided to do." },
      { id: "C", text: "An unnecessary restriction, since the model's own judgment is always sufficient for security-relevant boundaries." },
      { id: "D", text: "Choosing deterministic, hook-based enforcement over relying on the model's own judgment for a security boundary that must hold regardless of the model's reasoning." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "This is exactly the pattern of choosing a guaranteed, hook-enforced boundary over relying on the model's own (probabilistic) judgment for something that must hold reliably — hooks absolutely can override or block a model's intended action (B wrong), relying purely on model judgment for hard security boundaries is not sufficient (C wrong), and this configuration has real, direct security impact (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-022",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Identity, Secrets, and Key Management",
    type: "mcq",
    stem:
      "A developer needs different API keys for development, staging, and production environments. What is the security rationale for this separation?",
    options: [
      { id: "A", text: "This separation is purely a cost-accounting convenience with no security benefit." },
      { id: "B", text: "Separate keys per environment limit the blast radius of a compromised or accidentally-exposed key (e.g., a dev key leaking doesn't expose production), and make it easier to apply environment-appropriate access controls and monitoring." },
      { id: "C", text: "There is no security rationale; using one key across all environments is equally secure and simpler." },
      { id: "D", text: "Separate keys are only needed if the environments use different programming languages." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Environment-separated credentials limit blast radius and enable environment-appropriate controls — using one key everywhere is not equally secure (C wrong), this has nothing to do with programming language (D wrong), and while it can help with cost accounting too, the security rationale is real and separate from that convenience (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Identity, Secrets, and Key Management'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-023",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "AI Application Security",
    type: "scenario-multi-response",
    stem:
      "An agent processes documents uploaded by external users and has access to an internal tool that can send emails on the company's behalf. Which two design choices reduce the risk of this combination being exploited via prompt injection? (Select 2)",
    options: [
      { id: "A", text: "Give the email tool full, unrestricted send access with no approval step, to maximize responsiveness." },
      { id: "B", text: "Require explicit human approval before any email is actually sent, rather than letting the agent send autonomously based on document content." },
      { id: "C", text: "Treat the uploaded document's content as untrusted data, never as a source of direct instructions the agent should blindly follow." },
      { id: "D", text: "Trust that uploaded documents will never contain adversarial content, since this is assumed to be rare." },
    ],
    correctOptionIds: ["B","C"],
    selectCount: 2,
    explanation:
      "Requiring human approval before a sensitive action (B) and treating uploaded content as untrusted data rather than instructions (C) both directly reduce injection-driven exploitation risk. Removing the approval step for speed (A) and assuming adversarial content is rare enough to ignore (D) both increase risk instead of reducing it.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "hard",
  },
  {
    id: "dev-ss-024",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Guardrails and Safe Deployment",
    type: "mcq",
    stem:
      "A developer disables a content-safety guardrail temporarily during internal testing to speed up iteration, then forgets to re-enable it before the feature ships to production. What broader lesson about safe deployment does this illustrate?",
    options: [
      { id: "A", text: "Disabling guardrails during testing is always harmless and never needs to be tracked or reverted." },
      { id: "B", text: "This kind of mistake is unique to Claude-powered applications and doesn't occur with other kinds of software." },
      { id: "C", text: "Guardrail configuration needs deliberate process controls (e.g., checklists, environment-specific config, code review) to prevent a temporary testing convenience from silently persisting into production." },
      { id: "D", text: "Guardrails, once configured at all, never need any further process attention." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "This is a process gap, not just a one-off mistake — deliberate controls (environment-specific configuration, review checklists) are what prevent a testing shortcut from silently reaching production. This kind of gap isn't harmless (A wrong) or unique to AI systems (B wrong — it's a familiar general software deployment risk), and guardrail configuration does need ongoing process attention (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "hard",
  },
  {
    id: "dev-ss-025",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "AI Application Security",
    type: "mcq",
    stem:
      "A developer's RAG pipeline retrieves and inserts external document snippets into the prompt for every user query, and one retrieved snippet turns out to contain adversarial instructions targeting the system. What broader security lesson does this reinforce?",
    options: [
      { id: "A", text: "Any external content entering the prompt — whether from users, web pages, or a retrieval pipeline — should be treated as untrusted, regardless of its source or how it entered the system." },
      { id: "B", text: "This risk only applies if the retrieved documents are in a foreign language." },
      { id: "C", text: "RAG pipelines are immune to injection risk by design." },
      { id: "D", text: "Only content typed directly by an end user needs to be treated as untrusted; retrieved documents are inherently safe." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Injection risk applies to any externally-sourced content entering the prompt, not just content a user types directly — retrieved documents are not automatically safe (D wrong), RAG pipelines are not immune to this risk (C wrong), and the risk isn't gated by language (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'AI Application Security'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-026",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Identity, Secrets, and Key Management",
    type: "mcq",
    stem:
      "A developer wants to verify that a given request to a sensitive internal tool actually came from an appropriately authenticated and authorized session, not just that it was well-formed. What identity practice addresses this?",
    options: [
      { id: "A", text: "Relying solely on the tool's name to imply that only authorized callers would ever invoke it." },
      { id: "B", text: "Skipping identity checks entirely for internal tools, since only external-facing tools need this consideration." },
      { id: "C", text: "Assuming a well-formed request is always sufficient evidence of legitimate authorization." },
      { id: "D", text: "Identity validation and authentication combined with access-level verification, confirming both who is making the request and whether they're permitted to perform this specific action." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Verifying identity and access level together is what actually confirms legitimate authorization — a well-formed request alone says nothing about who sent it or whether they're permitted (C wrong), internal tools need this scrutiny too, especially given how agents can be influenced (B wrong), and a tool's name provides no actual access control (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Identity, Secrets, and Key Management'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-027",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Claude Hooks",
    type: "mcq",
    stem:
      "A developer is deciding whether a particular safety requirement should be implemented as a hook or as a system prompt instruction. What question is most useful for making this decision?",
    options: [
      { id: "A", text: "Which implementation requires fewer total characters to write?" },
      { id: "B", text: "Does this requirement need a deterministic guarantee (regardless of model behavior), or is probabilistic, usually-followed guidance acceptable for this particular case?" },
      { id: "C", text: "Whether the requirement can be phrased as a single short sentence." },
      { id: "D", text: "Hooks and prompt instructions are always interchangeable, so the choice has no real consequence either way." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "The determinism-vs-probabilistic-compliance question is the substantive factor that should drive this choice — character count (A) and sentence length (C) are irrelevant to the actual guarantee needed, and the two mechanisms are not interchangeable in the guarantees they provide (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Claude Hooks'",
    difficulty: "medium",
  },
  {
    id: "dev-ss-028",
    certificationSlug: "developer-foundations",
    domain: "Security and Safety",
    taskStatement: "Guardrails and Safe Deployment",
    type: "mcq",
    stem:
      "A team is preparing to launch a Claude-powered feature and wants to validate their security posture holistically before release. Which combination best reflects secure-by-design deployment practice?",
    options: [
      { id: "A", text: "Checking only whether the final output looks reasonable in a few manual tests, with no review of access scope, guardrail layering, or credential handling." },
      { id: "B", text: "Deferring all security considerations until after the feature has already launched to users." },
      { id: "C", text: "Reviewing tool/agent access against least privilege, layering guardrails across input/output/tool-execution stages, and verifying identity and secret-management practices — rather than checking just one of these in isolation." },
      { id: "D", text: "Assuming that using Claude instead of a custom-built model automatically guarantees a secure deployment with no further review needed." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A holistic review across access scope, layered guardrails, and identity/secret practices reflects genuine secure-by-design practice — a narrow output-only check (A) misses most of the actual risk surface, using Claude doesn't automatically guarantee security (D wrong), and deferring all consideration until after launch (B) is the opposite of a proactive, secure-by-design approach.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 7 — 'Guardrails and Safe Deployment'",
    difficulty: "medium",
  },
];
