import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TransactionPage from '../pages/TransactionPage';
import { fetchTransactions } from '../redux/slices/transactionSlice';
import configureStore from 'redux-mock-store';
import { initialState } from '../redux/store';

const mockStore = configureStore([]);

describe('TransactionPage', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      transaction: {
        transactions: [],
        status: 'idle',
        error: null
      }
    });
    store.dispatch = jest.fn();
  });

  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <TransactionPage />
      </Provider>
    );
    expect(screen.getByText('Transactions')).toBeInTheDocument();
  });

  test('dispatches fetchTransactions on initial render if status is idle', () => {
    render(
      <Provider store={store}>
        <TransactionPage />
      </Provider>
    );
    expect(store.dispatch).toHaveBeenCalledWith(fetchTransactions());
  });

  test('shows loading state correctly', () => {
    store = mockStore({
      transaction: {
        transactions: [],
        status: 'loading',
        error: null
      }
    });
    render(
      <Provider store={store}>
        <TransactionPage />
      </Provider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays transactions when fetch is succeeded', () => {
    store = mockStore({
      transaction: {
        transactions: [{ id: 1, description: 'Test Transaction', amount: 100 }],
        status: 'succeeded',
        error: null
      }
    });
    render(
      <Provider store={store}>
        <TransactionPage />
      </Provider>
    );
    expect(screen.getByText('Test Transaction - $100')).toBeInTheDocument();
  });

  test('shows error message when fetch fails', () => {
    store = mockStore({
      transaction: {
        transactions: [],
        status: 'failed',
        error: 'Error fetching transactions'
      }
    });
    render(
      <Provider store={store}>
        <TransactionPage />
      </Provider>
    );
    expect(screen.getByText('Error fetching transactions')).toBeInTheDocument();
  });
});