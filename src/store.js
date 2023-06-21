import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songPlaylistReducer, { clearSongPlaylist } from "./Features/songSlice";
import moviePlaylistReducer, {
  clearMoviePlaylist
} from "./Features/movieSlice";

const rootReducer = combineReducers({
  songPlaylist: songPlaylistReducer,
  moviePlaylist: moviePlaylistReducer
});

const appReducer = (state, action) => {
  if (action.type === "reset") {
    state = undefined;
  } else if (action.type === "clear") {
    state = {
      songPlaylist: songPlaylistReducer(undefined, action.payload.songPlaylist),
      moviePlaylist: moviePlaylistReducer(
        undefined,
        action.payload.moviePlaylist
      )
    };
  }
  return rootReducer(state, action);
};

const store = configureStore({
  reducer: appReducer
});

export const clearAllPlaylists = () => ({
  type: "clear",
  payload: {
    songPlaylist: clearSongPlaylist(),
    moviePlaylist: clearMoviePlaylist()
  }
});

export default store;
