import { useForm } from 'react-hook-form';
import styles from './Login.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/userSlice';

const required = { value: true, message: "Це поле обов'язкове для заповнення" };

function Login() {
  const dispatch = useDispatch();
  const { id, fail } = useSelector(state => state.user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember: true,
    },
  });

  useEffect(() => {reset()}, [id])

  if (id) return <p>Ви увійшли в акаунт.</p>;

  function onSubmit(data) {
    dispatch(login(data));
  }

  return (
    <>
      {fail && (
        <p className={styles.failStandalone}>Невірний email або пароль.</p>
      )}
      <form
        action='#'
        method='post'
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h2 className={styles.title}>Вхід в акаунт</h2>
        <div className={styles.group}>
          <label
            className={styles.label}
            htmlFor='email'
          >
            Електронна пошта
          </label>
          <input
            className={styles.input}
            type='email'
            id='email'
            {...register('email', {
              required,
              pattern: {
                value: /^[\d\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                message: 'Введіть дійсну електронну пошту',
              },
            })}
            required
            placeholder='example@domain.com'
          />
          <p className={styles.fail}>{errors.email?.message}</p>
        </div>
        <div className={styles.group}>
          <label
            className={styles.label}
            htmlFor='password'
          >
            Пароль
          </label>
          <input
            className={styles.input}
            type='password'
            id='password'
            {...register('password', {
              required,
              minLength: {
                value: 6,
                message: 'Довжина паролю має бути не менш шости символів',
              },
            })}
            required
            placeholder='Введіть пароль'
          />
          <p className={styles.fail}>{errors.password?.message}</p>
        </div>
        <div className={styles.group + ' ' + styles.rememberGroup}>
          <input
            className={styles.rememberInput}
            type='checkbox'
            id='remember'
            {...register('remember')}
          />
          <label
            className={styles.label + ' ' + styles.rememberLabel}
            htmlFor='remember'
          >
            Запам'ятати мене
          </label>
        </div>
        <button
          type='submit'
          className={styles.btn}
        >
          Увійти
        </button>
      </form>
    </>
  );
}

export default Login;
