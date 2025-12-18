export interface DailyReport {
  agentId: string;
  date: string;
  productsTaken: number;
  productsSold: number;
  remainingStock: number;
  customersCount: number;
  onlinePaymentsCount: number;
  feedback: string;
}
