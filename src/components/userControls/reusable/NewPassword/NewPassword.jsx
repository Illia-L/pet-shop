import { useState } from 'react';
import formCss from '../../css/form.module.css';
import css from './NewPassword.module.css';
import PasswordGroup from '../PasswordGroup/PasswordGroup';

const rules = [
  {
    message: 'Тільки латиниця',
    check: password =>
      /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]*$/.test(password),
    value: true,
  },

  {
    message: 'Хоча б одна літера',
    check: password => /^(?=.*[A-Za-z]).*$/.test(password),
    value: false,
  },

  {
    message: 'Хоча б одна цифра',
    check: password => /[0-9]/.test(password),
    value: false,
  },

  {
    message: 'Не менш 8 символів',
    check: password => password.length >= 8,
    value: false,
  },
];

function NewPassword({ register, trigger, errors }) {
  const [hasFocus, setHasFocus] = useState(false);
  const [rulesMatch, setRulesMatch] = useState(() =>
    rules.map(hint => hint.value)
  );

  function validate(value) {
    return rules.find(rule => !rule.check(value))?.message || true;
    // const values = rules.map(rule => rule.check(value));

    // setRulesMatch(values);

    // const isValidated = rulesMatch.every(rule => rule);

    // return isValidated;
  }

  const shouldHint = hasFocus && !rulesMatch.every(rule => rule);

  return (
    <>
      <div className={formCss.inputGroup}>
        <label
          className={formCss.label}
          htmlFor='signup-password'
        >
          Пароль
        </label>

        <input
          className={formCss.input}
          type='password'
          id='signup-password'
          {...register('password', {
            required: "Пароль обов'язковий для заповнення",
            validate,
          })}
          required
          placeholder='Введіть пароль'
          // onChange={() => trigger('password')}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
        />
        {errors.password && (
          <p  className={formCss.fail}>{errors.password.message}</p>
        )}
      </div>
    </>
  );
}

export default NewPassword;
