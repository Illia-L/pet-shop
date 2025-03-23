import ReactModal from "react-modal";
import BasketList from "../BasketList/BasketList";
import BasketEmpty from "../BasketEmpty/BasketEmpty";
import { useSelector } from "react-redux";
import css from './ModalBasket.module.css';

ReactModal.setAppElement('#root');

export default function ModalBasket ({ onClose }) {
  const products = useSelector((state) => state.products.items);

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
    {products.length > 0 ? <BasketList onClose={onClose}/> : <BasketEmpty onClose={onClose}/>}
    </ReactModal>
  );
}