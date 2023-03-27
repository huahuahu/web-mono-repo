// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";

export function App() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => {
            navigator.clipboard.readText().then((text) => {
              console.log(text);
            });
          }}
          size="large"
          variant="contained"
          endIcon={<ContentPasteGoIcon />}
        >
          Paste
        </Button>
      </Box>
    </Container>
  );
}

export default App;
