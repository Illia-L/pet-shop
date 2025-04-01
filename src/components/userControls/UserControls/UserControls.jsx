import { NavLink } from 'react-router-dom';
import css from './UserControls.module.css';
import Icon from '../../reusable-global/Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Modal from '../reusable/Modal/Modal';
import Login from '../Login/Login';
import SignupBlock from '../signupBlock/SignupBlock/SignupBlock';
import Error500 from '../Error500/Error500';
import { closeAuthView } from '../../../redux/userSlice';

function UserControls() {
  const [modalComponent, setModalComponent] = useState(false);
  const { name: userName, status } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(closeAuthView());
  }, []);

useEffect(()=>{
  if(status === '500') setModalComponent('500')
},[status])

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

      <Modal
        isOpen={modalComponent === '500'}
        setModalComponent={setModalComponent}
      >
        <Error500 />
      </Modal>
    </>
  );
}

export default UserControls;
