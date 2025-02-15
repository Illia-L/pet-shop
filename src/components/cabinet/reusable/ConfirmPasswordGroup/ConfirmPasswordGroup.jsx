import styles from '../Form/Form.module.css';

function ConfirmPasswordGroup({ isLoading, register, errors }) {
  return (
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
          required: "Підтвердження паролю обов'язкове для заповнення",
          validate: {
            isPasswordConfirmed: (passwordConfirm, { password }) =>
              passwordConfirm === password
                ? true
                : 'Не співпадає із паролем вище',
          },
        })}
        required
        placeholder='Введіть пароль ще раз'
        disabled={isLoading}
      />
      <p className={styles.fail}>{errors.passwordConfirm?.message}</p>
    </div>
  );
}

export default ConfirmPasswordGroup;
