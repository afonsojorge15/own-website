export type StepperData = {
  label: string;
  subtitle: string;
  description: string;
  small?: boolean;
};

export type AccordionData = {
  title: string;
  ref: string;
  data: StepperData[];
  index: string;
};

const walk4MoneySteps: Array<StepperData> = [
  {
    label: "Internship - Junior Software developer",
    subtitle: "July 2019 - September 2019",
    description: `As an interning junior programmer, I was tasked with the production of a prototype application, based on the company's business model, to assess its feasibility.  
      I developed a serverless React native app, using javascript, with an intense focus on usability and designing the application's overall flow.`,
    small: false,
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
    small: true,
  },
  {
    label: "Website",
    subtitle: "",
    description: `A static, responsive and interactive React website that showcases the different value propositions and business models of the company. It's built with NextJS using Typescript and utilizes Material-UI for increased composability in its components.`,
    small: true,
  },
  {
    label: "Pitch deck",
    subtitle: "",
    description: `Upon deployment of both the MVP and web app, I undertook most of the research associated with market size and validation, direct competitors and future projections, which later led to the creation of several pitch decks based on these analyses.`,
    small: true,
  },
];

const quizzesTutorSteps: Array<StepperData> = [
  {
    label: "Backend - Service implementation, Service and Web Service testing",
    subtitle: "",
    description: `Developed new features for the web app, specifically the ability to create exams with custom-type questions and answers.
    Java and XML used to implement the features in the backend. JMeter and Groovy were used in Service and Web Service testing.`,
    small: true,
  },
  {
    label: "Frontend - UI and End-to-End testing",
    subtitle: "",
    description: `Improved and implemented the interface for setting up exams with custom-type questions and answers, using VueJS. JMeter and Cypress used in UI and End-to-End testing`,
    small: true,
  },
];

const dataBaseSteps: Array<StepperData> = [
  {
    label: "Creation and deployment of database and respective UI",
    subtitle: "",
    description: `SQL Database built with PL/pgSQL. From modelling an entity-relationship model to the complete design and implementation of the database and its schemas.
    Deployment of a basic web app, developed with Flask and HTML, that allowed the user to interact with the medical application.`,
    small: true,
  },
];

const distributedSystemsSteps: Array<StepperData> = [
  {
    label: "Architecture design, development and integration testing",
    subtitle: "",
    description: `A server-side application built with gRPC services using Java. It's a non-persistent bicycle renting platform with a rudimentary client-side app.
    System architecture design with a heavy emphasis on fault tolerance and concurrency. Testing was done with Java and utilised ZK-Naming (Apache ZooKeeper Java library) for the name registry.`,
    small: true,
  },
];

export const WorkData: Array<AccordionData> = [
  {
    title: "Walk4Money",
    ref: "https://walk4money.app",
    data: walk4MoneySteps,
    index: "1",
  },
  {
    title: "QuizzesTutor",
    ref: "https://quizzes-tutor.tecnico.ulisboa.pt",
    data: quizzesTutorSteps,
    index: "2",
  },
  {
    title: "PostgreSQL-DB",
    ref: "https://github.com/afonsojorge15/Postgres-Database",
    data: dataBaseSteps,
    index: "3",
  },
  {
    title: "Distributed Systems",
    ref: "https://github.com/afonsojorge15/DistributedSystems",
    data: distributedSystemsSteps,
    index: "4",
  },
];
