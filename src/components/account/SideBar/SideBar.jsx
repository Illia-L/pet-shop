import { RxExit } from 'react-icons/rx';
import css from './SideBar.module.css';
import clsx from 'clsx';

function SideBar({ setView }) {
  return (
    <ul>
      <li>
        <button
        className={css.button}
          type='button'
          onClick={() => setView('contact-info')}
        >
          Контактна інформація
        </button>
      </li>

      <li>
        <button
        className={css.button}
          type='button'
          onClick={() => setView('change-password')}
        >
          Зміна паролю
        </button>
      </li>

      <li>
        <button
        className={css.button}
          type='button'
          onClick={() => setView('delete-account')}
        >
          Видалення акаунту
        </button>
      </li>

      <li>
        <button className={clsx(css.button, css.logout)}>
          <RxExit />

          <span>Вихід</span>
        </button>
      </li>
    </ul>
  );
}

export default SideBar;
