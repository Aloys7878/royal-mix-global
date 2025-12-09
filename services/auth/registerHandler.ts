import { prisma } from "../../db/prisma/client";
import { hashPassword } from "./utils";

export const handler = async (event: any) => {
  const { email, password, username } = JSON.parse(event.body);

  const hashed = await hashPassword(password);

  const user = await prisma.user.create({
    data: { email, username, password: hashed }
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ id: user.id, email: user.email })
  };
};
