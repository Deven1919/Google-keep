import React, { useContext, useEffect } from "react";
import { Box, styled } from "@mui/material";
import Archive from "./Archive";
import { DataContext } from "../../context/DataContext";
import SwipeDrawer from "../SwipeDrawer";
import { getAllNotes } from "../../services/NoteServices";
//////////////////////////////////////////////////////
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
export default function ArchiveNotes() {
  const { archiveNotes, setArchiveNotes } = useContext(DataContext);

  useEffect(() => {
    async function getArchiveNotes() {
      const notes = await getAllNotes();

      const updatedValue = notes.filter(
        (curr) => curr.trash === false && curr.archive === true
      );
      setArchiveNotes([...updatedValue]);
    }
    getArchiveNotes();
  }, []);

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

          {archiveNotes.map((archivenotes) => (
            <Archive notes={archivenotes} key={archivenotes._id} />
          ))}
          {/* <Archive /> */}
        </Box>
      </Box>
    </>
  );
}
