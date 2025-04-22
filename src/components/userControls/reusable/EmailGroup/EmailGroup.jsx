import formCss from '../../css/form.module.css';
import css from '../Form/Form.module.css';
import Loader from '../../../reusable-global/Loader/Loader';

function EmailGroup({
  register,
  errors,
  // isCheckingAvailability = false,
  // checkIfEmailAvaillable = () => true,
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
          // validate: {
          //   checkAvailability: async email =>
          //     await checkIfEmailAvaillable(email),
          // },
        })}
        required
        placeholder='example@domain.com'
      />
      <div className={css.messageBox}>
        {!!errors.email && (
          <p className={formCss.fail}>{errors.email.message}</p>
        )}
      </div>
    </div>
  );
}

export default EmailGroup;
