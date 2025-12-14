const API_URL = "https://YOUR_API_ID.execute-api.REGION.amazonaws.com/prod";

export async function requestAiText(prompt: string) {
  const res = await fetch(`${API_URL}/ai/text`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  return res.json();
}
