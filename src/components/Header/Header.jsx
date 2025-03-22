import css from './Header.module.css';

import Navigation from '../Navigation/Navigation';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Icon from '../reusable-global/Icon/Icon';
import Menu from '../Menu/Menu';
import ModalBasket from '../Basket/ModalBasket/ModalBasket';

export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const products = useSelector((state) => state.products.items);
  const totalOfProducts = products.reduce((acc, number) => acc + number.quantity, 0);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
      setIsOpen(true);
  }

  const closeModal = () => {
      setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  
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

          <button
            className={css.iconCartPosition}
            onClick={openModal}
          >
            <Icon
              id='icon-cart-outlined'
              width={23}
              height={42}
              iconClass={css.iconCart}
            />
            {totalOfProducts > 0 && <div className={css.numbersProducts}>{totalOfProducts}</div>}
          </button>
        </div>
      </div>
      {isOpen && <ModalBasket isOpen={setIsOpen} onClose={closeModal} />}

    </header>
  );
}
