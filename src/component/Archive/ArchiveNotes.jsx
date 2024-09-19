import React, { useContext } from "react";
import { Box, styled } from "@mui/material";
import Archive from "./Archive";
import { DataContext } from "../../context/DataContext";
import SwipeDrawer from "../SwipeDrawer";
// import Note from "./Note";
//////////////////////////////////////////////////////
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
export default function ArchiveNotes() {
  const { archiveNotes } = useContext(DataContext);
  console.log(archiveNotes);

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
            <Archive notes={archivenotes} key={archiveNotes.id} />
          ))}
          {/* <Archive /> */}
        </Box>
      </Box>
    </>
  );
}
