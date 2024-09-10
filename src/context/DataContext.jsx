import { createContext, useState } from "react";

export const DataContext = createContext({});

export default function DataProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deleteNotes, setDeleteNotes] = useState([]);

  return (
    <DataContext.Provider
      value={{
        notes,
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
