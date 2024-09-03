import { configureStore } from '@reduxjs/toolkit';
import billPayReducer from './slices/billPaySlice';
import cardReducer from './slices/cardSlice';
import customerReducer from './slices/customerSlice';
import transactionReducer from './slices/transactionSlice';

export const store = configureStore({
  reducer: {
    billPay: billPayReducer,
    card: cardReducer,
    customer: customerReducer,
    transaction: transactionReducer,
  },
});