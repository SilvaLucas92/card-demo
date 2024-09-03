import { fetchBillPays, addBillPay, billPaySlice } from '../slices/billpayslice';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('billPaySlice async actions', () => {
  let store;
  let mockAxios;

  beforeEach(() => {
    store = configureStore({ reducer: { billPay: billPaySlice.reducer } });
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('fetchBillPays dispatches fulfilled action on success', async () => {
    const bills = [{ id: 1, name: 'Electric' }];
    mockAxios.onGet('/api/billpays').reply(200, bills);
    await store.dispatch(fetchBillPays());
    const state = store.getState().billPay;
    expect(state.billPays).toEqual(bills);
    expect(state.status).toBe('succeeded');
  });

  test('fetchBillPays dispatches rejected action on failure', async () => {
    mockAxios.onGet('/api/billpays').networkError();
    await store.dispatch(fetchBillPays());
    const state = store.getState().billPay;
    expect(state.status).toBe('failed');
    expect(state.error).toBeDefined();
  });

  test('addBillPay dispatches fulfilled action on success', async () => {
    const newBill = { id: 2, name: 'Water' };
    mockAxios.onPost('/api/billpays').reply(200, newBill);
    await store.dispatch(addBillPay(newBill));
    const state = store.getState().billPay;
    expect(state.billPays).toContainEqual(newBill);
  });

  test('initial state is correct', () => {
    const state = store.getState().billPay;
    expect(state.billPays).toEqual([]);
    expect(state.status).toBe('idle');
    expect(state.error).toBeNull();
  });

  test('loading state is set correctly when fetchBillPays is pending', () => {
    store.dispatch(fetchBillPays.pending());
    const state = store.getState().billPay;
    expect(state.status).toBe('loading');
  });
});