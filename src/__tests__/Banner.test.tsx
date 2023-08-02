import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Banner from '../Banner';

test('My TODO list', () => {
  render(<Banner />);
  const linkElement = screen.getByText(/My TODO list/i);
  expect(linkElement).toBeInTheDocument();
});

describe('The image component', () => {
  test('alt contains correct value', () => {
    render(<Banner />);
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("where is my?");
  })

  test('src contains correct value', () => {
    render(<Banner />);
    const testImage = document.querySelector("img") as HTMLImageElement;
//    expect(testImage.src).toContain("./images/sticky-todo.jpg");
    expect(testImage.src).toContain("sticky-todo.jpg");
  })
});
