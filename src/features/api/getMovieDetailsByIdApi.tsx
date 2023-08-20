import axios from "axios";
import apiBase from "./apiBase";

interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

interface CastAndCrew {
  id: Number;
  cast: Cast[];
  crew: Crew[];
}

export interface SingleMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {};
  budget: number;
  genres: [];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  director: string | undefined;
  cast: string[];
}

export const getMovieDetailsByIdApi = async (id: number) => {
  try {
    const detailsEndpoint = `/movie/${id}`;
    const creditsEndpoint = `${detailsEndpoint}/credits`;
    const movieDetails: SingleMovie = (await apiBase.get(detailsEndpoint))
      .data;
    const credits: CastAndCrew = (await apiBase.get(creditsEndpoint)).data;
    let data: SingleMovie = movieDetails;
    const directors = credits.crew.filter(({ job }) => job === "Director");
    const director = directors.length > 0 ? directors[0] : undefined;
    data.director = director !== undefined ? director.name : undefined;
    data.cast = credits.cast.map((person) => person.name);
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      return error;
    }
  }
};
