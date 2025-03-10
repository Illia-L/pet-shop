import css from './Header.module.css';

import Navigation from '../Navigation/Navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Icon from '../reusable-global/Icon/Icon';
import Menu from '../Menu/Menu';

export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const products = useSelector((state) => state.products.items);
  const totalOfProducts = products.reduce((acc, number) => acc + number.quantity, 0);
  
  return (
    <header className={css.header}>
      <div className={css.container}>
        <button
          className={`${css.btn} ${css.bntMenu}`}
          type='button'
          aria-label='Open Menu'
          onClick={() => setIsMenuOpen(true)}
          disabled={isMenuOpen}
        >
          <Icon
            id='icon-burger-menu'
            width={26}
            height={42}
          />
        </button>

        <NavLink
          to='/'
          href='#'
          aria-label='Homepage'
          className={css.logoLink}
        >
          <Icon
            id='icon-full-logo'
            width={62}
            height={42}
            iconClass={css.logoIcon}
          />
        </NavLink>

        <Menu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <div className={css.iconsRight}>
          <NavLink
            to='cabinet'
            onClick={() => setIsMenuOpen(false)}
            className={css.linkCabinet}
          >
            <Icon
              id='icon-profile'
              width={22}
              height={42}
              iconClass={css.profileIcon}
            />
            <span className={css.profileText}> Log in/Sign up</span>
          </NavLink>

          <NavLink
            className={css.iconCartPosition}
            to='basket'
            onClick={() => setIsMenuOpen(false)}
          >
            <Icon
              id='icon-cart-outlined'
              width={23}
              height={42}
              iconClass={css.iconCart}
            />
            {totalOfProducts > 0 && <div className={css.numbersProducts}>{totalOfProducts}</div>}
          </NavLink>
        </div>
      </div>
    </header>
  );
}
