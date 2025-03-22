import ReactModal from 'react-modal';
import css from './Modal.module.css';
import { useBodyScrollLock } from '../../../../utils/helpers';
import { useMediaQuery } from 'react-responsive';
import CloseButton from '../CloseButton/CloseButton';
import Icon from '../../../reusable-global/Icon/Icon';

function Modal({ isOpen, setModalComponent, boxCss = '', children }) {
  useBodyScrollLock(isOpen);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <ReactModal
      isOpen={isOpen}
      className={{
        base: css.modalContent + ' ' + boxCss,
        afterOpen: css.modalContentAfterOpen,
        beforeClose: css.modalContentBeforeClose,
      }}
      overlayClassName={{
        base: css.modalOverlay,
        afterOpen: css.modalOverlayAfterOpen,
        beforeClose: css.modalOverlayBeforeClose,
      }}
      closeTimeoutMS={200}
    >
      <CloseButton
        icon={isMobile ? 'chevron' : 'cross'}
        setModalComponent={setModalComponent}
        side={isMobile ? 'left' : 'right'}
      />

      <Icon
        id='icon-full-logo-orange'
        width={123}
        height={84}
        iconClass={css.logo}
      />

      {children}
    </ReactModal>
  );
}

export default Modal;
