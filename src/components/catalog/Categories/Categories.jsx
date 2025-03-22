import css from './Categories.module.css';
import Icon from '../../reusable-global/Icon/Icon';
import Modal from '../../userControls/reusable/Modal/Modal';
import MediaQuery from 'react-responsive';
import CloseButton from '../../pageModals/CloseButton/CloseButton';
import CategoryList from '../CategoryList/CategoryList';

function Categories({
  isModalOpen,
  categoriesWithAllCategoriesItem,
  currentCategoryId,
  selectCategory,
  setIsModalOpen,
}) {
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
              categoriesWithAllCategoriesItem={categoriesWithAllCategoriesItem}
              currentCategoryId={currentCategoryId}
            />
          </div>
        </Modal>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <CategoryList
          categoriesWithAllCategoriesItem={categoriesWithAllCategoriesItem}
          currentCategoryId={currentCategoryId}
        />
      </MediaQuery>
    </>
  );
}

export default Categories;
