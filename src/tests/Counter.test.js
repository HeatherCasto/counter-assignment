import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByText(/Count/i);
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const addButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(addButton);
  const countAfterIncrement = screen.getByTestId('count');
  expect(countAfterIncrement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const subtractButton = screen.getByRole('button', { name: '-' });
  fireEvent.click(subtractButton);
  const countAfterDecrement = screen.getByTestId('count');
  expect(countAfterDecrement).toHaveTextContent('-1');
});
