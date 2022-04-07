import { render, screen } from "@testing-library/react";
import Author from "./Author";
import React from "react";
import "@testing-library/jest-dom";

test(" to check author name ", () => {
  render(<Author>hello</Author>);
  const bodyElement = screen.getByText(/hello/i);
  expect(bodyElement).toBeInTheDocument();
});
