import Icon from '../../../reusable-global/Icon/Icon';
import css from './CloseButton.module.css';

function CloseButton({ setModalComponent, side, icon }) {
  return (
    <button
      type='button'
      className={css.button + ' ' + (side === 'right' ? css.right : '')}
      onClick={() => setModalComponent(null)}
    >
      <Icon
        id={icon === 'chevron' ? 'icon-chevron-left' : 'icon-close'}
        width={16}
        height={16}
      />
    </button>
  );
}

export default CloseButton;
