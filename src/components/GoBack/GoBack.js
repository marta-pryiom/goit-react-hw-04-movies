import s from './GoBack.module.css';
import { useHistory, useLocation } from 'react-router';
import pathToSprite from '../../images/sprite.svg';

const GoBack = () => {
  const history = useHistory();
  const location = useLocation();

  const handleClickGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <button className={s.Button} type="button" onClick={handleClickGoBack}>
        <svg className={s.Icon}>
          <use href={pathToSprite + '#icon-undo2'}></use>
        </svg>
        Go back
      </button>
    </>
  );
};

export default GoBack;
