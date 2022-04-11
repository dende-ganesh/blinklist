import Button from "@mui/material/Button";
import * as React from "react";
import DefaultBookCard from "../DefaultBook/DefaultBookCard";
import BookCard from "../DefaultBook/DefaultBookCard";

export interface IReadingBookProps {
  children: React.ReactNode;
  image: string;
  title: string;
  author: string;
  time: string;
  reads?: String;
}

export default function ReadingBook(props: IReadingBookProps) {
  return <DefaultBookCard {...props}>{props.children}</DefaultBookCard>;
}
