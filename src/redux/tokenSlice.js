import { createSlice } from '@reduxjs/toolkit';
import booksApi from './BooksApi';

const tokenSlice = createSlice({
    name: "token",
    initialState: null,
    reducers: {
        setToken: (state, {payload}) =>{
            return payload.token
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            booksApi.endpoints.register.matchFulfilled,
            (state, {payload}) => payload.token
        );

        builder.addMatcher(
            booksApi.endpoints.login.matchFulfilled,
            (state, {payload}) => payload.token
        );

    }
});

export default tokenSlice.reducer;

export const {setToken} = tokenSlice.actions;
