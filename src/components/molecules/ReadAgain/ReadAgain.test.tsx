import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ReadAgain } from "./ReadAgain";
const fakeProps = {
  id: "name",

  handleClick: jest.fn(),
};

test(" to check ReadAgain ", () => {
  render(<ReadAgain id={fakeProps.id} handleClick={fakeProps.handleClick} />);
  const subtitleElement = screen.getByRole("button", { name: "Read Again" });
  expect(subtitleElement).toBeInTheDocument();
});
test(" to check ReadAgain ", () => {
  render(<ReadAgain id={fakeProps.id} handleClick={fakeProps.handleClick} />);
  const subtitleElement = screen.getByRole("button", { name: "Read Again" });
  fireEvent.click(subtitleElement);
  expect(subtitleElement).toBeInTheDocument();
});
