import { RoyalChat } from "../../../ai/engine/chat";

export const handler = async (event: any) => {
  const { message } = JSON.parse(event.body);

  const reply = await RoyalChat(message);

  return {
    statusCode: 200,
    body: JSON.stringify(reply)
  };
};
