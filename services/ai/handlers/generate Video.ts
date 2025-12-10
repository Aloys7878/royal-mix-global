import { replicate } from "../utils/aiClient";

export const handler = async (event: any) => {
  try {
    const { prompt } = JSON.parse(event.body);

    const output = await replicate.run(
      "stability-ai/stable-video-diffusion",
      { input: { prompt } }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Video generated",
        url: output,
      }),
    };
  } catch (e: any) {
    return { statusCode: 500, body: e.toString() };
  }
};
