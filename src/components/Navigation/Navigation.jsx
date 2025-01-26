import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation({setIsMenuOpen}) {
  const location = useLocation()

  
  const getLinkStyle = path => {
    const isCurrent = path === location.pathname

    console.log(isCurrent);

    return `${styles.link} ${isCurrent ? styles.current : ''}`
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to='/'
            className={getLinkStyle('/')}
            onClick={() => setIsMenuOpen(false)}
          >
            Каталог
          </NavLink>
        </li>
        <li>
          <NavLink
            to='about'
            className={getLinkStyle('/about')}
            onClick={() => setIsMenuOpen(false)}
          >
            Про нас
          </NavLink>
        </li>
        <li>
          <NavLink
            to='contacts'
            className={getLinkStyle('/contacts')}
            onClick={() => setIsMenuOpen(false)}
          >
            Контакти
          </NavLink>
        </li>
        <li>
          <NavLink
            to='basket'
            className={getLinkStyle('/basket')}
            onClick={() => setIsMenuOpen(false)}
          >
            Кошик
          </NavLink>
        </li>
        <li>
          <NavLink
            to='profile'
            className={getLinkStyle('/profile')}
            onClick={() => setIsMenuOpen(false)}
          >
            Кабінет
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
