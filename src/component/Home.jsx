import React, { useContext } from "react";
import SwipeDrawer from "./SwipeDrawer";
import Notes from "./Notes";
import DataProvider from "../context/DataContext";
import DeleteNotes from "./DeleteNotes";
import { Box } from "@mui/material";
import { DataContext } from "../context/DataContext";
export default function Home() {
  const { deleteNotes, notes } = useContext(DataContext);
  console.log(notes);
  console.log(deleteNotes);
  return (
    <>
      <Box
        sx={{
          // border: "5px solid blue",
          display: "flex",
          // flexDirection: "column",
          // marginTop: "100px",
          justifyContent: "center",
        }}
      >
        <DataProvider>
          <SwipeDrawer />
          <Notes />
          {/* <DeleteNotes /> */}
        </DataProvider>
      </Box>
    </>
  );
}
