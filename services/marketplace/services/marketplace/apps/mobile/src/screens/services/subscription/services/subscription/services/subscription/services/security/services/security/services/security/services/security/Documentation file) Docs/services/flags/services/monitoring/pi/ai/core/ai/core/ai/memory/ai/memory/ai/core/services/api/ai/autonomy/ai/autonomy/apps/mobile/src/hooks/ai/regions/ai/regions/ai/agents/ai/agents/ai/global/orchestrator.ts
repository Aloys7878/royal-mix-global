import { agentPool } from "../agents/pool";
import { regionalGovernor } from "../regions/governor";

export function globalOrchestrator(region: any, task: any) {
  const governor = regionalGovernor(region);
  const agent = agentPool.find(a => a.role === task.type);

  return {
    governor,
    agent,
    task,
    status: "assigned"
  };
}
