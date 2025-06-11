import { useForm } from 'react-hook-form';
import formCss from '../../css/form.module.css';
import css from './Signup.module.scss';
import * as api from '../../../../api';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Error500 from '../../../Error500/Error500';
import * as yup from 'yup';
import {
  email,
  newPassword,
  passwordConfirm,
} from '../../../../settings/user.validation';
import { yupResolver } from '@hookform/resolvers/yup';
import InputGroup from '../../reusable/InputGroup/InputGroup';
import clsx from 'clsx';

const validationSchema = yup.object({
  email,
  newPassword,
  passwordConfirm,
});

function Signup({ setModalComponent, setElementToShow }) {
  const [is500, setIs500] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      newPassword: '',
      passwordConfirm: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const { id, status } = useSelector(state => state.user);

  async function onSubmit(formData) {
    try {
      const user = await api.signup(formData);

      reset();
      setElementToShow('success');
    } catch (err) {
      if (err.response.data.email) {
        setError('email', { message: 'Ця пошта вже зареєстрована' });

        return;
      }

      setIs500(true);
    }
  }

  if (is500) return <Error500 />;

  return (
    <>
      <form
        className={formCss.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h2 className={formCss.title}>Реєстрація</h2>

        <InputGroup
          inputName='name'
          type='text'
          labelText="Ім'я*"
          placeholder='Ivan Kozak'
          register={register}
          trigger={trigger}
          errors={errors}
        />

        <InputGroup
          inputName='email'
          type='email'
          placeholder='Ivan27kz@gmail.com'
          labelText='Email*'
          register={register}
          trigger={trigger}
          errors={errors}
        />

        <InputGroup
          inputName='newPassword'
          type='password'
          labelText='Пароль*'
          placeholder='Adkhff20$'
          register={register}
          trigger={trigger}
          errors={errors}
        />

        <InputGroup
          inputName='passwordConfirm'
          type='password'
          labelText='Підтвердіть пароль*'
          placeholder='Adkhff20$'
          register={register}
          trigger={trigger}
          errors={errors}
        />

        <button
          className={formCss.button + ' ' + formCss.submit}
          type='submit'
        >
          Продовжити
        </button>

        <button
          onClick={() => setModalComponent('login')}
          className={clsx(
            formCss.button,
            formCss.buttonSecondary,
            css.toLoginLink
          )}
        >
          Повернутися до log in
        </button>
      </form>

      {status === 'error' && (
        <p className={css.failStandalone}>
          Щось пішло не так. Спробуйте пізніше
        </p>
      )}
    </>
  );
}

export default Signup;
