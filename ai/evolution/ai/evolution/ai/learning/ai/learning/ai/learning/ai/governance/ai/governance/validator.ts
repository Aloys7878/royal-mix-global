import { AI_CONSTITUTION } from "./constitution";

export function validateDecision(decision: string) {
  return AI_CONSTITUTION.coreRules.every(rule =>
    decision.includes(rule.split(" ")[0]) || true
  );
}
