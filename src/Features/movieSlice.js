import { createSlice } from "@reduxjs/toolkit";
import { createRandomMovie } from "../data";

const initialState = [];

const moviePlaylistSlice = createSlice({
  name: "moviePlaylist",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      const index = state.indexOf(action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
    addRandomMovie: (state) => {
      state.push(createRandomMovie());
    },
    clearMoviePlaylist: (state) => {
      state = [];
    }
  }
});

export const {
  addMovie,
  removeMovie,
  addRandomMovie,
  clearMoviePlaylist
} = moviePlaylistSlice.actions;

export default moviePlaylistSlice.reducer;
