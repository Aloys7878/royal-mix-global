import { globalOrchestrator } from "../../ai/global/orchestrator";

export async function handler(event: any) {
  const body = JSON.parse(event.body);

  const result = globalOrchestrator(body.region, body.task);

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  };
}
