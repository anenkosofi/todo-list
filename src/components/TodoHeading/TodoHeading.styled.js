import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  padding: 16px 0;
  width: 180px;

  font-size: 16px;
  text-align: center;
  text-transform: uppercase;

  background-color: rgba(191, 191, 191, 0.1);
`;

export { List, Item };
