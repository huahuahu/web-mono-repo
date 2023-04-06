// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Container, Link, Typography } from "@mui/material";
import React from "react";
import styles from "./app.module.css";

export function App() {
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100vh",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/mui">MUI</Link>
    </Container>
  );
}

export default App;
