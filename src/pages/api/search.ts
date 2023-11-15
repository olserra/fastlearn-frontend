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
            "You are a helpful assistant, that will generate content for learning. Don't need to return any message, just the data like a const data = [{}], with no console.logs. The key value pairs are: id, title, description and image url, and the keys should not be strings, but the actual keys. The the data array, should be an array, and not a string.",
        },
        {
          role: "user",
          content: `I would like as a return, and array of objects (at least 9), containing an id (auto incremented), title, description and image url, based on this: ${query}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message.content;
  }
  const content = await main();
  res.status(200).json(content);
}

// export const config = {
//   runtime: "edge",
// };
