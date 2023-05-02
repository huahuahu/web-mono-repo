import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const testEnv = process.env.TEST_ENVIRONMENT;
    let responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully." + testEnv
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response." + testEnv;
    responseMessage += " " + process.env.TEST_ENVIRONMENT + "env";
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;