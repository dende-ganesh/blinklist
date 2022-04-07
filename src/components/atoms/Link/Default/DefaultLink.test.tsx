import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DefaultLink from "./DefaultLink";
import React from "react";
test("to ckeck  link", () => {
  render(
    <DefaultLink
      clickHandler={function (): void {
        throw new Error("Function not implemented.");
      }}
    >
      My Library
    </DefaultLink>
  );
  const MyLibraryLink = screen.getByText(/My Library/i);
  expect(MyLibraryLink).toBeInTheDocument();
});
