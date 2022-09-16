import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/system";
import { Context } from "react";

const defaultTheme = createTheme();

export const createCustomTheme = (params: { light: boolean }) => {
  const { light } = params;
  const palette: ThemeOptions["palette"] = {
    primary: {
      main: "#f4f4f4",
      dark: "#000000",
      light: "#ffffff",
      contrastText: "#3C2358",
    },
    background: {
      default: light ? "rgb(248,249,250,0.99)" : "#454545",
      paper: light ? "rgb(0,0,0,0.1) " : "#454545",
    },
    text: {
      primary: light
        ? defaultTheme.palette.common.black
        : defaultTheme.palette.common.white,

      secondary: light
        ? defaultTheme.palette.common.white
        : defaultTheme.palette.common.black,
    },
    mode: light ? "light" : "dark",
  };

  return createTheme({
    typography: {
      fontFamily: '"Roboto","OpenSans", "Helvetica", "Arial", "sans-serif"',
    },
    palette,
    components: {
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontSize: "3rem",
            fontWeight: 600,
          },
          h2: {
            fontSize: "2.5rem",
          },
          h3: {
            fontSize: "2rem",
          },
          h4: {
            fontSize: "1.75rem",
          },
          h5: {
            fontSize: "1.5rem",
          },
          h6: {
            fontSize: "1.25rem",
          },
          body1: {
            fontFamily: "Open Sans",
            fontSize: "1rem",
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            fontFamily: "Roboto",
            fontWeight: 500,
          },
          list: {
            backgroundColor: "#ffffff",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: "Open Sans",
            fontWeight: 500,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            borderWidth: "1px",
            color: palette.text?.primary,
            borderColor: palette.primary?.contrastText,
            "& .MuiChip-icon": {
              color: palette.text?.primary,
            },
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
          elevation2: {
            boxShadow: "0 5px 10px rgba(0,0,0,0.12)",
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
            paddingBottom: 3,
            color: palette.text?.primary,
          },
          label: {
            lineHeight: 1.2,
            fontWeight: 400,
            fontFamily: "Roboto",
            fontSize: "1.1rem",
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
            borderImage:
              "linear-gradient( 0deg, #143DA6 ,  #53FFAA 60% ) 0 100%",
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
};
