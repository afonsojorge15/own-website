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
} from "@mui/material";
import type { NextPage } from "next";
import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import { StepIconProps } from "@mui/material/StepIcon";
import { StyledComponent } from "@emotion/styled";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import Router from "next/router";
import { AccordionData } from "../src/data/workData";
import { VerticalLinearStepper } from "./VerticalStepper";

const CustomizedAccordion = styled(Accordion)(() => ({
  "&.MuiPaper-root": {
    borderRadius: "8px",
    borderStyle: "none",
  },
  "&.MuiPaper-root:before": {
    height: 0,
  },
}));

export const AccordionWithLink: React.FC<{ props: AccordionData }> = ({
  props,
}) => {
  let theme = useTheme();

  return (
    <CustomizedAccordion
      sx={{
        display: "block",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: "40px",
        mb: "1rem",
        background: theme.palette.primary.light,
        boxShadow: 2,
        py: "15px",
      }}
      //borderTopLeftRadius="8"
    >
      <AccordionSummary
        sx={{ px: 0, height: "45px" }}
        expandIcon={
          <ExpandMoreRoundedIcon
            sx={{
              color: (theme) => theme.palette.primary.dark,
              borderRadius: "50%",
              borderStyle: "solid",
              borderWidth: "1px",
              "&:hover ": {
                color: theme.palette.primary.contrastText,
              },
            }}
          />
        }
      >
        <Link
          underline="none"
          href={props.ref}
          onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            e.stopPropagation();
          }}
        >
          <Typography
            sx={{
              color: (theme) => theme.palette.primary.dark,
              "&:hover >*": {
                color: theme.palette.primary.contrastText,
              },
              "&:hover ": {
                color: theme.palette.primary.contrastText,
              },
            }}
            variant="h5"
            fontWeight={"500"}
          >
            {props.title}{" "}
            <Launch
              sx={{
                color: theme.palette.primary.dark,
                mb: "-4px",
              }}
            />
          </Typography>
        </Link>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0, pb: "5px" }}>
        {" "}
        <VerticalLinearStepper props={props.data} />
      </AccordionDetails>
    </CustomizedAccordion>
  );
};
