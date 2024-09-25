import React, { useContext } from "react";
import { archive, trashNote } from "../../services/NoteServices";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  styled,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
// import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import { DataContext } from "../../context/DataContext";
const StyleCard = styled(Card)`
  width: 500px;
  margin: 8px;
  //   height: 100%;
  box-shadow: none;
  border: 2px solid orange;
  border-radius: 8px;
`;

export default function Archive({ notes }) {
  const { archiveNotes, setArchiveNotes } = useContext(DataContext);

  const deleteItem = async (note) => {
    const trash = await trashNote(note._id);
    console.log(trash);
    const updatedNotes = archiveNotes.filter((curr) => curr._id !== note._id);
    setArchiveNotes([...updatedNotes]);
    // setDeleteNotes((pre) => [note, ...pre]);
  };
  const restoreItem = async (note) => {
    const restore = await archive(note._id);
    console.log(restore);
    const updatedNotes = archiveNotes.filter((curr) => curr._id !== note._id);

    setArchiveNotes([...updatedNotes]);
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
            style={{ fontSize: "1.5rem", marginLeft: "420px" }}
            onClick={() => restoreItem(notes)}
          />
          <DeleteIcon
            style={{ fontSize: "1.5rem", marginLeft: "auto" }}
            onClick={() => deleteItem(notes)}
          />
        </CardActions>
      </StyleCard>
    </>
  );
}
