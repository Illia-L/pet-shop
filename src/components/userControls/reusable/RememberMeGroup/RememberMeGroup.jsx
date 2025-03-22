import styles from '../Form/Form.module.css';

function RememberMeGroup({ register }) {
  return (
    <div className={styles.group + ' ' + styles.rememberGroup}>
      <input
        className={styles.rememberInput}
        type='checkbox'
        id='remember'
        {...register('remember')}
      />
      <label
        className={styles.label + ' ' + styles.rememberLabel}
        htmlFor='remember'
      >
        Запам'ятати мене
      </label>
    </div>
  );
}

export default RememberMeGroup;
