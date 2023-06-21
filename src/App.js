import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { clearAllPlaylists } from "./store";
import { useDispatch } from "react-redux";
import "../src/styles.css";

export default function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(clearAllPlaylists());
  };

  return (
    <div className="container">
      <button onClick={() => handleResetClick()} className="button">
        DELETE ALL LIST
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
