import { useForm } from 'react-hook-form';
import formCss from '../css/form.module.css';
import css from './Login.module.scss';
import * as userActions from '../../../redux/userSlice';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Form from '../reusable/Form/Form';
import * as api from '../../../api';
import InputGroup from '../reusable/InputGroup/InputGroup';

function Login({ setModalComponent }) {
  const [isError, setIsError] = useState(false);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const isLoading = user.status === 'loading';

  async function onSubmit(data) {
    try {
      setIsError(false);

      const authData = await api.login(data);
      const { name, access: token, refresh } = authData;

      dispatch(userActions.handleLogin(name, token, refresh));
    } catch (err) {
      setIsError(true);
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
        <InputGroup
          inputName='email'
          type='email'
          labelText='Електронна пошта'
          placeholder='example@email.com'
          register={register}
        />

        <InputGroup
          inputName='password'
          type='password'
          labelText='Пароль'
          register={register}
        />

        <p className={css.validationMessage}>
          {isError && 'Перевірте дані та спробуйте ще раз.'}&nbsp;
        </p>

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
