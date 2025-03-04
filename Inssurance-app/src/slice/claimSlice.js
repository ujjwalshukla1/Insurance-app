import { createSlice } from "@reduxjs/toolkit";

const claimSlice = createSlice({
  name: "claims",
  initialState: [],
  reducers: {
    setClaims: (state, action) => action.payload,
    addClaim: (state, action) => {
      state.push(action.payload);
    },
    removeClaim: (state, action) => {
      return state.filter((claim) => claim.id !== action.payload);
    },
  },
});

export const { setClaims, addClaim, removeClaim } = claimSlice.actions;
export default claimSlice.reducer;
