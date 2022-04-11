import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { Finished } from "../../molecules/Finished/Finished";
import { ReadAgain } from "../../molecules/ReadAgain/ReadAgain";
import BookGrid from "../BookGrid/BookGrid";

export interface IFinshedReadingGridProps {}

export default function FinishedReadingGrid(props: IFinshedReadingGridProps) {
  const [finishedreading, setFinishedReadingBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/finishedbooks").then((res) => {
      const data = res.data;
      setFinishedReadingBooks(data);
    });
  }, []);
  const handleClick = (item: string) => {
    const reaminingBooks = finishedreading.filter((reading: any) => {
      return reading.title !== item;
    });
    setFinishedReadingBooks(reaminingBooks);
    const targetBook: any = finishedreading.find((reading: any) => {
      return reading.title === item;
    });
    axios
      .delete(`http://localhost:3000/finishedbooks/${targetBook.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });

    axios
      .post("http://localhost:3000/books", targetBook)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <BookGrid
      bookList={finishedreading}
      btn={<ReadAgain id="" handleClick={handleClick} />}
    ></BookGrid>
  );
}
