import styles from './Categories.module.css';

function Categories({ categories, selectCategory }) {
  return (
    <ul className={styles.categories}>
      <li
        className={styles.item}
        key={'category-all'}
      >
        <button
          className={styles.button}
          onClick={() => selectCategory(null)}
        >
          Всі категорії
        </button>
      </li>
      {categories.map(cat => (
        <li
          className={styles.item}
          key={'category-' + cat.id}
        >
          <button
            className={styles.button}
            onClick={() => selectCategory(cat.id)}
          >
            {cat.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
