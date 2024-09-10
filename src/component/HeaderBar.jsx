import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Controller from "./Controller";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px ",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  border: "0.1px solid #5f6368",

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const Header = styled(MuiAppBar)`
  z-index: 1201;
  // width: 360px;
  // border: 2px solid black;
  background: #fff;
  height: 70px;
  display: flex;
  justify-content: center;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#5f6368",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  background: "",
  color: "#5f6368",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "68ch",
    },
  },
}));
///// Heading
const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 22px;
  margin-left: 15px;
  margin-right: -40px;
  display: flex;
  align-items: center;
  // border: 2px solid orangered;
  font-family: "Product Sans", Arial, sans-serif;
`;
////////////////////////
const SearchBar = styled(Search)`
  display: flex;
  border: 2px solid blue;
  background: "tranparent";
  width: "100%";
  paddingtop: 20px;
  paddingbottom: 10px;
`;

export default function HeadeBar({ open, handleDrawer }) {
  const logo =
    "https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png";
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Header position="fixed" open={open}>
        <Toolbar>
          <Box
            sx={{
              // border: "2px solid blue",
              display: "flex",
              // paddingRight: "14px",
              // boxSizing: "border-box",
              // minWidth: "235px",
              // justifyContent: "center",
              // alignContent: "center",
            }}
          >
            <IconButton
              color="#5f6368"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              sx={{ marginRight: 2, marginLeft: "-8px" }}
            >
              <MenuIcon />
            </IconButton>

            <img src={logo} alt="logo" style={{ width: 28 }} />
            <Heading>Keep</Heading>
          </Box>
          <Box
            sx={{
              display: "flex",
              // border: "5px solid red",
              background: "tranparent",
              width: "100%",

              // justifyContent: "flex-end",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginLeft: "70px",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                style={{
                  color: "#5f6368",
                }}
              />
            </Search>
            <Controller />
            {/* <Box
              sx={{
                color: "#5f6368",
                border: "2px solid",
                display: "flex",
                // width: "150px",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <AppsOutlinedIcon style={{ marginRight: "15px" }} />
              <PermContactCalendarOutlinedIcon />
            </Box> */}
          </Box>
        </Toolbar>
      </Header>
    </div>
  );
}
