import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Library from "./Library";
import { BrowserRouter } from "react-router-dom";
test("to check page rendered or not", () => {
  render(
    <BrowserRouter>
      <Library />
    </BrowserRouter>
  );
});
