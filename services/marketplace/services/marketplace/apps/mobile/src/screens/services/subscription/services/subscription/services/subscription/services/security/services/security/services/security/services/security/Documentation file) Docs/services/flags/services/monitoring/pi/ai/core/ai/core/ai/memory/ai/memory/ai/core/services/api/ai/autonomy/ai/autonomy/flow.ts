import { suggestNext } from "./suggest";

export function autoFlow(lastAction: string) {
  return {
    next: suggestNext(lastAction),
    confidence: "high"
  };
}
