import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  payload: null,
};

export const userSlice = createSlice({
  initialState: initialstate,
  name: "user",
  reducers: {
    login: (state, action) => {
      state.payload = action.payload;
      localStorage.setItem("User", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.payload = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
