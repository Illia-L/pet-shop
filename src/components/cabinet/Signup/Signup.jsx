import { useForm } from 'react-hook-form';
import styles from './Signup.module.css';
import { useState } from 'react';

const required = { value: true, message: "Це поле обов'язкове для заповнення" };

function Signup() {
  const [isComplete, setIsComplete] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      remember: true,
    },
  });

  if (isComplete) return <p className={styles.success}>Ви успішно зареєстровані</p>

  function onSubmit(data) {
    console.log(data);

    setIsComplete(true)
  }

  return (
    <form
      action='#'
      method='post'
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h2 className={styles.title}>Реєстрація</h2>
      <div className={styles.group}>
        <label
          className={styles.label}
          htmlFor='name'
        >
          Як до вас звертатися
        </label>
        <input
          className={styles.input}
          type='text'
          id='name'
          {...register('name')}
          placeholder='Вадим'
        />
      </div>
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
        <p className={styles.error}>{errors.email?.message}</p>
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
        <p className={styles.error}>{errors.password?.message}</p>
      </div>
      <div className={styles.group}>
        <label
          className={styles.label}
          htmlFor='confirm-password'
        >
          Підтвердіть пароль
        </label>
        <input
          className={styles.input}
          type='password'
          id='confirm-password'
          {...register('passwordConfirm', {
            required,
            validate: {
              isPasswordConfirmed: (passwordConfirm, { password }) =>
                passwordConfirm === password
                  ? true
                  : 'Не співпадає із паролем вище',
            },
          })}
          required
          placeholder='Введіть пароль ще раз'
        />
        <p className={styles.error}>{errors.passwordConfirm?.message}</p>
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
        Зареєструватися
      </button>
    </form>
  );
}

export default Signup;
