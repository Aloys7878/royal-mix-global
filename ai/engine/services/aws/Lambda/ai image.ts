import { generateImage } from "../../../ai/engine/image";

export const handler = async (event: any) => {
  const { prompt } = JSON.parse(event.body || "{}");
  const result = await generateImage(prompt);

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(result),
  };
};
