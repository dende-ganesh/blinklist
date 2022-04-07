import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import AddToLibrary from "./AddToLibrary";

const fakeProps = {
  handleClick: jest.fn(),
};
test(" to check  AddToLibrary logo ", () => {
  render(<AddToLibrary handleClick={fakeProps.handleClick} />);
  const element = screen.getByTestId("addToLibrary");
  expect(element).toBeInTheDocument();
});
test(" to check  AddToLibrary logo ", () => {
  render(<AddToLibrary handleClick={fakeProps.handleClick} />);
  const element = screen.getByTestId("addToLibrary");
  fireEvent.click(element);
  expect(element).toBeInTheDocument();
});
