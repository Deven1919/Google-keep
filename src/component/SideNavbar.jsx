import React, { useContext, useRef, useState } from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Text = styled(ListItemText)`
  font-size: 1.2rem;
  font-weight: 400;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
`;

const notesList = [
  {
    id: 1,
    icon: <LightbulbOutlinedIcon />,
    text: "Notes",
    route: "/notes",
  },
  { id: 2, icon: <NotificationsNoneOutlinedIcon />, text: "Remainder" },
  { id: 3, icon: <ModeEditOutlineOutlinedIcon />, text: "Edit labels" },
  {
    id: 4,
    icon: <ArchiveOutlinedIcon />,
    text: "Archive",
    route: "/archive",
  },
  {
    id: 5,
    icon: <DeleteOutlineOutlinedIcon />,
    text: "Trash",
    route: "/trash",
  },
];

export default function SideNavbar({ open, handleDrawer }) {
  const { show, setShow } = useContext(DataContext);
  // const [show, setShow] = useState(null);
  const inputRef = useRef();
  const icon = useRef();
  const [colorId, setColor] = useState(1);
  const colorChange = (text, id) => {
    if (typeof id === "number") {
      setColor(id);
    }
    setShow(text);
  };
  ////////////
  const removeHandler = () => {
    setShow(null);
  };
  const overHandler = (id, text) => {
    if (id === colorId) {
      if (typeof text === "string") {
        setShow(text);
      }
    }
  };
  return (
    <>
      <List
        ref={inputRef}
        onMouseLeave={removeHandler}
        // style={{ border: "2px solid black" }}
      >
        {notesList.map((list) => (
          <ListItem
            button="true"
            onClick={() => colorChange(list.text, list.id)}
            key={list.id}
            onMouseEnter={() => overHandler(list.id, list.text)}
            style={{
              backgroundColor: list.text === show ? "#FEEFC3" : "",
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",

              // padding: "15px",

              // border: "1px solid red",
            }}
            sx={{
              ":hover": {
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "50px",

                width: "100%",
                backgroundColor: list.id === colorId ? "#FEEFC3" : "",
              },
            }}
          >
            <NavLink
              replace={true}
              to={`${list.route}`}
              style={{
                textDecoration: "none",
                display: "flex",
                color: "inherit",
              }}
            >
              <ListItemIcon
                ref={icon}
                style={{
                  display: "flex",

                  backgroundColor: list.id === colorId ? "#FEEFC3" : "",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "45px",
                  minWidth: "45px",
                  borderRadius: "50px",
                  marginLeft: "-5px",
                }}
                onClick={() => colorChange(list.id)}
              >
                {list.icon}
              </ListItemIcon>
              <ListItemText
                primary={list.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                }}
              />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </>
  );
}
