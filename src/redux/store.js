import { configureStore } from "@reduxjs/toolkit";

import { booksApi } from "./api";
import { searchSlice } from "./slices/searchSlice";
import { modeSlice } from "./slices/modeSlice";

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    searchInputValue: searchSlice.reducer,
    modeSlice: modeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
