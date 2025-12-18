
export function calculateAgentScore(data) {
  return (
    data.productsSold * 0.4 +
    data.customerGrowth * 0.3 +
    data.reportConsistency * 0.2 +
    data.onlinePaymentsRatio * 0.1
  );
}
