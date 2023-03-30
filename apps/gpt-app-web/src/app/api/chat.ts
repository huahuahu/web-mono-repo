// create an async function to call the api using fetch
export const getChat = async (animal: string) => {
  const response = await fetch(`/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ animal }),
  });
  const data = await response.json();
  return data.result as string;
};
