import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import Popover from "@mui/material/Popover";
import { DataContext } from "../context/DataContext";
//   "#999966",
//   "#99FF99",
//   "#B34D4D",
//   "#E6B333",
//   "#3366E6",
const colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
];
function Color() {
  const { anchorEl, setAnchorEl, setColor, color } = useContext(DataContext);

  const colorHandler = (color) => {
    setColor(color);
  };

  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      {/* <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: color,
        }}
      >
        Open Popover
      </Button> */}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              border: "1px solid black",
              height: "30px",
              width: "320px",
              padding: "15px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0px 2px 3px rgb(0,0,0,.4)",
            }}
          >
            {colorArray.map((curr) => (
              <IconButton
                key={curr}
                style={{ backgroundColor: curr, border: "1px solid black" }}
                size="large"
                name="color"
                value={color}
                onClick={() => colorHandler(curr)}
              />
            ))}
          </Box>
        </Box>
      </Popover>
    </div>
  );
}

export default Color;

// export default function BasicPopover() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

//   return (
//     <div>
//       <Button aria-describedby={id} variant="contained" onClick={handleClick}>
//         Open Popover
//       </Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//       >
//         // <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
//         <Box sx={{ display: "flex", justifyContent: "center" }}>
//           <Box
//             sx={{
//               border: "2px solid black",
//               height: "30px",
//               width: "320px",
//               padding: "5px",
//               borderRadius: "5px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-evenly",
//               boxShadow: "0px 2px 3px rgb(0,0,0,.4)",
//             }}
//           >
//             {colorArray.map((curr) => (
//               <IconButton style={{ backgroundColor: curr }} size="large" />
//             ))}
//             {/* <IconButton style={{ backgroundColor: "red" }} size="large" /> */}
//           </Box>
//         </Box>
//       </Popover>
//     </div>
//   );
// }
