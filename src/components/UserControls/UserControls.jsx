import { NavLink } from 'react-router-dom';
import css from './UserControls.module.css';
import Icon from '../reusable-global/Icon/Icon';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from '../pageModals/Modal/Modal';
import Login from '../pageModals/Login/Login';

function UserControls() {
  const [isOpen, setIsOpen] = useState(false);
  const userName = useSelector(state => state.user.name);

  return (
    <>
      {userName ? (
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

          <span className={css.profileText}> {userName}</span>
        </NavLink>
      ) : (
        <button
          className={css.linkCabinet}
          type='button'
          onClick={() => setIsOpen(true)}
        >
          <Icon
            id='icon-profile'
            width={22}
            height={42}
            iconClass={css.profileIcon}
          />

          <span className={css.profileText}> Log in/Sign up</span>
        </button>
      )}

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <Login setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
}

export default UserControls;
