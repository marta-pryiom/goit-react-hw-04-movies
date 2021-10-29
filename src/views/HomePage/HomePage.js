import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import API from '../../services/movie-api';
import ListAllMovies from '../../components/ListAllMovies';
import MovieDetailsPage from '../MovieDetailsPage';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    API.getMovies().then(list => setMovies(list));
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <ListAllMovies moviesList={movies} />
      </Route>
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
    </Switch>
  );
}
