import { generateVoice } from "../../../ai/engine/voice";

export const handler = async (event: any) => {
  const { text } = JSON.parse(event.body || "{}");
  const result = await generateVoice(text);

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(result),
  };
};
