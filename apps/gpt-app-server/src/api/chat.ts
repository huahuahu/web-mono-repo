import { Configuration, OpenAIApi } from "openai";
// import { environment } from "../../environments/environment";

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

// declare a async func
export default async function getAnswer(
  question: string
): Promise<string | undefined> {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: question,
      },
    ],
    temperature: 0.6,
  });
  return response.data.choices[0].message.content;
}
