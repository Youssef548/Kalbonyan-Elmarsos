// challenge

const todos = [
  {
    text: "Order cat food",
    completed: false,
  },
  { text: "Clean Kitchen", completed: true },

  { text: "Buy food", completed: true },
  { text: "Do work", completed: false },
  { text: "Exercise", completed: true },
];

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

const deleteTodo = function (todos, todosText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todosText.toLowerCase();
  });
  if (index > -1) {
    return todos.splice(index, 1);
  }
};

const getThingsToDo = function (todos) {
  return todos.filter(function (note) {
    return !note.completed;
  });
};

sortTodos(todos);
console.log(todos);

// console.log(getThingsToDo(todos));

// deleteTodo(todos, "Clean Kitchen");
// console.log(todos);
