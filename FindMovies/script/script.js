// Function to fetch movie data from TMDB API
async function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() === '') {
      alert('Please enter a movie title.');
      return;
    }
  
    try {
      const response = await fetch(`search_movies.php?query=${searchInput}`);
      const data = await response.json();
      displayResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Function to display movie search results
  function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
  
    if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }
  
    results.forEach(movie => {
      const movieDiv = document.createElement('div');
      movieDiv.className = 'col-md-12 col-lg-12 col-xl-12'; 
      movieDiv.innerHTML = `
      <section >
      <div class="container py-5">
        <div class="row justify-content-center mb-3">
          <div class="col-md-12 col-xl-10">
            <div class="card shadow-0 border rounded-3">
              <div class="card-body" style="background-color: #eee;">
                <div class="row">
                  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div class="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}" class="w-100" alt="${movie.title}" />
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <h5>${movie.title}</h5>
                <div class="d-flex flex-row">
                  <div class="text-danger mb-1 me-2">
                    ${getRatingStars(movie.vote_average)}
                  </div>
                  <span>${movie.vote_count}</span>
                </div>
                <div class="mt-1 mb-0 text-muted small">
                  <span>${movie.release_date}</span>
                </div>
                <p class="text mb-4 mb-md-0">
                  ${movie.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      `;
      resultsContainer.appendChild(movieDiv);
    });
  }
  
  // Function to display movie details in a modal
  async function displayMovieDetails(movieId) {
    try {
      const response = await fetch(`get_movie_details.php?id=${movieId}`);
      const data = await response.json();
  
      const movieModalBody = document.getElementById('movieModalBody');
      movieModalBody.innerHTML = `
        <h5>Title: ${data.title}</h5>
        <p>Release Date: ${data.release_date}</p>
        <p>Overview: ${data.overview}</p>
        <p>Rating: ${data.vote_average}</p>
      `;
  
      // Show the movie details modal
      const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
      movieModal.show();
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  }
  
  function getRatingStars(rating) {
    const starCount = Math.round(rating / 2); 
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= starCount) {
        starsHtml += '<i class="fa fa-star"></i>';
      } else {
        starsHtml += '<i class="fa fa-star-o"></i>';
      }
    }
    return starsHtml;
  }
  