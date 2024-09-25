import React, { useContext, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuid } from "uuid";
import Grid from "@mui/material/Grid2";
import { getAllNotes } from "../../services/NoteServices";
import Form from "../Form";
import Note from "./Note";
import { DataContext } from "../../context/DataContext";

//////////////////////////////////////////////////////
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
export default function Notes() {
  const { setNotes, notes, addNote, toggle } = useContext(DataContext);

  async function getData() {
    let res = await getAllNotes();
    console.log(res);
    const note = res.filter(
      (curr) => curr.trash === false && curr.archive === false
    );

    setNotes([...note]);
    // console.log(res);
  }

  useEffect(() => {
    getData();
  }, [addNote]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%", // border: "2px solid black",
      }}
    >
      <Box sx={{ width: "100%", p: 3 }}>
        <DrawerHeader />
        <Form />
        {toggle ? (
          <Stack
            spacing={{ xs: 5, sm: 0 }}
            direction="column"
            alignItems="center"
            justifyContent="center"
            useFlexGap
            sx={{ marginTop: "10px" }}
          >
            {notes.map((notes) => (
              <Note key={notes._id} note={notes} />
            ))}
          </Stack>
        ) : (
          <Grid container marginTop="16px">
            {notes.map((notes) => (
              <Grid item="true" marginBottom="10px" key={uuid().toString()}>
                <Note key={notes.id} note={notes} />
              </Grid>
            ))}
          </Grid>
        )}

        {/* <Grid container marginTop="16px">
          {notes.map((notes) => (
            <Grid item="true" marginBottom="10px" key={uuid().toString()}>
              <Note key={notes.id} note={notes} />
            </Grid>
          ))}
        </Grid> */}

        {/* <Stack
          spacing={{ xs: 5, sm: 0 }}
          direction="column"
          alignItems="center"
          justifyContent="center"
          useFlexGap
          sx={{ marginTop: "10px" }}
        >
          {notes.map((notes) => (
            <Note key={notes._id} note={notes} />
          ))}
        </Stack> */}

        {/* <Note /> */}
      </Box>
    </Box>
  );
}
