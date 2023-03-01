import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Field, Error, Label, Input, Button } from './TodoForm.styled';

export const TodoForm = ({ onSubmit }) => {
  const [formdata, setFormdata] = useState({ title: '', description: '' });
  const [error, setError] = useState(false);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    setFormdata(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formdata.title || !formdata.description) {
      return setError(true);
    }

    const newTodo = {
      ...formdata,
      status: false,
    };

    onSubmit(newTodo);
    setError(false);

    setFormdata({ title: '', description: '' });
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Field>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Enter title"
          onChange={handleChange}
          value={formdata.title}
          error={error}
        />
        <Error error={error}>This field is empty</Error>
      </Field>
      <Field>
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          name="description"
          type="text"
          placeholder="Enter description"
          onChange={handleChange}
          value={formdata.description}
          error={error}
        />
        <Error error={error}>This field is empty</Error>
      </Field>
      <Button type="submit">Create</Button>
    </Form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
