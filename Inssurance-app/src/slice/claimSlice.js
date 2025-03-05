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
    updateClaimStatus: (state, action) => {
      const { claimId, status } = action.payload;
      const claim = state.find((c) => c.id === claimId);
      if (claim) {
        claim.status = status;
      }
    },
  },
});

export const { setClaims, addClaim, removeClaim, updateClaimStatus } = claimSlice.actions;
export default claimSlice.reducer;
