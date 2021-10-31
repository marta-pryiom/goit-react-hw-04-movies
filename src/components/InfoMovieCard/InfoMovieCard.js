import s from './InfoMovieCard.module.css';
import { useLocation, useHistory } from 'react-router';
export default function InfoMovieCard({ movieInfo }) {
  console.log(movieInfo);
  const {
    title,
    release_date,
    // vote_average,
    poster_path,
    overview,
    genres,
    name,
  } = movieInfo;
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  const onGoBack = () => {
    history.push(location?.state?.from ?? '/movie');
  };
  return (
    <>
      <button className={s.Button} type="button" onClick={onGoBack}>
        Go Back
      </button>
      <article className={s.MovieArticle}>
        <div className={s.Card}>
          <img
            className={s.Image}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </div>
        <div className={s.Box}>
          {(title || name) && (
            <h1>
              {title || name}
              {release_date ? (
                <span>({release_date})</span>
              ) : (
                <span>(N/A)</span>
              )}
            </h1>
          )}
          <div className={s.OverView}>
            <p>{overview}</p>
            <ul className={s.Genres}>
              {genres.map(el => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
