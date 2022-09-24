import React, { useRef, useContext } from 'react';

import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos.context';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const sumbitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // Throw An Error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={sumbitHandler}>
      <label className={classes.label} htmlFor='text'>
        Todo text
      </label>
      <input
        className={classes.input}
        type='text'
        id='text'
        ref={todoTextInputRef}
      ></input>
      <button className={classes.button}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
