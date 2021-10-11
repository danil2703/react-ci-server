import React, { useCallback, useEffect } from 'react';
import './Modal.scss';

export const Modal = React.memo((props) => {
  const { visible = false, title = '', text = '', onClose, children } = props;

  const onKeydown = useCallback(({ key }) => {
    if (key === 'Escape') {
      onClose();
    }
  });

  const modalDialogOnClick = useCallback((e) => {
    e.stopPropagation()
  })

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  if (!visible) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__dialog" onClick={modalDialogOnClick}>
        <h3 className="modal__title">{title}</h3>
        <p className="modal__text">{text}</p>
        {children}
      </div>
    </div>
  );
});
