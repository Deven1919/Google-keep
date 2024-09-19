import SwipeDrawer from "../SwipeDrawer";
import DeleteNotes from "./DeleteNotes";
import { Box } from "@mui/material";

export default function DeleteContainer() {
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

        <DeleteNotes />
      </Box>
    </>
  );
}
