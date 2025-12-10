import { replicate } from "../utils/aiClient";

export const handler = async (event: any) => {
  try {
    const { audio } = JSON.parse(event.body);

    const output = await replicate.run(
      "openai/whisper",
      { input: { audio } }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Transcription completed",
        text: output.text,
      }),
    };
  } catch (e: any) {
    return { statusCode: 500, body: e.toString() };
  }
};
