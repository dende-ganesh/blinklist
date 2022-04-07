import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import Banner from "./Banner";

test(" to check  Banner logo ", () => {
  render(<Banner />);
  const element = screen.getByTestId("banner");
  expect(element).toBeInTheDocument();
});
