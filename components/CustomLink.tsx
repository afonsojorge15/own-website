import { Launch, PublicRounded } from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  Link,
  ListItem,
  Paper,
  Stack,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  stepLabelClasses,
  stepContentClasses,
  StepContent,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  alpha,
  SvgIconTypeMap,
  SvgIcon,
  SxProps,
  Theme,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import type { NextPage } from "next";
import * as React from "react";
import { VerticalLinearStepper } from "./VerticalStepper";

export type CustomLinkData = {
  title: string;
  reference: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  sx?: SxProps<Theme> | undefined;
};

const CustomLink: React.FC<CustomLinkData> = ({ title, reference, icon }) => {
  let theme = useTheme();

  return (
    <Link
      underline="none"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        flexDirection: "row",
      }}
      href={reference}
      onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation();
      }}
    >
      <Typography
        sx={{
          alignItems: "center",

          color: (theme) => theme.palette.primary.dark,
          textAlign: "center",
          "&:hover >*": {
            color: theme.palette.primary.contrastText,
          },
          "&:hover ": {
            color: theme.palette.primary.contrastText,
          },
        }}
        variant="h6"
      >
        {title}
      </Typography>
      <SvgIcon
        component={icon ? icon : React.Fragment}
        sx={{
          ml: "5px",
          fontSize: "1.25rem",
          color: theme.palette.primary.dark,
        }}
      />
    </Link>
  );
};

export default CustomLink;
