import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { deleteAllNotes } from "../../services/NoteServices";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
export default function Note() {
  const { setDeleteNotes } = useContext(DataContext);
  const emptyTrash = async () => {
    const updatedValue = await deleteAllNotes();

    setDeleteNotes([]);
  };
  return (
    <>
      <Box
        sx={{
          p: 2,
          // border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          fontFamily: '"Roboto", arial, sans-serif',
        }}
      >
        <Typography>
          <em style={{ fontFamily: '"Roboto", arial, sans-serif' }}>
            Notes in Trash are deleted after 7 days.
          </em>
        </Typography>
        <Button
          onClick={emptyTrash}
          variant="text"
          style={{
            textTransform: "capitalize",
            fontWeight: "550",
            fontSize: "1rem",

            marginLeft: "20px",
          }}
        >
          Empty Trash
        </Button>
      </Box>
    </>
  );
}
