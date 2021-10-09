import React, { useEffect } from 'react';
import './Modal.scss';
import { TextField } from '../TextField/TextField';
import { Button } from '../Button/Button';

export const Modal = React.memo((props) => {
  const { visible = false, title = '', text = '', onClose } = props;

  const onKeydown = ({ key }) => {
    if (key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  if (!visible) return null;

  return (
    <div className="modal" onClick={onClose} onKeyDown={onClose}>
      <div
        className="modal_dialog"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <h3 className="modal_title">{title}</h3>
        <p className="modal_text">{text}</p>
        <TextField className="modal_input" placeholder="Commit hash" />
        <div>
          <Button className="modal_submit">Run build</Button>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
});
