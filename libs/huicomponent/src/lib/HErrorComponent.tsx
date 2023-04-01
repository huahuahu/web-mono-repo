import { Typography } from "@mui/material";
import React from "react";

export interface HErrorComponentProps {
  errorMessage: string;
}

export function HErrorComponent(props: HErrorComponentProps) {
  const { errorMessage } = props;
  return (
    <Typography align="center" variant="body1" component="div" color="error">
      {errorMessage}
    </Typography>
  );
}

export default HErrorComponent;
