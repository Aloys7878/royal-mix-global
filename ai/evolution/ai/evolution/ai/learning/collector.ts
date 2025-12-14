export function collectLearning(data: any) {
  return {
    learnedFrom: data.source,
    timestamp: Date.now(),
    stored: true
  };
}
