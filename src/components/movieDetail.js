function MovieDetail({ movie }) {
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <img src={movie.Poster} alt={movie.Title} width="100%" />
        </div>
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{movie.Title}</h3>
              <h6 className="card-subtitle mb-2 text-muted">
                {movie.Released}
              </h6>
              <p className="card-text">{movie.Plot}</p>
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}`}
                target="_blank"
                className="card-link"
              >
                IMDB
              </a>
              <a
                href={`https://www.youtube.com/results?search_query=${movie.Title}+trailer`}
                target="_blank"
                className="card-link"
              >
                Watch Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
