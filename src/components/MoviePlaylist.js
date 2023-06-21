import { addMovie, removeMovie } from "../Features/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { createRandomMovie } from "../data";
import "../styles.css";

function MoviePlaylist() {
  const moviePlaylist = useSelector((state) => state.moviePlaylist);
  const dispatch = useDispatch();

  const handleMovieAdd = () => {
    const newMovie = createRandomMovie();
    dispatch(addMovie(newMovie));
  };

  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie, index) => {
    return (
      <li key={index}>
        {movie}
        <button onClick={() => handleMovieRemove(movie)} className="button">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle">MOVIE WATCHLIST</h3>
        <div className="buttons">
          <button onClick={handleMovieAdd} className="button">
            + ADD MOVIE LIST
          </button>
          {/* <button onClick={() => dispatch(addRandomMovie())} className="button">
            + Rastgele Film Ekle
          </button> */}
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
