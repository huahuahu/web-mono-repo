import { Button } from "@mui/material";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";

import React from "react";
import styles from "./paste-button.module.css";
import { LocalizedStringManager } from "../../Localization/localizedString";
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
      {LocalizedStringManager.getInstance().currentLocalizedStrings.paste}
    </Button>
  );
}

export default PasteButton;
