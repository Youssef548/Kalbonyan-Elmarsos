const todos = [
  {
    text: 'Order cat food',
    completed: false,
  },
  { text: 'Clean Kitchen', completed: true },

  { text: 'Buy food', completed: true },
  { text: 'Do work', completed: false },
  { text: 'Exercise', completed: true },
];

const filter = {
  searchText: '',
  hideCompleted: false,
};

const renderTodos = function (todos, filter) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filter.searchText.toLowerCase());
    const hideCompletedMatch = !filter.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';

  const summary = document.createElement('h2');
  summary.textContent = `You Have ${incompleteTodos.length} todos left`;
  document.querySelector('#todos').appendChild(summary);

  filteredTodos.forEach(function (todo) {
    const todoP = document.createElement('p');
    todoP.textContent = todo.text;
    document.querySelector('#todos').appendChild(todoP);
  });
};
renderTodos(todos, filter);

document.querySelector('#newTodoText').addEventListener('input', function (e) {
  filter.searchText = e.target.value;
  renderTodos(todos, filter);
});

document.querySelector('#todo-form').addEventListener('submit', function (e) {
  e.preventDefault(false);
  todos.push({
    text: e.target.elements.textForm.value,
    completed: false,
  });
  renderTodos(todos, filter);
  e.target.elements.textForm.value = '';
});

document
  .querySelector('#hide-completed')
  .addEventListener('change', function (e) {
    filter.hideCompleted = e.target.checked;
    renderTodos(todos, filter);
  });

// 1. Create a checkbox and setup event listner -> 'Hide completed'
// 2. Create new hideCompleted filter (default false)
// 3. Update hideCompleted an rerender list on checkbox change
// 4. Setup renderTodos to remove completed items
