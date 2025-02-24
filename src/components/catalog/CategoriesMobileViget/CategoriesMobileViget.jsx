import Icon from '../../reusable-global/Icon/Icon';
import css from './CategoriesMobileViget.module.css'

function CategoriesMobileViget({currentCategoryName, setIsModalOpen}) {
  return (
    <div className={css.viget}>
      <span>{currentCategoryName}</span>
      <button
        type='button'
        onClick={() => setIsModalOpen(true)}
      >
        <Icon
          id='icon-chevron-right'
          width={10}
          height={16}
        />
      </button>
    </div>
  );
}

export default CategoriesMobileViget;
