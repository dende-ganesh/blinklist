import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import User from "./User";

test(" to check  footer  logo with tag ", () => {
  render(<User />);
  const Element = screen.getByTestId("User");
  expect(Element).toBeInTheDocument();
});
