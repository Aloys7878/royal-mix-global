// apps/mobile/src/hooks/useRoyalAssistant.ts
import { useState, useCallback } from "react";

export const useRoyalAssistant = (userId: string) => {
  const [messages, setMessages] = useState<{from:'user'|'assistant', text:string}[]>([]);
  const send = useCallback(async (text: string) => {
    setMessages(prev => [...prev, {from:'user', text}]);
    const res = await fetch(process.env.RMG_AI_CHAT_URL || "https://api.royalmixglobal.com/ai/assistant/chat", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({ userId, message: text })
    });
    const j = await res.json();
    setMessages(prev => [...prev, {from:'assistant', text: j.reply }]);
    return j;
  }, [userId]);

  return { messages, send };
};
