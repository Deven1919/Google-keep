import React, { useContext, useEffect } from "react";
import { Box, styled, Typography } from "@mui/material";
import Delete from "./Delete";
import { getAllNotes } from "../../services/NoteServices";
import { DataContext } from "../../context/DataContext";
import SwipeDrawer from "../SwipeDrawer";
import Note from "./Note";
//////////////////////////////////////////////////////
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
export default function DeleteNotes() {
  const { deleteNotes, show, setDeleteNotes } = useContext(DataContext);
  console.log(deleteNotes);

  useEffect(() => {
    async function getDeleteNotes() {
      const notes = await getAllNotes();

      const updatedValue = notes.filter(
        (curr) => curr.trash === true && curr.archive === false
      );
      setDeleteNotes([...updatedValue]);
    }
    getDeleteNotes();
  }, []);

  console.log(show);

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
            // p: 3
          }}
        >
          {/* <DrawerHeader /> */}

          <Note />

          {deleteNotes?.map((deletenote) => (
            <Delete notes={deletenote} key={deletenote._id} />
          ))}
        </Box>
      </Box>
    </>
  );
}
