import { v4 as uuid } from "uuid";

export function createSession(userId: string) {
  return {
    token: uuid(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) // 7 days
  };
}
