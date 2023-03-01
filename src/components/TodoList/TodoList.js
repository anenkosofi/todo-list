import PropTypes from 'prop-types';

import { TodoItem } from 'components/TodoItem';

import { List } from './TodoList.styled';

export const TodoList = ({ items, onChange, onOpen }) => {
  return (
    <List>
      {items.map(item => (
        <TodoItem
          key={item.id}
          todo={item}
          onChange={onChange}
          onOpen={onOpen}
        />
      ))}
    </List>
  );
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }))
    .isRequired,
  onChange: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};
