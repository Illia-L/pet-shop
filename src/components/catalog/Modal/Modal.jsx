import Icon from '../../reusable-global/Icon/Icon';
import css from './Modal.module.css';

function Modal({ isOpen, setIsOpen, children }) {
  const modalStyles = css.modal + ' ' + (isOpen ? css.open : '');

  return (
    <div className={modalStyles}>
      <h2 className={css.modalTitle}>
        <button
          type='button'
          className={css.btnClose}
          onClick={() => setIsOpen(false)}
        >
          <Icon
            id='icon-chevron-left'
            width={10}
            height={16}
          />
        </button>
        <span>Категорії</span>
      </h2>

      {children}
    </div>
  );
}

export default Modal;
