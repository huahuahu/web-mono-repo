// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import React from "react";

export function App() {
  return (
    <Container
      maxWidth="md"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>GPT</Box>
    </Container>
  );
}

export default App;
