import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch transactions
export const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransactions",
  async () => {
    const response = await axios.get("/api/transactions");
    return response.data;
  }
);

// Async thunk to add a new transaction
export const addTransaction = createAsyncThunk(
  "transaction/addTransaction",
  async (newTransaction) => {
    const response = await axios.post("/api/transactions", newTransaction);
    return response.data;
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    transactions: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      });
  },
});

export default transactionSlice.reducer;
