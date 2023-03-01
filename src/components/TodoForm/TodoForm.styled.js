import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 32px;

  padding: 20px;
  width: 100%;
`;
const Field = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Error = styled.p`
  position: absolute;
  bottom: -50%;
  left: 0;
  transform: translateY(-50%);

  font-size: 12px;

  color: red;
  ${props => {
    return props.error ? 'opacity: 1' : 'opacity: 0';
  }}
`;

const Label = styled.label`
  padding: 2px;

  font-size: 16px;

  color: #212121;
`;

const Input = styled.input`
  padding: 8px;
  width: 360px;
  height: 30px;

  color: #010101;
  background-color: transparent;
  border: 1px solid rgb(200, 200, 200);
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:not(:placeholder-shown) {
    border-color: #010101;
  }

  ${props => {
    return props.error
      ? 'border-color: red'
      : 'border-color: rgb(200, 200, 200)';
  }};
`;

const Button = styled.button`
  min-width: 120px;
  height: 30px;

  font-size: 16px;

  color: #010101;
  background-color: #ededed;
  border: 1px solid rgb(200, 200, 200);
  cursor: pointer;
`;

export { Form, Field, Error, Label, Input, Button };
