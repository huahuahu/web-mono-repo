// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes, Link } from "react-router-dom";
import React, { useCallback } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import Typography from "@mui/material/Typography/Typography";

export function App() {
  const [pastedText, setPastedText] = React.useState<string>("");

  const onPaste = useCallback(() => {
    navigator.clipboard
      .readText()
      .then((text) => {
        setPastedText(text);
      })
      .catch((err) => {
        setPastedText(err.toString());
      });
  }, [setPastedText]);

  return (
    <Container
      maxWidth="md"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          bgcolor: "#cfe8fd",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <Button
          onClick={onPaste}
          size="large"
          variant="contained"
          endIcon={<ContentPasteGoIcon />}
        >
          Paste
        </Button>

        {pastedText && (
          <Typography variant="subtitle1" component="h2">
            {pastedText}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default App;
