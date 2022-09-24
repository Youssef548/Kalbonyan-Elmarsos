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
  const todoEl = document.querySelector('#todos');
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  todoEl.innerHTML = '';
  todoEl.appendChild(generateSummaryDOM(incompleteTodos));

  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo) => {
      todoEl.appendChild(generateTodoDOM(todo));
    });
  } else {
    const messageEl = document.createElement('p');
    messageEl.classList.add('empty-message');
    messageEl.textContent = 'No to-dos to show';
    todoEl.appendChild(messageEl);
  }
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
  const todoEl = document.createElement('label');
  const containerEL = document.createElement('div');
  const checkBox = document.createElement('input');
  const todoText = document.createElement('span');
  const removeBtn = document.createElement('removeBtn');

  // Setup checkBox
  checkBox.setAttribute('type', 'checkbox');
  checkBox.checked = todo.completed;
  checkBox.addEventListener('change', () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  containerEL.appendChild(checkBox);

  // Setup todoText
  todoText.textContent = todo.text;
  containerEL.appendChild(todoText);
  todoEl.appendChild(containerEL);

  // Setup removeBtn
  removeBtn.textContent = 'remove';
  removeBtn.classList.add('button', 'button--text');
  todoEl.appendChild(removeBtn);
  removeBtn.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // Setupt Container
  todoEl.classList.add('list-item');
  containerEL.classList.add('list-item__container');

  return todoEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2');
  const plural = incompleteTodos.length === 1 ? '' : 's';
  summary.classList.add('list-title');
  summary.textContent = `You have ${incompleteTodos.length} todos left todo${plural} left`;
  return summary;
};
