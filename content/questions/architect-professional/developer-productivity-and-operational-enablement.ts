import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Developer Productivity & Operational Enablement" as const;
const CERT = "architect-professional" as const;
const O1 = "Configure Claude tools and environments for teams (e.g., Claude Code)" as const;
const O2 = "Improve developer workflows using AI-assisted tooling" as const;
const O3 = "Support debugging and operational issue resolution" as const;

export const questions: QuestionInput[] = [
  {
    id: "arch-p-dpoe-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "An architect is rolling out Claude Code across an engineering organization with dozens of repositories, each with different conventions, and wants consistent behavior without every developer manually re-explaining project conventions each session. What configuration approach addresses this?",
    options: [
      { id: "A", text: "Establish per-repository configuration (e.g., CLAUDE.md project instructions, shared settings) so relevant conventions are automatically available to every developer working in that repository, rather than relying on manual, repeated explanation." },
      { id: "B", text: "Require every developer to manually re-type the full set of project conventions into the chat at the start of every single session, indefinitely." },
      { id: "C", text: "There is no way to configure Claude Code to reflect project-specific conventions; every session must start from a blank, unconfigured state." },
      { id: "D", text: "Consistency of behavior across developers has no relationship to how a team's tools are configured." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Persistent, per-repository configuration (like project instruction files and shared settings) is exactly what removes the need for manual, repeated explanation of the same conventions — relying on manual re-explanation every session (B) doesn't scale and is exactly the problem being solved. This kind of configuration capability does exist (C wrong), and configuration approach directly affects consistency across a team (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 (Developer Productivity & Operational Enablement) — 'Configure Claude tools and environments for teams (e.g., Claude Code)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-dpoe-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A team wants certain destructive or sensitive operations (e.g., force-pushing, deleting branches, modifying production configuration) to require explicit human approval when performed through an AI coding assistant, rather than being executed automatically. What configuration capability addresses this?",
    options: [
      { id: "A", text: "Permission/approval configuration that requires explicit confirmation for specified categories of risky or irreversible actions, rather than allowing every action to proceed automatically without a checkpoint." },
      { id: "B", text: "There is no way to configure different approval requirements for different categories of action; every action must always be either fully automatic or fully manual with no middle ground." },
      { id: "C", text: "The only way to prevent an unwanted destructive action is to remove all tool access from the assistant entirely." },
      { id: "D", text: "Permission configuration has no bearing on whether a destructive action requires human approval before executing." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Permission/approval configuration for specific risky action categories is exactly the mechanism that adds a human checkpoint for destructive operations without blocking everything else — this granularity is available, not an all-or-nothing choice (B wrong). Removing all tool access (C) is a disproportionate response when scoped permissions can address the actual concern, and permission configuration directly determines whether approval is required (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Configure Claude tools and environments for teams (e.g., Claude Code)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "scenario-multi-response",
    stem:
      "Which two configuration practices support a well-governed, consistent Claude Code rollout across a development team? (Select 2)",
    options: [
      { id: "A", text: "Define shared, version-controlled project instructions (e.g., a CLAUDE.md file) that codify conventions relevant to that repository for every developer working in it." },
      { id: "B", text: "Configure explicit approval requirements for categories of destructive or high-risk actions, rather than allowing every action to run automatically." },
      { id: "C", text: "Let each developer configure entirely ad hoc, undocumented settings with no consistency across the team." },
      { id: "D", text: "Avoid any configuration whatsoever, relying purely on each developer's memory of project conventions." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Shared, version-controlled project instructions (A) and explicit approval gating for risky actions (B) both support a consistent, well-governed rollout. Fully ad hoc, undocumented per-developer settings (C) and relying purely on memory with no configuration at all (D) both undermine consistency and governance.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Configure Claude tools and environments for teams (e.g., Claude Code)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-dpoe-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A team configures Claude Code with an extremely broad set of auto-approved tool permissions 'to reduce friction,' including permissions to modify files well outside the scope of typical development tasks. What operational concern does this raise?",
    options: [
      { id: "A", text: "Overly broad auto-approved permissions reduce the safety checkpoints that would otherwise catch an unintended or overly broad action; permission scope should be matched to what's actually needed for typical tasks, balancing friction reduction against operational risk." },
      { id: "B", text: "There is no concern; broader auto-approved permissions are always strictly better regardless of the operational risk they introduce." },
      { id: "C", text: "Permission scope should always be configured as narrowly as technically possible, with zero auto-approved actions ever permitted for any team." },
      { id: "D", text: "How broadly permissions are configured has no bearing on the operational risk of a development tool." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Overly broad auto-approval removes safety checkpoints that would otherwise catch an unintended action — the goal is to match scope to actual need, balancing friction against risk, not to maximize breadth for convenience (B wrong). Some auto-approval for routine, low-risk actions is a reasonable friction reduction, so zero auto-approval for any team (C) overstates the fix, and permission scope directly affects operational risk (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Configure Claude tools and environments for teams (e.g., Claude Code)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "An architect is setting up Claude Code for a team that works across multiple distinct projects, each needing different MCP server connections (one project needs a database tool, another needs a deployment tool). What is the most maintainable configuration approach?",
    options: [
      { id: "A", text: "Scope MCP server configuration per-project (e.g., per-repository configuration) so each project has access to the tools relevant to it, rather than a single global configuration granting every tool to every project regardless of relevance." },
      { id: "B", text: "Configure every possible MCP server globally for every project, regardless of whether a given project actually needs that specific tool." },
      { id: "C", text: "MCP server configuration cannot be scoped per-project under any circumstances; it is always a single global setting shared identically by every project." },
      { id: "D", text: "How MCP servers are scoped has no bearing on either maintainability or the operational risk of unrelated tool access." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Per-project MCP configuration keeps each project's tool access relevant and maintainable, avoiding both clutter and unnecessary cross-project exposure — a single global configuration granting every tool everywhere (B) reintroduces the capability-bloat problem. Per-project scoping is available, not something that's impossible (C wrong), and scoping approach directly affects both maintainability and risk (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Configure Claude tools and environments for teams (e.g., Claude Code)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A team's Claude Code setup works well for a single developer but breaks down when scaled to a 40-person engineering organization, since there's no standard way to share useful custom commands, hooks, or configuration patterns across the team. What organizational practice addresses this scaling problem?",
    options: [
      { id: "A", text: "Establish a shared, version-controlled repository or standard for distributing reusable configuration (custom commands, hooks, settings) across the team, rather than leaving each developer to reinvent their own setup independently." },
      { id: "B", text: "Individual, undocumented developer configurations are always just as scalable as a shared, standardized configuration approach, regardless of team size." },
      { id: "C", text: "The only fix at this scale is to stop using Claude Code as a team tool entirely and revert to fully manual workflows." },
      { id: "D", text: "How configuration is shared and standardized across a team has no bearing on scaling effectiveness." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A shared, version-controlled way to distribute reusable configuration is exactly what scales useful patterns across a large team, rather than each developer reinventing them independently — individual configs alone don't scale the same way at this size (B wrong). Abandoning the tool entirely (C) is a disproportionate response to a configuration-sharing gap, and how configuration is shared directly affects scaling effectiveness (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Configure Claude tools and environments for teams (e.g., Claude Code)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A security-conscious team wants developers using Claude Code to be prevented from accidentally committing secrets (API keys, credentials) that might appear in generated code or configuration. What is an appropriate control to configure?",
    options: [
      { id: "A", text: "A pre-commit hook or equivalent automated check that scans for secret-like patterns before a commit completes, providing a safety net regardless of whether a human or an AI assistant introduced the change." },
      { id: "B", text: "There is no way to configure any automated safeguard against accidentally committed secrets; this can only ever be prevented through developer vigilance alone." },
      { id: "C", text: "The only solution is to prevent Claude Code from ever writing to any file that could possibly contain a credential, which would make the tool unusable for its intended purpose." },
      { id: "D", text: "Automated secret-scanning has no relevance to a workflow that involves an AI coding assistant." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "An automated pre-commit secret-scanning check is a practical, generally-applicable safeguard that catches accidental credential commits regardless of source (human or AI-assisted) — this kind of automated check is available and effective, not solely reliant on vigilance (B wrong). Blocking the tool from writing to any potentially credential-bearing file (C) would make it impractically limited, and this kind of safeguard is very relevant to AI-assisted workflows (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Configure Claude tools and environments for teams (e.g., Claude Code)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "An architect configuring Claude Code for a regulated organization needs to ensure a record exists of what actions an AI assistant took in a given session, for audit purposes. What consideration is most relevant to this requirement?",
    options: [
      { id: "A", text: "Whether session activity (commands run, files changed, tool calls made) can be logged or exported in a way that supports the organization's audit and traceability requirements, and configuring accordingly." },
      { id: "B", text: "Audit requirements are never relevant to how an AI coding assistant is configured for a regulated organization." },
      { id: "C", text: "The only way to satisfy an audit requirement is to prohibit the use of any AI coding assistant entirely in a regulated environment." },
      { id: "D", text: "Session logging configuration has no bearing on whether an audit or traceability requirement can actually be met." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Ensuring session activity can be logged or exported to meet audit/traceability requirements is exactly the relevant configuration consideration here — audit needs are very relevant to how a tool like this gets configured in a regulated context (B wrong). A blanket prohibition (C) is a disproportionate response when logging/traceability can be configured to meet the requirement, and logging configuration directly determines whether the audit requirement is satisfiable (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Configure Claude tools and environments for teams (e.g., Claude Code)'",
    difficulty: "hard",
  },
  {
    id: "arch-p-dpoe-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "scenario-multi-response",
    stem:
      "Which two considerations should shape how an architect scopes tool/MCP permissions for a Claude Code deployment in a security-conscious organization? (Select 2)",
    options: [
      { id: "A", text: "Whether the permission set matches what's actually needed for the team's typical tasks, avoiding unnecessary breadth." },
      { id: "B", text: "Whether destructive or high-risk categories of action require an explicit human approval step rather than running automatically." },
      { id: "C", text: "Whether the configuration is the most visually elaborate one technically possible, regardless of its actual security implications." },
      { id: "D", text: "Whether every developer can be granted identical, maximally broad permissions with no differentiation by role or project need." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Matching permission scope to actual task needs (A) and requiring approval for high-risk action categories (B) are both sound, security-conscious configuration considerations. Visual elaborateness (C) is irrelevant to security, and granting maximally broad, undifferentiated permissions to everyone (D) reintroduces unnecessary risk.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Configure Claude tools and environments for teams (e.g., Claude Code)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-dpoe-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A team has configured identical Claude Code settings for both their experimental prototyping repository and their production-critical payments repository, reasoning that 'consistency is always best.' What is the flaw in this reasoning?",
    options: [
      { id: "A", text: "Different repositories can carry very different risk profiles; a payments-critical repository likely warrants stricter permission and approval configuration than an experimental prototype, so configuration should be matched to each repository's actual risk level rather than made uniform for its own sake." },
      { id: "B", text: "Identical configuration across every repository, regardless of its actual risk profile, is always the objectively correct approach with no exceptions." },
      { id: "C", text: "Configuration should always vary randomly across repositories with no relationship to their actual risk level." },
      { id: "D", text: "Repository risk profile has no bearing on what configuration is appropriate for it." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Different repositories genuinely carry different risk profiles, so configuration should track that — a payments-critical repository plausibly warrants stricter approval gating than an experimental prototype. Uniform configuration regardless of risk (B) is exactly the flawed reasoning here, configuration shouldn't vary randomly either (C), and risk profile is directly what should drive configuration choices (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Configure Claude tools and environments for teams (e.g., Claude Code)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A development team spends significant time on repetitive, well-defined tasks (writing boilerplate tests, updating documentation to match code changes) that follow a predictable pattern. How can an architect improve developer productivity using AI-assisted tooling here?",
    options: [
      { id: "A", text: "Introduce reusable, well-scoped automation (e.g., custom commands or Skills) for these predictable, repetitive tasks, freeing developer time for work that requires genuine judgment rather than pattern repetition." },
      { id: "B", text: "AI-assisted tooling provides no benefit for repetitive, well-defined tasks and should only ever be used for genuinely novel work." },
      { id: "C", text: "The only way to improve productivity here is to hire additional developers to handle the repetitive work manually." },
      { id: "D", text: "Task predictability has no bearing on whether AI-assisted tooling can meaningfully improve developer workflow efficiency." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Predictable, repetitive tasks are exactly where reusable automation (custom commands, Skills) provides strong leverage, freeing developer time for judgment-heavy work — this is actually where AI-assisted tooling tends to help most, not least (B wrong). Hiring more people to do repetitive work manually (C) is a much more expensive fix for a problem automation can address, and task predictability is directly relevant to where this kind of tooling helps (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Improve developer workflows using AI-assisted tooling'",
    difficulty: "easy",
  },
  {
    id: "arch-p-dpoe-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A team adopts an AI coding assistant but sees no measurable productivity improvement after several months, because developers use it inconsistently with no shared practices around what tasks it's well-suited for for or how to structure requests to it effectively. What is the most likely missing element?",
    options: [
      { id: "A", text: "Team-level enablement — shared guidance, examples, and practices for how and when to use the tool effectively — rather than assuming adoption alone, without any shared practice, will translate into productivity gains." },
      { id: "B", text: "Simply making the tool available to a team, with no further enablement of any kind, is always sufficient to guarantee measurable productivity gains." },
      { id: "C", text: "AI-assisted tooling can never meaningfully improve developer productivity under any circumstances, regardless of how it's introduced." },
      { id: "D", text: "How consistently and effectively a team uses a tool has no bearing on whether it produces a measurable productivity benefit." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Shared enablement — guidance, examples, and practices for effective use — is typically the missing ingredient that turns tool access into an actual productivity gain; mere availability without this (B) isn't reliably sufficient. The tool clearly can improve productivity when used well, so this isn't evidence it never can (C wrong), and how effectively a team actually uses a tool is directly tied to realized benefit (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Improve developer workflows using AI-assisted tooling'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "scenario-multi-response",
    stem:
      "Which two changes would likely improve developer productivity when introducing AI-assisted tooling to a team? (Select 2)",
    options: [
      { id: "A", text: "Share concrete examples and internal best practices for effective prompt structure and task framing specific to the team's codebase." },
      { id: "B", text: "Identify and automate the specific repetitive, well-defined tasks that are consuming disproportionate developer time." },
      { id: "C", text: "Encourage each developer to use the tool in a completely ad hoc way with no shared guidance or internal knowledge-sharing." },
      { id: "D", text: "Apply the tool uniformly to every kind of task, including ones requiring deep, novel judgment, with no consideration of fit." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Sharing concrete, codebase-specific best practices (A) and targeting automation at genuinely repetitive, time-consuming tasks (B) both drive real productivity gains. Fully ad hoc adoption with no shared guidance (C) squanders the benefit of collective learning, and applying the tool uniformly regardless of task fit (D) ignores where it actually adds the most value.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Improve developer workflows using AI-assisted tooling'",
    difficulty: "easy",
  },
  {
    id: "arch-p-dpoe-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A team measures the success of their AI-assisted tooling rollout purely by 'number of AI-generated pull requests merged,' with no attention to code quality, review burden, or rework rate. What is the flaw in this productivity metric?",
    options: [
      { id: "A", text: "A raw volume metric like PR count can be gamed or misleading — it doesn't capture whether the tooling is actually improving overall throughput once increased review burden or rework from lower-quality output is factored in; productivity metrics should reflect net outcome, not raw output volume alone." },
      { id: "B", text: "Raw output volume is always a fully sufficient and accurate measure of genuine productivity improvement, regardless of downstream quality or rework costs." },
      { id: "C", text: "Productivity from AI-assisted tooling can never be measured in any way, so no metric is worth tracking." },
      { id: "D", text: "Code quality and rework rate have no bearing on whether a tooling rollout is genuinely improving developer productivity." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A pure volume metric misses whether the extra output is actually net-positive once review burden and rework are accounted for — sound productivity measurement looks at net outcome, not raw throughput alone. Volume alone isn't sufficient as a measure (B wrong), productivity from tooling adoption is measurable with the right metrics (C wrong), and quality/rework directly bear on whether real productivity gain occurred (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Improve developer workflows using AI-assisted tooling'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A senior engineer resists using AI-assisted tooling for code review support, arguing 'if I can't fully verify what it's doing, I shouldn't use it for anything.' A junior engineer, by contrast, accepts AI-suggested changes without any review at all. What is the balanced position an architect should encourage?",
    options: [
      { id: "A", text: "Encourage using AI-assisted tooling as a genuine aid while maintaining appropriate human review proportional to the risk and complexity of the change, rather than either avoiding the tool entirely or accepting its output uncritically." },
      { id: "B", text: "The senior engineer's position is correct, and no developer should ever use AI-assisted tooling for any task that cannot be fully and immediately verified." },
      { id: "C", text: "The junior engineer's position is correct, and AI-suggested changes should always be accepted without any human review, regardless of risk." },
      { id: "D", text: "There is no meaningful middle ground between full avoidance and unquestioning acceptance of AI-assisted tooling output." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "The balanced, productive position uses the tool as a genuine aid while scaling human review to the actual risk and complexity of a given change — full avoidance (B) forfeits real productivity benefit, and unquestioning acceptance (C) ignores necessary review. A sensible middle ground clearly exists between these two extremes (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Improve developer workflows using AI-assisted tooling'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "An architect wants to help a team reduce the time spent onboarding new developers to a large, complex codebase. How could AI-assisted tooling meaningfully help with this workflow, beyond writing new code?",
    options: [
      { id: "A", text: "Use the assistant to answer codebase-specific questions, explain unfamiliar code sections, and trace how different parts of the system relate to each other, reducing the time a new developer spends searching for this context manually." },
      { id: "B", text: "AI-assisted tooling is only ever useful for writing new code and can never meaningfully help with codebase comprehension or onboarding." },
      { id: "C", text: "The only way to improve onboarding time is to reduce the size and complexity of the codebase itself before any new developer joins." },
      { id: "D", text: "Onboarding time has no relationship to how quickly a new developer can get answers to codebase-specific questions." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Using the assistant for codebase comprehension — answering questions, explaining code, tracing relationships — directly reduces the time-consuming manual search that onboarding often involves; this kind of comprehension support is a real, distinct benefit beyond code generation (B wrong). Reducing codebase complexity (C) is a much larger, separate undertaking not required to see an onboarding benefit here, and getting answers faster clearly does affect onboarding time (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Improve developer workflows using AI-assisted tooling'",
    difficulty: "easy",
  },
  {
    id: "arch-p-dpoe-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A team wants to standardize how they use AI-assisted tooling for a recurring workflow (e.g., generating a changelog entry from a set of commits, formatted a specific way every time). What mechanism best supports making this repeatable and consistent across the team?",
    options: [
      { id: "A", text: "A reusable, shared custom command or Skill that encodes the specific steps and formatting expectations, so any team member can invoke the same repeatable workflow rather than re-explaining it from scratch each time." },
      { id: "B", text: "Each team member should independently re-explain the full formatting and process requirements from scratch every single time the workflow is needed." },
      { id: "C", text: "Recurring workflows can never be made repeatable or consistent through any tooling configuration." },
      { id: "D", text: "Standardizing a recurring workflow has no bearing on consistency across different team members' output." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A shared, reusable custom command or Skill is exactly the mechanism designed for making a recurring workflow repeatable and consistent across a team — re-explaining everything from scratch every time (B) is the inefficient alternative this mechanism replaces. This kind of standardization is achievable (C wrong), and it directly drives consistency of output across team members (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Improve developer workflows using AI-assisted tooling'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "An architect notices that developers frequently ask the AI assistant to explain the same architectural concepts and codebase patterns repeatedly across different sessions, since nothing persists this context between conversations. What durable improvement addresses this?",
    options: [
      { id: "A", text: "Capture the frequently-needed context (architectural patterns, key conventions) in persistent, shared project documentation or instructions the assistant can reference, rather than having it re-derived or re-explained fresh in every session." },
      { id: "B", text: "There is no way to make any context persist or be reused across different sessions with an AI assistant." },
      { id: "C", text: "The only fix is to prohibit developers from asking the assistant about architectural concepts at all." },
      { id: "D", text: "Whether context is captured persistently has no bearing on how often the same explanations need to be repeated." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Capturing frequently-needed context in persistent, shared documentation or project instructions is exactly what avoids repeatedly re-deriving the same explanations from scratch — this kind of persistence mechanism is available (B wrong). Prohibiting these questions entirely (C) removes a legitimate use of the tool rather than fixing the redundancy, and persistent context capture directly reduces repetition (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Improve developer workflows using AI-assisted tooling'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A production incident occurs in a Claude-powered feature, but the on-call engineer has no access to logs showing what prompt, context, or tool calls were involved in the failing request. What foundational capability is missing to support effective debugging?",
    options: [
      { id: "A", text: "Sufficient operational logging (prompts, context, tool calls, outputs) for production requests — without this visibility, on-call engineers can't reconstruct what happened, which is a prerequisite for effective incident debugging." },
      { id: "B", text: "Debugging a production incident is always fully possible with no logging of any kind, since the model's behavior can be reliably reconstructed from memory alone." },
      { id: "C", text: "Operational logging is only relevant for infrastructure-level incidents, never for issues originating in an LLM-based feature." },
      { id: "D", text: "Whether logging is available has no bearing on how effectively an on-call engineer can debug a production incident." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Without logs of the actual prompt, context, and tool calls, there's no way to reconstruct what happened during a failing request — this logging is a prerequisite for effective debugging, not something reliably substitutable (B wrong). Logging is very much relevant to LLM-based feature incidents, not just infrastructure ones (C wrong), and logging availability directly determines debugging effectiveness (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Support debugging and operational issue resolution'",
    difficulty: "easy",
  },
  {
    id: "arch-p-dpoe-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team debugging a recurring issue in a Claude-powered feature keeps making ad hoc, one-off fixes for each individual report without ever identifying whether the reports share a common underlying root cause. What operational practice would improve this?",
    options: [
      { id: "A", text: "Aggregate and analyze failure reports for common patterns (e.g., a shared prompt structure, a specific input type, a particular tool-call sequence) to identify and fix the underlying root cause, rather than patching each individual symptom in isolation." },
      { id: "B", text: "Continuing to patch each individual report in isolation, with no pattern analysis, is always the most effective way to resolve a recurring operational issue." },
      { id: "C", text: "Recurring issues in an LLM-based system can never share a common root cause, so pattern analysis provides no value." },
      { id: "D", text: "Whether failure reports are analyzed for common patterns has no bearing on whether the true root cause of a recurring issue is identified." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Aggregating and analyzing failures for a shared pattern is what surfaces the true root cause behind recurring individual reports — patching each in isolation (B) tends to leave the underlying cause unaddressed and issues recurring. Recurring issues absolutely can share a common root cause (C wrong), and pattern analysis directly determines whether that root cause gets identified (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Support debugging and operational issue resolution'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "scenario-multi-response",
    stem:
      "Which two practices support effective operational debugging for a Claude-powered production system? (Select 2)",
    options: [
      { id: "A", text: "Maintain sufficient logging of prompts, context, tool calls, and outputs to reconstruct what happened during a failing request." },
      { id: "B", text: "Look for common patterns across multiple failure reports to identify a shared underlying root cause rather than treating each as fully unrelated." },
      { id: "C", text: "Apply a fix without first confirming what the actual root cause of the reported issue is." },
      { id: "D", text: "Discard logs and diagnostic information as soon as an incident is reported, before any root-cause analysis has been completed." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Sufficient reconstructive logging (A) and cross-report pattern analysis (B) are both core to effective operational debugging. Applying a fix before confirming the actual root cause (C) risks addressing the wrong problem, and discarding diagnostic information before analysis is complete (D) actively undermines the ability to debug the incident.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Support debugging and operational issue resolution'",
    difficulty: "easy",
  },
  {
    id: "arch-p-dpoe-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "An operational issue in a production agentic system turns out to be caused by a tool's error response being malformed in a way the model couldn't interpret correctly, leading to a confusing downstream failure. What does this suggest about operational issue resolution for agentic systems specifically?",
    options: [
      { id: "A", text: "Debugging an agentic system's failures needs to consider the full chain, including how tool responses (not just the model's own generation) are structured and interpreted, since a malformed tool response can be the actual root cause of a seemingly model-side failure." },
      { id: "B", text: "Tool response formatting is never a relevant factor in diagnosing an agentic system's operational failures." },
      { id: "C", text: "The only possible fix for any agentic system failure is to remove all tool access from the agent." },
      { id: "D", text: "Debugging an agentic system should only ever examine the model's own output, never any part of the tool-calling chain." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "This scenario shows the root cause sitting in the tool-response side of the chain, not the model's own generation — debugging agentic systems needs to examine the whole chain, including tool response structure. Tool response formatting is clearly relevant here (B wrong), removing all tool access (C) is a disproportionate response to a fixable formatting issue, and examining only the model's output while ignoring the tool-calling chain (D) would have missed this exact root cause.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Support debugging and operational issue resolution'",
    difficulty: "hard",
  },
  {
    id: "arch-p-dpoe-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "After resolving a production incident, the team moves on immediately without documenting what happened, why it happened, or what was changed to fix it. Months later, a similar incident occurs, and the team has to re-diagnose the issue from scratch with no reference to the prior resolution. What practice would have prevented this wasted effort?",
    options: [
      { id: "A", text: "Documenting a post-incident summary (root cause, resolution, any follow-up actions) so future occurrences of a similar issue can be diagnosed faster by referencing what was already learned, rather than starting from zero each time." },
      { id: "B", text: "Post-incident documentation is never useful once an incident has already been resolved, since the fix itself is always sufficient with no need for a written record." },
      { id: "C", text: "The only way to prevent this waste of effort is to guarantee that no similar incident can ever recur, which cannot realistically be promised for any system." },
      { id: "D", text: "Whether an incident is documented after resolution has no bearing on how quickly a similar future incident can be diagnosed." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A documented post-incident summary is exactly what lets a future team diagnose a similar issue faster by building on prior learning rather than starting from scratch — skipping this documentation (B) is exactly what caused the wasted re-diagnosis here. Guaranteeing an incident can never recur (C) isn't realistic or necessary for this fix to add value, and documentation directly affects future diagnosis speed (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Support debugging and operational issue resolution'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team's only method for identifying operational issues in a Claude-powered feature is waiting for customers to report a problem through support channels. What operational enablement gap does this represent, and what would improve it?",
    options: [
      { id: "A", text: "This is a purely reactive detection approach; establishing proactive internal monitoring and alerting (rather than relying solely on customer reports) allows the team to catch and begin resolving issues earlier, often before customers are significantly affected." },
      { id: "B", text: "Relying solely on customer reports is always the most effective and sufficient way to detect operational issues in any production system." },
      { id: "C", text: "Proactive internal monitoring provides no benefit beyond what customer reports already provide." },
      { id: "D", text: "How issues are initially detected has no bearing on how quickly the team can begin resolving them." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Relying solely on customer reports is a purely reactive detection method — proactive internal monitoring and alerting catches issues earlier, often before significant customer impact, which is a real, additional benefit customer reports alone don't provide. Customer-report-only detection isn't the most effective approach on its own (B wrong), and detection method directly affects resolution speed (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Support debugging and operational issue resolution'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A developer debugging an unexpected model output tries dozens of small prompt tweaks in production directly against live customer traffic, hoping to stumble onto a fix. What is the concern with this debugging approach, and what would be better?",
    options: [
      { id: "A", text: "Experimenting directly against live production traffic risks further customer impact from each untested change; debugging should generally happen in an isolated environment or against a reproduction case first, with changes validated before being deployed to production." },
      { id: "B", text: "Debugging directly against live production traffic is always the safest and most effective way to diagnose and fix an unexpected model output." },
      { id: "C", text: "There is no concern with this approach, since production is always the ideal place to test any change, regardless of customer impact." },
      { id: "D", text: "Where debugging experimentation happens has no bearing on the risk it poses to customers." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Debugging directly against live traffic risks compounding the very problem being diagnosed with additional untested changes — isolating debugging to a reproduction case or non-production environment first is the safer, better practice. Live-production debugging isn't the safest approach here (B, C both wrong), and where debugging happens directly affects customer risk (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Support debugging and operational issue resolution'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "During an operational incident, the team quickly develops a strong hypothesis about the root cause but ships a fix based on that hypothesis without confirming it against the actual logged evidence from the failing requests. The fix doesn't resolve the issue. What lesson does this illustrate about issue resolution?",
    options: [
      { id: "A", text: "A plausible hypothesis still needs to be validated against actual evidence before a fix is deployed; skipping this validation risks shipping a fix for the wrong root cause, wasting time and potentially leaving the real issue unresolved." },
      { id: "B", text: "A quickly-formed hypothesis about root cause should always be trusted and acted on immediately, with no need to validate it against actual evidence." },
      { id: "C", text: "Root cause hypotheses can never be validated against evidence in any operational debugging scenario." },
      { id: "D", text: "Whether a hypothesis is validated against evidence before a fix ships has no bearing on whether that fix actually resolves the issue." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Validating a hypothesis against actual logged evidence before shipping a fix is what prevents exactly this outcome — deploying based on an unconfirmed guess (B) risks addressing the wrong root cause, as happened here. Hypotheses are generally validatable against the kind of logging discussed earlier in this domain (C wrong), and validation directly determines whether the shipped fix actually resolves the issue (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Support debugging and operational issue resolution'",
    difficulty: "hard",
  },
  {
    id: "arch-p-dpoe-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team wants to reduce the average time it takes to resolve operational issues in their Claude-powered system but has not defined any specific metric (e.g., mean time to detect, mean time to resolve) to track this. What is missing from their improvement effort?",
    options: [
      { id: "A", text: "A defined, trackable operational metric (such as mean time to detect or mean time to resolve) that provides a concrete baseline and lets the team objectively measure whether their process changes are actually improving resolution speed over time." },
      { id: "B", text: "Defining and tracking operational metrics like mean time to detect or resolve provides no value for improving an operational process." },
      { id: "C", text: "The only way to improve resolution time is to hire more on-call staff, regardless of what the actual bottleneck in the process is." },
      { id: "D", text: "Whether a metric is defined and tracked has no bearing on whether an improvement effort is actually succeeding." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A defined, trackable metric like mean time to detect/resolve gives the team an objective baseline to measure whether process changes are actually working — without it, 'reducing resolution time' is an untracked, unverifiable goal. Such metrics clearly do provide real value here (B wrong), staffing isn't necessarily the actual bottleneck without first measuring where time is spent (C wrong), and metric tracking directly determines whether progress can be verified (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Support debugging and operational issue resolution'",
    difficulty: "medium",
  },
  {
    id: "arch-p-dpoe-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "An architect is evaluating whether to introduce AI-assisted code review support for a team. Some team members worry this could reduce the depth of human review over time if developers grow overly reliant on it. What approach best balances the productivity benefit against this concern?",
    options: [
      { id: "A", text: "Position AI-assisted review as a complement that catches certain classes of issues quickly, while explicitly preserving meaningful human review responsibility and judgment for the things that matter most (design quality, business logic correctness, subtle risk) — not as a full replacement for human review." },
      { id: "B", text: "Fully replace human code review with AI-assisted review across the board, since any human review effort becomes unnecessary once AI-assisted tooling is introduced." },
      { id: "C", text: "Avoid introducing any AI-assisted review support at all, since any reliance on it, however small, is guaranteed to erode human review quality over time." },
      { id: "D", text: "The balance between AI-assisted and human review has no bearing on overall code review quality or depth." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Positioning AI-assisted review as a complement — handling certain checks quickly while preserving human judgment for design, correctness, and subtle risk — captures the productivity benefit without the over-reliance risk the team is worried about. Full replacement of human review (B) does risk exactly the erosion of concern raised, avoiding the tool altogether (C) forfeits its real benefit rather than managing the risk, and this balance clearly does affect overall review quality (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 7 — 'Improve developer workflows using AI-assisted tooling'",
    difficulty: "hard",
  },
];
