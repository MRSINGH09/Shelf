import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import BookTile from "./BookTile";
import { useGetAllBookQuery } from "../redux/api";
import { findBook, getBookDataByMode } from "../utils/booksUtility";
import NotFound from "./NotFound";
import SearchBar from "./SearchBar";

function BooksGallery() {
  const { data, isLoading } = useGetAllBookQuery([]);
  const searchValue = useSelector((state) => state.searchInputValue.value);
  const mode = useSelector((state) => state.modeSlice.value);
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    if (!searchValue) {
      setBookData(getBookDataByMode(data, mode));
    } else {
      setBookData(findBook(data, searchValue, mode));
    }
  }, [data, searchValue, mode]);

  return isLoading ? (
    <div>...Loading</div>
  ) : (
    <>
      {mode == "User" ? <SearchBar /> : ""}
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
