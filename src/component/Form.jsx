import React, { useState, useRef, useContext } from "react";
import { styled } from "@mui/material/styles";

import { v4 as uuid } from "uuid";
import { TextField, Box, ClickAwayListener, Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import { DataContext } from "../context/DataContext";
// import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
  width: 560px;
  border-radius: 8px;
  min-height: 20px;
  padding: 10px 15px;
  // border: 2px solid black;
`;

const Matches = styled(Box)`
  width: 100%;
  display: flex;
  margin-left: 25px;
  padding: 10px 15px;
  border-radius: 8px;
  flex-direction: column;
  margin: auto;
  // margin-left: -2px;
  // margin-right: 40px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
`;
const initialNote = {
  id: uuid(),
  heading: "",
  text: "",
};
export default function Form() {
  const logo =
    "https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png";

  const [showText, setShowText] = useState(false);
  const [addNote, setAddNote] = useState({ ...initialNote, id: uuid() });
  const { notes, setNotes } = useContext(DataContext);

  const textRef = useRef();
  const eventHandler = () => {
    setShowText(true);
    textRef.current.style.minHeight = "70px";
  };
  ////////////////////////////////
  const handleInput = (e) => {
    const { name, value } = e.target;

    setAddNote((pre) => {
      return { ...pre, [name]: value };
    });
  };

  /////////////////////////////
  const handleClickAway = () => {
    setShowText(false);
    textRef.current.style.minHeight = "20px";
    setAddNote({ ...initialNote, id: uuid() });
    if (addNote.heading || addNote.text) {
      setNotes((pre) => [...pre, addNote]);

    }
  };

  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      {!matches ? (
        <>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={textRef}>
              {showText && (
                <>
                  <TextField
                    fullWidth
                    value={addNote.heading}
                    onChange={(e) => handleInput(e)}
                    name="heading"
                    variant="standard"
                    placeholder="Title"
                    sx={{
                      ".MuiInputBase-input": {
                        fontFamily: "Roboto, Arial, sans-serif",
                        fontWeight: "550",
                        fontSize: "1.05rem",
                      },
                    }}
                    InputProps={{ disableUnderline: true }}
                  />
                </>
              )}
              <TextField
                ref={textRef}
                value={addNote.text}
                fullWidth
                onClick={eventHandler}
                onChange={(e) => handleInput(e)}
                name="text"
                placeholder="Take a note..."
                sx={{
                  ".MuiInputBase-input": {
                    fontFamily: "Roboto, Arial, sans-serif",
                    fontWeight: "550",
                    fontSize: "15px",
                    color: "#202124",
                    position: "relative",
                  },
                }}
                multiline
                maxRows={Infinity}
                variant="standard"
                InputProps={{ disableUnderline: true }}
              />

              {showText && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      fontSize: "1rem",
                      alignItems: "center",
                      marginTop: "10px",
                      paddingTop: "5px",
                      marginLeft: "-2px",
                      color: "#5f6368",
                      // border: "1px solid blue",
                      width: "450px",
                      position: "relative",
                    }}
                    // onClick={containerHandle}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        fontSize: "1rem",
                        alignItems: "center",
                        // marginTop: "10px",
                        paddingTop: "5px",
                        marginLeft: "-2px",
                        color: "#5f6368",
                        // border: "1px solid blue",
                      }}
                      // onClick={containerHandle}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: "30px",
                          minHeight: "2px",
                        }}
                      >
                        <NotificationAddOutlinedIcon />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: "30px",
                        }}
                      >
                        <PersonAddAltOutlinedIcon />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: "30px",
                        }}
                      >
                        <ColorLensOutlinedIcon />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: "30px",
                        }}
                      >
                        <ImageOutlinedIcon />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: "30px",
                        }}
                      >
                        <ArchiveOutlinedIcon />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: "30px",
                        }}
                      >
                        <MoreVertOutlinedIcon />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        marginLeft: "150px",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                      }}
                    >
                      <Button
                        variant="text"
                        style={{
                          color: "#5f6368",
                          textTransform: "capitalize",
                          fontSize: "0.950rem",
                          fontFamily: `"Google Sans", Roboto, Arial, sans-serif`,
                          fontWeight: "550",
                        }}
                        onClick={handleClickAway}
                      >
                        close
                      </Button>
                    </Box>
                    {/* <Box
                      sx={{
                        display: "flex",
                        border: "2px solid black",
                        // bgcolor: "red",
                        // // width: "220px",
                        marginLeft: "150px",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        paddingLeft: "4px",

                        paddingRight: "4px",
                      }}
                    >
                      <Button
                        variant="text"
                        style={{
                          color: "#5f6368",
                          border: "2px solid black",
                          textTransform: "capitalize",
                          fontSize: "0.950rem",
                          fontFamily: `"Google Sans", Roboto, Arial, sans-serif`,
                          fontWeight: "550",
                          // paddingTop: "15px",
                        }}
                        onClick={handleClickAway}
                      >
                        close
                      </Button>
                    </Box> */}
                  </Box>
                  {/* <Box
                    sx={{
                      display: "flex",
                      border: "2px solid black",

                      marginLeft: "150px",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      paddingLeft: "4px",
                      width: "80px",
                      // border: "1px solid black",
                      paddingRight: "4px",
                    }}
                  > */}
                  {/* <Button
                    variant="text"
                    style={{
                      color: "#5f6368",
                      // border: "2px solid black",
                      textTransform: "capitalize",
                      fontSize: "0.950rem",
                      fontFamily: `"Google Sans", Roboto, Arial, sans-serif`,
                      fontWeight: "550",
                      position: "absolute",
                      // paddingTop: "8px",
                      top: "197px",
                      right: "380px",
                    }}
                    onClick={handleClickAway}
                  >
                    close
                  </Button> */}
                  {/* </Box> */}
                  {/* <Box
                    sx={{
                      display: "flex",
                      // border: "2px solid black",
                      // width: "220px",
                      marginLeft: "150px",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      paddingLeft: "4px",
                      paddingRight: "4px",
                    }}
                  >
                    <Button
                      variant="text"
                      style={{
                        color: "#5f6368",
                        textTransform: "capitalize",
                        fontSize: "0.950rem",
                        fontFamily: `"Google Sans", Roboto, Arial, sans-serif`,
                        fontWeight: "550",
                      }}
                      onClick={() => setShowText(false)}
                    >
                      close
                    </Button>
                  </Box> */}
                </>
              )}
              {!showText && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",

                      position: "absolute",
                      right: "380px",
                      padding: "5px",
                      margin: "auto",
                      color: "#5f6368",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "30px",
                      }}
                    >
                      <InventoryOutlinedIcon />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "30px",
                      }}
                    >
                      <BrushOutlinedIcon />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ImageOutlinedIcon />
                    </Box>
                  </Box>
                </>
              )}
              {showText && (
                <>
                  <Box
                    sx={{
                      color: "#5f6368",
                      position: "absolute",
                      right: "380px",
                      //   border: "2px solid black",
                      padding: "5px",
                    }}
                  >
                    <PushPinOutlinedIcon />
                  </Box>
                </>
              )}
            </Container>
          </ClickAwayListener>
        </>
      ) : (
        <>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Matches>
              <TextField
                fullWidth
                variant="standard"
                placeholder="Title"
                color="black"
                InputProps={{ disableUnderline: true }}
              />
              <TextField
                fullWidth
                ref={textRef}
                placeholder="Take a note..."
                color="#5f6368"
                multiline
                maxRows={Infinity}
                variant="standard"
                InputProps={{ disableUnderline: true }}
              />
            </Matches>
          </ClickAwayListener>
        </>
      )}
    </>
  );
}

//   <>
//     {!matches ? (
//       <>
//         <Container>
//           <TextField
//             fullWidth
//             variant="standard"
//             placeholder="Title"
//             color="black"
//             style={{ marginBottom: 10, color: "black", fontSize: "12px" }}
//             InputProps={{ disableUnderline: true }}
//           />
//           <TextField
//             fullWidth
//             placeholder="Take a note..."
//             color="#5f6368"
//             multiline
//             maxRows={Infinity}
//             variant="standard"
//             InputProps={{ disableUnderline: true }}
//           />
//         </Container>
//       </>
//     ) : (
//       <>
//         <Box>
//           <TextField
//             fullWidth
//             variant="standard"
//             placeholder="Title"
//             color="black"
//             //   style={{ marginBottom: 10, color: "black", fontSize: "12px" }}
//             InputProps={{ disableUnderline: true }}
//           />
//           <TextField
//             fullWidth
//             placeholder="Take a note..."
//             color="#5f6368"
//             multiline
//             maxRows={Infinity}
//             variant="standard"
//             InputProps={{ disableUnderline: true }}
//           />
//         </Box>
//       </>
//     )}
//   </>;
