import { decideEngine } from "./decide";

export async function runAITask(task: any) {
  const engine = decideEngine(task);

  return {
    engine,
    status: "processing",
    input: task.prompt
  };
}
