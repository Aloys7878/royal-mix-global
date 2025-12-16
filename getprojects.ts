import { prisma } from "@/services/database/prisma/client";

export async function getProjects() {
  const projects = await prisma.project.findMany({
    include: {
      owner: true,
      contributions: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify(projects),
  };
}
