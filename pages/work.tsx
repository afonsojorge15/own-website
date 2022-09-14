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
    subtitle: "July 2019 - September 2019",
    description: `As an interning junior programmer, I was tasked with the production of a prototype application, based on the company's business model, to assess its feasibility.  
    I developed a serverless react native app, using javascript, with an intense focus on usability and designing the application's overall flow.`,
    small: false,
  },
  {
    label: "Full-time - Lead Software developer",
    subtitle: "Nov 2021 - Present",
    description: `After a year of interruption due to the pandemic, I joined as the lead software developer. 
    I have since been responsible for designing and developing an MVP mobile app and a web page to demonstrate the company's business model.
    In addition, I compiled most of the market research later used in the investment pitch decks, which  I also structured and co-authored.`,
    small: false,
  },
  {
    label: "MVP app",
    subtitle: "",
    description: `The MVP consists of a full-stack mobile application built in React Native using typescript, for iOS and Android. It's a step-tracking fitness app with high user-incentive and rich social features.
    UX is designed with accessibility and simplicity as core values, together with a colourful and intuitive UI. It utilizes NoSQL MongoDB Atlas for its database and Firebase for the backend and user authentication.   `,
    small: true,
  },
  {
    label: "Website",
    subtitle: "",
    description: `A static, responsive and interactive react website that showcases the different value propositions and business models of the company. It's built with NextJS using typescript and utilizes Material-UI for increased composability in its components.`,
    small: true,
  },
  {
    label: "Pitch deck",
    subtitle: "",
    description: `Upon deployment of both the MVP and web app, I undertook most of the research associated with market size/validation, direct competitors and future projections, which later led to the creation of several pitch decks based on these analyses.`,
    small: true,
  },
];

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
      sx={{ background: theme.palette.background.default }}
    >
      <Paper
        sx={{
          display: "block",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: "40px",
          py: "40px",
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
                  pb: "10px",
                }}
                variant="h5"
                fontWeight={"500"}
              >
                Walk4Money
              </Typography>
            </Link>
            <Link
              sx={{
                alignSelf: "center",
                color: theme.palette.primary.dark,
              }}
              href={"https://walk4money.app"}
            >
              <Launch />
            </Link>
          </Stack>
          <VerticalLinearStepper></VerticalLinearStepper>
        </Box>
      </Paper>
    </Box>
  );
};

export default Work;
