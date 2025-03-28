import formCss from '../../css/form.module.css'
import css from '../Form/Form.module.css';
import Loader from '../../../reusable-global/Loader/Loader';

function EmailGroup({
  isLoading,
  register,
  errors,
  isCheckingAvailability = false,
  checkIfEmailAvaillableWithDelay = () => true,
}) {
  return (
    <div className={formCss.inputGroup}>
      <label
        className={formCss.label}
        htmlFor='email'
      >
        Електронна пошта
      </label>
      <input
        className={formCss.input}
        type='email'
        id='email'
        {...register('email', {
          required: "Електронна пошта обов'язкова для заповнення",
          pattern: {
            value: /^[\d\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
            message: 'Введіть дійсну електронну пошту',
          },
          validate: {
            checkAvailability: async email =>
              await checkIfEmailAvaillableWithDelay(email),
          },
        })}
        required
        placeholder='example@domain.com'
        disabled={isLoading}
      />
      {!isCheckingAvailability && !!errors.email && <p className={formCss.fail}>{errors.email.message}</p>}
    </div>
  );
}

export default EmailGroup;
