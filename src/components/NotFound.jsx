import React from "react";
import { Box, Typography } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

function NotFound() {
  return (
    <Box sx={{ textAlign: "center", p: 4 }}>
      <Typography variant="h5" color="text.secondary">
        <ErrorOutlineOutlinedIcon sx={{ fontSize: 50, color: "gray" }} />
        <br />
        Sorry, we couldn’t find what you were looking for.
      </Typography>
    </Box>
  );
}

export default NotFound;
