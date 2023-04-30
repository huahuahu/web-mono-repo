const openaiApiBase = process.env.OPEN_AI_ENDPOINT;
const openaiApiKey = process.env.OPEN_AI_KEY;
const openAIModel = process.env.OPEN_AI_MODEL;

export default async function getAnswer(
  question: string
): Promise<string | undefined> {
  const url = `${openaiApiBase}/openai/deployments/${openAIModel}/chat/completions?api-version=2023-03-15-preview`;
  console.log("url is", url);
  const messages = [
    { role: "system", content: "You are a helpful assistant." },
    {
      role: "user",
      content: "Does Azure OpenAI support customer managed keys?",
    },
    {
      role: "assistant",
      content: "Yes, customer managed keys are supported by Azure OpenAI.",
    },
    { role: "user", content: question },
  ];
  const payload = { messages };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": openaiApiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content as string;
  } catch (error) {
    throw new Error(`HTTP error! status: ${error}`);
  }
}
