import { render, screen } from "@testing-library/react";
import { books } from "../../db";
import "@testing-library/jest-dom";
import React from "react";
import { Finished } from "../../molecules/Finished/Finished";
import BookGrid from "./BookGrid";
const fakeProps = {
  btn: (
    <Finished
      handleClick={(e) => {
        alert(e);
      }}
      id={""}
    ></Finished>
  ),
  bookList: books,
};
test("to check book Grid", () => {
  render(<BookGrid btn={fakeProps.btn} bookList={fakeProps.bookList} />);
  const bookGrid = screen.getByTestId("bookGrid");
  expect(bookGrid).toBeInTheDocument();
});
