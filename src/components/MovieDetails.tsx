import React from "react";
import "../styles/MovieDetails.scss";

function MovieDetails() {
  return (
    <div className="movie-details">
      <div className="movie-details__left">
        <img
          className="movie-details__left__img"
          src="https://d2eib6r9tuf5y8.cloudfront.net/l/assets/img/article/article-1708-joswvwm6/keyvisual.jpg"
        ></img>
      </div>
      <div className="movie-details__right">
        <span className="movie-details__right__title-rating">
          <span className="movie-details__right__title-rating__title">
            Movie Title
          </span>
          <span className="movie-details__right__title-rating__rating">
            (Rating)
          </span>
        </span>
        <span className="movie-details__right__year-length-dir">
          Year | Length | Director
        </span>
        <span className="movie-details__right__cast-details">
          <span className="movie-details__right__cast-details__text">
            Cast:{" "}
          </span>
          <span className="movie-details__right__cast-details__value">
            Actor 1, Actor 2, ...
          </span>
        </span>
        <span className="movie-details__right__description">
          Description: Lorem ipsum dolor
        </span>
      </div>
    </div>
  );
}

export default MovieDetails;
