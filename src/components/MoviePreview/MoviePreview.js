import PropTypes from 'prop-types';

import s from './MoviePreview.module.css';
// import placeholder from '../../assets/images/placeholder.png';

// Компонент превью фильма в общем списке фильмов
const MoviePreview = ({ title, poster, vote }) => {
  const posterUrl = poster;
  //   const posterUrl = poster
  //     ? `https://image.tmdb.org/t/p/w500${poster}`
  //     : placeholder;
  //   const voteStyle = vote > 5 ? s['vote--top'] : s['vote--low'];

  return (
    <div className={s.card}>
      <div className={s.thumb}>
        <img src={posterUrl} alt={title} className={s.poster} />
      </div>

      <p className={s.text}>
        <span>{title}</span>
        {/* {vote ? <b className={voteStyle}>{vote}</b> : null} */}
      </p>
    </div>
  );
};

MoviePreview.defaultProps = {
  poster: '',
  vote: null,
};

MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  vote: PropTypes.number,
};

export default MoviePreview;
