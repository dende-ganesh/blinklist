import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Library from "./components/pages/Library";
import Entrepreneur from "./components/pages/Entrepreneur";
import BookDetailsPage from "./components/pages/BookDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrentlyReadingGrid from "./components/organisms/CurrentlyReadingGrid/CurrentlyReadingGrid";
import FinishedReadingGrid from "./components/organisms/FinishedReadingGrid/FinishedReadingGrid";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
