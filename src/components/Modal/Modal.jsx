import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import './Modal.scss';

export const Modal = React.memo((props) => {
  const { onClose, children } = props;
  const modalData = useSelector((state) => state.modal);

  const { open, title, text, type } = modalData.payload;

  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal_dialog">
        <h3 className="modal_title">{title}</h3>
        <p className="modal_text">{text}</p>
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
