import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "arch-f-ccw-001",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.1",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A new engineer joins the team and doesn't seem to be receiving the coding-standard instructions that everyone else has. Investigation reveals the instructions live in ~/.claude/CLAUDE.md on the original author's machine. What is the diagnosis and fix?",
    options: [
      { id: "A", text: "The new engineer's machine is defective and needs to be replaced." },
      { id: "B", text: "There is no fix; user-level configuration can never be made available to other team members under any circumstances." },
      { id: "C", text: "CLAUDE.md hierarchy has no bearing on which team members receive which instructions." },
      { id: "D", text: "The instructions were placed at user scope, which isn't shared via version control — moving them to a project-scoped CLAUDE.md (e.g., .claude/CLAUDE.md or root CLAUDE.md) makes them available to every team member automatically." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "User-level CLAUDE.md is personal and not shared via version control — moving shared standards to project scope is exactly the fix for this classic hierarchy mismatch. This is fixable (B wrong), it's a configuration issue, not a hardware issue (A wrong), and hierarchy scope directly determines what's shared with whom (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.1 — CLAUDE.md hierarchy, scoping, and modular organization",
    difficulty: "easy",
  },
  {
    id: "arch-f-ccw-002",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.1",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A monorepo has a root CLAUDE.md with universal conventions, and the team wants each package's own CLAUDE.md to selectively include only the standards files relevant to that package's domain (e.g., the frontend package importing only frontend-related standards). What mechanism supports this?",
    options: [
      { id: "A", text: "Every package must copy the entire root CLAUDE.md verbatim with no selective inclusion possible." },
      { id: "B", text: "The @import syntax, which lets a CLAUDE.md reference specific external files, keeping each package's configuration modular and relevant rather than duplicating or including everything." },
      { id: "C", text: "@import can only reference files outside the repository, never files within the same monorepo." },
      { id: "D", text: "There is no way to selectively include specific standards files from within a CLAUDE.md." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "@import is exactly the mechanism for pulling in specific, relevant standards files into a package's own CLAUDE.md, keeping it modular — this selective inclusion is supported (D wrong), full duplication isn't required (A wrong), and @import can reference files within the same repository (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.1 — CLAUDE.md hierarchy, scoping, and modular organization",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-003",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.1",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A team's single CLAUDE.md file has grown to cover testing conventions, API design rules, deployment procedures, and security requirements, all mixed together, making it hard to maintain. What restructuring approach is recommended?",
    options: [
      { id: "A", text: "Leave the single file as-is, since splitting configuration into multiple files is never beneficial regardless of size." },
      { id: "B", text: ".claude/rules/ can only contain a single file, making this restructuring impossible." },
      { id: "C", text: "Split the monolithic file into focused, topic-specific files under .claude/rules/ (e.g., testing.md, api-conventions.md, deployment.md), making each easier to maintain and reason about independently." },
      { id: "D", text: "Delete the file entirely and provide no configuration at all going forward." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Splitting a sprawling monolithic file into topic-specific files under .claude/rules/ is exactly the recommended alternative for this situation — this split is beneficial for large, mixed-topic configuration (A wrong), removing configuration entirely (D) discards needed guidance, and .claude/rules/ supports multiple files (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.1 — CLAUDE.md hierarchy, scoping, and modular organization",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-004",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.1",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A developer suspects Claude Code isn't picking up a recently-added CLAUDE.md file in a subdirectory. What is a direct way to verify this?",
    options: [
      { id: "A", text: "Use the /memory command to check which memory/configuration files are actually loaded for the current session, diagnosing whether the new file is being picked up." },
      { id: "B", text: "Restart the developer's computer, which is the only way to refresh configuration loading." },
      { id: "C", text: "Delete the entire .claude directory and start over, since verification is otherwise impossible." },
      { id: "D", text: "Assume the file is loaded correctly with no way to verify this directly." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "The /memory command is specifically useful for verifying which memory files loaded and diagnosing inconsistent behavior across sessions — this is directly verifiable (D wrong), doesn't require deleting configuration to check (C wrong), and doesn't require a full computer restart (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.1 — CLAUDE.md hierarchy, scoping, and modular organization",
    difficulty: "easy",
  },
  {
    id: "arch-f-ccw-005",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.2",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A team wants a '/review' slash command with their standard code-review checklist to be automatically available to every team member the moment they clone the repository. Where should this be defined?",
    options: [
      { id: "A", text: "In a plain README file with no actual command definition." },
      { id: "B", text: "There is no way to make a custom command available to an entire team automatically." },
      { id: "C", text: "In ~/.claude/commands/ on the original author's machine only, which stays personal and isn't shared via version control." },
      { id: "D", text: "In the project repository's .claude/commands/ (or an equivalent project-scoped skill), so it's version-controlled and shared with the team automatically." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Project-scoped commands/skills committed to the repo are exactly what's shared automatically via version control when someone clones it — a personal, user-scoped location (C) wouldn't be shared, a README (A) isn't an actual command definition, and this team-wide availability is well-supported (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.2 — custom slash commands and skills",
    difficulty: "easy",
  },
  {
    id: "arch-f-ccw-006",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.2",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A skill that performs a verbose, exploratory codebase analysis currently pollutes the main conversation with pages of intermediate output. What frontmatter option addresses this?",
    options: [
      { id: "A", text: "There is no way to isolate a skill's verbose output from the main conversation." },
      { id: "B", text: "context: fork, which runs the skill in an isolated sub-agent context, keeping its verbose output from cluttering the main conversation." },
      { id: "C", text: "allowed-tools, which restricts which tools the skill can use rather than isolating its output from the main conversation." },
      { id: "D", text: "argument-hint, which prompts for required parameters and is unrelated to output isolation." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "context: fork is specifically designed to run a skill in an isolated context, preventing its output from polluting the main conversation — allowed-tools (C) and argument-hint (D) address different concerns entirely, and this isolation capability does exist (A wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.2 — custom slash commands and skills",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-007",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.2",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A team wants a deployment-related skill to only be able to perform file-write operations, with no ability to run arbitrary shell commands, to reduce the risk of unintended destructive actions. What frontmatter option enforces this?",
    options: [
      { id: "A", text: "argument-hint, which only prompts for parameters and has no effect on which tools are available." },
      { id: "B", text: "There is no way to restrict which tools a skill can use during its execution." },
      { id: "C", text: "allowed-tools, configured in the skill's frontmatter to restrict tool access during that skill's execution to just the needed file-write capability." },
      { id: "D", text: "context: fork, which isolates conversation context but does not restrict tool access." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "allowed-tools is exactly the frontmatter mechanism for scoping a skill's tool access during execution — argument-hint (A) and context: fork (D) address different concerns, and this restriction capability is well-supported (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.2 — custom slash commands and skills",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-008",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.2",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A developer wants their own personal variant of a shared team skill, with slightly different behavior, without affecting how the skill works for the rest of the team. What is the recommended approach?",
    options: [
      { id: "A", text: "Create a personal variant with a different name in ~/.claude/skills/, so it exists alongside the shared team skill without modifying or affecting the version everyone else uses." },
      { id: "B", text: "There is no way to create a personal variant of a skill without affecting the team." },
      { id: "C", text: "Directly edit the shared, project-scoped skill file, since personal customization always requires modifying the team's shared version." },
      { id: "D", text: "Delete the shared skill entirely and replace it with the personal variant for everyone." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Creating a differently-named personal variant in the user-scoped skills directory is exactly the recommended way to customize without affecting teammates — directly editing the shared version (C) would affect everyone, personal customization without team impact is achievable (B wrong), and deleting the shared skill (D) removes it for everyone rather than adding a personal alternative.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.2 — custom slash commands and skills",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-009",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.2",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A team is deciding whether a piece of guidance belongs in CLAUDE.md or as a Skill. The guidance is a multi-step procedure only needed occasionally for a specific, infrequent task (e.g., 'how to rotate a specific credential'). Which is the better fit, and why?",
    options: [
      { id: "A", text: "The choice between CLAUDE.md and a Skill has no practical consequence either way." },
      { id: "B", text: "CLAUDE.md, since all guidance regardless of frequency of use should always be loaded into every session for consistency." },
      { id: "C", text: "Neither is appropriate; infrequent procedures cannot be captured in Claude Code configuration at all." },
      { id: "D", text: "A Skill, since it's invoked on demand rather than being loaded into every single session like CLAUDE.md — an infrequent, task-specific procedure doesn't need to consume context in every unrelated session." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "An infrequent, task-specific procedure is exactly the kind of guidance suited to a Skill's on-demand loading, rather than always-loaded CLAUDE.md content that would be irrelevant most of the time — loading everything into every session regardless of relevance (B) wastes context, this kind of guidance is capturable (C wrong), and the choice does have real context-usage consequences (A wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.2 — custom slash commands and skills",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-010",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.3",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A team wants API-design conventions to apply only when Claude Code is working with files under src/api/**, without affecting how it works elsewhere in the codebase. What configuration achieves this?",
    options: [
      { id: "A", text: "A directory-level CLAUDE.md placed outside of src/api/ entirely." },
      { id: "B", text: "A .claude/rules/ file with YAML frontmatter specifying a paths glob (e.g., paths: [\"src/api/**/*\"]), so the rule loads only when matching files are being worked on." },
      { id: "C", text: "There is no way to scope conventions to a specific subset of files in Claude Code." },
      { id: "D", text: "A single root CLAUDE.md with no path scoping, applied uniformly regardless of which files are being edited." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Path-scoped rules with a glob pattern are exactly the mechanism for conditionally applying conventions to a specific subset of files — a uniform root CLAUDE.md (D) can't express this conditional scoping, this capability exists (C wrong), and a directory-level file placed outside the target path (A) wouldn't apply to the intended files at all.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.3 — path-specific rules",
    difficulty: "easy",
  },
  {
    id: "arch-f-ccw-011",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.3",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "Test files in a codebase are scattered throughout many directories alongside the code they test, rather than being consolidated into one test directory. The team wants consistent testing conventions to apply to all of them regardless of location. Why is a path-specific rule with a glob pattern (e.g., **/*.test.tsx) a better fit than directory-level CLAUDE.md files here?",
    options: [
      { id: "A", text: "There is no meaningful difference between the two approaches for this scenario." },
      { id: "B", text: "Path-specific rules can only match files in a single specific directory, never across multiple directories." },
      { id: "C", text: "A glob-pattern rule matches files by type/name regardless of which directory they're in, while directory-level CLAUDE.md files are bound to specific directories and can't express 'this file type, wherever it appears.'" },
      { id: "D", text: "Directory-level CLAUDE.md files are strictly superior to path-specific rules in every scenario, including this one." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "This is exactly why glob-pattern rules fit scattered file types better — they match by pattern regardless of directory, which directory-bound CLAUDE.md files structurally can't do. Directory-level files aren't superior for this scattered-file scenario (D wrong), there is a meaningful, practical difference here (A wrong), and glob patterns are specifically capable of matching across multiple directories (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.3 — path-specific rules",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-012",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.3",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A large project has security-related conventions that should apply broadly across the entire codebase, not just one subdirectory or file type. Is a path-specific rule with a narrow glob pattern the right fit for this?",
    options: [
      { id: "A", text: "Not necessarily — path-specific rules are best suited to conventions that apply to a particular file type or directory; broadly-applicable conventions may be better placed in a rule with no paths restriction (or in CLAUDE.md itself), so they load unconditionally rather than only for a narrow match." },
      { id: "B", text: "Yes, path-specific rules with narrow glob patterns are always the best choice for every kind of convention, regardless of how broadly it should apply." },
      { id: "C", text: "Broadly-applicable conventions can only ever be expressed through a Skill, never through CLAUDE.md or rules." },
      { id: "D", text: "Path scoping has no effect on which files a rule's guidance actually reaches." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Path scoping is a tool for conditional, file-type/directory-specific application — a broadly-applicable convention is better served by unconditional loading, not narrowed to a glob pattern that would only match a subset of relevant files. Path-specific rules aren't the universally best choice regardless of scope (B wrong), path scoping directly determines when a rule loads (D wrong), and broad conventions are well expressed via CLAUDE.md or unscoped rules, not exclusively via Skills (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.3 — path-specific rules",
    difficulty: "hard",
  },
  {
    id: "arch-f-ccw-013",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.4",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A team is planning a migration from one major library to another, affecting roughly 45 files with multiple valid approaches to the migration order and compatibility shims. Which approach fits this task best?",
    options: [
      { id: "A", text: "Direct execution, starting to change files immediately with no upfront exploration, since starting immediately always produces the fastest overall outcome regardless of scale." },
      { id: "B", text: "Direct execution, since library migrations never involve any architectural decisions worth planning for." },
      { id: "C", text: "There is no meaningful difference between plan mode and direct execution for a task like this." },
      { id: "D", text: "Plan mode — exploring the codebase, understanding dependencies, and comparing approaches before committing to changes, given the scale and multiple valid directions involved." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A large-scale migration with multiple valid approaches is exactly the profile that benefits from plan mode's upfront exploration and design before committing to changes — starting immediately (A) risks costly rework from dependencies discovered too late, this kind of migration does involve real architectural decisions (B wrong), and the choice between the two modes has real practical consequences here (C wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.4 — plan mode vs direct execution",
    difficulty: "easy",
  },
  {
    id: "arch-f-ccw-014",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.4",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A developer needs to add a single, well-understood validation check to one function, with a clear stack trace pointing to exactly where the fix belongs. Which approach fits best?",
    options: [
      { id: "A", text: "This task cannot be completed with either plan mode or direct execution." },
      { id: "B", text: "Direct execution, since the change is well-scoped and well-understood, and plan mode's upfront exploration would add unnecessary overhead for a task this clear." },
      { id: "C", text: "Direct execution is never appropriate for any change involving a function, regardless of scope." },
      { id: "D", text: "Plan mode, since any code change, no matter how small or clear, always benefits from a full planning phase first." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A small, well-scoped, well-understood fix is exactly the case for direct execution — plan mode's exploration overhead isn't warranted here, contrary to the blanket claim in B. Direct execution is appropriate for clear, simple function-level changes (C wrong), and this task is well within what either mode could technically complete, though direct execution is the better fit (A wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.4 — plan mode vs direct execution",
    difficulty: "easy",
  },
  {
    id: "arch-f-ccw-015",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.4",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "During a multi-phase refactor, a developer wants to explore a codebase's structure in depth without the verbose discovery output overwhelming the main conversation's context. What Claude Code feature addresses this?",
    options: [
      { id: "A", text: "Direct execution automatically isolates verbose output with no additional feature needed." },
      { id: "B", text: "There is no way to prevent verbose exploration output from consuming the main conversation's context." },
      { id: "C", text: "The Explore subagent, which isolates verbose discovery output and returns a summary, preserving the main conversation's context for the higher-level task." },
      { id: "D", text: "Plan mode has no relationship to managing verbose discovery output during exploration." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "The Explore subagent is specifically designed to isolate verbose discovery output and return a summary, keeping the main conversation focused — this is a real, useful capability, often used alongside plan mode (contradicting D), it does exist (B wrong), and direct execution doesn't provide this isolation on its own (A wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.4 — plan mode vs direct execution",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-016",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.4",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A team is choosing between two infrastructure approaches for a new service, each with meaningfully different operational requirements. Is this the kind of decision plan mode is designed for?",
    options: [
      { id: "A", text: "Yes — choosing between architecturally different approaches with real operational tradeoffs is exactly the kind of decision plan mode's exploration and design phase is meant to support before committing to changes." },
      { id: "B", text: "No; plan mode is exclusively for renaming variables and has no relevance to infrastructure or architectural decisions." },
      { id: "C", text: "No; infrastructure decisions should always be made with direct execution and no upfront exploration." },
      { id: "D", text: "This kind of decision falls entirely outside what Claude Code can help with in any mode." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Choosing between architecturally distinct approaches with real tradeoffs is precisely the scenario plan mode targets — it's not limited to trivial renames (B wrong), skipping exploration for a decision like this (C) risks a poorly-informed choice, and this kind of architectural decision-support is well within Claude Code's intended use (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.4 — plan mode vs direct execution",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-017",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.5",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A developer's prose description of a desired data transformation keeps being interpreted inconsistently across attempts. What is the most effective way to communicate the exact desired transformation?",
    options: [
      { id: "A", text: "Switch to a completely unrelated task instead of continuing to refine the description." },
      { id: "B", text: "Make the prose description even longer and more abstract, since additional abstract detail always resolves ambiguity." },
      { id: "C", text: "Provide no further clarification and expect the model to eventually converge on the correct interpretation through repetition alone." },
      { id: "D", text: "Provide 2-3 concrete input/output examples demonstrating the exact transformation, which communicates the expected behavior more reliably than prose description alone." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Concrete input/output examples are specifically called out as more effective than prose for communicating an exact transformation when descriptions are being interpreted inconsistently — more abstract prose (B) tends to increase rather than reduce ambiguity, unclarified repetition (C) doesn't add new information, and abandoning the task (A) doesn't solve the actual communication problem.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.5 — iterative refinement techniques",
    difficulty: "easy",
  },
  {
    id: "arch-f-ccw-018",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.5",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "Before implementing a solution in an unfamiliar domain (e.g., a caching layer with subtle invalidation requirements), a developer has Claude ask clarifying questions about failure modes and edge cases before writing any code. What technique is this?",
    options: [
      { id: "A", text: "This approach has no name and offers no benefit over immediately writing code with no upfront discussion." },
      { id: "B", text: "The interview pattern — surfacing design considerations the developer may not have anticipated (like cache invalidation strategies) before implementation begins, rather than after a flawed first attempt." },
      { id: "C", text: "Test-driven iteration, which specifically requires writing test suites first rather than asking clarifying questions." },
      { id: "D", text: "The interview pattern can only be used for non-technical writing tasks, never for implementation work." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "This is exactly the interview pattern — surfacing considerations before implementation, especially valuable in unfamiliar domains — distinct from test-driven iteration's test-first approach (C), and it does offer real benefit over skipping straight to code (A wrong); it's applicable to technical implementation work, not just non-technical writing (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.5 — iterative refinement techniques",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-019",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.5",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A developer finds two separate issues in a generated migration script: null values aren't handled, and the date format doesn't match the target system. The two issues interact (the null-handling fix changes how dates are parsed). What is the recommended way to communicate this feedback?",
    options: [
      { id: "A", text: "Always address every issue strictly one at a time in separate messages, regardless of whether the issues interact." },
      { id: "B", text: "Discard the migration script entirely and start over from a blank prompt with no reference to what was already built." },
      { id: "C", text: "Address both interacting issues together in a single, detailed message, since fixing them separately risks the second fix undoing or conflicting with the first." },
      { id: "D", text: "Ignore one of the two issues entirely to simplify the feedback." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "When issues genuinely interact, addressing them together in one detailed message avoids a sequential fix undoing or conflicting with another — always fixing issues strictly one at a time regardless of interaction (A) is the wrong default here, ignoring a known real issue (D) leaves a defect unresolved, and discarding otherwise-good work (B) is an unnecessary overcorrection.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.5 — iterative refinement techniques",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-020",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.5",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A developer wants to reduce edge-case bugs (e.g., handling of null values) in a data-processing script before it's considered done. What iterative technique specifically targets this?",
    options: [
      { id: "A", text: "Test-driven iteration — writing a test suite covering expected behavior and edge cases first, then iterating by sharing test failures to guide progressive improvement." },
      { id: "B", text: "Discarding all tests entirely, since testing has no relationship to catching edge-case bugs." },
      { id: "C", text: "The interview pattern, which is specifically about surfacing design considerations before implementation rather than validating an already-written implementation against edge cases." },
      { id: "D", text: "There is no iterative technique that specifically targets edge-case robustness." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Test-driven iteration — writing tests covering edge cases first, then iterating against failures — is exactly the technique for this goal, distinct from the interview pattern's pre-implementation focus (C). This kind of targeted technique does exist (D wrong), and testing is directly related to catching edge-case bugs, not unrelated (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.5 — iterative refinement techniques",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-021",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.6",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests.",
    stem:
      "A CI pipeline script runs `claude \"Review this PR for security issues\"` and the job hangs indefinitely, with logs showing Claude Code waiting for interactive input. What is the correct fix?",
    options: [
      { id: "A", text: "Increase the CI job's timeout indefinitely, since hanging is unavoidable in automated pipelines." },
      { id: "B", text: "Run the exact same command again, since it will eventually stop hanging on its own." },
      { id: "C", text: "Remove Claude Code from the pipeline entirely, since it can never run in an automated context." },
      { id: "D", text: "Add the -p (--print) flag to run Claude Code non-interactively, so it processes the prompt and exits without waiting for interactive input." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "The -p/--print flag is exactly the documented fix for this hanging behavior in automated pipelines — simply extending the timeout (A) doesn't address the root cause, removing Claude Code from CI entirely (C) is an overcorrection given it's well-supported for this use case, and retrying the identical command (B) won't change the underlying behavior.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.6 — integrating Claude Code into CI/CD pipelines",
    difficulty: "easy",
  },
  {
    id: "arch-f-ccw-022",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.6",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests.",
    stem:
      "A team wants automated code-review findings from Claude Code to be posted as structured, machine-parseable inline PR comments rather than free-form prose. What CLI flags support this?",
    options: [
      { id: "A", text: "The -p flag alone, which addresses non-interactive execution but not output structure." },
      { id: "B", text: "--output-format json combined with --json-schema, producing structured findings that can be reliably parsed and posted as inline comments." },
      { id: "C", text: "There is no way to get structured, machine-parseable output from Claude Code for CI purposes." },
      { id: "D", text: "Free-form prose output is always easier to parse reliably than structured JSON output." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "--output-format json with --json-schema is exactly the combination for producing structured, parseable findings — -p alone (A) addresses interactivity, not output format, this structured output capability exists (C wrong), and structured JSON is more reliably parseable than free-form prose, not less (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.6 — integrating Claude Code into CI/CD pipelines",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-023",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.6",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests.",
    stem:
      "A team wants CI-invoked Claude Code reviews to follow the team's specific testing standards and review criteria consistently across every PR. How should this context be provided?",
    options: [
      { id: "A", text: "There is no way to provide persistent project context to a CI-invoked Claude Code session." },
      { id: "B", text: "CLAUDE.md is ignored entirely when Claude Code runs in a CI/non-interactive context." },
      { id: "C", text: "Document the testing standards and review criteria in CLAUDE.md, which CI-invoked Claude Code reads just as it would in an interactive session, ensuring consistent context across every automated run." },
      { id: "D", text: "Re-type the full review criteria as a one-off argument to the CI command every single time, with no persisted configuration." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "CLAUDE.md serves the same role in CI-invoked runs as in interactive sessions — providing consistent, persisted project context automatically — rather than needing to be re-typed for every invocation (D), and it is read in CI contexts, not ignored (A, B both wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.6 — integrating Claude Code into CI/CD pipelines",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-024",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.6",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests.",
    stem:
      "A team has Claude Code review its own just-generated code changes within the same session that produced them. What limitation does this design have compared to using an independent review session?",
    options: [
      { id: "A", text: "The same session retains the reasoning that led to its own decisions, making it less likely to question or catch subtle issues in its own output, compared to an independent instance without that prior context." },
      { id: "B", text: "There is no limitation; self-review within the same session is always exactly as effective as an independent review instance." },
      { id: "C", text: "Self-review is impossible; the same session can never be asked to review its own output." },
      { id: "D", text: "This limitation only applies to code involving fewer than 10 lines." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Retaining the reasoning behind its own prior decisions makes a session less likely to catch its own subtle mistakes — an independent review instance, without that context, is more effective at catching such issues. This isn't equally effective (B wrong), self-review is technically possible even if less effective (C wrong), and this limitation isn't gated by a specific line count (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.6 — integrating Claude Code into CI/CD pipelines",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-025",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.6",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests.",
    stem:
      "After a developer pushes new commits addressing prior review feedback, the CI-invoked review runs again and re-reports the same issues that were already fixed, alongside genuinely new findings. What would prevent this duplication?",
    options: [
      { id: "A", text: "Re-running the review with a completely different, unrelated prompt each time to introduce variety." },
      { id: "B", text: "Disabling code review in CI entirely after the first run on any PR." },
      { id: "C", text: "There is no way to avoid duplicate findings across repeated CI review runs." },
      { id: "D", text: "Including the prior review findings in context when re-running the review, and instructing Claude to report only new or still-unaddressed issues rather than re-surfacing everything from scratch." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Feeding prior findings into context and instructing the model to focus on what's new or unaddressed is exactly the recommended fix for this duplication problem — this is avoidable (C wrong), disabling review after the first pass (B) loses valuable ongoing feedback, and an unrelated prompt each time (A) doesn't address the actual duplication issue.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.6 — integrating Claude Code into CI/CD pipelines",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-026",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.6",
    type: "mcq",
    scenarioContext:
      "You are integrating Claude Code into your CI/CD pipeline. The system runs automated code reviews, generates test cases, and provides feedback on pull requests.",
    stem:
      "A CI-invoked test-generation feature keeps suggesting test cases that duplicate scenarios already covered by the existing test suite. What would reduce this redundancy?",
    options: [
      { id: "A", text: "Running test generation with no visibility into the existing test suite at all, since this has no bearing on redundancy." },
      { id: "B", text: "Providing the existing test files in context so test generation is aware of what's already covered and can focus on genuinely missing scenarios." },
      { id: "C", text: "Generating tests in a completely separate repository with no connection to the actual codebase being tested." },
      { id: "D", text: "Disabling test generation entirely, since redundant test suggestions cannot be reduced through any configuration change." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Providing the existing test files as context directly gives the generation step the information needed to avoid suggesting already-covered scenarios — running with no such visibility (A) is exactly what causes the redundancy, this is a fixable configuration issue (D wrong), and generating tests disconnected from the actual codebase (C) wouldn't produce usable, relevant tests at all.",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.6 — integrating Claude Code into CI/CD pipelines",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-027",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.1",
    type: "scenario-multi-response",
    stem:
      "Which two statements about CLAUDE.md configuration hierarchy are accurate? (Select 2)",
    options: [
      { id: "A", text: "User-level CLAUDE.md (~/.claude/CLAUDE.md) applies only to that individual user's own sessions, not the whole team." },
      { id: "B", text: "Project-level CLAUDE.md files (e.g., .claude/CLAUDE.md or root CLAUDE.md) are shared with the team through version control." },
      { id: "C", text: "User-level and project-level CLAUDE.md files are always functionally identical with no scoping difference." },
      { id: "D", text: "Only one CLAUDE.md file, at only one scope, can ever be active for a given Claude Code session." },
    ],
    correctOptionIds: ["A","B"],
    selectCount: 2,
    explanation:
      "Project-level being version-controlled and team-shared (B), and user-level staying personal (A), accurately describe the intended distinction. The two scopes are not functionally identical (C wrong), and multiple CLAUDE.md files across different scopes can be active and combined for a single session, not limited to just one (D wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.1 — CLAUDE.md hierarchy, scoping, and modular organization",
    difficulty: "medium",
  },
  {
    id: "arch-f-ccw-028",
    certificationSlug: "architect-foundations",
    domain: "Claude Code Configuration & Workflows",
    taskStatement: "3.4",
    type: "mcq",
    scenarioContext:
      "You are using Claude Code to accelerate software development across a team. You use it for code generation, refactoring, debugging, and documentation, and need to integrate it into your development workflow with custom slash commands and CLAUDE.md configurations.",
    stem:
      "A developer plans a library migration using plan mode, arriving at a clear, well-understood implementation approach. What is the recommended next step once the plan is settled?",
    options: [
      { id: "A", text: "Continue using plan mode indefinitely for the entire implementation, since switching modes partway through a task is never appropriate." },
      { id: "B", text: "Plan mode and direct execution can never be used together for the same overall task." },
      { id: "C", text: "Switch to direct execution to implement the now-clear, well-understood plan, since plan mode's exploratory value has already been captured and further planning overhead isn't needed for the execution phase." },
      { id: "D", text: "Discard the plan entirely and start the exploration over from scratch before implementing anything." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Combining plan mode for investigation with direct execution for the now-clear implementation is exactly the recommended pattern — continuing to plan indefinitely once the approach is settled (A) adds unnecessary overhead, discarding a good plan (D) wastes the exploration's value, and combining the two modes across a task's phases is a well-supported and common workflow (B wrong).",
    citation:
      "Claude Certified Architect – Foundations Exam Guide, Domain 3, Task Statement 3.4 — plan mode vs direct execution",
    difficulty: "medium",
  },
];
