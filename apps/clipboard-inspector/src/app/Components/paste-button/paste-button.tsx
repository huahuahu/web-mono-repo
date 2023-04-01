import { Button } from "@mui/material";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";

import React from "react";
import styles from "./paste-button.module.css";
/* eslint-disable-next-line */
export interface PasteButtonProps {
  onPaste: () => void;
}

export function PasteButton(props: PasteButtonProps) {
  const { onPaste } = props;
  return (
    <Button
      onClick={onPaste}
      size="large"
      variant="contained"
      endIcon={<ContentPasteGoIcon />}
    >
      Paste
    </Button>
  );
}

export default PasteButton;
