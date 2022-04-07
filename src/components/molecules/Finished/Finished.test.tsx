import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import React from "react";
import { Finished } from "./Finished";
const fakeProps = {
  id: "name",

  handleClick: jest.fn(),
};

test(" to check Finished ", () => {
  render(<Finished id={fakeProps.id} handleClick={fakeProps.handleClick} />);
  const subtitleElement = screen.getByRole("button", { name: "Finished" });
  expect(subtitleElement).toBeInTheDocument();
});
test(" to check Finished ", () => {
  render(<Finished id={fakeProps.id} handleClick={fakeProps.handleClick} />);
  const subtitleElement = screen.getByRole("button", { name: "Finished" });
  fireEvent.click(subtitleElement);
  expect(subtitleElement).toBeInTheDocument();
});
