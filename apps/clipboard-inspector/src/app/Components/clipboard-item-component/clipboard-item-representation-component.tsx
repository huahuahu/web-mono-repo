import Accordion from "@mui/material/Accordion/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import Typography from "@mui/material/Typography/Typography";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import React, { useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ListItem } from "@mui/material";

export interface ClipboardItemRepresentationComponentProps {
  clipBoardItem: ClipboardItem;
  type: string;
}

export function ClipboardItemRepresentationComponent(
  props: ClipboardItemRepresentationComponentProps
) {
  const { clipBoardItem, type } = props;

  const [textRepresentaion, setTextRepresentation] = React.useState<
    string | null
  >(null);
  useEffect(() => {
    clipBoardItem
      .getType(type)
      .then((blob) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          setTextRepresentation(event.target?.result as string);
        };
        reader.readAsText(blob);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [clipBoardItem, type]);

  return (
    <ListItem key={type}>
      <Accordion
        sx={{
          width: "100%",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{type}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{textRepresentaion}</Typography>
        </AccordionDetails>
      </Accordion>
    </ListItem>
  );
}

export default ClipboardItemRepresentationComponent;
