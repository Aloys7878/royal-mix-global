import { MarketplaceItem } from "./model";

export const items: MarketplaceItem[] = [
  {
    id: "ai-chat",
    title: "Royal AI Chat",
    description: "Ask Royal AI anything",
    type: "AI_CHAT",
    pricePI: 0,
    active: true
  }
];

export function getMarketplaceItems() {
  return items.filter(i => i.active);
}
