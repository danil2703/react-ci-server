import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import './Modal.scss';

export const Modal = React.memo((props) => {
  const { onClose, children } = props;
  const modalData = useSelector((state) => state.modal);

  const { open, title, text, type } = modalData;

  const onKeydown = useCallback(({ key }) => {
    if (key === 'Escape') {
      onClose();
    }
  });

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  if (!open) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
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
