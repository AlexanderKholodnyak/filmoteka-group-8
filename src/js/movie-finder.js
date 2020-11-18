import MoviesApiService from './apiService';
import movieTpl from '../templates/movie-card.hbs';

const refs = {
  body: document.querySelector('body'),
  form: document.querySelector('#search-form'),
  moviesContainer: document.querySelector('.js-cards-markup'),
};
const moviesApiService = new MoviesApiService();

// refs.form.addEventListener('input', onSearch);

getMovies();

function getMovies() {
  moviesApiService.fetchMovies().then(movies => {
    console.log(movies);
    appendMoviesMarkup(movies);
  });
}

function appendMoviesMarkup(movie) {
  refs.moviesContainer.insertAdjacentHTML('beforeend', movieTpl(movie));
}

function clearImagesContainer() {
  refs.imagesContainer.innerHTML = '';
  pageCount = 0;
}
