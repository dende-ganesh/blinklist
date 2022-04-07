import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import ExploreTitle from "./ExploreTitle";

test(" to check BookTitle name ", () => {
  render(<ExploreTitle />);
  const subtitleElement = screen.getByText(
    /Explore Books on entrepreneurship/i
  );
  expect(subtitleElement).toBeInTheDocument();
});
