import { Container, Link } from "@mui/material";
import React from "react";

export function Bottom() {
  return (
    <Container
      component="footer"
      maxWidth="md"
      sx={{
        mb: 4,
        mt: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "primary.main",
      }}
    >
      <Link href="/">Return home</Link>
    </Container>
  );
}
