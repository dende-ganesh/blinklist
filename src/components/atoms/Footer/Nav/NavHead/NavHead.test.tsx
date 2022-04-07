import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import NavHead from "./NavHead";

test(" to check NavHead name ", () => {
  render(<NavHead name={"NavHead"}></NavHead>);
  const subtitleElement = screen.getByText(/NavHead/i);
  expect(subtitleElement).toBeInTheDocument();
});
