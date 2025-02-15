import styles from './Loader.module.css'

function Loader({isSmall = false}) {
  return (
    <div className={`${styles.loader} ${isSmall ? styles.small : ''}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
