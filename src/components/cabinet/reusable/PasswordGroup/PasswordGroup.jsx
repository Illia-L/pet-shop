import { useEffect, useState } from 'react';
import styles from '../Form/Form.module.css';
import hintStyles from './PasswordGroup.module.css';

const rules = [
  {
    message: 'Довжина має бути не менш 8 символів',
    check: password => password.length >= 8,
    value: false,
  },

  {
    message: 'Тільки латиниця',
    check: password =>
      /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]*$/.test(password),
    value: true,
  },

  {
    message: 'Хоча б одна цифра',
    check: password => /[0-9]/.test(password),
    value: false,
  },

  {
    message: 'Хоча б одна літера',
    check: password => /^(?=.*[A-Za-z]).*$/.test(password),
    value: false,
  },
];

function PasswordGroup({
  required,
  isLoading,
  register,
  watch,
  // errors,
  shouldValidate = true,
}) {
  const [hasFocus, setHasFocus] = useState(false);
  const [rulesMatch, setRulesMatch] = useState(() =>
    rules.map(hint => hint.value)
  );
  const validationToApply = shouldValidate
    ? { required, validate }
    : { required };

  const passwordValue = watch('password', '');

  function validate(value) {
    const values = rules.map(rule => rule.check(value));

    setRulesMatch(values);
  }

  const shouldHint =
    passwordValue &&
    shouldValidate &&
    hasFocus &&
    !rulesMatch.every(rule => rule);

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
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      {/* <p className={styles.fail}>{errors.password?.message}</p> */}
      {shouldHint &&
        rules.map((hint, i) => (
          <p
            className={hintStyles.hint}
            key={i}
          >
            {rulesMatch[i] ? (
              <span className={hintStyles.check}>&#10003;</span>
            ) : (
              <span className={hintStyles.cross}>&#10005;</span>
            )}
            {hint.message}
          </p>
        ))}
    </div>
  );
}

export default PasswordGroup;
