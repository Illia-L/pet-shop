import { useState } from 'react';
import Icon from '../../reusable-global/Icon/Icon';
import css from './Modal.module.css';
import MediaQuery from 'react-responsive';

function Modal({ isOpen, children, modalClass }) {
  const modalStyles =
    css.modal + ' ' + (isOpen ? css.open : '') + ' ' + modalClass;

  return <div className={modalStyles}>{children}</div>;
}

export default Modal;
