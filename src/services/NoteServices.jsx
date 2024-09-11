import axios from "axios";
export const getAllNotes = async () => {
  try {
    const notes = await axios.get(
      `http://localhost:3000/api/notes/getAllNotes`
    );

    console.log(notes);
  } catch (error) {
    console.error(error);
  }
};
