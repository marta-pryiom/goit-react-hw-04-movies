import { useState, useEffect } from 'react';
import s from './Cast.module.css';
import NoInfo from '../NoInfo';
import PropTypes from 'prop-types';

import API from '../../services/movie-api';
export default function Cast({ movieId }) {
  console.log(movieId);

  const [actors, setActors] = useState([]);
  useEffect(() => {
    API.movieCast(movieId).then(setActors);
  }, [movieId]);

  console.log(actors);
  return (
    <>
      {actors.length > 0 ? (
        <ul className={s.ListCast}>
          {actors.map(actor => {
            return (
              <li key={actor.id} className={s.CastItem}>
                <p className={s.Text}> {actor.name}</p>
                <p className={s.Text}>character : {actor.character}</p>
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
  // movieId: PropTypes.number,
};
