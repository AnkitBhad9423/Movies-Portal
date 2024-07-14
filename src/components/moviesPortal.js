import { useState } from "react";
import { fetchMovies } from "../api/fetchMovies";

function MoviesPortal() {
  const [searchInputText, setSearchInputText] = useState("");
  const [enteredSearchText, setEnteredSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const onSearchTextedEnter = (e) => {
    e.preventDefault();
    fetchMovies(searchInputText, setMovies, setError);
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
      {enteredSearchText}
      {JSON.stringify(movies)}
      {error}
    </>
  );
}

export default MoviesPortal;
