import { configureStore } from "@reduxjs/toolkit";
import policyReducer from "./slice/policySlice.js";
import userReducer from "./slice/userSlice.js";
import claimReducer from "./slice/claimSlice.js";

const store = configureStore({
  reducer: {
    policies: policyReducer,
    user: userReducer,
    claims: claimReducer,
  },
});

export default store;