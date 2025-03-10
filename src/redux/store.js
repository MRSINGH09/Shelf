import { configureStore } from '@reduxjs/toolkit'

import { booksApi } from './api'
import {searchSlice} from './slices/searchSlice'

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]:booksApi.reducer,
    searchInputValue:searchSlice.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
})

