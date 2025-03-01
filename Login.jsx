import React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { validEmail, validPassword } from "../../../Regex";
// const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
// const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
// const names = new RegExp("^[a-zA-Z]+$");
// const username = new RegExp("^[a-zA-Z0-9]+$");
export default function Login() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    emailErr: false,
    emailErrMsg: "",
    pwdErrMsg: "",
    pwdError: false,
  });

  const eventChange = (e) => {
    const { name, value } = e.target;
    setDetails((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (validEmail.test(details.email) === false) {
      setError((pre) => {
        return { ...pre, emailErr: true, emailErrMsg: "Invalid Email." };
      });
    } else {
      setError((pre) => {
        return { ...pre, emailErr: false };
      });
    }
    if (!details.email) {
      setError((pre) => {
        return { ...pre, emailErr: true, emailErrMsg: "Email required." };
      });
    } else {
      setError((pre) => {
        return { ...pre, emailErr: false };
      });
    }
    ////////////////////////////////////////////////////////////////////////////
    if (validPassword.test(details.password) === false) {
      setError((pre) => {
        return { ...pre, pwdError: true, pwdErrMsg: "Invalid Password." };
      });
    } else {
      setError((pre) => {
        return { ...pre, pwdError: false };
      });
    }

    if (!details.password) {
      setError((pre) => {
        return { ...pre, pwdError: true, pwdErrMsg: "Password required." };
      });
    } else {
      setError((pre) => {
        return { ...pre, pwdError: false };
      });
    }
    const userDetails = {
      details,
    };
    setDetails({
      email: "",
      password: "",
    });
    console.log(userDetails);
  };
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // border: "20px solid black",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            bgcolor: "#ffff",
            height: "500px",
            width: "500px",
            border: "2px solid black",
            borderRadius: "6px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              // border: "2px solid",
              marginTop: "20px",
            }}
          >
            <img
              src="https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png"
              alt="icon"
              height={"80px"}
              width={"18%"}
            />
          </Box>
          <Box
            sx={{
              // border: "2px solid",
              textAlign: "center",
              marginTop: "-10px",
              paddingBottom: "10px",
            }}
          >
            <span
              style={{
                fontWeight: "400",
                fontSize: "1.5rem",
                fontFamily: "sans-serif",
              }}
            >
              Login
            </span>
            <p
              style={{
                marginTop: "1px",
                marginBottom: "5px",
                fontFamily: "sans-serif",
                fontSize: "1.1rem",
                fontWeight: "400",
              }}
            >
              Use Your Google Account.
            </p>
          </Box>
          <Box
            sx={{
              // border: "2px solid",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginLeft: "25px",
              marginRight: "25px",
            }}
          >
            <TextField
              error={error.emailErr}
              margin="none"
              id="outlined-controlled1"
              label="Email or phone"
              variant="outlined"
              required
              name="email"
              style={{ marginBottom: "" }}
              onChange={(e) => eventChange(e)}
              onFocus={() =>
                setError((pre) => {
                  return { ...pre, emailErr: false, emailErrMsg: "" };
                })
              }
              value={details.email}
              helperText={error.emailErrMsg}
            />
            <TextField
              error={error.pwdError}
              margin="normal"
              id="outlined-controlled2"
              label="Password"
              variant="outlined"
              required
              type="password"
              name="password"
              helperText={error.pwdErrMsg}
              value={details.password}
              onChange={(e) => eventChange(e)}
              onFocus={() =>
                setError((pre) => {
                  return { ...pre, pwdError: false, pwdErrMsg: "" };
                })
              }
            />
          </Box>
          <Box sx={{ paddingLeft: "35px" }}>
            <a
              href="#"
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                fontFamily: "sans-serif",
              }}
            >
              Forgot Password?
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              // border: "2px solid",
              marginLeft: "15px",
              marginRight: "15px",
              justifyContent: "space-between",
              // paddingLeft: "5px",
              // paddingRight: "5px",
              padding: "25px",
            }}
          >
            <Button
              variant="text"
              size="small"
              style={{ fontWeight: "400", color: "slateblue" }}
            >
              create Account
            </Button>

            <Button variant="contained" onClick={submitHandler}>
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
