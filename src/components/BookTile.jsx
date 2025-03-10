import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Ribbon from "./Ribbon";

export default function MediaCard({ title, url,genre,id }) {
    const navigate=useNavigate()
    
  return (
    <Card
    onClick={()=>{navigate(`/description/${id}`)}}
      sx={{
        position:"relative",
        maxWidth: "13rem",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
        "&:hover .ribbon":{opacity:"1"}

      }}
    >
        <Box>
        <Ribbon genre={genre}/>
        </Box>
   
      <Box
        sx={{
          padding: "1rem",
          width: "100%",
          backgroundColor: "#F8E3CA",
          display: "flex",
          justifyItems: "center",
        }}
      >
        <img
          src={url}
          style={{
            height: "15rem",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box sx={{ padding: "0.5rem" }}>
        <Typography variant="body1" align="center">
          {title}
        </Typography>
      </Box>
    </Card>
  );
}
