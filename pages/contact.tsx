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
          background: theme.palette.primary.light,
        }}
      >
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.dark,
          }}
          variant="h3"
          fontWeight={"600"}
        >
          Contacts
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
            overflow: "auto",
          }}
        >
          <Stack
            alignItems="center"
            flexWrap={"wrap"}
            direction={"row"}
            textAlign={"left"}
            display="flex"
            mt={3}
            sx={{
              "&:hover > *": {
                color: theme.palette.primary.contrastText,
                cursor: "pointer",
              },
            }}
          >
            <Link href={"https://www.linkedin.com/in/afonso-jorge-a27708240/"}>
              <LinkedIn
                sx={{
                  color: theme.palette.primary.dark,
                  mr: 1,
                }}
              />
            </Link>
            <Link href={"https://www.linkedin.com/in/afonso-jorge-a27708240/"}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.dark,
                }}
                variant="body1"
                fontWeight={"600"}
              >
                LinkedIn
              </Typography>
            </Link>
          </Stack>
          <Stack
            justifyContent={"flex-around"}
            alignItems="center"
            flexWrap={"wrap"}
            direction={"row"}
            textAlign={"left"}
            display="flex"
            mt={1}
            sx={{
              "&:hover > *": {
                color: theme.palette.primary.contrastText,
                cursor: "pointer",
              },
            }}
          >
            <Link href={"https://github.com/afonsojorge15"}>
              <GitHub
                sx={{
                  alignSelf: "bottom",
                  color: theme.palette.primary.dark,
                  mr: 1,
                }}
              />
            </Link>
            <Link href={"https://github.com/afonsojorge15"}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.dark,
                }}
                variant="body1"
                fontWeight={"600"}
              >
                GitHub
              </Typography>
            </Link>
          </Stack>
          <Stack
            justifyContent={"flex-around"}
            alignItems="center"
            direction={"row"}
            textAlign={"left"}
            display="flex"
            mt={1}
            sx={{
              "&:hover > *": {
                color: theme.palette.primary.contrastText,
                cursor: "pointer",
              },
            }}
          >
            <Link href={""}>
              <Email
                sx={{
                  alignSelf: "bottom",
                  color: theme.palette.primary.dark,
                  mr: 1,
                }}
                onClick={() => copyEmail("afonso.matos.jorge@gmail.com")}
              />
            </Link>
            <Link href={""}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.dark,
                  pb: "0px",
                }}
                onClick={() => copyEmail("afonso.matos.jorge@gmail.com")}
                variant="body1"
                fontWeight={"600"}
              >
                afonso.matos.jorge@gmail.com
              </Typography>
            </Link>
          </Stack>
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
              color: (theme) => theme.palette.primary.dark,
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
