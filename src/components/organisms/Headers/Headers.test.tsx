import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Headers from "./Headers";
import React from "react";
import { BrowserRouter } from "react-router-dom";
const fakeProps = {
  clicked: true,
  handleChange: jest.fn(),
};
const MockHeader = () => {
  return (
    <BrowserRouter>
      <Headers />
    </BrowserRouter>
  );
};
test("to check Header ", () => {
  render(<MockHeader />);
  const HeaderElement = screen.getByTestId("header");
  expect(HeaderElement).toBeInTheDocument();
});
test("to check explore popup", () => {
  render(<MockHeader />);
  const exploreCard = screen.getByTestId("exploreCardHidden");
  expect(exploreCard).toBeInTheDocument();
});
fakeProps.clicked = false;
test("to check explore popup", () => {
  render(<MockHeader />);
  const exploreCard = screen.getByTestId("exploreCardHidden");
  expect(exploreCard).not.toBeVisible();
});
