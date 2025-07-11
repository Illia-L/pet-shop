import clsx from 'clsx';
import formCss from '../../css/form.module.css';
import css from '../Form/Form.module.css';
import { useId } from 'react';

function InputGroup({
  inputName,
  type = 'text',
  labelText = '',
  placeholder = '',
  register,
  errors = {},
  isFormSubmitted,
}) {
  const imputId = useId();

  console.log({ isFormSubmitted, errors });

  const isValid = isFormSubmitted && !errors[inputName];
  const isInvalid = !!errors[inputName];

  return (
    <div className={formCss.inputGroup}>
      <label
        className={formCss.label}
        htmlFor={imputId}
      >
        {labelText}
      </label>

      <input
        className={clsx(
          formCss.input,
          isValid && formCss.inputValid,
          isInvalid && formCss.inputInvalid
        )}
        type={type}
        id={imputId}
        {...register(inputName)}
        required
        placeholder={placeholder}
      />
      <div className={clsx(css.messageBox, formCss.fail)}>
        {isInvalid ? <p>{errors[inputName].message}</p> : <span>&nbsp;</span>}
      </div>
    </div>
  );
}

export default InputGroup;
