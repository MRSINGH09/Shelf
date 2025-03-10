import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import BookTile from "./BookTile";
import { useGetAllBookQuery } from "../redux/api";
import { findBook } from "../utils/booksUtility";
import NotFound from "./NotFound";

function BooksGallery() {
  const { data, isLoading } = useGetAllBookQuery([]);
  const searchValue = useSelector((state) => state.searchInputValue.value);
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    if (!searchValue) {
      setBookData(data);
    } else {
      setBookData(findBook(data, searchValue));
    }
  }, [data, searchValue]);

  return isLoading ? (
    <div>...Loading</div>
  ) : (
    <>
      <Box
        sx={{
          padding: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "2rem",
        }}
      >
        {bookData?.length ? (
          bookData?.map((book, index) => {
            return (
              <BookTile
                key={index}
                title={book.title}
                url={book.cover_image}
                genre={book.genre}
                id={book.id}
              />
            );
          })
        ) : (
          <NotFound />
        )}
      </Box>
    </>
  );
}

export default BooksGallery;
