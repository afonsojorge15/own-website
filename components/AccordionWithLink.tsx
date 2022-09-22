import { Launch, LaunchRounded, PublicRounded } from "@mui/icons-material";
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
import CustomLink, { CustomLinkData } from "./CustomLink";

const CustomizedAccordion = styled(Accordion)(() => ({
  "&.MuiPaper-root": {
    borderRadius: "8px",
    marginLeft: "auto",
    marginRight: "auto",

    boxShadow: "0 5px 10px rgba(0,0,0,0.12)",
    borderStyle: "none",
  },
  "&.MuiPaper-root:before": {
    height: 0,
  },
}));

const AccordionWithLink: React.FC<{
  props: AccordionData;
  expanded: string | false;
  functionExpaded: React.Dispatch<React.SetStateAction<string | false>>;
  link: CustomLinkData;
}> = ({ props, expanded, functionExpaded, link }) => {
  let theme = useTheme();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      functionExpaded(isExpanded ? panel : false);
    };

  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <CustomizedAccordion
      expanded={expanded === props.index}
      onChange={handleChange(props.index)!}
      sx={{
        display: "block",
        ml: "auto",
        mr: "auto",
        textAlign: "left",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: "1.25rem",
        mb: "1rem",
        background: theme.palette.primary.light,
        py: "5px",
        maxWidth: "900px",
        minWidth: "245px",
      }}
    >
      <AccordionSummary
        sx={{
          px: 0,
          height: "45px",
          "&.MuiAccordionSummary-root": {
            minHeight: "40px",
          },
        }}
        expandIcon={
          <ExpandMoreRoundedIcon
            sx={{
              color: theme.palette.primary.dark,
              borderRadius: "50%",
              borderStyle: "solid",
              borderWidth: "1px",
              fontSize: "1.25rem",
              "&:hover ": {
                color: theme.palette.primary.contrastText,
              },
            }}
          />
        }
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: isSmall ? 1 : "",
            width: "38%",
          }}
        >
          <CustomLink
            title={link.title}
            reference={link.reference}
            icon={link.icon}
          />
        </Box>

        {isSmall ? (
          <></>
        ) : (
          <Typography
            sx={{
              color: alpha(theme.palette.text.primary, 0.5),
              alignSelf: "center",
              pr: "0.5em",
              "&:hover ": {
                color: theme.palette.primary.contrastText,
              },
            }}
            variant="body2"
          >
            {props.subtitle}
          </Typography>
        )}
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0, pb: "5px" }}>
        {" "}
        <VerticalLinearStepper props={props.data} />
      </AccordionDetails>
    </CustomizedAccordion>
  );
};

export default AccordionWithLink;
