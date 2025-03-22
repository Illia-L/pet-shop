import { useForm } from 'react-hook-form';
import formCss from '../css/form.module.css';
import css from './Login.module.css';
import Icon from '../../reusable-global/Icon/Icon';
import Loader from '../../reusable-global/Loader/Loader';
import { login } from '../../../redux/userSlice';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CloseButton from '../../pageModals/CloseButton/CloseButton';
import { useMediaQuery } from 'react-responsive';
import Form from '../reusable/Form/Form';

function Login({ setModalComponent }) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const isLoading = user.status === 'loading';

  function onSubmit(data) {
    dispatch(login(data));
  }

  useEffect(() => {
    if (user.name) setModalComponent(null);
  }, [user.name]);

  return (
    <>
      <Form
        title='Вхід до акаунту'
        isLoading={isLoading}
        handleSubmit={() => handleSubmit(onSubmit)}
        setModalComponent={setModalComponent}
      >
        <div className={formCss.inputGroup}>
          <label
            className={formCss.label}
            htmlFor='login-email'
          >
            Електронна пошта*
          </label>
          <input
            className={formCss.input}
            type='email'
            {...register('email')}
            id='login-email'
          />
        </div>
        <div className={formCss.inputGroup}>
          <label
            className={formCss.label}
            htmlFor='login-password'
          >
            Пароль*
          </label>
          <input
            className={formCss.input}
            type='password'
            {...register('password')}
            id='login-password'
          />
        </div>
        <Link
          to='cabinet/forgot-password'
          className={css.forgotPassword}
          onClick={() => setModalComponent(null)}
        >
          Забули пароль?
        </Link>
        <button
          className={formCss.button + ' ' + formCss.submit}
          type='submit'
        >
          Продовжити
        </button>

        <button
          className={formCss.button + ' ' + css.signup}
          type='button'
          onClick={() => setModalComponent('signup')}
        >
          Створити акаунт
        </button>
      </Form>
    </>
  );
}

export default Login;
