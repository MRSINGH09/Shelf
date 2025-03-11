import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Box, Button } from "@mui/material";
import { useUpdateBookMutation, useGetAllBookQuery } from "../redux/api";
import { UpdateBookField } from "../utils/booksUtility";

const filter = createFilterOptions();

export default function SearchBar() {
  const [value, setValue] = useState(null);
  const { data } = useGetAllBookQuery();
  const [updateBook] = useUpdateBookMutation();

  // Ensure data is available before mapping
  const bookList = data
    ? data.reduce((acc,book) => {
        if(!book.is_borrowed){
        acc.push( {
            id: book.id,
            title: book.title ,
          }) 
        }
        return acc  
    } 
       ,[])
    : [];

  return (
    <Box sx={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (!newValue || newValue.isDisabled) return; // Prevent selection of "Not Found"
          setValue(newValue);
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          const { inputValue } = params;

          // Check if the input matches an existing book
          const isExisting = bookList.some(
            (book) => book.title.toLowerCase() === inputValue.toLowerCase()
          );

          // If no match, add a non-selectable "Not Found" option
          if (inputValue !== "" && !isExisting) {
            filtered.push({ id: "not-found", title: "Not Found", isDisabled: true });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="add-book"
        options={bookList}
        getOptionLabel={(option) => (option?.title ? option.title : "")} 
        renderOption={(props, option) => (
          <li
            {...props}
            key={option.id}
            style={option.isDisabled ? { color: "gray", pointerEvents: "none" } : {}}
          >
            {option.title}
          </li>
        )}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Search for a book" />}
      />
      <Button
        onClick={async() =>{
            const updatedBook=UpdateBookField(data, value.title,true)
            const {id}=updatedBook
            await updateBook({id,updatedData:updatedBook,})
            setValue(null)
        }
            
        }
        variant="contained"
        sx={{ marginLeft: "2rem" }}
        disabled={!value || value.title === "Not Found"}
      >
        Add
      </Button>
    </Box>
  );
}
