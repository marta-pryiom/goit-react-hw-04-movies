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

  // const { url } = useRouteMatch();
  // const [castList, setCastList] = useState(false);
  // const [reviewsList, setReviewsList] = useState(false);
  // const getCast = () => {
  //   if (castList === true) {
  //     setCastList(false);
  //   }
  //   setCastList(true);
  // };
  // const getReviews = () => {
  //   if (reviewsList === true) {
  //     setReviewsList(false);
  //   }
  //   setReviewsList(true);
  // };
  return (
    <>
      {movieInfo && <InfoMovieCard movieInfo={movieInfo} />}
      {movieInfo && <MovieNavigation />}
      {/* <ul>
        <NavLink to={`${url}/cast`} onClick={getCast}>
          Cast
        </NavLink>
        <NavLink to={`${url}/reviews`} onClick={getReviews}>
          Reviews
        </NavLink>
      </ul> */}
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
