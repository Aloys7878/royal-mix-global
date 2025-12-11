// services/ai/assistant/embeddings.ts
import fetch from "node-fetch";
import { OPENAI_EMBED_MODEL } from "./config";

const OPENAI_KEY = process.env.OPENAI_API_KEY!;

export async function embedText(text: string): Promise<number[]> {
  const res = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${OPENAI_KEY}` },
    body: JSON.stringify({ input: text, model: OPENAI_EMBED_MODEL })
  });
  const j = await res.json();
  return j.data[0].embedding;
}
