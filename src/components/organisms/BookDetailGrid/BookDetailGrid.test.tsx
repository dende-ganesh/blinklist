import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import BookDetailGrid from "./BookDetailGrid";
import { BrowserRouter } from "react-router-dom";
const MockDetailGrid = () => {
  return (
    <BrowserRouter>
      <BookDetailGrid />
    </BrowserRouter>
  );
};
test("to check book detail toggle tab", () => {
  render(<MockDetailGrid />);
  const element = screen.getByTestId("bookDetailGrid");
  expect(element).toBeInTheDocument();
});

test("to check book detail toggle  content", () => {
  render(<MockDetailGrid />);
  const element = screen.getByTestId("toggleTabs");
  fireEvent.click(element);
  expect(element).toBeInTheDocument();
});
test("to check book detail toggle content", () => {
  render(<MockDetailGrid />);
  const element = screen.getByTestId("toggleContent");
  expect(element).toBeInTheDocument();
});
