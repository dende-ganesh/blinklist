import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import ExploreContent from "./ExploreContent";

test(" to check Explorecontent name ", () => {
  render(<ExploreContent></ExploreContent>);
  const subtitleElement = screen.getByTestId("exploreContent");
  expect(subtitleElement).toBeInTheDocument();
});
