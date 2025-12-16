import { createProject } from "./api/zoneA/createProject";
import { getProjects } from "./api/zoneA/getProjects";

export async function handler(event: any) {
  const { httpMethod, path } = event;

  if (httpMethod === "POST" && path === "/zoneA/projects") {
    return createProject(event);
  }

  if (httpMethod === "GET" && path === "/zoneA/projects") {
    return getProjects();
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ message: "Not Found" }),
  };
}
