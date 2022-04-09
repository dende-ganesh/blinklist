import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import MyLibraryToggle from "./MyLibraryToggle";
import { BrowserRouter } from "react-router-dom";
const fakeProps = {
  active: "finished",
  setActive: jest.fn(),
};
const MockLibraryToggle = () => {
  return (
    <BrowserRouter>
      <MyLibraryToggle
        active={fakeProps.active}
        setActive={fakeProps.setActive}
      />
    </BrowserRouter>
  );
};
test(" to check MyLibraryToggle ", () => {
  render(<MockLibraryToggle />);
  const subtitleElement = screen.getByTestId("myLibraryToggle");
  expect(subtitleElement).toBeInTheDocument();
});
test(" to check MyLibraryToggle ", () => {
  render(<MockLibraryToggle />);
  const subtitleElement = screen.getByTestId("myLibraryToggle");
  fireEvent.click(subtitleElement);
  expect(subtitleElement).toBeInTheDocument();
});
test(" to check MyLibraryToggle ", () => {
  render(<MockLibraryToggle />);
  const subtitleElement = screen.getByTestId("finishedTab");
  fireEvent.click(subtitleElement);
  expect(subtitleElement).toBeInTheDocument();
});
