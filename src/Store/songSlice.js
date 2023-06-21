import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: []
};
const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    addSongs(state, action) {
      state.songs.push(action.payload);
    },
    removeSongs(state, action) {
      state.songs = state.songs.filter((song) => song.song !== action.payload);
    }
  }
});

export const { addMovies, removeMovies } = songsSlice.actions;
export default songsSlice.reducer;
