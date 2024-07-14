function ErrorAlert({ error, searchTerm }) {
  return (
    <div class="alert alert-dismissible alert-warning">
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        fdprocessedid="mhltpm"
      ></button>
      <h4 class="alert-heading">Warning!</h4>
      <p class="mb-0">
        Oh!{" "}
        <strong>
          {" "}
          '{searchTerm}' resulted in '{error}' error
        </strong>
        <br />
        <a href="/" class="alert-link">
          Search Again
        </a>
        .
      </p>
    </div>
  );
}

export default ErrorAlert;
