import { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import API from '../../services/movie-api';
import InfoMovieCard from '../../components/InfoMovieCard';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    API.movieInfo(movieId).then(movieInfo => setMovieInfo(movieInfo));
  }, [movieId]);

  return <InfoMovieCard info={movieInfo} />;
}
