import {
  AddchartRounded,
  AppsRounded,
  CodeRounded,
  Launch,
  PublicRounded,
  SettingsRounded,
  WebRounded,
} from "@mui/icons-material";
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
  Theme,
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
import { StepperData } from "../src/data/workData";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AddchartRoundedIcon from "@mui/icons-material/AddchartRounded";

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "rgb(0,0,0,0.15)",
  zIndex: 1,
  color: "#fff",
  width: 40,
  height: 40,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage: "linear-gradient( 330deg, #143DA6 10%,  #53FFAA 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
}));

const ColorlibSmallStepIconRoot = styled("div")<{
  ownerState: { active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "rgb(0,0,0,0.15)",
  zIndex: 1,
  color: "#fff",
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  width: 25,
  height: 25,
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.contrastText,
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, className } = props;
  let theme = useTheme();

  const icons: { [index: string]: React.ReactElement } = {
    1: (
      <CodeRounded
        sx={{
          color: active ? alpha(theme.palette.primary.light, 0.9) : "inherit",
        }}
      />
    ),
    2: <SettingsRounded />,
    3: <AppsRounded />,
    4: <WebRounded />,
    5: <AddchartRounded />,
  };

  return (
    <>
      <ColorlibStepIconRoot ownerState={{ active }} className={"icon-thing"}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    </>
  );
}

function ColorlibSmallStepIcon(props: StepIconProps) {
  const { active, className } = props;

  return (
    <>
      <ColorlibSmallStepIconRoot
        ownerState={{ active }}
        className={"icon-small"}
      />
    </>
  );
}

export const VerticalLinearStepper: React.FC<{ props: Array<StepperData> }> = ({
  props,
}) => {
  let theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Box ml="0rem">
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        nonLinear
        connector={<StepConnector />}
      >
        {props.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={
                step.small ? ColorlibSmallStepIcon : ColorlibStepIcon
              }
              onClick={handleStep(index)}
              sx={{
                cursor: "pointer",
                "& .MuiStepLabel-labelContainer": {
                  transition: "0.3s",
                  borderStyle: "solid",
                  borderColor: "transparent",
                  borderRadius: 2,
                  borderWidth: "0.5px",
                },
                "& .MuiStepLabel-label": {
                  transition: "0.3s",
                  fontSize: isSmall ? "0.875rem" : "1rem",
                },
                "& .icon-thing": {
                  transition: "0.2s",
                  marginLeft: "5px",
                },
                "& .icon-small": {
                  transition: "0.2s",
                  marginLeft: "12px",
                },
                "&:hover .MuiStepLabel-labelContainer": {
                  backgroundColor:
                    activeStep === index
                      ? "transparent"
                      : theme.palette.background.default,
                  borderColor: activeStep === index ? "transparent" : "#bdbdbd",
                },
                /*...(activeStep === index && {
                  "&:hover .MuiStepLabel-labelContainer": {
                    backgroundColor: "transparent",
                  },
                }),*/
                "&:hover .icon-thing": {
                  backgroundColor: theme.palette.background.default,
                  borderColor: "#bdbdbd",
                  borderStyle: activeStep === index ? "none" : "solid",
                  borderWidth: "0.5px",
                },
                "&:hover .icon-thing > *": {
                  transition: "0.2s",

                  color:
                    activeStep === index
                      ? theme.palette.primary.light
                      : alpha(theme.palette.primary.dark, 0.25),
                },
                "&:hover .icon-small": {
                  backgroundColor:
                    activeStep === index
                      ? theme.palette.primary.contrastText
                      : theme.palette.background.default,
                  borderColor: "#bdbdbd",
                  borderStyle: activeStep === index ? "none" : "solid",
                  borderWidth: "0.5px",
                },
              }}
              optional={
                <>
                  {index > 1 ? (
                    <></>
                  ) : (
                    <Typography variant="caption">{step.subtitle}</Typography>
                  )}
                </>
              }
            >
              {step.label}
            </StepLabel>
            <StepContent
              sx={{
                borderImage: step.small
                  ? "#bdbdbd"
                  : "linear-gradient( 0deg, #143DA6 ,  #53FFAA 60% ) 0 100%",
              }}
            >
              <Typography mb="5px" variant="body2">
                {step.description}
              </Typography>
            </StepContent>
            <StepConnector
              sx={{
                marginLeft: "24px",
                minHeight: "24px",
                ...(activeStep === index && {
                  minHeight: "0px",
                }),
                ...(index + 1 === props.length && {
                  minHeight: "0px",
                }),
                ...(activeStep !== index && {
                  borderColor: "#bdbdbd",
                  borderLeftStyle: "solid",
                  borderLeftWidth: "2px",
                }),
              }}
            ></StepConnector>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
