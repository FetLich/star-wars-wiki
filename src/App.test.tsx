import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const header = screen.getByText(/Welcome To Star Wars Assignment Task!/i);
  expect(header).toBeInTheDocument();
});