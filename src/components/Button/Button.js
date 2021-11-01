import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <button className={s.Btn} onClick={onClick} type="button">
      Load more
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
};
