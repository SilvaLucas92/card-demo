import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import BillPayForm from '../components/BillPayForm';
import { Formik } from 'formik';

describe('BillPayForm', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<BillPayForm onSubmit={jest.fn()} />);
    expect(getByLabelText(/Account ID/i)).toBeInTheDocument();
    expect(getByLabelText(/Amount/i)).toBeInTheDocument();
    expect(getByLabelText(/Description/i)).toBeInTheDocument();
  });

  it('submits the form with accountId, amount, and description', async () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<BillPayForm onSubmit={handleSubmit} />);
    
    fireEvent.change(getByLabelText(/Account ID/i), { target: { value: '12345' } });
    fireEvent.change(getByLabelText(/Amount/i), { target: { value: '100' } });
    fireEvent.change(getByLabelText(/Description/i), { target: { value: 'Utility Bill' } });
    fireEvent.click(getByText(/Submit/i));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        accountId: '12345',
        amount: 100,
        description: 'Utility Bill',
      }, expect.anything());
    });
  });

  it('shows validation errors when fields are empty', async () => {
    const { getByText, getByLabelText } = render(<BillPayForm onSubmit={jest.fn()} />);
    fireEvent.click(getByText(/Submit/i));

    await waitFor(() => {
      expect(getByText(/Required/i)).toBeInTheDocument();
    });
  });

  it('does not submit the form when amount is negative', async () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<BillPayForm onSubmit={handleSubmit} />);
    
    fireEvent.change(getByLabelText(/Amount/i), { target: { value: '-50' } });
    fireEvent.click(getByText(/Submit/i));

    await waitFor(() => {
      expect(handleSubmit).not.toHaveBeenCalled();
      expect(getByText(/Amount must be positive/i)).toBeInTheDocument();
    });
  });

  it('enables the submit button only when form is valid', async () => {
    const { getByLabelText, getByText } = render(<BillPayForm onSubmit={jest.fn()} />);
    
    fireEvent.change(getByLabelText(/Account ID/i), { target: { value: '12345' } });
    fireEvent.change(getByLabelText(/Amount/i), { target: { value: '100' } });
    fireEvent.change(getByLabelText(/Description/i), { target: { value: 'Utility Bill' } });

    await waitFor(() => {
      expect(getByText(/Submit/i)).not.toBeDisabled();
    });
  });
});