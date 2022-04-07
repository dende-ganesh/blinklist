import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import NavLinks3 from "./NavLinks3";

test(" to check ExploreMenu ", () => {
  render(<NavLinks3 />);
  const navLinks3 = screen.getByTestId("navlinks3");
  expect(navLinks3).toBeInTheDocument();
});
