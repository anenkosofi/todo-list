import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: stretch;

  p,
  div {
    padding: 24px 0;
    width: 180px;

    font-size: 16px;
    text-align: center;

    background-color: rgba(191, 191, 191, 0.5);
  }

  input {
    width: 20px;
    height: 20px;
  }
`;
