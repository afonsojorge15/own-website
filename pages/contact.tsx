import { Email, GitHub, LinkedIn, PublicRounded } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import Router, { useRouter } from "next/router";

import {
  Box,
  Chip,
  Container,
  ListItem,
  Paper,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { NextPage } from "next";
import ShortcutRoundedIcon from "@mui/icons-material/ShortcutRounded";
import Link from "next/link";

import Calendly from "../components/Calendly";
import CustomLink from "../components/CustomLink";
import { ContactCustomLinkList } from "../src/data/contactData";

const ContactLink = styled("a")(({ theme }) => ({
  textDecoration: "underline",
  cursor: "pointer",
  fontStyle: "italic",
  "&:hover": {
    color: theme.palette.primary.contrastText,
  },
}));

const Home: NextPage = () => {
  let theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const copyEmail = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert("Text copied");
  };

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
    >
      <Paper
        elevation={2}
        sx={{
          display: "block",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: "30px",
          py: "30px",
          mb: "70px",
          minWidth: "245px",
          background: theme.palette.primary.light,
        }}
      >
        <Typography
          sx={{
            color: theme.palette.primary.dark,
          }}
          variant="h3"
          fontWeight={"600"}
        >
          Contacts
        </Typography>
        <Box
          display="flex"
          flexWrap={"wrap"}
          mt={"0.7rem"}
          alignItems={"center"}
        >
          <Box
            sx={{
              display: "block",
              alignItems: "center",
              overflow: "auto",
              flexWrap: "wrap",
            }}
            textAlign={"left"}
            mb={isSmall ? "1rem" : 0}
            mr={"1rem"}
          >
            {ContactCustomLinkList.map((item) => (
              <Box
                display={"flex"}
                mt="5px"
                key={item.title}
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.contrastText,
                  },
                }}
              >
                <CustomLink
                  title={item.title}
                  reference={item.reference}
                  icon={item.icon}
                />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              rowGap: "1rem",
              flexDirection: "column",
              flex: 1,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: (theme) => theme.palette.text.primary,
              }}
              variant="body1"
              fontWeight={400}
            >
              Or schedule a meeting:
            </Typography>
            <Chip
              variant="outlined"
              icon={<DoneIcon />}
              label={"Book a time"}
              clickable={true}
              onClick={() =>
                Router.push("https://calendly.com/afonso-matos-jorge")
              }
            />
          </Box>
        </Box>
      </Paper>

      <Paper
        elevation={2}
        sx={{
          display: "block",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: "30px",
          py: "30px",
          background: theme.palette.primary.light,
        }}
      >
        <Box
          sx={{
            display: "inline",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: theme.palette.primary.dark,
            }}
            variant="body1"
            fontWeight={"400"}
          >
            <ShortcutRoundedIcon sx={{ mb: "-6px" }}></ShortcutRoundedIcon> If
            you have any suggestions or you come across any bugs, please email
            me or submit an issue on the{" "}
            <Link href="https://github.com/afonsojorge15/own-website/issues">
              <ContactLink href="https://github.com/afonsojorge15/own-website/issues">
                repository.
              </ContactLink>
            </Link>{" "}
            My goal with this website is to create a simple, modern-looking and
            easily modifiable personal website for anyone interested. (After a
            lot of refactoring).
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;
