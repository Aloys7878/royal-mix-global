import { runAITask } from "../../ai/core/orchestrator";

export async function handler(event: any) {
  const body = JSON.parse(event.body);

  const result = await runAITask(body);

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  };
}

