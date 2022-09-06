import { Launch, PublicRounded } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
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
          <Stack
            alignItems="center"
            flexWrap={"wrap"}
            direction={"row"}
            textAlign={"left"}
            display="flex"
            mt={1}
          >
            <Link href={"https://walk4money.app"}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.dark,
                  mr: 1,
                  pb: "6px",
                }}
                variant="h5"
                fontWeight={"600"}
              >
                Walk4Money
              </Typography>
            </Link>
            <Link href={"https://walk4money.app"}>
              <Launch
                sx={{
                  alignSelf: "bottom",
                  color: theme.palette.primary.dark,
                }}
              />
            </Link>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default Work;
