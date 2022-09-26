import { GitHub, LaunchRounded } from "@mui/icons-material";
import { CustomLinkData } from "../../components/CustomLink";

export type StepperData = {
  label: string;
  subtitle: string;
  description: string;
  small?: boolean;
  w4m?: boolean;
};

export type AccordionData = {
  link: CustomLinkData;
  data: StepperData[];
  index: string;
  subtitle: string;
};

const W4MCustomLinkProps: CustomLinkData = {
  title: "Walk4Money",
  reference: "https://walk4money.app",
  icon: LaunchRounded,
  left: false,
};

const QuizzesTutorCustomLinkProps: CustomLinkData = {
  title: "QuizzesTutor",
  reference: "https://github.com/afonsojorge15/QuizzesTutor",
  icon: GitHub,
  left: false,
};

const BicloinCustomLinkProps: CustomLinkData = {
  title: "Bicloin",
  reference: "https://github.com/afonsojorge15/DistributedSystems",
  icon: GitHub,
  left: false,
};

const DBCustomLinkProps: CustomLinkData = {
  title: "ODISSEIA",
  reference: "https://github.com/afonsojorge15/Postgres-Database",
  icon: GitHub,
  left: false,
};

const walk4MoneySteps: Array<StepperData> = [
  {
    label: "Internship - Junior Software developer",
    subtitle: "June 2019 - September 2019",
    description: `As an interning junior programmer, I was tasked with the production of a prototype application, based on the company's business model, to assess its feasibility.  
      I developed a serverless React native app, using javascript, with an intense focus on usability and designing the application's overall flow.`,
    small: false,
    w4m: true,
  },
  {
    label: "Full-time - Lead Software developer",
    subtitle: "Nov 2021 - Present",
    description: `After a year of interruption due to the pandemic, I joined as the lead software developer. 
      I have since been responsible for designing and developing an MVP mobile app and a web page to demonstrate the company's business model.
      In addition, I compiled most of the market research later used in the investment pitch decks, which I also structured and co-authored.`,
    small: false,
  },
  {
    label: "MVP app",
    subtitle: "",
    description: `The MVP consists of a full-stack mobile application built in React Native using Typescript, for iOS and Android. It's a step-tracking fitness app with high user-incentive and rich social features.
      UX is designed with accessibility and simplicity as core values, together with a colourful and intuitive UI. It utilizes NoSQL MongoDB Atlas for its database and Firebase for the backend and user authentication.   `,
    small: false,
  },
  {
    label: "Website",
    subtitle: "",
    description: `A static, responsive and interactive React website that showcases the different value propositions and business models of the company. It's built with NextJS using Typescript and utilizes Material-UI for increased composability in its components.`,
    small: false,
  },
  {
    label: "Pitch deck",
    subtitle: "",
    description: `Upon deployment of both the MVP and web app, I undertook most of the research associated with market size and validation, direct competitors and future projections, which later led to the creation of several pitch decks based on these analyses.`,
    small: false,
  },
];

const quizzesTutorSteps: Array<StepperData> = [
  {
    label: "Backend - Service implementation, Service and Web Service testing",
    subtitle: "",
    description: `TDD approach in the implementation of new features for a web app, specifically the ability to create exams with custom-type questions and answers.
    Java and XML used to implement the features in the backend. JMeter and Groovy were used in Service and Web Service testing.`,
    small: true,
  },
  {
    label: "Frontend - UI and End-to-End testing",
    subtitle: "",
    description: `Improved and implemented the interface for setting up exams with custom-type questions and answers, using VueJS. JMeter and Cypress used in Unit and End-to-End testing`,
    small: true,
  },
];

const dataBaseSteps: Array<StepperData> = [
  {
    label: "Database for clinical data and respective web app",
    subtitle: "",
    description: `A SQL Database, built with PL/pgSQL, that manages health data from different health providers. From modelling an entity-relationship model to the complete design and implementation of the database and its schemas.
    Deployment of a basic web app, developed with Flask and HTML, that allows the user to visualize the respective data and query the DB.`,
    small: true,
  },
];

const distributedSystemsSteps: Array<StepperData> = [
  {
    label: "Architecture design, development and integration testing",
    subtitle: "",
    description: `A server-side application built using Java with gRPC framework for API. It's a non-persistent bicycle renting platform with a rudimentary client-side app.
    System architecture design with a heavy emphasis on fault tolerance and concurrency. Testing was done with Java and utilised ZK-Naming (Apache ZooKeeper Java library) for the name registry.`,
    small: true,
  },
];

export const WorkData: Array<AccordionData> = [
  {
    link: W4MCustomLinkProps,
    data: walk4MoneySteps,
    index: "1",
    subtitle: "A Health FinTech start-up",
  },
];

export const ProjectData: Array<AccordionData> = [
  {
    link: QuizzesTutorCustomLinkProps,

    data: quizzesTutorSteps,
    index: "2",
    subtitle: "An online Exam and Test hosting platform",
  },
  {
    link: BicloinCustomLinkProps,

    data: distributedSystemsSteps,
    index: "3",
    subtitle: "Bicycle sharing and renting platform",
  },
  {
    link: DBCustomLinkProps,

    data: dataBaseSteps,
    index: "4",
    subtitle: "Clinical data collection, management and storage platform ",
  },
];
