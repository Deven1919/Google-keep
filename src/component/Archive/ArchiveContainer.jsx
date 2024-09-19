import SwipeDrawer from "../SwipeDrawer";
import ArchiveNotes from "./ArchiveNotes";
import { Box } from "@mui/material";

export default function ArchiveContainer() {
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

        <ArchiveNotes />
      </Box>
    </>
  );
}
