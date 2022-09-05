import { PublicRounded } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
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
      minHeight={"100vh"}
      sx={{ background: theme.palette.primary.main }}
    >
      <Box
        display={"flex"}
        px={"30px"}
        py={"50px"}
        flexDirection="column"
        justifyContent="center"
        alignItems={"center"}
        sx={{ background: theme.palette.primary.light }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: (theme) => theme.palette.primary.dark,
              textAlign: "left",
            }}
            variant="h4"
            fontWeight={"600"}
          >
            Hi, I&apos;m
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.primary.dark,
            }}
            variant="h1"
            fontWeight={"600"}
          >
            Afonso Jorge
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.primary.dark,
            }}
            variant="h6"
            fontWeight={"600"}
          >
            Software engineer and developer
          </Typography>
          <Stack
            justifyContent={"left"}
            alignItems="left"
            flexWrap={"wrap"}
            direction={"row"}
            textAlign={"left"}
            display="flex"
            mt={3}
          >
            {ChipItemList.map((item, key) => (
              <Box key={key} pb={3} pr={2}>
                <Chip key={key} icon={<DoneIcon />} label={item.title} />
              </Box>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
