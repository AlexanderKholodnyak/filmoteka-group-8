import MoviesApiService from './apiService';

const refs = {
  body: document.querySelector('body'),
  form: document.querySelector('#search-form'),
  imagesContainer: document.querySelector('.gallery'),
};
const moviesApiService = new MoviesApiService();

refs.form.addEventListener('input', onSearch);

function onSearch(e) {
  //   clearImagesContainer();

  moviesApiService.query = e.target.value;

  if (moviesApiService.query === '') {
    return;
  }

  moviesApiService.resetPage();

  getMovies();
}

function getMovies() {
  moviesApiService.fetchMovies().then(movies => {
    console.log(movies);
    // appendMoviesMarkup(movies);
  });
}

function appendImagesMarkup(image) {
  refs.imagesContainer.insertAdjacentHTML('beforeend', imageTpl(image));
}

function clearImagesContainer() {
  refs.imagesContainer.innerHTML = '';
  pageCount = 0;
}
