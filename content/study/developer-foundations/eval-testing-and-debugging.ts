import type { StudyModuleInput } from "../../schema/study";
import { RESOURCES } from "../resources";

const CERT = "developer-foundations" as const;
const DOMAIN = "Eval, Testing, and Debugging" as const;

export const studyModule: StudyModuleInput = {
  certificationSlug: CERT,
  domain: DOMAIN,
  overview:
    "A small domain focused on one skill: when a Claude application misbehaves, correctly identifying where the failure actually happened and choosing a recovery strategy that fits.",
  concepts: [
    {
      taskStatement: "Debugging and Error Handling",
      summary:
        "The first diagnostic question is where the failure originated: the integration layer (a malformed request, a bug in how you parse the response, a broken tool implementation) or the model's output itself (a wrong answer, a hallucinated fact, an unexpected refusal). These need different fixes — an integration bug needs a code fix; a model-output problem needs a prompt, context, or eval fix. Trace analysis (reading the actual request/response sequence, especially in an agentic loop) is how you tell these apart instead of guessing. Recovery strategy should match the error type: retry transient failures, surface validation errors with specifics so a retry can succeed, and don't silently swallow errors as if they were successes.",
    },
  ],
  resources: [RESOURCES.buildEvals, RESOURCES.toolUse],
};
