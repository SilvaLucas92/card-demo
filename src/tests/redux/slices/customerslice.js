import { fetchCustomers, addCustomer, customerSlice } from '../slices/customerslice';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('customerSlice async thunks', () => {
  let store;
  let mock;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        customer: customerSlice.reducer,
      },
    });
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  test('fetchCustomers dispatches fulfilled action on successful fetch', async () => {
    const customers = [{ id: 1, name: 'John Doe' }];
    mock.onGet('/api/customers').reply(200, customers);
    await store.dispatch(fetchCustomers());
    const state = store.getState().customer;
    expect(state.customers).toEqual(customers);
    expect(state.status).toBe('succeeded');
  });

  test('fetchCustomers dispatches rejected action on failure', async () => {
    mock.onGet('/api/customers').networkError();
    await store.dispatch(fetchCustomers());
    const state = store.getState().customer;
    expect(state.status).toBe('failed');
    expect(state.error).toBeDefined();
  });

  test('addCustomer dispatches fulfilled action on successful addition', async () => {
    const newCustomer = { name: 'Jane Doe' };
    const addedCustomer = { id: 2, name: 'Jane Doe' };
    mock.onPost('/api/customers', newCustomer).reply(200, addedCustomer);
    await store.dispatch(addCustomer(newCustomer));
    const state = store.getState().customer;
    expect(state.customers).toContainEqual(addedCustomer);
  });

  test('customerSlice initial state is correct', () => {
    const state = store.getState().customer;
    expect(state.customers).toEqual([]);
    expect(state.status).toBe('idle');
    expect(state.error).toBeNull();
  });

  test('fetchCustomers pending sets status to loading', async () => {
    mock.onGet('/api/customers').reply(() => {
      const state = store.getState().customer;
      expect(state.status).toBe('loading');
      return [200, []];
    });
    await store.dispatch(fetchCustomers());
  });
});