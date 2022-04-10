import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import FinishedReadingGrid from "./FinishedReadingGrid";
beforeEach(() => {
  jest.mock("../../../__mocks__/axios");
});
test("to check currently reading grid ", async () => {
  render(<FinishedReadingGrid />);

  // const bookElement = await screen.findAllByRole("button", {
  //   name: "Finished",
  // });
  // expect(bookElement).toBeInTheDocument();
});
