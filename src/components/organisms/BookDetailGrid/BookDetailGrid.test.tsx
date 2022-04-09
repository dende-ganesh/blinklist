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
