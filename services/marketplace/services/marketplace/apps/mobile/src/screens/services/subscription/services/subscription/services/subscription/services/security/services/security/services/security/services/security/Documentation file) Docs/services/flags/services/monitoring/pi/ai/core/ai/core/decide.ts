import { AITask } from "./brain";

export function decideEngine(task: AITask) {
  switch (task.task) {
    case "CHAT":
      return "ai/chat";
    case "IMAGE":
      return "ai/image";
    case "VIDEO":
      return "ai/video";
    case "VOICE":
      return "ai/voice";
    default:
      return "ai/chat";
  }
}
