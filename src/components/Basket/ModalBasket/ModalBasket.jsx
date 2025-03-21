import ReactModal from "react-modal";
import BasketList from "../BasketList/BasketList";
import css from './ModalBasket.module.css';

ReactModal.setAppElement('#root');

export default function ModalBasket ({ onClose }) {
  return (
    <ReactModal
      isOpen={true}
      overlayClassName={{
        base: css.modalContainer,
        afterOpen: css.afterModalContainerOpen,
        beforeClose: css.beforeModalContainerClose,
      }}
      className={{
        base: css.modalContent,
        afterOpen: css.afterModalContentOpen,
        beforeClose: css.beforeModalContentClose,
      }}
      closeTimeoutMS={500}
      onRequestClose={onClose}>
    <BasketList onClose={onClose} />
    </ReactModal>
  );
}