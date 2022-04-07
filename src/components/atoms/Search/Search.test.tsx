import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import Search from "./Search";

test(" to check  Search logo ", () => {
  render(<Search />);
  const element = screen.getByTestId("searchIcon");
  expect(element).toBeInTheDocument();
});
