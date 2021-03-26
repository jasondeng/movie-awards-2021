import React, { useEffect } from 'react';

import './ResultsModal.scss';

const Modal = ({ closeModal }) => {
  useEffect(() => {
    const keyListener = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };

    document.addEventListener('keydown', keyListener);

    return () => document.removeEventListener('keydown', keyListener);
  });

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-content">SUCCESS!</div>
      <span className="close" onClick={closeModal}>
        X
      </span>
    </div>
  );
};

export default Modal;
