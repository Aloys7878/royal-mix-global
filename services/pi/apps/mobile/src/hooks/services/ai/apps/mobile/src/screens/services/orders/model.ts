export interface Order {
  id: string;
  userId: string;
  amount: number;
  currency: "PI";
  status: "pending" | "paid";
}
