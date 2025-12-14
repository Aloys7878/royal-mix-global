import { generateText } from "../../../ai/engine/text";

export const handler = async (event: any) => {
  try {
    const body = JSON.parse(event.body || "{}");
    const prompt = body.prompt;

    const result = await generateText(prompt);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(result),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message || "Internal Server Error",
      }),
    };
  }
};
