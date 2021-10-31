import { useState, useEffect } from 'react';
import s from './Cast.module.css';
// import { toast } from 'react-toastify';
import NoInfo from '../NoInfo';

import API from '../../services/movie-api';
export default function Cast({ movieId }) {
  console.log(movieId);

  const [actors, setActors] = useState([]);
  useEffect(() => {
    API.movieCast(movieId).then(setActors);
    // if (actors) {
    //   window.scrollTo({
    //     top: document.documentElement.scrollHeight,
    //     behavior: 'smooth',
    //   });
    // }
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
