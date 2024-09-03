import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TransactionForm from '../TransactionForm';
import { Formik } from 'formik';

describe('TransactionForm', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<TransactionForm onSubmit={jest.fn()} />);
    expect(getByLabelText(/Account ID/i)).toBeInTheDocument();
    expect(getByLabelText(/Card Number/i)).toBeInTheDocument();
    expect(getByLabelText(/Type Code/i)).toBeInTheDocument();
    expect(getByLabelText(/Category Code/i)).toBeInTheDocument();
    expect(getByLabelText(/Source/i)).toBeInTheDocument();
    expect(getByLabelText(/Description/i)).toBeInTheDocument();
    expect(getByLabelText(/Amount/i)).toBeInTheDocument();
    expect(getByLabelText(/Orig Date/i)).toBeInTheDocument();
    expect(getByLabelText(/Proc Date/i)).toBeInTheDocument();
    expect(getByLabelText(/Merchant ID/i)).toBeInTheDocument();
    expect(getByLabelText(/Merchant Name/i)).toBeInTheDocument();
    expect(getByLabelText(/Merchant City/i)).toBeInTheDocument();
    expect(getByLabelText(/Merchant Zip/i)).toBeInTheDocument();
  });

  it('submits the form with all fields filled', () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<TransactionForm onSubmit={onSubmit} />);
    fireEvent.change(getByLabelText(/Account ID/i), { target: { value: '12345' } });
    fireEvent.change(getByLabelText(/Card Number/i), { target: { value: '54321' } });
    fireEvent.change(getByLabelText(/Amount/i), { target: { value: '100.00' } });
    fireEvent.change(getByLabelText(/Orig Date/i), { target: { value: '2023-01-01' } });
    fireEvent.change(getByLabelText(/Proc Date/i), { target: { value: '2023-01-02' } });
    fireEvent.click(getByText(/Submit/i));
    expect(onSubmit).toHaveBeenCalled();
  });

  it('validates required fields', () => {
    const { getByText, getAllByText } = render(<TransactionForm onSubmit={jest.fn()} />);
    fireEvent.click(getByText(/Submit/i));
    expect(getAllByText(/Required/i)).toHaveLength(14);
  });

  it('displays error message for invalid card number', () => {
    const { getByLabelText, getByText } = render(<TransactionForm onSubmit={jest.fn()} />);
    fireEvent.change(getByLabelText(/Card Number/i), { target: { value: 'abc' } });
    fireEvent.click(getByText(/Submit/i));
    expect(getByText(/Must be numeric/i)).toBeInTheDocument();
  });

  it('displays error message for invalid amount', () => {
    const { getByLabelText, getByText } = render(<TransactionForm onSubmit={jest.fn()} />);
    fireEvent.change(getByLabelText(/Amount/i), { target: { value: '12.345' } });
    fireEvent.click(getByText(/Submit/i));
    expect(getByText(/Must be a valid amount/i)).toBeInTheDocument();
  });
});