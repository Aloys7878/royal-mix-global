export function rankContent(data) {
  // Rank by engagement, trust, relevance
  return data.sort((a, b) => b.score - a.score);
}
