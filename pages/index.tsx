import { PublicRounded } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import Router, { useRouter } from "next/router";

import {
  Box,
  Chip,
  Container,
  ListItem,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  styled,
} from "@mui/material";
import type { NextPage } from "next";
import { LinkableItem } from "../components/NavBar";
import React, { FC } from "react";
import Link from "next/link";

type ChipItem = {
  title: string;
};

const navBarItemList: LinkableItem[] = [{ href: "/contact", title: "Contact" }];

const ChipItemList: ChipItem[] = [
  { title: "Nodejs" },
  { title: "Nextjs" },
  { title: "Typescript" },
  { title: "React Native" },
  { title: "SQL" },
];

const ContactLink = styled("a")`
  text-decoration: underline;
  cursor: pointer;
  font-style: italic;
`;

const ColorlibStepIconRoot = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: "10rem",
  height: "10rem",
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
}));

const Home: NextPage = ({}) => {
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
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          mb: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flex: 1,
            height: "inherit",
            flexDirection: "row",
            justifyContent: "center",
            mb: 2,
          }}
          alignItems={isSmall ? "center" : "left"}
        >
          {" "}
          <ColorlibStepIconRoot />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          alignItems={isSmall ? "center" : "left"}
        >
          <Typography
            sx={{
              color: (theme) => theme.palette.primary.dark,
              textAlign: "left",
            }}
            variant="h6"
          >
            Hi, I&apos;m
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.primary.dark,
            }}
            variant="h2"
            fontWeight={"600"}
          >
            Afonso Jorge
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.primary.dark,
            }}
            variant="h6"
          >
            Software engineer and developer
          </Typography>
          <Stack
            justifyContent={isSmall ? "center" : "left"}
            alignItems="left"
            flexWrap="wrap"
            direction="row"
            alignContent="left"
            display="flex"
            mt={3}
          >
            {ChipItemList.map((item, key) => (
              <Box key={key} pb={3} pr={2}>
                <Chip key={key} icon={<DoneIcon />} label={item.title} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

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
          mb: "50px",
          background: theme.palette.primary.light,
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
              textAlign: "left",
              mb: 2,
            }}
            variant="h6"
            fontWeight={"500"}
          >
            About this website:
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.primary.dark,
            }}
            variant="body1"
            fontWeight={"400"}
          >
            A modern, responsive, statically-generated react application built
            with NextJS using typescript. Soon to implement GraphQL, Apollo and
            a REST API, as well as Github actions.
          </Typography>
        </Box>
      </Paper>
      <Paper
        sx={{
          display: "block",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: "30px",
          py: "30px",
          background: theme.palette.primary.light,
          boxShadow: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
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
            *Currently not based in London but I&apos;m looking to change that.
            If you&apos;re currently hiring Full-stack / Front-end developers,
            fell free to{" "}
            <Link href="/contact">
              <ContactLink>contact me</ContactLink>
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;
