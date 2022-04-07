import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import WithIcon from "./WithIcon";
test("check to find downarrow", () => {
  const fakeProps = {
    clickHandler: jest.fn(),
    clicked: false,
  };
  render(
    <WithIcon clickHandler={fakeProps.clickHandler} clicked={fakeProps.clicked}>
      Explore
    </WithIcon>
  );
  const linkElement = screen.getByTestId("downarrow");
  expect(linkElement).toBeInTheDocument();
});
test("check to find explore", () => {
  const fakeProps = {
    clickHandler: jest.fn(),
    clicked: false,
  };
  render(
    <WithIcon clickHandler={fakeProps.clickHandler} clicked={fakeProps.clicked}>
      Explore
    </WithIcon>
  );
  const linkElement = screen.getByTestId("explore");
  expect(linkElement.textContent).toBe("Explore");
});
test("check to find uparrow", () => {
  const fakeProps = {
    clickHandler: jest.fn(),
    clicked: true,
  };
  render(
    <WithIcon clickHandler={fakeProps.clickHandler} clicked={fakeProps.clicked}>
      Explore
    </WithIcon>
  );
  const exploreElement = screen.getByTestId("explore");
  fireEvent.click(exploreElement);
  const linkElement = screen.getByTestId("uparrow");
  expect(linkElement).toBeInTheDocument();
});
