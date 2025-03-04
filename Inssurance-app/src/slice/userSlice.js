import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    loginUser: (state, action) => action.payload,
    logoutUser: () => null,
    registerUser: (state, action) => action.payload,
  },
});

export const { loginUser, logoutUser, registerUser } = userSlice.actions;
export default userSlice.reducer;