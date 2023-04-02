import { Box } from "@mui/system";
import React from "react";
import Alert from "@mui/material/Alert/Alert";
import Button from "@mui/material/Button/Button";
import List from "@mui/material/List";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./clipboard-item-list-component.module.css";
import ClipboardItemComponent from "../clipboard-item-component/clipboard-item-component";

export interface ClipboardItemListComponentProps {
  onReset: () => void;
  clipboardItems: ClipboardItem[];
}

export function ClipboardItemListComponent(
  props: ClipboardItemListComponentProps
) {
  const { clipboardItems, onReset } = props;
  if (clipboardItems.length === 0) {
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
        <Alert
          action={<Button onClick={onReset}>Reset</Button>}
          severity="info"
        >
          There is no data in the clipboard.
        </Alert>
      </Box>
    );
  }
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItemButton onClick={onReset}>
        <ListItemIcon>
          <ArrowBackIcon />
        </ListItemIcon>
        <ListItemText primary="Back" />
      </ListItemButton>

      {clipboardItems.map((clipboardItem, index) => {
        return (
          <>
            <ListSubheader>{`Item ${index + 1}`}</ListSubheader>
            <ClipboardItemComponent
              key={
                // eslint-disable-next-line react/no-array-index-key
                index
              }
              clipBoardItem={clipboardItem}
            />
          </>
        );
      })}
    </List>
  );
}

export default ClipboardItemListComponent;
