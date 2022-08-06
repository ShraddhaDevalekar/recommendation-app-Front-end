import { configureStore } from "@reduxjs/toolkit";
import authorReducer from './AuthorSlice';
import bookReducer from './BookSlice';
import categoryReducer from './CategorySlice';
import appUserReducer from './AppUserSlice';

console.log('store initilized');
const store = configureStore({
    reducer: {
        author: authorReducer,
        book: bookReducer,
        category: categoryReducer,
        appUser: appUserReducer
    }
});

export default store; 