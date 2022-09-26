import { Launch, PublicRounded } from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  Link,
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
  left?: boolean;
};

const CustomLink: React.FC<CustomLinkData> = ({
  title,
  reference,
  icon,
  left,
}) => {
  let theme = useTheme();

  return (
    <>
      {left ? (
        <Link
          underline="none"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            flexDirection: "row",
            "&:hover > *": {
              color: theme.palette.primary.contrastText,
            },
            "&:hover ": {
              color: theme.palette.primary.contrastText,
            },
          }}
          href={reference}
          onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            e.stopPropagation();
          }}
        >
          {" "}
          <SvgIcon
            component={icon ? icon : React.Fragment}
            sx={{
              mr: "5px",
              fontSize: "1.25rem",
              color: theme.palette.primary.dark,
            }}
          />
          <Typography
            sx={{
              alignItems: "center",

              color: theme.palette.primary.dark,
              textAlign: "center",
            }}
            variant="body1"
          >
            {title}
          </Typography>
        </Link>
      ) : (
        <Link
          underline="none"
          sx={{
            display: "inline-flex",
            alignItems: "center",

            flexDirection: "row",
            "&:hover > *": {
              color: theme.palette.primary.contrastText,
              cursor: "pointer",
            },
            "&:hover ": {
              color: theme.palette.primary.contrastText,
              cursor: "pointer",
            },
          }}
          href={reference}
          onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            e.stopPropagation();
          }}
        >
          <Typography
            sx={{
              mr: "5px",

              color: theme.palette.primary.dark,
            }}
            variant="body1"
          >
            {title}
          </Typography>
          <SvgIcon
            component={icon ? icon : React.Fragment}
            sx={{
              fontSize: "1.25rem",
              color: theme.palette.primary.dark,
            }}
          />
        </Link>
      )}
    </>
  );
};

export default CustomLink;
