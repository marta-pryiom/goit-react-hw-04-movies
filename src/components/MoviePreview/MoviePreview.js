import PropTypes from 'prop-types';
import s from './MoviePreview.module.css';
// import placeholder from '../../assets/images/placeholder.png';

const MoviePreview = ({ title, poster, vote, name }) => {
  // const posterUrl = poster;
  // const posterUrl = poster
  //   ? `https://image.tmdb.org/t/p/w500${poster}`
  //   : placeholder;

  return (
    <div>
      <div>
        <img
          className={s.Image}
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={title || name}
        />
      </div>

      <p className={s.Text}>
        <span className={s.NameMovie}>{title || name}</span>
        {vote ? <b className={s.voteStyle}>{vote}</b> : null}
      </p>
    </div>
  );
};

MoviePreview.defaultProps = {
  poster: '',
  vote: null,
};

MoviePreview.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  poster: PropTypes.string,
  vote: PropTypes.number,
};

export default MoviePreview;
