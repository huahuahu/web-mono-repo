import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import ClipboardItemRepresentationComponent from "./clipboard-item-representation-component";

export interface ClipboardItemComponentProps {
  clipBoardItem: ClipboardItem;
}

export function ClipboardItemComponent(props: ClipboardItemComponentProps) {
  const { clipBoardItem } = props;
  if (clipBoardItem.types.length === 0) {
    return (
      <ListItem>
        <ListItemText primary="No MIME type available" />
      </ListItem>
    );
  }
  return (
    <>
      {clipBoardItem.types.map((type) => {
        return (
          <ClipboardItemRepresentationComponent
            type={type}
            clipBoardItem={clipBoardItem}
            key={type}
          />
        );
      })}
    </>
  );
}

export default ClipboardItemComponent;
