import { useContext } from 'react';
import React from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos.context';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
