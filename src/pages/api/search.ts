import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { query } = req.body;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant, that will generate content for learning.",
        },
        {
          role: "user",
          content: `I would like as a return, and array of objects (at least 9), containing an id (auto incremented), title, description and image url, based on this: ${query}`,
        },
      ],
      model: "gpt-3.5-turbo",
      response_format: { type: "json_object" },
    });
    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
  }
  main();
}

export const config = {
  runtime: "edge",
};
