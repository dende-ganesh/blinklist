import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import UserLoggedIn from "./UserLoggedIn";

test(" to check UserLoggedIn ", () => {
  render(<UserLoggedIn />);
  const subtitleElement = screen.getByTestId("userLoggedIn");
  expect(subtitleElement).toBeInTheDocument();
});
