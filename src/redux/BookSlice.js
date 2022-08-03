import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBookByNameService } from '../services/BookService';

const fetchBookByName = createAsyncThunk(
'books/fetchByNameRole',
async (name, thunkAPI) => {
 console.log(`fetchBookByName`);
 const response = await getBookByNameService(name);
 return response;
 });

const BookSlice = createSlice({
 name: 'book',
 initialState: {
 bookObj: {},
 bookList: []
},
reducers: {
    getBookById: (state, action) => {
        console.log(state);
        console.log(action.payload);
        state.bookObj = action.payload;
    },
    getBookByName: (state, action) => {
        console.log(state);
        console.log(action.payload);
        state.bookObj = action.payload;
    },
    getAllBooks: (state, action) => {
        console.log(state);
        console.log(action.payload);
        state.bookList = action.payload;
    }
},
extraReducers: (builder) => {
    builder.addCase(fetchBookByName, (state, action) => {
        console.log(`extraReducers 1`);
        state.bookList.push(action.payload);
    });
}
});

export const{getBookById, getBookByName, getAllBooks} = BookSlice.actions;
export { fetchBookByName };
export default BookSlice.reducer;
