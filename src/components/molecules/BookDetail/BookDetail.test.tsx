import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import BookDetail from "./BookDetail";
import { BrowserRouter } from "react-router-dom";
const MockBookDetail = () => {
  return (
    <BrowserRouter>
      <BookDetail />
    </BrowserRouter>
  );
};
test("to check book detail ", () => {
  render(<MockBookDetail />);
  const bookDetail = screen.getByTestId("bookDetail");
  expect(bookDetail).toBeInTheDocument();
});
test("to check book detail ", () => {
  render(<MockBookDetail />);
  const finishedReading = screen.getByRole("button", {
    name: "Finished Reading",
  });
  fireEvent.click(finishedReading);
  expect(finishedReading).toBeInTheDocument();
});
