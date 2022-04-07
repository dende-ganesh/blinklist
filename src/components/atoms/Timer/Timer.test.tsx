import { render, screen } from "@testing-library/react";
import Timer from "./Timer";
import React from "react";
import "@testing-library/jest-dom";

test(" to check Timer name ", () => {
  render(<Timer>13-minutes read</Timer>);
  const bodyElement = screen.getByText(/13-minutes read/i);
  expect(bodyElement).toBeInTheDocument();
});
