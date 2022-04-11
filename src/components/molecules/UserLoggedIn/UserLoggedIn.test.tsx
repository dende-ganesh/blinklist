import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import UserLoggedIn from "./UserLoggedIn";
const fakeProps = {
  logClick: true,
  handleLogin: jest.fn(),
};

test(" to check UserLoggedIn ", () => {
  render(
    <UserLoggedIn
      logClick={fakeProps.logClick}
      handleLogin={fakeProps.handleLogin}
    />
  );
  const subtitleElement = screen.getByTestId("userLoggedIn");
  fireEvent.click(subtitleElement);
  expect(subtitleElement).toBeInTheDocument();
});
test(" to check UserLoggedIn ", () => {
  render(
    <UserLoggedIn
      logClick={fakeProps.logClick}
      handleLogin={fakeProps.handleLogin}
    />
  );
  const LogOutElement = screen.queryByRole("button", { name: "LogOut" });
  expect(LogOutElement).not.toBe(null);
});
fakeProps.logClick = false;
test(" to check UserLoggedIn ", () => {
  render(
    <UserLoggedIn
      logClick={fakeProps.logClick}
      handleLogin={fakeProps.handleLogin}
    />
  );
  const subtitleElement = screen.getByTestId("userLoggedIn");
  fireEvent.click(subtitleElement);
  const subtitleElemen = screen.getByRole("button", { name: "LogOut" });
  fireEvent.click(subtitleElemen);
  expect(subtitleElemen).toBeInTheDocument();
});
