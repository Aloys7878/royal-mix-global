import { RoyalImageGen } from "../../../ai/engine/media";

export const handler = async (event: any) => {
  const { prompt } = JSON.parse(event.body);

  const result = await RoyalImageGen(prompt);

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  };
};

