import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthorByNameService } from '../services/AuthorService';

const fetchAuthorByName = createAsyncThunk(
    'authors/fetchByNameRole',
    async (name, thunkAPI) => {
        console.log(`fetchAuthorByName`);
        const response = await getAuthorByNameService(name);
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
        builder.addCase(fetchAuthorByName, (state, action) => {
            console.log(`extraReducers 1`);
            state.authorList.push(action.payload);
        });
    }

});

export const { getAuthorById, getAuthorByName, getAllAuthors } = AuthorSlice.actions;
export { fetchAuthorByName };

export default AuthorSlice.reducer;

