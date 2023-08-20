import React from "react";
import "../styles/MovieCard.scss";
import { Link } from "react-router-dom";

interface MovieCardProps {
  id: number;
  imgUrl: any;
  title: string;
  description: string;
  rating: number;
}

const MovieCards = (props: MovieCardProps) => {
  return (
    <Link className="movie-card" to={`/details/${props.id}`}>
      <img
        className="movie-card__img"
        src={`https://image.tmdb.org/t/p/w200/${props.imgUrl}`}
      ></img>
      <span className="movie-card__details">
        <span className="movie-card__details__title-rating">
          <span className="movie-card__details__title-rating__title">
            {props.title}
          </span>
          <span className="movie-card__details__title-rating__rating">
            ⭐ {props.rating}
          </span>
        </span>
        <span className="movie-card__details__description">
          {props.description}
        </span>
      </span>
    </Link>
  );
};

export default MovieCards;
