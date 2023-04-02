import React, { useCallback, useMemo, useReducer } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box/Box";
import { ThemeProvider } from "@emotion/react";
import { Button, CssBaseline, createTheme, useMediaQuery } from "@mui/material";
import { getClipboardItems } from "./Data/getClipboardItems";
import PasteButton from "./Components/paste-button/paste-button";
import ClipboardItemListComponent from "./Components/clipboard-item-list-component/clipboard-item-list-component";
import {
  PasteActionKind,
  counterReducer,
  createInitialState,
} from "./Data/reducer";
import PasteErrorComponent from "./Components/paste-error-component/paste-error-component";

export function App() {
  const [state, dispatch] = useReducer(counterReducer, createInitialState());

  // TODO: Can this be async?
  const onPaste = useCallback(async () => {
    try {
      const clipboardItems = await getClipboardItems();
      dispatch({ type: PasteActionKind.Data, payload: clipboardItems });
    } catch (error) {
      dispatch({ type: PasteActionKind.Error, payload: error as Error });
    }
  }, []);

  // create a function to reset state
  const onReset = useCallback(() => {
    dispatch({ type: PasteActionKind.Reset, payload: undefined });
  }, []);

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

  const pasteScene = useMemo(() => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <PasteButton onPaste={onPaste} />
      </Box>
    );
  }, [onPaste]);

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
        {state.shouldShowPasteButton && pasteScene}
        {state.data && (
          <ClipboardItemListComponent
            onReset={onReset}
            clipboardItems={state.data}
          />
        )}
        {state.error && (
          <PasteErrorComponent error={state.error} onDismiss={onReset} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
