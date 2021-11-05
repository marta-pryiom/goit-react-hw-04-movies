import { useEffect, useState } from 'react';
import API from '../../services/movie-api';
// import { toast } from 'react-toastify';
// import queryString from 'query-string';
import ButtonTop from '../../components/ButtonTop';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';
import Form from '../../components/Form';
import ListAllMovies from '../../components/ListAllMovies/ListAllMovies';

import {
  Switch,
  Route,
  useRouteMatch,
  // useHistory,
  // useLocation,
} from 'react-router-dom';

export default function MoviesPage() {
  const [searchWord, setSearchWord] = useState('');
  const [movies, setMovies] = useState([]);
  //   const history = useHistory();
  //   const location = useLocation();
  const { path } = useRouteMatch();
  console.log(path);
  useEffect(() => {
    if (searchWord === '') {
      return;
    }

    API.searchWordMovie(searchWord).then(movies => {
      setMovies(prev => [...prev, ...movies]);
      console.log(movies);
    });
  }, [searchWord]);

  const onSubmitForm = searchWord => {
    setSearchWord(searchWord);
    setMovies([]);
    console.log();
  };
  return (
    <>
      <Switch>
        <Route path={`${path}/:movieId`} component={MovieDetailsPage} />
        <Route exact path="/movies">
          <Form onSubmit={onSubmitForm} />
          {movies.length !== 0 && <ListAllMovies moviesList={movies} />}
          {movies.length > 10 && <ButtonTop />}
        </Route>
      </Switch>
    </>
  );
}

//   useEffect(() => {
//     const movie = queryString.parse(location.search).query;
//     if (!movie) {
//       setMovies([]);
//     }
//     if (movie) {
//       API.searchWordMovie(movie).then(res => setMovies(res));
//       setQuery('');
//     }
//   }, [location.search]);
//   const handleInputSearch = e => {
//     const inputQuery = e.target.value;
//     setQuery(inputQuery);
//   };
//   const handleSubmit = e => {
//     e.preventDefault();

//     history.push({ ...location, search: `?query=${query}` });
//     reset();
//   };
