import { useForm } from 'react-hook-form';
import formCss from '../../css/form.module.css';
import css from '../../reusable/Form/Form.module.css';
import { setUser } from '../../../../redux/userSlice';
import * as api from '../../../../api';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ConfirmPasswordGroup from '../../reusable/ConfirmPasswordGroup/ConfirmPasswordGroup';
import NewPassword from '../../reusable/NewPassword/NewPassword';
import EmailGroup from '../../reusable/EmailGroup/EmailGroup';
import Error500 from '../../../Error500/Error500';

function Signup({ setElementToShow }) {
  const [is500, setIs500] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
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
    },
  });
  const { id, status } = useSelector(state => state.user);

  // useEffect(() => {
  //   if (!id) return;

  //   reset();
  //   setElementToShow('success');
  // }, [id]);

  async function onSubmit(formData) {
    try {
      const user = await api.signup(formData);

      reset();
      setElementToShow('success');
      // const { name, email } = user;

      // dispatch(setUser({ name, email }));
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
      >
        <h2 className={formCss.title}>Реєстрація</h2>
        <div className={formCss.inputGroup}>
          <label
            className={formCss.label}
            htmlFor='name'
          >
            Як до вас звертатися
          </label>
          <input
            className={formCss.input}
            type='text'
            id='name'
            {...register('name')}
            placeholder='Вадим'
          />
        </div>

        <EmailGroup
          register={register}
          errors={errors}
        />

        <NewPassword
          register={register}
          trigger={trigger}
          errors={errors}
        />

        <ConfirmPasswordGroup
          register={register}
          trigger={trigger}
          errors={errors}
        />

        <button
          className={formCss.button + ' ' + formCss.submit}
          type='submit'
        >
          Створити акаунт
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
