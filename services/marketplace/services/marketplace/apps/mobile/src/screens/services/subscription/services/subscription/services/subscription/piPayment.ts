export function createPiSubscription(plan: string) {
  return {
    memo: `Royal Mix Global ${plan} subscription`,
    amount: plan === "PRO" ? 1 : 5,
    currency: "PI"
  };
}
