import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    payload:"null"
}

export const projectSlice = createSlice({
    initialState:initialstate,
    name:"project",
    reducers:{
        allProject:(state,action) => {
            state.payload = action.payload;
        },
    }
})

export const {allProject} =projectSlice.actions;
export default projectSlice.reducer;