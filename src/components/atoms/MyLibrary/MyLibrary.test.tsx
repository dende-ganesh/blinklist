import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import MyLibrary from "./MyLibrary";

test(" to check MyLibrary name ", () => {
  render(<MyLibrary>MyLibrary</MyLibrary>);
  const subtitleElement = screen.getByText(/MyLibrary/i);
  expect(subtitleElement).toBeInTheDocument();
});
