export function log(event: string, data?: any) {
  console.log(`[RoyalMix] ${event}`, data || "");
}
