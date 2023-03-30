import express from "express";
import path from "path";
import getAnswer from "./api/chat";

const host = process.env.HOST ?? "localhost";
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

export const rootDir = path.resolve(__dirname, "../../..");

const configStatic = () => {
  const targetDir = path.join(rootDir, "../gpt-app-web");

  console.log("taget dir is", targetDir);
  app.use("/", express.static(targetDir));
};

app.use(express.json());

app.post("/api/chat", (req, res) => {
  // Parse the body of the request to get json, and get value of animal key
  const { body } = req;
  const { animal } = body;
  getAnswer(animal)
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => {
      res.json({ err: err.message });
    });
  // res.json({ animal });

  // res.send({ 'message': 'Hello API'});
});

configStatic();

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
