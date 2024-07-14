const apiKey = "680f5d6c"; // Your API key
const baseUrl = "http://www.omdbapi.com/";

export const fetchMovies = async (
  searchText,
  moviesCallBack,
  errorCallBack,
  finallyCallBack
) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchText}&apikey=680f5d6c&type=movie`
    );
    const data = await response.json();

    if (data.Response === "True") {
      const movieDetailsPromises = data.Search.map((movie) =>
        fetchMoviesDetails(movie.imdbID, errorCallBack)
      );
      const movieDetails = await Promise.all(movieDetailsPromises);

      moviesCallBack(movieDetails);
      errorCallBack(null);
    } else {
      moviesCallBack([]);
      errorCallBack(data.Error);
    }
  } catch (err) {
    moviesCallBack([]);
    errorCallBack("An error occured while fetching data.");
  } finally {
    finallyCallBack();
  }
};

const fetchMoviesDetails = async (id, errorCallBack) => {
  try {
    const response = await fetch(`
      http://www.omdbapi.com/?i=${id}&plot=full&apikey=680f5d6c`);
    const data = await response.json();
    if (data.Response === "True") {
      return data;
    } else {
      throw new Error(data.Error);
    }
  } catch (err) {
    errorCallBack("An error occured while fetching the details.");
  }
};
