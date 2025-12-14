export interface AIAgent {
  id: string;
  role: "CHAT" | "MEDIA" | "SECURITY" | "ECONOMY";
  region?: string;
}
