import axios from "axios";
import apiBase from "./apiBase";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesData {
  dates?: {};
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getUpcomingMoviesApi = async (page: number) => {
  try {
    const endpoint = `/movie/upcoming?page=${page}`;
    const response = await apiBase.get(endpoint);
    const data: MoviesData = response.data;
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      return error;
    }
  }
};
