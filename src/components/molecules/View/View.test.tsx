import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import View from "./View";

test(" to check View ", () => {
  render(<View>13-minutes read</View>);
  const subtitleElement = screen.getByTestId("view");
  expect(subtitleElement).toBeInTheDocument();
});
