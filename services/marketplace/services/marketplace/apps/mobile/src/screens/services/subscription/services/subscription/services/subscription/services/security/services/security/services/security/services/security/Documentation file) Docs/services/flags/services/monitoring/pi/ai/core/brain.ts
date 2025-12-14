export type TaskType =
  | "CHAT"
  | "IMAGE"
  | "VIDEO"
  | "VOICE"
  | "SEARCH"
  | "AUTOMATION";

export interface AITask {
  userId: string;
  task: TaskType;
  prompt: string;
  context?: any;
}
