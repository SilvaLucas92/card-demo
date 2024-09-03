import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch bill pays
export const fetchBillPays = createAsyncThunk(
  "billPay/fetchBillPays",
  async () => {
    const response = await axios.get("/api/billpays");
    return response.data;
  }
);

// Async thunk to add a new bill pay
export const addBillPay = createAsyncThunk(
  "billPay/addBillPay",
  async (newBillPay) => {
    const response = await axios.post("/api/billpays", newBillPay);
    return response.data;
  }
);

const billPaySlice = createSlice({
  name: "billPay",
  initialState: {
    billPays: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBillPays.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBillPays.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.billPays = action.payload;
      })
      .addCase(fetchBillPays.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addBillPay.fulfilled, (state, action) => {
        state.billPays.push(action.payload);
      });
  },
});

export default billPaySlice.reducer;
