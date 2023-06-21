import { createSlice } from "@reduxjs/toolkit";
import { createRandomSong } from "../data";

const initialState = [];

const songPlaylistSlice = createSlice({
  name: "songPlaylist",
  initialState,
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      const index = state.indexOf(action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
    addRandomSong: (state) => {
      state.push(createRandomSong());
    },
    clearSongPlaylist: (state, action) => {
      state = [];
    }
  }
});

export const {
  addSong,
  removeSong,
  addRandomSong,
  clearSongPlaylist
} = songPlaylistSlice.actions;

export default songPlaylistSlice.reducer;
