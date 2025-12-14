export function healthCheck() {
  return {
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  };
}
