import axios from "axios";
import { key } from "../Regex";
export const signup = async (details) => {
  try {
    let userDetails = await axios.post(
      `http://localhost:3000/api/users/register`,
      details
    );
    console.log(userDetails.data);
    console.log(details);
  } catch (error) {
    console.error(error);
  }
};

export const login = async (details) => {
  let userDetails = await axios.post(
    `http://localhost:3000/api/users/login`,
    details
  );
  console.log(userDetails.status === 200 || userDetails.statusText === "OK");
  if (userDetails.status === 200 || userDetails.statusText === "OK") {
    let token = localStorage.setItem(key, userDetails.data.token);
  }
  return userDetails;
};
