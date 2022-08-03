import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthorByIdService } from '../services/AuthorService';

const fetchAuthorById = createAsyncThunk(
    'authors/fetchByIdRole',
    async (id, thunkAPI) => {
        console.log(`fetchAuthorById`);
        const response = await getAuthorByIdService(id);
        return response;
    });

const AuthorSlice = createSlice({
    name: 'author',
    initialState: {
        authorObj: {},
        authorList: []
    },

    reducers: {
        getAuthorById: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.authorObj = action.payload;
        },
        getAuthorByName: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.authorObj = action.payload;
        },
        getAllAuthors: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.authorList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAuthorById, (state, action) => {
            console.log(`extraReducers 1`);
            state.authorList.push(action.payload);
        });
    }

});

export const { getAuthorById, getAuthorByName, getAllAuthors } = AuthorSlice.actions;
export { fetchAuthorById };

export default AuthorSlice.reducer;

