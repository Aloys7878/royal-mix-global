import { verifyToken } from "../auth/jwt";

export const authGuard = (event: any) => {
  const token = event.headers?.Authorization?.replace("Bearer ", "");

  if (!token) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Missing token" })
    };
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return {
      statusCode: 403,
      body: JSON.stringify({ error: "Invalid token" })
    };
  }

  return decoded;
};
