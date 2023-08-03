import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Outstanding Things to do', () => {
  render(<App />);
//  console.log("screen is ");
//  console.log(screen);
  const linkElement = screen.getByText(/Outstanding Things to do/i);
//  console.log("linkElement is ");
//  console.log(linkElement);
  expect(linkElement).toBeInTheDocument();
//  expect(linkElement).toBeInTheDocument();
});

test('We have the app div element', async () => {
  const { findByTestId } = render(<App />);
  const appdivelement = await findByTestId("appdiv");
  expect(appdivelement).toBeInTheDocument();
});
