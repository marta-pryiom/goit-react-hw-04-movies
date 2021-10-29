import { useEffect, useState } from 'react';
import API from '../../services/movie-api';
import queryString from 'query-string';
// import Form from '../../components/Form';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';

export default function MoviesPage() {
  //   const [query, setQuery] = useState('');
  //   const [movies, setMovies] = useState([]);
  //   const history = useHistory();
  //   const location = useLocation();
  //   const { path } = useRouteMatch();
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
  //     if (query.trim() === '') {
  //       console.log('що шукати?');
  //     }
  //     history.push({ ...location, search: `?query=${query}` });
  //     reset();
  //   };
  //   const reset = () => {
  //     setQuery('');
  //   };
  return <h1>hello</h1>;
  //   <Switch>
  //       <Route path={`${path}/:movieId`} component={MovieDetailsPage} />
  //       <Route
  //         exact
  //         path="/movies"
  //         render={() => (
  //           <div>
  //             <h1>MoviesPage</h1>
  //             <form onSubmit={handleSubmit}>
  //               <input
  //                 type="text"
  //                 value={query}
  //                 autoComplete="off"
  //                 autoFocus
  //                 placeholder="Search movie"
  //                 onChange={handleInputSearch}
  //               />
  //               <button type="submit">Search</button>
  //             </form>
  //           </div>)

  //   </Switch>
  // );
}
