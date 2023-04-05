/* eslint-disable prettier/prettier */
import { Container, Typography } from "@mui/material";
import React from "react";
import { LocalizedStringManager } from "../../Localization/localizedString";

export function PrivacyComponent() {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <Typography variant="body1">{LocalizedStringManager.getInstance().currentLocalizedStrings.privacyPolicy}</Typography>
    </Container>
  );
}
