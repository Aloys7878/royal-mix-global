import jwt from "jsonwebtoken";

export function createSession(user: any) {
  return jwt.sign(user, process.env.JWT_SECRET!, {
    expiresIn: "14d",
  });
}
