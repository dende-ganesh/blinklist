import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import BookDetail from "./BookDetail";
import { BrowserRouter } from "react-router-dom";

const MaskBookDetail = () => {
  return (
    <BrowserRouter>
      <BookDetail />
    </BrowserRouter>
  );
};
test("book detail", () => {
  render(<MaskBookDetail />);
  const bookDetail = screen.getByTestId("bookdetail");
  expect(bookDetail).toBeInTheDocument();
});
test("button finish", () => {
  render(<MaskBookDetail />);
  const finished = screen.getByRole("button", { name: "Finished Reading" });
  fireEvent.click(finished);
  expect(finished).toBeInTheDocument();
});
