import "../styles/globals.css";
import { CacheProvider, EmotionCache, useTheme } from "@emotion/react";
import type { AppProps } from "next/app";
import createEmotionCache from "../lib/createEmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import { responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import NavBar from "../components/NavBar";
import React from "react";
import { createCustomTheme } from "../lib/theme";

const clientSideEmotionCache = createEmotionCache();

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

type MyAppProps = {
  emotionCache?: EmotionCache;
} & AppProps;

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const theme = useMemo(() => createCustomTheme({ light: true }), []);

  const theme1 = responsiveFontSizes(theme);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme1}>
        <CssBaseline />
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

/*
  const theme = useMemo(
    () => createCustomTheme({ isDark: themeDarkContext }),
    []
  );

*/
