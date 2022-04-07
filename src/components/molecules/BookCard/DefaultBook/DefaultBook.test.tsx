import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DefaultBookCard from "./DefaultBookCard";

const fakeProps = {
  title: "Beyond Entrepreneurship",
  author: "Jim Collins & Bill Lazier",
  time: "13 minutes read",
  reads: "1.9k reads",
  image: "2",
};
test(" to check  DefaultBookCard logo ", () => {
  render(
    <DefaultBookCard
      title={fakeProps.title}
      image={fakeProps.image}
      author={fakeProps.author}
      time={fakeProps.time}
    >
      ReadAgain
    </DefaultBookCard>
  );
  const element = screen.getByTestId("defaultBookCard");
  expect(element).toBeInTheDocument();
});
test(" to check  DefaultBookCard  ", () => {
  render(
    <DefaultBookCard
      title={fakeProps.title}
      image={fakeProps.image}
      author={fakeProps.author}
      time={fakeProps.time}
    ></DefaultBookCard>
  );
  const element = screen.queryByTestId("readAgain");
  expect(element).not.toBeInTheDocument();
});
test(" to check  DefaultBookCard  ", () => {
  render(
    <DefaultBookCard
      title={fakeProps.title}
      image={fakeProps.image}
      author={fakeProps.author}
      time={fakeProps.time}
      reads={fakeProps.reads}
    >
      Read Again
    </DefaultBookCard>
  );
  const element = screen.queryByTestId("noOfReads");
  expect(element).not.toBeInTheDocument();
});
