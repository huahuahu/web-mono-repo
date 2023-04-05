/* eslint-disable prettier/prettier */
import React, { useCallback, useMemo, useReducer } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box/Box";
import { getClipboardItems } from "../../Data/getClipboardItems";
import { counterReducer, createInitialState, PasteActionKind } from "../../Data/reducer";
import ClipboardItemListComponent from "../clipboard-item-list-component/clipboard-item-list-component";
import PasteButton from "../paste-button/paste-button";
import PasteErrorComponent from "../paste-error-component/paste-error-component";

export function ClipboardComponent() {
  const [state, dispatch] = useReducer(counterReducer, createInitialState());

  const onPaste = useCallback(() => {
    const callGetClipboardItems = async () => {
      try {
        const clipboardItems = await getClipboardItems();
        dispatch({ type: PasteActionKind.Data, payload: clipboardItems });
      } catch (error) {
        dispatch({ type: PasteActionKind.Error, payload: error as Error });
      }
    };
    callGetClipboardItems();
  }, []);

  // create a function to reset state
  const onReset = useCallback(() => {
    dispatch({ type: PasteActionKind.Reset, payload: undefined });
  }, []);


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
  );
}

export default ClipboardComponent;
