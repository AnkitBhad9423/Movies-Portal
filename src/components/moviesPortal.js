import { useState } from "react";
import { fetchMovies } from "../api/fetchMovies";
import ErrorAlert from "./errorAlert";
import MovieDetail from "./movieDetail";

function MoviesPortal() {
  const [searchInputText, setSearchInputText] = useState("");
  const [enteredSearchText, setEnteredSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const onSearchTextedEnter = (e) => {
    e.preventDefault();
    fetchMovies(searchInputText, setMovies, setError, () =>
      setEnteredSearchText(searchInputText)
    );
    setEnteredSearchText(searchInputText);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={onSearchTextedEnter}>
            <input
              type="text"
              placeholder="Search Movies"
              className="form-control"
              onChange={(e) => setSearchInputText(e.target.value)}
            />
          </form>
        </div>
      </div>
      <br />
      {error && <ErrorAlert error={error} searchTerm={enteredSearchText} />}
      {movies.length > 0 && (
        <p
          className="text-light
      "
        >
          Showing {movies.length} Movies for '{enteredSearchText}'
        </p>
      )}
      {movies.map((movie) => (
        <MovieDetail key={movie.imdbID} movie={movie} />
      ))}
    </>
  );
}

export default MoviesPortal;
