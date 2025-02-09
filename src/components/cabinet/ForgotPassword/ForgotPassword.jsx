import { useForm } from 'react-hook-form';
// import axios from 'axios';
import { useState } from 'react';
import Form from '../reusable/Form/Form';
import EmailGroup from '../reusable/EmailGroup/EmailGroup';
import { isRegisteredEmail, isServerError } from '../../../fake-data';
import { Link } from 'react-router-dom';
import styles from '../reusable/Form/Form.module.css';

const required = { value: true, message: "Це поле обов'язкове для заповнення" };

function ForgotPassword() {
  const [status, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  if (status === 'success')
    return (
      <p className={styles.success}>
        Вам на пошту відправлено лист із посиланням для зміни паролю. Воно
        дійсне протягом години. Якщо не знайдете лист у вхідних, подивться в
        спамі.
      </p>
    );

  async function processSubmit({ email }) {
    // send email to the server
    // if email is registered
    //   show message, that instructions are sent to email
    //   hide form
    //   reset form
    // if email is not registered
    //   show message and a link to register
    // if server error
    //   show message
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isServerError(email)) return reject('error');

        if (isRegisteredEmail(email)) resolve();
        else reject('fail');
      }, 800);
    });

    try {
      setStatus('loading')
      await promise;
      reset();
      setStatus('success');
    } catch (err) {
      setStatus(err);
    }
  }

  return (
    <>
      <Form
        title='Відновлення паролю. Крок 1'
        submitCaption='Відправити'
        handleSubmit={handleSubmit}
        processSubmit={processSubmit}
        isLoading={status === 'loading'}
      >
        <EmailGroup
          required={required}
          register={register}
          isLoading={status === 'loading'}
          errors={errors}
        />
      </Form>

      {status === 'error' && (
        <p className={styles.failStandalone}>
          Щось пішло не так. Спробуйте пізніше.
        </p>
      )}
      {status === 'fail' && (
        <>
          <p className={styles.failStandalone}>
            Ця пошта не зареєстрована. Можливо, ви реєструвалися на іншу.
          </p>
          <Link
            to='../signup'
            className={styles.link}
          >
            Ще не зареєстровані?
          </Link>
        </>
      )}
    </>
  );
}

export default ForgotPassword;
