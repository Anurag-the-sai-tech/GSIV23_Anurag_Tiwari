import React, { useEffect } from "react";
import "../styles/MovieDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreState } from "../features/redux/store/store";
import { getMovie } from "../features/redux/reducers/singleMovieReducer";
import { useNavigate, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movieData, loading } = useSelector(
    (state: StoreState) => state.singleMovie
  );
  const dispatch = useDispatch<AppDispatch>();

  function toHoursAndMinutes(totalMinutes: number) {
    const hours = ("0" + Math.floor(totalMinutes / 60)).slice(-2);
    const minutes = ("0" + (totalMinutes % 60)).slice(-2);
    return `${hours}:${minutes}`;
  }

  useEffect(() => {
    if (id === undefined) navigate("/");
    else dispatch(getMovie(parseInt(id)));
  }, [id]);

  return (
    <div className="movie-details">
      <div className="movie-details__left">
        <img
          className="movie-details__left__img"
          src={`https://image.tmdb.org/t/p/w300/${movieData.poster_path}`}
        ></img>
      </div>
      <div className="movie-details__right">
        <span className="movie-details__right__title-rating">
          <span className="movie-details__right__title-rating__title">
            {movieData.title}
          </span>
          {movieData.vote_average > 0 && (
            <span className="movie-details__right__title-rating__rating">
              ⭐ {movieData.vote_average}
            </span>
          )}
        </span>
        <span className="movie-details__right__year-length-dir">
          {movieData.release_date && (
            <span className="year">
              <span className="label">Release Date: </span>
              {movieData.release_date}
            </span>
          )}
          {movieData.runtime && movieData.runtime > 0 ? (
            <span className="length">
              <span className="label">Length: </span>
              {toHoursAndMinutes(movieData.runtime)}
            </span>
          ) : (
            ""
          )}
          {movieData.director && (
            <span className="director">
              <span className="label">Director: </span>
              {movieData.director}
            </span>
          )}
        </span>
        <span className="movie-details__right__cast-details">
          <span className="label">Cast:</span>
          <span className="movie-details__right__cast-details__value">
            {movieData.cast && movieData.cast.length > 0 && (
              <p className="cast">
                {Object.keys(movieData).length > 0 &&
                  movieData.cast.length > 0 &&
                  movieData.cast
                    .slice(0, 10)
                    .map((name: string, index: number) => (
                      <span key={index} className="cast-name">
                        {name}
                      </span>
                    ))}
                <span>...</span>
              </p>
            )}
          </span>
        </span>
        <span className="movie-details__right__description">
          {movieData.overview && (
            <p className="movie-details__right__description">
              <p className="label">Description:</p>
              <span>{movieData.overview}</span>
            </p>
          )}
        </span>
      </div>
    </div>
  );
}

export default MovieDetails;
