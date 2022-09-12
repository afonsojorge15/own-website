import { Email, GitHub, LinkedIn, PublicRounded } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import Router, { useRouter } from "next/router";

import {
  Box,
  Chip,
  Container,
  Link,
  ListItem,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { NextPage } from "next";

type ChipItem = {
  title: string;
};

const ChipItemList: ChipItem[] = [
  { title: "Nodejs" },
  { title: "Nextjs" },
  { title: "Typescript" },
  { title: "React Native" },
  { title: "SQL" },
];

const Home: NextPage = () => {
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
          <Typography
            sx={{
              color: (theme) => theme.palette.primary.dark,
            }}
            variant="h3"
            fontWeight={"600"}
          >
            Contacts
          </Typography>
          <Stack
            alignItems="center"
            flexWrap={"wrap"}
            direction={"row"}
            textAlign={"left"}
            display="flex"
            mt={3}
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
                  pb: "5px",
                }}
                variant="h6"
                fontWeight={"500"}
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
                  pb: "5px",
                }}
                variant="h6"
                fontWeight={"500"}
              >
                GitHub
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
          >
            <Link href={"https://github.com/afonsojorge15"}>
              <Email
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
                  pb: "5px",
                }}
                variant="h6"
                fontWeight={"500"}
              >
                afonso.matos.jorge@gmail.com
              </Typography>
            </Link>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;
