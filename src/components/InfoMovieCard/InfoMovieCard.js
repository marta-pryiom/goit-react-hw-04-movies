import s from './InfoMovieCard.module.css';
import { useLocation } from 'react-router';
import GoBack from '../GoBack';
import PropTypes from 'prop-types';

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
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
  const location = useLocation();
  // const history = useHistory();
  console.log(location);
  // const onGoBack = () => {
  //   history.push(location?.state?.from ?? '/');
  // };
  return (
    <>
      <GoBack />
      {/* <button className={s.Button} type="button" onClick={onGoBack}> */}
      {/* <svg>
          <use fill="green" href="../images/sprite.svg#icon-undo2" />
        </svg> */}
      {/* Go Back
      </button> */}
      <article className={s.MovieArticle}>
        <div className={s.Card}>
          <img className={s.Image} src={posterUrl} alt={title || name} />
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
            {genres && (
              <ul className={s.Genres}>
                {genres.map(el => (
                  <li key={el.id}>{el.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
InfoMovieCard.propTypes = {
  movieInfo: PropTypes.object,
};
