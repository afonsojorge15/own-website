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
} from "@mui/material";
import type { NextPage } from "next";
import * as React from "react";
import { ProjectData, WorkData } from "../src/data/workData";
import { VerticalLinearStepper } from "../components/VerticalStepper";
import AccordionWithLink from "../components/AccordionWithLink";
import { CustomLinkData } from "../components/CustomLink";

const Work: NextPage = () => {
  let theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = React.useState<string | false>(false);

  return (
    <Box
      width="100%"
      justifyContent="center"
      justifyItems={"center"}
      alignItems="center"
      alignContent="center"
      textAlign="center"
      maxWidth={"1100px"}
      ml="auto"
      mr="auto"
      my={"50px"}
      px={"20px"}
    >
      <Box mb="4rem">
        <Typography
          sx={{
            alignItems: "center",

            color: (theme) => theme.palette.primary.dark,
            textAlign: "center",
            mb: "1.9rem",
          }}
          variant="h2"
        >
          Experience
        </Typography>
        {WorkData.map((item) => (
          <AccordionWithLink
            key={item.link.title}
            functionExpaded={setExpanded}
            expanded={expanded}
            props={item}
            link={item.link}
          />
        ))}
      </Box>
      <Typography
        sx={{
          alignItems: "center",

          color: (theme) => theme.palette.primary.dark,
          textAlign: "center",
          mb: "1.9rem",
        }}
        variant="h2"
      >
        Projects
      </Typography>{" "}
      {ProjectData.map((item) => (
        <AccordionWithLink
          key={item.link.title}
          functionExpaded={setExpanded}
          expanded={expanded}
          props={item}
          link={item.link}
        />
      ))}
    </Box>
  );
};

export default Work;

/**
         <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
          }}
        >
 */
