import s from './GoBack.module.css';
import { useHistory, useLocation } from 'react-router';

const GoBack = () => {
  const history = useHistory();
  const location = useLocation();

  const handleClickGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };
  return (
    <>
      <button className={s.Button} type="button" onClick={handleClickGoBack}>
        Go back
      </button>
    </>
  );
};

export default GoBack;
