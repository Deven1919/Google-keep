import axios from "axios";

const configure = () => {
  const token = localStorage.getItem("token");

  const auth = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  return auth;
};

export const getAllNotes = async () => {
  try {
    const notes = await axios.get(
      `http://localhost:3000/api/notes/getAllNotes`,
      configure()
    );

    // console.log(notes.data.data);
    return notes.data.data;
  } catch (error) {
    console.error(error);
  }
};
export const createNotes = async (data) => {
  try {
    const notes = await axios.post(
      `http://localhost:3000/api/notes/createNotes`,
      data,
      configure()
    );

    console.log(notes);
    return notes;
  } catch (error) {
    console.error(error);
  }
};
export const deleteNotesById = async (id) => {
  try {
    const notes = await axios.delete(
      `http://localhost:3000/api/notes/deletenote/${id}`
    );

    console.log(notes);
  } catch (error) {
    console.error(error);
  }
};
export const deleteAllNotes = async () => {
  try {
    const notes = await axios.delete(
      `http://localhost:3000/api/notes/deleteAllNotes`
    );

    console.log(notes);
  } catch (error) {
    console.error(error);
  }
};
export const trashNote = async (id) => {
  try {
    const notes = await axios.get(
      `http://localhost:3000/api/notes/trash/${id}`
    );

    console.log(notes);
    return notes;
  } catch (error) {
    console.error(error);
  }
};
export const archive = async (id) => {
  try {
    const notes = await axios.get(
      `http://localhost:3000/api/notes/archive/${id}`
    );

    console.log(notes);
    return notes;
  } catch (error) {
    console.error(error);
  }
};