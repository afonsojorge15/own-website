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
} from "@mui/material";
import type { NextPage } from "next";
import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import { StepIconProps } from "@mui/material/StepIcon";

const steps = [
  {
    label: "Internship - Junior Software developer",
    subtitle: "Summer 2019",
    description: `            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
    commodo purus elementum, aliquet magna ac, commodo dolor. Nulla ut
    sem elit. Etiam auctor elit a dapibus interdum. Pellentesque vitae
    tristique erat. In condimentum ullamcorper orci, et finibus dolor
    varius hendrerit. Donec sed vehicula mi. Ut bibendum dui ut
    tincidunt molestie. Fusce et augue vel eros consequat molestie.
    Suspendisse auctor enim non odio finibus, et tincidunt felis
    vulputate.`,
  },
  {
    label: "Full-time - Lead Software developer",
    subtitle: "Nov 2021 - Present",
    description: `            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
    commodo purus elementum, aliquet magna ac, commodo dolor. Nulla ut
    sem elit. Etiam auctor elit a dapibus interdum. Pellentesque vitae
    tristique erat. In condimentum ullamcorper orci, et finibus dolor
    varius hendrerit. Donec sed vehicula mi. Ut bibendum dui ut
    tincidunt molestie. Fusce et augue vel eros consequat molestie.
    Suspendisse auctor enim non odio finibus, et tincidunt felis
    vulputate.`,
  },
  {
    label: "Full-Stack MVP development",
    subtitle: "2019",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Website development",
    subtitle: "2019",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Pitch deck",
    subtitle: "2019",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
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
  "&:hover": { backgroundColor: theme.palette.primary.main },
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, className } = props;

  const icons: { [index: string]: React.ReactElement } = {};

  return (
    <ColorlibStepIconRoot ownerState={{ active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const VerticalLinearStepper: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(-1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              onClick={handleStep(index)}
              sx={{ cursor: "pointer" }}
              optional={
                <Typography variant="caption">{step.subtitle}</Typography>
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

const Work: NextPage = () => {
  let theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      width="100%"
      justifyContent={"center"}
      alignItems={"center"}
      maxWidth={"1100px"}
      ml="auto"
      mr="auto"
      my={"50px"}
      px={"20px"}
      sx={{ background: theme.palette.primary.main }}
    >
      <Paper
        sx={{
          display: "block",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: "30px",
          py: "30px",
          mb: "70px",
          background: theme.palette.primary.light,
          boxShadow: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
          }}
        >
          <Stack
            alignItems="center"
            flexWrap={"wrap"}
            direction={"row"}
            textAlign={"left"}
            display="flex"
            mt={1}
          >
            <Link href={"https://walk4money.app"}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.dark,
                  mr: 1,
                  pb: "6px",
                }}
                variant="h5"
                fontWeight={"600"}
              >
                Walk4Money
              </Typography>
            </Link>
            <Link href={"https://walk4money.app"}>
              <Launch
                sx={{
                  alignSelf: "bottom",
                  color: theme.palette.primary.dark,
                }}
              />
            </Link>
          </Stack>
          <VerticalLinearStepper></VerticalLinearStepper>
        </Box>
      </Paper>
    </Box>
  );
};

export default Work;
