import { useForm } from 'react-hook-form';
import styles from './Signup.module.css';
import { signup } from '../../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const required = { value: true, message: "Це поле обов'язкове для заповнення" };

function Signup() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
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
  const { id } = useSelector(state => state.user);

  useEffect(() => {
    reset();
  }, [id]);

  if (id) return <p>Ви вже зареєстровані</p>;

  async function checkIfEmailAvaillable() {
    // fetch email from server
    const isAvaillable = true;

    return isAvaillable || 'Користувач із такою поштою вже зареєстрований';
  }

  function onSubmit(formData) {
    const {name, email, password} = formData
    const data = {name, email, password, remember}

    dispatch(signup(data));
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
            validate: checkIfEmailAvaillable,
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
        <p className={styles.fail}>{errors.passwordConfirm?.message}</p>
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
