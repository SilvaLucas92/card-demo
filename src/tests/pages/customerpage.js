import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomerPage from '../pages/CustomerPage';
import { store } from '../redux/store';

describe('CustomerPage Component', () => {
  test('renders CustomerPage component', () => {
    render(
      <Provider store={store}>
        <CustomerPage />
      </Provider>
    );
    expect(screen.getByText('Customers')).toBeInTheDocument();
  });

  test('displays loading state correctly', () => {
    store.dispatch({ type: 'customer/fetchPending' });
    render(
      <Provider store={store}>
        <CustomerPage />
      </Provider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays list of customers when fetch is succeeded', () => {
    store.dispatch({
      type: 'customer/fetchFulfilled',
      payload: [{ id: 1, firstName: 'John', lastName: 'Doe' }]
    });
    render(
      <Provider store={store}>
        <CustomerPage />
      </Provider>
    );
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  test('displays error message when fetch is failed', () => {
    store.dispatch({
      type: 'customer/fetchFailed',
      error: 'Failed to fetch'
    });
    render(
      <Provider store={store}>
        <CustomerPage />
      </Provider>
    );
    expect(screen.getByText('Failed to fetch')).toBeInTheDocument();
  });

  test('submits form and handles submission state', async () => {
    render(
      <Provider store={store}>
        <CustomerPage />
      </Provider>
    );
    const submitButton = screen.getByRole('button', { name: /submit/i });
    userEvent.click(submitButton);
    expect(screen.getByText('Submitting...')).toBeInTheDocument();
    await screen.findByText('Submit Success');
  });
});