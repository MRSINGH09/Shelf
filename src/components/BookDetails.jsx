import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllBookQuery } from "../redux/api";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getBookById } from "../utils/booksUtility";

function BookDetails() {
  const { data, isLoading, isSuccess } = useGetAllBookQuery();
  const { id } = useParams();
  const [bookData, setBookData] = useState();

  useEffect(() => {
    if (isSuccess) {
      setBookData(getBookById(data, id));
    }
  }, [data, id]);

  return isLoading ? (
    <div>...Loading</div>
  ) : (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "90vh",
        bgcolor: "#fea49f",
      }}
    >
      <Box
        sx={{
          width: "45%",
          height: "90%",
          bgcolor: "#101357",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "80%" }}>
          <img
            src={bookData?.cover_image}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "45%",
          height: "90%",
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            align="center"
            color="#1976D2"
            marginBottom={"2rem"}
          >
            {bookData?.title}
          </Typography>
          <Typography variant="h6">
            <b>Author</b>: {bookData?.author}
          </Typography>
          <Typography variant="h6">
            <b>Year</b>: {bookData?.year}
          </Typography>
          <Typography variant="h6">
            <b>Genre</b>: {bookData?.genre}
          </Typography>
          <Typography variant="h6">
            <b>Rating</b>: {bookData?.rating}
          </Typography>
          <Typography variant="h6">
            <b>Units Sold</b>: {bookData?.units_sold}
          </Typography>
          <Typography variant="h6">
            <b>Description</b>: {bookData?.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BookDetails;
