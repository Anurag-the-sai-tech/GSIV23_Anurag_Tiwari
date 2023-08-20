import React, { useEffect } from "react";
import "../styles/MovieListPage.scss";
import MovieCard from "./MovieCards";
import { getUpcomingMoviesApi } from "../features/api/getUpcomingMoviesApi";

function MovieListPage() {
  return (
    <div className="movie-list">
      <MovieCard></MovieCard>
    </div>
  );
}

export default MovieListPage;
