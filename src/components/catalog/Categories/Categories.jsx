import css from './Categories.module.css';
import Icon from '../../reusable-global/Icon/Icon';
import Modal from '../Modal/Modal';

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
      >
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
