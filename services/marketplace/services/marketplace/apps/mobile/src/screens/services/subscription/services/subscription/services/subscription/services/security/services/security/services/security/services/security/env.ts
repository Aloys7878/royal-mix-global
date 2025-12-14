export function getEnv(key: string) {
  if (!process.env[key]) throw new Error("Missing env");
  return process.env[key];
}
