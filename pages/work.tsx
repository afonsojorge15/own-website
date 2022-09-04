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

const Work: NextPage = () => {
  let theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ maxWidth: "1100px", width: "100%", mx: "auto" }}>
      <Box
        display={"block"}
        width="100%"
        px={"30px"}
        py={"50px"}
        minHeight={"100vh"}
      >
        <Paper
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mt: "50px",
            py: "50px",
            px: "50px",
            width: "100%",
          }}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              sx={{
                color: (theme) => theme.palette.primary.dark,
              }}
              variant="h6"
              fontWeight={"600"}
            >
              Walk4Money:
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Work;
