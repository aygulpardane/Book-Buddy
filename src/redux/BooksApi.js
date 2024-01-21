import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/",
  }),
  endpoints: (builder) => ({
    fetchBooks: builder.query({
      query: () => `books`,
      providesTags: ['Book'],
    }),
    fetchSingleBook: builder.query({
      query: (bookId) => `books/${bookId}`,
      providesTags: ['Book'],
    }),

    fetchUser: builder.query({
      query: (variables) => ({
        url: "users/me",
        headers: {
          Authorization: `Bearer ${variables.token}`,
        },
      }),
    }),

    fetchReservations: builder.query({
      query: (variables) => ({
        url: "reservations",
        headers: {
          Authorization: `Bearer ${variables.token}`,
        },
      }),
    }),

    register: builder.mutation({
      query: (user) => ({
        url: 'users/register',
        method: "POST",
        body: user
      })
    }),

    login: builder.mutation({
      query: (user) => ({
        url: 'users/login',
        method: "POST",
        body: user
      })
    }),

    checkoutBook: builder.mutation({
      query: ({bookId, token, isAvailable}) => {
        return ({
          url: `/books/${bookId}`,
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: {available: isAvailable}
        })
      },
      invalidatesTags: ['Book'],
    }),

    removeRes: builder.mutation({
      query: ({resId}, variables) => ({
        url: `reservations/${resId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${variables.token}`,
        }
      })
    }),
  }),
});

export const { useFetchBooksQuery, useFetchSingleBookQuery, useFetchUserQuery, useRegisterMutation, useLoginMutation, useFetchReservationsQuery, useCheckoutBookMutation, useRemoveResMutation } = booksApi;

export default booksApi;
