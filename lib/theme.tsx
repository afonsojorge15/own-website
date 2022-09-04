import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";
import { borderRadius, palette } from "@mui/system";
import { Context } from "react";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f4f4f4",
      dark: "#bebebe",
      light: "#ffffff",
    },
    secondary: {
      main: "#e8e8f0",
    },
    background: {
      default: "#F8F8FF",
    },
    info: {
      main: "#143DA6",
    },
  },
  typography: {
    fontFamily:
      '"Maven Pro", "Sabon", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 300,
    },
    body1: {
      fontFamily: "Open Sans",
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          fontFamily: "Maven Pro",
        },
        list: {
          backgroundColor: "#53FFAA",
          color: "#143DA6",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Maven Pro",
          fontWeight: 500,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

//theme = responsiveFontSizes(theme);
/*
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
        dark: "#F0F0F0",
      },
      secondary: {
        main: "#53FFAA",
      },
      background: {
        default: "#143DA6",
      },
      info: {
        main: "#143DA6",
      },
    },

    export const createCustomTheme = (params: { isDark: Context<boolean> }) => {
  const { isDark } = params;
  const palette: ThemeOptions["palette"] = {
    primary: {
      main: "#257DC3",
      dark: "#333333",
      light: "#48a7da",
    },
    background: {
      default: isDark
        ? defaultTheme.palette.grey[50]
        : defaultTheme.palette.primary.dark,
    },
    text: {
      primary: isDark
        ? defaultTheme.palette.common.black
        : defaultTheme.palette.common.white,
    },
    mode: isDark ? "dark" : "light",
  };
*/
