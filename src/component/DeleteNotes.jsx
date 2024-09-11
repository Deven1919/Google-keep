import React, { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";
import { v4 as uuid } from "uuid";
import Grid from "@mui/material/Grid2";
import Delete from "./Delete";
import { DataContext } from "../context/DataContext";
//////////////////////////////////////////////////////
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
export default function DeleteNotes() {
  const { deleteNotes } = useContext(DataContext);

  return (
    <Box
      sx={{
        // border: "2px solid black",
        width: "100%",
        marginTop: "80px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          // p: 3,

          border: "2px solid red",
        }}
      >
        {/* <DrawerHeader /> */}
        <Box sx={{ p: 2 }}>
          <Typography>
            <em style={{ fontFamily: '"Roboto", arial, sans-serif' }}>
              Notes in Trash are deleted after 7 days.
            </em>
          </Typography>
        </Box>
        {deleteNotes.map((list) => (
          <Delete notes={list} key={uuid().toString()} />
        ))}
      </Box>
    </Box>
  );
}
