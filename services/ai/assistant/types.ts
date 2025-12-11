// services/ai/assistant/types.ts
export type MemoryRecord = {
  id?: string;
  user_id: string;
  text: string;
  embedding?: number[]; // optional if stored separately
  created_at?: string;
  meta?: Record<string, any>;
};

export type ToolResult = {
  name: string;
  success: boolean;
  output?: any;
};
