const API_KEY = '726653b8cacb73d155407508fdc35e60';
const BASE_URL = 'https://api.themoviedb.org/3/';
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=726653b8cacb73d155407508fdc35e60&language=en-US
export default class MoviesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchMovies() {
    const url = `${BASE_URL}movie/popular/?api_key=${API_KEY}`;
    const response = await fetch(url);
    const movies = await response.json();

    this.incrementPage();
    console.log(movies);
    return movies;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
