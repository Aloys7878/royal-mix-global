export function createOrder(userId: string, amount: number) {
  return {
    id: crypto.randomUUID(),
    userId,
    amount,
    currency: "PI",
    status: "pending"
  };
}
