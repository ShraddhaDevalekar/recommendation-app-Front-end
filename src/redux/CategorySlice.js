import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoryByNameService } from '../services/CategoryService';

const fetchCategoryByName = createAsyncThunk(
    'category/fetchByNameRole',
    async (name, thunkAPI) => {
        console.log(`fetchCategoryByName`);
        const response = await getCategoryByNameService(name);
        return response;
    });

const CategorySlice = createSlice({
    name: 'categoryName',
    initialState: {
        categoryObj: {},
        categoryList: []
    },
    reducers: {
        getCategoryById: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.categoryObj = action.payload;
        },
        getCategoryByName: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.categoryObj = action.payload;
        },
        getAllCategory: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.categoryList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryByName, (state, action) => {
            console.log(`extraReducers 1`);
            state.categoryList.push(action.payload);
        });
    }
});

export const { getCategoryById, getCategoryByName, getAllCategory } = CategorySlice.actions;
export { fetchCategoryByName };
export default CategorySlice.reducer;