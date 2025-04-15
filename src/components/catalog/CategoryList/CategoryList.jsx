import { useState } from 'react';
import * as api from '../../../api';
import Loader from '../../reusable-global/Loader/Loader';
import css from './CategoryList.module.css';
import { useEffect } from 'react';

const allCategoriesObj = { id: '', title: 'Всі категорії' };

function CategoryList({
  categories,
  isError,
  isPending,
  currentCategoryId,
  handleSelectCategory,
}) {
  // const [categories, setCategories] = useState([]);
  // const [isPending, setIsPending] = useState(false);
  // const [isError, setIsError] = useState(false);

  // async function fetchAndSetCategories() {
  //   try {
  //     setIsPending(false);
  //     setIsError(false);

  //     const categories = await api.getCategories();

  //     categories.unshift(allCategoriesObj);
  //     setCategories(categories);
  //   } catch (err) {
  //     setIsError(true);
  //   } finally {
  //     setIsPending(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchAndSetCategories();
  // }, []);

  const getButtonStyles = categoryId =>
    css.button +
    ' ' +
    (`${categoryId}` === `${currentCategoryId}` ? css.current : '');

  if (isPending) return <Loader />;

  if (isError)
    return <p>Failed to load categories. Please, try to refresh the page.</p>;

  return (
    <ul className={css.list}>
      {categories.map(cat => (
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
