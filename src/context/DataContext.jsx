import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
export const DataContext = createContext({});
const initialNote = {
  id: uuid(),
  heading: "",
  text: "",
};

export default function DataProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [addNote, setAddNote] = useState({ ...initialNote, id: uuid() });
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deleteNotes, setDeleteNotes] = useState([]);
  const [show, setShow] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [color, setColor] = useState(null);
  const [toggle, setToggle] = useState(false);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   console.log("click");
  // };
  return (
    <DataContext.Provider
      value={{
        show,
        toggle,
        setToggle,
        anchorEl,
        setAnchorEl,
        setShow,
        color,
        setColor,
        notes,
        addNote,
        setAddNote,
        setNotes,
        deleteNotes,
        setDeleteNotes,
        archiveNotes,
        setArchiveNotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
