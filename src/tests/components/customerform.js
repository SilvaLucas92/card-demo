import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CustomerForm from '../components/CustomerForm';
import { Formik } from 'formik';

describe('CustomerForm', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<CustomerForm onSubmit={jest.fn()} />);
    expect(getByLabelText(/Customer ID/i)).toBeInTheDocument();
    expect(getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(getByLabelText(/SSN/i)).toBeInTheDocument();
    expect(getByLabelText(/Submit/i)).toBeInTheDocument();
  });

  it('allows form submission when fields are valid', async () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<CustomerForm onSubmit={onSubmit} />);
    fireEvent.change(getByLabelText(/Customer ID/i), { target: { value: '12345' } });
    fireEvent.change(getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText(/SSN/i), { target: { value: '987654321' } });
    fireEvent.click(getByText(/Submit/i));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      customerId: '12345',
      firstName: 'John',
      lastName: 'Doe',
      ssn: '987654321',
    }, expect.anything()));
  });

  it('validates customer ID as required', async () => {
    const { getByText, getByLabelText } = render(<CustomerForm onSubmit={jest.fn()} />);
    fireEvent.click(getByText(/Submit/i));
    await waitFor(() => expect(getByText(/Required/i)).toBeInTheDocument());
    fireEvent.change(getByLabelText(/Customer ID/i), { target: { value: '12345' } });
    fireEvent.click(getByText(/Submit/i));
    await waitFor(() => expect(getByText(/Required/i)).not.toBeInTheDocument());
  });

  it('validates SSN format correctly', async () => {
    const { getByText, getByLabelText } = render(<CustomerForm onSubmit={jest.fn()} />);
    fireEvent.change(getByLabelText(/SSN/i), { target: { value: 'abc' } });
    fireEvent.click(getByText(/Submit/i));
    await waitFor(() => expect(getByText(/Must be 9 digits/i)).toBeInTheDocument());
    fireEvent.change(getByLabelText(/SSN/i), { target: { value: '987654321' } });
    fireEvent.click(getByText(/Submit/i));
    await waitFor(() => expect(getByText(/Must be 9 digits/i)).not.toBeInTheDocument());
  });

  it('disables submit button while submitting', async () => {
    const { getByText } = render(<CustomerForm onSubmit={() => {
      return new Promise(resolve => setTimeout(resolve, 500));
    }} />);
    fireEvent.click(getByText(/Submit/i));
    expect(getByText(/Submit/i)).toBeDisabled();
  });
});