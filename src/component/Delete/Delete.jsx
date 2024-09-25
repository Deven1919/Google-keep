import React, { useContext } from "react";
import { deleteNotesById } from "../../services/NoteServices";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  styled,
} from "@mui/material";
import { trashNote } from "../../services/NoteServices";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { DataContext } from "../../context/DataContext";

const StyleCard = styled(Card)`
  width: 500px;
  margin: 8px;
  //   height: 100%;
  box-shadow: none;
  border: 2px solid orange;
  border-radius: 8px;
`;

export default function Delete({ notes }) {
  const { deleteNotes, setArchiveNotes, setNotes, setDeleteNotes } =
    useContext(DataContext);
  const unarchive = async (note) => {
    await trashNote(note._id);

    const notes = deleteNotes.filter((curr) => curr._id !== note._id);
    console.log(...notes);
    setDeleteNotes([...notes]);
  };
  const removeItem = async (note) => {
    await deleteNotesById(note._id);
    const item = deleteNotes.filter((curr) => curr._id !== note._id);
    setDeleteNotes([...item]);
  };
  return (
    <>
      <StyleCard style={{ backgroundColor: notes.color }}>
        <CardContent>
          <Typography variant="h6">{notes?.heading}</Typography>

          <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
            {notes?.text}
          </Typography>
        </CardContent>

        <CardActions>
          <RestoreFromTrashIcon
            style={{ fontSize: "1.5rem", marginLeft: "430px" }}
            onClick={() => unarchive(notes)}
          />
          <DeleteIcon
            style={{ fontSize: "1.5rem", marginLeft: "auto" }}
            onClick={() => removeItem(notes)}
          />
        </CardActions>
      </StyleCard>
    </>
  );
}
