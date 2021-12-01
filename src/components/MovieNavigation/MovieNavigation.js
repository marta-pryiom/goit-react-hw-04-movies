import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import s from './MovieNavigation.module.css';
// import Cast from '../Cast';
// import { Switch, Route } from 'react-router';
// import Reviews from '../Reviews';
// import { useState } from 'react/cjs/react.development';
export default function MovieNavigation() {
  const { url } = useRouteMatch();
  const location = useLocation();
  //   const [castList, setCastList] = useState(false);
  //   const [reviewsList, setReviewsList] = useState(false);
  //   const getCast = () => {
  //     if (castList === true) {
  //       setCastList(false);
  //     }
  //     setCastList(true);
  //   };
  //   const getReviews = () => {
  //     if (reviewsList === true) {
  //       setReviewsList(false);
  //     }
  //     setReviewsList(true);
  //   };
  return (
    <>
      <ul className={s.LIstAddInfo}>
        <NavLink
          className={s.Link}
          activeClassName={s.ActiveLink}
          to={{
            pathname: `${url}/cast`,
            state: {
              from: location?.state?.from ?? '/movie',
            },
          }}
          // onClick={getCast}
        >
          Cast
        </NavLink>
        <NavLink
          className={s.Link}
          activeClassName={s.ActiveLink}
          to={{
            pathname: `${url}/review`,
            state: {
              from: location?.state?.from ?? '/movie',
            },
          }}
          // onClick={getReviews}
        >
          Reviews
        </NavLink>
      </ul>
    </>
  );
}
