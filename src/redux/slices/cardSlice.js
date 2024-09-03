import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch cards
export const fetchCards = createAsyncThunk('card/fetchCards', async () => {
  const response = await axios.get('/api/cards');
  return response.data;
});

// Async thunk to add a new card
export const addCard = createAsyncThunk('card/addCard', async (newCard) => {
  const response = await axios.post('/api/cards', newCard);
  return response.data;
});

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.cards.push(action.payload);
      });
  },
});

export default cardSlice.reducer;