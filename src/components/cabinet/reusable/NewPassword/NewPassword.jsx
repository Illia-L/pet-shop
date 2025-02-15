import { useState } from 'react';
import styles from './NewPassword.module.css';
import PasswordGroup from '../PasswordGroup/PasswordGroup';

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

function NewPassword({ isLoading, register, errors }) {
  const [hasFocus, setHasFocus] = useState(false);
  const [rulesMatch, setRulesMatch] = useState(() =>
    rules.map(hint => hint.value)
  );

  function validate(value) {
    const values = rules.map(rule => rule.check(value));

    setRulesMatch(values);

    const isValidated = rulesMatch.every(rule => rule);

    return isValidated;
  }

  const shouldHint = hasFocus && !rulesMatch.every(rule => rule);

  return (
    <>
      <PasswordGroup
        register={register}
        errors={errors}
        validate={validate}
        setHasFocus={setHasFocus}
        hasFocus={hasFocus}
      />

      {shouldHint &&
        rules.map((hint, i) => (
          <p
            className={styles.hint}
            key={i}
          >
            {rulesMatch[i] ? (
              <span className={styles.check}>&#10003;</span>
            ) : (
              <span className={styles.cross}>&#10005;</span>
            )}
            {hint.message}
          </p>
        ))}
    </>
  );
}

export default NewPassword;
