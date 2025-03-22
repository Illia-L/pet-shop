import css from './CategoryList.module.css';

function CategoryList({ currentCategoryId, categoriesWithAllCategoriesItem }) {
  const getButtonStyles = categoryId =>
    css.button +
    ' ' +
    (`${categoryId}` === `${currentCategoryId}` ? css.current : '');

  return (
    <ul className={css.list}>
      {categoriesWithAllCategoriesItem.map(cat => (
        <li
          className={css.item}
          key={'category-' + cat.id}
        >
          <button
            type='button'
            className={getButtonStyles(cat.id)}
            onClick={() => handleSelectCategory(cat.id)}
          >
            {cat.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
