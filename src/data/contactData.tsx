import { EmailRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { CustomLinkData } from "../../components/CustomLink";

export const ContactCustomLinkList: CustomLinkData[] = [
  {
    title: "LinkedIn",
    reference: "https://www.linkedin.com/in/afonso-jorge-a27708240/",
    icon: LinkedIn,
    left: true,
  },
  {
    title: "GitHub",
    reference: "https://github.com/afonsojorge15",
    icon: GitHub,
    left: true,
  },
  {
    title: "afonso.matos.jorge@gmail.com",
    reference: "afonso.matos.jorge@gmail.com",
    icon: EmailRounded,
    left: true,
  },
];
