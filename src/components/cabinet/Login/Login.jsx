import { useForm } from 'react-hook-form';
import styles from '../reusable/Form/Form.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/userSlice';
import Form from '../reusable/Form/Form';
import EmailGroup from '../reusable/EmailGroup/EmailGroup';
import PasswordGroup from '../reusable/PasswordGroup/PasswordGroup';
import { Link } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const { id, status } = useSelector(state => state.user);
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      // remember: true,
    },
  });

  useEffect(() => {
    reset();
  }, [id]);

  if (id) return <p className={styles.success}>Ви увійшли в акаунт.</p>;

  function processSubmit(data) {
    dispatch(login(data));
  }

  return (
    <>
      <Form
        title='Вхід до акаунту'
        submitCaption='Увійти'
        handleSubmit={handleSubmit}
        processSubmit={processSubmit}
        isLoading={status === 'loading'}
      >
        <EmailGroup
          register={register}
          isLoading={status === 'loading'}
          errors={errors}
          trigger={trigger}
          // checkIfEmailAvaillable={checkIfEmailAvaillable}
        />
        <PasswordGroup
          register={register}
          isLoading={status === 'loading'}
          errors={errors}
          trigger={trigger}
          shouldValidate={false}
        />
        <Link
          to='../forgot-password'
          className={`${styles.link} ${styles.forgotPassword}`}
        >
          Забули пароль?
        </Link>
      </Form>
      {status === 'fail' && (
        <p className={styles.failStandalone}>Невірна пошта та/або пароль</p>
      )}
      {status === 'error' && (
        <p className={styles.failStandalone}>
          Щось пішло не так. Спробуйте пізніше
        </p>
      )}
      <Link
        to='../signup'
        className={styles.link}
      >
        Ще не зареєстровані?
      </Link>
    </>
  );
}

export default Login;
