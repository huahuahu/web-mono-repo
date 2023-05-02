/* eslint-disable prettier/prettier */
import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { LocalizedStringManager } from "../../Localization/localizedString";

export function PrivacyComponent() {
  useEffect(() => {
    (async function () {
      const text  = await( await fetch(`http:localhost:3000/api/clipboard-test?name=haha`)).text();
      console.log(text);
    })();
  }, []);


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
