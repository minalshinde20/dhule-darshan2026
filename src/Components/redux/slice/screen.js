import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    payload:null
}

export const screenSlice = createSlice({
    initialState:initialstate,
    name:"project",
    reducers:{
        updateScreen:(state,action) => {
            state.payload = action.payload;
        },
    }
})

export const {updateScreen} =screenSlice.actions;
export default screenSlice.reducer;