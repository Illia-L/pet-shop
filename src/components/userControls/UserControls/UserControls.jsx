import { NavLink } from 'react-router-dom';
import css from './UserControls.module.css';
import Icon from '../../reusable-global/Icon/Icon';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from '../reusable/Modal/Modal';
import Login from '../Login/Login';
import SignupBlock from '../signupBlock/SignupBlock/SignupBlock';

function UserControls() {
  const [modalComponent, setModalComponent] = useState(false);
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
          onClick={() => setModalComponent('login')}
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
        isOpen={modalComponent === 'login'}
        setModalComponent={setModalComponent}
      >
        <Login setModalComponent={setModalComponent} />
      </Modal>

      <Modal
        isOpen={modalComponent === 'signup'}
        setModalComponent={setModalComponent}
      >
        <SignupBlock setModalComponent={setModalComponent} />
      </Modal>
    </>
  );
}

export default UserControls;
