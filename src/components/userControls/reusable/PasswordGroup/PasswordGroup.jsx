import formCss from '../../css/form.module.css'
import css from '../Form/Form.module.css';

function PasswordGroup({ register, errors, hasFocus, validate = () => true, setHasFocus = () => {} }) {
  return (
    <div className={formCss.inputGroup}>
      <label
        className={formCss.label}
        htmlFor='password'
      >
        Пароль
      </label>
      <input
        className={formCss.input}
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

      {errors.password && !hasFocus && <p className={css.fail}>{errors.password.message}</p>}
    </div>
  );
}

export default PasswordGroup;
