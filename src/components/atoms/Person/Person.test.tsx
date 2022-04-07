import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import Person from "./Person";

test(" to check  Person logo ", () => {
  render(<Person />);
  const element = screen.getByTestId("personLogo");
  expect(element).toBeInTheDocument();
});
