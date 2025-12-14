import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event: any) => {
  const body = JSON.parse(event.body);

  const res = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL!,
    messages: [{ role: "user", content: body.prompt }]
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ reply: res.choices[0].message.content })
  };
};
