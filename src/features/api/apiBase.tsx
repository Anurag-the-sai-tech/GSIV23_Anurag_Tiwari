import axios, { AxiosInstance } from "axios";

const apiBase: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 10000,
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzI2YTkwM2M2MGUxODgxNDdkNGMyZmJkNDE4NDg1OCIsInN1YiI6IjY0ZGI0M2U5MDAxYmJkMDBjNmM4ZjVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3V88jG_ikyO1-wRpnhsNBE6KWxSiLL06cWDZv_-H74Q`,
  },
});

export default apiBase;
