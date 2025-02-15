import { useForm } from 'react-hook-form';
import styles from '../reusable/Form/Form.module.css';
import { signup } from '../../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ConfirmPasswordGroup from '../reusable/ConfirmPasswordGroup/ConfirmPasswordGroup';
// import RememberMeGroup from '../reusable/RememberMeGroup/RememberMeGroup';
import Form from '../reusable/Form/Form';
import AvailableEmail from '../reusable/AvailableEmail';
import NewPassword from '../reusable/NewPassword/NewPassword';

function Signup() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      // remember: true,
    },
  });
  const { id, status } = useSelector(state => state.user);

  useEffect(() => {
    reset();
  }, [id]);

  if (id) return <p className={styles.success}>Ви зареєстровані</p>;

  function processSubmit(formData) {
    const { name, email, password } = formData;
    const data = { name, email, password };

    dispatch(signup(data));
  }

  return (
    <>
      <Form
        title='Реєстрація'
        submitCaption={status === 'error' ? 'Спробувати ще' : 'Зареєструватися'}
        handleSubmit={handleSubmit}
        processSubmit={processSubmit}
        isLoading={status === 'loading'}
      >
        <div className={styles.group}>
          <label
            className={styles.label}
            htmlFor='name'
          >
            Як до вас звертатися
          </label>
          <input
            className={styles.input}
            type='text'
            id='name'
            {...register('name')}
            placeholder='Вадим'
            disabled={status === 'loading'}
          />
        </div>
        <AvailableEmail
          register={register}
          errors={errors}
          trigger={trigger}
          isLoading={status === 'loading'}
        />
        <NewPassword
          register={register}
          errors={errors}
        />
        <ConfirmPasswordGroup
          register={register}
          trigger={trigger}
          isLoading={status === 'loading'}
          errors={errors}
        />
      </Form>

      {status === 'error' && (
        <p className={styles.failStandalone}>
          Щось пішло не так. Спробуйте пізніше
        </p>
      )}
    </>
  );
}

export default Signup;
