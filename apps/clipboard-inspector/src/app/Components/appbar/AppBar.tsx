import { AppBar, Container, Toolbar, Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import React from "react";
import { LocalizedStringManager } from "../../Localization/localizedString";
import { environment } from "../../../environments/environment";

export function ResponsiveAppBar(): JSX.Element {
  if (environment.isMobile) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }
  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Link
              href="/home"
              sx={{
                pl: 2,
                pr: 2,
              }}
            >
              <Typography textAlign="center" sx={{ color: "white" }}>
                {
                  LocalizedStringManager.getInstance().currentLocalizedStrings
                    .home
                }
              </Typography>
            </Link>

            <Link
              href="/privacy"
              sx={{
                pl: 2,
                pr: 2,
              }}
            >
              <Typography textAlign="center" sx={{ color: "white" }}>
                {
                  LocalizedStringManager.getInstance().currentLocalizedStrings
                    .privacy
                }
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
