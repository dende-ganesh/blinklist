import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import ExploreHeader from "./ExploreHeader";

test(" to check ExploreHeader ", () => {
  render(<ExploreHeader />);
  const subtitleElement = screen.getByTestId("exploreHeader");
  expect(subtitleElement).toBeInTheDocument();
});
