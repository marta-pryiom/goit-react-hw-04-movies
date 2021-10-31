import { useEffect, useState } from 'react';
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  // NavLink,
} from 'react-router-dom';
import API from '../../services/movie-api';
import InfoMovieCard from '../../components/InfoMovieCard';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import MovieNavigation from '../../components/MovieNavigation';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    API.movieInfo(movieId).then(setMovieInfo);
  }, [movieId]);

  return (
    <>
      {movieInfo && <InfoMovieCard movieInfo={movieInfo} />}
      {movieInfo && <MovieNavigation />}
      <Switch>
        <Route exact path={`${url}/cast`}>
          <Cast movieId={movieId} />
        </Route>
        <Route exact path={`${url}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}
