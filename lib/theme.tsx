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
      dark: "#000000",
      light: "#ffffff",
    },
    secondary: {
      main: "#e8e8f0",
    },
    background: {
      default: "#f4f4f4",
    },
    info: {
      main: "#143DA6",
    },
  },
  typography: {
    fontFamily:
      '"Charter", "Maven Pro", "Sabon", "Roboto", "Helvetica", "Arial", "sans-serif"',
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
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: "#000000",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        labelContainer: {
          display: "flex",
          flexDirection: "column",
          width: "inherit",
          paddingLeft: 7,
          paddingRight: 7,
          borderRadius: 7,
          paddingTop: 5,
        },
        label: {
          lineHeight: 1.2,
          "&.Mui-active": {
            fontWeight: 500,
          },
        },
      },
    },
    MuiStepContent: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderRadius: 10,
          marginLeft: "24px",
          borderLeftWidth: 2,
          borderImage: "linear-gradient( 0deg, #143DA6 ,  #53FFAA 60% ) 0 100%",
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        lineVertical: {
          minHeight: 0,
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
