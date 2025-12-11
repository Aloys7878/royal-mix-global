// services/ai/assistant/config.ts
export const OPENAI_EMBED_MODEL = process.env.OPENAI_EMBED_MODEL || "text-embedding-3-small";
export const OPENAI_CHAT_MODEL = process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini"; // adjust to your provider
export const EMBEDDING_NAMESPACE = "royalmix-assistant-memory";
export const SUPABASE_TABLE = "assistant_memories";
export const MAX_MEMORY_RETRIEVAL = 8;
