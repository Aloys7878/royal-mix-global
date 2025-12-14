import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

export const handler = async (event: any) => {
  const { userId } = JSON.parse(event.body || "{}");

  const token = jwt.sign({ userId }, SECRET, { expiresIn: "7d" });

  return {
    statusCode: 200,
    body: JSON.stringify({ token }),
  };
};
