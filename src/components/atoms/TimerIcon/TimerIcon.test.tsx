import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import TimerIcon from "./TimerIcon";

test(" to check  TimerIcon logo ", () => {
  render(<TimerIcon />);
  const element = screen.getByTestId("timerIcon");
  expect(element).toBeInTheDocument();
});
