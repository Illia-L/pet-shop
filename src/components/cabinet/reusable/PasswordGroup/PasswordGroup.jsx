import styles from '../Form/Form.module.css';

function PasswordGroup({ register, errors, hasFocus, validate = () => true, setHasFocus = () => {} }) {
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
        {...register('password', {
          required: "Пароль обов'язковий для заповнення",
          validate,
        })}
        required
        placeholder='Введіть пароль'
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />

      {errors.password && !hasFocus && <p className={styles.fail}>{errors.password.message}</p>}
    </div>
  );
}

export default PasswordGroup;
