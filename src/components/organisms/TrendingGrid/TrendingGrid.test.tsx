import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import TrendingGrid from "./TrendingGrid";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../redux/store";
import { Provider } from "react-redux";
const MockTrendingGrid = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TrendingGrid />
      </BrowserRouter>
    </Provider>
  );
};
test("to check trending grid ", () => {
  render(<MockTrendingGrid />);
});
