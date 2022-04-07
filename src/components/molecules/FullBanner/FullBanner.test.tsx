import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import FullBanner from "./FullBanner";

test(" to check ExploreMenu ", () => {
  render(<FullBanner />);
  const fullBanner = screen.getByTestId("fullBanner");
  expect(fullBanner).toBeInTheDocument();
});
