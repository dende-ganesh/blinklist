import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import BookTitle from "./BookTitle";

test(" to check BookTitle name ", () => {
  render(<BookTitle>booktitle</BookTitle>);
  const subtitleElement = screen.getByText(/booktitle/i);
  expect(subtitleElement).toBeInTheDocument();
});
