import SwipeDrawer from "../SwipeDrawer";
import Notes from "./Notes";
import DeleteNotes from "../Delete/DeleteNotes";
import DataProvider from "../../context/DataContext";
import { Box } from "@mui/material";
export default function NotesContainer() {
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
        <SwipeDrawer />
        <Notes />
        {/* <DeleteNotes /> */}
      </Box>
    </>
  );
}
