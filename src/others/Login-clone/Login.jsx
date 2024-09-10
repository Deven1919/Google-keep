import { TextField } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { validEmail, validPassword } from "../../../../Regex";
export default function Login() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    emailErr: false,
    pwdError: false,
  });

  const eventChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    if (name === "email") {
      setDetails((pre) => {
        return { ...pre, email: value };
      });
    }
    if (name === "password") {
      setDetails((pre) => {
        return { ...pre, password: value };
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!validEmail.test(details.email)) {
      setError((pre) => {
        return { ...pre, emailErr: true };
      });
    } else {
      setError((pre) => {
        return { ...pre, emailErr: false };
      });
    }
    if (!validPassword.test(details.password)) {
      setError((pre) => {
        return { ...pre, pwdError: true };
      });
    } else {
      setError((pre) => {
        return { ...pre, pwdError: false };
      });
    }
    const userDetails = {
      email: details.email,
      password: details.password,
    };
    console.log(userDetails);
  };

  return (
    <>
      <div className="container">
        <div className="google-form">
          <div className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnzdX3VRWijmxegqAbqUBBPIU_175cRxsLA&s"
              alt="google logo"
            />
          </div>
          <div className="header">
            <span>Login</span>
            <p>Using Your Google Account.</p>
          </div>
          <div>
            <form action="" onSubmit={(e) => submitHandler(e)}>
              <div className="form">
                <div className="inputs">
                  <TextField
                    error={error.emailErr}
                    id="outlined-controlled"
                    label="Email or phone"
                    variant="outlined"
                    required
                    fullWidth
                    margin="normal"
                    onChange={(e) => eventChange(e)}
                    onFocus={() =>
                      setError((pre) => {
                        return { ...pre, emailErr: false };
                      })
                    }
                    name="email"
                    value={details.email}
                    helperText={error.emailErr ? "Incorrect email" : ""}
                  />
                  <TextField
                    error={error.pwdError}
                    id="outlined-password-input"
                    name="password"
                    label="Password"
                    variant="outlined"
                    required
                    type="password"
                    fullWidth
                    margin="normal"
                    helperText={error.pwdError ? "Incorrect password" : ""}
                    value={details.password}
                    onChange={(e) => eventChange(e)}
                    onFocus={() =>
                      setError((pre) => {
                        return { ...pre, pwdError: false };
                      })
                    }
                  />
                </div>
              </div>
              <div className="forgot-link">
                <a href="">Forgot Password?</a>
              </div>
              <div className="buttons">
                <button className="create">create account</button>
                <button className="login" type="submit" onClick={submitHandler}>
                  login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
