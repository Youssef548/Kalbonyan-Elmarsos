const todo = {
  id: 'asdasdaf',
  text: 'pay the fills',
  completed: false
}

const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`)
}
printTodo(todo);

const { text: todoText, completed, details = 'No Details Provided', ...others } = todo;

console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)

const age = [65, 0, 13]
const [firstAge, ...otherAges] = age
console.log(firstAge);
console.log(otherAges)