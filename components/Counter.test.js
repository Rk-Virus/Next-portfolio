import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders Counter component', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/count/i);
    expect(counterElement).toBeInTheDocument();
});

test('increments counter on button click', () => {
    render(<Counter />);
    const buttonElement = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(buttonElement);
    const countElement = screen.getByText(/count: 1/i);
    expect(countElement).toBeInTheDocument();
});

test('decrements counter on button click', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(incrementButton);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    fireEvent.click(decrementButton);
    const countElement = screen.getByText(/count: 0/i);
    expect(countElement).toBeInTheDocument();
});