import { Link, useLocation } from 'react-router-dom';
import MoviePreview from '../MoviePreview';
import PropTypes from 'prop-types';
import s from './ListAllMovies.module.css';

export default function ListAllMovies({ moviesList }) {
  console.log(moviesList);
  const location = useLocation();
  console.log(location);
  return (
    <ul className={s.ListMovie}>
      {moviesList.length &&
        moviesList.map(({ id, title, vote_average, poster_path, name }) => (
          <li key={id} className={s.MovieItem}>
            <Link
              to={{
                pathname: `movies/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              <MoviePreview
                name={name}
                title={title}
                poster={poster_path}
                vote={vote_average}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
}
ListAllMovies.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.object),
};
