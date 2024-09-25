import React, { useContext } from "react";
 import { trashNote, archive } from "../../services/NoteServices";
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
   const { notes, color } = useContext(DataContext);
   const archiveNote = async (note) => {
     const val = await archive(note._id);
     console.log(val);
     //  await createNotes(archive.data.data);
     //  setArchiveNotes((pre) => [archive.data.data, ...pre]);
   };

   const deleteNote = async (note) => {
     const val = await trashNote(note._id);
     console.log(val);
     //  await createNotes(val.data.data);
     //  setDeleteNotes((pre) => [val.data.data, ...pre]);
   };

   return (
     <>
       {notes.length > 0 && (
         <StyleCard style={{ backgroundColor: note.color }}>
           <CardContent>
             <Typography variant="h6">{note.heading}</Typography>
             <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
               {note.text}
             </Typography>
           </CardContent>
           <CardActions>
             <ArchiveOutlinedIcon
               style={{ fontSize: "1.3rem", marginLeft: "auto" }}
               onClick={() => archiveNote(note)}
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
