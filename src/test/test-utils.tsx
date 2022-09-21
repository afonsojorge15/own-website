import React, { FC, ReactElement, useMemo } from "react";
import { render, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";
import { responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import { createCustomTheme } from "../lib/theme";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useMemo(() => createCustomTheme({ light: true }), []);

  const theme1 = responsiveFontSizes(theme);

  return <ThemeProvider theme={theme1}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
