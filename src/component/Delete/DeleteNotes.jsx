import React, { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";
import Delete from "./Delete";
// import { DataContext } from "../../context/DataContext";
import { DataContext } from "../../context/DataContext";
import SwipeDrawer from "../SwipeDrawer";
import Note from "./Note";
//////////////////////////////////////////////////////
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
export default function DeleteNotes() {
  const { deleteNotes } = useContext(DataContext);
  console.log(deleteNotes);

  return (
    <>
      <SwipeDrawer />
      <Box
        sx={{
          // display: "flex",
          // border: "5px solid black",
          width: "100%",
          justifyContent: "center",
          marginTop: "80px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "80%",
            // p: 3,

            // border: "2px solid red",
          }}
        >
          {/* <DrawerHeader /> */}

          <Note />

          {deleteNotes.map((deletenote) => (
            <Delete notes={deletenote} key={deleteNotes.id} />
          ))}
          {/* <Delete /> */}
        </Box>
      </Box>
    </>
  );
}
