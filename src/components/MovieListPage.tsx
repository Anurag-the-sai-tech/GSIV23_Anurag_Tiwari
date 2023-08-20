import React, { useEffect } from "react";
import "../styles/MovieListPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreState } from "../features/redux/store/store";
import { getUpcomingMovies } from "../features/redux/reducers/moviesReducer";
import Pagination from "../features/pagination/pagination";
import MovieCards from "./MovieCards";
import MovieIcon from "@mui/icons-material/Movie";

function MovieListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading } = useSelector((state: StoreState) => state.movies);

  useEffect(() => {
    dispatch(getUpcomingMovies(1));
  }, [dispatch]);

  const allMovies = Object.keys(movies).length <= 0 ? [] : movies.results;
  const movieCards = allMovies.map((movie, index) => (
    <MovieCards
      key={index}
      id={movie.id}
      imgUrl={
        movie.poster_path ? (
          `https://image.tmdb.org/t/p/w200${movie.poster_path}`
        ) : (
          <MovieIcon />
        )
      }
      title={movie.title}
      description={movie.overview}
      rating={movie.vote_average}
    />
  ));

  const AllCards = () => (
    <>
      <div className="movie-list">{movieCards}</div>
      {movies.total_pages && movies.total_pages > 1 && (
        <div>
          <Pagination
            totalPages={movies.total_pages}
            initialPage={movies.page}
          />
        </div>
      )}
    </>
  );

  return <AllCards />;
}

export default MovieListPage;
