import { Item } from './TodoItem.styled';
import PropTypes from 'prop-types';

export const TodoItem = ({
  todo: { id, title, description, status },
  onChange,
  onOpen,
}) => {
  const adaptString = string => {
    if (string.length > 16) {
      return string.slice(0, 16) + '...';
    }
    return string;
  };
  return (
    <Item onClick={() => onOpen(id)}>
      <p>{id}.</p>
      <p>{adaptString(title)}</p>
      <p>{adaptString(description)}</p>
      <div>
        <input type="checkbox" checked={status} onChange={() => onChange(id)} />
      </div>
    </Item>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};
