import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  styled,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
const StyleCard = styled(Card)`
  width: 260px;
  margin: 8px;
  //   height: 100%;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export default function Note({ notes }) {
  return (
    <>
      <StyleCard>
        <CardContent>
          <Typography variant="h6">{notes.heading}</Typography>
          <Typography sx={{ wordBreak: "break-word" }}>{notes.text}</Typography>
        </CardContent>
        <CardActions>
          <ArchiveOutlinedIcon
            style={{ fontSize: "1.3rem", marginLeft: "auto" }}
          />
          <DeleteIcon style={{ fontSize: "1.3rem" }} />
        </CardActions>
      </StyleCard>
    </>
  );
}
