import styles from './Header.module.css';

import Navigation from '../Navigation/Navigation';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getContainerStyles = () =>
    styles.menu + ' ' + (isMenuOpen ? styles.open : '');

  return (
    <header className={styles.header}>
      <NavLink
        to='/'
        href='#'
        className={styles.logoLink}
        aria-label='Homepage'
      >
        Logo
      </NavLink>

      <div
        className={getContainerStyles()}
        role='dialog'
        aria-label='Main Navigation'
      >
        <button
          className={`${styles.btn} ${styles.btnClose}`}
          type='button'
          aria-label='Close Menu'
          onClick={() => setIsMenuOpen(false)}
        >
          &#10006;
        </button>

        <Navigation setIsMenuOpen={setIsMenuOpen} />

        <address className={styles.address}>
          <ul className={styles.addressList}>
            <li className={styles.addressItem}>
              <a
                href='tel:+1234567890'
                className={styles.addressLink}
                aria-label='Call +1 234 567 890'
              >
                +1 234 567 890
              </a>
            </li>
            <li className={`${styles.addressItem} ${styles.secondNumberItem}`}>
              <a
                href='tel:+0987654321'
                className={styles.addressLink}
                aria-label='Call +0 987 654 321'
              >
                +0 987 654 321
              </a>
            </li>
          </ul>
        </address>
      </div>

      <button
        className={styles.btn}
        type='button'
        aria-label='Open Menu'
        onClick={() => setIsMenuOpen(true)}
      >
        &#9776;
      </button>
    </header>

    // <header className={css.header}>
    //   <div className={css.container}>
    //     <Navigation />
    //   </div>
    // </header>
  );
}
