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
import { Unarchive } from "@mui/icons-material";
const StyleCard = styled(Card)`
  width: 500px;
  margin: 8px;
  //   height: 100%;
  box-shadow: none;
  border: 2px solid orange;
  border-radius: 8px;
`;

export default function Delete({ notes }) {
  const { deleteNotes, setArchiveNotes, setDeleteNotes } =
    useContext(DataContext);
  const unarchive = (note) => {
    const notes = deleteNotes.filter((curr) => curr.id !== note.id);
    setDeleteNotes(notes);
    setArchiveNotes((pre) => [note, ...pre]);
  };
  const removeItem = (note) => {
    const item = deleteNotes.filter((curr) => curr.id !== note.id);
    setDeleteNotes(item);
  };
  return (
    <>
      <StyleCard>
        <CardContent>
          <Typography variant="h6">{notes?.heading}</Typography>

          <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
            {notes?.text}
          </Typography>
        </CardContent>
        {/* ///////////////////////////////// */}

        <CardActions>
          <ArchiveOutlinedIcon
            style={{ fontSize: "1.3rem", marginLeft: "430px" }}
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
