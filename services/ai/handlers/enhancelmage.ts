import { replicate } from "../utils/aiClient";

export const handler = async (event: any) => {
  try {
    const { image } = JSON.parse(event.body);

    const output = await replicate.run(
      "xinntao/esrgan",
      { input: { image } }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Image enhanced",
        url: output,
      }),
    };
  } catch (e: any) {
    return { statusCode: 500, body: e.toString() };
  }
};
