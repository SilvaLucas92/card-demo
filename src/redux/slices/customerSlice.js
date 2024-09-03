import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch customers
export const fetchCustomers = createAsyncThunk('customer/fetchCustomers', async () => {
  const response = await axios.get('/api/customers');
  return response.data;
});

// Async thunk to add a new customer
export const addCustomer = createAsyncThunk('customer/addCustomer', async (newCustomer) => {
  const response = await axios.post('/api/customers', newCustomer);
  return response.data;
});

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    customers: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.customers.push(action.payload);
      });
  },
});

export default customerSlice.reducer;