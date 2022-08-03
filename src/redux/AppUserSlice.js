import { createSlice } from '@reduxjs/toolkit';
import AppUser from '../models/AppUser';

const AppUserSlice = createSlice({
    name: 'appUser',

    initialState: {
        currentUser: new AppUser(),
        isSignedIn: false
    },

    reducers: {
        signInUser: (state, action) => {
            console.log(state);
            state.currentUser = action.payload;
            state.isSignedIn = true;
        },
        signOutUser: (state, action) => {
            console.log(state);
            state.isSignedIn = false;
        },
        updateUser: (state, action) => {
            console.log(state);
            state.currentUser = action.payload;
            state.isSignedIn = true;
        }
    }
});

export const { signInUser, signOutUser, updateUser } = AppUserSlice.actions;

export default AppUserSlice.reducer;
