import { Link, useLocation } from 'react-router-dom';
import MoviePreview from '../MoviePreview';
export default function ListAllMovies({ moviesList }) {
  console.log(moviesList);
  const location = useLocation();
  return (
    <ul>
      {moviesList.length &&
        moviesList.map(
          ({ id, title, vote_average, poster_path, media_type, name }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `movies/${id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                <MoviePreview
                  title={title}
                  poster={poster_path}
                  vote={vote_average}
                />
                {/* <img src={poster_path} alt={media_type} />
            <p>{vote_average}</p> */}
              </Link>
            </li>
          )
        )}
    </ul>
  );
}
