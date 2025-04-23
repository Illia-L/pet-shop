import { useForm } from 'react-hook-form';
import formCss from '../css/form.module.css';
import css from './Login.module.scss';
import * as userActions from '../../../redux/userSlice';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Form from '../reusable/Form/Form';
import * as api from '../../../api'

function Login({ setModalComponent }) {
  const [isError, setIsError] = useState(false)
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const isLoading = user.status === 'loading';

  async function onSubmit(data) {
    try {
      setIsError(false)

      const authData = await api.login(data)
      const {name, access: token, refresh} = authData

      dispatch(userActions.handleLogin(name, token, refresh))
    } catch (err) {
      setIsError(true)
    }
  }

  useEffect(() => {
    if (user.name) setModalComponent(null);
  }, [user.name]);

  return (
    <>
      <Form
        title='Вхід до акаунту'
        isLoading={isLoading}
        handleSubmit={handleSubmit(onSubmit)}
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

        <p className={css.validationMessage}>{isError && 'Перевірте дані та спробуйте ще раз.'}&nbsp;</p>

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
