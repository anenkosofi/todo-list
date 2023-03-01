import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, ModalWindow } from './TodoModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const TodoModal = ({
  item: { id, title, description, status },
  onClose,
  onChange,
}) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <h1>{title}</h1>
        <p>Decription: {description}</p>
        <div>
          Status:{' '}
          <input
            type="checkbox"
            checked={status}
            onChange={() => onChange(id)}
          />
        </div>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

TodoModal.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
