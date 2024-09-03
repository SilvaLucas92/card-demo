import { fetchTransactions, addTransaction, transactionSlice } from './transactionslice';
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

jest.mock('axios');

describe('transactionSlice async thunks', () => {
  it('fetchTransactions should return the list of transactions', async () => {
    const mockTransactions = [{ id: 1, title: 'Transaction 1' }];
    axios.get.mockResolvedValue({ data: mockTransactions });
    const result = await fetchTransactions();
    expect(result).toEqual(mockTransactions);
  });

  it('addTransaction should add a new transaction and return it', async () => {
    const newTransaction = { title: 'New Transaction' };
    axios.post.mockResolvedValue({ data: newTransaction });
    const result = await addTransaction(newTransaction);
    expect(result).toEqual(newTransaction);
  });

  it('should handle initial state', () => {
    const initialState = transactionSlice.reducer(undefined, {});
    expect(initialState).toEqual({ transactions: [], status: 'idle', error: null });
  });

  it('should handle loading state when fetching transactions', () => {
    const action = { type: fetchTransactions.pending.type };
    const state = transactionSlice.reducer(undefined, action);
    expect(state).toEqual({ transactions: [], status: 'loading', error: null });
  });

  it('should handle adding a transaction', () => {
    const previousState = { transactions: [], status: 'idle', error: null };
    const newTransaction = { id: 2, title: 'Transaction 2' };
    const action = { type: addTransaction.fulfilled.type, payload: newTransaction };
    const state = transactionSlice.reducer(previousState, action);
    expect(state.transactions).toContainEqual(newTransaction);
  });
});