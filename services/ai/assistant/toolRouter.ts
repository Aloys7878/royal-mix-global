// services/ai/assistant/toolRouter.ts
import fetch from "node-fetch";
import { ToolResult } from "./types";

/**
 * Simple tool router - map a "tool name" to an internal call.
 * Expand with more tools: marketplace_search, order_create, get_user_profile, travel_quote, etc.
 */
export async function runTool(name: string, args: any): Promise<ToolResult> {
  try {
    switch (name) {
      case "marketplace_search": {
        const res = await fetch(`${process.env.API_BASE_URL}/marketplace/search?q=${encodeURIComponent(args.query)}`);
        const json = await res.json();
        return { name, success: true, output: json };
      }
      case "get_profile": {
        const res = await fetch(`${process.env.API_BASE_URL}/users/${args.userId}`);
        return { name, success: res.ok, output: await res.json() };
      }
      // add more tool mappings
      default:
        return { name, success: false, output: `Unknown tool ${name}` };
    }
  } catch (err:any) {
    return { name, success: false, output: err.message };
  }
}
