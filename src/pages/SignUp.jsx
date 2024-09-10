import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TextField, Button, Checkbox } from "@mui/material";
import { validPassword, names, email } from "../Regex";
import { signup } from "../services/UserService";
export default function SignUp() {
  // const [isValid, setIsValid] = useState(false);
  let isNotValid = false;
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState({
    firstError: false,
    firstnameError: "",
    lastError: false,
    lastnameError: "",
    nameError: false,
    usernameError: "",
    pwdError: false,
    passwordError: "",
    correct_pwdError: false,
    correct_Error: "",
    toggle: false,
  });

  const eventChangeHandler = (e) => {
    const { name, value } = e.target;

    setValue((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (names.test(value.firstname) === false) {
      isNotValid = true;
      setError((pre) => {
        return {
          ...pre,
          firstError: true,
          firstnameError: "Incorrect firstname",
        };
      });
    } else {
      setError((pre) => {
        return { ...pre, firstError: false };
      });
    }
    if (!value.firstname) {
      setError((pre) => {
        return {
          ...pre,
          firstError: true,
          firstnameError: "Enter valid firstname",
        };
      });
    } else {
      setError((pre) => {
        return { ...pre, firstError: false };
      });
    }
    /////////////////////////////
    if (names.test(value.lastname) === false) {
      isNotValid = true;
      setError((pre) => {
        return { ...pre, lastError: true, lastnameError: "Incorrect lastname" };
      });
    } else {
      setError((pre) => {
        return { ...pre, lastError: false };
      });
    }
    if (!value.lastname) {
      setError((pre) => {
        return {
          ...pre,
          firstError: true,
          lastnameError: "Enter valid lastname",
        };
      });
    } else {
      setError((pre) => {
        return { ...pre, lastError: false };
      });
    }
    //////////////////////////////
    if (email.test(value.email) === false) {
      isNotValid = true;
      setError((pre) => {
        return { ...pre, nameError: true, usernameError: "Incorrect email" };
      });
    } else {
      setError((pre) => {
        return { ...pre, nameError: false };
      });
    }

    if (!value.email) {
      setError((pre) => {
        return {
          ...pre,
          nameError: true,
          usernameError: "Enter valid email",
        };
      });
    } else {
      setError((pre) => {
        return {
          ...pre,
          nameError: false,
        };
      });
    }
    ///////////////////////////
    if (validPassword.test(value.password) === false) {
      isNotValid = true;
      setError((pre) => {
        return {
          ...pre,
          pwdError: true,
          passwordError: "Enter valid password",
        };
      });
    } else {
      setError((pre) => {
        return { ...pre, pwdError: false };
      });
    }
    if (!value.password) {
      setError((pre) => {
        return { ...pre, pwdError: true, passwordError: "password required " };
      });
    } else {
      setError((pre) => {
        return { ...pre, pwdError: false };
      });
    }
    ////////////////////////////
    if (value.password !== value.confirm_password) {
      isNotValid = true;
      setError((pre) => {
        return {
          ...pre,
          correct_pwdError: true,
          correct_Error: "Incorrect password",
        };
      });
    } else {
      setError((pre) => {
        return { ...pre, correct_pwdError: false };
      });
    }

    if (!value.confirm_password) {
      setError((pre) => {
        return {
          ...pre,
          correct_pwdError: true,
          correct_Error: "password required",
        };
      });
    } else {
      setError((pre) => {
        return {
          ...pre,
          correct_pwdError: true,
        };
      });
    }

    const userDetails = {
      firstname: value.firstname,
      lastname: value.lastname,
      email: value.email,
      password: value.password,
      confirm_password: value.confirm_password,
    };
    const errors =
      !value.firstname ||
      !value.lastname ||
      !value.confirm_password ||
      !value.password ||
      !value.email;

    if (errors || isNotValid === true) {
      console.log("error");
    } else {
      // console.log(JSON.stringify(userDetails));
      signup(userDetails);
    }

    setValue({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };

  const toggle = (e) => {
    const temp = document.getElementById("outlined-controlled4");
    if (temp.type === "password") {
      temp.type = "string";
    } else {
      temp.type = "password";
    }
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
          // border: "2px solid black",
          // height: "100vh",
        }}
      >
        <Box
          sx={{
            border: "2px solid black",
            height: "620px",
            width: "420px",
            marginLeft: "10px",
            marginRight: "10px",
            borderRadius: "6px",
            // marginTop: "50px",
            // marginBottom: "50px",
          }}
        >
          <Box
            sx={{
              // border: "2px solid",
              paddingTop: "12px",
              paddingLeft: "20px",
            }}
          >
            <img
              alt="google logo"
              width={"20%"}
              src="data:image/png;base64,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"
            />
          </Box>
          <Box
            sx={{
              paddingBottom: "20px",
              marginBottom: "50px",
              marginTop: "-20px",
              // border: "2px solid",
              paddingLeft: "20px",
            }}
          >
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "1.3rem",
                // border: "2px solid",
                paddingBottom: "4px",
              }}
            >
              Using Your Google Account
            </p>
          </Box>
          <form action="">
            <Box
              sx={{
                display: "flex",
                marginTop: "-120px",
                // border: "2px solid",
                // padding: "20px",
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
                marginLeft: "20px",
                width: "390px",
              }}
            >
              <Box
                sx={{
                  marginLeft: "-20px",
                  marginRight: "20px",
                  // border: "2px solid",
                }}
              >
                <TextField
                  error={error.firstError}
                  id="outlined-controlled1"
                  label="First Name"
                  variant="outlined"
                  required
                  fullWidth
                  margin="normal"
                  name="firstname"
                  onChange={(e) => eventChangeHandler(e)}
                  onFocus={() =>
                    setError((pre) => {
                      return {
                        ...pre,
                        firstError: false,
                        firstnameError: "",
                      };
                    })
                  }
                  value={value.firstname}
                  helperText={error.firstnameError}
                />
              </Box>

              <Box>
                <TextField
                  error={error.lastError}
                  id="outlined-controlled2"
                  name="lastname"
                  label="Last Name"
                  variant="outlined"
                  required
                  type="text"
                  fullWidth
                  margin="normal"
                  helperText={error.lastnameError}
                  value={value.lastname}
                  onChange={(e) => eventChangeHandler(e)}
                  onFocus={() =>
                    setError((pre) => {
                      return { ...pre, lastError: false, lastnameError: "" };
                    })
                  }
                />
              </Box>
            </Box>
            <Box sx={{ width: "370px", marginLeft: "20px" }}>
              <TextField
                error={error.nameError}
                id="outlined-controlled3"
                label="Email"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                name="email"
                type="email"
                onChange={(e) => eventChangeHandler(e)}
                onFocus={() =>
                  setError((pre) => {
                    return { ...pre, nameError: false, usernameError: "" };
                  })
                }
                value={value.email}
                helperText={error.usernameError}
              />
            </Box>

            <Box
              sx={{
                marginLeft: "30px",
                // border: "2px solid",
                color: "slateblue",
              }}
            >
              <p
                style={{
                  // border: "2px solid",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              >
                you can use letters,numbers & periods.
              </p>
              <p style={{ marginTop: "-15px" }}>Use my current email instead</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "370px",
                // border: "2px solid",
                marginLeft: "20px",
                marginTop: "-10px",
              }}
            >
              <Box sx={{ marginRight: "20px", marginTop: "-14px" }}>
                <TextField
                  error={error.pwdError}
                  id="outlined-controlled4"
                  label="Password"
                  variant="outlined"
                  required
                  fullWidth
                  type="password"
                  margin="normal"
                  name="password"
                  onChange={(e) => eventChangeHandler(e)}
                  onFocus={() =>
                    setError((pre) => {
                      return { ...pre, pwdError: false, passwordError: "" };
                    })
                  }
                  value={value.password}
                  helperText={error.passwordError}
                />
              </Box>
              <Box sx={{ marginTop: "-14px" }}>
                <TextField
                  error={error.confirm_password}
                  id="outlined-password-input"
                  name="confirm_password"
                  label="Confirm Password"
                  variant="outlined"
                  required
                  type="password"
                  fullWidth
                  margin="normal"
                  helperText={error.correct_Error}
                  value={value.confirm_password}
                  onChange={(e) => eventChangeHandler(e)}
                  onFocus={() =>
                    setError((pre) => {
                      return {
                        ...pre,
                        correct_pwdError: false,
                        correct_Error: "",
                      };
                    })
                  }
                />
              </Box>
            </Box>
          </form>
          <Box sx={{ marginLeft: "25px", display: "flex" }}>
            <p style={{ color: "slateblue" }}>
              Use 8 more character with mix of letter,numbers & symbols
            </p>
          </Box>
          <Box
            sx={{ marginLeft: "15px", marginTop: "-15px", color: "slateblue" }}
          >
            <Checkbox onClick={toggle} />
            <span>Show Password</span>
          </Box>
          <Box
            sx={{
              // padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "35px",
              marginRight: "55px",
              // border: "2px solid",
            }}
          >
            <Button variant="text">SignIn Instead</Button>
            <Button variant="contained" onClick={submitHandler}>
              Next
            </Button>
          </Box>
          {/* </Box> */}
          {/* above */}
        </Box>
      </Container>
    </>
  );
}
