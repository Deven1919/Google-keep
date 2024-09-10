import React from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Box } from "@mui/material";
export default function Controller() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          // border: "2px solid blue",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          marginLeft: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            color: "#5f6368",
            // border: "2px solid black",

            alignItems: "center",
            justifyContent: "center",
            marginLeft: "35px",
          }}
        >
          {/* style={{ marginRight: "40px" }}
          style={{ marginRight: "40px" }} */}

          <RefreshOutlinedIcon style={{ marginRight: "30px" }} />
          <GridViewOutlinedIcon
            style={{ marginRight: "30px", fontSize: "1.5rem" }}
          />
          <SettingsOutlinedIcon />
        </Box>
        <Box
          sx={{
            color: "#5f6368",
            // border: "2px solid",
            display: "flex",
            width: "150px",
            justifyContent: "flex-end",
          }}
        >
          <AppsOutlinedIcon style={{ marginRight: "15px" }} />
          <PermContactCalendarOutlinedIcon />
        </Box>
      </Box>
    </>
  );
}
