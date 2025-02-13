import { Link } from 'react-router-dom';
import styles from '../../reusable/Form/Form.module.css'

function InvalidTokenMessage() {
  return (
    <>
      <p className={styles.failStandalone}>
        Це посилання не є дійсним або термін його дії минув.
      </p>

      <Link
        to='../forgot-password'
        className={styles.link}
      >
        Отримати нове посилання
      </Link>
    </>
  );
}

export default InvalidTokenMessage;
