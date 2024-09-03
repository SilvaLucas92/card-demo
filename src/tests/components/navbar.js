import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar component tests', () => {
  it('should render without crashing', () => {
    const { container } = render(<Router><Navbar /></Router>);
    expect(container).toBeTruthy();
  });

  it('should contain a Home link', () => {
    const { getByText } = render(<Router><Navbar /></Router>);
    expect(getByText('Home')).toBeInTheDocument();
  });

  it('should contain a Customers link', () => {
    const { getByText } = render(<Router><Navbar /></Router>);
    expect(getByText('Customers')).toBeInTheDocument();
  });

  it('should contain a Cards link', () => {
    const { getByText } = render(<Router><Navbar /></Router>);
    expect(getByText('Cards')).toBeInTheDocument();
  });

  it('should contain a Transactions link', () => {
    const { getByText } = render(<Router><Navbar /></Router>);
    expect(getByText('Transactions')).toBeInTheDocument();
  });

  it('should contain a Bill Pay link', () => {
    const { getByText } = render(<Router><Navbar /></Router>);
    expect(getByText('Bill Pay')).toBeInTheDocument();
  });
});