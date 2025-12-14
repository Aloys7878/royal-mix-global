export function hasAccess(sub: any, feature: string) {
  if (!sub) return false;
  if (sub.plan === "ENTERPRISE") return true;
  if (sub.plan === "PRO" && feature !== "ENTERPRISE_ONLY") return true;
  return false;
}

