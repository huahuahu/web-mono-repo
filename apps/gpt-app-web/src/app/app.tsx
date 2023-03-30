// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import React from "react";
import { getChat } from "./api/chat";

export function App() {
  const [answer, setAnswer] = React.useState<string>("");
  const [question, setQuestion] = React.useState<string>("");

  return (
    <Container
      maxWidth="md"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>{answer && <Typography variant="body1">{answer}</Typography>}</Box>
      <Box
        sx={{
          flexGrow: 1,
        }}
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          getChat(question)
            .then((res) => {
              setAnswer(res ?? "res");
            })
            .catch((err) => {
              setAnswer(err.toString());
            });
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <InputLabel htmlFor="my-input">Questions</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
          <FormHelperText id="my-helper-text">
            We will never share your email.
          </FormHelperText>
        </Box>
      </form>
    </Container>
  );
}

export default App;
