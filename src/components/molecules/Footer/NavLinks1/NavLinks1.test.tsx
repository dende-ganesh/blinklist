import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import NavLinks1 from "./NavLinks1";

test(" to check ExploreMenu ", () => {
  render(<NavLinks1 />);
  const navLinks1 = screen.getByTestId("navlinks1");
  expect(navLinks1).toBeInTheDocument();
});
