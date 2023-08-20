import React from "react";
import "../styles/MovieListPage.scss";
import MovieCard from "./MovieCards";

function MovieListPage() {
  return (
    <div className="movie-list">
      <MovieCard></MovieCard>
    </div>
  );
}

export default MovieListPage;
