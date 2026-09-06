import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "dev-cc-001",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer wants Claude Code to run a task non-interactively as part of a shell pipeline, without waiting for any interactive input. Which mode/flag is designed for this?",
    options: [
      { id: "A", text: "Interactive session mode, the default for terminal use." },
      { id: "B", text: "Streaming mode, which is unrelated to whether input is interactive." },
      { id: "C", text: "There is no way to run Claude Code non-interactively." },
      { id: "D", text: "Headless mode via the -p (--print) flag, which processes the prompt and exits without waiting for interactive input." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "The -p/--print flag is specifically the documented way to run Claude Code non-interactively, printing output and exiting rather than waiting for further input — the default interactive mode (A) would hang waiting for input in a pipeline, streaming mode (B) addresses a different concern, and non-interactive execution is very much supported (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 (Claude Code) — 'Claude Code Operation'",
    difficulty: "easy",
  },
  {
    id: "dev-cc-002",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A team wants a repeatable, shareable workflow (e.g., '/review-pr') that any team member can invoke, with the definition checked into version control alongside the project. Which Claude Code component fits this need?",
    options: [
      { id: "A", text: "This isn't possible with Claude Code." },
      { id: "B", text: "A project-scoped Skill (or custom slash command) defined within the repository, so it's shared with the team via version control." },
      { id: "C", text: "A user-level rule in ~/.claude/rules/, which stays personal to one user." },
      { id: "D", text: "Auto memory, which is not checked into version control and isn't meant for shared team workflows." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A project-scoped Skill or slash command, committed to the repo, is exactly the mechanism for a shared, version-controlled, invokable workflow — a personal user-level rule (C) doesn't get shared with the team, auto memory (D) is Claude's own accumulated notes rather than an authored shared workflow, and this capability does exist (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-003",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer runs `/init` in a new repository. What does this command do?",
    options: [
      { id: "A", text: "It has no effect unless a CLAUDE.md file already exists." },
      { id: "B", text: "It permanently disables all future configuration changes." },
      { id: "C", text: "It analyzes the codebase and generates a starting CLAUDE.md with discovered build commands, test instructions, and project conventions." },
      { id: "D", text: "It deletes all existing configuration files in the repository." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "/init analyzes the codebase and produces a starting CLAUDE.md capturing discovered conventions — it doesn't delete configuration (D) or lock out future changes (B), and it's useful specifically because it works even when no CLAUDE.md exists yet (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "easy",
  },
  {
    id: "dev-cc-004",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer wants to delegate a focused, isolated subtask (e.g., tracing a specific bug through a large codebase) so its verbose exploration output doesn't clutter the main session. Which Claude Code component is designed for this?",
    options: [
      { id: "A", text: "A subagent, which runs with its own isolated context focused on the delegated subtask." },
      { id: "B", text: "settings.json, which configures permissions rather than delegating work." },
      { id: "C", text: "There is no mechanism in Claude Code for delegating isolated subtasks." },
      { id: "D", text: "The CLAUDE.md file, which is loaded into every session regardless of the specific subtask." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Subagents are exactly the mechanism for isolating a focused subtask's exploration from the main session's context — CLAUDE.md (D) is always-loaded context, not a delegation mechanism, settings.json (B) configures permissions rather than delegating work, and this capability does exist (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-005",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "scenario-multi-response",
    stem:
      "Which two are core components of Claude Code's session/customization model? (Select 2)",
    options: [
      { id: "A", text: "A requirement that every project have exactly one contributor." },
      { id: "B", text: "Rules — project conventions loaded to guide behavior consistently." },
      { id: "C", text: "Agent Memory — persisted learnings that carry across sessions without the user writing anything." },
      { id: "D", text: "A mandatory graphical IDE, without which Claude Code cannot run at all." },
    ],
    correctOptionIds: ["B","C"],
    selectCount: 2,
    explanation:
      "Agent Memory (C) and Rules (B) are both genuine core components of how Claude Code operates and customizes behavior. Claude Code runs in the terminal, IDE extensions, desktop, and web — it doesn't require a mandatory GUI (D) — and it's explicitly designed for team/multi-contributor use via shared, version-controlled configuration (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-006",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer wants to restrict which tools are available during a specific Skill's execution, without affecting the rest of the session. What configuration mechanism supports this?",
    options: [
      { id: "A", text: "Editing the CLAUDE.md file, which affects the whole session rather than one Skill's execution." },
      { id: "B", text: "A global settings.json change that affects every session and every Skill equally, with no way to scope it more narrowly." },
      { id: "C", text: "This kind of scoped restriction is not possible in Claude Code." },
      { id: "D", text: "An allowed-tools (or similarly named) frontmatter setting within the Skill's own definition, scoping tool access specifically to that Skill's execution." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Skill-level frontmatter for allowed tools is exactly the mechanism for scoping tool access to just that Skill's execution — a global settings change (B) or CLAUDE.md edit (A) would affect the whole session rather than one Skill specifically, and this scoped control does exist (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-007",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A new engineer joins a project and doesn't seem to be receiving the same coding-standard instructions that the rest of the team has configured. What is a likely cause worth checking first?",
    options: [
      { id: "A", text: "Claude Code instructions are always identical for every user regardless of configuration scope." },
      { id: "B", text: "The instructions may be configured at user-level (personal, not shared) rather than project-level (shared via version control), so the new engineer's own account never received them." },
      { id: "C", text: "This can only be fixed by reinstalling Claude Code entirely." },
      { id: "D", text: "The new engineer's operating system is incompatible with Claude Code." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A mismatch between user-level (personal) and project-level (shared, version-controlled) configuration is a classic cause of a new team member not receiving expected instructions — configuration scope genuinely affects what's shared (A wrong), this isn't an OS compatibility issue (D), and it's a configuration fix, not a reinstall (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-008",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A team wants certain conventions (e.g., API design rules) to apply only when Claude Code is working with files in a specific directory (src/api/**), not across the entire codebase. What Claude Code feature is designed for this?",
    options: [
      { id: "A", text: "A single monolithic CLAUDE.md file with no path-based scoping, applied uniformly everywhere." },
      { id: "B", text: "There is no way to scope conventions to specific paths in Claude Code." },
      { id: "C", text: "Path-scoped rules using YAML frontmatter (e.g., a paths field with a glob pattern), which load only when matching files are being worked on." },
      { id: "D", text: "Renaming the entire project to only contain API-related files." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Path-scoped rules with glob-pattern frontmatter are specifically designed to apply conventions conditionally, based on which files are being worked on — a single uniform CLAUDE.md (A) can't express this conditional scoping, this capability does exist (B wrong), and restructuring the whole project (D) is an absurd, unnecessary workaround.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-009",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer wants to see live, incremental output from Claude Code as it works through a long task, rather than waiting for it to finish entirely before seeing anything. What capability supports this?",
    options: [
      { id: "A", text: "Streaming mode, which shows output incrementally as it's produced." },
      { id: "B", text: "There is no way to see incremental output; results are only available once fully complete." },
      { id: "C", text: "settings.json, which configures permissions, not output display." },
      { id: "D", text: "Headless mode, which is about non-interactive execution, not incremental display." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Streaming mode is specifically about incremental output as work happens — headless mode (D) addresses interactivity, not display granularity, settings.json (C) is unrelated to output display, and incremental visibility is in fact supported (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "easy",
  },
  {
    id: "dev-cc-010",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer wants Claude Code to work through a series of routine tasks with minimal manual approval at each step, for a well-understood, low-risk repetitive job. Which capability is most relevant?",
    options: [
      { id: "A", text: "There is no way to reduce manual approval steps in Claude Code." },
      { id: "B", text: "This can only be achieved by disabling Claude Code's tool use entirely." },
      { id: "C", text: "Deleting settings.json entirely, which is unrelated to approval behavior." },
      { id: "D", text: "Auto-mode, which reduces the need for manual step-by-step approval for this kind of routine, lower-risk work." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Auto-mode is the feature specifically aimed at reducing manual approval friction for routine work — deleting settings.json (C) doesn't target this and could cause other problems, disabling tool use (B) would prevent Claude Code from doing the work at all, and this capability does exist (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-011",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer notices that Claude Code seems to be following instructions inconsistently across sessions, and suspects a configuration file might not be loading as expected. What is a reasonable way to check this?",
    options: [
      { id: "A", text: "Assume the behavior is entirely random and unrelated to configuration." },
      { id: "B", text: "Verify which memory/configuration files actually loaded for the current session, since inconsistent behavior across sessions is often explained by a file not being in a location that gets loaded." },
      { id: "C", text: "Ignore the inconsistency, since configuration issues are unresolvable." },
      { id: "D", text: "Reinstall Claude Code entirely, since configuration issues can never be diagnosed directly." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Checking which configuration files actually loaded for a session is a direct, practical diagnostic step for inconsistent instruction-following — dismissing it as random (A) skips real diagnosis, a reinstall (D) is a disproportionate first step, and configuration issues are generally diagnosable and fixable (C wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-012",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A CI pipeline needs to run Claude Code and parse its output programmatically to post structured findings as PR comments. What combination of considerations is most relevant?",
    options: [
      { id: "A", text: "This use case isn't supported by Claude Code at all." },
      { id: "B", text: "Running in the default interactive mode, since CI environments handle interactive prompts natively." },
      { id: "C", text: "Running in headless mode (non-interactive) and requesting structured output (e.g., a JSON-based format) so the results can be reliably parsed by the pipeline." },
      { id: "D", text: "Requesting free-form prose output only, since structured output isn't relevant to CI use." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Headless, non-interactive execution combined with structured, machine-parseable output is exactly what a CI integration needs — interactive mode (B) would hang in an automated pipeline, free-form prose (D) is hard to reliably parse, and CI integration is a well-supported use case (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-013",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer wants to package a multi-step procedure — a checklist they keep re-explaining to Claude Code — so it can be invoked on demand without loading into every session by default. What Claude Code component fits this description best?",
    options: [
      { id: "A", text: "A Skill, which is invoked on demand (or when relevant) rather than being loaded into every session unconditionally like CLAUDE.md." },
      { id: "B", text: "CLAUDE.md, which loads unconditionally into every session regardless of relevance." },
      { id: "C", text: "settings.json, which configures permissions rather than packaging procedures." },
      { id: "D", text: "There is no way to package a reusable, on-demand procedure in Claude Code." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A Skill is designed precisely for this — an on-demand, invokable procedure that doesn't need to be loaded into every session by default like CLAUDE.md always is (B is the wrong tool for 'on demand'), settings.json (C) is unrelated to packaging procedures, and this capability does exist (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-014",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A team lead asks: 'does Claude Code remember anything about our project between separate sessions, or does every session start completely blank?' What is the accurate answer?",
    options: [
      { id: "A", text: "Memory only works if the project has fewer than 10 files." },
      { id: "B", text: "Every session starts completely blank with absolutely no continuity of any kind." },
      { id: "C", text: "Claude Code can only remember information for the duration of a single terminal command." },
      { id: "D", text: "Persistent mechanisms like CLAUDE.md (explicit instructions) and Agent Memory (accumulated learnings) both carry relevant project context forward across sessions." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "CLAUDE.md and Agent Memory are both explicit mechanisms that carry context forward across sessions — sessions aren't entirely blank each time (B wrong), continuity extends beyond a single command (C wrong), and there's no such file-count restriction on memory (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "easy",
  },
  {
    id: "dev-cc-015",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer wants a custom slash command (e.g., '/deploy-staging') available only to themselves, for their own personal workflow, without affecting or being visible to the rest of the team. Where should this be defined?",
    options: [
      { id: "A", text: "There is no way to define a personal-only command." },
      { id: "B", text: "In a user-scoped location (e.g., under the user's personal Claude Code configuration), which stays personal and isn't shared via the project's version control." },
      { id: "C", text: "In the project's version-controlled .claude/commands/ (or equivalent shared location), so the whole team gets it automatically." },
      { id: "D", text: "In the project's README file." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A user-scoped location keeps a command personal, as opposed to a project-scoped, version-controlled location (C) which would share it with the whole team — personal commands are supported (A wrong), and a README (D) isn't how Claude Code commands are defined or invoked.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-016",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer initializing Claude Code for the first time in a brand-new repository with no existing configuration wants to quickly bootstrap reasonable project instructions. What is the most direct approach?",
    options: [
      { id: "A", text: "Copy a completely unrelated project's CLAUDE.md verbatim with no review." },
      { id: "B", text: "Skip configuration entirely, since Claude Code cannot be configured for a new repository." },
      { id: "C", text: "Run /init, letting Claude Code analyze the existing codebase and propose a starting CLAUDE.md with discovered conventions to refine from." },
      { id: "D", text: "Manually write a complete CLAUDE.md from scratch before ever running Claude Code once, guessing at every convention." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "/init is designed exactly for this bootstrapping scenario — analyzing the actual codebase rather than guessing (D) or blindly copying an unrelated project's file (A), and Claude Code is very much configurable for a new repository (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "easy",
  },
  {
    id: "dev-cc-017",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A large CLAUDE.md file has grown to include general company policy, project-specific conventions, and personal preferences from one individual contributor, all mixed together. What issue does this raise?",
    options: [
      { id: "A", text: "Mixing different scopes (org-wide, project-shared, and individual-personal) into one shared file makes it harder to maintain and risks personal preferences being applied to the whole team, or vice versa." },
      { id: "B", text: "This only matters if the file exceeds a hard, enforced character limit." },
      { id: "C", text: "No issue; mixing scopes together in one file is the recommended default approach regardless of audience." },
      { id: "D", text: "CLAUDE.md files cannot contain more than one topic at all." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Blending scopes that are meant to be separate (organizational, project-shared, personal) into one file undermines the purpose of having distinct configuration scopes — this is a real maintainability and correctness concern (C wrong), Claude Code doesn't restrict a file to one topic (D wrong), and the issue isn't reducible to just a size limit (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "hard",
  },
  {
    id: "dev-cc-018",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "scenario-multi-response",
    stem:
      "Which two statements accurately describe the relationship between CLAUDE.md hierarchy levels? (Select 2)",
    options: [
      { id: "A", text: "User-level and project-level configuration are always identical and interchangeable." },
      { id: "B", text: "Only one configuration level can exist at a time; defining a project-level file disables any user-level file." },
      { id: "C", text: "User-level configuration (e.g., ~/.claude/CLAUDE.md) applies only to that individual user, across their own projects." },
      { id: "D", text: "Project-level configuration is shared with the team via version control, unlike user-level configuration." },
    ],
    correctOptionIds: ["C","D"],
    selectCount: 2,
    explanation:
      "User-level configuration staying personal to one user (C), and project-level configuration being shared via version control (D), are both accurate and are exactly what distinguishes the two scopes. They are not interchangeable (A wrong) or mutually exclusive (B wrong) — both can coexist and combine.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-019",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer wants to give Claude Code repeatable, well-tested access to an external system (e.g., an issue tracker) that could be reused across multiple projects, not just packaged as a one-off Skill. What is the more appropriate mechanism?",
    options: [
      { id: "A", text: "A user-level rule, which only affects text-based guidance, not live system access." },
      { id: "B", text: "This kind of reusable integration is not possible with Claude Code." },
      { id: "C", text: "CLAUDE.md, which provides context but has no mechanism for live external system access." },
      { id: "D", text: "An MCP server, which can expose reusable tools/resources for an external system and be connected from multiple projects, rather than being tied to one project's Skills." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "An MCP server is the right fit for a reusable, cross-project integration with an external system — a rule (A) or CLAUDE.md (C) provide guidance/context but no mechanism for live system access, and MCP integration is a well-supported, common pattern in Claude Code (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-020",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A team wants new engineers to automatically receive both company-wide standards and this specific project's conventions the moment they start working in the repository, with no manual setup step required from the new engineer. What configuration approach achieves this?",
    options: [
      { id: "A", text: "Configuration cannot be scoped beyond a single individual user." },
      { id: "B", text: "Use appropriately scoped, version-controlled configuration (e.g., managed/org-level policy plus project-level CLAUDE.md) that's automatically present the moment the engineer has the repository and any org-wide policy applied." },
      { id: "C", text: "This isn't achievable without a lengthy manual onboarding document unrelated to Claude Code's own configuration system." },
      { id: "D", text: "Rely entirely on user-level configuration that each new engineer must set up manually themselves with no guidance." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Using the appropriate broader scopes (org/managed policy and project-level, version-controlled CLAUDE.md) is exactly what makes standards available automatically without per-engineer manual setup — relying solely on manual user-level setup (D) defeats that goal, this is achievable within Claude Code's own configuration system (C wrong), and configuration scope extends well beyond a single user (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "hard",
  },
  {
    id: "dev-cc-021",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer is debugging why a particular Skill isn't being triggered automatically when it seems relevant to the current task. What is a reasonable explanation to investigate?",
    options: [
      { id: "A", text: "Skill triggering has nothing to do with how the Skill is described." },
      { id: "B", text: "Skills can never be triggered automatically, only via explicit slash-command invocation." },
      { id: "C", text: "The Skill's frontmatter or description may not clearly signal when it's relevant, since Claude decides whether to load a Skill automatically based on that information, similar to how it decides when to call a tool." },
      { id: "D", text: "This is always caused by a corrupted installation requiring a full reinstall." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Whether a Skill is automatically considered relevant depends on how clearly its description signals its purpose — this is directly analogous to tool-selection reliability depending on tool descriptions. Skills can be triggered both automatically and via explicit invocation (B wrong), this isn't necessarily a corrupted install (D), and description quality is directly relevant to triggering (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-022",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A team maintains a large monorepo with many independent teams' CLAUDE.md files present in various subdirectories, some of which are irrelevant noise for engineers working exclusively in one specific package. What is a reasonable approach to reduce this noise for those engineers?",
    options: [
      { id: "A", text: "Configure exclusions or path-appropriate scoping so an engineer working in one package isn't loaded with every other unrelated team's CLAUDE.md content by default." },
      { id: "B", text: "Delete every subdirectory CLAUDE.md file in the monorepo, including relevant ones." },
      { id: "C", text: "There is no way to manage configuration noise in a large monorepo." },
      { id: "D", text: "Require every engineer to manually skip past irrelevant content mentally, with no configuration change." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Scoping or excluding irrelevant configuration for engineers working in unrelated parts of a monorepo directly addresses the noise problem while preserving genuinely relevant configuration — deleting everything indiscriminately (B) removes needed content too, this is a manageable, real capability (C wrong), and there are better options than relying on manual mental filtering (D).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "hard",
  },
  {
    id: "dev-cc-023",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer wants Claude Code to always run a specific formatter command automatically after every file edit, regardless of what Claude itself decides to do. What is the appropriate way to achieve this guarantee?",
    options: [
      { id: "A", text: "Ask Claude once at the start of the session and rely on it remembering for the rest of the session." },
      { id: "B", text: "This kind of guarantee is not possible in Claude Code." },
      { id: "C", text: "Add an instruction to CLAUDE.md asking Claude to remember to run the formatter after edits." },
      { id: "D", text: "Configure a hook (e.g., a PostToolUse-style hook tied to file-edit tools) that runs the formatter command automatically as a fixed lifecycle event, independent of what Claude decides." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A hook tied to a fixed lifecycle event runs deterministically regardless of what Claude decides, which is what a true guarantee requires — a CLAUDE.md instruction (C) or a one-time verbal request (A) both remain probabilistic prompt-based guidance, not a guarantee, and this capability does exist via hooks (B wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-024",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A junior developer asks: 'what's the difference between a Rule and a Skill in Claude Code?' Which explanation is most accurate?",
    options: [
      { id: "A", text: "Rules can only be used by one person, while Skills can only be used by an entire team." },
      { id: "B", text: "Rules generally provide always-relevant (or path-scoped) conventions loaded automatically, while Skills package on-demand, invokable procedures or workflows that aren't necessarily loaded by default." },
      { id: "C", text: "Rules and Skills are exactly the same thing with two different names." },
      { id: "D", text: "Skills replace the need for any tools within Claude Code." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "This distinction — automatically-loaded conventions versus on-demand invokable procedures — reflects their different intended purposes; they aren't identical (C wrong), the difference isn't about individual-vs-team scope (A wrong, both can be scoped either way), and Skills don't replace tool use (D wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-025",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A team's CLAUDE.md contains an instruction that conflicts with a more specific, path-scoped rule for a particular subdirectory. When Claude Code works on a file matching that path-scoped rule, what should a developer expect?",
    options: [
      { id: "A", text: "This situation causes Claude Code to stop functioning entirely." },
      { id: "B", text: "Conflicting instructions are automatically detected and resolved perfectly with no need for developer attention." },
      { id: "C", text: "Both the general CLAUDE.md instruction and the more specific path-scoped rule are potentially in context together, and conflicting guidance can be resolved inconsistently — reviewing and resolving the conflict directly is the appropriate fix, not assuming one always cleanly wins." },
      { id: "D", text: "The path-scoped rule is always completely ignored whenever a general CLAUDE.md instruction exists." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Conflicting instructions across scopes can be resolved inconsistently, so the responsible fix is reviewing and reconciling the conflict rather than assuming a clean, automatic resolution (B) or that one instruction is simply always ignored (D) — this doesn't cause Claude Code to stop working outright (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "hard",
  },
  {
    id: "dev-cc-026",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer wants a quick way to confirm exactly which configuration files (CLAUDE.md, rules, etc.) are actually active in the current Claude Code session, to debug unexpected behavior. What kind of capability would address this need?",
    options: [
      { id: "A", text: "A built-in introspection/diagnostic command that lists which memory or configuration files loaded for the current session." },
      { id: "B", text: "Manually guessing based on the output's tone alone." },
      { id: "C", text: "Reinstalling Claude Code is the only way to determine this." },
      { id: "D", text: "There is no way to inspect what configuration is active in a session." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A built-in way to introspect which configuration actually loaded is the direct, reliable way to debug this kind of issue — guessing from output tone (B) isn't a reliable diagnostic, this kind of visibility does exist as a capability (D wrong), and reinstalling (C) isn't a diagnostic step at all.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
  {
    id: "dev-cc-027",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A team wants to ensure a particular hook-based safety check (blocking destructive file deletions outside a designated folder) applies to every developer on the project, with no ability for an individual to silently disable it in their own local setup. Where should this be configured?",
    options: [
      { id: "A", text: "As a personal, user-level setting that each developer configures for themselves individually." },
      { id: "B", text: "In a comment within the codebase with no actual configuration mechanism." },
      { id: "C", text: "This kind of non-overridable enforcement isn't possible in Claude Code." },
      { id: "D", text: "At an organization/managed policy or project-enforced configuration level that isn't something an individual's personal settings can override." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A safety-critical rule that must apply universally and can't be silently disabled belongs at an enforced, non-overridable configuration level — a personal user-level setting (A) can be freely changed by that individual, defeating the guarantee, this kind of enforcement is achievable (C wrong), and a mere code comment (B) has no actual enforcement mechanism behind it.",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "hard",
  },
  {
    id: "dev-cc-028",
    certificationSlug: "developer-foundations",
    domain: "Claude Code",
    taskStatement: "Claude Code Operation",
    type: "mcq",
    stem:
      "A developer is choosing between direct execution and a more deliberate, plan-first approach for a Claude Code task involving a large-scale refactor across many files with several viable design directions. Which approach is more appropriate, and why?",
    options: [
      { id: "A", text: "Neither approach matters, since Claude Code behaves identically either way regardless of task type." },
      { id: "B", text: "A plan-first approach, since the ambiguity of multiple viable directions and the scale of the change benefit from exploration and design discussion before committing to changes, reducing the risk of costly rework." },
      { id: "C", text: "Direct execution, since starting immediately always produces the fastest overall outcome regardless of task complexity." },
      { id: "D", text: "Direct execution, but only because plan-first approaches are never appropriate for refactors." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A large-scale, ambiguous, multi-file task is exactly the profile that benefits from planning and exploration before committing to changes, reducing costly rework — jumping straight to execution (C, D) risks exactly that rework, and the choice of approach does meaningfully affect outcomes (A wrong).",
    citation:
      "Claude Certified Developer – Foundations Exam Guide §6, Domain 3 — 'Claude Code Operation'",
    difficulty: "medium",
  },
];
