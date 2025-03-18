import css from './Categories.module.css';
import Icon from '../../reusable-global/Icon/Icon';
import Modal from '../../pageModals/Modal/Modal';
import MediaQuery from 'react-responsive';
import CloseButton from '../../pageModals/CloseButton/CloseButton';

function Categories({
  isModalOpen,
  categoriesWithAllCategoriesItem,
  currentCategoryId,
  selectCategory,
  setIsModalOpen,
}) {
  const getButtonStyles = categoryId =>
    css.button +
    ' ' +
    (`${categoryId}` === `${currentCategoryId}` ? css.current : '');

  const modalStyles = css.modal + ' ' + (isModalOpen ? css.open : '');

  function handleSelectCategory(id) {
    selectCategory(id);
    setIsModalOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalClass={css.modal}
      >
        <MediaQuery maxWidth={767}>
          <CloseButton
            icon='chevron'
            setIsOpen={setIsModalOpen}
          />

          <h2 className={css.title}>
            <span>Категорії</span>
          </h2>
        </MediaQuery>

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
      </Modal>
    </>
  );
}

export default Categories;
