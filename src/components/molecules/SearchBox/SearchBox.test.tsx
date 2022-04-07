import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { SearchBox } from "./SearchBox";
test("to check input element", () => {
  render(<SearchBox />);
  const inputElement = screen.getByPlaceholderText(
    /Search by title or author/i
  );
  expect(inputElement).toBeInTheDocument();
});
test("to check input element", () => {
  render(<SearchBox />);
  const inputElement = screen.getByPlaceholderText(
    /Search by title or author/i
  );
  fireEvent.click(inputElement);
  fireEvent.change(inputElement, {
    target: { value: "Beyond Entrepreneuship" },
  });
  expect((inputElement as HTMLInputElement).value).toBe(
    "Beyond Entrepreneuship"
  );
  expect(inputElement).toBeInTheDocument();
});
