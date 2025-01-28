import styles from './Categories.module.css';

function Categories({ categories, currentCategoryId, selectCategory }) {
  const getButtonStyles = categoryId => styles.button + ' ' + (`${categoryId}` === `${currentCategoryId}` ? styles.current : '')

  return (
    <ul className={styles.categories}>
      <li
        className={styles.item}
        key={'category-all'}
      >
        <button
          className={getButtonStyles('')}
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
            className={getButtonStyles(cat.id)}
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
