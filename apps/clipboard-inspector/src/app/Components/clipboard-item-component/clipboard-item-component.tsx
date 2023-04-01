import Accordion from "@mui/material/Accordion/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import Typography from "@mui/material/Typography/Typography";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./clipboard-item-component.module.css";

export interface ClipboardItemComponentProps {
  clipBoardItem: ClipboardItem;
}

export function ClipboardItemComponent(props: ClipboardItemComponentProps) {
  const { clipBoardItem } = props;
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{clipBoardItem.types.join(",")}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default ClipboardItemComponent;
