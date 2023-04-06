import { Container, Typography, Link } from "@mui/material";
import React from "react";

export function ErrorPage() {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography>Error Found</Typography>
      <Link href="/">Return home</Link>
    </Container>
  );
}
