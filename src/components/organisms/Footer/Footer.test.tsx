import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import React from "react";

test("to check footer ", () => {
  render(<Footer />);
  const FooterElement = screen.getByTestId("footer");
  expect(FooterElement).toBeInTheDocument();
});
