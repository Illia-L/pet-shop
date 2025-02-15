import { useForm } from 'react-hook-form';
import styles from '../../reusable/Form/Form.module.css';
import Form from '../../reusable/Form/Form';
import PasswordGroup from '../../reusable/PasswordGroup/PasswordGroup';
import ConfirmPasswordGroup from '../../reusable/ConfirmPasswordGroup/ConfirmPasswordGroup';
import { useState } from 'react';
import { isServerError } from '../../../../fake-data';
import { Link } from 'react-router-dom';
import NewPassword from '../../reusable/NewPassword/NewPassword';

const required = { value: true, message: "Це поле обов'язкове для заповнення" };

function PasswordResetForm() {
  const [status, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      password: '',
      resetPassword: '',
    },
  });

  async function processSubmit(data) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isServerError(data.password)) return reject('error');

        resolve('success');
      }, 800);
    });

    setStatus('loading');

    try {
      const result = await promise;
      setStatus(result);
      reset();
    } catch (err) {
      setStatus(err);
    }
  }

  if (status === 'success') {
    return (
      <>
        <p className={styles.success}>Ваш пароль успішно змінено.</p>
        <Link
          to='../login'
          className={styles.link}
        >
          Увійти в акаунт
        </Link>
      </>
    );
  }

  return (
    <>
      <Form
        title='Зміна паролю крок 2.'
        submitCaption={status === 'error' ? 'Спробувати знову' : 'Зберегти'}
        handleSubmit={handleSubmit}
        processSubmit={processSubmit}
        isLoading={status === 'loading'}
      >
        <NewPassword
          register={register}
          errors={errors}
        />

        <ConfirmPasswordGroup
          required={required}
          register={register}
          isLoading={status === 'loading'}
          errors={errors}
        />
      </Form>

      {status === 'error' && (
        <>
          <p className={styles.failStandalone}>
            Щось пішло не так. Спробуйте пізніше.
          </p>
        </>
      )}
    </>
  );
}

export default PasswordResetForm;
