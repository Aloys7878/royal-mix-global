import { prisma } from "../../db/prisma/client";

export const handler = async (event: any) => {
  const token = event.headers["authorization"]?.replace("Bearer ", "");

  const session = await prisma.session.findUnique({ where: { token } });
  if (!session) return { statusCode: 403 };

  return {
    statusCode: 200,
    body: JSON.stringify({ valid: true })
  };
};
