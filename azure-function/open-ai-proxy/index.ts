import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const question = (req.query.question || (req.body && req.body.question)) as string;
    context.log("body type is  ", typeof req.body);

    context.log("body is " + req.body);

    console.log("quesiont is " + question);


    const url = "https://web-site-ai-service.openai.azure.com/openai/deployments/chat-gpt-first/chat/completions?api-version=2023-03-15-preview"
    const messages = [
        {
          "role": "system",
          "content": "You are an AI assistant that helps people find information."
        },
        {
          "role": "user",
          "content": question
        },
      ]


      // Use Fetch to pass json to url
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "api-key": process.env.OPENAI_API_KEY
        },
        body: JSON.stringify({
            "messages": messages,
            "temperature": 0.7,
            "top_p": 0.95,
            "frequency_penalty": 0,
            "presence_penalty": 0,
            "max_tokens": 800,
            "stop": null
        })
    })

    const json = await response.json()
    console.log(json)
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: json
    }

    

};

export default httpTrigger;