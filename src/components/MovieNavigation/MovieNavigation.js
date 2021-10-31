import { NavLink, useRouteMatch } from 'react-router-dom';
import s from './MovieNavigation.module.css';
// import Cast from '../Cast';
// import { Switch, Route } from 'react-router';
// import Reviews from '../Reviews';
// import { useState } from 'react/cjs/react.development';
export default function MovieNavigation() {
  const { url } = useRouteMatch();
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
          to={`${url}/cast`}
          // onClick={getCast}
        >
          Cast
        </NavLink>
        <NavLink
          className={s.Link}
          activeClassName={s.ActiveLink}
          to={`${url}/reviews`}
          // onClick={getReviews}
        >
          Reviews
        </NavLink>
      </ul>
    </>
  );
}
