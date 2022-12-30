import { createSlice } from '@reduxjs/toolkit'
import { logoutUser } from '../firebase';

const initialState = {
    user:null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state,action) => {
            state.user = action.payload;
        },
        logout:(state) => {
            state.user=null;
            
            logoutUser();
            
        }
    },
})

// Action creators are generated for each case reducer function
export const { login,logout} = userSlice.actions

export const selectUser =  (state) => state.user.user;

export default userSlice.reducer