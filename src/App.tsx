import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Entrepreneur from "./components/pages/Entrepreneur/Entrepreneur";
import BookDetailsPage from "./components/pages/BookDetailsPage/BookDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrentlyReadingGrid from "./components/organisms/CurrentlyReadingGrid/CurrentlyReadingGrid";
import FinishedReadingGrid from "./components/organisms/FinishedReadingGrid/FinishedReadingGrid";
import Library from "./components/pages/Library/Library";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./components/pages/LoginPage/LoginPage";
function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return (
      <iframe
        src="https://gifer.com/embed/7pld"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    );
  }
  if (isAuthenticated) {
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
                <Route
                  path="finishedreading"
                  element={<FinishedReadingGrid />}
                />
              </Route>
              <Route path="/explore" element={<Entrepreneur />} />
              <Route path="bookdetailpage" element={<BookDetailsPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    );
  }
}

export default App;
