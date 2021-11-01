import axios from 'axios';
const API_KEY = '98a377205a96ff71da3bcf70b617967d';

// const API_KEY = '7fa19289450d103be1f54a0c993182c2';
axios.defaults.baseURL = 'https://api.themoviedb.org/';

/*список самых популярных фильмов на сегодня для создания коллекции на главной странице.*/
async function getMovies(page = 1) {
  try {
    const { data } = await axios.get(
      `3/trending/all/day?api_key=${API_KEY}&page=${page}`
    );
    const trends = data.results;
    return trends;
  } catch (err) {
    console.error('Error with fetch movie-list');
  }
}

/* поиск кинофильма по ключевому слову на странице фильмов*/
async function searchWordMovie(query) {
  try {
    const { data } = await axios.get(
      `3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const results = data.results;
    return results;
  } catch (err) {
    console.error('Error with fetch searching by name');
  }
}

/*запрос полной информации о фильме для страницы кинофильма.*/

const movieInfo = async movieId => {
  try {
    const response = await axios.get(
      `3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log('Error with fetch searching movie by id');
  }
};

/*запрос информации о актёрском составе для страницы кинофильма. */
async function movieCast(movieId) {
  try {
    const { data } = await axios.get(
      `3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data.cast;
  } catch (err) {
    console.error('Error with fetch cast of movie');
  }
}
// movieCast(438631).then(res => console.log(res));
/* запрос обзоров для страницы кинофильма.*/
async function movieReviews(id) {
  try {
    const { data } = await axios.get(
      `3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return data.results;
  } catch (err) {
    console.error('Error with fetch reviews');
  }
}
// movieReviews(438631).then(res => console.log(res));
const API = {
  getMovies,
  searchWordMovie,
  movieInfo,
  movieCast,
  movieReviews,
};
export default API;
