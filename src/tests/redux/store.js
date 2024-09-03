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

// Tests for Redux Store Configuration
describe('Redux Store Configuration', () => {
  it('should correctly configure the store with initial state', () => {
    const state = store.getState();
    expect(state.billPay).toBeDefined();
    expect(state.card).toBeDefined();
    expect(state.customer).toBeDefined();
    expect(state.transaction).toBeDefined();
  });

  it('should handle actions for billPay reducer', () => {
    const action = { type: 'billPay/payBill' };
    store.dispatch(action);
    const state = store.getState();
    expect(state.billPay).toEqual(billPayReducer(undefined, action));
  });

  it('should handle actions for card reducer', () => {
    const action = { type: 'card/updateCardDetails' };
    store.dispatch(action);
    const state = store.getState();
    expect(state.card).toEqual(cardReducer(undefined, action));
  });

  it('should handle actions for customer reducer', () => {
    const action = { type: 'customer/addCustomer' };
    store.dispatch(action);
    const state = store.getState();
    expect(state.customer).toEqual(customerReducer(undefined, action));
  });

  it('should handle actions for transaction reducer', () => {
    const action = { type: 'transaction/recordTransaction' };
    store.dispatch(action);
    const state = store.getState();
    expect(state.transaction).toEqual(transactionReducer(undefined, action));
  });
});