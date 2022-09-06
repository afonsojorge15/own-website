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

export type LinkableItem = {
  href: string;
  title: string;
};

const navBarItemList: LinkableItem[] = [
  { href: "/", title: "Afonso Jorge" },
  { href: "/work", title: "Work" },
  { href: "/photography", title: "Photography" },
  { href: "/films", title: "Films" },
  { href: "/contact", title: "Contact" },
];

const NavBarItemContainer: FC<LinkableItem & { isActive: boolean }> = ({
  href,
  title,
  isActive,
}) => {
  return (
    <Box m={0} mx={1}>
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
      px={isSmall ? 1 : 3}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 50,
        background: theme.palette.primary.light,
        boxShadow: 1,
        zIndex: 1,
      }}
    >
      <Box display="flex">
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
