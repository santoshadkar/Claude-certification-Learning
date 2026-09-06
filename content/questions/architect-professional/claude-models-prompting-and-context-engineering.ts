import type { QuestionInput } from "../../schema/question";

export const questions: QuestionInput[] = [
  {
    id: "arch-p-cmpce-001",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Select appropriate Claude models based on trade-offs",
    type: "mcq",
    stem:
      "A proposed architecture uses the most capable, highest-cost model tier uniformly across every component of a five-stage pipeline, including a simple classification step at the start. What architectural refinement should the architect recommend?",
    options: [
      { id: "A", text: "Replace every stage with the cheapest available tier regardless of each stage's actual reasoning requirements." },
      { id: "B", text: "Model tier selection should never vary within a single pipeline under any circumstances." },
      { id: "C", text: "Keep the uniform top-tier approach, since consistency across a pipeline is always more important than matching tier to each stage's actual difficulty." },
      { id: "D", text: "Right-size the model tier per component — use a faster, cheaper tier for the simple classification step and reserve the top tier for stages that genuinely require deeper reasoning, rather than applying one tier uniformly across the whole pipeline." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Matching tier to each component's actual difficulty — cheap for simple steps, capable tier reserved for genuinely hard ones — is standard architectural practice for cost/latency efficiency; uniform top-tier usage (C) wastes budget on the easy step, uniform bottom-tier usage (A) risks under-serving harder steps, and per-component tier variation within one pipeline is a normal, recommended pattern (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 (Claude Models, Prompting & Context Engineering) — 'Select appropriate Claude models based on trade-offs'",
    difficulty: "easy",
  },
  {
    id: "arch-p-cmpce-002",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Select appropriate Claude models based on trade-offs",
    type: "mcq",
    stem:
      "A client asks the architect to justify why a real-time customer-facing chat feature uses a faster, less capable tier than the internal analytics pipeline that processes the same customer's data overnight. What is the appropriate justification?",
    options: [
      { id: "A", text: "There is no justification available; every component in a system must always use the identical model tier regardless of its specific requirements." },
      { id: "B", text: "Each component's model choice reflects its own latency, cost, and quality requirements — the chat feature prioritizes responsiveness for a live interaction, while the overnight pipeline can afford a slower, more capable tier since it isn't latency-constrained." },
      { id: "C", text: "The chat feature's tier choice was arbitrary and has no relationship to its real-time nature." },
      { id: "D", text: "The overnight pipeline should actually use the faster, cheaper tier instead, since overnight processing never benefits from a more capable model." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Different components legitimately warrant different tier choices based on their own latency/cost/quality requirements — a live chat feature and an overnight batch pipeline have different constraints, this is a deliberate and defensible tradeoff (A wrong), it's not arbitrary but tied to real-time responsiveness needs (C wrong), and there's no reason to reverse the tiers here when the overnight job can absorb the added latency for better quality (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Select appropriate Claude models based on trade-offs'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-003",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Select appropriate Claude models based on trade-offs",
    type: "scenario-multi-response",
    stem:
      "Which two factors should legitimately inform a model-tier recommendation for a new component? (Select 2)",
    options: [
      { id: "A", text: "Which tier was used for an entirely unrelated project regardless of task similarity." },
      { id: "B", text: "The complexity of reasoning the component's task genuinely requires." },
      { id: "C", text: "The component's actual latency and cost budget within the broader system." },
      { id: "D", text: "Which tier the architect personally finds most interesting to work with." },
    ],
    correctOptionIds: ["B","C"],
    selectCount: 2,
    explanation:
      "Task complexity (B) and the actual latency/cost constraints (C) are the substantive, defensible factors for a tier recommendation. Personal preference (D) and copying an unrelated prior decision without regard to fit (A) aren't legitimate architectural justifications.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Select appropriate Claude models based on trade-offs'",
    difficulty: "easy",
  },
  {
    id: "arch-p-cmpce-004",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Select appropriate Claude models based on trade-offs",
    type: "mcq",
    stem:
      "Six months after launch, a team notices their chosen model tier for a document-summarization feature no longer feels like the right tradeoff, since usage patterns have shifted toward longer, more complex documents than originally anticipated. What is the appropriate architectural response?",
    options: [
      { id: "A", text: "Immediately switch every component in the entire system to the most capable tier without first analyzing the actual new usage pattern." },
      { id: "B", text: "Assume the original tier choice must still be correct, since usage patterns never affect whether a tier decision remains appropriate." },
      { id: "C", text: "Revisit the model tier decision in light of the changed usage pattern, since a tier choice appropriate for the original assumptions may no longer be the right fit for how the feature is actually being used now." },
      { id: "D", text: "Never revisit a model tier decision once it's been made at launch, regardless of how usage patterns evolve." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Model tier decisions should be revisited when real-world usage diverges meaningfully from original assumptions — treating the initial decision as permanently fixed (D, B) ignores this, and switching the entire system to the top tier without first analyzing the actual new pattern (A) skips the same kind of deliberate analysis that led to the original (now-questioned) choice.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Select appropriate Claude models based on trade-offs'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-005",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Design system prompts, templates, and guardrails",
    type: "mcq",
    stem:
      "A team maintains five separate applications, each with its own independently-written system prompt containing slightly different phrasing of the same core compliance guardrail. An audit finds one application's guardrail has a gap the others don't. What architectural practice would have prevented this drift?",
    options: [
      { id: "A", text: "Maintaining the guardrail as a shared, single-sourced template referenced by all five applications, rather than having each application independently author and maintain its own copy of the same underlying rule." },
      { id: "B", text: "Each application should continue maintaining its own fully independent version of every guardrail, since shared templates are never appropriate." },
      { id: "C", text: "There is no way to prevent this kind of drift when multiple applications each need similar guardrails." },
      { id: "D", text: "System prompt design has no relationship to compliance guardrail consistency across applications." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A shared, single-sourced template for a guardrail that should be consistent across applications directly prevents this kind of independent-authoring drift — this drift is preventable through better design (C wrong), independently maintained copies are exactly what caused the gap (B wrong), and system prompt design is directly responsible for guardrail consistency (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Design system prompts, templates, and guardrails'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-006",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Design system prompts, templates, and guardrails",
    type: "mcq",
    scenarioContext:
      "You are designing a system prompt template used across dozens of customer-facing deployments for different client accounts.",
    stem:
      "A system prompt template needs to enforce a strict guardrail ('never disclose internal pricing formulas') across every client deployment, with no individual deployment able to accidentally weaken it through per-client customization. How should the template be structured?",
    options: [
      { id: "A", text: "Remove the guardrail from the system prompt template entirely and rely on each client to remember to add it themselves." },
      { id: "B", text: "Allow every part of the system prompt, including the guardrail, to be freely edited per client with no distinction between fixed and customizable sections." },
      { id: "C", text: "Guardrails cannot be enforced through system prompt design at all and require an entirely different mechanism with no relationship to prompt structure." },
      { id: "D", text: "Separate the non-negotiable guardrail into a fixed, shared section of the template that per-client customization cannot override, distinct from the customizable per-client sections (tone, branding, etc.)." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Structurally separating a non-negotiable guardrail from customizable sections is exactly what prevents accidental weakening through per-client customization — allowing everything to be freely edited (B) is precisely the risk being guarded against, guardrails are meaningfully influenced by prompt structure and design (C wrong), and relying on each client to remember to add it themselves (A) reintroduces the exact inconsistency risk a shared template is meant to prevent.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Design system prompts, templates, and guardrails'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-007",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Design system prompts, templates, and guardrails",
    type: "scenario-multi-response",
    stem:
      "Which two practices support well-designed, maintainable system prompt templates at scale? (Select 2)",
    options: [
      { id: "A", text: "Avoiding any documentation of what each section of the template is meant to control." },
      { id: "B", text: "Letting each new deployment freely rewrite the entire template from scratch with no shared baseline." },
      { id: "C", text: "Version-controlling the template so changes are tracked, reviewed, and reversible." },
      { id: "D", text: "Separating fixed, non-negotiable guardrails from customizable, per-deployment sections." },
    ],
    correctOptionIds: ["C","D"],
    selectCount: 2,
    explanation:
      "Separating fixed guardrails from customizable content (D) and version-controlling changes (C) both support maintainability and consistency at scale. Letting every deployment rewrite the template independently (B) reintroduces drift risk, and skipping documentation of what each section controls (A) makes the template harder to maintain safely over time.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Design system prompts, templates, and guardrails'",
    difficulty: "easy",
  },
  {
    id: "arch-p-cmpce-008",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
    type: "mcq",
    stem:
      "A team's classification prompt uses zero-shot instructions and produces inconsistent category assignments across similar inputs. Before considering a model upgrade, what prompt-engineering technique should the architect recommend trying first?",
    options: [
      { id: "A", text: "Chain-of-thought prompting is never useful for classification tasks and should never be considered." },
      { id: "B", text: "Few-shot prompting — adding a small number of representative examples showing correct classification, which often resolves format/consistency issues that zero-shot instructions alone leave ambiguous." },
      { id: "C", text: "Immediately upgrading to a more expensive model tier without first trying any prompt-level adjustment." },
      { id: "D", text: "Removing all instructions from the prompt entirely and providing only the raw input with no guidance." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Few-shot examples are a standard, cost-effective first lever for consistency problems before reaching for a more expensive model — jumping straight to a tier upgrade (C) skips a simpler and cheaper fix, removing guidance entirely (D) would likely worsen consistency, and dismissing chain-of-thought as never useful for classification (A) overstates the case — it can help for classification tasks that benefit from explicit reasoning, even if few-shot is often the first thing to try.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-cmpce-009",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
    type: "mcq",
    stem:
      "A complex financial-reasoning task requires the model to work through multiple dependent calculations before arriving at a final recommendation. The current prompt asks for the final answer directly with no intermediate reasoning shown. What technique is most likely to improve accuracy here, and what is the tradeoff?",
    options: [
      { id: "A", text: "Chain-of-thought prompting has no effect on accuracy for any kind of reasoning task." },
      { id: "B", text: "This task type never benefits from any prompting technique adjustment." },
      { id: "C", text: "Chain-of-thought prompting, asking the model to work through intermediate steps before the final answer — this tends to improve accuracy on multi-step reasoning tasks at the cost of additional output tokens and latency." },
      { id: "D", text: "Zero-shot prompting with an even shorter instruction, since brevity always improves reasoning accuracy on complex multi-step tasks." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Chain-of-thought is specifically suited to improving multi-step reasoning accuracy, at a real cost in tokens/latency that should be weighed — a shorter zero-shot instruction (D) doesn't address the lack of intermediate reasoning, chain-of-thought does meaningfully affect accuracy on tasks like this (A wrong), and this kind of task is exactly where a prompting technique adjustment can help (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-010",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
    type: "mcq",
    stem:
      "A high-volume, simple sentiment-tagging feature currently uses chain-of-thought prompting, adding meaningful latency and token cost with no measurable accuracy benefit over a simpler zero-shot approach on this straightforward task. What should the architect recommend?",
    options: [
      { id: "A", text: "Simplify to zero-shot (or few-shot, if needed for format consistency) prompting for this straightforward task, since chain-of-thought's added cost and latency aren't being repaid by any accuracy benefit here." },
      { id: "B", text: "Switch to an even more elaborate multi-step prompting technique on top of chain-of-thought to further increase cost with no expected accuracy gain." },
      { id: "C", text: "Keep chain-of-thought prompting regardless of measured results, since more elaborate prompting techniques are always strictly better regardless of task complexity." },
      { id: "D", text: "Prompting technique choice has no measurable effect on cost or latency for any task." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Matching prompting technique complexity to actual task difficulty means dropping unnecessary chain-of-thought overhead when it isn't earning its cost on a simple task — 'more elaborate is always better' (C) ignores this cost/benefit reality, adding even more overhead with no expected benefit (B) compounds the waste, and prompting technique clearly does affect cost/latency (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-011",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
    type: "scenario-multi-response",
    stem:
      "Which two statements accurately describe when to reach for chain-of-thought versus few-shot prompting? (Select 2)",
    options: [
      { id: "A", text: "Few-shot examples tend to help most when the issue is output format or consistency rather than reasoning depth." },
      { id: "B", text: "Chain-of-thought tends to help most when a task requires working through multiple dependent reasoning steps to reach a correct answer." },
      { id: "C", text: "Neither technique has any measurable effect on output quality for any task type." },
      { id: "D", text: "Chain-of-thought and few-shot are functionally identical techniques with no meaningful difference in what they address." },
    ],
    correctOptionIds: ["A","B"],
    selectCount: 2,
    explanation:
      "Chain-of-thought targeting multi-step reasoning quality (B) and few-shot targeting format/consistency (A) accurately describe when each technique tends to help most. The two techniques address different underlying issues, not the same one (D wrong), and both have real, measurable effects on output quality in the situations they're suited to (C wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-cmpce-012",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Optimize context windows and manage token usage",
    type: "mcq",
    stem:
      "A long-running conversational agent's context grows steadily across a support session, and the architecture team notices both increasing per-request cost and gradually degrading response quality as the session continues. What architectural principle connects these two symptoms?",
    options: [
      { id: "A", text: "The only fix for rising cost is switching to a cheaper model tier, which is unrelated to the quality degradation." },
      { id: "B", text: "Context size has no bearing on either cost or response quality in a long-running session." },
      { id: "C", text: "Cost and quality are entirely unrelated to context size and must be addressed through two completely separate, unconnected architectural changes." },
      { id: "D", text: "An unmanaged, growing context both increases token cost on every subsequent request and risks degrading reasoning quality (context rot) — proactive context optimization (trimming, summarization) addresses both symptoms simultaneously." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Both symptoms trace back to the same root cause — unmanaged context growth — so context optimization techniques address them together, rather than requiring two disconnected fixes (C) or treating a model-tier switch as the sole answer while ignoring the context-size driver (A). Context size clearly affects both cost and quality (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Optimize context windows and manage token usage'",
    difficulty: "easy",
  },
  {
    id: "arch-p-cmpce-013",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Optimize context windows and manage token usage",
    type: "mcq",
    stem:
      "An architecture review finds that a 40-field API response is passed into context in full on every turn of a conversation, even though only 5 fields are ever actually referenced in generating responses. What is the architectural recommendation?",
    options: [
      { id: "A", text: "Increase the context window size as the only necessary fix, with no change to what's actually included per turn." },
      { id: "B", text: "Trim the API response down to just the relevant fields before including it in context, reducing unnecessary token consumption on every subsequent turn without losing any information the conversation actually uses." },
      { id: "C", text: "Leave all 40 fields in context on every turn, since trimming unused fields never provides any meaningful benefit." },
      { id: "D", text: "Remove the API call entirely, since none of its fields are ever useful." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Trimming to only the fields actually used is a direct, meaningful token-cost optimization — keeping all 40 fields regardless of use (C) wastes tokens for no benefit, removing the API call entirely (D) discards the 5 fields that are genuinely needed, and simply expanding the window without addressing what's actually included (A) doesn't solve the underlying inefficiency.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Optimize context windows and manage token usage'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-014",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Optimize context windows and manage token usage",
    type: "scenario-multi-response",
    stem:
      "Which two techniques directly help manage context window usage in a long-running application? (Select 2)",
    options: [
      { id: "A", text: "Trimming tool/API outputs to only the fields relevant to the current task before they enter context." },
      { id: "B", text: "Ignoring context size entirely, since it has no relationship to either cost or response quality." },
      { id: "C", text: "Periodically summarizing or compacting older conversation history that's no longer needed in full detail." },
      { id: "D", text: "Appending every piece of historical context in full, indefinitely, with no summarization or trimming of any kind." },
    ],
    correctOptionIds: ["A","C"],
    selectCount: 2,
    explanation:
      "Summarizing/compacting stale history (C) and trimming tool output to what's relevant (A) both directly manage context growth. Appending everything indefinitely with no management (D) is exactly the problem these techniques address, and context size does meaningfully affect both cost and quality (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Optimize context windows and manage token usage'",
    difficulty: "easy",
  },
  {
    id: "arch-p-cmpce-015",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Optimize context windows and manage token usage",
    type: "mcq",
    stem:
      "A team aggressively summarizes conversation history to minimize token usage, but customer-support agents report that important specific details (exact dollar amounts, order numbers) are getting lost in the summaries, causing repeated requests for the same information. What does this illustrate about context optimization?",
    options: [
      { id: "A", text: "Token efficiency and information preservation are entirely unrelated concerns with no tradeoff between them." },
      { id: "B", text: "The only fix is to stop summarizing entirely and always keep full, unsummarized history regardless of length." },
      { id: "C", text: "Context optimization must balance token efficiency against preserving the specific details that actually matter — overly aggressive summarization can trade away information the system still needs, so optimization should be selective rather than uniform." },
      { id: "D", text: "There is no tradeoff; more aggressive summarization is always strictly beneficial with no downside regardless of what gets lost." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "This is exactly the tradeoff context optimization must manage — aggressive summarization can inadvertently discard details still needed, so the fix is selective preservation (e.g., a persistent facts block) rather than either extreme. Uniformly aggressive summarization isn't costless (D wrong), abandoning summarization entirely (B) forfeits real efficiency gains, and there is a genuine tradeoff between the two concerns (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Optimize context windows and manage token usage'",
    difficulty: "hard",
  },
  {
    id: "arch-p-cmpce-016",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    type: "mcq",
    stem:
      "A large, stable system prompt and reference document are sent in full with every request to a high-volume feature, driving significant repeated cost. What prompt reuse strategy directly addresses this?",
    options: [
      { id: "A", text: "Prompt caching — structuring the request so the stable content is a reusable prefix, letting repeated requests avoid reprocessing (and paying full price for) identical content each time." },
      { id: "B", text: "Prompt reuse strategies have no relationship to cost for high-volume features." },
      { id: "C", text: "Removing the system prompt and reference document entirely regardless of whether they're still needed for correct behavior." },
      { id: "D", text: "Switching to a completely unrelated model provider, which does not address the underlying repeated-content cost pattern." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Prompt caching is exactly the mechanism designed for this repeated-stable-content pattern, cutting cost meaningfully at high volume — switching providers (D) doesn't address the pattern itself, removing needed content (C) risks breaking correct behavior, and prompt reuse strategies are directly tied to cost efficiency at scale (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Implement prompt reuse strategies (caching, modular prompts, Skills)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-cmpce-017",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    type: "mcq",
    stem:
      "Several different features across a product share a common need for the same brand-voice guidance and formatting rules, currently copy-pasted independently into each feature's own prompt. What reuse strategy would reduce duplication and drift risk?",
    options: [
      { id: "A", text: "Continue independently copy-pasting the same content into each new feature's prompt indefinitely, since modular reuse offers no benefit over duplication." },
      { id: "B", text: "Prompt modularity has no relationship to how consistently shared guidance is applied across features." },
      { id: "C", text: "Combine all features into a single undifferentiated prompt with no separation between shared and feature-specific content." },
      { id: "D", text: "Extract the shared guidance into a modular prompt component referenced by each feature, so updates only need to happen in one place rather than being manually kept in sync across many copies." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "A modular, shared prompt component is exactly the reuse strategy that reduces duplication and prevents copies from drifting out of sync — continuing to copy-paste (A) preserves the exact drift risk described, merging everything into one undifferentiated prompt (C) loses the needed separation between shared and feature-specific logic, and modularity does directly affect consistency (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Implement prompt reuse strategies (caching, modular prompts, Skills)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-018",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    type: "scenario-multi-response",
    stem:
      "Which two are legitimate prompt reuse strategies for reducing repeated cost or engineering effort across a system? (Select 2)",
    options: [
      { id: "A", text: "Prompt caching for stable content repeated across many requests." },
      { id: "B", text: "Avoiding any reuse strategy entirely, since duplicated prompt content is always equally efficient as a shared, reused version." },
      { id: "C", text: "Re-deriving and re-typing the same guidance independently for every new feature, with no shared source." },
      { id: "D", text: "Packaging a repeatable, on-demand procedure as a Skill rather than re-explaining it in every relevant context." },
    ],
    correctOptionIds: ["A","D"],
    selectCount: 2,
    explanation:
      "Prompt caching (A) and packaging repeatable procedures as Skills (D) are both legitimate, established reuse strategies. Re-deriving the same guidance independently every time (C) is the duplication problem these strategies solve, and duplication is not equally efficient to a shared, reused approach (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Implement prompt reuse strategies (caching, modular prompts, Skills)'",
    difficulty: "easy",
  },
  {
    id: "arch-p-cmpce-019",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    type: "mcq",
    stem:
      "A team wants to update a shared, cached system prompt to fix a bug, but is concerned that changing the prompt will affect the cache's behavior. What consideration is relevant here?",
    options: [
      { id: "A", text: "Cached prompts can only ever be updated by completely disabling caching for the feature permanently." },
      { id: "B", text: "Changing cached content invalidates the existing cache for that prefix — subsequent requests will incur the cost of reprocessing the new content until it's been cached again, which is a real but generally acceptable one-time cost of fixing the bug." },
      { id: "C", text: "Changing a cached prompt has no effect on caching behavior whatsoever." },
      { id: "D", text: "Prompt caching permanently prevents any future changes to a cached prompt, making bug fixes impossible once caching is enabled." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Updating cached content does invalidate the existing cache for that prefix, incurring a one-time reprocessing cost — this doesn't make future changes impossible (D wrong), it does have a real effect on caching behavior (C wrong), and it doesn't require permanently disabling caching to make an update (A wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Implement prompt reuse strategies (caching, modular prompts, Skills)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-020",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Select appropriate Claude models based on trade-offs",
    type: "mcq",
    stem:
      "An architect is asked to justify, in a client-facing document, why two different features in the same product use two different Claude model tiers. What is the most defensible framing?",
    options: [
      { id: "A", text: "Avoid explaining the reasoning at all and simply state that tier choice is proprietary and cannot be discussed." },
      { id: "B", text: "Claim both features actually use the same tier, even if that isn't accurate, to avoid the question." },
      { id: "C", text: "Explain each feature's specific latency, cost, and quality requirements and how each tier choice serves that feature's actual needs, rather than presenting tier variation as an inconsistency to be minimized." },
      { id: "D", text: "Apologize for the inconsistency and commit to making both features use the identical tier regardless of their differing requirements." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "Explaining each feature's actual requirements and how the tier choice serves them is the honest, defensible framing — treating tier variation as an apologetic inconsistency to eliminate (D) ignores that different needs legitimately justify different choices, refusing to explain (A) doesn't serve the client relationship, and misrepresenting the actual configuration (B) is dishonest and inappropriate regardless of the underlying technical justification.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Select appropriate Claude models based on trade-offs'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-021",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Design system prompts, templates, and guardrails",
    type: "mcq",
    stem:
      "A system prompt for a regulated-industry client includes a guardrail instruction but no corresponding way to verify, after the fact, whether the guardrail was actually followed in production. What architectural gap does this represent?",
    options: [
      { id: "A", text: "The guardrail relies entirely on prompt-based compliance with no monitoring or auditability — pairing the guardrail with logging/review of actual outputs would let the team verify it's holding up in practice rather than assuming it works." },
      { id: "B", text: "This gap can only be closed by removing the guardrail from the system prompt entirely." },
      { id: "C", text: "Verification and monitoring are unrelated to system prompt and guardrail design." },
      { id: "D", text: "There is no gap; a guardrail instruction in the system prompt is always sufficient on its own with no need for any verification." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "A guardrail with no way to verify compliance in production is a real design gap, especially in a regulated context — assuming a prompt instruction alone is sufficient with no verification (D) doesn't confirm it's actually working, removing the guardrail (B) doesn't address the gap at all, and monitoring/verification is directly relevant to sound guardrail design (C wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Design system prompts, templates, and guardrails'",
    difficulty: "hard",
  },
  {
    id: "arch-p-cmpce-022",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)",
    type: "mcq",
    stem:
      "A team is deciding whether a new summarization feature needs few-shot examples or can rely on zero-shot instructions alone. Initial testing with zero-shot instructions already produces consistently well-formatted, accurate summaries. What is the appropriate recommendation?",
    options: [
      { id: "A", text: "Prompting technique choice is arbitrary once initial testing looks good, so no further reasoning is needed either way." },
      { id: "B", text: "Switch to chain-of-thought prompting instead, since summarization tasks always require explicit multi-step reasoning regardless of how well zero-shot is already performing." },
      { id: "C", text: "Add few-shot examples anyway, since every prompt should always include examples regardless of whether zero-shot is already working well." },
      { id: "D", text: "Stick with zero-shot prompting for now, since it's already meeting the requirement — adding few-shot examples would add prompt length and token cost without addressing an actual, observed problem." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "When zero-shot is already meeting the requirement, adding more elaborate techniques adds cost without fixing an actual problem — the recommendation should match technique to demonstrated need, not apply extra techniques by default (C), assume every task category always needs chain-of-thought regardless of current performance (B), or treat the choice as arbitrary with no reasoning behind it (A).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Apply prompt engineering techniques (zero-shot, few-shot, chain-of-thought)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-023",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Design system prompts, templates, and guardrails",
    type: "mcq",
    stem:
      "A system prompt template's guardrail section says 'act ethically and avoid harmful content' with no further specificity. A downstream incident occurs that the team feels should have been prevented by this guardrail. What design lesson does this illustrate?",
    options: [
      { id: "A", text: "This incident proves that guardrails in system prompts can never meaningfully reduce risk under any circumstances." },
      { id: "B", text: "Vague, high-level guardrail language gives the model little concrete guidance for specific situations; naming the specific behaviors to avoid or require (grounded in the system's actual risk areas) produces more reliable guardrail behavior." },
      { id: "C", text: "The guardrail language was already maximally specific and effective, and the incident is entirely unrelated to how it was phrased." },
      { id: "D", text: "The only fix is to remove all guardrail language from the system prompt entirely." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "Vague guardrail phrasing is a common, fixable design issue — naming specific, concrete behaviors tied to the system's actual risk areas produces more reliable results than a generic ethical platitude. This isn't proof guardrails are categorically ineffective (A wrong), the vague phrasing described isn't already maximally specific (C wrong), and removing guardrail language entirely (D) is the opposite of the needed fix.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Design system prompts, templates, and guardrails'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-024",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Design system prompts, templates, and guardrails",
    type: "mcq",
    stem:
      "An architect is designing a system prompt template meant to be reused across multiple future client deployments with different industries and compliance needs. What design approach best supports this reuse goal?",
    options: [
      { id: "A", text: "Avoid any structure or documentation in the template, since future deployments should each start from a completely blank prompt regardless of shared needs." },
      { id: "B", text: "Template structure has no bearing on how easily a system prompt can be adapted for future, different deployments." },
      { id: "C", text: "Structure the template with a stable core (universal behaviors and safety guardrails) plus clearly-marked, industry-specific sections meant to be customized per deployment, rather than one monolithic prompt written for a single client." },
      { id: "D", text: "Write the template as a single monolithic prompt hard-coded entirely around the first client's specific industry, with no separation between universal and client-specific content." },
    ],
    correctOptionIds: ["C"],
    selectCount: 1,
    explanation:
      "A stable core plus clearly separated customizable sections is exactly what makes a template genuinely reusable across different future deployments — a monolithic, single-client-specific prompt (D) doesn't generalize, starting every new deployment from a blank prompt (A) forfeits the value of a reusable template, and structure directly affects reusability (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Design system prompts, templates, and guardrails'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-025",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Optimize context windows and manage token usage",
    type: "mcq",
    stem:
      "A multi-agent research system's synthesis stage receives the full, unfiltered conversation history from three upstream subagents, including their intermediate reasoning and false starts, not just their final findings. What context-window optimization applies here?",
    options: [
      { id: "A", text: "Have upstream subagents return concise, structured final findings rather than their full raw reasoning trace, reducing what the downstream synthesis step needs to process while preserving what it actually needs." },
      { id: "B", text: "Context-window optimization is not applicable to multi-agent architectures, only to single-agent conversations." },
      { id: "C", text: "Remove all upstream subagent output from the synthesis step's context entirely, including the final findings." },
      { id: "D", text: "Pass the full raw reasoning from every upstream subagent through to synthesis unfiltered, since more raw information always improves synthesis quality regardless of context cost." },
    ],
    correctOptionIds: ["A"],
    selectCount: 1,
    explanation:
      "Having upstream stages emit concise, structured outputs rather than full raw reasoning is a direct context-window optimization for multi-stage/multi-agent pipelines — passing everything raw and unfiltered (D) isn't free of cost and doesn't reliably improve synthesis, removing needed findings entirely (C) breaks the pipeline, and this optimization applies just as much to multi-agent systems as single-agent ones (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Optimize context windows and manage token usage'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-026",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Optimize context windows and manage token usage",
    type: "scenario-multi-response",
    stem:
      "A client asks the architect to explain how their proposed system will manage token usage responsibly at scale. Which two explanations are both accurate and substantive? (Select 2)",
    options: [
      { id: "A", text: "The system will always use the maximum available context window on every single request regardless of actual need, to be safe." },
      { id: "B", text: "Tool and API outputs will be trimmed to the fields actually needed before being included in context, rather than passed through in full by default." },
      { id: "C", text: "Token usage is not something that can be managed or optimized in any way once a system is deployed." },
      { id: "D", text: "Static, repeated content (system prompts, reference material) will be structured to take advantage of prompt caching, reducing repeated processing cost." },
    ],
    correctOptionIds: ["B","D"],
    selectCount: 2,
    explanation:
      "Leveraging prompt caching for stable content (D) and trimming tool/API output to what's needed (B) are both concrete, accurate token-management practices worth presenting to a client. Claiming token usage can't be managed at all (C) is inaccurate, and maximizing context usage 'to be safe' regardless of need (A) is the opposite of responsible token management.",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Optimize context windows and manage token usage'",
    difficulty: "easy",
  },
  {
    id: "arch-p-cmpce-027",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    type: "mcq",
    stem:
      "A team wants to reuse a well-tested extraction prompt across three different pipelines that each call it slightly differently (different input preprocessing, different downstream consumers). What design approach best supports this reuse without duplicating the core prompt logic three times?",
    options: [
      { id: "A", text: "Copy the extraction prompt three separate times, once per pipeline, and maintain each copy independently going forward." },
      { id: "B", text: "Prompt reuse across different pipelines is never achievable when the pipelines differ in any way." },
      { id: "C", text: "Merge all three pipelines' surrounding logic directly into the extraction prompt itself, making it responsible for preprocessing and downstream handling too." },
      { id: "D", text: "Keep the core extraction prompt as a single, shared, modular component, with each pipeline handling its own preprocessing/downstream differences outside of that shared component, rather than forking the prompt itself three separate times." },
    ],
    correctOptionIds: ["D"],
    selectCount: 1,
    explanation:
      "Keeping the core, well-tested logic as one shared modular component — while letting each pipeline handle its own surrounding differences separately — is exactly the reuse pattern that avoids triplicating and independently maintaining the same prompt (A). Absorbing unrelated pipeline-specific logic into the shared prompt itself (C) muddies its reusability, and reuse across pipelines with minor differences is very much achievable (B wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Implement prompt reuse strategies (caching, modular prompts, Skills)'",
    difficulty: "medium",
  },
  {
    id: "arch-p-cmpce-028",
    certificationSlug: "architect-professional",
    domain: "Claude Models, Prompting & Context Engineering",
    taskStatement: "Implement prompt reuse strategies (caching, modular prompts, Skills)",
    type: "mcq",
    stem:
      "An architect recommends packaging a complex, occasionally-needed data-migration procedure as a Skill rather than embedding its full instructions permanently in the main system prompt used for everyday operations. What is the architectural rationale?",
    options: [
      { id: "A", text: "There is no rationale; embedding every possible procedure permanently in the main system prompt is always the more efficient design regardless of how often each procedure is actually used." },
      { id: "B", text: "A Skill loads on demand rather than being present in every single request, so an infrequently-needed procedure doesn't consume context/tokens on the vast majority of everyday requests that never need it." },
      { id: "C", text: "Skills can only be used for procedures that are needed on literally every single request, making this recommendation backwards." },
      { id: "D", text: "The choice between a Skill and permanent system-prompt inclusion has no effect on token usage or cost." },
    ],
    correctOptionIds: ["B"],
    selectCount: 1,
    explanation:
      "On-demand loading is exactly why a Skill fits an infrequently-needed procedure better than permanent inclusion — embedding everything permanently regardless of frequency of use (A) wastes tokens on requests that never need it, Skills are specifically suited to infrequent, on-demand needs, not the reverse (C wrong), and this choice does directly affect token usage and cost (D wrong).",
    citation:
      "Claude Certified Architect – Professional Exam Guide §6, Domain 2 — 'Implement prompt reuse strategies (caching, modular prompts, Skills)'",
    difficulty: "medium",
  },
];
