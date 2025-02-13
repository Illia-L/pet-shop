import Loader from '../Loader/Loader';
import styles from './Form.module.css';

function Form({
  title,
  submitCaption,
  handleSubmit,
  processSubmit,
  isLoading,
  children,
}) {
  return (
    <>
      <form
        action='#'
        method='post'
        className={styles.form}
        onSubmit={handleSubmit(processSubmit)}
        noValidate
      >
        <h2 className={styles.title}>{title}</h2>

        {children}

        <button
          type='submit'
          className={styles.btn}
          disabled={isLoading}
        >
          {submitCaption}
        </button>
      </form>
      {isLoading && <Loader />}
    </>
  );
}

export default Form;
