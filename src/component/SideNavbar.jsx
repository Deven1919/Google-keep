import React from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
const Text = styled(ListItemText)`
  font-size: 1.2rem;
  font-weight: 400;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
`;
export default function SideNavbar() {
  const notesList = [
    { id: 1, icon: <LightbulbOutlinedIcon />, text: "Notes" },
    { id: 2, icon: <NotificationsNoneOutlinedIcon />, text: "Remainder" },
    { id: 3, icon: <ModeEditOutlineOutlinedIcon />, text: "Edit labels" },
    { id: 4, icon: <ArchiveOutlinedIcon />, text: "Archive" },
    { id: 5, icon: <DeleteOutlineOutlinedIcon />, text: "Trash" },
  ];

  return (
    <>
      <List style={{ paddingTop: "15px" }}>
        {notesList.map((list) => (
          <ListItem key={list.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: -2.5,
                },

                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  {
                    background: "#FEEFC3",
                    padding: "10px",
                    borderRadius: "50%",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {list.icon}
              </ListItemIcon>
              <Text
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                  {
                    background: "#FEEFC3",
                    padding: "10px",
                    borderRadius: "50px",
                  },
                ]}
                primary={list.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
