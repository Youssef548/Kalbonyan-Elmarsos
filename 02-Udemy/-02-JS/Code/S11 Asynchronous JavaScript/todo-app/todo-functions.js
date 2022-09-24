'use strict';
// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');

  return todosJSON ? JSON.parse(todosJSON) : [];
};

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector('#todos').innerHTML = '';
  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach((todo) => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
};

// Remove Todo function

const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    return todos.splice(todoIndex, 1);
  }
};
// toggleTodo

const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
  }
};

// Get the DOM elements for an intodoElidual note

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('div');
  const checkBox = document.createElement('input');
  const todoText = document.createElement('span');
  const button = document.createElement('button');

  // Setup checkBox
  checkBox.setAttribute('type', 'checkbox');
  checkBox.checked = todo.completed;
  checkBox.addEventListener('change', () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  todoEl.appendChild(checkBox);

  // Setup todoText
  todoText.textContent = todo.text;
  todoEl.appendChild(todoText);

  // Setup button
  button.textContent = 'x';
  todoEl.appendChild(button);
  button.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
