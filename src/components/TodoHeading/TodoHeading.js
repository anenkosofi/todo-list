import { List, Item } from './TodoHeading.styled';

const headingArray = ['id', 'title', 'description', 'status'];

export const TodoHeading = () => {
  return (
    <List>
      {headingArray.map(item => (
        <Item key={item}>{item}</Item>
      ))}
    </List>
  );
};
