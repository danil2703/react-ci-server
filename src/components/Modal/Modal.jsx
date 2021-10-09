import React, { useCallback, useEffect } from 'react';
import './Modal.scss';

export const Modal = React.memo((props) => {
  const { visible = false, title = '', text = '', onClose, children } = props;

  const onKeydown = useCallback(({ key }) => {
    if (key === 'Escape') {
      onClose();
    }
  });

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  if (!visible) return null;

  return (
    <div className="modal">
      <div className="modal_dialog">
        <h3 className="modal_title">{title}</h3>
        <p className="modal_text">{text}</p>
        {children}
      </div>
    </div>
  );
});
