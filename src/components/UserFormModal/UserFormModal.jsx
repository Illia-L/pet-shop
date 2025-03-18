import Icon from '../reusable-global/Icon/Icon';
import css from './UserFormModal.module.css';

function UserFormModal({ children }) {
  return (
    <div className={css.modal}>
      <button type='button'></button>

      <Icon
        id='icon-full-logo'
        width={123}
        height={84}
      />

      {children}
    </div>
  );
}

export default UserFormModal;
