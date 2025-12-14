import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: "2023-10-16",
});

export async function createStripeIntent(amount: number) {
  return stripe.paymentIntents.create({
    amount,
    currency: "usd",
  });
}
