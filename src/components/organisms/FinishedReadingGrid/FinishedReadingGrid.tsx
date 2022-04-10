import axios from "axios";
import React, { useEffect, useState } from "react";
import { ReadAgain } from "../../molecules/ReadAgain/ReadAgain";
import BookGrid from "../BookGrid/BookGrid";

export default function FinishedReadingGrid() {
  const [finishedreading, setFinishedReadingBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/finishedbooks").then((res) => {
      const data = res.data;
      setFinishedReadingBooks(data);
    });
  }, []);
  const handleClick = async (item: string) => {
    const reaminingBooks = finishedreading.filter((reading: any) => {
      return reading.title !== item;
    });
    setFinishedReadingBooks(reaminingBooks);
    const targetBook: any = finishedreading.find((reading: any) => {
      return reading.title === item;
    });
    await axios
      .delete(`http://localhost:3001/finishedbooks/${targetBook.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });

    await axios
      .post("http://localhost:3001/books", targetBook)
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
