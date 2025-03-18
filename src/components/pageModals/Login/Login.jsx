import { useForm } from 'react-hook-form';
import css from './Login.module.css';
import Icon from '../../reusable-global/Icon/Icon';
import Loader from '../../reusable-global/Loader/Loader';
import { login } from '../../../redux/userSlice';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CloseButton from '../CloseButton/CloseButton';
import { useMediaQuery } from 'react-responsive';

function Login({ setIsOpen }) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const isLoading = user.status === 'loading';
  const isMobile = useMediaQuery({ query: '(max-width: 767px' });

  function onSubmit(data) {
    dispatch(login(data));
  }

  useEffect(() => {
    if (user.name) setIsOpen(false);
  }, [user.name]);

  return (
    <>
      <form
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <CloseButton
          icon={isMobile ? 'chevron' : 'cross'}
          setIsOpen={setIsOpen}
          side={isMobile ? 'left' : 'right'}
        />

        <Icon
          id='icon-full-logo-orange'
          width={123}
          height={84}
          iconClass={css.logo}
        />
        <h2 className={css.title}>Вхід в акаунт</h2>
        <div className={css.inputGroup}>
          <label
            className={css.label}
            htmlFor='login-email'
          >
            Електронна пошта*
          </label>
          <input
            className={css.input}
            type='email'
            {...register('email')}
            id='login-email'
          />
        </div>
        <div className={css.inputGroup}>
          <label
            className={css.label}
            htmlFor='login-password'
          >
            Пароль*
          </label>
          <input
            className={css.input}
            type='password'
            {...register('password')}
            id='login-password'
          />
        </div>
        <Link
          to='cabinet/forgot-password'
          className={css.forgotPassword}
          onClick={() => setIsOpen(false)}
        >
          Забули пароль?
        </Link>
        <button
          className={css.button + ' ' + css.submit}
          type='submit'
        >
          Продовжити
        </button>

        <button
          className={css.button + ' ' + css.signup}
          type='button'
          onClick={() => setIsOpen(false)}
        >
          Створити акаунт
        </button>
      </form>

      {isLoading && <Loader />}
    </>
  );
}

export default Login;
