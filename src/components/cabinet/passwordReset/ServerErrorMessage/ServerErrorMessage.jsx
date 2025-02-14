import { Link } from 'react-router-dom';
import styles from '../../reusable/Form/Form.module.css';
import individualStyles from './ServerErrorMessage.module.css';

console.log(individualStyles.link);

function ServerErrorMessage({ sendVerifyTokenRequest }) {
  return (
    <>
      <p className={styles.failStandalone}>
        Щось пішло не так. Спробуйте пізніше.
      </p>
      <button
        type='button'
        className={`${styles.btn} ${styles.center}`}
        onClick={sendVerifyTokenRequest}
      >
        Спробувати ще
      </button>
      <Link
        to='../forgot-password'
        className={`${styles.link} ${individualStyles.link}`}
      >
        Отримати нове посилання
      </Link>
    </>
  );
}

export default ServerErrorMessage;
