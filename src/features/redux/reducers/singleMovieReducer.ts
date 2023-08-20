import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { SingleMovie, getMovieDetailsByIdApi } from '../../api/getMovieDetailsByIdApi';

interface SingleMovieReducer {
  movieData: SingleMovie,
  loading: boolean,
  error: null | string | undefined,
}

export const getMovie = createAsyncThunk('movies/getMovie', async (id: number) => {
  const response = await getMovieDetailsByIdApi(id);
  return response;
});

export const singleMovieReducer = createSlice({
  name: 'singleMovie',
  initialState: {
    movieData: {},
    loading: false,
    error: null,
  } as SingleMovieReducer,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovie.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.loading = false
        state.movieData = action.payload
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default singleMovieReducer.reducer