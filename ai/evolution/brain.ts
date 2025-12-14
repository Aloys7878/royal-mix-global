export interface EvolutionSignal {
  usageGrowth: number;
  errorRate: number;
  revenue?: number;
  region?: string;
}

export function evolutionBrain(signal: EvolutionSignal) {
  if (signal.errorRate > 0.1) {
    return "OPTIMIZE_SECURITY";
  }
  if (signal.usageGrowth > 20) {
    return "SCALE_INFRA";
  }
  return "LEARN_AND_ADAPT";
}
