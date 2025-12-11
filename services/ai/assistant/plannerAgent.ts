// services/ai/assistant/plannerAgent.ts
import { embedText } from "./embeddings";
import { queryMemory, saveMemory } from "./memory";
import { runTool } from "./toolRouter";

const OPENAI_KEY = process.env.OPENAI_API_KEY!;

/**
 * Big-picture planner:
 * 1) retrieve context/memories
 * 2) call LLM to decide if tools are needed
 * 3) call tools if required and gather outputs
 * 4) call LLM to synthesize final response (with tool outputs)
 */
export async function runPlanner(userId: string, userMessage: string) {
  // 1. pull memory relevant to this message
  const memories = await queryMemory(userId, userMessage);

  // 2. ask LLM whether tools needed (simple prompt orchestration)
  const prompt = `You are RoyalMix planner. User said: "${userMessage}". Use these memories: ${memories.map(m=>m.text).join(" | ")}.
  Decide: do you need to call any tools? If yes, respond JSON: {call: [{tool:"tool_name", args:{}}], rationale: "..."}, otherwise {call: [], answer: "..."}.`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type":"application/json", Authorization:`Bearer ${OPENAI_KEY}` },
    body: JSON.stringify({
      model: process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini",
      messages: [{ role:"system", content: "You are RoyalMix planner." }, { role:"user", content: prompt }],
      max_tokens: 600
    })
  });
  const body = await res.json();
  const content = body.choices?.[0]?.message?.content || "{}";
  let plan = { call: [], answer: "" };
  try { plan = JSON.parse(content); } catch (e) { plan.answer = content; }

  // 3. execute tools
  const toolOutputs: any[] = [];
  for (const call of plan.call || []) {
    const out = await runTool(call.tool, call.args || {});
    toolOutputs.push(out);
  }

  // 4. final synthesis
  const finalPrompt = `User: ${userMessage}\nMemories: ${memories.map(m=>m.text).join(" | ")}\nToolOutputs: ${JSON.stringify(toolOutputs)}\nNow produce a helpful, concise answer.`;
  const finalRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type":"application/json", Authorization:`Bearer ${OPENAI_KEY}` },
    body: JSON.stringify({
      model: process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini",
      messages: [{ role:"system", content:"You are RoyalMix assistant." }, { role:"user", content: finalPrompt }],
      max_tokens: 800
    })
  });
  const finalJson = await finalRes.json();
  const finalText = finalJson.choices?.[0]?.message?.content || "Sorry, I couldn't complete the request.";

  // Save user message + assistant response to memory optionally
  await saveMemory(userId, `User: ${userMessage}`);
  await saveMemory(userId, `Assistant: ${finalText}`);

  return { answer: finalText, toolOutputs };
    }
