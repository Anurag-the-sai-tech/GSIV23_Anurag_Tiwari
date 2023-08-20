import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import MovieListPage from "./components/MovieListPage";
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MovieListPage />}></Route>
        <Route path="/details" element={<MovieDetails />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
