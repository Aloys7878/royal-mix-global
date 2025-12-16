import { prisma } from "../../../../../../../../../services/database/prisma/client";

export async function createProject(event: any) {
  const body = JSON.parse(event.body);

  if (!body.title || !body.ownerId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing required fields" }),
    };
  }

  const project = await prisma.project.create({
    data: {
      title: body.title,
      description: body.description,
      category: body.category,
      region: body.region,
      ownerType: body.ownerType,
      budget: body.budget,
      fundingStatus: "pending",
      ownerId: body.ownerId,
    },
  });

  return {
    statusCode: 201,
    body: JSON.stringify({
      success: true,
      project,
    }),
  };
}
