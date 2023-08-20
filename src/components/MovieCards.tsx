import React from "react";
import "../styles/MovieCard.scss";

function MovieCards() {
  return (
    <div className="movie-card">
      <img
        className="movie-card__img"
        src="https://d2eib6r9tuf5y8.cloudfront.net/l/assets/img/article/article-1708-joswvwm6/keyvisual.jpg"
      ></img>
      <span className="movie-card__details">
        <span className="movie-card__details__title-rating">
          <span className="movie-card__details__title-rating__title">
            Movie title
          </span>
          <span className="movie-card__details__title-rating__rating">
            (Rating)
          </span>
        </span>
        <span className="movie-card__details__description">
          Description... (2 Lines)
        </span>
      </span>
    </div>
  );
}

export default MovieCards;
