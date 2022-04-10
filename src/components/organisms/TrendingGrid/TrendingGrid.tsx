import MyLibrary from "../../atoms/MyLibrary/MyLibrary";
import AddToLibrary from "../../molecules/BookCard/AddToLibrary/AddToLibrary";
import BookGrid from "../BookGrid/BookGrid";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/dataReducer";
import { fetchBlink } from "../../../redux/dataActions";

function TrendingGrid() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlink());
  }, []);
  const currentState = useSelector((state: State) => {
    console.log(state);
    return state;
  });

  const [justAdded, setjustAddedBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/justAdded").then((res) => {
      const data = res.data;
      setjustAddedBooks(data);
    });
  }, []);
  const [featured, setfeaturedBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/featured").then((res) => {
      const data = res.data;
      setfeaturedBooks(data);
    });
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/bookdetailpage");
  };
  return (
    <div>
      <MyLibrary>Trending Blinks</MyLibrary>
      {currentState && !currentState.loading && (
        <BookGrid
          bookList={currentState.blinks}
          btn={<AddToLibrary handleClick={handleClick} />}
        ></BookGrid>
      )}
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
