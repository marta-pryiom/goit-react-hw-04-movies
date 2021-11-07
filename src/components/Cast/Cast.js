import { useState, useEffect } from 'react';
import s from './Cast.module.css';
import NoInfo from '../NoInfo';
import PropTypes from 'prop-types';

import API from '../../services/movie-api';
export default function Cast({ movieId }) {
  console.log(movieId);
  const url = 'https://image.tmdb.org/t/p/original';
  const plug =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
  const [actors, setActors] = useState([]);
  useEffect(() => {
    API.movieCast(movieId).then(setActors);
  }, [movieId]);

  console.log(actors);
  return (
    <>
      {actors.length > 0 ? (
        <ul className={s.ListCast}>
          {actors.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id} className={s.CastItem}>
                <img
                  src={profile_path ? `${url}${profile_path}` : plug}
                  alt={name}
                />
                <p className={s.Text}> {name}</p>
                <p className={s.Text}>character : {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <NoInfo />
      )}
    </>
  );
}
Cast.propTypes = {
  movieId: PropTypes.string,
};
