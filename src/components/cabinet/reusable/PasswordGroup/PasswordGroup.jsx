import styles from '../Form/Form.module.css';

const validationOptions = {
  minLength: {
    value: 8,
    message: 'Довжина паролю має бути не менше вісьми символів',
  },
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]+$/,
    message:
      'Пароль може містити цифри (хоча б одну), латинські літери (хоча б одну) та спецсимволи',
  },
};

function PasswordGroup({
  required,
  isLoading,
  register,
  errors,
  shouldValidate = true,
}) {
  const validationToApply = shouldValidate
    ? { required, ...validationOptions }
    : { required };

  return (
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
        {...register('password', validationToApply)}
        required
        placeholder='Введіть пароль'
        disabled={isLoading}
      />
      <p className={styles.fail}>{errors.password?.message}</p>
    </div>
  );
}

export default PasswordGroup;
