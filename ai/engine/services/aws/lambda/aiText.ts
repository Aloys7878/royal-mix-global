import { generateText } from "../../../ai/engine/text";

export const handler = async (event: any) => {
  const { prompt } = JSON.parse(event.body || "{}");

  const result = await generateText(prompt);

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(result),
  };
};
