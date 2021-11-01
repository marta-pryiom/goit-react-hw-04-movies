import { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  // NavLink,
} from 'react-router-dom';
import API from '../../services/movie-api';
import InfoMovieCard from '../../components/InfoMovieCard';
import MovieNavigation from '../../components/MovieNavigation';
import Loader from '../../components/Loader/Loader';

const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkName:"cast"*/)
);
const Reviews = lazy(() =>
  import('../../components/Reviews' /* webpackChunkName:"reviews"*/)
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    try {
      API.movieInfo(movieId).then(setMovieInfo);
    } catch (error) {
      <h1>no information</h1>;
    }
  }, [movieId]);

  return (
    <>
      {movieInfo && <InfoMovieCard movieInfo={movieInfo} />}
      {movieInfo && <MovieNavigation />}
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={`${url}/cast`}>
            <Cast movieId={movieId} />
          </Route>
          <Route exact path={`${url}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
