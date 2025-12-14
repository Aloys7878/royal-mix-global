export function economyEngine(activity: number) {
  return {
    creditsGenerated: activity * 0.01,
    reinvested: true
  };
}
