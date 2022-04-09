import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExploreCard from "./ExploreCard";
import React from "react";
const fakeProps = {
  handleChange: jest.fn(),
};
test("to check explore menu", () => {
  render(<ExploreCard handleChange={fakeProps.handleChange} />);
  const exploreCardElement = screen.getByTestId("exploreMenu");
  expect(exploreCardElement).toBeInTheDocument();
});
