// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes, Link } from "react-router-dom";
import React, { useCallback } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import Typography from "@mui/material/Typography/Typography";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme, useMediaQuery } from "@mui/material";

export function App() {
  const [pastedText, setPastedText] = React.useState<string>("");

  // get theme using useMediaQuery
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // create mui theme based on prefersDarkMode
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

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
    <ThemeProvider theme={theme}>
      <CssBaseline />

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
            bgcolor: "#cfe8fc",
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
    </ThemeProvider>
  );
}

export default App;
