import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos.context';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos></Todos>
    </TodosContextProvider>
  );
}

export default App;
