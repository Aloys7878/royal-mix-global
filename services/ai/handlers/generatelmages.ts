import { replicate } from "../utils/aiClient";

export const handler = async (event: any) => {
  try {
    const { prompt } = JSON.parse(event.body);

    const output = await replicate.run(
      "stability-ai/stable-diffusion-xl",
      { input: { prompt } }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Image generated",
        url: output[0],
      }),
    };
  } catch (e: any) {
    return { statusCode: 500, body: e.toString() };
  }
};
