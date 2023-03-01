import { useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoHeading } from './TodoHeading';
import { TodoList } from './TodoList';
import { TodoModal } from './TodoModal';

import { GlobalStyle } from './GlobalStyle';
import { Wrapper } from './App.styled';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState({});

  const addTodo = todo => {
    const id = !todos.length ? 1 : todos[todos.length - 1].id + 1;

    const newTodo = { id, ...todo };
    setTodos(prevState => [...prevState, newTodo]);
  };

  const toggleStatus = todoId => {
    if (Object.keys(modal).length !== 0) {
      setTodos(prevState =>
        prevState.map(todo =>
          todo.id === todoId ? { ...todo, status: !todo.status } : todo
        )
      );
      setModal(prevState => {
        return { ...prevState, status: !prevState.status };
      });
      return;
    }
    setTodos(prevState =>
      prevState.map(todo =>
        todo.id === todoId ? { ...todo, status: !todo.status } : todo
      )
    );
    setModal({});
  };

  const openModal = id => {
    setModal(todos.find(todo => todo.id === id));
  };

  const closeModal = () => {
    setModal({});
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <TodoForm onSubmit={addTodo} />
      <TodoHeading />
      <TodoList items={todos} onChange={toggleStatus} onOpen={openModal} />
      {Object.keys(modal).length !== 0 && (
        <TodoModal onClose={closeModal} item={modal} onChange={toggleStatus} />
      )}
    </Wrapper>
  );
};
