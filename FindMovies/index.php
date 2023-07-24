<?php include "nav.php"; ?>
<!DOCTYPE html>
<html>
<head>
  <title>Find Movies</title>
</head>
<body>
  <div class="container  mt-5">
    <h1 class="mb-4 text-center">Find Movies</h1>
    <div class="input-group mb-3">
      <input type="text" id="searchInput" class="form-control" placeholder="Enter movie title...">
      <button class="btn btn-dark" onclick="searchMovies()">Search</button>
    </div>
    <div id="results" class="mb-4"></div>
    <div id="movieDetails"></div>
  </div> 

  <div class="modal fade" id="movieModal" tabindex="-1" aria-labelledby="movieModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="movieModalLabel">Movie Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="movieModalBody">
        </div>
      </div>
    </div>
  </div>

<?php include "header.php"; ?>

</body>
</html>
