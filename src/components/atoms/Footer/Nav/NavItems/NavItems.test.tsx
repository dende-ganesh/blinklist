import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import NavItems from "./NavItems";

test(" to check NavItems name ", () => {
  render(<NavItems name={"NavItems"}></NavItems>);
  const Element = screen.getByText(/NavItems/i);
  expect(Element).toBeInTheDocument();
});
