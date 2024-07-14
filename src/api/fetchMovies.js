const apiKey = "680f5d6c"; // Your API key
const baseUrl = "http://www.omdbapi.com/";

export const fetchMovies = async (
  searchText,
  moviesCallBack,
  errorCallBack
) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchText}&apikey=680f5d6c&type=movie`
    );
    const data = await response.json();

    if (data.Response === "True") {
      moviesCallBack(data.Search);
      errorCallBack(null);
    } else {
      moviesCallBack([]);
      errorCallBack(data.Error);
    }
  } catch (err) {
    moviesCallBack([]);
    errorCallBack("An error occured while fetching data.");
  }
};
