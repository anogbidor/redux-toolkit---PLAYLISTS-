import { addSong, removeSong } from "../Features/songSlice";
import { useSelector, useDispatch } from "react-redux";
import { createRandomSong } from "../data";
import "../styles.css";

function SongPlaylist() {
  const songPlaylist = useSelector((state) => state.songPlaylist);
  const dispatch = useDispatch();

  const handleSongAdd = () => {
    const newSong = createRandomSong();
    dispatch(addSong(newSong));
  };

  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song, index) => {
    return (
      <li key={index}>
        {song}
        <button onClick={() => handleSongRemove(song)} className="button">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle">SONG PLAYLIST</h3>
        <div className="buttons">
          <button onClick={handleSongAdd} className="button">
            + ADD SONG LIST
          </button>
          {/* <button onClick={() => dispatch(addRandomSong())} className="button">
            + Rastgele Şarkı Ekle
          </button> */}
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
