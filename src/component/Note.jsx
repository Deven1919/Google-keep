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
import { DataContext } from "../context/DataContext";
const StyleCard = styled(Card)`
  width: 260px;
  margin: 8px;
  //   height: 100%;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export default function Note({ note }) {
  const { notes, setNotes } = useContext(DataContext);
  const { setDeleteNotes } = useContext(DataContext);
  const deleteItems = (id) => {
    const updatedValue = notes.filter((curr) => curr.id !== id);
    setNotes(updatedValue);
    setDeleteNotes((pre) => [...pre, note]);
    // const value = notes.filter((curr) => curr.id === id);
    // setDeleteNotes((pre) => [...pre, ...value]);
    // setNotes((pre) => {
    //   const value = pre.filter((curr) => curr.id !== id);
    //   return value;
    // });
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
            />
            <DeleteIcon
              style={{ fontSize: "1.3rem" }}
              onClick={() => deleteItems(note.id)}
            />
          </CardActions>
        </StyleCard>
      )}
    </>
  );
}
