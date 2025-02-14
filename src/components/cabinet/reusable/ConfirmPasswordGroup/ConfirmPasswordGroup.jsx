import styles from '../Form/Form.module.css'

function ConfirmPasswordGroup({
  required,
  isLoading,
  register,
  errors,
}) {
  console.log('ConfirmPasswormGroup loaded...');
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
        disabled={isLoading}
      />
      <p className={styles.fail}>{errors.passwordConfirm?.message}</p>
    </div>
  );
}

export default ConfirmPasswordGroup;
