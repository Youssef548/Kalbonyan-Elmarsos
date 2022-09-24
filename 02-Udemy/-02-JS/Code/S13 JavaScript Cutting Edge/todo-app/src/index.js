// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage


import { renderTodos } from "./views"
import { getFilters, setFilters } from "./filters"
import { createTodo, loadTodos } from "./todos"
renderTodos();

document.querySelector('#search-text').addEventListener('input', (e) => {

    getFilters().searchText = e.target.value;
    setFilters({
        searchText: e.target.value
    })
    renderTodos();
});



document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim();

    e.preventDefault();
    if (text.length > 0) {
        createTodo(text)
        renderTodos();
        e.target.elements.text.value = '';
    }
});

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked,
    })
    renderTodos();
});

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos();
    }
})
