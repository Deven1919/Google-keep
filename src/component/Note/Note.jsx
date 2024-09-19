import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  styled,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import { DataContext } from "../../context/DataContext";

const StyleCard = styled(Card)`
  width: 260px;
  margin: 8px;
  //   height: 100%;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export default function Note({ note }) {
  const { notes, setNotes, setDeleteNotes, setArchiveNotes } =
    useContext(DataContext);
  const ArchiveNote = (note) => {
    const updatedNotes = notes.filter((curr) => curr.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((pre) => [note, ...pre]);
  };

  const deleteNote = (note) => {
    const updatedNotes = notes.filter((curr) => curr.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes((pre) => [note, ...pre]);
  };

  return (
    <>
      {notes.length > 0 && (
        <StyleCard>
          <CardContent>
            <Typography variant="h6">{note.heading}</Typography>
            <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
              {note.text}
            </Typography>
          </CardContent>
          <CardActions>
            <ArchiveOutlinedIcon
              style={{ fontSize: "1.3rem", marginLeft: "auto" }}
              onClick={() => ArchiveNote(note)}
            />
            <DeleteIcon
              style={{ fontSize: "1.3rem" }}
              onClick={() => deleteNote(note)}
            />
          </CardActions>
        </StyleCard>
      )}
    </>
  );
}
