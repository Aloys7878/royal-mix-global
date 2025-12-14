export interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  type: "AI_CHAT" | "AI_IMAGE" | "AI_VIDEO" | "AI_VOICE" | "SERVICE";
  pricePI: number;
  active: boolean;
}
