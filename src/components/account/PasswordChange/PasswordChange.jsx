import css from './PasswordChange.module.css';
import { useForm } from 'react-hook-form';
import formCss from '../../userControls/css/form.module.css';
import InputGroup from '../../userControls/reusable/InputGroup/InputGroup';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import {
  newPassword,
  passwordConfirm,
} from '../../../settings/user.validation';

const validationSchema = yup.object({
  newPassword,
  passwordConfirm,
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
        inputName='currentPassword'
        type='password'
        labelText='Поточний пароль'
        register={register}
        errors={errors}
      />

      <InputGroup
        inputName='newPassword'
        type='password'
        labelText='Новий пароль'
        register={register}
        errors={errors}
      />

      <InputGroup
        inputName='passwordConfirm'
        type='password'
        labelText='Повторення паролю'
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
