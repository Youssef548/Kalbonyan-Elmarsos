import { getTodos, toggleTodo, removeTodo } from "./todos";
import { getFilters } from "./filters";


const renderTodos = () => {
  const todoEl = document.querySelector('#todos');
  const { searchText, hideCompleted } = getFilters()
  const filteredTodos = getTodos().filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const hideCompletedMatch = !hideCompleted || !todo.completed;
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
    renderTodos();
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
    renderTodos();
  });

  // Setupt Container
  todoEl.classList.add('list-item');
  containerEL.classList.add('list-item__container');

  return todoEl;
};


const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2');
  const plural = incompleteTodos.length === 1 ? '' : 's';
  summary.classList.add('list-title');
  summary.textContent = `You have ${incompleteTodos.length} todos left todo${plural} left`;
  return summary;
};
// Make sure to set up the exports

export { renderTodos, generateTodoDOM, generateSummaryDOM }