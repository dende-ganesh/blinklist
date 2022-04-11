import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import CurrentlyReadingGrid from "./CurrentlyReadingGrid";
beforeEach(() => {
  const el = jest.mock("../../../__mocks__/axios");
  console.log(el);
});
test("to check currently reading grid ", async () => {
  render(<CurrentlyReadingGrid />);

  const bookElement = await screen.findAllByRole("button", {
    name: "Finished",
  });
  expect(bookElement).toBeInTheDocument();
});
