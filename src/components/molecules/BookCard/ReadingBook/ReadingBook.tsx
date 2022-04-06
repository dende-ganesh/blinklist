import * as React from "react";
import DefaultBookCard from "../DefaultBook/DefaultBookCard";

export interface IReadingBookProps {
  children: React.ReactNode;
  image: string;
  title: string;
  author: string;
  time: string;
  reads?: string;
}

export default function ReadingBook(props: IReadingBookProps) {
  return <DefaultBookCard {...props}>{props.children}</DefaultBookCard>;
}
