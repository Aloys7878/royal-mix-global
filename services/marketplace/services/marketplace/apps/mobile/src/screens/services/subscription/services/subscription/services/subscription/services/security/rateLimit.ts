const requests = new Map<string, number>();

export function rateLimit(ip: string) {
  const count = requests.get(ip) || 0;
  if (count > 100) throw new Error("Rate limit exceeded");
  requests.set(ip, count + 1);
}
