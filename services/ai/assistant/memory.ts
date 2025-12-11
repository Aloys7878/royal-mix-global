// services/ai/assistant/memory.ts
import { createClient } from "@supabase/supabase-js";
import { embedText } from "./embeddings";
import { MemoryRecord } from "./types";
import { SUPABASE_TABLE, MAX_MEMORY_RETRIEVAL } from "./config";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY!; // supabase service role for vector ops
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

export async function saveMemory(userId: string, text: string, meta: Record<string, any> = {}) {
  const embedding = await embedText(text);
  const { data, error } = await supabase.from(SUPABASE_TABLE).insert({
    user_id: userId,
    text,
    embedding,
    meta,
  });
  if (error) throw error;
  return data;
}

export async function queryMemory(userId: string, query: string, limit = MAX_MEMORY_RETRIEVAL) {
  const qEmbedding = await embedText(query);
  // Supabase vector similarity example (assumes embedding column is of type vector and pgvector enabled)
  const { data, error } = await supabase.rpc("match_memories", {
    p_user_id: userId,
    p_embedding: qEmbedding,
    p_limit: limit
  });
  if (error) throw error;
  return data as MemoryRecord[];
    }
