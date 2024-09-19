import React from "react";
import { Box, Typography } from "@mui/material";

export default function Note() {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography>
          <em style={{ fontFamily: '"Roboto", arial, sans-serif' }}>
            Notes in Trash are deleted after 7 days.
          </em>
        </Typography>
      </Box>
    </>
  );
}
