import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Outstanding Things to do', () => {
  render(<App />);
  const linkElement = screen.getByText(/Outstanding Things to do/i);
  console.log(linkElement);
//  expect(linkElement).toBeInTheDocument();
});
