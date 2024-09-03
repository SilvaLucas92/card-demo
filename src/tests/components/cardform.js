import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CardForm from '../components/CardForm';
import { Formik } from 'formik';

describe('CardForm', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<CardForm onSubmit={() => {}} />);
    expect(getByLabelText(/Card Number/i)).toBeInTheDocument();
    expect(getByLabelText(/Card Holder Name/i)).toBeInTheDocument();
    expect(getByLabelText(/Expiration Date/i)).toBeInTheDocument();
    expect(getByLabelText(/Card Type/i)).toBeInTheDocument();
  });

  it('submits the form with all fields filled', async () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<CardForm onSubmit={handleSubmit} />);
    
    fireEvent.change(getByLabelText(/Card Number/i), { target: { value: '1234567890123456' } });
    fireEvent.change(getByLabelText(/Card Holder Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText(/Expiration Date/i), { target: { value: '2025-12' } });
    fireEvent.change(getByLabelText(/Card Type/i), { target: { value: 'Visa' } });
    fireEvent.click(getByText(/Submit/i));

    await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith({
      cardNumber: '1234567890123456',
      cardHolderName: 'John Doe',
      expirationDate: '2025-12',
      cardType: 'Visa',
    }, expect.anything()));
  });

  it('shows validation errors for empty fields', async () => {
    const { getByText, findAllByText } = render(<CardForm onSubmit={() => {}} />);
    fireEvent.click(getByText(/Submit/i));

    const errors = await findAllByText(/Required/i);
    expect(errors).toHaveLength(4); // Expecting four error messages for four required fields
  });

  it('validates card number field correctly', () => {
    const { getByLabelText, getByText } = render(<CardForm onSubmit={() => {}} />);
    fireEvent.change(getByLabelText(/Card Number/i), { target: { value: '123' } });
    fireEvent.blur(getByLabelText(/Card Number/i));

    expect(getByText(/Card number must be 16 digits/i)).toBeInTheDocument();
  });

  it('disables submit button while submitting', () => {
    const { getByText } = render(<CardForm onSubmit={() => {}} />);
    expect(getByText(/Submit/i)).toBeDisabled();
  });
});