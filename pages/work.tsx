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
import { StyledComponent } from "@emotion/styled";

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
    small: false,
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
    small: false,
  },
  {
    label: "Full-Stack MVP development",
    subtitle: "2019",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    small: true,
  },
  {
    label: "Website development",
    subtitle: "2019",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    small: true,
  },
  {
    label: "Pitch deck",
    subtitle: "2019",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    small: true,
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
}));

const ColorlibSmallStepIconRoot = styled(ColorlibStepIconRoot)({
  width: 35,
  height: 35,
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

const VerticalLinearStepper: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(-1);

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
              StepIconComponent={
                index < 2 ? ColorlibStepIcon : ColorlibSmallStepIcon
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
                ...(index > 1 && {
                  "& .icon-thing": {
                    marginLeft: "8px",
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
                <Typography variant="caption">{step.subtitle}</Typography>
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
            <StepConnector
              sx={{
                marginLeft: "24px",
                minHeight: "24px",
                ...(activeStep === index && {
                  minHeight: "0px",
                }),
                ...(index + 1 === steps.length && {
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
            mb={1}
          >
            <Link underline="hover" href={"https://walk4money.app"}>
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
