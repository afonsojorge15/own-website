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
  Divider,
  keyframes,
  Hidden,
} from "@mui/material";
import type { NextPage } from "next";
import { LinkableItem } from "../components/NavBar";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import ProfilePic from "../public/profilePicture.jpg";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

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

const ContactLink = styled("a")`
  text-decoration: underline;
  cursor: pointer;
  font-style: italic;
`;

const ColorlibStepIconRoot = styled("div")(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  borderRadius: "50%",
  overflow: "hidden",
  borderColor: theme.palette.primary.contrastText,
  borderWidth: "1px",
  borderStyle: "solid",
  [theme.breakpoints.down("sm")]: {
    width: "10rem",
    height: "10rem",
  },
  [theme.breakpoints.only("sm")]: {
    width: "11rem",
    height: "11rem",
  },
  width: "12rem",
  height: "12rem",
}));

const Home: NextPage = ({}) => {
  let theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMid = useMediaQuery(theme.breakpoints.down("md"));

  const blink = keyframes`
  from {
    color: #000000;
  }
  50% {
    color: #9c52e6;
  }
  to {
    color: #000000;
  }
`;

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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: isMid ? "center" : "left",
          alignItems: "center",
          mb: isSmall ? "2em" : "4em",
          mt: isSmall ? "3em" : "3em",
          pt: "1rem",
          minWidth: "245px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flex: 0.65,
            height: "inherit",
            flexDirection: "row",
            justifyContent: "center",
            pr: isMid ? 0 : 3,
            mb: isMid ? 5 : 2,
          }}
          alignItems={isSmall ? "center" : "left"}
        >
          {" "}
          <ColorlibStepIconRoot>
            <Image layout="intrinsic" alt="picture" src={ProfilePic}></Image>
          </ColorlibStepIconRoot>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pl: isSmall ? 0 : "1rem",
            overflow: "auto",
          }}
          alignItems={isMid ? "center" : "left"}
          textAlign={isSmall ? "center" : "left"}
        >
          <Typography
            sx={{
              color: (theme) => theme.palette.text.primary,
              textAlign: "left",
            }}
            variant="h6"
            fontWeight={500}
          >
            Hi, I&apos;m
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.primary,
              /*fontSize: { sm: "3.5rem", md: "4.5rem" },
              [theme.breakpoints.only("sm")]: {
                fontSize: "4rem",
              },*/
            }}
            variant="h2"
            fontWeight={"600"}
          >
            Afonso Jorge
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"row"}
            flexWrap="wrap"
            mt={isSmall ? "0.5rem" : "0rem"}
            justifyContent={isMid ? "center" : "left"}
          >
            <Typography
              sx={{
                color: (theme) => theme.palette.text.primary,
              }}
              variant="h6"
              fontWeight={500}
            >
              Software&nbsp;
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.primary.contrastText,
              }}
              variant="h6"
              fontWeight={500}
            >
              engineer&nbsp;
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.text.primary,
              }}
              variant="h6"
              fontWeight={500}
            >
              and&nbsp;
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.primary.contrastText,
              }}
              variant="h6"
              fontWeight={500}
            >
              developer
            </Typography>
          </Box>

          <Stack
            justifyContent={isMid ? "center" : "left"}
            flexWrap="wrap"
            direction="row"
            display="flex"
            mt={3}
          >
            {ChipItemList.map((item, key) => (
              <Box key={key} pb={3} pr={isSmall ? 1 : 3} pl={isSmall ? 1 : 0}>
                <Chip
                  key={key}
                  variant="outlined"
                  icon={<DoneIcon />}
                  label={item.title}
                />
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
          py: "25px",
          mb: "50px",
          mt: "5em",

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
              color: (theme) => theme.palette.text.primary,
              textAlign: "left",
              mb: 1,
            }}
            variant="h6"
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
            A modern, responsive, statically-generated React application built
            with NextJS using Typescript. Reusable UI interface built with
            Material-UI. Soon to implement GraphQL, Apollo and a REST API.
          </Typography>
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
          borderStyle: "solid",
          borderColor: theme.palette.primary.contrastText,
          borderWidth: "0.5px",
          color: theme.palette.primary.contrastText,
          "&:hover": {
            transition: "0.3s",
            borderStyle: "none",
            color: theme.palette.primary.light,
            background: theme.palette.primary.contrastText,
            cursor: "pointer",
          },
        }}
        onClick={() => Router.push("/contact")}
      >
        <Box
          sx={{
            display: "inline",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            sx={
              {
                //animation: `${blink} 1s linear infinite`,
              }
            }
            variant="body1"
            fontWeight={"400"}
          >
            <ArrowCircleRightOutlinedIcon
              sx={{ mb: "-6px" }}
            ></ArrowCircleRightOutlinedIcon>
            {""} Currently not based in London but you can help me change that.
            If you&apos;re currently hiring Full-stack / Front-end developers,
            feel free to{" "}
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
