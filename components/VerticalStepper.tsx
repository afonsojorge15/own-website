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
import { StepperData } from "../src/data/workData";

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "rgb(0,0,0,0.15)",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage: "linear-gradient( 330deg, #143DA6 10%,  #53FFAA 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
}));

const ColorlibSmallStepIconRoot = styled(ColorlibStepIconRoot)({
  width: 30,
  height: 30,
});

function ColorlibStepIcon(props: StepIconProps) {
  const { active, className } = props;

  const icons: { [index: string]: React.ReactElement } = {};

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

  const icons: { [index: string]: React.ReactElement } = {};

  return (
    <>
      <ColorlibSmallStepIconRoot
        ownerState={{ active }}
        className={"icon-thing"}
      />
    </>
  );
}

export const VerticalLinearStepper: React.FC<{ props: Array<StepperData> }> = ({
  props,
}) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Box>
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
                },

                "& .icon-thing": {
                  transition: "0.2s",
                },
                "&:hover .MuiStepLabel-labelContainer": {
                  backgroundColor: "#f4f4f4",
                },
                ...(step.small && {
                  "& .icon-thing": {
                    marginLeft: "10px",
                  },
                }),
                ...(activeStep === index && {
                  "&:hover .MuiStepLabel-labelContainer": {
                    backgroundColor: "transparent",
                  },
                }),
                "&:hover .icon-thing": {
                  backgroundColor: "#f4f4f4",
                  borderColor: "#bdbdbd",
                  borderStyle: "solid",
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
            <StepContent>
              <Typography mb="5px" variant="body1">
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
