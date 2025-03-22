import formCss from '../../css/form.module.css'
import css from '../Form/Form.module.css';

function ConfirmPasswordGroup({ isLoading, register, errors }) {
  return (
    <div className={formCss.inputGroup}>
      <label
        className={formCss.label}
        htmlFor='confirm-password'
      >
        Підтвердіть пароль
      </label>
      <input
        className={formCss.input}
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
      <p className={css.fail}>{errors.passwordConfirm?.message}</p>
    </div>
  );
}

export default ConfirmPasswordGroup;
