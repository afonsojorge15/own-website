import {
  CodeOffRounded,
  CodeRounded,
  PublicRounded,
} from "@mui/icons-material";
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
} from "@mui/material";
import type { NextPage } from "next";
import React, { FC } from "react";

const Photography: NextPage = ({}) => {
  let theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      width="100%"
      height="80vh"
      display="flex"
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
          display: "block",
          width: "auto",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: "50px",
          py: "50px",
          mb: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Box fontSize="10em" height="1em">
            <CodeRounded fontSize={"inherit"}></CodeRounded>
          </Box>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.primary,
            }}
            variant="h6"
            fontWeight={"300"}
          >
            Unfortunately, this website feature
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.primary,
            }}
            variant="h6"
            fontWeight={"300"}
          >
            is still under development.
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.primary,
            }}
            variant="h6"
            fontWeight={"300"}
          >
            Checkout the repo for further details.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Photography;
