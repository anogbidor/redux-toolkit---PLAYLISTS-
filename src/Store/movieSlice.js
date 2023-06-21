import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: []
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movies.push(action.payload);
    },
    removeMovies(state, action) {
      state.movies = state.movies.filter(
        (movie) => movie.movie !== action.payload
      );
    }
  }
});

export const { addMovies, removeMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
