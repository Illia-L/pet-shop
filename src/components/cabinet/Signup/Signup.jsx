import { useForm } from 'react-hook-form';
import styles from './Signup.module.css';
import { signup } from '../../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PasswordGroup from '../reusable/PasswordGroup/PasswordGroup';
import ConfirmPasswordGroup from '../reusable/ConfirmPasswordGroup/ConfirmPasswordGroup';
import EmailGroup from '../reusable/EmailGroup/EmailGroup';
// import RememberMeGroup from '../reusable/RememberMeGroup/RememberMeGroup';
import Form from '../reusable/Form/Form';

const required = { value: true, message: "Це поле обов'язкове для заповнення" };

function Signup() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      // remember: true,
    },
  });
  const { id, isLoading } = useSelector(state => state.user);

  useEffect(() => {
    reset();
  }, [id]);

  if (id) return <p>Ви зареєстровані</p>;

  async function checkIfEmailAvaillable() {
    // fetch email from server
    const isAvaillable = true;

    return isAvaillable || 'Користувач із такою поштою вже зареєстрований';
  }

  function processSubmit(formData) {
    const { name, email, password } = formData;
    const data = { name, email, password };

    dispatch(signup(data));
  }

  return (
    <Form
      title='Реєстрація'
      submitCaption='Зареєструватися'
      handleSubmit={handleSubmit}
      processSubmit={processSubmit}
      isLoading={isLoading}
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
          disabled={isLoading}
        />
      </div>

      <EmailGroup
        required={required}
        register={register}
        isLoading={isLoading}
        errors={errors}
        checkIfEmailAvaillable={checkIfEmailAvaillable}
      />

      <PasswordGroup
        required={required}
        register={register}
        isLoading={isLoading}
        errors={errors}
      />

      <ConfirmPasswordGroup
        required={required}
        register={register}
        isLoading={isLoading}
        errors={errors}
      />
    </Form>
  );
}

export default Signup;
