import {
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Router, { useRouter } from "next/router";
import React, { FC } from "react";
import Link from "next/link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export type LinkableItem = {
  href: string;
  title: string;
  left?: boolean;
};

const navBarItemList: LinkableItem[] = [
  { href: "/work", title: "Work", left: true },
  //  { href: "/photography", title: "Photography" },
  //  { href: "/films", title: "Films" },
  { href: "/contact", title: "Contact" },
];

const NavBarItemContainer: FC<LinkableItem & { isActive: boolean }> = ({
  href,
  title,
  isActive,
  left,
}) => {
  const theme = useTheme();

  return (
    <Box
      mx={0}
      sx={{
        "&:hover > *": {
          color: theme.palette.primary.contrastText,
        },
      }}
    >
      <Typography
        onClick={() => Router.push(href)}
        variant="body1"
        sx={{
          cursor: "pointer",
          fontWeight: isActive ? 800 : 400,
          letterSpacing: "0.020rem",
          px: "2rem",
          borderLeftColor: "hsl(0, 0%, 74.11764705882354%, 0.4)",
          borderLeftStyle: "solid",
          ...(left && {
            borderLeftStyle: "none",
          }),
          borderLeftWidth: "0.5px",
          color: theme.palette.text.primary,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
const MobileMenu: React.FC<{ path: string }> = ({ path }) => {
  const theme = useTheme();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {" "}
      <IconButton
        onClick={handleOpenUserMenu}
        size="large"
        edge="end"
        color="inherit"
      >
        <MenuRoundedIcon />
      </IconButton>
      <Menu
        sx={{ mt: "25px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        elevation={4}
        onClose={handleCloseUserMenu}
      >
        {navBarItemList.map((item) => (
          <MenuItem
            key={item.title}
            onClick={() => {
              setAnchorElUser(null);
              Router.push(item.href);
            }}
            sx={{
              "&:hover > *": {
                color: theme.palette.primary.contrastText,
              },
            }}
          >
            <Typography
              color={theme.palette.text.primary}
              textAlign="center"
              variant="body1"
              fontWeight={path === item.href ? 800 : 400}
              letterSpacing="0.025em"
            >
              <Link href={item.href}>{item.title}</Link>
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const NavBar: React.FC = () => {
  const theme = useTheme();
  const { pathname } = useRouter();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        borderBottomStyle: "solid",
        borderBottomWidth: "0.5px",
        borderBottomColor: "hsl(0, 0%, 74.11764705882354%, 0.4)",
        width: "100%",
        height: 50,
        background: theme.palette.primary.light,
        overflow: "hidden",
        borderRadius: 0,
        zIndex: 1,
        px: isSmall ? 3 : 3,
      }}
    >
      <Box
        display="flex"
        height="inherit"
        minWidth="6rem"
        alignItems="center"
        sx={{
          "&:hover > *": {
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        <Typography
          sx={{
            cursor: "pointer",
            fontWeight: pathname === "/" ? 800 : 400,
            letterSpacing: "0.025rem",
          }}
          variant="body1"
          onClick={() => {
            Router.push("/");
          }}
        >
          Afonso Jorge
        </Typography>
      </Box>
      {isSmall ? (
        <Box
          display="flex"
          flex="1"
          height="inherit"
          alignItems="center"
          justifyContent="end"
        >
          <MobileMenu path={pathname}></MobileMenu>
        </Box>
      ) : (
        <>
          <Box
            display="flex"
            flex="1"
            height="inherit"
            alignItems="center"
            sx={{
              ml: "2rem",
              borderLeftColor: "hsl(0, 0%, 74.11764705882354%, 0.4)",
              borderLeftStyle: "solid",
              borderLeftWidth: "0.5px",
            }}
          >
            {navBarItemList.map((item) => (
              <NavBarItemContainer
                key={item.title}
                isActive={pathname === item.href}
                {...item}
              />
            ))}
          </Box>
          <Box
            display="flex"
            height="inherit"
            minWidth="6rem"
            alignItems="center"
            sx={{
              "&:hover > *": {
                color: theme.palette.primary.contrastText,
              },
            }}
          ></Box>
        </>
      )}
    </Box>
  );
};

export default NavBar;
