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
      invalidatesTags: ['Book']
    }),
    fetchSingleBook: builder.query({
      query: (bookId) => `books/${bookId}`,
      providesTags: ['Book'],
      invalidatesTags: ['Book']
    }),

    fetchUser: builder.query({
      query: (variables) => ({
        url: "users/me",
        headers: {
          Authorization: `Bearer ${variables.token}`,
        },
      }),
      invalidatesTags: ['Users']
    }),

    fetchReservations: builder.query({
      query: (variables) => ({
        url: "reservations",
        headers: {
          Authorization: `Bearer ${variables.token}`,
        },
      }),
      invalidatesTags: ['Reservation']
    }),

    register: builder.mutation({
      query: (user) => ({
        url: 'users/register',
        method: "POST",
        body: user
      }),
      invalidatesTags: ['Users']
    }),

    login: builder.mutation({
      query: (user) => ({
        url: 'users/login',
        method: "POST",
        body: user
      }),
      invalidatesTags: ['Users']
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
      query: ({resId, token}) => ({
        url: `reservations/${resId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }),
      invalidatesTags: ['Reservations']
    }),
  }),
});

export const { useFetchBooksQuery, useFetchSingleBookQuery, useFetchUserQuery, useRegisterMutation, useLoginMutation, useFetchReservationsQuery, useCheckoutBookMutation, useRemoveResMutation } = booksApi;

export default booksApi;
