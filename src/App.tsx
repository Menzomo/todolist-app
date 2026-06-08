
import TodoForm from './components/todoForm'
import TodoHeader from './components/todoHeader'
import TodoList from './components/TodoList'

import { TodoContainer } from './components/TodoContainer'
import { useTodo } from './hooks/useTodo'



function App() {
const{addTodo,
toggleTodoCompleted,
filteredTodos,
setFilter,
filter,
clearCompleted,
removeTodo} = useTodo()
  return (

    <TodoContainer>
      <TodoHeader />
      <TodoForm addTodo={addTodo} />
      <TodoList todoList={filteredTodos} toggleTodoCompleted={toggleTodoCompleted} setFilter={setFilter} filter={filter} clearCompleted={clearCompleted} removeTodo={removeTodo} />
    </TodoContainer>
  )
}


export default App
