import { useState, useEffect } from 'react';

// import { useRouteMatch, useParams } from 'react-router-dom';
import API from '../../services/movie-api';
export default function Cast({ movieId }) {
  //   const match = useRouteMatch();
  //   console.log(match.params);
  //   const { id } = useParams();
  console.log(movieId);

  const [actors, setActors] = useState([]);
  useEffect(() => {
    API.movieCast(movieId).then(setActors);
  }, [movieId]);

  console.log(actors);
  return (
    <>
      {actors.length > 0 && (
        <ul>
          {actors.map(actor => {
            return (
              <li key={actor.id}>
                <p> {actor.name}</p>
                <p>character - {actor.character}</p>

                {/* <img src={actors.profile_path} alt={actors.name} /> */}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
