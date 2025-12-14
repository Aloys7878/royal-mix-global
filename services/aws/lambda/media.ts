import { generateImage } from "../../../ai/media/image";

export const handler = async (event: any) => {
  const { prompt } = JSON.parse(event.body);
  const result = await generateImage(prompt);

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
