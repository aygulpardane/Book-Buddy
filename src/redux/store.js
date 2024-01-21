import { configureStore } from '@reduxjs/toolkit';

import booksApi from './BooksApi';
import tokenReducer from './tokenSlice';

const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
        token: tokenReducer,
    },
    middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(booksApi.middleware),
});

export default store;
