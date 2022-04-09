import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ToggleTabs from "./ToggleTabs";
const fakeProps = {
  active: "synopsis",
  setActive: jest.fn(),
};
test("Toggle tabs", () => {
  render(
    <ToggleTabs
      active={fakeProps.active}
      setActive={fakeProps.setActive}
    ></ToggleTabs>
  );
  const synopsisElement = screen.getByText("Synopsis");
  expect(synopsisElement).toBeInTheDocument();
});
test("Toggle tabs", () => {
  render(
    <ToggleTabs
      active={fakeProps.active}
      setActive={fakeProps.setActive}
    ></ToggleTabs>
  );
  const synopsisElement = screen.getByText("Synopsis");
  fireEvent.click(synopsisElement);
  expect(synopsisElement).toBeInTheDocument();
});
fakeProps.active = "who";
test("Toggle tabs", () => {
  render(
    <ToggleTabs
      active={fakeProps.active}
      setActive={fakeProps.setActive}
    ></ToggleTabs>
  );
  const whoElement = screen.getByText("Who is it for");
  fireEvent.click(whoElement);
  expect(whoElement).toBeInTheDocument();
});
fakeProps.active = "author";
test("Toggle tabs", () => {
  render(
    <ToggleTabs
      active={fakeProps.active}
      setActive={fakeProps.setActive}
    ></ToggleTabs>
  );
  const aboutElement = screen.getByText("About the Author");
  fireEvent.click(aboutElement);

  expect(aboutElement).toBeInTheDocument();
});
