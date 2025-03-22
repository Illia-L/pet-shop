import { useState } from 'react';
import formCss from '../css/form.module.css'
import styles from './Form/Form.module.css'
import { isEmailRegistered, isServerError } from '../../../fake-data';
import EmailGroup from './EmailGroup/EmailGroup';
import Loader from '../../reusable-global/Loader/Loader';

function AvailableEmail({ register, errors, trigger, isLoading }) {
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);

  async function checkIfEmailAvaillable(email) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isServerError(email)) return reject('error');
        if (isEmailRegistered(email)) return reject('fail');

        resolve();
      }, 800);
    });

    setIsCheckingAvailability(true);

    try {
      await promise;

      return true;
    } catch (err) {
      const message =
        err === 'fail'
          ? 'Ця пошта вже зареєстрована'
          : 'Щось пішло не так. Спробуйте пізніше';

      return message;
    } finally {
      setIsCheckingAvailability(false);
    }
  }

  async function checkIfEmailAvaillableWithDelay(email) {
    return new Promise(resolve => {
      setTimeout(async () => {
        const result = await checkIfEmailAvaillable(email);

        resolve(result);
      }, 500);
    });
  }

  let message = '';

  // if (errors.email)
  //   message = <p className={styles.fail}>{errors.email?.message}</p>;
  
  if (isCheckingAvailability) message = <Loader isSmall='true' />;


  return (
    <>
      <EmailGroup
        register={register}
        errors={errors}
        trigger={trigger}
        isLoading={isLoading}
        isCheckingAvailability={isCheckingAvailability}
        checkIfEmailAvaillableWithDelay={checkIfEmailAvaillableWithDelay}
      />

      <div className={formCss.loaderContainer}>{message}</div>
      {/* {isCheckingAvailability && <Loader isSmall='true' />}
      {!!errors.email && <p className={styles.fail}>{errors.email?.message}</p>} */}
    </>
  );
}

export default AvailableEmail;
