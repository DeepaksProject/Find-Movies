<?php
if (isset($_GET['id'])) {
  $id = $_GET['id'];

  $apiKey = 'd57b33b8514d5a41caf304bd67817d9e';
  $apiUrl = "https://api.themoviedb.org/3/movie/$id?api_key=$apiKey";

  $response = file_get_contents($apiUrl);
  if ($response === false) {
    http_response_code(500);
    die(json_encode(['error' => 'Failed to fetch data from TMDB API']));
  }

  header('Content-Type: application/json');
  echo $response;
}
?>
