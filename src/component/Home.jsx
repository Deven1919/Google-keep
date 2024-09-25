import SwipeDrawer from "./SwipeDrawer";
import Notes from "./Note/Notes";
import { Box } from "@mui/material";


export default function Home() {
  return (
    <>
      <Box
        sx={{
          // border: "5px solid blue",
          display: "flex",
          // flexDirection: "column",
          // // marginTop: "100px",
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
