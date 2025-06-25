import { NavLink } from 'react-router-dom';
import css from './DesktopUserWidget.module.css';
import Icon from '../../../reusable-global/Icon/Icon';
import clsx from 'clsx';

function DesktopUserWidget({ userName, setModalComponent }) {
  return (
    <div>
      {userName ? (
        <NavLink
          to='account'
          className={clsx(css.linkCabinet, css.button)}
        >
          <Icon
            id='icon-profile'
            width={24}
            height={24}
            iconClass={css.profileIcon}
          />

          <span>{userName}</span>
        </NavLink>
      ) : (
        <div className={css.buttons}>
          <button
            className={css.button}
            type='button'
            onClick={() => setModalComponent('login')}
          >
            Log in
          </button>

          <button
            className={css.button}
            type='button'
            onClick={() => setModalComponent('signup')}
          >
            Sign up
          </button>
        </div>
      )}
    </div>
  );
}

export default DesktopUserWidget;
