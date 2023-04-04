import { Box, Alert, Button } from "@mui/material";
import React from "react";
import styles from "./paste-error-component.module.css";
import { LocalizedStringManager } from "../../Localization/localizedString";

export interface PasteErrorComponentProps {
  error: Error;
  onDismiss: () => void;
}

export function PasteErrorComponent(props: PasteErrorComponentProps) {
  const { error, onDismiss } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "center",
      }}
    >
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={onDismiss}>
            {
              LocalizedStringManager.getInstance().currentLocalizedStrings
                .backButtonString
            }
          </Button>
        }
      >
        {error.message}
      </Alert>
    </Box>
  );
}

export default PasteErrorComponent;
