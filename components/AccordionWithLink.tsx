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
    boxShadow: "0 5px 10px rgba(0,0,0,0.12)",
    borderStyle: "none",
  },
  "&.MuiPaper-root:before": {
    height: 0,
  },
}));

export const AccordionWithLink: React.FC<{
  props: AccordionData;
  expanded: string | false;
  functionExpaded: React.Dispatch<React.SetStateAction<string | false>>;
}> = ({ props, expanded, functionExpaded }) => {
  let theme = useTheme();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      functionExpaded(isExpanded ? panel : false);
    };

  return (
    <CustomizedAccordion
      expanded={expanded === props.index}
      onChange={handleChange(props.index)!}
      sx={{
        display: "block",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: "17.5px",
        mb: "1rem",
        background: theme.palette.primary.light,
        py: "7.5px",
        maxWidth: "900px",
      }}
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
