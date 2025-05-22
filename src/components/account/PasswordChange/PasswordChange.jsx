import css from './PasswordChange.module.css';
import { useForm } from 'react-hook-form';
import formCss from '../../userControls/css/form.module.css';
import InputGroup from '../../userControls/reusable/InputGroup/InputGroup';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email'),
    newPassword: yup.string().required('New password is required')
});

function PasswordChange() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  function onsubmit() {}

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(onsubmit)}
    >
      <InputGroup
        inputName='name'
        labelText="Ім'я"
        register={register}
        errors={errors}
      />

      <InputGroup
        inputName='email'
        labelText='Електронна пошта'
        register={register}
        errors={errors}
      />

      <button
        className={clsx(formCss.button, css.submit)}
        type='submit'
      >
        Зберегти
      </button>
    </form>
  );
}

export default PasswordChange;
