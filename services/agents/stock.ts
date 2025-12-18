export interface StockAllocation {
  agentId: string;
  productId: string;
  quantityGiven: number;
  unitPrice: number;
  totalValue: number;
  paymentStatus: PAID | CREDIT;
  date: string;
}
