import { replicate } from "../utils/aiClient";

export const handler = async (event: any) => {
  try {
    const { text, voice } = JSON.parse(event.body);

    const output = await replicate.run(
      "openai/gpt-voice",
      { input: { text, voice } }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Voice generated",
        audio: output,
      }),
    };
  } catch (e: any) {
    return { statusCode: 500, body: e.toString() };
  }
};
