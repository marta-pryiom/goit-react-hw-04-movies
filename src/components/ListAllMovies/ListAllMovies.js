import { NavLink, useLocation } from 'react-router-dom';
import MoviePreview from '../MoviePreview';
import PropTypes from 'prop-types';
import s from './ListAllMovies.module.css';

export default function ListAllMovies({ moviesList }) {
  console.log(moviesList);
  const location = useLocation();
  console.log(location);
  const search = new URLSearchParams(location.search).get('query') ?? '';
  console.log(search);
  return (
    <ul className={s.ListMovie}>
      {moviesList.length &&
        moviesList.map(({ id, title, vote_average, poster_path, name }) => (
          <li key={id} className={s.MovieItem}>
            <NavLink
              className={s.navlink}
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              <MoviePreview
                // className={s.movieBox}
                name={name}
                title={title}
                poster={poster_path}
                vote={vote_average}
              />
            </NavLink>
          </li>
        ))}
    </ul>
  );
}
ListAllMovies.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.object),
};
