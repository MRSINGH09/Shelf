import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes:['Books'],
  endpoints: (builder) => ({
    getAllBook: builder.query({
      query: () => `books`,
      providesTags:['Books']
    }),

    updateBook: builder.mutation({
        query: ({ id,updatedData }) => ({
          url: `books/${id}`,
          method: 'PUT', 
          body: updatedData,
        }),
        invalidatesTags:["Books"]
  }),
})
})

export const { useGetAllBookQuery,useUpdateBookMutation } = booksApi;
