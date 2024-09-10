import axios from "axios";
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
  try {
    let userDetails = await axios.post(
      `http://localhost:3000/api/users/login`,
      details
    );
    console.log(userDetails);
    let token = localStorage.setItem("token", userDetails.data.token);
    console.log(JSON.parse(token));
  } catch (error) {
    console.error(error);
  }
};
