import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Library from "./Entrepreneur";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

test("to check page rendered or not", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Library />)
      </BrowserRouter>
    </Provider>
  );
});
