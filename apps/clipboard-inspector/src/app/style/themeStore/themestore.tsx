import { LinkProps } from "@mui/material/Link";
import createTheme, { Theme } from "@mui/material/styles/createTheme";
import * as React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  // MemoryRouter,
} from "react-router-dom";

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <RouterLink ref={ref} to={href} {...other} />;
});

export function getMUITheme(isDark: boolean): Theme {
  return createTheme({
    components: {
      MuiLink: {
        // styleOverrides: {
        //   root: ({ theme }) => ({
        //     "&:visited": {
        //       color: theme.palette.secondary.main,
        //       textDecorationColor: theme.palette.secondary.main,
        //     },
        //   }),
        // },
        defaultProps: {
          component: LinkBehavior,
        } as LinkProps,
      },
    },

    palette: {
      mode: isDark ? "dark" : "light",
    },
  });
}
