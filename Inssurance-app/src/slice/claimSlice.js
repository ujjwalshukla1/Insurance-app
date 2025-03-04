import { createSlice } from "@reduxjs/toolkit";

const claimSlice = createSlice({
  name: "claims",
  initialState: [],
  reducers: {
    setClaims: (state, action) => action.payload,
    addClaim: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setClaims, addClaim } = claimSlice.actions;
export default claimSlice.reducer;