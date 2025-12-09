import { prisma } from "../../db/prisma/client";
import { verifyPassword } from "./utils";
import crypto from "crypto";

export const handler = async (event: any) => {
  const { email, password } = JSON.parse(event.body);

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { statusCode: 404 };

  const match = await verifyPassword(password, user.password);
  if (!match) return { statusCode: 401 };

  const token = crypto.randomBytes(40).toString("hex");

  await prisma.session.create({
    data: {
      userId: user.id,
      token,
      expiresAt: new Date(Date.now() + 7 * 24 * 3600 * 1000)
    }
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ token })
  };
};
