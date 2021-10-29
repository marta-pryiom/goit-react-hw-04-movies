import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
export default function Navigation() {
  return (
    <nav>
      <NavLink exact to="/" className={s.Link} activeClassName={s.ActiveLink}>
        Home
      </NavLink>
      <NavLink
        exact
        to="/movies"
        className={s.Link}
        activeClassName={s.ActiveLink}
      >
        Movies
      </NavLink>
    </nav>
  );
}
