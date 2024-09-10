import React from "react";
import SwipeDrawer from "./SwipeDrawer";
import Notes from "./Notes";
import DataProvider from "../context/DataContext";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <>
      <Box
        sx={{
          // border: "10px solid blue",
          display: "flex",

          justifyContent: "center",
        }}
      >
        <DataProvider>
          <SwipeDrawer />
          <Notes />
        </DataProvider>
      </Box>
    </>
  );
}
