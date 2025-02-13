import {
  Navigate,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import styles from './Cabinet.module.css';
import Signup from '../Signup/Signup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login/Login';
import { logout } from '../../../redux/userSlice';

function Cabinet() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const tab = pathname.split('/').at(-1);
  const user = useSelector(state => state.user);
  const canLoadTab =
    user.id ||
    tab === 'login' ||
    tab === 'signup' ||
    tab === 'forgot-password' ||
    tab === 'reset-password';

  if (!canLoadTab) return <Navigate to='login' />;

  const getButtonStyles = tabName =>
    styles.link + ' ' + (tabName === tab ? styles.current : '');

  return (
    <div className={styles.container}>
      {!user.id && (
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

      {user.id && (
        <ul className={styles.menu}>
          <li>
            <p className={styles.greeting}>Ви увійшли, як {user.name}</p>
          </li>
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
            <button
              to='logout'
              className={styles.button}
              onClick={() => dispatch(logout())}
            >
              Вийти
            </button>
          </li>
        </ul>
      )}
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Cabinet;
