import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import DisplayTime from "./DisplayTime";

test(" to check DisplayTime ", () => {
  render(<DisplayTime>13-minutes read</DisplayTime>);
  const subtitleElement = screen.getByText(/13-minutes read/i);
  expect(subtitleElement).toBeInTheDocument();
});
