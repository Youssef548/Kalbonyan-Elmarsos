// Fetch existing todos from localStorage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('todos');

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Render application todos based on filters
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';
  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach(function (todo) {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
};

// Remove Todo function

const removeTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id;
  });

  if (todoIndex > -1) {
    return todos.splice(todoIndex, 1);
  }
};
// toggleTodo

const toggleTodo = function (id) {
  const todo = todos.find(function (todo) {
    return todo.id === id;
  });

  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};

// Get the DOM elements for an intodoElidual note

const generateTodoDOM = function (todo) {
  const todoEl = document.createElement('div');
  const checkBox = document.createElement('input');
  const todoText = document.createElement('span');
  const button = document.createElement('button');

  // Setup checkBox
  checkBox.setAttribute('type', 'checkbox');
  checkBox.checked = todo.completed;
  checkBox.addEventListener('change', function () {
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
  button.addEventListener('click', function () {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
