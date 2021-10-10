import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import './Modal.scss';

export const Modal = React.memo((props) => {
  const { onClose, children } = props;
  const modalData = useSelector((state) => state.modal);

  const { open, title, text, type } = modalData;

  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal__dialog">
        <h3 className="modal__title">{title}</h3>
        <p className="modal__text">{text}</p>
        {type === 'error' ? (
          <Button onClick={onClose} color="secondary">
            Ok
          </Button>
        ) : (
          children
        )}
      </div>
    </div>
  );
});
