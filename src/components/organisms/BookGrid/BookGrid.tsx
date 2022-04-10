import Grid from "@mui/material/Grid";
import React from "react";
import ReadingBook from "../../molecules/BookCard/ReadingBook/ReadingBook";

export interface IBookGridProps {
  btn: React.ReactElement;
  bookList: {
    title: string;
    author: string;
    time: string;
    image: string;
    reads?: string;
  }[];
}

export default function BookGrid(props: IBookGridProps) {
  const books = props.bookList.map((book) => {
    return (
      <Grid item sx={{ width: "28%" }}>
        <ReadingBook
          key={book.title}
          title={book.title}
          author={book.author}
          time={book.time}
          image={book.image}
          reads={book.reads}
        >
          {React.cloneElement(props.btn, { id: book.title, value: "high" })}
        </ReadingBook>
      </Grid>
    );
  });
  return (
    <Grid
      container
      item
      sx={{ marginLeft: "100px" }}
      spacing={2}
      data-testid="bookGrid"
    >
      {books}
    </Grid>
  );
}
