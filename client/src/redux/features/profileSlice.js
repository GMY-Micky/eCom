import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name:'profile',
    initialState:{
        value: localStorage.getItem("firstName"),
    },
    reducers:{
        setUsername: (state,action)=>{
            state.value = action.payload;
        }
    }
})

export const {setUsername} = profileSlice.actions

export default profileSlice.reducer;