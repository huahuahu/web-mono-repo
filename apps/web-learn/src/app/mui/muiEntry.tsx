import { List, ListItem, Link, Container } from "@mui/material";
import React from "react";
import { Bottom } from "../commonComponent/Bottom";

export function MUIEntry() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container
        sx={{
          flexGrow: 1,
          justifyContent: "space-evenly",
        }}
      >
        <List>
          <ListItem>
            <Link href="/mui/signin">Sign In</Link>
          </ListItem>
          <ListItem>
            <Link href="pricing">Pricing</Link>
          </ListItem>

          <ListItem>
            <Link href="/">Home</Link>
          </ListItem>
        </List>
      </Container>
      <Bottom />
    </Container>
  );
}
