import { NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './Cabinet.module.css';
import Signup from '../Signup/Signup';

// const user = null;
const user = { name: 'Петро' };

function Cabinet() {
  const { pathname } = useLocation();
  const tab = pathname.split('/').at(-1);

  const getButtonStyles = tabName =>
    styles.link + ' ' + (tabName === tab ? styles.current : '');

  return (
    <div className={styles.container}>
      {!user && (
        <ul className={styles.menu}>
          <li>
            <NavLink
              to='login'
              className={getButtonStyles('login')}
            >
              Увійти
            </NavLink>
          </li>
          <li>
            <NavLink
              to='signup'
              className={getButtonStyles('signup')}
            >
              Зареєструватися
            </NavLink>
          </li>
          <li>
            <NavLink
              to='orders'
              className={getButtonStyles('orders') + ' ' + styles.disabled}
              disabled
            >
              Мої замовлення
            </NavLink>
          </li>
          <li>
            <NavLink
              to='profile'
              className={getButtonStyles('profile') + ' ' + styles.disabled}
              disabled
            >
              Профіль
            </NavLink>
          </li>
          <li>
            <NavLink
              to='edit-profile'
              className={
                getButtonStyles('edit-profile') + ' ' + styles.disabled
              }
              disabled
            >
              Редагувати профіль
            </NavLink>
          </li>
        </ul>
      )}

      {user && (
        <ul className={styles.menu}>
          <li><p className={styles.greeting}>Ви увійшли, як {user.name}</p></li>
          <li>
            <NavLink
              to='orders'
              className={getButtonStyles('orders')}
            >
              Мої замовлення
            </NavLink>
          </li>
          <li>
            <NavLink
              to='profile'
              className={getButtonStyles('profile')}
            >
              Профіль
            </NavLink>
          </li>
          <li>
            <NavLink
              to='edit-profile'
              className={getButtonStyles('edit-profile')}
            >
              Редагувати профіль
            </NavLink>
          </li>
          <li>
            <NavLink
              to='logout'
              className={getButtonStyles('logout')}
            >
              Вийти
            </NavLink>
          </li>
        </ul>
      )}
      <div className={styles.content}>
        {user && <Outlet />}
        {!user && <Signup />}
      </div>
    </div>
  );
}

export default Cabinet;
