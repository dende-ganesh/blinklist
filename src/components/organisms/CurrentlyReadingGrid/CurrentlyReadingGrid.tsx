import axios from "axios";
import * as React from "react";
import { Finished } from "../../molecules/Finished/Finished";
import BookGrid from "../BookGrid/BookGrid";

export interface ICurrentlyReadingGridProps {}

export default function CurrentlyReadingGrid(
  props: ICurrentlyReadingGridProps
) {
  const [currentlyreading, setCurrentlyReadingBooks] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3000/books").then((res) => {
      const data = res.data;
      console.log(data);
      setCurrentlyReadingBooks(data);
    });
  }, []);
  const handleClick = (item: string) => {
    const reaminingBooks = currentlyreading.filter((reading: any) => {
      return reading.title !== item;
    });
    setCurrentlyReadingBooks(reaminingBooks);
    const targetBook: any = currentlyreading.find((reading: any) => {
      return reading.title === item;
    });
    axios.delete(`http://localhost:3000/books/${targetBook.id}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    axios
      .post("http://localhost:3000/finishedbooks", targetBook)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <BookGrid
      bookList={currentlyreading}
      btn={<Finished id="" handleClick={handleClick} />}
    />
  );
}
