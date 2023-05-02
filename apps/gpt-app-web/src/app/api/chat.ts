// create an async function to call the api using fetch
export const getChat = async (animal: string) => {
  const response = await fetch(`/api/open-ai-proxy`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question: animal }),
  });
  const data = await response.json();
  return data.choices[0].message.content as string;
};
