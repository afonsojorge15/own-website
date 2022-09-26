import { createTheme } from "@mui/material/styles";
import { alpha, ThemeOptions } from "@mui/system";
import { Context } from "react";

const defaultTheme = createTheme();

export const createCustomTheme = (params: { light: boolean }) => {
  const { light } = params;
  const palette: ThemeOptions["palette"] = {
    primary: {
      main: "#f4f4f4",
      dark: "#000000",
      light: "#ffffff",
      contrastText: "#670999",
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
      fontFamily:
        '"Roboto", "Inter","OpenSans", "Helvetica", "Arial", "sans-serif"',
    },
    palette,
    components: {
      MuiTypography: {
        styleOverrides: {
          body1: {
            fontFamily: "Inter",
          },
          body2: {
            fontFamily: "Inter",
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            fontFamily: "Inter",
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
            fontFamily: "Inter",
            fontWeight: 500,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            borderWidth: "1px",
            paddingLeft: "1px",
            paddingRight: "1px",
            color: palette.primary.contrastText,
            backgroundColor: "transparent",
            borderColor: palette.primary.contrastText!,
            borderStyle: "solid",
            "& .MuiChip-icon": {
              color: palette.primary.contrastText,
            },
            "&:hover .MuiChip-icon": {
              color: palette.primary.contrastText!,
            },
            "&:hover": {
              color: palette.primary.contrastText!,
              borderColor: palette.primary.contrastText!,
              backgroundColor: alpha(palette.primary.contrastText, 0.1),
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
            paddingTop: 3,
            paddingBottom: 1,
            color: palette.text?.primary,
          },
          label: {
            lineHeight: 1.2,
            fontWeight: 400,
            fontFamily: "Roboto",
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
            borderRadius: 0,
            marginLeft: "24px",
            borderLeftWidth: 2,
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
