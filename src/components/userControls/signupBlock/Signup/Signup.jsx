import { useForm } from 'react-hook-form';
import formCss from '../../css/form.module.css';
import css from '../../reusable/Form/Form.module.css';
import { signup } from '../../../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ConfirmPasswordGroup from '../../reusable/ConfirmPasswordGroup/ConfirmPasswordGroup';
// import RememberMeGroup from '../reusable/RememberMeGroup/RememberMeGroup';
import Form from '../../reusable/Form/Form';
import AvailableEmail from '../../reusable/AvailableEmail';
import NewPassword from '../../reusable/NewPassword/NewPassword';

function Signup({ setElementToShow }) {
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
    if (!id) return;
    
    reset();
    setElementToShow('success');
  }, [id]);

  // if (id) return <p className={css.success}>Ви зареєстровані</p>;

  function onSubmit(formData) {
    dispatch(signup({ ...formData }));
  }

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
          trigger={trigger}
          errors={errors}
        />

        <ConfirmPasswordGroup
          register={register}
          trigger={trigger}
          isLoading={status === 'loading'}
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
