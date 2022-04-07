import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import React from "react";
import ExploreMenuItem from "./ExploreMenuItem";
const fakeProps = {
  startIcon: <RocketLaunchOutlinedIcon />,
  handleChange: jest.fn(),
};

test(" to check ExploreMenu ", () => {
  render(
    <ExploreMenuItem
      starticon={fakeProps.startIcon}
      handleChange={fakeProps.handleChange}
    >
      Entrepreneurship
    </ExploreMenuItem>
  );
  const subtitleElement = screen.getByTestId("exploreMenuItem");
  expect(subtitleElement).toBeInTheDocument();
});
test(" to check ExploreMenu ", () => {
  render(
    <ExploreMenuItem
      starticon={fakeProps.startIcon}
      handleChange={fakeProps.handleChange}
    >
      Entrepreneurship
    </ExploreMenuItem>
  );
  const subtitleElement = screen.getByTestId("exploreMenuItem");
  fireEvent.click(subtitleElement);
  expect(subtitleElement).toBeInTheDocument();
});
