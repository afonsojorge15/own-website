import "../styles/globals.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";
import createEmotionCache from "../lib/createEmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../lib/theme";
import { createContext, useMemo, useState } from "react";
import NavBar from "../components/NavBar";

const clientSideEmotionCache = createEmotionCache();

//export const themeDarkContext = createContext(true);

type MyAppProps = {
  emotionCache?: EmotionCache;
} & AppProps;

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
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
