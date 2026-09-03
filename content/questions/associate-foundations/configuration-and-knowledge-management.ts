import type { QuestionInput } from "../../schema/question";

const DOMAIN = "Configuration and Knowledge Management" as const;
const CERT = "associate-foundations" as const;
const O1 = "Configure Claude Projects with instructions and knowledge sources" as const;
const O2 = "Manage uploaded knowledge and connectors (e.g., Google Drive, Gmail)" as const;
const O3 = "Create effective system-level instructions" as const;
const O4 = "Inform, maintain, and update Claude configurations, knowledge sources, and instructions" as const;

export const questions: QuestionInput[] = [
  {
    id: "assoc-ckm-001",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A support team sets up a Project meant to answer questions using the company's product documentation, but never actually uploads the documentation as a knowledge source. What is the likely result?",
    options: [
      { id: "A", text: "Claude will still answer perfectly, since Projects work identically with or without knowledge sources." },
      { id: "B", text: "Claude will lack grounding in the specific product documentation and may answer from general knowledge instead, which may not match the actual product." },
      { id: "C", text: "The Project will fail to load entirely without a knowledge source." },
      { id: "D", text: "Knowledge sources are only relevant for coding-related Projects." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Without the actual knowledge source uploaded, Claude has nothing specific to ground answers in and may fall back on general knowledge that doesn't match the real product — this isn't a Project-loading failure (C), knowledge sources matter well beyond coding Projects (D), and results are not identical with or without grounding material (A).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 (Configuration and Knowledge Management) — 'Configure Claude Projects with instructions and knowledge sources'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-002",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A team sets up a Project for drafting client proposals but writes instructions like 'be helpful and professional' with no other detail. What is the most likely limitation of this configuration?",
    options: [
      { id: "A", text: "This is a fully sufficient configuration for consistent, on-brand proposal drafts." },
      { id: "B", text: "Vague instructions like this give little concrete guidance on tone, structure, or required sections, so outputs may vary more than the team wants." },
      { id: "C", text: "Instructions this short will cause the Project to malfunction." },
      { id: "D", text: "Instructions only matter if a knowledge source is also present." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Vague, generic instructions ('be professional') give little concrete guidance and tend to produce inconsistent results — this isn't a technical malfunction (C), and instructions matter on their own regardless of whether a knowledge source is also configured (D), so the configuration as described is not actually sufficient (A wrong).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Configure Claude Projects with instructions and knowledge sources'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-003",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A legal team wants a Project that consistently references their actual contract templates and standard clauses when drafting new agreements. What two things does this Project most need to be configured with?",
    options: [
      { id: "A", text: "Only a catchy Project name, with no other configuration needed." },
      { id: "B", text: "Specific instructions about how contracts should be drafted, plus the actual contract templates and standard clauses uploaded as knowledge sources." },
      { id: "C", text: "A knowledge source only, with no instructions at all." },
      { id: "D", text: "Instructions only, with no knowledge sources, since Claude already knows standard contract language." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Consistent, grounded contract drafting needs both clear instructions on how to draft and the actual reference material (templates, standard clauses) as knowledge — a name alone (A) configures nothing, and skipping either instructions (C) or the company's actual templates (D) leaves out something needed for this specific, grounded use case.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Configure Claude Projects with instructions and knowledge sources'",
    difficulty: "easy",
  },
  {
    id: "assoc-ckm-004",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "scenario-multi-response",
    stem:
      "A marketing team is setting up a Project for on-brand social media drafts. Which two configuration choices would most improve consistency? (Select 2)",
    options: [
      { id: "A", text: "Upload the actual brand style guide as a knowledge source." },
      { id: "B", text: "Write specific instructions describing the desired tone and any words/phrases to avoid." },
      { id: "C", text: "Leave the Project completely unconfigured and rely on each team member's individual phrasing in every request." },
      { id: "D", text: "Use a different, newly created Project for every single post to keep things 'fresh.'" },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Uploading the actual style guide (A) and writing specific tone instructions (B) both directly improve consistency. Leaving the Project unconfigured (C) forces everyone to re-explain context individually, and creating a new Project for every post (D) discards the persistence a Project is meant to provide.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Configure Claude Projects with instructions and knowledge sources'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-005",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A team configures a Project with excellent instructions and knowledge sources for handling customer refund inquiries, then also uses this same Project for unrelated internal HR questions. What is the concern with this approach?",
    options: [
      { id: "A", text: "There is no concern; a Project's configuration is equally suited to any topic once it's set up well." },
      { id: "B", text: "The refund-specific instructions and knowledge may not fit an unrelated HR question well, and could even produce confusing or inappropriate responses for that different context." },
      { id: "C", text: "Projects can only ever be used for one single question, ever." },
      { id: "D", text: "The only concern is that the Project's name might be misleading." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A Project's configuration is tailored to its intended purpose — applying refund-specific instructions and knowledge to an unrelated HR question risks a mismatched or confusing response, not a universally good fit (A). This isn't a one-question limitation (C), and the issue is deeper than just naming (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Configure Claude Projects with instructions and knowledge sources'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-006",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A finance team wants a Project to help draft monthly variance reports, always following the same structure and referencing the prior month's approved report as a style reference. What is a good way to configure this?",
    options: [
      { id: "A", text: "Upload the prior month's approved report as a knowledge source and add instructions describing the expected structure and how it should stay consistent month to month." },
      { id: "B", text: "Configure the Project with no reference material at all, and just describe the desired structure verbally each month in the chat." },
      { id: "C", text: "Only upload the prior report, with no instructions about desired structure." },
      { id: "D", text: "Avoid using a Project at all, since financial reports are too sensitive for any configuration." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Combining a concrete reference example (the prior approved report) with explicit structural instructions gives the Project both a style anchor and clear expectations — describing structure fresh every month without persisting it (B) forfeits the benefit of a Project, and skipping either the reference (C) or the tool entirely due to sensitivity (D) isn't the appropriate response to a routine internal reporting task.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Configure Claude Projects with instructions and knowledge sources'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-007",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A team connects their shared Google Drive folder to a Project so Claude can reference the latest versions of key documents. What is the main advantage of this connector approach compared to manually uploading files?",
    options: [
      { id: "A", text: "There is no real advantage; connectors and manual uploads behave identically in every respect." },
      { id: "B", text: "The connector can reflect the current state of frequently-updated documents without requiring someone to manually re-upload a new file every time something changes." },
      { id: "C", text: "Connectors are only useful for image files." },
      { id: "D", text: "Connectors remove the need to ever think about what's being shared with the Project." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A live connector avoids the maintenance burden of manually re-uploading a file every time it changes, which is its main practical advantage over static uploads — this isn't limited to images (C), and being connected doesn't mean the team should stop being deliberate about what's shared (D), so the two approaches aren't equivalent in general (A wrong).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Manage uploaded knowledge and connectors'",
    difficulty: "easy",
  },
  {
    id: "assoc-ckm-008",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A team is considering connecting their email inbox to a Project so Claude can help draft replies. What is an important consideration before doing this?",
    options: [
      { id: "A", text: "None — inboxes should always be connected by default for maximum convenience." },
      { id: "B", text: "Consider what sensitive or personal information might be in that inbox and whether it's appropriate for this connector's intended use, rather than connecting it just because it's convenient." },
      { id: "C", text: "Email connectors are purely hypothetical and don't need any real consideration." },
      { id: "D", text: "The only consideration is how many emails are in the inbox." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Connecting a data source as sensitive as an inbox deserves a deliberate check of what's actually in it and whether that's appropriate to share, rather than connecting everything by default for convenience (A) — inbox size (D) isn't the relevant concern, and this is a real, practical consideration, not a hypothetical one (C).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Manage uploaded knowledge and connectors'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-009",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A team member leaves the company, but the Google Drive folder they originally connected to a shared Project remains connected under their now-deactivated account. What is the appropriate action?",
    options: [
      { id: "A", text: "Leave it as-is indefinitely, since connectors don't need ongoing management once set up." },
      { id: "B", text: "Review and reconfigure the connector (e.g., reconnect it under an active account or appropriate service account) so the Project's access doesn't depend on a departed employee's credentials." },
      { id: "C", text: "Delete the entire Project rather than reviewing the connector." },
      { id: "D", text: "Ignore the issue unless the connector visibly breaks." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Connectors tied to a departed employee's account are a real access-management issue that should be proactively reviewed and fixed — leaving it indefinitely (A) or waiting for a visible break (D) risks an access or continuity problem, and deleting the whole Project (C) is a bigger overcorrection than the situation calls for.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Manage uploaded knowledge and connectors'",
    difficulty: "hard",
  },
  {
    id: "assoc-ckm-010",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "scenario-multi-response",
    stem:
      "A team is deciding whether to connect a shared drive folder to a Project used by the whole department. Which two practices reflect responsible connector management? (Select 2)",
    options: [
      { id: "A", text: "Review what's actually inside the folder before connecting it, to confirm nothing overly sensitive is included that shouldn't be broadly accessible this way." },
      { id: "B", text: "Periodically revisit which connectors are active and whether they're still needed and appropriately scoped." },
      { id: "C", text: "Connect every available folder and inbox by default to maximize the amount of information available." },
      { id: "D", text: "Set up the connector once and never revisit it again regardless of organizational changes." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Reviewing content before connecting (A) and periodically revisiting active connectors (B) are responsible management practices. Connecting everything by default (C) ignores the sensitivity review that matters, and never revisiting a connector (D) risks it becoming stale or inappropriate as circumstances change.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Manage uploaded knowledge and connectors'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-011",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A team notices that a Project's connected Drive folder now includes a new subfolder with confidential HR files that were never intended to be part of this Project's shared knowledge. What is the correct response?",
    options: [
      { id: "A", text: "Leave it connected, since removing access might disrupt the Project's current setup." },
      { id: "B", text: "Adjust the connector's scope (or the folder structure) so the confidential HR subfolder is no longer included in what the Project can access." },
      { id: "C", text: "Delete the confidential files entirely rather than adjusting the connector." },
      { id: "D", text: "Do nothing unless someone specifically asks the Project a question referencing those files." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Once inappropriate content is discovered within a connected source, narrowing the connector's scope to exclude it is the right fix — leaving it connected (A) or waiting for a specific incident before acting (D) both leave the exposure in place, and deleting the underlying files (C) is a more drastic and unnecessary step compared to fixing the connector's scope.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Manage uploaded knowledge and connectors'",
    difficulty: "hard",
  },
  {
    id: "assoc-ckm-012",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team writes a system-level instruction for their support Project that says: 'Be nice.' What is the main limitation of this instruction?",
    options: [
      { id: "A", text: "It is perfectly sufficient and needs no further detail." },
      { id: "B", text: "It's vague and doesn't specify concrete behaviors (tone, format, what to do in edge cases), so it's unlikely to produce consistent results." },
      { id: "C", text: "It's too long and should be shortened further." },
      { id: "D", text: "System-level instructions cannot include anything about tone." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A vague instruction like this gives no concrete behavior to follow consistently — it's actually too short and unspecific to be effective (C is backwards), and instructions absolutely can and should address tone (D wrong), so this instruction is not sufficient as-is (A wrong).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Create effective system-level instructions'",
    difficulty: "easy",
  },
  {
    id: "assoc-ckm-013",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "Which system-level instruction is most likely to produce consistent, useful results for a customer-support Project?",
    options: [
      { id: "A", text: "'Answer customer questions.'" },
      { id: "B", text: "'Answer customer questions using only the uploaded product documentation. If the documentation doesn't cover the question, say so explicitly and suggest escalating to a human agent rather than guessing.'" },
      { id: "C", text: "'Be as detailed as possible in every response, regardless of the question.'" },
      { id: "D", text: "'Try to sound smart.'" },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Option B gives concrete, specific guidance — what source to rely on, and exactly what to do when that source doesn't cover something — which is what produces consistent, appropriate behavior. The others are all too vague to reliably guide behavior in edge cases.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Create effective system-level instructions'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-014",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A Project's system instructions include two lines that contradict each other: 'Always keep responses under 100 words' and 'Always include a full explanation of the reasoning behind every recommendation.' What is the likely effect?",
    options: [
      { id: "A", text: "Both instructions will always be followed perfectly and simultaneously with no tension." },
      { id: "B", text: "The conflicting instructions may be resolved inconsistently across different responses, since they can't both be fully satisfied at once." },
      { id: "C", text: "The Project will refuse to respond to anything." },
      { id: "D", text: "Only the first instruction written will ever be followed, and the second is always ignored." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Contradictory instructions can be resolved differently across different responses, producing inconsistency — they don't reliably both hold at once (A), they don't cause outright refusal (C), and it's not accurate that only the first-written instruction always wins (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Create effective system-level instructions'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-015",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "scenario-multi-response",
    stem:
      "Which two qualities make a system-level instruction more effective? (Select 2)",
    options: [
      { id: "A", text: "Specificity — describing concrete expected behaviors rather than vague adjectives." },
      { id: "B", text: "Internal consistency — instructions that don't contradict each other." },
      { id: "C", text: "Maximum length — the longer the instructions, the more effective they always are." },
      { id: "D", text: "Vagueness — leaving as much open to interpretation as possible." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Concrete specificity (A) and internal consistency (B) are what make instructions reliably followed. Length alone (C) doesn't guarantee effectiveness, and deliberate vagueness (D) is the opposite of what produces consistent behavior.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Create effective system-level instructions'",
    difficulty: "easy",
  },
  {
    id: "assoc-ckm-016",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A Project's system instructions specify a required output format ('always respond with a summary, then three action items, then a risk callout') but nothing about tone. What is the appropriate conclusion?",
    options: [
      { id: "A", text: "The instructions are incomplete and unusable without a stated tone." },
      { id: "B", text: "This is a reasonably effective instruction for controlling structure; if tone consistency also matters for this Project's purpose, that could be added, but its absence doesn't invalidate what's already specified." },
      { id: "C", text: "Format-related instructions are not a legitimate thing to specify." },
      { id: "D", text: "Only tone-related instructions are ever useful; format doesn't matter." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A concrete structural instruction is genuinely useful on its own — it doesn't need to cover every dimension (tone included) to have value, so it isn't unusable (A) or illegitimate (C), and structure is just as legitimate a thing to specify as tone (D wrong).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Create effective system-level instructions'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-017",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team wants a Project's instructions to prevent Claude from ever making up specific figures when the uploaded knowledge doesn't contain an exact answer. Which instruction best achieves this?",
    options: [
      { id: "A", text: "'Try to be accurate.'" },
      { id: "B", text: "'If the uploaded documentation does not contain the specific figure being asked about, say so explicitly rather than estimating or inventing a number.'" },
      { id: "C", text: "'Always provide a specific number, even if you have to guess.'" },
      { id: "D", text: "'Avoid using numbers in responses.'" },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Explicitly instructing the model to admit when a specific figure isn't available, rather than inventing one, directly targets the fabrication risk being described. A vague accuracy plea (A) doesn't give concrete guidance, explicitly requesting a guess (C) causes the exact problem being avoided, and banning numbers altogether (D) overcorrects and removes legitimate, sourced figures too.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Create effective system-level instructions'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-018",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A company's refund policy changes, but the Project instructions used to draft refund-related customer responses still reference the old policy terms three months later. What is the issue?",
    options: [
      { id: "A", text: "There is no issue, since the instructions were correct when originally written." },
      { id: "B", text: "The configuration has gone stale — it should have been updated when the policy changed, since outdated instructions can now produce responses that don't reflect current policy." },
      { id: "C", text: "Instructions never need to be revisited once written." },
      { id: "D", text: "This is only a problem if a customer specifically complains." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Configuration that was correct once can become stale as underlying facts (like policy) change — being correct originally (A) doesn't matter once reality has moved on, and the fix shouldn't wait for a complaint to surface it (D); ongoing maintenance is required (C wrong).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Inform, maintain, and update Claude configurations, knowledge sources, and instructions'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-019",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A Project's knowledge source includes a product spec document that was superseded by a new version six months ago, but the old file was never removed or replaced. What is the best practice being violated here?",
    options: [
      { id: "A", text: "Knowledge sources don't need to be kept current once uploaded." },
      { id: "B", text: "Knowledge sources should be kept up to date, replacing or removing superseded material so Claude isn't grounding answers in outdated information." },
      { id: "C", text: "Old documents should always be kept alongside new ones indefinitely, with no distinction made." },
      { id: "D", text: "This is only a problem if someone asks about the exact section that changed." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Keeping knowledge sources current — removing or replacing superseded material — is part of ongoing configuration maintenance; leaving stale material in place (A, C) risks grounding answers in outdated facts, and this risk exists regardless of whether someone happens to ask about the exact changed section (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Inform, maintain, and update Claude configurations, knowledge sources, and instructions'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-020",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "scenario-multi-response",
    stem:
      "A team wants to keep a shared Project's configuration healthy over time. Which two practices support this? (Select 2)",
    options: [
      { id: "A", text: "Periodically review the Project's instructions and knowledge sources to confirm they still reflect current policies and processes." },
      { id: "B", text: "Assign clear ownership for who is responsible for updating the Project's configuration when something relevant changes." },
      { id: "C", text: "Set up the configuration once at launch and never revisit it again." },
      { id: "D", text: "Let anyone on the team make undocumented changes to the instructions whenever they feel like it, with no coordination." },
    ],
    correctOptionIds: ["A", "B"],
    selectCount: 2,
    explanation:
      "Periodic review (A) and clear ownership for updates (B) are what keep a shared configuration accurate and maintained over time. Setting it up once and never revisiting (C) leads to staleness, and uncoordinated, undocumented changes by anyone (D) risks conflicting or untracked configuration drift.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Inform, maintain, and update Claude configurations, knowledge sources, and instructions'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-021",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A new team member joins and starts using a shared Project, but isn't told about an important instruction buried in it that affects how they should phrase requests. What does this suggest about how the Project has been maintained?",
    options: [
      { id: "A", text: "Nothing needs to change; new team members should be expected to discover configuration details on their own over time." },
      { id: "B", text: "Important configuration details and their rationale should be actively communicated to new users of a shared Project, not left for them to stumble upon." },
      { id: "C", text: "The instruction should be deleted since it's apparently not important if it went unnoticed." },
      { id: "D", text: "Shared Projects should never contain any instructions that need explaining." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Actively communicating important configuration details to new users — rather than expecting organic discovery (A) — is part of responsibly maintaining a shared Project. The instruction going unnoticed doesn't mean it's unimportant (C), and needing some explanation doesn't mean instructions shouldn't exist at all (D).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Inform, maintain, and update Claude configurations, knowledge sources, and instructions'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-022",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "After several months of use, a team notices a shared Project's instructions have accumulated many small, one-off additions, some of which now contradict each other. What is the best way to address this?",
    options: [
      { id: "A", text: "Leave all the additions in place indefinitely, since removing anything might break something." },
      { id: "B", text: "Periodically review and consolidate the instructions, removing outdated or conflicting additions so the configuration stays coherent." },
      { id: "C", text: "Delete the Project entirely and never configure a replacement." },
      { id: "D", text: "Add even more instructions on top without reviewing the existing ones." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Periodic review and consolidation is the healthy way to manage configuration that's accumulated conflicts over time — leaving it all in place (A) preserves the contradictions, abandoning the Project entirely (C) is an overreaction, and piling on more without review (D) makes the underlying problem worse.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Inform, maintain, and update Claude configurations, knowledge sources, and instructions'",
    difficulty: "hard",
  },
  {
    id: "assoc-ckm-023",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A team lead updates a shared Project's instructions to reflect a new process, but doesn't tell the rest of the team the change was made. What risk does this create?",
    options: [
      { id: "A", text: "No risk, since the instructions themselves are now correct." },
      { id: "B", text: "Team members may be confused by a sudden change in behavior they weren't told about, or may not trust or understand why outputs changed." },
      { id: "C", text: "The Project will automatically notify everyone regardless of whether the team lead says anything." },
      { id: "D", text: "This is only a risk if the new instructions are themselves wrong." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Even a correct configuration change can cause confusion or lost trust if it isn't communicated to the people who rely on the Project — correctness of the update alone (A, D) doesn't address the communication gap, and updates aren't automatically surfaced to every user without being told (C wrong).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Inform, maintain, and update Claude configurations, knowledge sources, and instructions'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-024",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A quarterly review reveals a Project's knowledge source hasn't been checked for accuracy since it was first uploaded over a year ago. What is the most appropriate action?",
    options: [
      { id: "A", text: "Assume it's still accurate, since nothing has been reported as wrong." },
      { id: "B", text: "Review the knowledge source against current, authoritative information and update or replace anything that has become outdated." },
      { id: "C", text: "Remove all knowledge sources permanently to avoid this problem in the future." },
      { id: "D", text: "Wait for the next annual review before taking any action." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "A scheduled review is exactly the right moment to check accuracy against current facts and update what's stale — the absence of reported problems (A) isn't the same as confirmed accuracy, removing knowledge sources entirely (C) throws away real value, and delaying action further (D) just extends the staleness that was just identified.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Inform, maintain, and update Claude configurations, knowledge sources, and instructions'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-025",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O4,
    type: "mcq",
    stem:
      "A regulatory requirement changes in a way that affects how a Project handling compliance-related drafts should behave. Who is responsible for making sure the Project's instructions reflect this change?",
    options: [
      { id: "A", text: "No one — Claude will automatically detect the regulatory change and update its own behavior." },
      { id: "B", text: "The team or individual who owns the Project's configuration, since instructions don't update themselves and this is a human maintenance responsibility." },
      { id: "C", text: "The regulator is responsible for updating the Project directly." },
      { id: "D", text: "This never needs to be addressed, since the exam guide doesn't require staying current with regulations." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Configuration doesn't update itself in response to external changes — the humans who own the Project are responsible for noticing and applying necessary updates. Assuming automatic detection (A) or that an outside party will do it (C) misunderstands how configuration works, and staying current with relevant requirements is squarely part of responsible maintenance (D wrong).",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Inform, maintain, and update Claude configurations, knowledge sources, and instructions'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-026",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O1,
    type: "mcq",
    stem:
      "A team building a Project for internal IT helpdesk support wants Claude to reference the actual current list of approved software, rather than a general sense of common software. What configuration best supports this?",
    options: [
      { id: "A", text: "Upload the actual current approved-software list as a knowledge source, and instruct Claude to check requests against that specific list." },
      { id: "B", text: "Skip any knowledge source and rely on general knowledge about common enterprise software instead." },
      { id: "C", text: "Only write instructions describing software approval in the abstract, without providing the actual list." },
      { id: "D", text: "Ask employees to look up the approved list themselves instead of configuring the Project at all." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Grounding this Project in the company's actual, current approved list — combined with an instruction to check against it — is what makes it useful for this specific purpose. Relying on general knowledge instead of the real list (B) or describing the concept without providing the actual data (C) both leave the Project ungrounded, and abandoning the Project idea (D) discards a genuinely useful configuration opportunity.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Configure Claude Projects with instructions and knowledge sources'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-027",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O2,
    type: "mcq",
    stem:
      "A team wants to connect a shared calendar to a Project so Claude can help schedule meetings, but the calendar also contains some personal, non-work appointments for team members. What is an appropriate consideration?",
    options: [
      { id: "A", text: "Connect the full calendar without a second thought, since scheduling assistance is the goal." },
      { id: "B", text: "Consider whether personal appointment details should be visible to this Project at all, and whether a work-only calendar or more limited connector scope would be more appropriate." },
      { id: "C", text: "Refuse to use any calendar connector under any circumstances." },
      { id: "D", text: "Ask team members to delete all personal appointments from their calendars permanently." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Thinking through what's actually in a connected source and scoping access appropriately (a work-only calendar or narrower scope) reflects responsible connector management — connecting everything without consideration (A) skips that check, refusing any connector at all (C) is an overcorrection, and demanding personal data be deleted entirely (D) isn't a reasonable or necessary response.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Manage uploaded knowledge and connectors'",
    difficulty: "medium",
  },
  {
    id: "assoc-ckm-028",
    certificationSlug: CERT,
    domain: DOMAIN,
    taskStatement: O3,
    type: "mcq",
    stem:
      "A team wants their Project's system instructions to make clear that Claude should ask a clarifying question rather than guess when a request is ambiguous. Which instruction best achieves this?",
    options: [
      { id: "A", text: "'Always answer confidently, no matter what.'" },
      { id: "B", text: "'If a request is ambiguous or missing key details needed to complete it well, ask a clarifying question before proceeding rather than guessing.'" },
      { id: "C", text: "'Never ask any questions under any circumstances.'" },
      { id: "D", text: "'Assume the most common interpretation of every request without checking.'" },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "This instruction directly and specifically targets the desired behavior — asking rather than guessing when something is ambiguous. The other three options either explicitly forbid clarifying questions (C) or push toward confident guessing instead of clarification (A, D), which is the opposite of what's wanted here.",
    citation: "Claude Certified Associate – Foundations Exam Guide §6, Domain 5 — 'Create effective system-level instructions'",
    difficulty: "easy",
  },
];
