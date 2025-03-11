// this function returns filtered book by name
function findBook(data, name) {
  return data?.filter((book) => {
    return book.title.toLowerCase().includes(name.toLowerCase());
  });
}

// returns only book borrowed books
function getBookDataByMode(data, mode) {
  if (mode == "Admin") {
    return data;
  } else {
    return data?.filter((book) => book.is_borrowed);
  }
}

//this function returns a book by its id
function getBookById(data, id) {
  return data?.find((book) => book.id == id);
}

// update borrow field of books data
function UpdateBookField(data, name, isBorrowed) {
  const book = data?.find((book) => book.title == name);
  const updatedBook = { ...book };
  updatedBook.is_borrowed = isBorrowed;
  return updatedBook;
}

export { findBook, getBookById, getBookDataByMode, UpdateBookField };
