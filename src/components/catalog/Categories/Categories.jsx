import css from './Categories.module.css';
import Icon from '../../reusable-global/Icon/Icon';
import Modal from '../../userControls/reusable/Modal/Modal';
import MediaQuery from 'react-responsive';
import CloseButton from '../../pageModals/CloseButton/CloseButton';
import CategoryList from '../CategoryList/CategoryList';
import { useState } from 'react';
import { useEffect } from 'react';
import * as api from '../../../api';

const allCategoriesObj = { id: '', title: 'Всі категорії' };

function Categories({
  isModalOpen,
  categories,
  currentCategoryId,
  setCategories,
  selectCategory,
  setIsModalOpen,
}) {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  async function fetchAndSetCategories() {
    try {
      setIsPending(false);
      setIsError(false);

      const categories = await api.getCategories();

      categories.unshift(allCategoriesObj);
      setCategories([...categories]);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  }

  useEffect(() => {
    fetchAndSetCategories();
  }, []);
  // const modalStyles = css.modal + ' ' + (isModalOpen ? css.open : '');

  function handleSelectCategory(id) {
    selectCategory(id);
    setIsModalOpen(false);
  }

  return (
    <>
      <MediaQuery maxWidth={767}>
        <Modal isOpen={isModalOpen}>
          <div className={css.container}>
            <CloseButton
              icon='chevron'
              setIsOpen={setIsModalOpen}
            />
            <h2 className={css.title}>
              <span>Категорії</span>
            </h2>
            <CategoryList
              // categoriesWithAllCategoriesItem={categoriesWithAllCategoriesItem}
              categories={categories}
              isError={isError}
              isPending={isPending}
              // setCategories={setCategories}
              currentCategoryId={currentCategoryId}
              handleSelectCategory={handleSelectCategory}
            />
          </div>
        </Modal>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <CategoryList
          // categoriesWithAllCategoriesItem={categoriesWithAllCategoriesItem}
          categories={categories}
          isError={isError}
          isPending={isPending}
          // setCategories={setCategories}
          currentCategoryId={currentCategoryId}
          handleSelectCategory={handleSelectCategory}
        />
      </MediaQuery>
    </>
  );
}

export default Categories;
