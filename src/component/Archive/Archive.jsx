import React, { useContext } from "react";
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
  const { archiveNotes, setArchiveNotes, setNotes, setDeleteNotes } =
    useContext(DataContext);
  console.log(archiveNotes);
  console.log(notes);

  const deleteItem = (note) => {
    const updatedNotes = archiveNotes.filter((curr) => curr.id !== note.id);
    setArchiveNotes(updatedNotes);
    setDeleteNotes((pre) => [note, ...pre]);
  };
  const restoreItem = (note) => {
    const updatedNotes = archiveNotes.filter((curr) => curr.id !== note.id);
    setArchiveNotes(updatedNotes);
    setNotes((pre) => [...pre, note]);
  };
  return (
    <>
      <StyleCard>
        <CardContent>
          <Typography variant="h6">{notes?.heading}</Typography>

          <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
            {notes?.text}
          </Typography>
          {/* <Typography variant="h6">fadfasfasf</Typography>

          <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
            fasdfsafasfafas
          </Typography> */}
        </CardContent>
        {/* ///////////////////////////////// */}

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
