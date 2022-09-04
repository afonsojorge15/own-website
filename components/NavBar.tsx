import {
  Box,
  Grid,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Router, { useRouter } from "next/router";
import React, { FC } from "react";
import Link from "next/link";

type NavBarItem = {
  href: string;
  title: string;
};

const navBarItemList: NavBarItem[] = [
  { href: "/", title: "Afonso Jorge" },
  { href: "/work", title: "Work" },
  { href: "/photography", title: "Photography" },
  { href: "/films", title: "Films" },
  { href: "/contact", title: "Contact" },
];

const NavBarItemContainer: FC<NavBarItem & { isActive: boolean }> = ({
  href,
  title,
  isActive,
}) => {
  return (
    <Box m={1} pr={2}>
      <Typography
        onClick={() => Router.push(href)}
        sx={{
          cursor: "pointer",
          fontWeight: isActive ? 800 : 400,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

const NavBar: React.FC = () => {
  const theme = useTheme();
  const { pathname } = useRouter();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      px={isSmall ? "1" : "2"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        height: 50,
        background: theme.palette.secondary.main,
        boxShadow: 5,
        zIndex: 1,
      }}
    >
      <Box display="flex" pl={2}>
        {navBarItemList.map((item) => (
          <NavBarItemContainer
            key={item.title}
            isActive={pathname === item.href}
            {...item}
          />
        ))}
      </Box>
    </Box>
  );
};

export default NavBar;
/*
<Box px={2} width={"100%"} maxWidth="1100px">
        <Grid
          columnSpacing={5}
          container
          alignContent={"center"}
          alignItems={"center"}
        >
          <Grid xs item>
            <Typography
              lineHeight={1.5}
              onClick={() => Router.push("/")}
              fontWeight={500}
              sx={{
                cursor: "pointer",
              }}
              variant="h4"
            >
              dwdwdw
            </Typography>
          </Grid>
          <Grid
            sx={{
              minHeight: "48.56px",
              pt: { md: 0.7, lg: 0.7, xl: 0.7, xs: 0, sm: 0.5 },
            }}
            item
          ></Grid>
        </Grid>
      </Box>
*/
