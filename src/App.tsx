import { ThemeProvider } from "@emotion/react";
import MyLibrary from "./components/atoms/MyLibrary/MyLibrary";
import BookCard from "./components/molecules/BookCard/DefaultBook/DefaultBookCard";
import Headers from "./components/organisms/Headers/Headers";
import baseTheme from "./theme";
import { books, finishedbooks } from "./components/db";
import BookGrid from "./components/organisms/BookGrid/BookGrid";
import Template from "./components/template";
import Library from "./components/pages/Library";
import ExploreHeader from "./components/molecules/ExploreHeader/ExploreHeader";
import ExploreMenuItem from "./components/molecules/ExploreMenu/ExploreMenuItem";
import Entrepreneur from "./components/pages/Entrepreneur";
import BookDetailsPage from "./components/pages/BookDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CurrentlyReadingGrid from "./components/organisms/CurrentlyReadingGrid/CurrentlyReadingGrid";
import FinishedReadingGrid from "./components/organisms/FinishedReadingGrid/FinishedReadingGrid";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={baseTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Library />}>
              <Route index element={<CurrentlyReadingGrid />} />
              <Route
                path="currentlyreading"
                element={<CurrentlyReadingGrid />}
              />
              <Route path="finishedreading" element={<FinishedReadingGrid />} />
            </Route>
            <Route path="/explore" element={<Entrepreneur />} />
            <Route path="bookdetailpage" element={<BookDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
