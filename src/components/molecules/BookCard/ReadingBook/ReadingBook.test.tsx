import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReadingBook from "./ReadingBook";

const fakeProps = {
  title: "Beyond Entrepreneurship",
  author: "Jim Collins & Bill Lazier",
  time: "13 minutes read",
  reads: "1.9k reads",
  image: "2",
};
test(" to check  ReadingBook logo ", () => {
  render(
    <ReadingBook
      title={fakeProps.title}
      image={fakeProps.image}
      author={fakeProps.author}
      time={fakeProps.time}
      reads={fakeProps.reads}
    >
      Finished
    </ReadingBook>
  );
  const element = screen.getByTestId("readingBook");
  expect(element).toBeInTheDocument();
});
