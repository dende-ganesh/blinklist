import { NavigateNextTwoTone } from "@mui/icons-material";
import MyLibrary from "../../atoms/MyLibrary/MyLibrary";
import { featured, justAdded, trending } from "../../db";
import AddToLibrary from "../../molecules/BookCard/AddToLibrary/AddToLibrary";
import BookGrid from "../BookGrid/BookGrid";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function TrendingGrid() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/bookdetailpage");
  };
  const [trending, setTrendingBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/trending").then((res) => {
      const data = res.data;
      console.log(data);
      setTrendingBooks(data);
    });
  }, []);
  const [justAdded, setjustAddedBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/justAdded").then((res) => {
      const data = res.data;
      console.log(data);
      setjustAddedBooks(data);
    });
  }, []);
  const [featured, setfeaturedBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/featured").then((res) => {
      const data = res.data;
      console.log(data);
      setfeaturedBooks(data);
    });
  }, []);

  return (
    <div>
      <MyLibrary>Trending Blinks</MyLibrary>
      <BookGrid
        bookList={trending}
        btn={<AddToLibrary handleClick={handleClick} />}
      ></BookGrid>
      <MyLibrary>Just added</MyLibrary>
      <BookGrid
        bookList={justAdded}
        btn={<AddToLibrary handleClick={handleClick} />}
      ></BookGrid>
      <MyLibrary>Featured</MyLibrary>
      <BookGrid
        bookList={featured}
        btn={<AddToLibrary handleClick={handleClick} />}
      ></BookGrid>
    </div>
  );
}
export default TrendingGrid;
