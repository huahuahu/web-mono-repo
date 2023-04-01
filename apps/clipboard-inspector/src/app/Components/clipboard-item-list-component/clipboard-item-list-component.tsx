import { Box } from "@mui/system";
import React from "react";
import styles from "./clipboard-item-list-component.module.css";
import ClipboardItemComponent from "../clipboard-item-component/clipboard-item-component";

export interface ClipboardItemListComponentProps {
  clipboardItems: ClipboardItem[];
}

export function ClipboardItemListComponent(
  props: ClipboardItemListComponentProps
) {
  const { clipboardItems } = props;
  return (
    <Box component="ul">
      {clipboardItems.map((clipboardItem, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key -- no better key available
          <ClipboardItemComponent key={index} clipBoardItem={clipboardItem} />
        );
      })}
    </Box>
  );
}

export default ClipboardItemListComponent;
