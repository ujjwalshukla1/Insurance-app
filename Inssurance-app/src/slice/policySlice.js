import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPolicies = createAsyncThunk("policies/fetchPolicies", async () => {
  const response = await axios.get("http://localhost:5000/policies");
  return response.data;
});

const policySlice = createSlice({
  name: "policies",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPolicies.fulfilled, (state, action) => action.payload);
  }
});

export default policySlice.reducer;
