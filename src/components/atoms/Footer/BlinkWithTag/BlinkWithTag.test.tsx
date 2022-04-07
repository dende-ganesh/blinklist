import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import BlinkWithTag from "./BlinkWithTag";

test(" to check  footer  logo with tag ", () => {
  render(<BlinkWithTag />);
  const Element = screen.getByTestId("blinkWithTag");
  expect(Element).toBeInTheDocument();
});
