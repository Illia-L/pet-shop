import { NavLink, useLocation } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation({ setIsMenuOpen }) {
  const location = useLocation();

  const getLinkStyle = path => {
    const isCurrent = path === location.pathname.split('/')[1];

    return `${css.link} ${isCurrent ? css.current : ''}`;
  };

  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink
            to='/'
            className={css.link}
            onClick={() => setIsMenuOpen(false)}
          >
            Головна
          </NavLink>
        </li>

        <li className={css.item}>
          <NavLink
            to='/'
            className={getLinkStyle('')}
            onClick={() => setIsMenuOpen(false)}
          >
            Каталог
          </NavLink>
        </li>

        <li className={css.item}>
          <NavLink
            to='about'
            className={getLinkStyle('about')}
            onClick={() => setIsMenuOpen(false)}
          >
            Про нас
          </NavLink>
        </li>

        <li className={css.item}>
          <NavLink
            to='contacts'
            className={getLinkStyle('contacts')}
            onClick={() => setIsMenuOpen(false)}
          >
            Контакти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
