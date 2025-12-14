export interface Subscription {
  id: string;
  userId: string;
  plan: "FREE" | "PRO" | "ENTERPRISE";
  expiresAt: Date;
}
