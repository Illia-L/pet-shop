import styles from '../Form/Form.module.css';

function EmailGroup({
  required,
  isLoading,
  register,
  errors,
  checkIfEmailAvaillable = null,
}) {
  return (
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
          validate: checkIfEmailAvaillable || true,
        })}
        required
        placeholder='example@domain.com'
        disabled={isLoading}
      />
      <p className={styles.fail}>{errors.email?.message}</p>
    </div>
  );
}

export default EmailGroup;
