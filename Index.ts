export async function pay(provider: "pi" | "stripe", data: any) {
  if (provider === "pi") return verifyPiPayment(data.paymentId);
  if (provider === "stripe") return createStripeIntent(data.amount);
}
