import { evolutionBrain } from "../../ai/evolution/brain";
import { executeEvolution } from "../../ai/evolution/executor";

export async function handler(event: any) {
  const signal = JSON.parse(event.body);

  const decision = evolutionBrain(signal);
  const result = executeEvolution(decision);

  return {
    statusCode: 200,
    body: JSON.stringify({
      empireMode: true,
      result
    })
  };
}
